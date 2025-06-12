import { OGImageRoute } from "astro-og-canvas";
import { getCollection } from "astro:content";
import slugify from "slugify";

export const prerender = true;
const blogs = await getCollection("blog");
const pages = Object.fromEntries(
  blogs.map(({ id, data }) => [
    id,
    // `${slugify(data.title).toLowerCase()}`,
    { data, slug: slugify(data.title).toLowerCase() },
  ]),
);

export const { getStaticPaths, GET } = OGImageRoute({
  param: "route",
  pages,

  // A collection of pages to generate images for.
  // The keys of this object are used to generate the path for that image.
  // In this example, we generate one image at `/open-graph/example.png`.
  // pages: async () => {
  //   const posts = await getCollection("blog");

  //   return posts.reduce((acc, post) => ({
  //     ...acc,
  //     [post.id]: {
  //       title: post.data.title || "Blog post",
  //       description:
  //         post.data.description || removeTags(post.body?.substring(0, 140)),
  //     },
  //   }));
  // },

  // For each page, this callback will be used to customize the OpenGraph image.
  getImageOptions: (path: string, { data }: (typeof pages)[string]) => ({
    title: data.title,
    description: data.description ? data.description : "",
    fonts: ["./public/fonts/Syne/Syne-VariableFont_wght.woff2"],
    font: {
      title: {
        size: 44,
        lineHeight: 1.3,
        families: ["Syne"],
        weight: "Bold",
      },
      description: {
        size: 30,
        lineHeight: 1.6,
        color: [115, 115, 115],
        families: ["Syne"],
        weight: "Normal",
      },
    },
    // bgImage: { path: "./src/assets/bukola.png", fit: "contain" }, //
    bgImage: { path: "./src/assets/hero-background.svg", fit: "contain" }, // I will find a better png image to use here, svg for og image is meh
    padding: 80,
    logo: {
      // path: "./src/assets/bukola.png",
      path: "./src/assets/bukolasAvatar.jpg",
      size: [50, 60],
    },
    quality: 100,
    // There are a bunch more options you can use here!
  }),
});
