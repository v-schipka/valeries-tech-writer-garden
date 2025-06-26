---
{"publish":true,"permalink":"/Knowledge Management Tools/Obsidian.md","cssclasses":""}
---


[Obsidian](https://obsidian.md/) is a software application to write notes and gather / structure knowledge in a non-linear way. The notes are saved as local markdown files that can be internally linked and visualized.

## Resources

- [Getting Started (Download & Install)](https://help.obsidian.md/Getting+started/Download+and+install+Obsidian)
- [Basic formatting Syntax](https://help.obsidian.md/Editing+and+formatting/Basic+formatting+syntax)
- [Core Plugins](https://help.obsidian.md/Plugins/Core+plugins)
- [Obsidian Digital Garden](https://dg-docs.ole.dev/)
- [Smart Connections (Chatbot)](https://github.com/brianpetro/obsidian-smart-connections)

## Shortcuts

- Use **Ctrl + P** to enter commands, e.g., **Publish Multiple Notes**, **Open Weekly Note**, etc.
- **Ctrl + O** to look up or create notes
- Higlight text + 2x left bracket to create a new link
- Highlight text and right-click + **Extract current selection...** to make a new note out of the text

## Tasks

- **Task** plugin, see [Task User Guide](https://publish.obsidian.md/tasks/) and [Task User Guide: Recurring Tasks](https://publish.obsidian.md/tasks/Getting+Started/Recurring+Tasks).
- **Kanban** plugin, see [Obsidian Kanban](https://github.com/mgmeyers/obsidian-kanban)
- **Trello** plugin, see [Obsidian Trello](https://github.com/nathonius/obsidian-trello)
 
## Weekly Notes

1. Create a note that can be used as a template for weekly notes.
2. Install the community plugin **Periodic Notes** (and optionally the **Calendar** and **Task** plugins).
3. Open the settings of the **Periodic Notes**.
4. In the field **Format**, enter `[Journal]/YYYY/YYYY-[W]ww`. This saves new weekly notes in a folder "Journal". 
5. In the field **Weekly Note Template**, enter  the name of a template file, e.g. `templates/weekly`.

Variables (tags) in weekly notes:

| Tag                                  | Description                                                                                                                                                                                                  |
| -------------------------------------| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `title`                               | Works the same as the daily note `{{title}}`. It will insert the title of the note                                                                                                                           |
| `date`, `time`                         | Works the same as the daily note `{{date}}` and `{{time}}`. It will insert the date and time of the first day of the week. Useful for creating a heading (e.g. `# {{date:gggg [Week] ww}}`).                 |
| `sunday`, `monday`, `tuesday`, <br>`wednesday`, `thursday`, <br>`friday`, `saturday`, `sunday` | Because weekly tags refer to main days, you can refer to individual days like this `{{sunday:YYYY-MM-DD}}` to automatically insert the date for that particular day. Note, you must specify the date format! |

>[!tip] 
>Add the following content at the beginning of the weekly template to create a header:
>`←[[{{date-1w:GGGG-[W]WW}}]] | [[{{date:GGGG}}]] | [[{{date+1w:GGGG-[W]WW}}]]→`
>
>![header](https://forum.obsidian.md/uploads/default/optimized/3X/6/1/6128f201bdd6af5b1d0d0fa0a28e83afd492df1e_2_690x254.jpeg)

## Publish Notes

Instead of the regular **Publish** plugin, follow the tutorial below to publish your Osidian notes using the free **Digital Garden** plugin.

Tutorial:
https://www.youtube.com/watch?v=eULVrTjT11w

Once the Digital Garden is set up, make sure to add the property *dg-publish* to the notes you want to publish and set the property to *true*.

> [!tip]
> To share single notes, you can use the **Share Note** plugin.
> You can also publish Obsidian notes using [[Static Site Generators/Static Site Generators]], especially [[Static Site Generators/Docusaurus]] in combination with the [Obsidiosaurus](https://mdxjs.com/docs/getting-started/) tool.

## What I use it for

I use Obsidian to take notes (about general topics I'm interested in as well as for personal projects) and cultivate a [[Concepts/Digital Garden]], see https://garden-ruby-sigma.vercel.app/.
