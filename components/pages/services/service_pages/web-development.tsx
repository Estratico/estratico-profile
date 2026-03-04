"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  Zap, 
  Code2, 
  Layers, 
  ArrowRight,
  Database,
  ShieldCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const features = [
  { 
    title: "Custom Web Applications", 
    description: "Tailor-made solutions using Next.js and React for high-performance user interfaces.",
    icon: Code2 
  },
  { 
    title: "Scalable Backend Systems", 
    description: "Robust APIs and server-side logic powered by FastAPI and Node.js.",
    icon: Layers 
  },
  { 
    title: "Database Architecture", 
    description: "Schema-driven design with Prisma and SQLModel for data integrity.",
    icon: Database 
  },
  { 
    title: "SEO & Performance", 
    description: "Optimized for Core Web Vitals to ensure speed and search visibility.",
    icon: Zap 
  },
];

const combos = [
  {
    name: "The Startup Launchpad",
    price: "From $150",
    description: "Perfect for new ventures needing a solid foundation.",
    items: ["Custom Next.js Frontend", "Authentication & Users", "Cloud Hosting Setup (Free .co.zw domain for 1 year)", "Basic SEO & Analytics"],
    popular: false,
    cta: "Start Small"
  },
  {
    name: "Performance E-Commerce",
    price: "From $350",
    description: "High-conversion stores built for speed and global reach.",
    items: ["Next.js Commerce Integration", "Stripe/Paynow Payments", "Inventory Management System", "Edge-Network Optimization"],
    popular: false,
    cta: "Start Selling"
  },
  {
    name: "SaaS Blueprint",
    price: "From $500",
    description: "The complete package for multi-tenant software platforms.",
    items: ["Subscription Billing (Stripe)", "Role-Based Access Control", "PostgreSQL Schema Design", "Automated Email Workflows"],
    popular: false,
    cta: "Launch SaaS"
  },
  {
    name: "Real-Time Data Hub",
    price: "From $420",
    description: "For apps requiring live updates and complex data sync.",
    items: ["WebSocket/Centrifugo Setup", "Live Dashboards & Charts", "Redis Caching Layer", "Real-time Notifications"],
    popular: false,
    cta: "Go Live"
  },
  {
    name: "Desktop-Web Hybrid",
    price: "From $290",
    description: "Cross-platform accessibility with offline-first logic.",
    items: ["Electron.js Desktop App", "Shared Web Codebase", "Local Database Syncing", "Auto-Update Infrastructure"],
    popular: false,
    cta: "Build Native"
  },
  {
    name: "Enterprise Scaler",
    price: "Custom",
    description: "For businesses scaling to thousands of users.",
    items: ["Microservices Architecture", "Custom Admin Dashboard", "Advanced Security & IAM", "Ongoing DevOps Support"],
    popular: false,
    cta: "Scale Now"
  },
];

const pricingCategories = [
  {
    category: "Backend & API Engineering",
    description: "Robust server-side solutions focused on data integrity and speed.",
    items: [
      { name: "REST/GraphQL API Development", price: "From $99", unit: "per module" },
      { name: "Database Schema Design (Prisma/SQLModel)", price: "$150", unit: "flat fee" },
      { name: "Real-time Integration", price: "$120", unit: "setup" },
      { name: "Third-party API Integration", price: "$80", unit: "per integration" },
    ],
  },
  {
    category: "Frontend & Interface",
    description: "High-performance, accessible, and responsive user experiences.",
    items: [
      { name: "Static Site", price: "from $50", unit: "per audit" },
      { name: "Next.js Performance Optimization", price: "$100", unit: "per audit" },
      { name: "Custom Dashboard UI", price: "From $150", unit: "per app" },
      { name: "Interactive Data Visualization (D3/Recharts)", price: "$99", unit: "per view" },
      { name: "PWA/Offline-First Implementation", price: "$299", unit: "setup" },
    ],
  },
  {
    category: "Deployment & Hosting",
    description: "Deployment pipelines, Hosting and cloud architecture for production-ready apps with guaranteed uptime",
    items: [
      { name: "Website Hosting (without domain)", price: "from $10", unit: "per site" },
      { name: "Website Hosting (with domain)", price: "from $15", unit: "per site" },
      { name: "CI/CD Pipeline Setup (GitHub Actions)", price: "$90", unit: "per repo" },
      { name: "Dockerization & Containerization", price: "$90", unit: "per service" },
      { name: "AWS/Azure Cloud Architecture", price: "$150", unit: "per hour" },
      { name: "Serverless Function Deployment", price: "$100", unit: "per set" },
    ],
  },
  {
    category: "Maintenance & Engineering Support",
    description: "Ensuring your systems stay secure and up-to-date.",
    items: [
      { name: "Monthly Maintenance Retainer", price: "from $50", unit: "per month" },
      { name: "Security Audit & Patching", price: "$300", unit: "per audit" },
      { name: "Codebase Refactoring", price: "$12", unit: "per hour" },
      { name: "Legacy System Migration", price: "Custom", unit: "quote" },
    ],
  },
];

