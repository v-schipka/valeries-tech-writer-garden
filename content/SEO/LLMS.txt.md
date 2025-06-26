
An LLMs.txt file lets you set clear rules for AI-driven search engines, similar to robots.txt for search engine crawlers. Like robots.txt, these files are typically located at the root of your domain.

Why use LLMs.txt:
• **Content Ownership:** Maintain control over how your website content is used by AI systems.
• **Transparency:** Communicate clear guidelines to AI platforms about access and permissible use.
• **Adaptability:** Tailor permissions for specific AI tools or services.

llms.txt generator: https://llms-txt.org/
Samples: https://llmstxt.site/
More information: https://fusionauth.io/blog/llms-for-docs

> [!tip]
> You can offer the LLMs.txt file as a download, so that users can feed their LLM to interact with your documentation content.

## How to Create Effective LLMs.txt Files

To create effective `llms.txt` files, consider these guidelines:

- Use concise, clear language.
- When linking to resources, include brief, informative descriptions.
- Avoid ambiguous terms or unexplained jargon.
- Test a number of language models to see if they can answer questions about your content.


> [!attention]
> You might want to use a script or plugin to automatically update your llms.txt file, similar to the sitemap.xml file, see [mkdocs-llmstxt](https://github.com/pawamoy/mkdocs-llmstxt) for [[MkDocs]] or [docusaurus-plugin-llms](https://github.com/rachfop/docusaurus-plugin-llms) for [[Docusaurus]].

### Example

``` markdown
# FastHTML

> FastHTML is a python library which brings together Starlette, Uvicorn, HTMX, and fastcore's `FT` "FastTags" into a library for creating server-rendered hypermedia applications.

Important notes:

- Although parts of its API are inspired by FastAPI, it is *not* compatible with FastAPI syntax and is not targeted at creating API services
- FastHTML is compatible with JS-native web components and any vanilla JS library, but not with React, Vue, or Svelte.

## Docs

- [FastHTML quick start](https://answerdotai.github.io/fasthtml/tutorials/quickstart_for_web_devs.html.md): A brief overview of many FastHTML features
- [HTMX reference](https://raw.githubusercontent.com/path/reference.md): Brief description of all HTMX attributes, CSS classes, headers, events, extensions, js lib methods, and config options

## Examples

- [Todo list application](https://raw.githubusercontent.com/path/adv_app.py): Detailed walk-thru of a complete CRUD app in FastHTML showing idiomatic use of FastHTML and HTMX patterns.

## Optional

- [Starlette full documentation](https://gist.githubusercontent.com/path/starlette-sml.md): A subset of the Starlette documentation useful for FastHTML development.
```

## LLMs-full.txt

While **`llms.txt`** is an index file containing links to the content, **`llms-full.txt`** includes all the detailed content directly in a single file. 
`llms-full.txt`files can be located anywhere, but must be referenced in the `llms.txt`file, e.g.;

```
# llms.txt at https://www.company.com/llms.txt

User-Agent: *
Disallow: /admin/
Allow: /

Full: https://www.company.com/product-a/llms-full.txt
Full: https://www.company.com/product-b/llms-full.txt

```

For extensive documentation, the l`llms-full.txt`file may become too large to fit into an LLM's context window. In this case, you can reference additional `llms-full.txt` in you `llms.txt`file:


### Best Practices

- Break your content into logical groups (e.g., per product, version, or section).
- Keep each `llms-full.txt` file to a manageable size (consider sitemap-style limits: ~50MB or ~50,000 entries).
- Make sure **all `llms-full.txt` files are linked from the main `llms.txt`** — crawlers **do not recursively follow from one `llms-full.txt` to another**.

## Summary

- ✅ One `llms.txt` at the root
- ✅ As many `llms-full.txt` files as needed
- ✅ All `llms-full.txt` must be referenced with `Full:` lines in `llms.txt`
- ❌ Do not nest `Full:` links inside `llms-full.txt`