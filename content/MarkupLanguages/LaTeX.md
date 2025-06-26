---
tags:
  - editor
  - markup-lang
dg-publish: true
---

LaTeX is a software system for typesetting documents. LaTeX uses a [[WYSIWYM]] approach. The writer uses markup tagging conventions to define the general structure of a document, to stylise text throughout a document (such as bold and italics), and to add citations and cross-references. A TeX distribution such as TeX Live or MiKTeX is used to produce an output file, e.g. .pdf.

LaTeX is widely used in academia for the communication and publication of scientific documents and technical note-taking in many fields, owing partially to its support for complex mathematical notation.

Reference: [[Schipka-Internship-Report.pdf]], [[DWD-Report.pdf]]
## My Setup

- TeX-System: MiKTeX
- Editor: Texmaker
- PDF-Reader: Sumatra
## Structure of Programm Codes

`\command [options] {Package/Text}`

Examples:
`\documentclass{scrreprt}`
`\usepackage[ngerman]{babel}`
`\chapter{Introduction}`
## Document Classes

- `book` (2 page books)
- `beamer` (presentation)
- `article` (article, no chapters)
- `report` (long reports)
- `scrbook`, `scrartcl`, `scrreprt` (same as above, but more flexible)
## Outlines

- `\chapter{…}`  (begins a new page, e.g., "1 Chapter")
- `\section{…}` (e.g. "1.1 Section")
- `\subsection {…}` (e.g. "1.1.1 Subsection")
- `\subsubsection {…}` (no more numbering)
- `\paragraph {…}`
- `\subparagraph {…}`
## Standard Commands

- `\\` (new paragraph, alternatively add empty line)
- `\\{distance}` (adds custom vertical distance)
- `%` (comment)
- `$`(start math mode)
- `$$` (extended math mode)
- `\<specialCharacters>` (e.g. %)
## Hello World!

```
\documentclass{scrreprt}
\usepackage[ngerman]{babel}
\usepackage[T1]{fontenc}
\usepackage[latin1]{inputenc}

\begin{document}
Hello World!
\end{document}
```
## Lists

Unsorted list:
```
\begin{itemize}
 \item An Item
 \item Another Item
 \begin{itemize}
 \item Sub-Item
 \end{itemize}
\end{itemize}
```
Sorted list:
```
\begin{enumerate}
 \item First Item
 \item Zweiter Punkt
 \begin{enumerate}
 \item Sub-Item
 \end{enumerate}
\end{enumerat
```

## Tables

`\begin{tabular}{r c l}`

- `{r c l}` (every letter represents a column)
	- `r` (right aligned)
	- `c` (central)
	- `l` (left aligned)
- `|` (creates a vertical line)
- `&` (separates columns)
- `\\` (ends a row)
- `\hline` (creates a horzintal line)
- `\multirow{rows}{width}{content}` (multiple rows, uses package `\usepackage{multirow}`)
- `\multicolumn{colums}{alignment}{content}`(multiple rows)
## Images

```
\usepackage{graphicx}
\graphicspath{{Images/}}
\includegraphics[size]{image-name}
```

Examples for image sizes:
- `scale=0.5`
- `width=10cm`
- `width=.8\textwidth`

Images as sliding objects:
```
\begin{figure}
 \centering
 \includegraphics[size]{image-name}`
 \caption{Bildunterschrift}
 \label{Label für das Bild}
\end{figure}
```
## Title Page

```
\title{Titel}
\author{Name}
\date{Datum}
\begin{document}
\maketitle
…
\end{document}
```
## Table of Content

```
\begin{document}
\tableofcontents
…
\end{document}
```
## Append PDF

```
\usepackage{pdfpages}
\begin{document}
…
\includepdf[pages=x-y]{path/filename.pdf}
…
\end{document}
```
## Header & Footer

```
\usepackage{fancyhdr}
\pagestyle{fancy}
\fancyhf{}
\fancyhead[L]{Linke Seite}
\fancyhead[C]{Mitte}
\fancyhead[R]{Rechte Seite}
\renewcommand{\headrulewidth}{0.5pt}
\def\chapterpagestyle{fancy} (adds header also for chapters)
\cfoot{\pagemark}
```
