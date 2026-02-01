import type { Metadata } from "next"
import { siteConfig } from "@/config/site"
import { AboutPageContent } from "@/components/pages/about-content"

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${siteConfig.name}'s mission, values, and the team behind our innovative technology solutions. Discover why we're the trusted partner for digital transformation.`,
  openGraph: {
    title: `About Us | ${siteConfig.name}`,
    description: `Learn about ${siteConfig.name}'s mission, values, and the team behind our innovative technology solutions.`,
  },
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
}

export default function AboutPage() {
  return <AboutPageContent />
}
