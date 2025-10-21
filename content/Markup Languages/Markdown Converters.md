---
{"publish":true,"permalink":"/Markup Languages/Markdown Converters.md","created":"2025-06-25T21:24:32.257+02:00","modified":"2025-06-26T21:00:23.697+02:00","published":"2025-06-26T21:00:23.697+02:00","cssclasses":""}
---


- Pandoc: convert between markup languages
- MarkItDown: convert various files to markdown

### Pandoc

[Pandoc](https://pandoc.org/) is a document converter that can convert files from one markup format into another. 

This can be useful when switching [[Static Site Generators/Static Site Generators]] that use different markup languages. The following [[Markup Languages/Markdown]] flavours are supported:

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

[MarkItDown](https://github.com/microsoft/markitdown) is an open source tool provided by Microsoft to convert files to [[Markup Languages/Markdown]]. The following file types are supported:

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