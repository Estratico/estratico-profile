import type { Metadata } from "next"
import { siteConfig } from "@/config/site"
import { ServicesPageContent } from "@/components/pages/services-content"

export const metadata: Metadata = {
  title: "Services",
  description: `Explore ${siteConfig.name}'s comprehensive technology services including web development, mobile apps, cloud solutions, AI integration, and digital strategy consulting.`,
  openGraph: {
    title: `Services | ${siteConfig.name}`,
    description: `Explore ${siteConfig.name}'s comprehensive technology services including web development, mobile apps, cloud solutions, AI integration, and digital strategy consulting.`,
  },
  alternates: {
    canonical: `${siteConfig.url}/services`,
  },
}

export default function ServicesPage() {
  return <ServicesPageContent />
}
