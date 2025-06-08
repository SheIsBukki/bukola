---
title: "Building a Static Blog With Astro: My Process, Decisions and Insights"
pubDate: 2025-06-06
description: "This article talks about my experience building my static blog—this blog, with Astro. I deployed to Cloudflare, and used pnpm, tailwind, and mostly astro-focused plugins like astro-og-canvas."
author: "Bukola Ogunleye"
image:
  url: ""
  alt: ""
tags: ["astro", "blogging"]
---

## [Introduction to Astro](#introduction-to-astro)

Astro is a server-first JavaScript web framework for building content-driven websites. It's a static site generator that aims to reduce writing client-side JavaScript hence sites built with Astro are relatively faster than those built with many JavaScript frameworks like Next.js and Nuxt.js. One of its interesting features is that it is framework-agnostic—meaning Astro is compatible with pretty much any JavaScript framework.

### [So, Why Astro?](#so-why-astro)

I stumbled on Astro about three weeks ago and after scanning the [website](https://astro.build), I decided to do the little blog tutorial in the docs. I realised that Astro had a familiar experience if you have some Vue.js or JSX knowledge. The docs are quite comprehensive and will give you expected results. I'm eyeing 🌚 Next.js docs as I write this by the way... The main attraction for me was the seamless built-in markdown support. I would build this blog with either Vue.js, Next.js or Nuxt.js anyway, but it would have taken me more time to decide to do so. But Astro felt welcoming so here we are!

## [My Process For Building My Personal Blog With Astro](#my-process-for-building-my-personal-blog-with-astro)

I ran `pnpm create astro@latest` and went with the minimal setup because I generally prefer to scaffold new projects on a clean slate.

```zsh showLineNumbers
pnpm install
pnpm astro add tailwind
pnpm add --save-dev --save-exact prettier prettier-plugin-astro
pnpm install -D prettier-plugin-tailwindcss
```

This is what my package.json file looks like at the time of writing this

```json showLineNumbers
"scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "postbuild": "pagefind --site dist",
    "preview": "astro preview",
    "astro": "astro",
    "prettier": "exec prettier . --write"
  },
  "dependencies": {
    "@astrojs/rss": "^4.0.11",
    "@tailwindcss/vite": "^4.1.7",
    "astro": "^5.8.0",
    "astro-icon": "^1.1.5",
    "astro-og-canvas": "^0.7.0",
    "astro-pagefind": "^1.8.3",
    "canvaskit-wasm": "^0.40.0",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "mdast-util-to-string": "^4.0.0",
    "reading-time": "^1.5.0",
    "remark-toc": "^9.0.0",
    "slugify": "^1.6.6",
    "tailwind-merge": "^3.3.0",
    "tailwindcss": "^4.1.7"
  },
  "devDependencies": {
    "@iconify-json/mdi": "^1.2.3",
    "@iconify-json/tabler": "^1.2.18",
    "pagefind": "^1.3.0",
    "prettier": "3.5.3",
    "prettier-plugin-astro": "0.14.1",
    "prettier-plugin-tailwindcss": "^0.6.11",
    "tw-animate-css": "^1.3.2"
  }
}
```

I had to add this `"prettier": "exec prettier . --write"` because I use Sublime Text and for some reason, prettier isn't formatting on save for this astro project specifically. I also didn't want to spend time trying to resolve it.

<!--
- **bold** and _italics._
- *** will create a hr
- lists
- [links](https://astro.build)
- <https://astro.build> will show as https://astro.build
 -->

<!--
title: Building a Technical Blog With Astro: Insights and Decisions Along the Way
metaDescription: Discover my experience building a static blog with Astro, including insights on deployment to Cloudflare, use of pnpm, tailwind, and astro-focused plugins like astro-og-canvas.
imageAlt: Building a Technical Blog With Astro

title: Building a Technical Blog With Astro: Insights and Decisions
metaDescription: Discover the process of building a static blog with Astro, including insights and key decisions. Learn about deploying to Cloudflare, using pnpm, tailwind, and Astro-focused plugins like astro-og-canvas.
imageAlt: Building a Technical Blog With Astro

title: Building a Static Blog with Astro: My Process and Insights
metaDescription: Discover why I chose Astro to build my technical blog and learn about my process deploying to Cloudflare, using pnpm, tailwind, and astro-focused plugins like astro-og-canvas. Gain insights and decisions along the way.
imageAlt: Astro static blog building process
 -->

 <!-- 
 Astro, Tailwind, and Cloudflare Pages: A Perfect Trio for Bloggers 
 My Experince with Astro: Building a Blog from Scratch
 Why Astro is the Best Choice for Your Next Blog
 Insights from Building My Technical Blog with Astro
 -->
