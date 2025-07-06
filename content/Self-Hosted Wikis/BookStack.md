---
{"publish":true,"permalink":"/Self-Hosted Wikis/BookStack.md","cssclasses":""}
---

[BookStack](https://www.bookstackapp.com/) is an open-source, self-hosted [[Concepts/Documentation]] platform. It’s a dynamic web application (PHP + MySQL), where users can edit content in a [[Concepts/WYSIWYG]] or [[Markup Languages/Markdown]] editor.
Content is stored in a database (My SQL or MariaDB) and served dynamically.

## Features

- Built-in search
- User and role management
- Version history
- Visual hierarchy (Books > Chapters > Pages)
- Supports .pdf export
- Supports modularization (templates)
- Diagram capabilities

## Introduction Video

<iframe width="560" height="315" src="https://www.youtube.com/embed/XBrqKRqt0lY?si=ZMzKenqTNzCaQJl7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Bookstack vs Static Site Generators


| Feature         | BookStack                       | Static Site Generators          |
| --------------- | ------------------------------- | ------------------------------- |
| Hosting         | Requires PHP & Database (MySQL) | Any static web host             |
| Content Storage | In database                     | Markdown files in repo          |
| Collaboration   | Built-in editing UI             | Git-based collaboration         |
| Permissions     | Granular user & role management | Depends on hosting platform     |
| Build Process   | Dynamic serving                 | Build static site before deploy |
| Search          | Built-in                        | Depends on generator/plugin     |
| Versioning      | Internal version history        | Git history                     |
-> BookStack is closer in spirit to Atlassian Confluence than to a static site generator.

## Resources

- [Official website](https://www.bookstackapp.com/)
- [Demo page](https://demo.bookstackapp.com/)
- [Installation Instructions](https://www.bookstackapp.com/docs/admin/installation/)
- [gitHub Project](https://github.com/BookStackApp/BookStack)

