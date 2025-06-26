---
{"publish":true,"permalink":"/Conventions & Guidelines/Feeding Chatbots.md","tags":["conventions"],"cssclasses":""}
---

[[Concepts/Documentation]] can be used to feed chatbots. While I personally do not like them, integrating chatbots in online documentation usually enhances interactivity with users. So, here are some tips on how to make documentation more chatbot-friendly / easier to parse. 

See also [[SEO/LLMS.txt]].
## Use Clear and Consistent Structure

- **Headings and Subheadings**: Clearly define sections with meaningful, hierarchical headings (`h1`, `h2`, `h3`, etc.). This helps the chatbot understand the structure and purpose of different sections.
- **Bullet Points and Lists**: Use bullet points or numbered lists for enumerations, steps, or items. Chatbots can process lists more easily than dense paragraphs.
- **Tables**: Use tables for structured data. Ensure tables are clean, well-labeled, and easy to parse.
- **Short Paragraphs**: Keep paragraphs short (2-3 sentences). Chatbots handle concise information better than large, complex blocks of text.

## Use Semantic Markup

- **Markdown, HTML, or XML**: Choose formats that are easy to parse. Markdown is simple, and chatbots can typically handle it. When using HTML or XML, use semantic tags like `<strong>`, `<em>`, `<code>`, etc., to add meaning to content.
- **Code Blocks**: Mark code snippets (using backticks in Markdown or `<code>` tags in HTML). Avoid mixing code and narrative text in the same paragraph.

## Optimize Language

- **Avoid Ambiguity**: Use simple, unambiguous sentences. Chatbots sometimes struggle with long or complex sentences.
- **Define Terms and Acronyms**: Spell out technical acronyms the first time they appear, e.g., "Application Programming Interface (API)".
- **Avoid Idiomatic Language**: Use straightforward language and avoid idiomatic expressions, that confuses the chatbot.

## Metadata and Annotations

- **Metadata for Context**: Provide relevant metadata (version, date, topic, etc.) at the beginning of sections or documents, so the chatbot understands the context.
- **Inline Comments or Annotations**: Add annotations or comments in your source files, e.g., in Markdown or HTML, you can use comments like `<!-- This section describes... -->`. Some chatbots use these for additional context.

## Ensure Consistency

- **Terminology**: Use consistent terms for the same concepts throughout the documentation. Chatbots rely on patterns, so varying terminology confuse it.
- **Command and Configuration Examples**: Always provide usage examples alongside explanations, and keep the format consistent.
- **Standard Phrasing**: When describing common actions or processes, stick to standard phrasing like "To do X, follow these steps…" or "In order to configure Y…".

## Chunk Information

- **Modular Content**: Break documentation into logical, self-contained chunks. This makes it easier for a chatbot to retrieve relevant information without needing to process a whole document.
- **FAQs or Troubleshooting Sections**: Include FAQ sections with direct, clear answers to common questions. These sections are typically easier for chatbots to retrieve and respond to.

## JSON or API Access

- **Structured Data**: If your static site generator supports it, you can output the content in structured formats like JSON. Chatbots can query this data more easily compared to raw HTML or Markdown.
- **Search API**: If your documentation site has a search API, expose that for the chatbot to query the content dynamically rather than processing the entire site.

## Create a Knowledge Graph (Optional)

- If your chatbot supports advanced features like knowledge graphs, structure your documentation in such a way that each term, concept, or process can be linked. Tools like RDF (Resource Description Framework) can help represent this structured knowledge.
