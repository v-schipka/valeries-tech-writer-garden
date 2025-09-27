---
{"publish":true,"permalink":"/Concepts/Virtual Environments for Docs Projects.md","cssclasses":""}
---


Virtual environments are self-contained workspaces for projects.

Working with documentation in a docs-as-code environment usually involves [[Static Site Generators/Static Site Generators]] such as [[MkDocs] or [[Sphinx]]. These tools transform plain text files into documentation websites. They usually also come with dependencies - and that's where virtual environments come in.

## Without Virtual Environments

Installing documentation tools globally on your machine (e.g., `pip install mkdocs` or `npm install -g docusaurus`), can lead to the following problems:

- **Version Conflicts**: Different documentation projects may need different versions of the same tool. For example, Project A might use MkDocs 1.5, while Project B needs MkDocs 1.6 with a plugin that doesn’t exist in 1.5.
- **Cluttering Mess**: The system’s Python or Node environment gets cluttered with packages only needed for one project.
- **Reproducibility Issues**: If a teammate or CI pipeline installs slightly different versions, your docs may render differently—or break entirely.
- **Harder Debugging**: When something fails, it’s harder to know whether it’s the project setup or your global environment causing the problem.

## With Virtual Environments

In a virtual environment your project’s dependencies are self-contained . Each documentation project can have its own environment with exactly the right versions of Python packages, Node modules, or other tools.

Benefits:
- ✅ **Isolation**: Dependencies for one project don’t affect another.
- ✅ **Consistency**: Everyone working on the project can install the same versions via `requirements.txt` or `package.json`.
- ✅ **Reproducibility**: Your CI/CD pipeline can recreate the environment exactly, avoiding “works on my machine” issues.
- ✅ **Clean System**: Your computer stays free of unnecessary global installations.

## Practical Examples

- [[Static Site Generators/MkDocs]] (Python):
	``` bash
	python -m venv .venv # creates the virtual environment
	.venv\Scripts\activate # activates the virtual environment
	pip install -r requirements.txt # installs all Python packages (and their versions) your documentation project depends on
	mkdocs serve 
	# activate the virtual environment every time you run a local preview of your documentation
	```
- [[Static Site Generators/Docusaurus]] (Node.js)
	```bash
	npm install # installs dependencies into node_modules for this project
	npm run start
	```

> [!note]
> [[Static Site Generators/Docusaurus]] and other Node-based static site generators don’t use Python-style virtual environments. Instead, they isolate dependencies using **`package.json` + `node_modules/`**, sometimes paired with a lockfile (`package-lock.json` or `yarn.lock`).
