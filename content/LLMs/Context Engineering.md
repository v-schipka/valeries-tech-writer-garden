---
{"publish":true,"permalink":"/LLMs/Context Engineering.md","created":"2026-03-22T15:16:33.423+01:00","modified":"2026-03-22T15:20:49.649+01:00","published":"2026-03-22T15:20:49.649+01:00","cssclasses":""}
---


**Context engineering** is the practice of designing what information (context) to give an AI model so it produces the optimal output. It ensures that [[LLMs/LLMs]] receives:
- the right instructions
- the right background information
- the right examples
- the right external data
- the right constraints

Instead of just writing a prompt, context engineering focuses on structuring the information the model consumes - instructions, examples, data, tools, and history.

> Context engineering is like preparing a workspace for the AI before asking it to do a task.

## About Context

Typical context elements include:

1. System instructions (role definition, style or rules, safety constraints)
	- Example: "You are a technical documentation assistant that follows this style guide."
2. User instructions (the actual question or task)
	- Example: "Summarize this API documentation."
3. Reference documents (extra knowledge added to the prompt)
	- Examples: company style guide, codebase snippets, documentation, research papers
4. Examples that show the model how to behave
	- Example input: "Explain this error: NullPointerException", example output: "Cause: ... Fix: ... Example:..."
5. Retrieved knowledge (external sources retrieved dynamically using systems like [[LLMs/Retrieval Augmented Generation (RAG)]] or [[MCP Servers]]).
6. Tool outputs (results from tools such as databases, APIs, calculators, code interpreters)


## Why Context Engineering Matters

LLMs are very sensitive to context. Good context engineering can:

- Improve accuracy
- Reduce hallucinations
- Make responses more consistent
- Control tone and structure
- Enable complex workflows

## Example

Without context:
```
Write documentation for this function.
```

With context engineering:
```
You are a technical writer. 
Follow this style guide: `[style guide]`.  
  
Audience:  
Beginner developers.  
  
Output format:  
- Description  
- Parameters  
- Example  
  
Function:  
[code snippet]
```

## Context Engineering vs Prompt Engineering

| Prompt Engineering             | Context Engineering                      |
| ------------------------------ | ---------------------------------------- |
| Focuses on crafting the prompt | Designs the full information environment |
| Usually one instruction        | Multiple structured inputs               |
| Static                         | Often dynamic                            |
| Smaller scope                  | System-level design                      |

Prompt engineering is part of context engineering.

## Where It's Used

Context engineering is common in:

- AI coding assistants
- documentation tools
- knowledge base chatbots
- AI agents
- research copilots


> [!note]
> When building an AI assistant for technical writing, context engineering is one of the most important design parts - especially when injecting a style guide markdown file and documentation examples into prompts.

