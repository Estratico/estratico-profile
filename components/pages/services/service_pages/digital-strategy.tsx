"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { 
  CheckCircle2, 
  Target, 
  PenTool, 
  TrendingUp, 
  MousePointer2,
  Globe,
  BarChart3,
  PieChart,
  Megaphone,
  Share2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const features = [
  { 
    title: "Performance Marketing", 
    description: "Data-backed ad campaigns on Google, Meta, and LinkedIn for measurable ROI.", 
    icon: Target 
  },
  { 
    title: "Content Architecture", 
    description: "Strategic storytelling that positions your brand as a leader in your niche.", 
    icon: PenTool 
  },
  { 
    title: "SEO Strategy", 
    description: "Technical and content SEO focused on dominating search engine results.", 
    icon: TrendingUp 
  },
  { 
    title: "Conversion Optimization", 
    description: "A/B testing and funnel analysis to squeeze more value from your traffic.", 
    icon: MousePointer2 
  },
];

const combos = [
  {
    name: "Startup Kit",
    price: "From $50 /mo",
    description: "For individuals & startups looking for simple online presence.",
    items: ["Ad Campaign Management", "Weekly Content Schedule", "Basic SEO Audit", "Monthly Growth Reports"],
    popular: true,
    cta: "Start Growing"
  },
  {
    name: "The Growth Kickstart",
    price: "From $200 /mo",
    description: "For startups looking to gain initial traction and visibility.",
    items: ["Ad Campaign Management", "Weekly Content Schedule", "Basic SEO Audit", "Monthly Growth Reports"],
    popular: true,
    cta: "Start Growing"
  },
  {
    name: "Omnichannel Dominance",
    price: "Custom",
    description: "Full-scale marketing strategy for established businesses.",
    items: ["Integrated Media Buying", "High-End Content Production", "Advanced Analytics Setup", "Competitor Intelligence"],
    popular: false,
    cta: "Let's Talk"
  }
];

const pricingCategories = [
  {
    category: "Social Media Graphics",
    description: "Custom-sized visuals for Instagram, LinkedIn, or Facebook, including posts, stories, and header banners.",
    items: [
      { name: "Single-Sided Flyer Design", price: "$10", unit: "per design" },
      { name: "Social Media Post Bundle", price: "$50", unit: "per 5 assets" },
      { name: "Event Poster & Large Format", price: "$20", unit: "per project" },
      { name: "Digital Branding Graphics", price: "$50", unit: "setup" },
      { name: "Marketing Brochure (Tri-fold)", price: "$70", unit: "per design" },
    ],
  },
  {
    category: "Acquisition & Ads",
    description: "Driving targeted traffic through high-intent channels.",
    items: [
      { name: "Social Media Ad Management", price: "$70", unit: "per month" },
      { name: "Retargeting Funnel Design", price: "$50", unit: "setup" },
      { name: "Ad Creative Production", price: "$100", unit: "per set" },
    ],
  },
  {
    category: "Growth & Authority",
    description: "Building long-term brand equity and search dominance.",
    items: [
      { name: "SEO Content Package", price: "$50", unit: "5 articles" },
      { name: "Technical SEO Optimization", price: "$70",unit: "per site" },
      { name: "Email Automation Setup", price: "$30", unit: "implementation" },
      { name: "Influencer Outreach Strategy", price: "$800", unit: "campaign" },
    ],
  },
];

