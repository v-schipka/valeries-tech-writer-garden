---
dg-publish: true
tags:
  - websites-misc
---

The [Google Search Console](https://search.google.com/search-console/welcome) offers tools and reports to help you measure your site's search traffic and performance, fix issues, and improve _Google_ Search results, see [[Indexing]]. 

## Use the Google Search Console with SSGs

To use the Google Search Console for your website, you need to [verify ownership the site](https://support.google.com/webmasters/answer/9008080). There are multiple ways to do so. The depicted approach uses the [**HTML file upload**](https://support.google.com/webmasters/answer/9008080#html_verification) method to use the Google Search Console with [[Static Site Generators]]. This approach requires uploading a file and might not work on a site hosting platform.

1. Open the Google Search Console website https://search.google.com/ in your browser.
2. Select the property type **URL prefix**. <br> ![google search](https://github.com/v-schipka/images/blob/main/obsidian/register-google-search-console2.png?raw=true)
3. Enter the URL of your website and click **CONTINUE**. The menu "Verify ownership" opens.
4. Download the google html file and upload it to the root directory of your website.
5. Once the file is uploaded, click **VERIFY** to verify the site ownership. 
6. If the verification is successful, click **GO TO PROPERTY** to open the Google Search Console. <br> ![google search finished](https://github.com/v-schipka/images/blob/main/obsidian/register-google-search-console4.png?raw=true)

> [!tip] 
> You can integrate the Google Search Console with Google Analytics, see [[GA4] Search Console integration](https://support.google.com/analytics/answer/10737381?hl=en).

