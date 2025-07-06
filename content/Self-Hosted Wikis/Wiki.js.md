---
{"publish":true,"permalink":"/Self-Hosted Wikis/Wiki.js.md","cssclasses":""}
---

[Wiki.js](https://js.wiki/)  is a self-hosted open-sourcewiki platform built with *Node.js*.
 Users can edit content in a [[Concepts/WYSIWYG]] or [[Markup Languages/Markdown]] editor.
Wiki.js is designed for teams who want a customizable internal [[Concepts/Documentation]] system.

## Features

- Supports **Markdown** (primary), WYSIWYG editor, and raw HTML.
- Inline editor with live preview.
- Page templates.
- Authentication & Role-based permissions (LDAP, OAuth2, SAML, GitHub, Google, etc.)
- Store content in git repositories (keeps Markdown files versioned in Git) or databases (PostgreSQL, MySQL, MariaDB, SQLite, MS SQL)
- supports automatic page versioning in Git
- Full-text search with indexing
- Multiple themes and customization options
- Extensible via modules and integrations.
- Multi-language content support.
- Runs as a Node.js app.
- Official Docker image makes deployment easier.

## Wiki.js vs. BookStack vs MediaWiki

| Feature        | Wiki.js                      | [[Self-Hosted Wikis/BookStack]]              | MediaWiki           |
| -------------- | ---------------------------- | -------------------------- | ------------------- |
| Tech Stack     | Node.js                      | PHP                        | PHP                 |
| Storage        | Git or DB                    | MySQL DB only              | MySQL DB only       |
| Editor         | Markdown, WYSIWYG            | WYSIWYG, Markdown optional | Wikitext markup     |
| Themes         | Modern, responsive UI        | Clean but simpler UI       | Outdated by default |
| Permissions    | Granular RBAC, external auth | Granular RBAC              | Less intuitive      |
| Versioning     | Git integration (optional)   | Internal revisions         | Internal revisions  |
| Docker Support | Official Docker image        | Official Docker image      | Community images    |

When to choose **Wiki.js**:
- Want a **self-hosted wiki with a modern look**.
- Need **Git-based version control** of your content.
- Prefer Node.js over PHP stacks.
- Want Markdown-first content editing.
- Need integration with enterprise authentication.
## Resources

- Website: https://js.wiki/
- GitHub: [https://github.com/Requarks/wiki](https://github.com/Requarks/wiki)