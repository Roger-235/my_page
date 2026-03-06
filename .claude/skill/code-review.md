---
name: code-review
description: "Review output code for quality, security, and correctness. Trigger when: review code, audit code, check code, inspect code, code review, analyze code output, critique code, evaluate code. Do not trigger for explaining concepts, writing new code from scratch, or debugging runtime errors."
---

# Code Review

Audits code and delivers structured feedback on quality, security, performance, and maintainability.

## Purpose

Audit generated or modified code and deliver a structured review covering correctness, security, performance, and maintainability.

## Trigger

Apply this skill when the user requests:
- "review code", "audit code", "check code", "inspect code"
- "code review", "analyze code output", "critique code", "evaluate code"
- "幫我審查代碼", "審查一下", "看看這段代碼有沒有問題"
- Any request to assess the quality or safety of a code snippet or file

Do NOT trigger for:
- Explaining what a concept or API does without reviewing specific code
- Writing new code from scratch (no existing code to review)
- Debugging a specific runtime error without a broader review request
- Asking for a refactor without asking for a review

## Prerequisites

- The code to review must be provided — either as a file path, a selection, or a pasted snippet
- No additional tools or setup required

## Steps

1. **Read the target code** — load the full file or snippet so no context is missing
2. **Identify the language and framework** — note any version-specific behavior if relevant
3. **Check correctness** — verify logic, edge cases, off-by-one errors, and incorrect assumptions
4. **Check security** — scan for injection risks, hardcoded secrets, unsafe deserialization, XSS, CSRF, broken auth, and other OWASP Top 10 issues
5. **Check performance** — flag unnecessary loops, N+1 queries, blocking calls, and memory leaks
6. **Check maintainability** — assess naming clarity, function length, duplication, and unnecessary complexity
7. **Check style consistency** — verify that the code matches the project's existing conventions
8. **Output the review** — produce the structured format defined in Output Format below, including Fix Suggestions for every issue rated Medium or above

## Output Format

File path: none (output is printed to the user)

```
## Code Review: <filename or description>

### Summary
<One paragraph: overall quality assessment, count of issues by severity>

### Issues

| # | Severity | Category | Line | Description |
|---|----------|----------|------|-------------|
| 1 | Critical  | Security | 42   | SQL query built with string concatenation — SQL injection risk |
| 2 | High      | Correctness | 17 | Off-by-one in loop: `i <= arr.length` should be `i < arr.length` |
| 3 | Medium    | Performance | 88 | DB query inside loop causes N+1 problem |
| 4 | Low       | Style    | 5    | Variable name `x` is not descriptive |

### Fix Suggestions

#### Issue 1 — SQL Injection (Critical)
\`\`\`js
// Before
const query = `SELECT * FROM users WHERE id = ${userId}`;

// After
const query = `SELECT * FROM users WHERE id = ?`;
db.execute(query, [userId]);
\`\`\`

#### Issue 2 — Off-by-one (High)
\`\`\`js
// Before
for (let i = 0; i <= arr.length; i++) { ... }

// After
for (let i = 0; i < arr.length; i++) { ... }
\`\`\`

#### Issue 3 — N+1 Query (Medium)
\`\`\`js
// Before
for (const id of ids) {
  const user = await db.query(`SELECT * FROM users WHERE id = ?`, [id]);
}

// After
const users = await db.query(`SELECT * FROM users WHERE id IN (?)`, [ids]);
\`\`\`

### Verdict
[ ] Approved — no issues or low severity only
[ ] Approved with minor fixes — low/medium issues only
[x] Changes required — one or more high/critical issues must be fixed before merging
```

## Rules

### Must
- Every issue must include Severity, Category, Line number (or "N/A"), and Description
- Severity levels must be exactly one of: Critical, High, Medium, Low
- Every issue rated Medium or above must include a corrected code snippet
- The Summary must state the total issue count grouped by severity
- The Verdict must match the highest severity found: Critical/High → "Changes required", Medium only → "Approved with minor fixes", Low only → "Approved"
- Security issues must always be rated Critical or High

### Never
- Never omit Line numbers when the code was provided as a file or selection
- Never suggest stylistic changes as High or Critical severity
- Never combine two separate issues into one table row
- Never give a verdict of "Approved" when a Critical or High issue exists
- Never propose a fix that introduces a new security vulnerability
- Never skip the Fix Suggestions section when Medium or above issues are present

## Examples

### Good Example

```
## Code Review: src/api/users.ts

### Summary
3 issues found: 1 Critical, 1 High, 1 Low. The critical SQL injection must be fixed before this code is safe to deploy. Logic for pagination is also incorrect. Style issues are minor.

### Issues

| # | Severity | Category    | Line | Description |
|---|----------|-------------|------|-------------|
| 1 | Critical  | Security    | 34   | User input concatenated directly into SQL query — SQL injection risk |
| 2 | High      | Correctness | 58   | `page * limit` overflows for large page values; use BigInt or validate input |
| 3 | Low       | Style       | 12   | Variable `d` should be named `userData` for clarity |

### Fix Suggestions

#### Issue 1 — SQL Injection (Critical)
\`\`\`ts
// Before
const rows = await db.query(`SELECT * FROM users WHERE name = '${name}'`);

// After
const rows = await db.query(`SELECT * FROM users WHERE name = $1`, [name]);
\`\`\`

#### Issue 2 — Pagination Overflow (High)
\`\`\`ts
// Before
const offset = page * limit;

// After
const MAX_PAGE = 10_000;
if (page > MAX_PAGE) throw new Error('Page out of range');
const offset = page * limit;
\`\`\`

### Verdict
[x] Changes required — Critical and High issues must be fixed before merging
```

### Bad Example

```
The code looks mostly fine. There's a potential SQL issue on line 34 and the pagination might have a problem. Variable names could be better. I'd say it's approved with some things to clean up.
```

> Why this is bad: No structured table, no severity ratings, no line numbers, no fix suggestions for the SQL injection (which is Critical), and the Verdict contradicts the presence of a Critical issue. The review cannot be acted on without re-reading the entire diff.
