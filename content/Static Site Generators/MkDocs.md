---
{"publish":true,"permalink":"/Static Site Generators/MkDocs.md","tags":["static-site-generator"],"cssclasses":""}
---


[MkDocs](https://www.mkdocs.org/) is one of many [[Static Site Generators/Static Site Generators]] that use [[Markup Languages/Markdown]] files to build a local html website. Unlike hugo and Jekyll, MkDocs is geared towards building project [[Concepts/Documentation]].

## Resources

- [MkDocs Installation Guide](https://www.mkdocs.org/user-guide/installation/)
- [MkDocs Getting Started](https://www.mkdocs.org/getting-started/#getting-started-with-mkdocs)
- [Getting Started with Material Theme](https://squidfunk.github.io/mkdocs-material/getting-started/)
- [Set up Multiple Languages with Material Theme](https://github.com/squidfunk/mkdocs-material/discussions/2346)

## Features

- Great documentation themes available (ReadTheDocs, Material, [and more](https://github.com/mkdocs/mkdocs/wiki/MkDocs-Themes))
- Highly customizable UI and functionalities via plugin, custom css, etc.
- Active community

MkDocs really shines when it comes to themes and plugins, they are what make the framework so versatile. So far I've been using plugins to support multiple languages, setup password protection, setup reusable text snippets and variables, generate API documentation, export content to pdf, etc. For more information on popular plugins, refer to the [plugin catalog](https://github.com/mkdocs/catalog)].

## My Thoughts

- Easy to get into
- Great themes available
- Easily customizable
- Option to install additional functionality via plugins is amazing

## Example Sites

- [MkDocs Documentation](https://www.mkdocs.org/user-guide/writing-your-docs/)
- [Material Theme for MkDocs](https://squidfunk.github.io/mkdocs-material/)
	- [FastAPI](https://fastapi.tiangolo.com/)
	- [Basler](https://docs.baslerweb.com/)
	- [Zenoss](https://zenpacks.zenoss.io/)
	- [Neptune.ai](https://docs.neptune.ai/)
	- [Hummingbot](https://hummingbot.org/)
	- [eccenca](https://documentation.eccenca.com/latest/)
	- [Jitterbit](https://docs.jitterbit.com/)
- [Basic MkDocs Example Project with ReadTheDocs Theme](https://example-mkdocs-basic.readthedocs.io/en/stable/)

## What I use it for

I introduced MkDocs and it's theme [Material](https://squidfunk.github.io/mkdocs-material/) as a new software documentation solution at work. We've migrated the existing Online Help and Knowledge Base of 6 products into a single MkDocs project.

For more information, refer to my blog post from April 2024: [Migrating from Jekyll to MkDocs](https://v-schipka.github.io/posts/jekyll-to-mkdocs-migration/)