---
publish: true
---

Vale is an open source style & grammar Linter.
It enforces style guides and integrates into CI/CD alongside [[MkDocs]] and other [[Static Site Generators]].

## Resources
- [Vale Website](https://vale.sh/)
- [Vale Documentation](https://vale.sh/docs)
- [Vale Config Generator](https://vale.sh/generator)
- [Vale Extension for VS Code](https://marketplace.visualstudio.com/items?itemName=ChrisChinchilla.vale-vscode)

## Setup

1. Install Vale from the [Vale GitHub project](https://github.com/errata-ai/vale).
2. Create a `.vale.ini` config file in the **root of your MkDocs project**:
```ini
StylesPath = .vale-styles 
# StylesPath → location of custom rules
MinAlertLevel = suggestion
# MinAlertLevel → can be `suggestion`, `warning`, or `error`.

# Directories to lint
[*.{md,markdown}]
BasedOnStyles = Google, write-good
# BasedOnStyles → choose base style guides (Vale ships with Google, Microsoft, write-good, etc.).

```
3. Create a folder `.vale-styles` to add style rules, e.g., a rule to avoid “simply”:
```yaml
# .vale-styles/Custom/Weasel.yml
extends: existence
message: "Avoid using '%s' — it can weaken your writing."
ignorecase: true
level: warning
tokens:
  - simply
  - obviously
  - clearly

```
4. Run both `mkdocs serve` and `vale --watch docs/` in two terminals to check your docs. `--watch` makes Vale continuously lint files and show warnings whenever you save changes. So you have MkDocs hot-reload in one terminal, Vale linting in another. Alternatively use a script to run both commands at once:
```bash
mkdocs serve &
vale --watch docs/
wait
```

## Editor Integration

- **VS Code** → The official [Vale extension](https://marketplace.visualstudio.com/items?itemName=ChrisChinchilla.vale-vscode) highlights issues _inline_ in your Markdown while typing. 
- **Notepad++** → No direct Vale plugin, but you could:
       - Add a **“Run Vale” external tool** mapped to a hotkey (`Plugins → NPPExec` or `Run` menu).
    - Vale outputs to a console window inside Notepad++, though not inline highlighting.

## Style Guides

Vale ships with the following pre-built style guides you can include in your `.vale.ini`:

- `write-good` → Based on the classic “write-good” linter (passive voice, weasel words, filler).
- `Google` → Based on the Google Developer Documentation Style Guide.
- `Microsoft` → Based on the Microsoft Writing Style Guide.
- `RedHat` → Based on Red Hat’s style guidelines.
- `IBM` → Based on IBM style rules.
- `proselint` → A prose linter with general grammar & style checks.

## Custom Rules

Write rules as `.yml` files under `.vale-styles/`, e.g., `.vale-styles/STE/` and reference them in `valve.ini` using `BasedOnStyles = STE`. If you have a custom style guide you can gradually codify each rule into Vale rules. For example:

- “Don’t use contractions” → `substitution` rule.
- “Always use Oxford comma” → `existence` rule.
- “Avoid jargon” → `substitution` rule with preferred alternatives.

### Examples

- Restrict vocabulary:
```yaml
# .vale-styles/STE/AllowedTerms.yml
extends: substitution
message: "Use '%s' instead of '%s' (Simplified Technical English rule)."
level: error
ignorecase: true
swap:
  utilise: use
  commence: start
  terminate: stop

```
- Enforce short sentences:
```yaml
# .vale-styles/STE/SentenceLength.yml
extends: occurrence
message: "Sentences in STE should be fewer than 20 words."
scope: sentence
level: warning
max: 20
```
- Passive voice:
```yaml
# .vale-styles/STE/PassiveVoice.yml
extends: existence
message: "Passive voice is not allowed under STE; use active voice."
level: error
ignorecase: true
tokens:
  - "\\b(is|was|were|are|been|being) \\w+ed\\b"
```
- Enforce capitalization in page titles:
```yaml
extends: capitalization
message: "'%s' should be in title case"
level: warning
scope: text.frontmatter.title
```
- Avoid "..."
```yaml
extends: existence
message: "Don't use ... in documentation."
nonword: true
action:
  name: remove
tokens:
  - '...'
```