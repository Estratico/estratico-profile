import LegalPage from '@/components/pages/legals/legals-page';
import { siteConfig } from '@/config/site';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: `Read the terms and conditions for using ${siteConfig.name}'s services. Understand your rights, responsibilities, and the legal agreement between you and our platform.`,
  openGraph: {
    title: `Terms and Conditions | ${siteConfig.name}`,
    description: `The legal framework and guidelines for using ${siteConfig.name}. Review our terms of service and user agreements.`,
  },
  alternates: {
    canonical: `${siteConfig.url}/terms`,
  },
}

export default function TermsAndConditions() {
  // Read the markdown file from your local directory
  return <LegalPage fileName='estratico_terms' title="Estratico Terms and Conditions (2026)"/>
}