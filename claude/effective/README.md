# Effective

Compare insurance products, filings, coverage wording and rate changes; review actuarial evidence and prepare working filings with Effective.

Use Effective from Claude to research insurance carriers, MGAs, products, regulatory filings and source documents, or manage working filings and document references.

The included `effective` skill helps translate insurance tasks into supported calls, from comparing competitors to preparing filings and reviewing evidence.

## Connect

Install the plugin, open its Connectors tab, and connect Effective. Sign in with your Effective account and approve the access you want to grant. On a managed organization, an Owner may need to make the connector available first. Authentication uses Effective OAuth.

Your Effective account determines which organization and data you can access. Discovery and some API operations consume Effective credits. Write access additionally requires the appropriate OAuth scope and Effective permissions.

## Try it

- Compare competitors' filed rate changes for a line of business and state, with supporting evidence.
- Compare exclusions and endorsements in two filings, including form numbers and editions.
- Review a filing's actuarial memo and summarize the assumptions behind its rate change.
- Create or update a working filing and organize its document references by schedule.
- Review an objection letter and draft a response, or add the requested comment to a working filing.
- Check available filing pre-review capabilities and summarize the findings.

Available actions depend on the connector's documented endpoints and your account permissions. Preparing a filing workspace does not submit it to a regulator.

The plugin connects to Effective's remote MCP server. It runs no local scripts, hooks or executables. The connector receives the query and inputs needed for each requested task. Discovery sends its query and optional intent to Anthropic Haiku through Vercel AI Gateway; Effective meters that usage. Data returned by Effective is available in the connected Claude conversation.

## Help

Claude setup: https://docs.effectiveai.app/getting-started/claude

API reference: https://docs.effectiveai.app/llms.txt

Support: https://effectiveailabs.com/support · support@effectiveailabs.com

[Privacy policy](https://effectiveailabs.com/privacy) · [Terms of service](https://effectiveailabs.com/terms)

If connection fails, reconnect from the Connectors tab. Use the connector's whoami tool when you need to confirm the connected organization. For access failures, check the account's Effective permissions.
