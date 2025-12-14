---
{"publish":true,"permalink":"/Tools & Scripts/Create VS Code Extensions.md","created":"2025-01-06T12:52:09.344+01:00","modified":"2025-06-26T20:58:49.208+02:00","published":"2025-06-26T20:58:49.208+02:00","cssclasses":""}
---

## Prerequisites

- Install Node.js
- Install the template generator with `npm install -g yo generator-code`

## Generate a VS Code Extensions

1. Open your terminal and run `yo code`. 
2. Follow the prompts in the terminal (select the type of the extension, enter a name for the extension, etc.). At the end, a folder with files for the extension is created. ![prompts](https://www.freecodecamp.org/news/content/images/2020/06/Screenshot-from-2020-05-26-23-07-28.png)
3. Open the extension folder in VS Code.
4. Write your commands in the file `extensions.js`(or `extensions.ts` depending on the extension type).
5. Edit the `package.json` to link your commands from the `extension.js` with your code. For more information, see [npm: package.json](https://docs.npmjs.com/cli/v11/configuring-npm/package-json).
6. If yneed to import modules (defined as dependencies in `package.json`), run the command `npm install` in the extension folder.
7. Test the extension by pressing F5, then Crtl+Shift+P to open the command palette and enter the title of your command.

In case of errors, open the Output panel (Ctrl+Shift+U) and select `Extension Host` from the dropdown to troubleshoot.