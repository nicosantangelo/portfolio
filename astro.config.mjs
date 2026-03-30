import { defineConfig } from "astro/config";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeAnchoredStrong from "./src/plugins/rehype-anchored-strong.ts";

export default defineConfig({
  site: "https://nicosantangelo.com",
  markdown: {
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: { className: ["anchored", "anchored-title"] },
        },
      ],
      rehypeAnchoredStrong,
    ],
  },
});
