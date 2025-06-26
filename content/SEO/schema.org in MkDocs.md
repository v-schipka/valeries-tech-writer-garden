Schema.org provides a standardized vocabulary of tags (structured data) that you can add to your HTML to help search engines understand the content of your pages.

### Schema Types for Documentation

For documentation, common Schema types might include:

- [`TechArticle`](https://schema.org/TechArticle) – For technical documentation and how-to guides.
- [`Article`](https://schema.org/Article) – For general content.
- [`FAQPage`](https://schema.org/FAQPage) – If your documentation includes frequently asked questions.
- [`SoftwareApplication`](https://schema.org/SoftwareApplication) – If you're documenting an app or tool.

> [!tip]
> Refer to Google's [feature guide](https://developers.google.com/search/docs/appearance/structured-data/article) for examples and best practices.


### Add JSON-LD in the MkDocs Material Theme

The most maintainable way to add JSON-LD to [[MkDocs]] and the MAterial theme is by embedding **JSON-LD** (JavaScript Object Notation for Linked Data) into your site’s HTML.

If you use the `mkdocs-material` theme, simply edit or extend your `main.html` template:

```html
{% block extrahead %}

{% if page.meta %}
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "{{ page.title }}",
  "description": "{{ page.meta.description | default('Technical documentation page.') }}",
  "author": {
    "@type": "Person",
    "name": "Your Name or Organization"
  },
  "datePublished": "{{ git_creation_date_localized | default('2024-01-01') }}", 
  "url": "{{ page.canonical_url }}"
}
</script>
{% endif %}

{% endblock %}
```

If you do not use the [mkdocs-git-revision-date-localized-plugin](https://timvink.github.io/mkdocs-git-revision-date-localized-plugin/) plugin, but track the date in the frontmatter of your .md files, you can replace `git_creation_date_localized` with `page.meta.date`. In this case, your frontmatter requires a `date` item. Example:

```yaml
---
title: "Getting Started"
description: "How to install and use the project."
date: 2025-05-10
---
```

> [!tip]
> You can create a template for each Schema type and reference the template in the frontmatter of your .md files. You can also mass-assign a template using Material's build-in [meta plugin](https://squidfunk.github.io/mkdocs-material/plugins/meta/).
> ```yaml
> ---
> title: "Getting Started"
> description: "How to install and use the project."
> template: TechArticle.html
> ---
> ```

### Check the Schema

After publishing your documentation, you can validate your schema using the [Schema Markup Validator](https://validator.schema.org/) or Google's [Rich Results Test](https://search.google.com/test/rich-results).

### Example for SoftwareApplication

I added the following structured data to the template that I use for my documentation landing page:

```html
{% block extrahead %}

  {% if page.meta %}
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "myProduct",
    "operatingSystem": "Windows",
    "applicationCategory": "BusinessApplication",
    "url": "https://myCOmpany.com/myProduct/",
    "description": "{{ page.description | default('Technical documentation of myProduct.') }}",
    "author": {
      "@type": "Organization",
      "name": "myCompany",
      "url": "https://myCompany.com/"
    }
  }
  </script>

  {% endif %}
  
{% endblock %}
```