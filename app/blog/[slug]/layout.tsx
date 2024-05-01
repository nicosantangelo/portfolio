import "../../styles/markdown.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="markdown">{children}</div>;
}
