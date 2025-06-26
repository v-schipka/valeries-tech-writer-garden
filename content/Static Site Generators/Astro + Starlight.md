---
{"publish":true,"permalink":"/Static Site Generators/Astro + Starlight.md","tags":["static-site-generator"],"cssclasses":""}
---


[Starlight](https://starlight.astro.build/) is a full-featured documentation theme built on top of the [Astro](https://astro.build/) framework. Astro is a JavaScript web framework optimized for building fast, content-driven websites.

### Resources

- [Getting Started](https://starlight.astro.build/getting-started/)
- [Customizing Starlight](https://starlight.astro.build/guides/customization/)
- [Project Structure](https://starlight.astro.build/guides/project-structure/)
- [Plugins & Themes](https://starlight.astro.build/resources/plugins/)

### Features

- Supports [[Markup Languages/Markdown]], Markdoc (Markdown with [Astro components](https://docs.astro.build/en/basics/astro-components/)) and [Markdown MDX](https://mdxjs.com/)
- Supports [Tailwind CSS](https://tailwindcss.com/)
- Supports multiple languages (i18n)
- The default appearance can be customized with CSS and configuration options
- Build-in [Pagefind](https://pagefind.app/) search functionality with options to exclude content from the search (also supports [Algolia DocSearch](https://docsearch.algolia.com/))
- Uses plugins to customize Starlight configuration, UI, and behavior

> [!info]
> - Run local preview: ```npm run dev```
> - Configuration file is `tsconfig.json`
> - Landing page is `index.mdx`
> - Document pages are `title.md`

### My Thoughts

- Easy setup that leads you through all necessary steps (and lets you start right away with an empty template)
- I really like some of the default designs in Starlight, especially the [cards](https://starlight.astro.build/components/cards/) and the stylized [list items](https://starlight.astro.build/components/steps/)

 Since I haven't spend a lot of time playing around with this, here some feedback from another user:
- [Building a documentation site using Astro Starlight](https://maciekpalmowski.dev/blog/building-a-documentation-site-using-astro-starlight/)
- [Astro for Documentation Sites: Insights After 6 Months](https://maciekpalmowski.dev/blog/astro-for-documentation-sites-insights-after-6-months/)

### Example Sites

- [Astro Documentation](https://docs.astro.build/en/getting-started/)
- [Patchstack Documentation](https://docs.patchstack.com/)