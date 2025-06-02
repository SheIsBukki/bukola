---
# layout: ../../layouts/MarkdownPostLayout.astro # Astro collection approach doesn't need this
title: How to Build a Vue App To Show Your GitHub Repositories
author: Astro Learner
# description: "I had some challenges, but asking in the community really helped!"
image:
  url: "https://docs.astro.build/assets/rays.webp"
  alt: "The Astro logo on a dark background with rainbow rays."
pubDate: 2022-07-15
tags: ["astro", "learning in public", "banana", "community"]
---

## Scaffolding a Vue Project With Vite

If you want to enjoy the full benefits of the Vue.js framework, particularly for building larger projects, it’s better to write Vue code in single file components (SFCs). Each SFC will be written inside a .vue file. Writing Vue code in .vue files will give you access to a better development environment.

Regardless of the Vue API you use to build a Vue project, all Vue files have the same elements:

A `<template>` tag that will contain your typical HTML content
A `<script>` tag that contains your Vue logic
A `<style>` tag that will contain your CSS styling
You might be wondering why we need to use Vite to build a Vue SFCs project, and there’s a perfectly good answer for your curiosity. The browser can only understand .html, .css, and .js files. Any code not written in those three coding languages must be compiled into HTML, CSS and JavaScript for the browser to run the code. Vite is a build tool that helps us to compile our code before sending it to the browser.

- mkdir {insert a new directory name} OR cd {insert an existing directory} in your terminal — this is where the project will live
- cd {insert the new directory name} if you just created the directory
- npm create vue@latest OR pnpm create vue@latest OR yarn create vue@latest OR bun create vue@latest
- You will be prompted to provide the project name, and you can choose a name like ‘my-vue-app'
- You will then be prompted to answer No or Yes questions for options such as ‘Add TypeScript?’ and ‘Add Pinia for state management?’. Once you become more familiar with Vue, you will know which extra technologies/tools to add to your Vue project. But for now, choose ‘No’ for all the options
  Once that is done, your terminal will prompt you to run the following commands:

- cd {insert-your-project-name} — this command opens your project folder
- npm install — this command installs the required dependencies to make your Vue project work
- npm run dev — and this command starts up a development server showing the scaffolded demo app provided by Vite in the browser, which you can see via localhost:5173

Now, let’s scaffold a new Vue project using Vite. Similar to the Vue CLI approach, we will also do this from the terminal using the following commands:

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
