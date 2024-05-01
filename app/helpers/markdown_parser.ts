import { MarkedExtension, marked } from "marked";

import GithubSlugger from "github-slugger";

let slugger: GithubSlugger;

export function processHeadings({ prefix = "" } = {}): MarkedExtension {
  return {
    hooks: {
      preprocess(src: string) {
        slugger = new GithubSlugger();
        return src;
      },
    },
    renderer: {
      heading(text: string, level: number, raw: string) {
        const id = slugify(prefix, raw);

        return `<h${level} id="${id}">
	<a class="anchored anchored-title" href="#${id}">${text}</a>
</h${level}>\n`;
      },
      strong(text) {
        const id = slugify(prefix, text);
        return `<strong id="${id}">
	<a class="anchored" href="#${id}">${text}</a>
</strong>\n`;
      },
    },
  };
}

marked.use(processHeadings());

function slugify(prefix: string, text: string): string {
  const sanitizedText = text
    .toLowerCase()
    .trim()
    .replace(/<[!\/a-z].*?>/gi, "");

  return `${prefix}${slugger.slug(sanitizedText)}`;
}

export const markdownParser = marked;
