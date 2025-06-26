---
share_link: https://share.note.sx/xf8yaldt#mr8HamJp2GuuonRpX/mOgCGTOrqRYEnchdlntXT3AyA
share_updated: 2024-12-06T16:39:29+01:00
---
Code documentation refers to documenting source code, e.g., using comments.

Keeping documentation within source code comments is one way to simplify the documentation process, as well as increase the chances that the documentation will be kept up to date with changes in the code.

### Automatic Documentation Generation

Programming tools sometimes store documentation and metadata in comments, e.g., insert positions for automatic header file inclusion, commands to set the file's syntax highlighting mode, or a revision number. These control comments are also called "annotations". 

C#, F# and Visual Basic .NET implement a similar feature called "XML Comments" which are read by IntelliSense from the compiled .NET assembly.

> [!example]- Some Examples for Documentation Generators
> - [Javadoc](https://docs.oracle.com/javase/8/docs/technotes/tools/windows/javadoc.html) for use with Java
> - [Ddoc](https://dlang.org/spec/ddoc.html) for D
> - [Doxygen]((https://www.doxygen.nl/) for C, C++, Java, IDL (Doxygen is a static site generator that builds docs from source code comments. It's old school from the days before REST APIs were common.)
> - [Visual Expert](https://www.visual-expert.com/) for PL/SQL, Transact-SQL, PowerBuilder (Visual Expert is a static code analysis tool)
> - [PHPDoc](https://phpdoc.org/) for PHP
> - [docstring](https://datascientest.com/de/docstring-was-ist-das-wozu-dient-es) is supported by Python, Lisp, Elixir, and Clojure (Docstring is a string literal specified in source code that is used, like a comment to document a specific segment of code. Unlike conventional source code comments, or formatted comments like docblocks, docstrings are not stripped from the source tree when it is parsed and are retained throughout the runtime of the program. This allows the programmer to inspect these comments at run time, for instance as an interactive help system, or as metadata.)

#### Docs from XML Comments

Tools that accept XML documentation input:
- [DocFX](https://dotnet.github.io/docfx/): _DocFX_ is static site generator for API documentation for .NET, which currently supports C#, Visual Basic, and F#. 
- [Sandcastle](https://github.com/EWSoftware/SHFB): The _Sandcastle tools_ create help files for managed class libraries containing both conceptual and API reference pages. The Sandcastle tools are command-line based and have no GUI front-end, project management features, or automated build process. A Visual Studio integration package is also available for it so that help projects can be created and managed entirely from within Visual Studio.
- [Doxygen](https://github.com/doxygen/doxygen): _Doxygen_ is static site generator that build docs from a set of documented source files. There's also support for generating output in RTF (MS Word), PostScript, hyperlinked PDF, compressed HTML, DocBook, and Unix manual pages. You can configure Doxygen to extract the code structure from undocumented source files.

### Resources for good XML Documentation

- [Recommended Tags](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/xmldoc/recommended-tags)
- [Examples](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/xmldoc/examples)


