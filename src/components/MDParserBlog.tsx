import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import parse from "html-react-parser";

export default function MDParserBlog({ description }: { description: string }) {
  return (
    <section className="rich-text">
      <Markdown
        children={description}
        remarkPlugins={[remarkGfm]}
        components={{
          pre({ children }) {
            const htmlString = String(
              Object(children[0])?.props.children[0]
            ).replace("Code\n", "");

            return htmlString.includes("iframe") ? (
              <section children={parse(htmlString)} />
            ) : (
              <code>no video resolved</code>
            );
          },
        }}
      />
    </section>
  );
}
