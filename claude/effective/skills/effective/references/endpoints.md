# Effective API endpoints

Every Effective API endpoint, grouped by area. `discover` ranks endpoints for a task, and `inspect` returns current inputs and responses. In MCP tools, use a path as `effective://api<path>`. With an API key, follow https://docs.effectiveai.app/getting-started/agent-setup.md to call it directly.

## Contents

- [Access](#access)
- [Agent email aliases](#agent-email-aliases)
- [Answers](#answers)
- [Artifacts](#artifacts)
- [Assets](#assets)
- [Carrier groups](#carrier-groups)
- [Carriers](#carriers)
- [Classifications](#classifications)
- [Companies](#companies)
- [Files](#files)
- [Filing objections](#filing-objections)
- [Filings](#filings)
- [Form comparisons](#form-comparisons)
- [Groups](#groups)
- [Insurance Types](#insurance-types)
- [Jurisdictions](#jurisdictions)
- [Loss reviews](#loss-reviews)
- [Managed Filing Checks](#managed-filing-checks)
- [Managed Filings](#managed-filings)
- [Managed Products](#managed-products)
- [Market raters](#market-raters)
- [MGAs](#mgas)
- [NAIC statutory data](#naic-statutory-data)
- [Objections](#objections)
- [OSHA](#osha)
- [Procedure runs](#procedure-runs)
- [Procedure tasks](#procedure-tasks)
- [Procedures](#procedures)
- [Product timelines](#product-timelines)
- [Product types](#product-types)
- [Products](#products)
- [Projects](#projects)
- [Regulatory documents](#regulatory-documents)
- [SERFF Imports](#serff-imports)
- [SERFF Insurance Types](#serff-insurance-types)
- [Sessions](#sessions)
- [Skills](#skills)
- [Underwriting submissions](#underwriting-submissions)
- [Users](#users)
- [Views](#views)
- [Webhooks](#webhooks)
- [Your programs](#your-programs)
- [Your raters](#your-raters)

## Access

- `GET /access/{resource}` — Read a resource access list
- `PUT /access/{resource}` — Replace a resource access list
- `PATCH /access/{resource}` — Change selected resource access

## Agent email aliases

- `GET /agent-email/aliases` — List agent email aliases
- `POST /agent-email/aliases` — Create an agent email alias
- `GET /agent-email/aliases/{alias}` — Get an agent email alias
- `PUT /agent-email/aliases/{alias}` — Replace alias routing config
- `DELETE /agent-email/aliases/{alias}` — Delete an agent email alias

## Answers

- `POST /answers` — Schedule an answer to a question
- `GET /answers/{id}` — Get answer status or completed result

## Artifacts

- `GET /artifacts/{artifactId}` — Get artifact metadata and content links
- `GET /artifacts/{artifactId}/text` — Read a bounded chunk of extracted artifact text
- `GET /artifacts/{artifactId}/download` — Download one immutable artifact version

## Assets

- `POST /assets` — Publish an Asset
- `GET /assets` — List Assets
- `GET /assets/{assetId}` — Get an Asset
- `PATCH /assets/{assetId}` — Update an Asset’s details
- `DELETE /assets/{assetId}` — Unpublish an Asset
- `PUT /assets/{assetId}/content` — Replace an Asset’s content

## Carrier groups

- `GET /insurance/carrier-groups` — List carrier groups
- `GET /insurance/carrier-groups/{id}` — Get a carrier group

## Carriers

- `GET /insurance/carriers` — List carriers
- `GET /insurance/carriers/{id}` — Get a carrier

## Classifications

- `GET /insurance/classifications` — List classification systems
- `GET /insurance/classifications/{system}` — Get one classification system
- `GET /insurance/classifications/{system}/classes` — Find classes in a classification system
- `GET /insurance/classifications/{system}/classes/{code}` — Get one class in a classification system
- `GET /insurance/classifications/{system}/mappings` — Map classes to another classification system

## Companies

- `GET /insurance/managed-filings/companies` — Find companies for filing preparation
- `POST /insurance/managed-filings/companies` — Create a company for filing preparation
- `GET /insurance/managed-filings/companies/{id}` — Get one company for filing preparation

## Files

- `GET /files/{fileId}/download` — Download one immutable file version (Deprecated; works until at least 2027-03-01)
- `GET /files/{fileId}/text` — Read a bounded chunk of existing extracted text (Deprecated; works until at least 2027-03-01)
- `GET /files/{fileId}` — Get file metadata and content links (Deprecated; works until at least 2027-03-01)

## Filing objections

- `GET /insurance/filing-objections` — Find extracted objection letters
- `GET /insurance/filing-objections/{objectionId}` — Read an extracted objection letter

## Filings

- `POST /insurance/filings/search` — Search filings
- `GET /insurance/filings` — List catalog filings
- `GET /insurance/filings/{filingId}` — Get a catalog filing
- `GET /insurance/filings/{filingId}/files` — List stored filing files
- `GET /insurance/filings/{filingId}/forms` — List extracted filing forms
- `GET /insurance/filings/{filingId}/rate-impact` — Get extracted filing rate impact
- `GET /insurance/filings/{filingId}/forms/{id}` — Get one extracted filing form

## Form comparisons

- `POST /insurance/form-knowledge/validate` — Validate knowledge files
- `POST /insurance/form-comparisons` — Request a form comparison
- `GET /insurance/form-comparisons` — List form comparisons
- `GET /insurance/form-comparisons/{id}` — Get a form comparison
- `DELETE /insurance/form-comparisons/{id}` — Delete a form comparison

## Groups

- `GET /groups` — List groups for sharing

## Insurance Types

- `GET /insurance/insurance-types` — List NAIC insurance types
- `GET /insurance/insurance-types/{toiCode}/subtypes` — List subtypes for a NAIC insurance type
- `GET /insurance/insurance-types/{id}` — Get one NAIC insurance type
- `GET /insurance/insurance-types/{toiCode}/subtypes/{id}` — Get one NAIC insurance subtype

## Jurisdictions

- `GET /insurance/managed-filings/jurisdictions` — Find jurisdictions for filing preparation
- `POST /insurance/managed-filings/jurisdictions` — Create a jurisdiction for filing preparation
- `GET /insurance/managed-filings/jurisdictions/{id}` — Get one jurisdiction for filing preparation

## Loss reviews

- `POST /insurance/loss-reviews` — Review supplied loss evidence
- `GET /insurance/loss-reviews` — List loss reviews
- `GET /insurance/loss-reviews/{id}/items` — List saved loss matters
- `GET /insurance/loss-reviews/{id}` — Get a loss review
- `DELETE /insurance/loss-reviews/{id}` — Delete a loss review

## Managed Filing Checks

- `GET /insurance/managed-filings/checks` — List filing checks
- `POST /insurance/managed-filings/checks` — Create an organization filing check
- `GET /insurance/managed-filings/checks/{checkId}` — Read a filing check
- `PATCH /insurance/managed-filings/checks/{checkId}` — Revise filing check instructions
- `POST /insurance/managed-filings/{filingId}/pre-reviews` — Start filing pre-review
- `POST /insurance/managed-filings/{filingId}/pre-reviews/{runId}/resume` — Resume an accepted filing pre-review
- `GET /insurance/managed-filings/{filingId}/pre-reviews/latest` — Read the latest filing pre-review
- `GET /insurance/managed-filings/{filingId}/pre-reviews/{runId}` — Read filing pre-review progress
- `GET /insurance/managed-filings/{filingId}/pre-review-status` — Read combined filing check status

## Managed Filings

- `GET /insurance/managed-filings/requirements` — Find supporting requirements before creating a filing
- `GET /insurance/managed-filings/requirements/{requirementId}` — Read full supporting requirement instructions
- `GET /insurance/managed-filings/{filingId}/requirements` — Find supporting requirements for an existing filing
- `GET /insurance/managed-filings/{filingId}/staging` — Check staging credentials
- `POST /insurance/managed-filings/{filingId}/serff-sync` — Sync a managed filing from SERFF
- `GET /insurance/managed-filings/{filingId}/history` — Read a filing's regulatory history
- `GET /insurance/managed-filings` — List accessible filings
- `POST /insurance/managed-filings` — Create a filing
- `GET /insurance/managed-filings/{filingId}` — Read a filing Record
- `PATCH /insurance/managed-filings/{filingId}` — Edit working filing details
- `GET /insurance/managed-filings/{filingId}/items` — List filing items
- `POST /insurance/managed-filings/{filingId}/items` — Attach a document to a working filing
- `GET /insurance/managed-filings/{filingId}/items/{itemId}` — Get one filing item
- `PATCH /insurance/managed-filings/{filingId}/items/{itemId}` — Edit or replace a working document reference
- `DELETE /insurance/managed-filings/{filingId}/items/{itemId}` — Remove a working filing item
- `GET /insurance/managed-filings/{filingId}/comments` — List filing comments
- `POST /insurance/managed-filings/{filingId}/comments` — Add a filing comment or reply
- `GET /insurance/managed-filings/{filingId}/comments/{commentId}` — Get one filing comment
- `PATCH /insurance/managed-filings/{filingId}/comments/{commentId}` — Edit a comment or update its discussion
- `POST /insurance/managed-filings/{filingId}/uploads` — Upload a filing document
- `POST /insurance/managed-filings/{filingId}/uploads/complete` — Confirm a filing document upload

## Managed Products

- `GET /insurance/managed-filings/products` — Find products for filing preparation
- `POST /insurance/managed-filings/products` — Create a product for filing preparation
- `GET /insurance/managed-filings/products/{id}` — Get one product for filing preparation

## Market raters

- `GET /insurance/rating-programs` — List market raters
- `GET /insurance/rating-programs/{id}` — Get a market rater
- `GET /insurance/rating-programs/{id}/versions/{version}/contract` — Get the input and output schemas of a market rater version
- `POST /insurance/rating-programs/{id}/rate` — Rate a submission with the latest version of a market rater
- `POST /insurance/rating-programs/{id}/versions/{version}/rate` — Rate a submission with a market rater version
- `POST /insurance/rating-programs/plan` — Plan the next question for market rater versions
- `POST /insurance/rating-programs/match` — Match a said or read answer to a planning question
- `POST /insurance/rating-programs/search` — Search the answers of a planning question
- `GET /insurance/rating-programs/{id}/lists/{name}` — Search a long list of the latest version of a market rater
- `GET /insurance/rating-programs/{id}/versions/{version}/lists/{name}` — Search a long list of a market rater version
- `GET /insurance/rating-programs/{id}/versions` — List market rater versions
- `GET /insurance/rating-programs/{id}/versions/{version}` — Get a market rater version
- `GET /insurance/rating-programs/{id}/versions/{version}/download` — Download a market rater version
- `GET /insurance/rating-programs/{id}/versions/{version}/manual-file` — Read a rating manual file
- `GET /insurance/rating-programs/{id}/versions/{version}/export` — Export a rating manual file

## MGAs

- `GET /insurance/mgas` — List MGAs
- `GET /insurance/mgas/{id}` — Get an MGA

## NAIC statutory data

- `GET /insurance/carriers/{carrierId}/state-results` — List a carrier’s state results
- `GET /insurance/carriers/{carrierId}/state-results/{id}` — Get a carrier state result
- `GET /insurance/carriers/{carrierId}/financials` — Get a carrier’s annual financial totals
- `GET /insurance/carriers/{carrierId}/line-results` — List a carrier’s line results
- `GET /insurance/carriers/{carrierId}/line-results/{id}` — Get a carrier line result
- `GET /insurance/carriers/{carrierId}/state-licenses` — List a carrier’s state license observations
- `GET /insurance/carriers/{carrierId}/state-licenses/{id}` — Get a carrier state license observation
- `GET /insurance/carriers/{carrierId}/loss-development/interrogatories` — Get a carrier’s Schedule P interrogatories
- `GET /insurance/carriers/{carrierId}/loss-development` — List a carrier’s Schedule P loss development rows
- `GET /insurance/carriers/{carrierId}/loss-development/{id}` — Get a carrier Schedule P loss development row

## Objections

- `POST /objections/{id}/triage` — Triage an objection
- `GET /objections/{id}/triage/{requestId}` — Read objection triage progress
- `GET /objections/{id}` — Get a workspace objection
- `PATCH /objections/{id}` — Edit a workspace objection
- `DELETE /objections/{id}` — Remove a workspace objection
- `GET /objections/{id}/items/{itemId}` — Get an objection item
- `PATCH /objections/{id}/items/{itemId}` — Edit an objection item or response draft
- `DELETE /objections/{id}/items/{itemId}` — Remove an objection item
- `POST /objections/{id}/items` — Add a regulator request to an objection
- `GET /objections/{id}/items` — List the requests in a workspace objection
- `POST /objections/{id}/uploads` — Upload an objection document
- `POST /objections/{id}/uploads/complete` — Confirm an objection document upload
- `GET /objections/{id}/documents` — List documents attached to an objection
- `POST /objections/{id}/documents` — Attach an existing file to an objection
- `DELETE /objections/{id}/documents/{fileId}` — Remove a document from an objection
- `GET /objections/{id}/items/{itemId}/comments` — Read an objection item discussion timeline
- `POST /objections/{id}/items/{itemId}/comments` — Comment or reply on an objection item
- `GET /objections/{id}/items/{itemId}/comments/{commentId}` — Get one objection item comment
- `PATCH /objections/{id}/items/{itemId}/comments/{commentId}` — Edit a comment or resolve its discussion
- `GET /insurance/managed-filings/{filingId}/objections` — List workspace objections on a filing
- `POST /insurance/managed-filings/{filingId}/objections` — Record an objection letter on a managed filing

## OSHA

- `GET /insurance/employers/match` — Match an employer
- `GET /insurance/employers/{employerId}` — Get an employer
- `GET /insurance/employers/{employerId}/sites` — List an employer’s sites
- `GET /insurance/employers/{employerId}/sites/{siteId}` — Get an employer’s site
- `GET /insurance/employers/{employerId}/events` — List an employer’s events
- `GET /insurance/employers/{employerId}/osha-profile` — Get an employer’s OSHA profile
- `GET /insurance/osha/300a-summaries` — List OSHA Form 300A summaries
- `GET /insurance/osha/300a-summaries/{id}` — Get an OSHA Form 300A summary
- `GET /insurance/osha/case-details` — List OSHA case details
- `GET /insurance/osha/case-details/{id}` — Get an OSHA case detail
- `GET /insurance/osha/severe-injury-reports` — List OSHA severe injury reports
- `GET /insurance/osha/severe-injury-reports/{id}` — Get an OSHA severe injury report
- `GET /insurance/osha/inspections` — List OSHA inspections
- `GET /insurance/osha/inspections/{activityNr}` — Get an OSHA inspection
- `GET /insurance/osha/inspections/{activityNr}/violations` — List an inspection’s violations
- `GET /insurance/osha/inspections/{activityNr}/violations/{citationId}` — Get a violation
- `GET /insurance/osha/inspections/{activityNr}/violations/{citationId}/events` — List a violation’s history
- `GET /insurance/osha/inspections/{activityNr}/related-activities` — List an inspection’s related activities
- `GET /insurance/osha/accidents` — List OSHA accident investigations
- `GET /insurance/osha/accidents/{summaryNr}` — Get an OSHA accident investigation
- `GET /insurance/osha/accidents/{summaryNr}/injuries` — List an accident’s injured workers
- `GET /insurance/osha/search` — Search OSHA narratives
- `GET /insurance/osha/incidence-rates` — Get OSHA incidence rates for an industry

## Procedure runs

- `POST /procedures/runs` — Start a procedure run
- `GET /procedures/runs` — List procedure runs
- `GET /procedures/runs/{runId}` — Get a procedure run
- `POST /procedures/runs/{runId}/cancel` — Cancel a procedure run
- `DELETE /procedure-runs/{runId}` — Delete a finished procedure run (Deprecated; works until at least 2027-03-01)

## Procedure tasks

- `GET /procedures/tasks` — List procedure tasks
- `GET /procedures/tasks/{taskId}` — Get a procedure task
- `POST /procedures/tasks/{taskId}/submissions` — Answer a procedure task

## Procedures

- `POST /procedures/procedures` — Publish a procedure version
- `GET /procedures/procedures` — List procedures
- `GET /procedures/procedures/{procedureId}` — Get a procedure
- `GET /procedures/procedures/{procedureId}/versions` — List a procedure’s versions
- `GET /procedures/procedures/{procedureId}/versions/{version}` — Get a procedure version
- `POST /procedures/procedures/{procedureId}/live` — Set a procedure’s live version

## Product timelines

- `GET /insurance/products/{productId}/timeline` — Get a product's timeline
- `GET /insurance/products/{productId}/timeline/digest` — Get a digest of a product's timeline

## Product types

- `GET /insurance/types` — List shared type definitions
- `GET /insurance/types/{typeId}` — Get a shared type definition

## Products

- `GET /insurance/product-access` — Get the products you have access to
- `GET /insurance/product-lines` — List the lines of business products use
- `GET /insurance/products` — List products
- `GET /insurance/products/{id}` — Get a product
- `GET /insurance/products/{productId}/availability/{state}/filings` — List recorded product filings in a state
- `GET /insurance/products/{productId}/availability/{state}/uw-manuals` — Get recorded product underwriting manuals in a state
- `GET /insurance/products/{productId}/availability/{state}/rate-manuals` — Get recorded product rate manuals in a state
- `GET /insurance/products/{productId}/availability/{state}/forms` — Get recorded product forms in a state
- `GET /insurance/products/{productId}/availability/{state}/marketing` — Get recorded product marketing in a state
- `GET /insurance/products/{productId}/resources` — List associated product resources
- `GET /insurance/products/{productId}/resources/{resourceId}` — Get an associated product resource
- `GET /insurance/products/{productId}/rating-plan-requests` — List your organization's rating plan requests for a product
- `POST /insurance/products/{productId}/rating-plan-requests` — Request rating plans for product states
- `GET /insurance/products/{productId}/catalog-requests` — Get your organization's catalog request for a product
- `POST /insurance/products/{productId}/catalog-requests` — Ask Effective to catalogue a product
- `GET /insurance/products/{productId}/availability/{state}/rating-programs` — List which rating program versions rate a product in a state

## Projects

- `GET /projects` — List projects
- `GET /projects/{projectId}` — Get a project

## Regulatory documents

- `GET /insurance/regulatory-documents` — Find regulatory documents
- `GET /insurance/regulatory-documents/{documentId}` — Get a regulatory document
- `GET /insurance/regulatory-documents/{documentId}/text` — Read a regulatory document's text in chunks
- `GET /insurance/regulatory-documents/{documentId}/references` — List citations out of or into a regulatory document
- `GET /insurance/regulatory-requirements` — List form checklist requirements across states
- `GET /insurance/regulatory-requirements/{requirementId}` — Get a form checklist requirement

## SERFF Imports

- `POST /insurance/serff-import-sessions` — Open your SERFF import conversation
- `GET /insurance/serff-import-items/{id}/uploaded-document` — Recover a document uploaded by a SERFF import
- `POST /insurance/serff-import-items` — Save selected SERFF filings for import
- `GET /insurance/serff-import-items` — List your saved import selections
- `GET /insurance/serff-import-items/{id}` — Read a saved import selection
- `PATCH /insurance/serff-import-items/{id}` — Edit your saved import selection
- `POST /insurance/serff-import-items/{id}/cancel` — Cancel a pending import selection
- `POST /insurance/serff-import-items/{id}/retry` — Restore a cancelled import selection

## SERFF Insurance Types

- `GET /insurance/serff-insurance-types/combinations` — List current SERFF TOI/sub-TOI combinations
- `GET /insurance/serff-insurance-types/combinations/{combinationId}` — Get a current SERFF TOI/sub-TOI combination

## Sessions

- `POST /sessions` — Start a session with the Effective agent
- `GET /sessions` — List sessions
- `GET /sessions/{id}` — Read a session
- `POST /sessions/{id}/messages` — Send a message to a session
- `GET /sessions/{id}/messages` — List the conversation
- `GET /sessions/{id}/messages/{messageId}` — Read a sent message and its reply
- `GET /sessions/{id}/files` — List files the agent produced

## Skills

- `POST /skills/publications` — Publish a complete immutable team or project skill
- `GET /skills/{skillId}/snapshot` — Download an editable team or project skill snapshot
- `DELETE /skills/{skillId}` — Delete a published team or project skill
- `GET /skills/{skillId}` — Get skill metadata and file manifest
- `GET /skills` — List available skills
- `GET /skills/{skillId}/bundle` — Download a skill for local agents

## Underwriting submissions

- `POST /insurance/underwriting/submissions` — Create an underwriting submission
- `GET /insurance/underwriting/submissions/{submissionId}` — Get an underwriting submission
- `POST /insurance/underwriting/submissions/{submissionId}/uploads` — Upload a file to an underwriting submission
- `POST /insurance/underwriting/submissions/{submissionId}/uploads/complete` — Confirm a file upload to an underwriting submission
- `POST /insurance/underwriting/submissions/{submissionId}/messages` — Add a message to an underwriting submission
- `GET /insurance/underwriting/submissions/{submissionId}/documents` — List an underwriting submission’s documents

## Users

- `GET /users/me` — Get current user
- `GET /users` — List organization users

## Views

- `GET /customization/slots` — The slot catalog
- `GET /customization/slots/{slot}/versions/{version}/declarations` — A slot version's declaration file
- `POST /customization/checks` — Check view source without storing it
- `GET /customization/publication-requests` — List publication requests
- `GET /customization/publication-requests/{request}` — Review a publication request
- `POST /customization/publication-requests/{request}/decision` — Approve or decline a publication request
- `GET /customization/lineups` — List the organization's lineups
- `PUT /customization/lineups/{desk}/{slot}` — Set a slot's lineup on a desk
- `GET /customization/live` — A desk's live views for its slots
- `POST /customization/view-reports` — Report how views ran on a desk page
- `GET /customization/bundles/{digest}` — A bundle by digest
- `POST /customization/views` — Create a view
- `GET /customization/views` — List the organization's views
- `GET /customization/views/{view}` — Read a view
- `DELETE /customization/views/{view}` — Delete an unpublished view
- `POST /customization/views/{view}/versions` — Upload a version
- `GET /customization/views/{view}/versions` — List a view's versions
- `GET /customization/views/{view}/versions/{version}` — Read a version
- `POST /customization/views/{view}/publication-requests` — Ask for publication
- `PUT /customization/views/{view}/publication` — Publish a version
- `DELETE /customization/views/{view}/publication` — Unpublish a view
- `GET /customization/views/{view}/versions/{version}/preview` — Preview a stored version

## Webhooks

- `POST /webhook-endpoints` — Create a webhook endpoint
- `GET /webhook-endpoints` — List webhook endpoints
- `GET /webhook-endpoints/{id}` — Read a webhook endpoint
- `PATCH /webhook-endpoints/{id}` — Update a webhook endpoint
- `DELETE /webhook-endpoints/{id}` — Delete a webhook endpoint
- `POST /webhook-endpoints/{id}/test` — Send a test event

## Your programs

- `GET /rsl/{id}/logs/{log}` — Get a log
- `POST /rsl/{id}/logs/{log}` — Open a log
- `POST /rsl/{id}/logs/{log}/commands` — Write to a log
- `POST /rsl/{id}/logs/{log}/preview` — Preview a write to a log
- `GET /rsl/{id}/logs/{log}/status` — Get the status of a log
- `GET /rsl/{id}/logs/{log}/answers` — Get the answers in a log
- `GET /rsl/{id}/logs/{log}/entries` — List the entries of a log
- `POST /rsl/{id}/logs/{log}/receipts` — Record a receipt on a log
- `GET /rsl/{id}/logs/{log}/receipts` — List the receipts on a log
- `GET /rsl/{id}/logs/{log}/refusals` — List the refused writes to a log
- `GET /rsl/{id}/logs` — List a program’s logs
- `GET /rsl-logs` — List logs across your programs
- `GET /rsl-operations` — List how your guideline programs run
- `GET /rsl/{id}/roles` — Get who holds the program’s roles
- `PUT /rsl/{id}/roles` — Replace who holds the program’s roles
- `GET /rsl` — List programs
- `GET /rsl/{id}` — Get a program
- `POST /rsl/{id}/uploads` — Upload a program bundle
- `POST /rsl/{id}/releases` — Release an uploaded program bundle
- `GET /rsl/{id}/releases` — List program releases
- `GET /rsl/{id}/releases/{releaseVersion}` — Get a program release
- `GET /rsl/{id}/releases/{releaseVersion}/download` — Download a program release bundle
- `GET /rsl/{id}/releases/{releaseVersion}/contract` — Get the contract of a program release
- `POST /rsl/{id}/releases/{releaseVersion}/evaluate` — Evaluate a program release
- `GET /rsl/{id}/releases/{releaseVersion}/{alias}/contract` — Get the contract of a used rater of a program release
- `POST /rsl/{id}/releases/{releaseVersion}/{alias}/evaluate` — Evaluate a used rater of a program release
- `GET /rsl/{id}/contract` — Get the contract of a program’s latest release
- `POST /rsl/{id}/evaluate` — Evaluate a program’s latest release
- `GET /rsl/{id}/{alias}/contract` — Get the contract of a used rater of a program’s latest release
- `POST /rsl/{id}/{alias}/evaluate` — Evaluate a used rater of a program’s latest release

## Your raters

- `GET /insurance/raters/{id}/executions` — List rater executions
- `GET /insurance/raters/{id}/executions/{executionId}` — Get a saved rater execution
- `GET /insurance/raters` — List raters
- `GET /insurance/raters/{id}` — Get a rater
- `POST /insurance/raters/{id}/bundles` — Upload a rater bundle
- `POST /insurance/raters/{id}/releases` — Release an uploaded rater bundle
- `GET /insurance/raters/{id}/releases` — List rater releases
- `GET /insurance/raters/{id}/releases/{releaseVersion}/contract` — Get the input and output schemas of a rater release
- `POST /insurance/raters/{id}/rate` — Rate a submission with a rater’s latest release
- `POST /insurance/raters/{id}/releases/{releaseVersion}/rate` — Rate a submission with a rater release
- `GET /insurance/raters/{id}/releases/{releaseVersion}` — Get a rater release
- `GET /insurance/raters/{id}/releases/{releaseVersion}/download` — Download a rater release bundle
