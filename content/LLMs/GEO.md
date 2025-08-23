---
{"publish":true,"permalink":"/LLMs/Seeding Tips.md","cssclasses":""}
---


Generative Engine Optimization (GEO) or "LLM seeding" is the practice of publishing content in the formats and places LLMs are most likely to scrape, summarize, and cite. LLM seeding includes:
- What to publish so LLMs actually cite you
- Where to seed your content for maximum pickup
- And how to track whether your brand is showing up

## Resources

- https://backlinko.com/llm-seeding
- https://www.semrush.com/blog/ai-search-seo-traffic-study/

## LLM vs. SE

According to a [Semrush study](https://www.semrush.com/blog/ai-search-seo-traffic-study/?utm_campaign=llm-seeding&utm_source=backlinko.com&utm_medium=referral) AI search traffic will surpass traditional search by the end of 2027.

|**Aspect**|**LLMs (ChatGPT, Claude, etc.)**|**Search Engines (Google, Bing, etc.)**|
|---|---|---|
|**How they answer questions**|Generate direct answers by synthesizing knowledge from training data|Return ranked links to web pages based on keywords and relevance|
|**Source of information**|Trained on snapshots of web content (and sometimes licensed datasets)|Crawl the live web continuously|
|**Citations**|May include sources (e.g. ChatGPT with web access), but often without deep linking|Provide direct links to source websites|
|**Up-to-dateness**|May be outdated (depends on last training or retrieval capability)|Near real-time indexing (updated frequently)|
|**Interactivity**|Conversational, can refine or continue context-aware discussions|One-shot queries with static results|
|**Bias toward content types**|Prefers well-written, generalizable, structured content seen during training|Ranks content based on SEO, backlinks, page authority|
|**Visibility requirements**|Needs content to be **public, high-quality, and referenced** before training|Indexes any crawlable page, regardless of popularity|
|**Personalization**|Personalized in some tools (e.g. ChatGPT memory), not by search history yet|Highly personalized by user history, location, preferences|
|**Interaction granularity**|Can summarize, rephrase, explain, and code – beyond just pointing to data|Mostly lists URLs/snippets with minimal interpretation|
|**Use cases**|Learning, summarizing, code writing, brainstorming, complex reasoning|Finding exact websites, news, shopping, fast fact-checking|
|**Content lifespan in model**|May persist for months or years in training snapshots|Can update rankings/content visibility within hours to days|
|**User intent targeting**|Understands **semantic intent**, not just keywords|Primarily matches **keywords and metadata**|

## LLM Preferences & Tools


- LLMS finds results based on **meaning** rather than exact keywords
- LLMs give weight to content mentioned or linked by well-established sources.
- LLMs are more likely to find and understand content when it’s structured.
- LLMs learn from publicly accessible question-answer pairs and guides.
- LLMs can also pull from video transcripts and descriptions.

**Fun fact:** According to a Semrush study, almost 90% of ChatGPT citations come from search engine positions 21+. 

Tools that can be used to train or impact LLMs:

| Tool                                                               | What It Is                                   | Used By                                    | What It Does                                                                  | Does It Affect LLM Training?                                                |
| ------------------------------------------------------------------ | -------------------------------------------- | ------------------------------------------ | ----------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| **[[LLMs/LLMS.txt]]**                                                   | A proposed standard file (like `robots.txt`) | AI crawlers (e.g. OpenAI, Anthropic, etc.) | Tells AI bots which pages can be used for training or retrieval               | ✅ _Yes, if respected by the crawler_                                        |
| **`robots.txt`**                                                   | Standard web control file                    | Search engines & AI bots                   | Allows/disallows crawling of pages                                            | ✅ Affects both SEO and LLM access                                           |
| **[[LLMs/Knowledge Graph (KG)]] (similar to [[SEO/schema.org in MkDocs]])** | Structured metadata embedded in web pages    | Google, Bing, sometimes LLMs               | Helps machines understand context (e.g. that a page is about a software tool) | ⚠️ Not always used directly in LLM training, but useful for context and SEO |
| **Open Graph / Twitter Cards**                                     | Social metadata for sharing previews         | Facebook, Twitter/X, some AI scrapers      | Helps format link previews                                                    | ❌ No direct impact on LLM training                                          |
| **Sitemaps**                                                       | List of all URLs on your site                | Crawlers, search engines                   | Helps bots find your pages                                                    | ✅ Indirectly useful to LLMs if they crawl                                   |
| **API docs with OpenAPI / Swagger**                                | Structured API definitions                   | Dev tools, LLM code generators             | Helps with tool integrations & understanding your API                         | ✅ Can be used in some LLMs (e.g. tool use, code generation)                 |
## TODOs

**Optimize for citations instead of clicks:**

- Make sure your **website and documentation are crawlable** (check robots.txt and meta tags).
- Include AI-friendly content like:
	- detailed technical guides and tutorials
	- FAQs (refer to common pre-sales tickets)
	- comparison posts (compare products to competitors, for our own products use "best of" lists like "best for Alteryx users", "best all-in-one solution", etc.)
	- real use cases
	-  come up with **unique** takes on something in your industry.
- Use AI-friendly formatting like:
	- bullet points
	- clear headings
	- short paragraphs (chunks)
	- short, declarative lines
	- summary boxes
- Use blog posts or pages with headlines like:
    - “How to use [Your Product] for [X Problem]”
    - “[Your Product] vs. [Competitor]”
    - “10 Tips for Getting the Most from [Your Product]”
- Get referenced by other reputable sources, e.g.:
	- ask partners to link to our website
	- ask users or tech bloggers to review our tool or write tutorials referencing it.
	- Submit guest posts to relevant publications and social media with backlinks to the docs or site
	- appear on websites like [Product Hunt](https://www.producthunt.com/), [AlternativeTo](https://www.producthunt.com/)
- Use **schema.org** metadata (e.g., `SoftwareApplication` for your product, `Article` for blog posts).
- In YouTube videos, use sections and descriptions that include:
	- who you are and why you’re qualified to cover the topic
	- state what the video covers early on
	- link to related posts or supporting content
- Make sure visuals like images include:
	- alt text
	- full-sentence captions that explain what’s pictured and why it matters
	- reference images in the text ("As illustrated in the following screenshot...")
	- use descriptive file names ("xtract-universal-designer-main-menu.jpg")
- Publish content in places LLMs look for information like:
	- Medium
	- LinkedIn articles
	- industry sources (magazines)
	- roundups (“best of,” “top tools,” and “expert tips” formats)
	- user-generated content hubs like Quora, gitHub discussions and niche / specialized forums (LLMs cite Reddit more than any other source, according to Semrush)


> [!example] 
> Content:
> - Item name
> - Quick summary
> - Key features or standout capabilities
> - Pros and cons
> - Pricing

## How to Test Results

Run manual prompts across different tools like ChatGPT, [Claude](https://backlinko.com/claude-users "Claude Statistics: How Many People Use Claude?"), Perplexity, and Gemini.
Use a private or incognito browser to avoid skewed results from past queries or personalization.
Search the way your audience would with clear search intent.

A sign that your LLM presence increases is an increase in impressions and direct traffic while clicks decrease.