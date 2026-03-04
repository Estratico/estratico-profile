"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { 
  CheckCircle2, 
  Palette, 
  Box, 
  Search, 
  Eye,
  MousePointer2,
  Layout,
  Layers,
  Component,
  Figma
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const features = [
  { 
    title: "High-Fidelity Prototyping", 
    description: "Interactive Figma prototypes that look and feel like the finished product.", 
    icon: Palette 
  },
  { 
    title: "Design Systems", 
    description: "Atomic design libraries that ensure brand consistency across all digital platforms.", 
    icon: Box 
  },
  { 
    title: "User Research & Audit", 
    description: "Data-driven insights to solve usability friction and increase conversion.", 
    icon: Search 
  },
  { 
    title: "Accessibility (WCAG)", 
    description: "Ensuring your digital products are usable by everyone, regardless of ability.", 
    icon: Eye 
  },
];

const combos = [
  {
    name: "The Design Sprint",
    price: "From $2,000",
    description: "Rapidly move from idea to a verified visual prototype.",
    items: ["User Journey Mapping", "Wireframes (3-5 screens)", "Interactive Prototype", "Feedback Workshop"],
    popular: false,
    cta: "Start Sprint"
  },
  {
    name: "Full Product Design",
    price: "From $5,000",
    description: "Comprehensive design for complex web and mobile apps.",
    items: ["Complete Design System", "High-Fi Desktop & Mobile UI", "Iconography & Brand Assets", "Developer Handoff Docs"],
    popular: true,
    cta: "Design Everything"
  }
];

const pricingCategories = [
  {
    category: "Visual Engineering",
    description: "Crafting the aesthetics and interface of your product.",
    items: [
      { name: "Brand Visual Identity", price: "$1,500", unit: "package" },
      { name: "High-Fidelity UI Design", price: "$400", unit: "per screen" },
      { name: "Custom Icon Set", price: "$300", unit: "set of 12" },
      { name: "Lottie Micro-animations", price: "$250", unit: "per animation" },
    ],
  },
  {
    category: "Strategy & Systems",
    description: "Scaling design through logic and research.",
    items: [
      { name: "Atomic Design System", price: "$2,200", unit: "starting" },
      { name: "UX Audit & Usability Report", price: "$800", unit: "per audit" },
      { name: "WCAG 2.1 Compliance Check", price: "$600", unit: "review" },
      { name: "Information Architecture", price: "$500", unit: "mapping" },
    ],
  },
];

// Design Canvas Mockup
const DesignCanvas = () => (
  <div className="relative w-full h-[400px] bg-muted/20 rounded-3xl border border-dashed border-border overflow-hidden p-8">
    {/* Grid Background */}
    <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />
    
    {/* Animated Wireframe Layout */}
    <div className="relative grid grid-cols-6 gap-4 h-full">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="col-span-2 h-12 bg-primary/10 border border-primary/30 rounded-lg flex items-center px-3"
      >
        <div className="w-4 h-4 rounded-full bg-primary/20 mr-2" />
        <div className="w-12 h-2 bg-primary/20 rounded" />
      </motion.div>
      
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.5 }}
        className="col-span-4 h-12 bg-muted/40 border border-border rounded-lg" 
      />

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="col-span-4 h-48 bg-muted/30 border border-border rounded-xl p-4 flex flex-col gap-3"
      >
        <div className="w-full h-4 bg-muted/60 rounded" />
        <div className="w-2/3 h-4 bg-muted/60 rounded" />
        <div className="mt-auto w-24 h-8 bg-primary/20 rounded-md border border-primary/30" />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2 }}
        className="col-span-2 h-48 bg-primary/5 border border-primary/20 border-dashed rounded-xl flex items-center justify-center"
      >
        <Palette className="w-8 h-8 text-primary/20" />
      </motion.div>
    </div>

    {/* Moving Cursor */}
    <motion.div
      animate={{
        x: [50, 250, 150, 50],
        y: [50, 100, 300, 50],
      }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-0 left-0 z-50 text-primary drop-shadow-lg"
    >
      <MousePointer2 className="w-6 h-6 fill-primary" />
      <div className="ml-4 mt-2 px-2 py-1 bg-primary text-primary-foreground text-[10px] font-bold rounded">
        UX Designer
      </div>
    </motion.div>
  </div>
);

export default function UIUXDesignPage() {
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
              <Figma className="h-3.5 w-3.5" />
              Human-Centered Design
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.1]">
              Interface <br /> 
              <span className="text-muted-foreground">Architects.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              We design digital products that are intuitive, accessible, and scaleable. 
              By merging aesthetic beauty with data-driven user psychology, we create 
              experiences that users love and businesses grow from.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg" className="h-12 px-8" asChild>
                <Link href="/contact">Book a Sprint</Link>
              </Button>
              <Button variant="outline" size="lg" className="h-12 px-8">
                View Portfolio
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent blur-[100px] -z-10" />
            <DesignCanvas />
            
            {/* Status Labels */}
            <div className="flex gap-3 mt-6">
              <div className="px-3 py-1.5 bg-background border rounded-full text-[10px] font-mono flex items-center gap-2">
                <Layout className="w-3 h-3 text-primary" /> Component Library: Active
              </div>
              <div className="px-3 py-1.5 bg-background border rounded-full text-[10px] font-mono flex items-center gap-2">
                <Layers className="w-3 h-3 text-primary" /> Atomic Design System
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
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Design Packages</h2>
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

      {/* A La Carte Pricing */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <h2 className="text-3xl font-bold mb-16">Design Services Menu</h2>
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