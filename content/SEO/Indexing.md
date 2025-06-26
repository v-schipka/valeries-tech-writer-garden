---
dg-publish: true
tags:
  - websites-misc
---
For a website to show up in a search engines (e.g. Google, Bing, etc.), the website needs to be indexed by the search engine. This can take between a few days, weeks to even months.

## Check if Your Website is Indexed

Open your search engine and type in the URL search bar: “*site:your-domain-name.com*".
This displays a list of all pages from the specified website that have been indexed by the search engine.
 
## Request Indexing

Depending on the search engine, there are different ways and tools of requesting indexing for your website:

- [Bing Webmasters Tools](https://www.bing.com/webmasters/about)
- [Google Search Console](https://search.google.com/search-console/welcome)

The following section focuses on using the [[Google Search Console]].

1. In the Google Search Console, open the **URL Inspection** menu.
2. Enter the URL to your Website in the *Inspect any URL* search bar.
3. Click **TEST LIVE URL**. If the website is not yet indexed, the Google Search Console checks if the URL can be indexed or if there are issues that need to be fixed first.
4. Click **REQUEST INDEXING**. <br>![request-indexing](https://github.com/v-schipka/images/blob/main/obsidian/request-indexing-numberes.png?raw=true)
5. Recommended: Open the **Sitemaps** menu and submit [sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview) of your website. A sitemap is a file where you provide information about the pages, videos, and other files on your site. Search engines like Google read this file to crawl your site more efficiently.<br>![sitemaps](https://github.com/v-schipka/images/blob/main/obsidian/submit-sitemaps.png?raw=true)
6. Wait. You won't get notified if the indexing, so make sure to check of your website is indexed occasionally. <br>![is-indexed](https://github.com/v-schipka/images/blob/main/obsidian/is-indexed.png?raw=true)


## Exclude Pages from Search Engines

It may be necesarry to exclude multiple or single pages from showing up in search engines. In this case, you can use a robots.txt file in your website to define which content should be excluded from being crawled by search engines.

Example:

```
User-agent: *
Disallow: /folder/*
```

Important rules:
- The file must be named *robots.txt*.
- Your site can have only one robots.txt file.
- The robots.txt file must be located at the root of the site host to which it applies. For instance, to control crawling on all URLs below `https://www.example.com/`, the robots.txt file must be located at `https://www.example.com/robots.txt`. 
- A robots.txt file must be an UTF-8 encoded text file (which includes ASCII). Google may ignore characters that are not part of the UTF-8 range, potentially rendering robots.txt rules invalid.

For more information on robots.txt files, refer to the [Google Search Console Documentation](https://developers.google.com/search/docs/crawling-indexing/robots/create-robots-txt).