export default function WebDevelopmentPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-6">
              <ShieldCheck className="h-3.5 w-3.5" />
              Production-Ready Engineering
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.1]">
              Scalable Web <br /> 
              <span className="text-muted-foreground">Architectures.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              We specialize in clean, modular codebases using Next.js and FastAPI. 
              Our focus is on building high-performance systems that don't just look 
              good, but are maintainable and secure.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg" className="h-12 px-8" asChild>
                <Link href="/contact">Build My Project</Link>
              </Button>
              <Button variant="outline" size="lg" className="h-12 px-8">
                Technical Stack
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-transparent blur-3xl -z-10" />
            <div className="bg-card border border-border rounded-2xl p-6 shadow-2xl">
              {/* Decorative Code UI */}
              <div className="flex gap-1.5 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/20" />
                <div className="w-3 h-3 rounded-full bg-amber-500/20" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/20" />
              </div>
              <pre className="text-sm font-mono text-muted-foreground space-y-2">
                <code className="block text-primary">export const Config = &#123;</code>
                <code className="block pl-4">architecture: &quot;Clean&quot;,</code>
                <code className="block pl-4">frontend: &quot;Next.js 15&quot;,</code>
                <code className="block pl-4">database: &quot;Prisma & Postgres&quot;,</code>
                <code className="block text-primary">&#125;;</code>
              </pre>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all group"
              >
                <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      

      {/* Combos/Pricing Section */}
      <section className="mt-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-muted/50 rounded-[2.5rem] p-8 md:p-16 border border-border">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold">Project Combos</h2>
                <p className="text-muted-foreground mt-2">Verified bundles for common business needs.</p>
              </div>
              <Link href="/pricing" className="text-sm font-semibold flex items-center gap-2 hover:text-primary transition-colors">
                View Full Pricing Model <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {combos.map((combo) => (
                <div 
                  key={combo.name}
                  className={cn(
                    "bg-background p-8 rounded-3xl border transition-all",
                    combo.popular ? "border-primary shadow-lg shadow-primary/5" : "border-border"
                  )}
                >
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-xl font-bold">{combo.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{combo.description}</p>
                    </div>
                    {combo.popular && (
                      <span className="bg-primary text-primary-foreground text-[10px] font-black uppercase px-2 py-1 rounded">
                        Recommended
                      </span>
                    )}
                  </div>
                  
                  <div className="text-3xl font-bold mb-8">{combo.price}</div>
                  
                  <ul className="space-y-4 mb-10">
                    {combo.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Button className="w-full h-12 rounded-xl" variant={combo.popular ? "default" : "outline"}>
                    {combo.cta}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
  <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
    <div className="max-w-2xl">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Technical Services A La Carte</h2>
      <p className="text-muted-foreground mt-4 leading-relaxed">
        Need specific engineering support without a full combo? Choose from our specialized 
        technical services. All services follow strict **Clean Architecture** principles.
      </p>
    </div>
    <div className="hidden md:block">
      <div className="flex items-center gap-2 text-xs font-medium text-primary bg-primary/10 px-3 py-1.5 rounded-full">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
        </span>
        Accepting New Projects
      </div>
    </div>
  </div>

  <div className="grid grid-cols-1 gap-12">
    {pricingCategories.map((cat, idx) => (
      <div key={idx} className="group">
        <div className="flex items-baseline gap-4 mb-6">
          <h3 className="text-xl font-bold min-w-max">{cat.category}</h3>
          <div className="h-px w-full bg-border group-hover:bg-primary/30 transition-colors" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
          {cat.items.map((item, i) => (
            <div 
              key={i} 
              className="flex items-center justify-between py-3 border-b border-border/50 hover:bg-muted/30 px-2 transition-colors rounded-t-lg"
            >
              <div className="flex flex-col">
                <span className="text-sm font-medium text-foreground">{item.name}</span>
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground">{cat.category}</span>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold text-primary">{item.price}</div>
                <div className="text-[10px] text-muted-foreground italic">{item.unit}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
</section>
    </main>
  );
}