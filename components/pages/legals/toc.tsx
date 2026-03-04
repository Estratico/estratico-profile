"use client";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";

type Props = {
  toc: {
    text: string;
    id: string;
  }[];
};

export default function TOC({ toc }: Props) {
    const [activeHash, setActiveHash] = useState('');

  useEffect(() => {
    // 1. Function to update state with current hash
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    // 2. Set initial hash on load
    handleHashChange();

    // 3. Listen for hash changes (when user clicks TOC links)
    window.addEventListener('hashchange', handleHashChange);
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // This performs the smooth scroll
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      // Update the URL hash without jumping
      window.history.pushState(null, '', `#${id}`);
      setActiveHash(`#${id}`)
    }
  };

  return (
    <aside className="md:w-1/4 sticky top-24 h-fit hidden md:block">
      <h2 className="text-lg font-bold mb-4 uppercase tracking-wider text-gray-500">
        Contents
      </h2>
      <nav className="flex flex-col gap-3 border-l border-gray-200 pl-4">
        {toc.map((item) => (
          <a
            key={item.id}
            onClick={(e) => handleScroll(e, item.id)}
            className={cn("text-sm text-gray-600 hover:text-blue-600 transition-colors leading-snug cursor-pointer",activeHash===`#${item.id}`&&"text-blue-600")}
          >
            {item.text}
          </a>
        ))}
      </nav>
    </aside>
  );
}
