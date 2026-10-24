# Workflow

- PBIs live in the Notion database "Product Backlog". This repo is Project = "CV site".
- Start each run by checking my open PRs for unresolved review comments. Fix those first.
- Then take ONE PBI: highest priority with Status "Ready" for this project. None → stop.
- Set its Status to "In progress".
- Branch from main: pbi-<id>-<short-title>. Never commit directly to main.
- Run the tests before opening a PR. Don't open a PR with failing tests.
- Open the PR with `gh pr create`. Link the Notion page in the description.
- Set the PBI to "In review" and add the PR link to the Notion page.
- If the PBI is unclear, set it to "Blocked" and add a comment explaining what you need. Don't guess.
- Set PBIs whose PR has been merged to "Done".

# Project notes

- How to run locally: <fill in>
- How to run tests: <fill in>