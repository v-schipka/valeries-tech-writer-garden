A collection of some nice custom style for [[MkDocs]].
## Custom Ordered List

[SimpleAF Docs](https://a3bagged.github.io/theme-test/getting-started/setup/) has created a custom design for ordered lists in MkDocs + Material:

![custom-lists](https://github.com/v-schipka/images/blob/main/obsidian/mkdocs-custom-lists.png?raw=true)

Custom CSS:
```css
/* || ------ CUSTOM STEPS LIST ------ */
.md-steps ol {
    margin:0 !important;
    --bullet-size: calc(1.6 * 1rem);
    --bullet-margin: .375rem;
    list-style: none;
    counter-reset: counter(steps-counter) var(--sl-steps-start, 0);
    padding-inline-start:0;
}

.md-steps>ol>li {
    margin:0 !important;
    counter-increment: steps-counter;
    position: relative;
    padding-inline-start:calc(var(--bullet-size) + 1rem);
    padding-bottom: 1px;
    min-height: calc(var(--bullet-size) + var(--bullet-margin))
}

.md-steps>ol>li::before {
    content: counter(steps-counter);
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    width: var(--bullet-size);
    height: var(--bullet-size);
    line-height: var(--bullet-size);
    font-size: var(--md-300);
    font-weight: 600;
    text-align: center;
    color: var(--md-title-color);
    background-color: var(--neutral-500);
    border-radius: 99rem;
    box-shadow: inset 0 0 0 1px var(--neutral-800);
}

[data-md-color-scheme="slate"] .md-steps>ol>li::before {
    background-color: var(--md-content-color-lighter);
    box-shadow: inset 0 0 0 1px var(--md-content-color-lightest);
}

.md-steps>ol>li:after {
    --guide-width: 1px;
    content: "";
    position: absolute;
    top: calc(var(--bullet-size) + (var(--bullet-margin)));
    bottom: var(--bullet-margin);
    inset-inline-start: calc((var(--bullet-size) - var(--guide-width)) / 2);
    width: var(--guide-width);
    background-color: var(--neutral-800);
}

[data-md-color-scheme="slate"] .md-steps>ol>li:after { background-color: var(--md-content-color-lightest);}
```

How to use:
```markdown
--steps--

1.  Vivamus id mi enim. Integer id turpis sapien. Ut condimentum lobortis
    sagittis. Aliquam purus tellus, faucibus eget urna at, iaculis venenatis
    nulla. Vivamus a pharetra leo.

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor massa, nec semper lorem quam in massa.

2.  Vivamus venenatis porttitor tortor sit amet rutrum. Pellentesque aliquet
    quam enim, eu volutpat urna rutrum a. Nam vehicula nunc mauris, a

    ultricies libero efficitur sed. Aliquam purus tellus, faucibus eget
    urna at, iaculis venenatis nulla. Vivamus a pharetra leo.

3.  Morbi eget dapibus felis. Vivamus venenatis porttitor tortor sit amet
    rutrum. Pellentesque aliquet quam enim, eu volutpat urna rutrum a.

--!steps--
```