// Strategy Dashboard Mockup
const StrategyDashboard = () => (
  <div className="relative w-full aspect-[4/3] bg-neutral-900 rounded-3xl border border-white/10 overflow-hidden p-6 shadow-2xl">
    {/* Header */}
    <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
      <div className="flex gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500/50" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
        <div className="w-3 h-3 rounded-full bg-green-500/50" />
      </div>
      <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Global Reach v2.4</div>
    </div>

    <div className="grid grid-cols-2 gap-4 h-full">
      {/* Global Map Section */}
      <div className="col-span-2 relative h-32 bg-white/5 rounded-xl flex items-center justify-center overflow-hidden">
        <Globe className="w-24 h-24 text-primary/20 absolute -bottom-4 -right-4" />
        <div className="relative w-full h-full p-4">
          <div className="text-[10px] text-primary font-bold mb-2">LIVE TRAFFIC MAP</div>
          {/* Animated Connection Points */}
          <div className="absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-primary rounded-full animate-ping" />
          <div className="absolute top-1/3 left-1/2 w-1.5 h-1.5 bg-primary rounded-full animate-ping [animation-delay:0.5s]" />
          <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 bg-primary rounded-full animate-ping [animation-delay:1.2s]" />
          <svg className="absolute inset-0 w-full h-full opacity-20">
            <motion.path 
              d="M 100 60 Q 150 20 250 60" 
              stroke="currentColor" 
              fill="transparent" 
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </svg>
        </div>
      </div>

      {/* Growth Charts */}
      <div className="bg-white/5 rounded-xl p-4 flex flex-col gap-4">
        <div className="text-[10px] text-muted-foreground uppercase">ROI Projection</div>
        <div className="flex items-end gap-1.5 h-20">
          {[40, 60, 45, 80, 55, 95].map((height, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${height}%` }}
              transition={{ duration: 1, delay: i * 0.1, repeat: Infinity, repeatType: "reverse", repeatDelay: 2 }}
              className="flex-1 bg-primary/60 rounded-t-sm"
            />
          ))}
        </div>
      </div>

      {/* Real-time Metrics */}
      <div className="bg-white/5 rounded-xl p-4 space-y-3">
        <div className="text-[10px] text-muted-foreground uppercase">Conversions</div>
        <div className="text-2xl font-bold text-primary">+248%</div>
        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
          <motion.div 
             initial={{ width: 0 }}
             animate={{ width: "75%" }}
             className="h-full bg-primary" 
          />
        </div>
        <div className="text-[10px] text-green-500">Above Target</div>
      </div>
    </div>
  </div>
);

export default function DigitalStrategyPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 overflow-hidden">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-6">
              <Megaphone className="h-3.5 w-3.5" />
              Brand Dominance
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.1]">
              Market <br /> 
              <span className="text-muted-foreground">Accelerated.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              We combine aggressive performance marketing with high-level content 
              architecture to scale your brand. Stop competing and start dominating 
              through measurable data and strategic storytelling.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg" className="h-12 px-8" asChild>
                <Link href="/contact">Launch Campaign</Link>
              </Button>
              <Button variant="outline" size="lg" className="h-12 px-8">
                Request Audit
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent blur-[100px] -z-10" />
            <StrategyDashboard />
            
            {/* Floating Tags */}
            <div className="flex gap-3 mt-6">
              <div className="px-3 py-1.5 bg-background border rounded-full text-[10px] font-mono flex items-center gap-2">
                <BarChart3 className="w-3 h-3 text-primary" /> CTR: 4.8% (High)
              </div>
              <div className="px-3 py-1.5 bg-background border rounded-full text-[10px] font-mono flex items-center gap-2">
                <Share2 className="w-3 h-3 text-primary" /> Viral Velocity Enabled
              </div>
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

      {/* Combos Section */}
      <section className="mt-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-muted/50 rounded-[2.5rem] p-8 md:p-16 border border-border">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Strategic Packages</h2>
            <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {combos.map((combo) => (
                <div 
                  key={combo.name}
                  className={cn(
                    "bg-background p-8 rounded-3xl border transition-all",
                    combo.popular ? "border-primary shadow-lg shadow-primary/5" : "border-border"
                  )}
                >
                  <h3 className="text-xl font-bold">{combo.name}</h3>
                  <div className="text-3xl font-bold my-6">{combo.price}</div>
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

      {/* A La Carte Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <h2 className="text-3xl font-bold mb-16">Growth Menu</h2>
        <div className="grid grid-cols-1 gap-12">
          {pricingCategories.map((cat, idx) => (
            <div key={idx}>
              <div className="flex items-baseline gap-4 mb-6">
                <h3 className="text-xl font-bold min-w-max">{cat.category}</h3>
                <div className="h-px w-full bg-border" />
              </div>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
                {cat.items.map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-3 border-b border-border/50">
                    <span className="text-sm font-medium">{item.name}</span>
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