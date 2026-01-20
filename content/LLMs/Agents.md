---
{"publish":true,"permalink":"/LLMs/Agents.md","created":"2025-12-23T21:39:01.610+01:00","modified":"2026-01-20T20:55:35.427+01:00","published":"2026-01-20T20:55:35.427+01:00","cssclasses":""}
---

An agent is an LLM-driven system component that can reason about a goal and orchestrate multiple steps to achieve it. Agents use [[LLMs/Skills]] to act on the world.

Basically: Agents define how and when it does it.
Workflow: `User → Agent → Skills → External Systems`

### Characteristics of Agents

- Goal-oriented
- Capable of planning and sequencing steps
- Chooses which skills to invoke
- Can react to intermediate results
- Often maintains state or memory
- Operates with some level of autonomy

### Docs-as-Code Examples

Agent: "Publish updated API documentation"
├─ Skill: Detect changed files
├─ Skill: Validate Markdown and links
├─ Skill: Generate missing sections
├─ Skill: Build documentation
└─  Skill: Report errors or success

Agent: “Review this documentation”
├─ Skill: Lint [[Markup Languages/Markdown]]
├─ Skill: Validate links
├─ Skill: Check style guide compliance
└─ Skill: Generate review report

## Resources

Conecept:
- [AGENTS.md (a simple, open format for guiding coding agents)](https://agents.md/)

How to write good AGENT.md files: 
- https://www.humanlayer.dev/blog/writing-a-good-claude-md
- https://github.blog/ai-and-ml/github-copilot/how-to-write-a-great-agents-md-lessons-from-over-2500-repositories/