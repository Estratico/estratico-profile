import type { Metadata } from "next"
import { siteConfig } from "@/config/site"
import { WorkPageContent } from "@/components/pages/work-content"

export const metadata: Metadata = {
  title: "Our Work",
  description: `Explore ${siteConfig.name}'s portfolio of successful projects across fintech, healthcare, e-commerce, and more. See how we've helped businesses transform digitally.`,
  openGraph: {
    title: `Our Work | ${siteConfig.name}`,
    description: `Explore ${siteConfig.name}'s portfolio of successful projects across fintech, healthcare, e-commerce, and more.`,
  },
  alternates: {
    canonical: `${siteConfig.url}/work`,
  },
}

export default function WorkPage() {
  return <WorkPageContent />
}
