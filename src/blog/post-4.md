---
# layout: ../../layouts/MarkdownPostLayout.astro # Astro collection approach doesn't need this
title: Blog Post Four
author: Astro Learner
description: "After learning some Astro, I couldn't stop!"
image:
  url: "https://docs.astro.build/assets/arc.webp"
  alt: "The Astro logo on a dark background with a purple gradient arc."
pubDate: 2025-05-27
tags: ["astro", "blogging", "learning in public", "successes"]
---

After a successful first week learning Astro, I decided to try some more. I wrote and imported a small component from memory!

Sample code block

```css
html {
  background-color: #f1f5f9;
  font-family: sans-serif;
}

body {
  margin: 0 auto;
  width: 100%;
  max-width: 80ch;
  padding: 1rem;
  line-height: 1.5;
}
```

It wasn't always smooth sailing, but I'm enjoying building with Astro. And, the [Discord community](https://astro.build/chat) is really friendly and helpful!

Sample code block

```jsx
<div class="tags">
  Tags:
  {frontmatter.tags.map((tag) => (
    <span style="text-decoration: underline;text-underline-offset: 4px;">
      {tag}
    </span>
  ))}
</div>
```
