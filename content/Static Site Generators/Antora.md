---
{"publish":true,"permalink":"/Static Site Generators/Antora.md","created":"2025-06-25T21:24:32.272+02:00","modified":"2025-12-29T21:07:40.448+01:00","published":"2025-12-29T21:07:40.448+01:00","tags":["static-site-generator"],"cssclasses":""}
---

[Antora](https://antora.org/) is a [[Static Site Generators/Static Site Generators]] that uses the markup language AsciiDoc. For information on AsciiDoc, see [[Markup Languages/Markdown vs AsciiDoc vs reStructuredText]].

## Resources

- [Antora Documentation](https://docs.antora.org/antora/latest/install-and-run-quickstart/)
- [AsciiDoc Syntax Quick Reference](https://docs.asciidoctor.org/asciidoc/latest/syntax-quick-reference/)

>[!info] 
> Run Antora using the following command:
> ```npx antora antora-playbook.yml```

## Features

- Playbooks instead of config files or build scripts that describe:
	- Which repos/branches to gather content from
	- Which UI/theme to apply
	- Where to publish the site
- Multi-repository documentation
- Reuse shared materials (DRY)
- Built-in versioning
- [Extensions](https://docs.antora.org/antora/latest/extend/extensions/)
- Source‑to‑source references using resource IDs instead of links based on paths/URLs

## My Thoughts

- Harder to set up than most other [[Static Site Generators/Static Site Generators]] I've tested
- Very powerful

## Example Sites

- [Antora Documentation](https://docs.antora.org/antora/latest/)
- [Antora Demo on ReadTheDocs](https://example-antora-basic.readthedocs.io/en/latest/main/index.html)
- [Antora with Lightbend Theme](https://lightbend.github.io/antora-supplemental-ui-lightbend-theme/build/site/index.html)