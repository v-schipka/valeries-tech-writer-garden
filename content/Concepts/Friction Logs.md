---
{"publish":true,"permalink":"/Concepts/Friction Logs.md","created":"2026-01-06T10:38:31.371+01:00","modified":"2026-01-06T10:42:10.062+01:00","published":"2026-01-06T10:42:10.062+01:00","cssclasses":""}
---

A friction log is a list of steps and problems users encounter, when trying to accomplish a specific task. They can be used as a research tool to capture moments where users struggle, hesitate, or get blocked. It's basically a bug tracker for understanding, not code.

Frictions:
- Confusion about a term
- Stopping to reread a sentence
- Clicking back and forth between pages
- Copy-paste errors
- Misunderstanding a prerequisite
- Saying “Wait, what does this mean?”
- Giving up or searching elsewhere

## Why it Matters

For tech writers, UX writers, and documentation teams, it’s a low-effort way to turn real user pain into actionable improvements.

## Template

Tools:
You can use a simple spreadsheet, a project management tool (e.g., Trello or Jira), or a specialized product analytics platform.

Friction Logs should include:
- **Task**: What the user was trying to accomplish (not the page title).
- **Location**: Where the friction occurred (doc page, section, step number).
- **Friction observed**: What went wrong or slowed the user down (be descriptive, not judgmental).
- **Evidence**: Direct quote, hesitation, error, or behavior you observed.
- **Impact**:
    - _Low_: Confusing but task completed
    - _Medium_: User needed help or workaround
    - _High_: Task blocked or abandoned
- **Suspected cause**:  Missing step, unclear term, assumption, bad structure, etc.
- **Suggested fix**:  Add example, reword step, add prerequisite, link elsewhere.

Example:

|Date|Task|Location|Friction observed|Evidence|Impact|
|---|---|---|---|---|---|
|2026-01-05|Generate API token|Auth docs → Step 2|User didn’t know where to find token|“Where do I get this?”|High|

## Get Started

1. Decide which part of the product you want to test.
2. Include details on the friction log template.
3. Set a color-coded system:
	- green: easy
	- yellow: tricky, but getting through
	- red: would give up if it wasn't my job
4. Pick a [[Concepts/User Research\|user]] and a user scenario with a specific task.
5. List all steps you do to finish the scenario, noting the expected behaviour and the actual behaviour of the software.


## Resources
- [Friction Logs: How to Identify and Resolve User Friction Points for Product Growth (+ A Free Template)](https://www.chameleon.io/blog/friction-logs)
- [Friction Log in SaaS: Step-by-Step Guide For Product Managers](https://userpilot.com/blog/friction-log/)