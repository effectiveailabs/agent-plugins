import { mkdtemp, mkdir, readdir, readFile, copyFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const source = join(root, 'claude/effective');
const output = join(root, 'dist/effective-claude.zip');
const staging = await mkdtemp(join(tmpdir(), 'effective-plugin-'));

async function copyFolder(from, to) {
  await mkdir(to, { recursive: true });
  for (const entry of (await readdir(from, { withFileTypes: true })).sort((a, b) => a.name.localeCompare(b.name))) {
    if (entry.name === '.DS_Store') continue;
    // Eval suites are development-only and must not ship in the upload bundle.
    if (from === source && entry.name === 'evals') continue;
    if (entry.isSymbolicLink()) throw new Error(`Symlinks cannot be bundled: ${entry.name}`);
    const destination = join(to, entry.name);
    if (entry.isDirectory()) await copyFolder(join(from, entry.name), destination);
    else if (entry.isFile()) await copyFile(join(from, entry.name), destination);
    else throw new Error(`Unsupported file: ${entry.name}`);
  }
}

try {
  const manifest = JSON.parse(await readFile(join(source, '.claude-plugin/plugin.json'), 'utf8'));
  if (manifest.name !== 'effective') throw new Error('Expected Effective plugin manifest');
  JSON.parse(await readFile(join(source, '.mcp.json'), 'utf8'));
  await readFile(join(source, 'README.md'));
  await copyFolder(source, staging);
  await copyFile(join(root, 'LICENSE'), join(staging, 'LICENSE'));
  await mkdir(dirname(output), { recursive: true });
  // Remove the old archive so deleted plugin files cannot survive an update.
  await rm(output, { force: true });
  execFileSync('zip', ['-q', '-X', '-r', output, '.'], { cwd: staging, stdio: 'inherit' });
  console.log(output);
} finally {
  await rm(staging, { recursive: true, force: true });
}
