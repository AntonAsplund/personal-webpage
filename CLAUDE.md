# Workflow

- PBIs live in the Notion database "Product Backlog". This repo is Project = "CV site".
- Start each run by checking my open PRs for unresolved review comments. Fix those first.
- Then take ONE PBI: highest priority with Status "Ready" for this project. None → stop.
- Set its Status to "In progress".
- Branch from main: pbi-<id>-<short-title>. Never commit directly to main.
- Run the tests before opening a PR. Don't open a PR with failing tests.
- Open the PR with `gh pr create`. Link the Notion page in the description.
- Set the PBI to "In review" and add the PR link to the Notion page.
- Cloudflare Workers comments on the PR with preview URLs a minute or two after it opens (`gh pr view <n> --json comments`, author `cloudflare-workers-and-pages`). Put the "Branch Preview URL" in the PBI's "Preview link" property.
- If the PBI is unclear, set it to "Blocked" and add a comment explaining what you need. Don't guess.
- Set PBIs whose PR has been merged to "Done".

# Project notes

- How to run locally: <fill in>
- How to run tests: <fill in>