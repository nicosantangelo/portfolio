import { visit } from "unist-util-visit";
import GithubSlugger from "github-slugger";
import type { Root, Element, Text } from "hast";

function textContent(node: Element): string {
  let text = "";
  visit(node, "text", (n: Text) => {
    text += n.value;
  });
  return text;
}

export default function rehypeAnchoredStrong() {
  return (tree: Root) => {
    const slugger = new GithubSlugger();

    visit(tree, "element", (node: Element) => {
      if (node.tagName !== "strong") return;

      const text = textContent(node).toLowerCase().trim();
      const id = slugger.slug(text);

      node.properties = {
        ...node.properties,
        id,
        className: ["markdown-strong"],
      };

      const children = [...node.children];
      node.children = [
        {
          type: "element",
          tagName: "a",
          properties: { className: ["anchored"], href: `#${id}` },
          children,
        },
      ];
    });
  };
}
