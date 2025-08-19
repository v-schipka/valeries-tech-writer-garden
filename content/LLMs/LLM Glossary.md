---
{"publish":true,"permalink":"/LLMs/LLM Glossary.md","cssclasses":""}
---


**Chunk:**
Section of content that an LLM can process effectively (LLMs have token limits and chunking makes searching, embedding, and retrieving easier)

**Context Window:**
Number of tokens (words + punctuation) and LLM can “see” at once à chunk sizes need to fit withing the context windows, e.g., 4k, 32k, 128k tokens.

**Custom GPT / Assistant:**
A version of ChatGPT or another model that has specific files, instructions, and behavior tailored to a particular task or organization, like Microsoft Copilot chatbots.

**Document Loader:**
Reads raw content (e.g., HTML, Markdown, PDFs) and parses it into structured chunks for embedding or graphing.

**Embedding:**
Numerical representation (vector) of a text chunk that captures its meaning for search, retrieval and comparison.

**Grounding:**
The process of **linking LLM answers to trusted source material**, like your own docs to reduce hallucinations.

**Indexing:**
Converts chunks into embeddings and stores them in a searchable database (often a vector database).

**[[LLMs/Knowledge Graph (KG)]]:**
A structured network of entities (nodes) and relationships (edges) that describe how concepts in your system connect.

**[[LLMs/LLMS.txt]]:**
Basically a Robots.txt for LLMs.

**[[LLMs/Retrieval Augmented Generation (RAG)]]**:
A technique where an LLM retrieves relevant documents or chunks from an external source before generating a response (used for support bots and internal doc assistants)

**Semantic Search:**
A search that finds results based on **meaning** rather than exact keywords, powered by embeddings and similarity comparison.

**Vector Database:**
A database designed to store and search embeddings.
