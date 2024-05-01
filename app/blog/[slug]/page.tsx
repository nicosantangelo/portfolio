import fs from "fs/promises";
import Markdown from "@/app/components/Markdown";
import { BLOG_NAMES, Slugs } from "@/app/helpers/blogNames";

const PATH_TO_POSTS = "./app/blog/[slug]/posts";

type Props = {
  params: { slug: Slugs };
};

export async function generateMetadata({ params }: Props) {
  return {
    title: BLOG_NAMES[params.slug],
  };
}

export async function generateStaticParams() {
  const posts = await fs.readdir(PATH_TO_POSTS);

  return posts.map((postName) => {
    const slug = postName.endsWith(".md")
      ? postName.replace(/\.md$/, "")
      : postName;

    return { slug };
  });
}

export default async function Blog({ params }: Props) {
  const postBuffer = await fs.readFile(`${PATH_TO_POSTS}/${params.slug}.md`);
  const post = postBuffer.toString();

  return <Markdown markdown={post}></Markdown>;
}
