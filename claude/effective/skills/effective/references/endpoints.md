# Effective API endpoints

Every Effective API endpoint, grouped by area. `discover` ranks endpoints for a task, and `inspect` returns current inputs and responses. In MCP tools, use a path as `effective://api<path>`. With an API key, follow https://docs.effectiveai.app/getting-started/agent-setup.md to call it directly.

## Contents

- [Access](#access)
- [Answers](#answers)
- [Apps](#apps)
- [Carrier groups](#carrier-groups)
- [Carriers](#carriers)
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
- [MGAs](#mgas)
- [NAIC statutory data](#naic-statutory-data)
- [Objections](#objections)
- [OSHA](#osha)
- [Product timelines](#product-timelines)
- [Product types](#product-types)
- [Products](#products)
- [Raters](#raters)
- [Rating programs](#rating-programs)
- [Regulatory documents](#regulatory-documents)
- [SERFF Imports](#serff-imports)
- [SERFF Insurance Types](#serff-insurance-types)
- [Sessions](#sessions)
- [Underwriting](#underwriting)
- [Users](#users)
- [Webhooks](#webhooks)

## Access

- `GET /access/{resource}` — Read a resource access list
- `PUT /access/{resource}` — Replace a resource access list
- `PATCH /access/{resource}` — Change selected resource access

## Answers

- `POST /answers` — Schedule an answer to a question
- `GET /answers/{id}` — Get answer status or completed result

## Apps

- `POST /apps` — Create an app
- `GET /apps` — List apps
- `GET /apps/{appId}` — Get an app
- `PATCH /apps/{appId}` — Update an app
- `DELETE /apps/{appId}` — Delete an app
- `POST /apps/{appId}/release-uploads` — Start a release bundle upload
- `POST /apps/{appId}/deployments` — Deploy an app
- `GET /apps/{appId}/deployments` — List app deployments
- `GET /apps/{appId}/deployments/{deploymentId}` — Get an app deployment
- `POST /apps/{appId}/archive` — Archive an app
- `POST /apps/{appId}/restore` — Restore an archived app
- `GET /apps/{appId}/secrets` — List app secrets
- `GET /apps/{appId}/secrets/{name}` — Get an app secret
- `PUT /apps/{appId}/secrets/{name}` — Set an app secret
- `DELETE /apps/{appId}/secrets/{name}` — Delete an app secret
- `GET /apps/{appId}/api-calls` — List app API calls
- `POST /apps/{appId}/sign-ins` — Sign a browser in to an app
- `POST /apps/{appId}/calls` — Call an app API route

## Carrier groups

- `GET /insurance/carrier-groups` — List carrier groups
- `GET /insurance/carrier-groups/{id}` — Get a carrier group

## Carriers

- `GET /insurance/carriers` — List carriers
- `GET /insurance/carriers/{id}` — Get a carrier

## Companies

- `GET /insurance/managed-filings/companies` — Find companies for filing preparation
- `POST /insurance/managed-filings/companies` — Create a company for filing preparation
- `GET /insurance/managed-filings/companies/{id}` — Get one company for filing preparation

## Files

- `GET /files/{fileId}/download` — Download one immutable file version
- `GET /files/{fileId}/text` — Read a bounded chunk of existing extracted text
- `GET /files/{fileId}` — Get file metadata and content links

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

## Product timelines

- `GET /insurance/products/{productId}/timeline` — Get a product's timeline
- `GET /insurance/products/{productId}/timeline/digest` — Get a digest of a product's timeline

## Product types

- `GET /insurance/types` — List shared type definitions
- `GET /insurance/types/{typeId}` — Get a shared type definition

## Products

- `GET /insurance/product-profile/schema` — Discover product profile fields
- `GET /insurance/product-profile/options` — Get conditional target-market choices
- `GET /insurance/product-access` — Get the products you have access to
- `GET /insurance/product-lines` — List the lines of business products use
- `GET /insurance/products` — List products
- `GET /insurance/products/{id}` — Get a product
- `GET /insurance/products/{productId}/availability/{state}/filings` — List recorded product filings in a state
- `GET /insurance/products/{productId}/availability/{state}/uw-manuals` — Get recorded product underwriting manuals in a state
- `GET /insurance/products/{productId}/availability/{state}/rate-manuals` — Get recorded product rate manuals in a state
- `GET /insurance/products/{productId}/availability/{state}/forms` — Get recorded product forms in a state
- `GET /insurance/products/{productId}/availability/{state}/marketing` — Get recorded product marketing in a state
- `GET /insurance/products/{productId}/availability/{state}/events` — List published product events in a state
- `GET /insurance/products/{productId}/events` — List published events across a product’s states
- `GET /insurance/products/{productId}/events/{id}` — Get one recorded product event
- `GET /insurance/products/{productId}/profile` — Get a product profile
- `GET /insurance/products/{productId}/resources` — List associated product resources
- `GET /insurance/products/{productId}/resources/{resourceId}` — Get an associated product resource
- `GET /insurance/products/{productId}/rating-plan-requests` — List your organization's rating plan requests for a product
- `POST /insurance/products/{productId}/rating-plan-requests` — Request rating plans for product states
- `GET /insurance/products/{productId}/availability/{state}/rating-programs` — List which rating program versions rate a product in a state

## Raters

- `GET /insurance/raters` — List raters
- `GET /insurance/raters/{id}` — Get a rater
- `GET /insurance/raters/{id}/releases` — List rater releases
- `GET /insurance/raters/{id}/releases/{releaseVersion}` — Get a rater release
- `GET /insurance/raters/{id}/releases/{releaseVersion}/contract` — Get the input and output schemas of a rater release
- `GET /insurance/raters/{id}/releases/{releaseVersion}/download` — Download a rater release bundle
- `POST /insurance/raters/{id}/releases/{releaseVersion}/rate` — Rate a submission with a rater release
- `POST /insurance/raters/{id}/rate` — Rate a submission with a rater’s latest release

## Rating programs

- `GET /insurance/rating-programs` — List rating programs
- `GET /insurance/rating-programs/{id}` — Get a rating program
- `PUT /insurance/rating-programs/{id}/subscription` — Subscribe to a rating program
- `DELETE /insurance/rating-programs/{id}/subscription` — Unsubscribe from a rating program
- `GET /insurance/rating-programs/{id}/versions` — List program versions
- `GET /insurance/rating-programs/{id}/versions/{version}` — Get a program version
- `GET /insurance/rating-programs/{id}/versions/{version}/download` — Download a program version
- `GET /insurance/rating-programs/{id}/versions/{version}/contract` — Get the input and output schemas of a program version
- `POST /insurance/rating-programs/{id}/rate` — Rate a submission using the latest program version
- `POST /insurance/rating-programs/{id}/versions/{version}/rate` — Rate a submission

## Regulatory documents

- `GET /insurance/regulatory-documents` — Find regulatory documents
- `GET /insurance/regulatory-documents/{documentId}` — Get a regulatory document
- `GET /insurance/regulatory-documents/{documentId}/text` — Read a regulatory document's text in chunks
- `GET /insurance/regulatory-documents/{documentId}/references` — List citations out of or into a regulatory document
- `GET /insurance/regulatory-requirements` — List form checklist requirements across states
- `GET /insurance/regulatory-requirements/{requirementId}` — Get a form checklist requirement

## SERFF Imports

- `POST /insurance/serff-import-sessions` — Open your SERFF import conversation
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

## Underwriting

- `GET /insurance/uw-guidelines` — List a product's underwriting guidelines
- `POST /insurance/uw-guidelines` — Add underwriting guidelines to a product
- `GET /insurance/uw-guidelines/{guidelinesId}` — Get underwriting guidelines
- `POST /insurance/uw-guidelines/{guidelinesId}/versions` — Save a new version of underwriting guidelines
- `GET /insurance/uw-submissions` — List underwriting submissions
- `POST /insurance/uw-submissions` — Start an underwriting submission
- `GET /insurance/uw-submissions/{submissionId}` — Get an underwriting submission
- `POST /insurance/uw-submissions/{submissionId}/file` — Open a submission's underwriting file
- `GET /insurance/uw-submissions/{submissionId}/file` — Get a submission's underwriting file
- `GET /insurance/uw-submissions/{submissionId}/file/inputs` — List an underwriting file's inputs
- `POST /insurance/uw-submissions/{submissionId}/file/inputs` — Record an input on an underwriting file
- `GET /insurance/uw-submissions/{submissionId}/file/inputs/{inputId}` — Get one underwriting file input

## Users

- `GET /users/me` — Get current user
- `GET /users` — List organization users

## Webhooks

- `POST /webhook-endpoints` — Create a webhook endpoint
- `GET /webhook-endpoints` — List webhook endpoints
- `GET /webhook-endpoints/{id}` — Read a webhook endpoint
- `PATCH /webhook-endpoints/{id}` — Update a webhook endpoint
- `DELETE /webhook-endpoints/{id}` — Delete a webhook endpoint
- `POST /webhook-endpoints/{id}/test` — Send a test event
