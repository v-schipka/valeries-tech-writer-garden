
A modern [[Documentation]] model proposed by Fabrizio Ferri Benedetti, see [Blog: Passo Uni](https://passo.uno/seven-action-model/). The actions are similar to typical documentation [[Topics]].

The 7 actions in detail:
- [Appraise (Discern)](https://passo.uno/seven-action-model/#appraise-discern)
-  [Understand (Learn)](https://passo.uno/seven-action-model/#understand-learn)
- [Explore (Discover)](https://passo.uno/seven-action-model/#explore-discover)
- [Practice (Train)](https://passo.uno/seven-action-model/#practice-train)
- [Remember (Recall)](https://passo.uno/seven-action-model/#remember-recall)
- [Develop (Integrate)](https://passo.uno/seven-action-model/#develop-integrate)
- [Troubleshoot (Solve)](https://passo.uno/seven-action-model/#troubleshoot-solve)

## Actions and Content Types:

| **Action**   | **Topic types**                                        | **DITA elements**                                       |
| ------------ | ------------------------------------------------------ | ------------------------------------------------------- |
| Appraise     | Overview, Product description, Service description     | `<topic>`, `<concept>`                                  |
| Understand   | Conceptual guide, Explanation, Glossary                | `<concept>`, `<glossentry>`, `<section>`                |
| Explore      | Quick start, Tutorial, Sandbox, Lab                    | `<task>`, `<step>`, `<substep>`                         |
| Practice     | How-to guide, User guide, Tutorial                     | `<task>`, `<step>`, `<choicetable>`                     |
| Remember     | API reference, Command reference, Glossary             | `<reference>`, `<refsyn>`, `<properties>`               |
| Develop      | Integration guide, Development guidelines, Style guide | `<task>`, `<codeblock>`, `<coderef>`                    |
| Troubleshoot | Troubleshooting, Error reference, Optimization guide   | `<troubleshooting>`, `<trouble>`, `<cause>`, `<remedy>` |

## Sample Structure

-   Feature one
    - Overview (Appraise)
    - Quick start (Explore)
    - Concepts of `<feature>`
	- Tutorials (Practice)
        - Tutorial one
        - Tutorial two
    - Settings (Remember)
    - Troubleshooting
- Feature two…
- API reference (Remember)
- Build your add-on (Develop)