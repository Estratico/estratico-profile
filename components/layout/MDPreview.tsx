"use client"

import React, { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import mermaid from "mermaid";

// --- Types ---
interface MarkdownProps {
  content: string;
}

interface CodeProps {
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
}

// --- Styles ---
const styles = {
  h1: { fontSize: "2rem", fontWeight: "bold", marginTop: "1.5rem", marginBottom: "1rem" },
  h2: { fontSize: "1.5rem", fontWeight: "600", marginTop: "1.25rem", marginBottom: "0.75rem" },
  link: { color: "#3b82f6", textDecoration: "none" },
  paragraph: { fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "1.5rem", color: "inherit" },
  inlineCode: { backgroundColor: "rgba(110, 118, 129, 0.2)", borderRadius: "4px", padding: "0.2rem 0.4rem" },
  mermaidWrapper: { display: "flex", justifyContent: "center", margin: "1rem 0" },
  container: { maxWidth: "100%", lineHeight: "1.5" }
};

// --- Mermaid Component ---
const Mermaid = ({ chart }: { chart: string }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
      theme: "dark",
      flowchart: { useMaxWidth: false },
    });
    if (ref.current) {
      mermaid.run({ nodes: [ref.current] });
    }
  }, [chart]);

  return (
    <div style={styles.mermaidWrapper}>
      <div ref={ref} className="mermaid">
        {chart}
      </div>
    </div>
  );
};

// --- Custom Components for ReactMarkdown ---
const components: any = {
  h1: ({ node, ...props }: any) => <h1 style={styles.h1} {...props} />,
  h2: ({ node, ...props }: any) => <h2 style={styles.h2} {...props} />,
  a: ({ href, children }: any) => (
    <a href={href} target="_blank" rel="noopener noreferrer" style={styles.link}>
      {children}
    </a>
  ),
  p: ({ children }: any) => <p style={styles.paragraph}>{children}</p>,
  code({ inline, className, children, ...props }: CodeProps) {
    const match = /language-(\w+)/.exec(className || "");
    const codeString = String(children).replace(/\n$/, "");

    if (!inline && match && match[1] === "mermaid") {
      return <Mermaid chart={codeString} />;
    }

    return !inline && match ? (
      <SyntaxHighlighter
        style={vscDarkPlus}
        language={match[1]}
        PreTag="div"
        {...props}
      >
        {codeString}
      </SyntaxHighlighter>
    ) : (
      <code style={styles.inlineCode} {...props}>
        {children}
      </code>
    );
  },
};

export default function MarkdownPreviewer({ content }: MarkdownProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return <div style={{ opacity: 0.5 }}>Loading...</div>;

  return (
    <article style={styles.container}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[
          rehypeRaw,
          [
            rehypeSanitize,
            {
              ...defaultSchema,
              attributes: {
                ...defaultSchema.attributes,
                code: [["className", /^language-./, "mermaid"]],
              },
            },
          ],
          rehypeSlug,
          [rehypeAutolinkHeadings, { behavior: "prepend" }],
        ]}
        components={components}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}