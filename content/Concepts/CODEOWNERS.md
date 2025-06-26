---
{"publish":true,"permalink":"/Concepts/CODEOWNERS.md","cssclasses":""}
---

In **docs-as-code** workflows using **static site generators** (like Jekyll, [[Static Site Generators/Hugo]], Docusaurus, [[Static Site Generators/MkDocs]], etc.), the term **CODEOWNERS** refers to a special file (named `CODEOWNERS`) used in **Git repositories**, particularly with **GitHub**, to define who is responsible for specific files or directories in the codebase—including documentation files.

## What Is a GitHub CODEOWNERS File?

- It’s a **plain text file** (usually located at `.github/CODEOWNERS`, `docs/CODEOWNERS`, or the root).
- It lists **paths** and assigns **users or teams** as **owners** of those paths.
- Owners are automatically requested for **reviews** when a Pull Request (PR) changes files they own.
- This integrates with **GitHub's code review and permissions system**.

### CODEOWNERS Example in GitHub

```
# Global owner for everything
*       @team-docs

# Specific owner for documentation
/docs/  @alice @bob

# Owner for a specific file
/docs/index.md  @carol
```

This means:
- All files: reviewed by `@team-docs`
- Anything in `/docs/`: reviewed by `@alice` and `@bob`
- Only `index.md` in `/docs/`: reviewed by `@carol`

## What Are Owners in the Front Matter?

You can **embed ownership metadata directly inside the content files**, instead of (or in addition to) using GitHub’s `CODEOWNERS` file.

### Owners vs Code owners

Use `owner` if:
- You just want to identify a **person/team responsible** for a page.
- The field is mostly for **display purposes** (e.g., show "Owner: @alice" on the site).
- You want a simple, general label.

Example:
```
---
title: "API Reference"
owner: "@carol"
---
```

Use `codeowner` (or `codeowners`) if:
- You want to **mirror or align** with GitHub’s `CODEOWNERS` system.
- You're building tooling that connects **front matter to GitHub reviewers**.
- Your automation scripts or CI workflows expect this field.

Example:
```
---
title: "Getting Started"
codeowner: "@alice"
---
```

Use both if you want to distinguish between roles:
- **differentiate editorial vs. review responsibility**:
- `owner` = the person who maintains or writes the content
- `codeowners` = people required to review for accuracy or compliance

Example:
```
---
title: "Onboarding Guide"
owner: "@content-strategy"
codeowners:
  - "@hr-team"
  - "@legal-team"
---
```

## Typical Pull Request Flow in Docs-as-Code

1. **Create a new branch**  
    You branch off from `main` to make a change.  
    Example: `fix-typo-in-getting-started`
2. **Make changes**  
    You edit a `.md` file or other docs content.
3. **Commit and push** your changes to the remote repository (e.g., GitHub).
4. **Open a pull request**  
5. **Code review happens**  
    Reviewers (often assigned via `CODEOWNERS`) check your changes.
6. **Feedback or approval**  
    Reviewers may comment, request changes, or approve.
7. **Merge the PR**  
    Once approved, your changes become part of the `main` branch.