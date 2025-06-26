---
dg-publish: true
---

- Pandoc: convert between markup languages
- MarkItDown: convert various files to markdown

### Pandoc

[Pandoc](https://pandoc.org/) is a document converter that can convert files from one markup format into another. 

This can be useful when switching [[Static Site Generators]] that use different markup languages. The following [[Markdown]] flavours are supported:

- `markdown_phpextra` (PHP Markdown Extra)
- `markdown_github` (deprecated GitHub-Flavored Markdown)
- `markdown_mmd` (MultiMarkdown)
- `markdown_strict` (Markdown.pl)
- `commonmark` (CommonMark)
- `gfm` (Github-Flavored Markdown)
- `commonmark_x` (CommonMark with many pandoc extensions)

> [!caution]
> Markdown syntax extensions or SSG-specific syntax is not supported!

### MarkItDown

[MarkItDown](https://github.com/microsoft/markitdown) is an open source tool provided by Microsoft to convert files to [[Markdown]]. The following file types are supported:

- PDF
- PowerPoint
- Word
- Excel
- Images (EXIF metadata and OCR)
- Audio (EXIF metadata and speech transcription)
- HTML
- Text-based formats (CSV, JSON, XML)
- ZIP files (iterates over contents)

Installation using pip:
```cmd
pip install markitdown
```

Basic usage in Python:
```python
from markitdown import MarkItDown 
md = MarkItDown() 
result = md.convert(“test.xlsx”) 
print(result.text_content)
```

For more information, see [Microsoft Open Sourced MarkItDown: An AI Tool to Convert All Files into Markdown for Seamless Integration and Analysis](https://www.marktechpost.com/2024/12/18/microsoft-open-sourced-markitdown-an-ai-tool-to-convert-all-files-into-markdown-for-seamless-integration-and-analysis/).