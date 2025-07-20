---
{"publish":true,"permalink":"/LLMs/Retrieval Augmented Generation (RAG).md","cssclasses":""}
---


Aside from adding [[LLMs/LLMS.txt]] and [[LLMs/Knowledge Graph (KG)]] files to your documentation website, you can use Retrieval-Augmented Generation (RAG) pipelines for your [[Concepts/Documentation]] website.

RAG is a technique where a language model retrieves relevant external documents (e.g., from your docs or a database) and uses them as context to generate more accurate, grounded answers.

### Preprocessing & Chunking

- **Semantic chunking**: Instead of naive chunking by paragraphs or headers, chunk based on semantic coherence (e.g., full code examples + explanations).
- **Chunk metadata**: Add structured metadata to each chunk (e.g., `component: auth-api`, `language: python`, `version: v3.1`) to enable more effective filtering in retrieval.

#### Example

```markdown
<!-- chunk:start:auth-api:login -->
## Authentication API - Login

The `/auth/login` endpoint allows users to...

<!-- chunk:end -->
```

These help parsers split docs precisely for chunking/indexing during RAG ingestion.

### Embedding Strategies

- **Hybrid search**: Use both vector search and keyword-based filtering (e.g., BM25 or filtering by tags/components).
- **Multi-granularity indexing**: Index both fine-grained chunks (function-level) and higher-level concepts (module-level) to answer both “how” and “why” questions.

