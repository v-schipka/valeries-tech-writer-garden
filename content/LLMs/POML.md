---
{"publish":true,"permalink":"/LLMs/POML.md","created":"2025-08-19T20:20:04.861+02:00","modified":"2025-08-19T21:03:56.533+02:00","published":"2025-08-19T21:03:56.533+02:00","cssclasses":""}
---


Prompt Orchestration Markup Language (POML) is a markup language that offers structure, readability, modularity, and maintainability for AI prompt engineering. 

> [!tip]
> POML is best used in combination with [[LLMs/Retrieval Augmented Generation (RAG)]].

## Resources

- [Microsoft POML Doumentation](https://microsoft.github.io/poml/latest/)
- [YouTube Tutorial](https://www.youtube.com/watch?v=b9WDcFsKixo)
- [Visual Studio Code POML Extension](https://marketplace.visualstudio.com/items?itemName=poml-team.poml)

## Key Features

- Semantic components:
	- `<role>`
	- `<task>`
	- `<example>` 
- Data components:
	- `<document>`
	- `<table>`
	- `<img>`
- Styling (e.g., verbosity, syntax format):
	- `<stylesheet>`
- Javascript expressions:
	- **Variables:** `{{variableName}}`
	- **Arithmetic:** `{{a + b}}`, `{{x * y}}`, `{{count / total}}`
	- **String Concatenation:** `{{firstName + " " + lastName}}`
	- **Array Access:** `{{myArray[0]}}`
	- **Object Property Access:** `{{myObject.propertyName}}`
	- **Function Calls:** `{{myFunction(arg1, arg2)}}` (if `myFunction` is defined in the context)
	- **Ternary Operators:** `{{condition ? valueIfTrue : valueIfFalse}}`
	- **Accessing loop variables:** `{{loop.index}}` (explained in the "For Attribute" section)

## Examples

### General Use
``` html
<poml>
  <role>You are a patient teacher explaining concepts to a 10-year-old.</role>
  <task>Explain the concept of photosynthesis using the provided image as a reference.</task>

  <img src="photosynthesis_diagram.png" alt="Diagram of photosynthesis" />

  <output-format>
    Keep the explanation simple, engaging, and under 100 words.
    Start with "Hey there, future scientist!".
  </output-format>
</poml>
```

### Import Data from a File

```html
<poml>
  <let name="users" src="users.json" />
  <p>First user: {{users[0].name}}</p>
</poml>
```

### Style Class

```html
<poml>
  <table className="csv" records="[[1,2,3],[4,5,6]]"/>
  <stylesheet>
    {
      ".csv": {
        "syntax": "csv",
        "writerOptions": "{\\"csvSeparator\\": \\";\\", \\"csvHeader\\": false}"
      }
    }
  </stylesheet>
</poml>
```

### Combination with RAG

In a typical RAG pipeline, you have:
1. **User Query → Retriever**
    - Vector search or hybrid search pulls top-K documents from your knowledge base.
2. **Context Assembly*
    - Normally, devs concatenate retrieved chunks into a giant string prompt.
    - With **POML**, you can structure this step cleanly.
3. **LLM Prompt Execution**
    - POML renders a prompt with `<role>`, `<task>`, `<document>`, etc., which feeds into the LLM.
    
Without POML:
```
You are a helpful assistant. Answer the question.
Documents:
[doc1] ...
[doc2] ...
Question: What are the side effects of Drug X?
```
With POML:
```html
<poml>
  <role>You are a medical assistant providing safe, factual answers.</role>
  <task>
    Based on the provided documents, summarize the side effects of Drug X.
    If unsure, say "I don’t know."
  </task>

  <context>
    <documents>
      <document id="doc1" source="PubMed"> 
        {{ retrieved_doc_1 }}
      </document>
      <document id="doc2" source="FDA">
        {{ retrieved_doc_2 }}
      </document>
    </documents>
  </context>

  <output-format>
    List common side effects in bullet points. 
    Keep under 150 words.
  </output-format>
</poml>

```