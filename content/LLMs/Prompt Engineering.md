---
{"publish":true,"permalink":"/LLMs/Prompt Engineering.md","created":"2026-03-22T15:16:28.503+01:00","modified":"2026-03-22T15:22:15.828+01:00","published":"2026-03-22T15:22:15.828+01:00","cssclasses":""}
---


**Prompt engineering** is the practice of designing and refining the instructions (prompts) to give an AI model so it produces the desired output. A prompt can include:
- instructions
- questions
- examples
- constraints
- desired output formats

Prompt engineering focuses on how to phrase a request, what structure to use, and what examples to include to guide the model’s response. 
[[LLMs/LLMs]] respond differently depending on how a request is written. Prompt engineering is about crafting prompts that lead the model toward accurate, useful, and consistent results.


## About Prompts

A well-designed prompt often includes several elements.

1. Clear instructions (tell the model what role it should take or what task it should perform)
	- Example: "You are a technical writer. Explain the following concept for beginners."
2. Context (provide relevant information the model should consider)
	- Example: "This documentation is for developers who are new to REST APIs."
3. Input data (the content the model should work on)
	- Example: "Code snippet: `function add(a, b) { return a + b; }`"
4. Output format (specify how the response should be structured)
	- Example: "Respond using the following format: Description: ... Parameters: ... Example: ..."
5. Examples (show the model examples of the desired behavior)
	- Example: "Input: HTTP 404  | Output: The requested resource was not found on the server." 

## Why Prompt Engineering Matters

Effective prompts can:

- Improve answer accuracy
- Reduce hallucinations
- Control tone and style
- Produce structured outputs
- Make AI behavior more predictable

## Example

Basic prompt:
```
Explain recursion.
```

Improved prompt:
```
Explain recursion to a beginner programmer.  
  
Requirements:  
- Use simple language  
- Provide a short code example in Python  
- Limit the explanation to 150 words
```



## Common Prompt Engineering Techniques

### Zero-shot prompting

Ask the model to perform a task without examples.
```
Translate this sentence into Spanish.
```

### Few-shot prompting

Provide examples to guide the model.
```
English: Hello  
Spanish: Hola  
  
English: Goodbye  
Spanish:
```

### Chain-of-thought prompting

Encourage the model to show intermediate reasoning steps.
```
Solve this math problem step by step.
```

### Role prompting

Assign the model a role to influence tone and expertise.
```
You are an experienced software architect.
```


---

## Prompt Engineering vs Context Engineering

| Prompt Engineering                  | Context Engineering                      |
| ----------------------------------- | ---------------------------------------- |
| Focuses on crafting the prompt      | Designs the full information environment |
| Usually a single prompt/instruction | Multiple inputs and data sources         |
| Simpler workflows                   | System-level design                      |

Prompt engineering is part of [[LLMs/Context Engineering]].

## Where Prompt Engineering Is Used

Prompt engineering is widely used in:

- AI writing assistants
- AI coding assistants
- documentation tools
- chatbots
- research assistants


> [!note]
> When building an AI assistant for technical writing, prompt engineering defines things like:
> - how documentation is generated
> - how your style guide is enforced
> - how output structure is controlled
    