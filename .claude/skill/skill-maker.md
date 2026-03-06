---
name: skill-maker
description: "Governs how all skills are generated. Trigger when: creating a skill, writing a skill, making a skill, generating a skill file, build a skill, design a skill, new skill. Enforces structure, quality standards, writing rules, and delivery checklist for every skill produced."
---

# Skill Maker — Skill Generation Standard

Defines the required structure, writing rules, and quality checklist that every generated skill must follow.

## Purpose

Enforce a consistent, high-quality standard for every skill file generated, so that all skills are actionable, unambiguous, and immediately usable.

## Trigger

Apply this skill whenever the user requests:
- "create a skill", "write a skill", "make a skill"
- "generate a skill file", "build a skill", "design a skill"
- Any new `.md` file intended to be used as a Claude skill

Do NOT trigger for:
- Editing existing non-skill markdown files
- Writing documentation or README files
- Refactoring code
- High-level discussions about skill design concepts without intent to generate a file

## Prerequisites

- No tools or environment setup required — this skill operates entirely through conversation
- The `.claude/skill/` directory must exist: run `ls .claude/skill/` to verify; if missing, run `mkdir -p .claude/skill/`

## Steps

1. **Ask the user for the skill's purpose** — one sentence describing what it does
2. **Ask the user for the trigger conditions** — when to use and when NOT to use
3. **Ask the user for prerequisites** — tools, knowledge, or setup required
4. **Ask the user for the steps** — numbered, atomic actions the skill instructs
5. **Ask the user for the output format** — what the final deliverable looks like
6. **Ask the user for the rules** — must-do and never-do constraints
7. **Ask the user for examples** — one good and one bad, same scenario
8. **Confirm all decisions with the user** — user has approved all 7 section decisions before writing begins
9. **Write the file** to the confirmed path using the structure in Output Format — skill file saved at `.claude/skill/<name>.md`
10. **Execute self-audit** — verify all items below before delivering:
    - [ ] All 7 required sections are present: Purpose, Trigger, Prerequisites, Steps, Output Format, Rules, Examples
    - [ ] H1 title exists and summary line below it is one sentence
    - [ ] Frontmatter `name` is kebab-case, max 64 chars, no consecutive hyphens (`--`), does not start or end with `-`
    - [ ] Frontmatter `description` is max 1024 chars, includes action keywords and context keywords, and is worded to actively encourage triggering
    - [ ] Purpose is exactly one sentence starting with an imperative verb
    - [ ] Trigger has at least 3 keywords, includes synonyms, and lists negative triggers
    - [ ] Every prerequisite is verifiable by the user
    - [ ] Every step starts with an imperative verb and states an expected result
    - [ ] Output Format uses a code block and includes the file path
    - [ ] Rules are separated into Must and Never, every rule is testable
    - [ ] Examples are complete (not fragments), both Good and Bad address the same scenario, Bad includes "Why this is bad"
11. **Fix all failed audit items** — each failed check from Step 10 is corrected in the file
12. **Re-run self-audit** — all checklist items in Step 10 pass before delivering to the user

## Output Format

Every generated skill must follow this exact structure:

```markdown
---
name: <kebab-case-name>                         # required: max 64 chars, no consecutive hyphens
description: "<trigger description with action keywords and context keywords — write actively to encourage triggering>"  # required: max 1024 chars
# Optional fields:
# license: <license name or file reference>
# compatibility: <environment requirements, e.g. "Requires git, node">
# metadata:
#   author: <author>
#   version: "1.0"
# allowed-tools: <space-delimited list, e.g. "Bash Read Write">
---

# <Skill Title>

<One-sentence summary of what the skill does.>

## Purpose

<One sentence. Starts with a verb. Describes WHAT, not HOW.>

## Trigger

<When to apply this skill — at least 3 keywords including synonyms.>
<Explicit list of when NOT to trigger.>

## Prerequisites

<Verifiable list. Include version numbers if relevant. Include install commands if setup is needed. No vague items like "basic knowledge of X".>

## Steps

1. **<Imperative verb> <action>** — <expected result>
2. **<Imperative verb> <action>** — <expected result>
...

## Output Format

File path: `.claude/skill/<kebab-case-name>.md`

\`\`\`
<example output here>
\`\`\`

## Rules

### Must
- <Testable rule>
- <Testable rule>

### Never
- <Testable rule>
- <Testable rule>

## Examples

### Good Example
<Complete example that follows all rules>

### Bad Example
<Complete example that violates a rule>

> Why this is bad: <specific explanation>
```

## Rules

### Purpose
- Must: Exactly one sentence
- Must: Start with an imperative verb (Defines / Enforces / Generates / Validates...)
- Must: Describe WHAT the skill does, not HOW it works
- Never: Use vague words — handle, manage, deal with, work with
- Never: Write more than one sentence

