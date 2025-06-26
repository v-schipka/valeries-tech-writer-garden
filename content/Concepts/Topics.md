---
{"publish":true,"permalink":"/Concepts/Topics.md","tags":["conventions"],"cssclasses":""}
---


Technical writers usually write and organize documentations as topics. A  topic is a block of documentation that helps users to accomplish a specific goal. 

>[!note] A topic sturcture makes it easier to create new content. Topics are reusable.

Types of topics:

- [[Concepts/Topics#Concept Topic]]: Discover a new concept
- [[Concepts/Topics#Task Topic]]: Learn how to do something
- [[Concepts/Topics#Reference Topic]]: Locate a specific piece of information
- [[Concepts/Topics#Troubleshooting Topic]]: Work through an issue

## Concept Topic

Concepts provide background that helps users understand a product, a task they need to perform, a process, or any other conceptual or descriptive information, see [[Templates/Concept Topics]] or [[Templates/Overview Pages]].

Structure:
- A title (advised to be phrased as a gerund)
- One or more body paragraphs
- Optional: One or more examples
- Optional: Two or more subsections, marked by subheadings
- Optional: A list of related topics

Examples:
- [Using Cohorts in Your Courses](https://edx.readthedocs.io/projects/edx-partner-course-staff/en/latest/course_features/cohorts/cohorts_overview.html#cohorts-overview "(in Building and Running an edX Course)")
- [Develop a Positive Discussion Culture](https://edx.readthedocs.io/projects/edx-partner-course-staff/en/latest/manage_discussions/moderate_discussions.html#develop-a-positive-discussion-culture "(in Building and Running an edX Course)")
- [Using the Course Wiki](https://edx.readthedocs.io/projects/edx-partner-course-staff/en/latest/course_assets/course_wiki.html#course-wiki "(in Building and Running an edX Course)")

## Task Topic

Task topics answer “How do I?” questions, see [[Templates/Task Topics]] or [[Templates/How-to Articles]] / [[Templates/Tutorials]]. A task topic only contains a single procedure. It consists of multiple steps, where each step describes a single action or command. A step can also describe the step results.

Structure:
- A title (advised to be phrased as imperative)
- Context (information about why the user would complete this task in terms of goals, and not in terms of the software application, e.g.,“To complete {goal}, follow these steps.”
- Two or more task steps in an ordered list
- Optional: A brief description (between title and context statement)
- Optional: Prerequisites (if a task has one or more prerequisites, list them before step 1 of the procedure)
- Optional: The result of the task

Examples:
- [Enable the Third Party Authentication Feature](https://edx.readthedocs.io/projects/edx-installing-configuring-and-running/en/latest/configuration/tpa/tpa_integrate_open/index.html#enable-the-third-party-authentication-feature "(in Installing, Configuring, and Running the Open edX Platform)")
- [Decrypt an Encrypted File](https://edx.readthedocs.io/projects/devdata/en/latest/access/credentials.html#decrypt-an-encrypted-file "(in EdX Research Guide)")
## Reference Topic

Reference topics provide data that is looked up rather than memorized. Reference topics often use lists, tables and descriptions of commands in a programming language, see [[Templates/Reference Articles]].

Structure:
- A title (contains a qualifier and noun to distinguish between reference topics and tasks, e.g., _Grafana CLI_)
- Introduction (explains what to expect from this topic)
- Body paragraph (usually uses tables or lists to provide information)

Examples:
- [Calculation types](https://grafana.com/docs/grafana/latest/panels-visualizations/query-transform-data/calculation-types/)
- [Grafana CLI](https://grafana.com/docs/grafana/latest/cli/)

>[!note] 
>[[API Documentation]] is usually a reference topic, but it has its own guidelines.

## Troubleshooting Topic

Troubleshooting is a systematic approach to solving a problem. Troubleshooting can be one of three types: 
- Introductory
- Task
- Reference

### Introductory Topic

This topic introduces the troubleshooting section of a page. Example:

``` markdown
## Troubleshooting

When working with <x feature>, you might encounter the following issues.
```

### Troubleshooting Task

The title should be similar to a standard [[Concepts/Topics#Task Topic]], e.g., “Run debug tools” or “Verify syntax.”

### Troubleshooting Reference

This topic includes the message. Example:

``` markdown
### The message or a description of it

You might get an error that states <error message>.

This issue occurs when...

The workaround is...
```

>[!note]  
>Title of a Troubleshooting Reference topic:
>- State the type of message at the start of the title, e.g., `Error:`, `Warning:`
>- Include at least a partial output message (if the message is longer than 70 characters, include the text that’s most important, or describe the message)
>- Do not use links in the title.
>
>If you do not put the full message in the title, include it in the body text.


>[!tip]
>- Use "workaround" for temporary solutions and ""resolution"" and ""resolve" for permanent solutions
>- If multiple causes or solutions exist, use a table format
>-  If you use the exact error message, style it as code
>
