import LegalPage from '@/components/pages/legals/legals-page';
import { siteConfig } from '@/config/site';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `At ${siteConfig.name}, we take your privacy seriously. Learn how we collect, use, and protect your personal data and maintain security across our digital services.`,
  openGraph: {
    title: `Privacy Policy | ${siteConfig.name}`,
    description: `Learn how ${siteConfig.name} handles your data. Read our commitment to privacy, data security, and transparency.`,
  },
  alternates: {
    canonical: `${siteConfig.url}/privacy`,
  },
}

export default function PrivacyPolicy() {
  // Read the markdown file from your local directory
 return <LegalPage fileName='estratico_privacy_policy' title='Estratico Privacy Policy (2026)'/>
}