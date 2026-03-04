import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import fs from 'fs';
import path from 'path';
import TOC from './toc';

// This function parses the Markdown to find all ## H2 headings for the TOC
function getTableOfContents(content: string) {
  const headingLines = content.split('\n').filter((line) => line.startsWith('## '));
  return headingLines.map((line) => {
    const text = line.replace('## ', '').trim();
    // Create a URL-friendly ID: "1. Identity of the Controller" -> "1-identity-of-the-controller"
    const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
    return { text, id };
  });
}

export default function LegalPage({title,fileName}:{
    fileName:string,
    title?:string
}) {
  // Read the markdown file from your local directory
  const filePath = path.join(process.cwd(), 'public',"content", `${fileName}.md`);
  const markdownContent = fs.readFileSync(filePath, 'utf8');
  const toc = getTableOfContents(markdownContent);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 mt-16 flex flex-col md:flex-row gap-12">
      {/* Table of Contents Sidebar */}
      <TOC toc={toc}/>

      {/* Main Content Area */}
      <main className="md:w-3/4 prose prose-slate max-w-none">
      <h1 className='text-3xl font-bold'>{title}</h1>
        <ReactMarkdown
          // remarkGfm adds support for tables and task lists (Obsidian style)
          // remarkFrontmatter prevents the metadata at the top from rendering
          remarkPlugins={[remarkGfm]}
          components={{
            // Fix 1: IDs for headings so the TOC works
            h2: ({ children }) => {
              const text = String(children);
              const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
              return <h2 id={id} className="scroll-mt-24 scroll-smooth font-bold text-3xl mb-4 border-b pb-2">{children}</h2>;
            },
            // Fix 2: Lists in Obsidian often need specific padding
            ul: ({children}) => <ul className="list-disc pl-6 mb-4">{children}</ul>,
            ol: ({children}) => <ol className="list-decimal pl-6 mb-4">{children}</ol>,
            // Fix 3: Ensure line breaks are preserved
            p: ({children}) => <p className="mb-4 leading-relaxed whitespace-pre-line">{children}</p>,
          }}
        >
          {markdownContent}
        </ReactMarkdown>
      </main>
    </div>
  );
}