---
{"publish":true,"permalink":"/Concepts/Interactive Infographics.md","created":"2025-12-12T21:32:18.725+01:00","modified":"2025-12-12T21:55:30.096+01:00","published":"2025-12-12T21:55:30.096+01:00","cssclasses":""}
---

  

An interactive infographic is a visual graphic that the user can interact with instead of just looking at a static picture. It's a mix of illustration + data + UI elements, where the reader can click, hover, scroll, or filter to explore information.

This section focuses on how to create interactive infogrphics for use in [[Static Site Generators/MkDocs]].

### JavaScript Libraries Embedded Into MkDocs Pages

Popular libraries:
- 📊 Charts & Data Visualizations
    - Chart.js — simple, beginner-friendly, good for line/bar/pie charts
    - D3.js — powerful, used for complex custom infographics
    - Plotly.js — interactive, zoomable, hover tooltips built-in
    - ECharts — many interactive chart types
- 🗺️ Maps
    - Leaflet.js (open-source)
    - Mapbox GL JS (if you need fancier styling)
- 📈 Timeline / Flow / Sankey / Network Graphs
    - Mermaid.js (already integrated in MkDocs Material)
    - D3.js
    - Cytoscape.js (network graphs)

How you embed them:
1. Enable the "extra_javascript" option in mkdocs.yml:
    ``` yaml
    extra_javascript:
      - js/my-interactive.js
    ```
2. Add a `<canvas>` or `<div>` placeholder in your Markdown:
    ``` html
    <canvas id="chart"></canvas>
    ```
3. Write JS that initializes the chart:
    ``` js
    const ctx = document.getElementById("chart");
    new Chart(ctx, {
      type: "bar",
      data: { labels: ["A","B"], datasets:[{data:[5,10]}] }
    });
    ```

### Embed External Tools

Tools that export embed code:
- Canva (export as HTML embed, if using Canva Pro)
- Figma (public embed)
- Flourish Studio (very nice interactive storytelling charts)
- Datawrapper (polished news-style data graphics)
- Google Data Studio / Looker Studio
- ObservableHQ (interactive D3 notebooks)

Paste the embed code into your Markdown:
``` html
<iframe src="...your interactive graphic..." width="100%" height="600"></iframe>
```