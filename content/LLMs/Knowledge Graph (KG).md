---
{"publish":true,"permalink":"/LLMs/Knowledge Graph (KG).md","cssclasses":""}
---


Aside from adding [[LLMs/LLMS.txt]] and files to your documentation website and using [[LLMs/Retrieval Augmented Generation (RAG)]], you can add Knowledge Graphs.

A Knowledge Graph is a structured representation of information as entities (nodes) and relationships (edges) — like a network of facts about your system, APIs, concepts, and how they connect. The dataset is usually stored in a graph database. However, for simple use cases, you _can_ represent a small knowledge graph as a local file, e.g., JSON-LD, RDF, Turtle, or CSV format, and keep it in your site’s repo for indexing or LLM/RAG purposes.

### Auto-generate a Knowledge Graph

- Use LLMs to extract entities and relationships from your docs (e.g., APIs, modules, error codes, dependencies).
- Tools like LangChain’s KG Retriever or Haystack’s KG pipelines help integrate this.

## Formats

- **RDF / Turtle** (for Semantic Web)
- **JSON-LD** (for structured data, LLM-readable)
- **CSV triples** (`subject, predicate, object`)
- **GraphML** or **Neo4j format** (for databases)

Place a `knowledge-graph.jsonld` or `knowledge-graph.csv` file in the root directory of your [[Concepts/Documentation]] website or a hidden `/llm/` directory.
For scalable use, load it into a graph database (e.g., Neo4j, Weaviate, TerminusDB) that can be queried at retrieval time.

### About the JSON-LD Format

In JSON-LD, the `:` separates a **prefix** from a **term**, like this:

```json
"name": "product:name"
```

This means:
- `product` is a prefix that maps to a URL base (defined in the `"@context"`)
- `name` is the actual property

So `"product:name"` becomes `https://example.com/product#name` (fully qualified), see example below.

> [!info]
> JSON-LD keywords:
> - `@context` defines the mapping between prefixes and full URIs
>- `@type` defines what type of thing the object is (like a class in RDF)
>- `@id` can optionally define a globally unique ID for an entity
> 


### Example API Reference (JSON-LD format)

Create a file: `knowledge-graph.jsonld`  
Put it in your project root or `docs/llm/` folder.

The following example represents:
- `LoginEndpoint` calls `JWTService` and returns an `AccessToken`
- `JWTService` is used by `LoginEndpoint`

```json
{
  "@context": {
    "api": "https://example.com/api#",
    "name": "api:name",
    "type": "@type",
    "calls": "api:calls",
    "returns": "api:returns",
    "usedBy": "api:usedBy"
  },
  "@graph": [
    {
      "name": "LoginEndpoint",
      "type": "api:Endpoint",
      "calls": "JWTService",
      "returns": "AccessToken"
    },
    {
      "name": "JWTService",
      "type": "api:Service",
      "usedBy": "LoginEndpoint"
    },
    {
      "name": "AccessToken",
      "type": "api:DataObject"
    }
  ]
}
```

### Example Product Website (JSON-LD format)

Typical entities on product websites:

- **Product components**: Dashboard, Analytics, Notification System
- **User roles**: Admin, Viewer, Contributor
- **Features**: Real-time reports, Dark mode, Email alerts
- **Integrations**: Slack, Stripe, Zapier
- **Plans**: Free, Pro, Enterprise
- **Pages**: `home`, `pricing`, `getting-started`, `troubleshooting`

Typical relationships on product websites:

- `offersFeature`
- `requires`
- `usedBy`
- `hasIntegration`
- `relevantFor`
- `availableInPlan`

Create a file: `product-kg.jsonld`
If a user asks: _"What integrations are available in the Pro plan?"_, the LLM can:
- Look up components in the `ProPlan`
- Get their `offersFeature`
- Check if those features have `hasIntegration` links

```json
{
  "@context": {
    "product": "https://example.com/product#",
    "name": "product:name",
    "type": "@type",
    "offersFeature": "product:offersFeature",
    "hasIntegration": "product:hasIntegration",
    "availableInPlan": "product:availableInPlan",
    "relevantFor": "product:relevantFor"
  },
  "@graph": [
    {
      "name": "AnalyticsDashboard",
      "type": "product:Component",
      "offersFeature": ["RealTimeReports", "EmailAlerts"],
      "availableInPlan": ["ProPlan", "EnterprisePlan"]
    },
    {
      "name": "RealTimeReports",
      "type": "product:Feature",
      "relevantFor": "Admin"
    },
    {
      "name": "EmailAlerts",
      "type": "product:Feature",
      "hasIntegration": "Slack"
    },
    {
      "name": "Slack",
      "type": "product:Integration"
    },
    {
      "name": "ProPlan",
      "type": "product:Plan"
    },
    {
      "name": "EnterprisePlan",
      "type": "product:Plan"
    },
    {
      "name": "Admin",
      "type": "product:UserRole"
    }
  ]
}
```
