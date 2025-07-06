---
{"publish":true,"permalink":"/Static Site Generators/MkDocs in Vercel.md","cssclasses":""}
---

Vercel is a shared hosting platform for websites like the ones created by  [[Static Site Generators/MkDocs]] and other [[Static Site Generators/Static Site Generators]]. 

## Prerequisites

- [gitGub](https://github.com/) account
- [Vercel](https://vercel.com/) account

## Host MkDocs Documentation in Vercel

Follow the steps below to publish your MkDocs project with Vercel:

1. Create an [[Static Site Generators/MkDocs]] project.
2. In the root directory of your project, create a file `requirements.txt`.
3. In the `requirements.txt` file, add the names of any plugins used in the project (and the Material theme if needed). Example:
	```
	mkdocs-material
	mkdocs-macros-plugin
	mkdocs-awesome-pages-plugin
	```
4. Create a git repository for the project on gitHub.
5. Push your content to gitHub.
6. Create a new project in Vercel.
7. Import your git repository.
8. In the project settings, set: ```
	```
	Framework Preset: Other
	Build Command: mkdocs build
	Output Directory: site
	Install Command: pip install -r requirements.txt
	```
9. Deploy the Vercel project.


![[images/vercel.png]]