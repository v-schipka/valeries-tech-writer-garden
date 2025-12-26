---
{"publish":true,"permalink":"/LLMs/LLMs.md","created":"2025-12-26T19:37:42.007+01:00","modified":"2025-12-26T19:54:17.166+01:00","published":"2025-12-26T19:54:17.166+01:00","cssclasses":""}
---


Large language models (LLMs) are trained with machine learning on a vast amount of text for natural language processing.  The largest and most capable LLMs are generative and pre-trained. They provide the core capabilities of modern chatbots. LLMs can be fine-tuned for specific tasks or guided by prompt engineering.

## Infrastructure

```
┌──────────────────────────────────────────────┐
│                  USER / CLI                  │
└───────────────────────┬──────────────────────┘
                        │
                        ▼
┌──────────────────────────────────────────────┐
│                    AGENT                     │
│        (LLM + planning / control loop)       │
└───────────────┬───────────────┬──────────────┘
                │               │
                │               │
        Knowledge request     Action request
                │               │
                ▼               ▼
        ┌────────────────┐  ┌────────────────┐
        │      RAG       │  │     SKILLS     │
        │ (Retrieval     │  │ (Build, lint,  │
        │  strategy)     │  │  validate)     │
        └───────┬────────┘  └───────┬────────┘
                │                   │
                ▼                   ▼
┌──────────────────────────────────────────────┐
│              APPLICATION INFRASTRUCTURE      │
│   (direct calls OR MCP server – optional)    │
└───────────────────────┬──────────────────────┘
		                │
		                ▼
┌──────────────────────────────────────────────┐
│               DATA ACCESS LAYER              │
│                                              │
│  ┌────────────────┐                          │
│  │ Document       │  → chunking, metadata    │
│  │ Loader         │                          │
│  └───────┬────────┘                          │
│          ▼                                   │
│  ┌─────────────────┐                         │
│  │ Vector Database │  → semantic retrieval   │
│  └───────┬─────────┘                         │
│          ▼                                   │
│  ┌─────────────────┐                         │
│  │ Knowledge Graph │  → entities, relations  │
│  └─────────────────┘                         │
└──────────────────────────────────────────────┘
		                │
		                ▼
┌──────────────────────────────────────────────┐
│               SOURCE OF TRUTH                │
│         (Git repo, docs, configs)            │
└──────────────────────────────────────────────┘
```

## Glossary

**[[LLMs/Agents]]**:
An agent is an LLM (or LLM loop) that receives a goal, breaks it into steps, chooses which skills to use and decides when to stop.

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

**Generative AI**: 
A subfield of artificial intelligence for generating text, images, videos, audio, software code or other forms of data. Generative models learn the underlying patterns and structures of their training data and use them to produce new data.

**Grounding:**
The process of **linking LLM answers to trusted source material**, like your own docs to reduce hallucinations.

**Indexing:**
Converts chunks into embeddings and stores them in a searchable database (often a vector database).

**[[LLMs/Knowledge Graph (KG)]]:**
A structured network of entities (nodes) and relationships (edges) that describe how concepts in your system connect.

**[[LLMs/LLMS.txt]]:**
Basically a Robots.txt for LLMs.

**[[MCP Servers]]**:
A Model Context Protocol (MCP) server hosts skills, RAGs, exposes files, tools, APIs and enforces permissions. The agent never talks to your system directly — it talks to MCP.

**Prompt Engineering**:
The process of structuring or crafting instructions that produce better outputs from a generative artificial intelligence (AI) model. It involves clear queries, adding relevant context, and refining wording to guide the model toward more accurate, useful, and consistent responses.

**[[LLMs/Retrieval Augmented Generation (RAG)]]**:
A technique where an LLM retrieves relevant documents or chunks from an external source, injects it into the agent’s context and prevents hallucination (used for support bots and internal doc assistants).

**Semantic Search:**
A search that finds results based on **meaning** rather than exact keywords, powered by embeddings and similarity comparison.

**[[LLMs/Skills]]:**
A skill is an executable capability with a clear interface that produces an output.

**Vector Database:**
A database designed to store and search embeddings.
