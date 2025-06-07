---
# layout: ../../layouts/MarkdownPostLayout.astro # Astro collection approach doesn't need this
title: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et magna aliqua.
author: Astro Learner
# description: "I had some challenges, but asking in the community really helped!"
image:
  url: "https://docs.astro.build/assets/rays.webp"
  alt: "The Astro logo on a dark background with rainbow rays."
pubDate: 2022-07-15
tags: ["astro", "learning in public", "banana", "community"]
---

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