### Trigger
- Must: Include at least 3 trigger keywords
- Must: Include both action words (create, write, make) and context words (skill, template, file)
- Must: Include synonyms and variations of the trigger phrase
- Must: Explicitly list scenarios where the skill should NOT be triggered
- Never: Use only one keyword — it causes false triggers

### Prerequisites
- Must: Every item must be verifiable by the user before starting
- Must: Include exact version numbers if the skill is version-dependent
- Must: Include installation commands if any setup is required
- Never: Write "basic knowledge of X" — specify exactly what knowledge is needed
- Never: List a prerequisite that cannot be confirmed or checked

### Steps
- Must: Every step starts with an imperative verb (Write / Run / Check / Confirm / Ask...)
- Must: Each step is atomic — one action only
- Must: State the expected result or output after each step
- Must: Include all steps, even implied ones
- Never: Use "etc.", "and so on", or open-ended language
- Never: Combine two actions into one step
- Never: Write a step that describes an outcome instead of an action

### Output Format
- Must: Show the exact format using a code block
- Must: Include the full file path if the output is a file
- Never: Describe the format in plain text without showing it
- Never: Use a partial or abbreviated example

### Frontmatter
- Must: `name` max 64 characters, lowercase letters and hyphens only, no consecutive hyphens, does not start or end with `-`
- Must: `description` max 1024 characters, includes what the skill does AND when to trigger it
- Must: `description` is worded actively to encourage triggering — err toward "pushy" to avoid undertriggering
- Never: Use uppercase in `name`
- Never: Use consecutive hyphens (`--`) in `name`

### File Size
- Must: Keep SKILL.md under 500 lines
- Must: Move detailed reference content to `references/` subdirectory if approaching 500 lines
- Never: Exceed 500 lines in the main SKILL.md

### Rules Section
- Must: Separate rules into "Must" and "Never" categories
- Must: Every rule must be testable — it can be checked as passed or failed
- Never: Write vague rules like "be clear" or "write well"
- Never: Mix Must and Never in the same list

### Examples
- Must: Both Good and Bad examples must be complete, not fragments
- Must: Good and Bad must address the same scenario
- Must: Bad example must include a "Why this is bad" explanation
- Never: Use a partial snippet as an example
- Never: Show a Bad example without explaining what rule it violates

## Examples

### Good Example

```markdown
---
name: commit-writer
description: "Generate git commit messages. Trigger when: write commit, generate commit message, create commit, format commit. Do not trigger for push, merge, or branch operations."
---

# Commit Writer

Generates a formatted git commit message from staged changes.

## Purpose

Generate a conventional git commit message based on the current staged diff.

## Trigger

Apply this skill when the user requests:
- "write a commit", "generate commit message", "create commit message"
- Any request to format or create a git commit

Do NOT trigger for:
- git push, merge, rebase, or branch operations
- Explaining what a commit is

## Prerequisites

- Git must be installed: run `git --version` to verify
- There must be staged changes: run `git diff --staged` to verify

## Steps

1. **Run `git diff --staged`** — captures the list of staged changes
2. **Identify the change type** — determine if it is feat, fix, chore, docs, refactor, or style
3. **Write the subject line** — format: `<type>(<scope>): <short description>` under 72 characters
4. **Write the body** — list what changed and why, one bullet per file changed
5. **Output the full commit message** — subject line + blank line + body

## Output Format

File path: none (output is printed to the user)

\`\`\`
<type>(<scope>): <short description>

- <file>: <what changed and why>
- <file>: <what changed and why>
\`\`\`

## Rules

### Must
- Subject line must follow conventional commit format
- Subject line must be under 72 characters
- Body must explain why, not just what

### Never
- Never omit the blank line between subject and body
- Never use past tense in the subject line ("added" → "add")

## Examples

### Good Example
\`\`\`
feat(auth): add JWT refresh token support

- src/auth/token.ts: add refreshToken() to handle expiry silently
- src/middleware/auth.ts: check refresh token before returning 401
\`\`\`

### Bad Example
\`\`\`
updated some files
\`\`\`

> Why this is bad: No type, no scope, no description of what changed or why. Cannot be searched or understood without reading the diff.
```

### Bad Example

```markdown
---
name: commit-writer
---

# Commit Writer

Helps with commits.

## Purpose

Handle git commits for the user.

## Trigger

Use when doing git stuff.

## Prerequisites

- Know how to use git

## Steps

1. Look at the changes
2. Write something good
3. Make sure it follows the rules

## Output Format

Write the commit message.

## Rules

- Be clear
- Don't be vague

## Examples

Good: `feat: add login`
Bad: `stuff`
```

> Why this is bad: Purpose uses a vague verb ("handle") and doesn't describe WHAT. Trigger has no keywords and no negative triggers. Prerequisite "know how to use git" is not verifiable. Steps don't start with imperative verbs, aren't atomic, and state no expected results. Output Format has no code block and no file path. Rules are untestable ("be clear"). Examples are fragments, not complete scenarios.
