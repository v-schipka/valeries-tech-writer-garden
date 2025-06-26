---
dg-publish: true
---
[MDX](https://mdxjs.com/) is a format that blends JSX (a JavaScript extension) with [[Markdown]] content. Using MDX you can import components like interactive charts or alerts, and embed them within your Markdown content. For mroe information, see [MDX: Getting Started](https://mdxjs.com/docs/getting-started/).

> [!info]
> MDX is supported by [[Docusaurus]], Next.js and more.

 
Example:

```mmarkdown
import {Chart} from './snowfall.js' 
export const year = 2023 

# Last year’s snowfall 

In {year}, the snowfall was above average. 
It was followed by a warm spring which caused flood conditions in many of the nearby rivers. 

<Chart year={year} color="#fcb32c" />
```