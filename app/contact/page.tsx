import type { Metadata } from "next"
import { siteConfig } from "@/config/site"
import { ContactPageContent } from "@/components/pages/contact-content"

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${siteConfig.name}. Let's discuss your project and explore how we can help transform your business with innovative technology solutions.`,
  openGraph: {
    title: `Contact Us | ${siteConfig.name}`,
    description: `Get in touch with ${siteConfig.name}. Let's discuss your project and explore how we can help transform your business.`,
  },
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
}

export default function ContactPage() {
  return <ContactPageContent />
}
