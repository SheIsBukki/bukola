import rss from "@astrojs/rss";

import { getCollection } from "astro:content";
import slugify from "slugify";

const site = "https://bukola.pages.dev";

export async function GET() {
  const posts = await getCollection("blog");

  return rss({
    title: "Bukola | Blog",
    description: "My personal blog where I write about tech",
    site: site,

    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${slugify(post.data.title).toLowerCase()}/`,
    })),
    customData: `<language>en-uk</language>`,
  });
}
