---
tags:
  - conventions
dg-publish: true
---

This is my personal reference sheet on when/how to use screenshots in [[Documentation]].

## When to use Screenshots

"The main focus is on the user, if an additional screenshot is necessary for understanding, place a screenshot."

Additional benefits of using more screenshots:
- Less text
- Less translation effort
- Lower error probability

HOWEVER, if you need multiple screenshots for a single action, [[Animations]] are a good alternative.

## Storing & Naming Screenshots

- Creating new subfolders for new content and placing the new screenshots into existing subfolders simplifies search and ensures order in the image repository.
- For better searching it is also advisable to use a self-explanatory file name.
- Replace empty spaces with '-', e.g., "file-name.png" instead of "file name.png"

## Size, Resolution & Quality

The following instructions are based on the software [Greenshot](https://getgreenshot.org/downloads/).

When manually resizing a file size, the quality of the image decreases. To prevent quality loss, use other screenshot taking options:

- Capture window **[Alt]+[Print]** - to capture only a prompted window
- Capture full screen **[Ctrl]+[Print]** - to capture full screen and crop image in the editor. The quality does not decrease  when the image is cropped. 

PNG is the recommended file type for online content. JPEG is not forbidden, but remember that .jpeg files are more compressed and this may lead to quality loss. In Greenshot .png is set by default. To check or change output file type in Greenshot, navigate to **Settings > Output > Image format**. 

## Frames & Shadows
When creating a screenshot of a prompted window with the option *Capture Window* (**[Alt]+[Print]**), the frame appears automatically.

When a screenshot only covers details of a window, use *Capture region* (**[Print]**) or / then crop the image to the needed size and add a shadow **[CTRL]+[Q]**. 

## Highlights 
Highlighting refers to marking any kind of elements on a screenshot.
The following guidelines refer to the color, style and usage of highlighting elements.

### General
- Use only one specific color for any kind of highlighting, e.g., #FF003C (255,0,60). 
- Use one specific line thickness, e.g., - 3pt.
- Avoid cursors in screenshots unless it's helpful for understanding.

![greenshot](https://helpcenter.theobald-software.com/assets/images/editorial-guide/screenshot-conventions/greenshot_marking_color.png)

### Style & Type of Highlighting

- Use squares to highlight parts of a screenshot. It is easier to keep them consistent, e.g., hold down **[Ctrl]** when drawing to have the object anchored in it's geometrical middle. 
- Avoid arrows, use arrows only for movement (e.g. Drag&Drop). 
- Avoid mixture of elements, don't use ovals. 

> [!tip]
> It is better not to use shadows for the highlighting as it might cover important information.

## Position Numbers
Use position numbers for action steps. 
- Make sure not to cover important information (buttons, text) when placing position numbers. Place the position numbers in reading direction (from left to right & clockwise) or depending on steps order. 
- Use the default position numbers provided in Greenshot.
- When an instruction contains images with position numbers, always address the position numbers in the text. 

