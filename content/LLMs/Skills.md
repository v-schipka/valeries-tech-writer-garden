---
{"publish":true,"permalink":"/LLMs/Skills.md","created":"2025-12-23T21:43:24.951+01:00","modified":"2025-12-23T22:01:18.642+01:00","published":"2025-12-23T22:01:18.642+01:00","cssclasses":""}
---

A skill is a capability that an LLM can invoke to perform a specific task outside of pure text generation. Skills are usually implemented as code and exposed to the LLM through an interface, e.g., API, CLI, structured prompts.

Basically: Skills define what an LLM can do.
Workflow: `User → Agent → Skills → External Systems`

## Characteristics of Skills

- Focused on a single responsibility
- Deterministic or near-deterministic
- Stateless
- Reusable across workflows
- Invoked, not autonomous

Skills are often also called:
- tools
- functions
- actions
- capabilities

## Examples

| Skill | Description |
|------|-------------|
| Search | Query a document store or vector database |
| File access | Read or write files |
| API call | Fetch or send data to external services |
| Validation | Check structure, schema, or style |
| Conversion | Transform Markdown into HTML or PDF |
| Build docs | Run a documentation build pipeline |

Skill: Build Documentation
Structured Prompt Interface:
```typescript
ROLE:
You are a documentation build system for a docs-as-code repository.
You analyze repository contents to validate and assemble documentation.
You do not write or modify files.

INPUT:
repository_path: string

ASSUMPTIONS:
- Documentation is stored in a standard structure (e.g. docs/, content/, or src/)
- Configuration may exist (mkdocs.yml, docusaurus.config.*, astro.config.*)
- Markdown files may contain frontmatter
- Navigation is defined either explicitly (config) or implicitly (directory structure)

OUTPUT (JSON ONLY):
{
  "status": "success" | "failure",
  "errors": [
    {
      "type": "structure" | "frontmatter" | "style" | "nav" | "config",
      "file": string,
      "line": number | null,
      "message": string,
      "blocking": boolean
    }
  ],
  "warnings": [
    {
      "type": string,
      "file": string,
      "message": string
    }
  ],
  "build_manifest": {
    "generator": "mkdocs" | "docusaurus" | "astro" | "unknown",
    "docs_root": string,
    "pages": [
      {
        "path": string,
        "title": string | null,
        "nav_path": string[]
      }
    ]
  }
}

RULES:
- Base all conclusions strictly on repository contents
- Do not assume missing files or metadata
- Do not modify or suggest changes
- Report blocking errors if documentation cannot be built
- Return status "failure" if any blocking error exists
- Output valid JSON only
```

Invocation (by [[LLMs/Agents]]):
```
INPUT:
repository_path: "/repos/api-docs"
```

Example output:
```json
{
  "status": "failure",
  "errors": [
    {
      "type": "config",
      "file": "mkdocs.yml",
      "line": null,
      "message": "Navigation references missing file 'guides/auth.md'",
      "blocking": true
    },
    {
      "type": "frontmatter",
      "file": "docs/index.md",
      "line": 1,
      "message": "Missing required 'title' field",
      "blocking": true
    }
  ],
  "warnings": [
    {
      "type": "style",
      "file": "docs/guides/overview.md",
      "message": "Informal tone detected ('simply')"
    }
  ],
  "build_manifest": {
    "generator": "mkdocs",
    "docs_root": "docs/",
    "pages": [
      {
        "path": "docs/index.md",
        "title": null,
        "nav_path": ["Home"]
      },
      {
        "path": "docs/guides/overview.md",
        "title": "Overview",
        "nav_path": ["Guides", "Overview"]
      }
    ]
  }
}
```