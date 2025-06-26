---
tags:
  - static-site-generator
dg-publish: true
---
[Sphinx](https://www.sphinx-doc.org/en/master/) is one of many [[Static Site Generators]] that focus on [[Documentation]]. Sphinx uses reStruturedText and/or [[Markdown]] files to build a local html website. 

## Resources

- [Installing Sphinx](https://www.sphinx-doc.org/en/master/usage/installation.html)
- [Getting Started](https://www.sphinx-doc.org/en/master/usage/quickstart.html)

## Features

- Supports reStructuredText as well as [[Markdown]] (as an extension). For more information, see [[Markdown vs AsciiDoc vs reStructuredText]].
- Offers functionality to [generate documentation based on docstrings](https://www.sphinx-doc.org/en/master/tutorial/automatic-doc-generation.html) .
- Functionaliry can be extended using [extensions](https://www.sphinx-doc.org/en/master/usage/extensions/index.html).

Quote from their website:

> Sphinx can also be used to generate blogs, homepages and even books. Much of Sphinx’s power comes from the richness of its default plain-text markup format, reStructuredText.

> [!info]
> - Command to build static website: `make html`
> - Command to build epub: `make epub`

## My Thoughts

- Quick setup, I like the quickstart option to get started fast
- High learning curve (if you're not a python developer) compared to other docs focused [[Static Site Generators]]
- The table of contents (TOC) configuration was very confusing (probably because I'm not used to it and tried to go the Markdown route), but apparently there are some plugins that make it easier to create TOCs, see [Sphinx External TOC](https://github.com/executablebooks/sphinx-external-toc).
- As a beginner to Sphinx and reStructuredText, I'd recommend using Sphinx with reStructuredText instead of the Markdown extension

## Example Sites

List of example sites: [https://www.sphinx-doc.org/en/master/examples.html](https://www.sphinx-doc.org/en/master/examples.html "https://www.sphinx-doc.org/en/master/examples.html")
    
- Furo theme: [Blender Documentation](https://docs.blender.org/api/current/)
 - PyData theme: [Jupyter](https://docs.jupyter.org/en/latest/start/index.html)
 - ReadTheDocs theme: [ReadTheDocs](https://docs.readthedocs.io/en/stable/intro/sphinx.html)

Examples of Books:
- [The Hitchhiker's Guide to Python](https://docs.python-guide.org/)
- [Theoretical Physics Reference](https://www.theoretical-physics.com/dev/index.html)
- [Professional Software Development](https://mixmastamyk.bitbucket.io/pro_soft_dev/)