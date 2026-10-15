import { mkdtemp, mkdir, readdir, readFile, copyFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const source = join(root, 'claude/effective');
// `--canary` points the bundled MCP server at the canary deployment instead of production, under its
// own plugin name so it can be installed alongside the production plugin.
const canary = process.argv.includes('--canary');
const canaryMcpUrl = 'https://mcp.canary.effectiveai.app/api/mcp/v2';
const output = join(root, canary ? 'dist/effective-claude-canary.zip' : 'dist/effective-claude.zip');
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
  const mcp = JSON.parse(await readFile(join(source, '.mcp.json'), 'utf8'));
  await readFile(join(source, 'README.md'));
  await copyFolder(source, staging);
  if (canary) {
    for (const server of Object.values(mcp.mcpServers)) server.url = canaryMcpUrl;
    await writeFile(join(staging, '.mcp.json'), `${JSON.stringify(mcp, null, 2)}\n`);
    const canaryManifest = { ...manifest, name: 'effective-canary', displayName: `${manifest.displayName} (Canary)` };
    await writeFile(join(staging, '.claude-plugin/plugin.json'), `${JSON.stringify(canaryManifest, null, 2)}\n`);
  }
  await copyFile(join(root, 'LICENSE'), join(staging, 'LICENSE'));
  await mkdir(dirname(output), { recursive: true });
  // Remove the old archive so deleted plugin files cannot survive an update.
  await rm(output, { force: true });
  execFileSync('zip', ['-q', '-X', '-r', output, '.'], { cwd: staging, stdio: 'inherit' });
  console.log(output);
} finally {
  await rm(staging, { recursive: true, force: true });
}
