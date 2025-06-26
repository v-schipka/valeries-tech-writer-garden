---
{"publish":true,"permalink":"/Markup Languages/Markdown vs AsciiDoc vs reStructuredText.md","tags":["markup-lang"],"cssclasses":""}
---


[[Markup Languages/Markdown]], AsciiDoc and reStructuredText are markup languages that are used for docs-as-code [[Concepts/Documentation]].

#### Markdown

**Markdown** is used by the majority of [[Static Site Generators/Static Site Generators]].Because the Markdown syntax is very simple, there is often the need to extend its capabilities by combining Markdown with embedded HTML or even syntax extension, e.g., [Python Markdown](https://python-markdown.github.io/extensions/). There are also different sytax flavors.


 #### **ReStructuredText**
 
 **reStructuredText** is widely used in the Python community, e.g., [WriteTheDocs](https://www.writethedocs.org/) and [Sphynx](https://www.sphinx-doc.org/en/master/index.html). reStructuredText offers more advanced formatting than Markdown and also targets web applications.

#### AsciiDoc

**AsciiDoc** is used by some static site generators (e.g., [[Static Site Generators/Antora]]) and is best suited for printing. AsciiDoc offers flexibility without the use of HTML or flavors for essential syntax such as tables, description lists, admonitions (tips, notes, warnings, etc.) and table of contents.

## Resources

- [Syntax Comparisson Table](https://diegocarrasco.com/markup-languages-cheatsheet/)
- [Markdown, Asciidoc, or reStructuredText - a tale of docs-as-code](https://www.dewanahmed.com/markdown-asciidoc-restructuredtext/)