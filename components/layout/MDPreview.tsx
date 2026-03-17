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

// --- Mermaid Component ---
// This handles the specialized rendering for diagrams
const Mermaid = ({ chart }: { chart: string }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
      theme: "dark",
      flowchart: { useMaxWidth: false },
      sequence: { useMaxWidth: false },
      gantt: { useMaxWidth: false },
    });
    if (ref.current) {
      mermaid.run({
        nodes: [ref.current],
      });
    }
  }, [chart]);

  return (
    <div className="flex justify-center my-4">
      <div ref={ref} className="mermaid">
        {chart}
      </div>
    </div>
  );
};

// --- Custom Components for ReactMarkdown ---
const components: any = {
  // Custom Heading with auto-generated IDs for linking
  h1: ({ children, ...props }: any) => (
    <h1 className="text-3xl font-bold mt-6 mb-4" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: any) => (
    <h2 className="text-2xl font-semibold mt-5 mb-3" {...props}>
      {children}
    </h2>
  ),

  // Custom Link
  a: ({ href, children }: any) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:underline"
    >
      {children}
    </a>
  ),
  p: ({ children }: any) => (
    <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
      {children}
    </p>
  ),

  // Code Block Logic
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
      <code className="bg-gray-200 dark:bg-gray-800 rounded px-1" {...props}>
        {children}
      </code>
    );
  },
};

export default function MarkdownPreviewer({ content }: MarkdownProps) {
  const [isClient, setIsClient] = useState(false);

  // Ensure Mermaid only tries to render on the client
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return <div className="animate-pulse">Loading...</div>;

  return (
    <article className="prose prose-slate max-w-none dark:prose-invert">
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
