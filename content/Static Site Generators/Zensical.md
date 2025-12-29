---
{"publish":true,"permalink":"/Static Site Generators/Zensical.md","created":"2025-12-29T19:48:24.451+01:00","modified":"2025-12-29T21:12:05.948+01:00","published":"2025-12-29T21:12:05.948+01:00","cssclasses":""}
---


[Zensical](https://zensical.org/) is one of many [[Static Site Generators/Static Site Generators]] for technical [[Concepts/Documentation]]. It is the official successor to [[Static Site Generators/MkDocs]] Material theme.

## Resources
- [Zensical Getting Started](https://zensical.org/docs/get-started/)
- [Zensical Setup](https://zensical.org/docs/setup/basics/)
- [Zensical Docker Image](https://hub.docker.com/r/zensical/zensical)

## Features
- Same feature set as [[Static Site Generators/MkDocs]] + Material theme
- Compatible with [[Static Site Generators/MkDocs]] Material setups
- Will probably support the most popular mkdocs plugins in the future, see [Backlog](https://github.com/orgs/zensical/projects/2)

## Use Zensical in a Container

The following Docker commands are for the Windows command line tool:
```bash
docker run --rm -it -v "%cd%:/docs" -w /work zensical/zensical <command>
```

Explanation:
- `docker run` creates and starts a container from an image.
	- If the image is not present → Docker pulls it
	- If it _is_ present → Docker starts it immediately
- `--rm` automatically deletes the container when it stops.
	- No clutter in Docker Desktop
	- No “stopped containers” piling up
	- Your project files are safe because they live on your machine
- `-it` is actually two flags combined:
	- `-i` → _interactive_ keeps STDIN open so the container can receive input.
	- `-t` → _terminal_ allocates a pseudo-terminal so output looks normal (colors, prompts, etc.).
	- You can see logs
	- You can stop the server with **Ctrl+C**
	- You can interact with the process
- `-p 8000:8000` is the port mapping (`HOST_PORT : CONTAINER_PORT` or port on your machine and port inside the container)
- `-v "%cd%:/docs"` is the volume (bind mount)
	- `%cd%` is a Windows CMD variable representing the current directory on your machine  
	- `:/docs` is the path inside the container
	- `:/work` the working directory inside the container
- `zensical/zensical` is is the Docker image name (Docker Hub user / Image name).


To use Zensical inside [[Tools & Scripts/Docker (Containers)]]:
1. Pull the official Docker image: `docker pull zensical/zensical`.
2. Create a new folder for your project: `mkdir my-zensical-project` and `cd my-zensical-project`.
3. Create a new Zensical project using the Docker image: `docker run --rm -it -v "%cd%:/docs" -w /work zensical/zensical new .`
4. Edit your project, work on it, do your regular workflows.
5. Start the Zensical web server to serve a preview of your project: `docker run --rm -it -p 8000:8000 -v "%cd%:/docs" zensical/zensical`.
6. Build your project: `docker run --rm -it -v "%cd%:/docs" -w /work zensical/zensical build´.


> [!note]
> You _could_ create the project **inside Docker only**, but then:
> - Files live inside the container
> - You must `docker cp` them out later
> - Container removal deletes your work    
