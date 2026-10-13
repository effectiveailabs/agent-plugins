# Effective agent plugins

Native integrations for using Effective from agent environments.

## Claude

The [Effective plugin](claude/effective/README.md) connects Claude to Effective through OAuth and the hosted MCP server.

Plugin directory: `claude/effective/`.

## Build an uploadable bundle

Run `npm run bundle` with Node.js and `zip` installed. The script writes
`dist/effective-claude.zip`, with the plugin manifest at the archive root.
Upload it through Claude’s Customize > Plugins > Add > Upload plugin.

This checks the local bundle structure; Claude’s validation and OAuth connection
still need to be tested in the host.

## License

Plugin content and configuration are licensed under MIT. The hosted Effective service and MCP server implementation are maintained separately.
