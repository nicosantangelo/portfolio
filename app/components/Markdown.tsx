import { markdownParser } from "../helpers/markdown_parser";

type Props = {
  markdown: string;
};

export default function Markdown(props: Props) {
  const { markdown } = props;
  const parsedMarkdown = markdownParser.parse(markdown);

  return <div dangerouslySetInnerHTML={{ __html: parsedMarkdown }} />;
}
