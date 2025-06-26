---
dg-publish: true
---

[Fork](https://git-fork.com/) is a git client for Mac and Windows.

# Clone Repository from GitHub to Local Machine

1. Open the gitHub page of the repository in your browser.
2. Navigate to **Code > HTTPS**. ![url](https://github.com/v-schipka/images/blob/main/obsidian/Fork-Clone.png?raw=true)
3. Copy the HTTPS address to your clipboard.
4. Open Fork. 
5. Go to **File > Clone**. 
6. The HTTPS address from your clipboard should already be available in the field **Repository URL**. If not, paste it there.<br> ![clone](https://helpcenter.theobald-software.com/assets/images/editorial-guide/setup/fork.png)
7. In the field **Parent Folder**, select a local path for the repository.
8. Click **Clone**.

The repository is now available on your local machine.

# Upload Local Content to GitHub

Use the following instructions if you have content in a local folder that you want to track with git:

1. Open gitHub in your browser and navigate to the menu **Your repositories**.
2. Click **New** to create a new repository.
3. Enter a name for the repository.
4. Click **Create repository**.
5. Copy the HTTPS address of the new repository.
6. Open Fork.
7. Go to **File > Init New Repository**.
8. Select your local folder.
9. Commit the content.
10. Click **Push** (1).<br> ![new](https://github.com/v-schipka/images/blob/main/obsidian/Fork-New.png?raw=true)
11. Select **Remote > Add Remote** (2).
12. Paste the HTTPS address from your repository into the field **Repository URL**. (3).
13. Click **Add New Remote**.
14. Open gitHub in your browser to check if the content is available.

# Revert Commits

Right-click a commit and select **Revert** from the context menu. This will create a new commit that will undo the changes from the commit you want to revert.

# Interactive Rebase

Use the interactive rebase when it is necessary to edit a past commit, e.g., if the erroneous commit is not your last commit, and you don’t want to lose any of the work in between.

1. Locate the last commit BEFORE the erroneous commit.
2. Right-click the commit and select **Interactive Rebase > Interactively Rebase 'main' to Here** from the context menu. The window "Interactive Rebase" opens and displays all commits after the selected commit - including the erroneous commit.
3. Open the drop-down menu of the erroneous commit to select an action. **Edit** allows you to edit the content that was committed. <br> ![Fork-Rebase.png](https://github.com/v-schipka/images/blob/main/obsidian/Fork-Rebase.png?raw=true)
4. Will add further instruction when this is needed again...

# Hacks

- For some useful tips, refer to the [Official Blog](https://fork.dev/blog/).
- Search specific files that were edited: **Ctrl+P -> File history -> filename**. <br> ![Fork-Search.png](https://github.com/v-schipka/images/blob/main/obsidian/Fork-Search.png?raw=true)
