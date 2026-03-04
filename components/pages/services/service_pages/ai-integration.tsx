"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { 
  CheckCircle2, 
  Brain, 
  BarChart, 
  Sparkles, 
  MessageSquare,
  Cpu,
  Zap,
  Bot,
  Database,
  Search
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const features = [
  { 
    title: "Custom LLM Workflows", 
    description: "Integrating OpenAI, Anthropic, or Llama 3 into your business processes.", 
    icon: Brain 
  },
  { 
    title: "Predictive Analytics", 
    description: "Training models to forecast trends and user behavior based on historical data.", 
    icon: BarChart 
  },
  { 
    title: "Automated Content Systems", 
    description: "AI-driven pipelines for image generation, transcription, and translation.", 
    icon: Sparkles 
  },
  { 
    title: "Conversational Agents", 
    description: "Advanced RAG-based chatbots that understand your specific company data.", 
    icon: MessageSquare 
  },
];

const combos = [
  {
    name: "The Intelligence Layer",
    price: "From $4,500",
    description: "Add a layer of AI to your existing web or mobile app.",
    items: ["Vector Database Setup", "RAG Pipeline Development", "Custom Prompt Engineering", "API Usage Monitoring"],
    popular: true,
    cta: "Integrate AI"
  },
  {
    name: "Full ML Pipeline",
    price: "Custom",
    description: "End-to-end model training and production deployment.",
    items: ["Data Cleaning & Labeling", "Model Training/Fine-tuning", "Deployment to SageMaker", "Continuous Evaluation"],
    popular: false,
    cta: "Build Custom AI"
  },
];

const pricingCategories = [
  {
    category: "AI & Model Engineering",
    description: "The core intelligence driving your automated workflows.",
    items: [
      { name: "Fine-tuning (Llama/Mistral)", price: "$2,500", unit: "per model" },
      { name: "RAG Pipeline Architecture", price: "$1,800", unit: "implementation" },
      { name: "Vector Search Setup (Pinecone/Weaviate)", price: "$900", unit: "setup" },
      { name: "Prompt Engineering Library", price: "$600", unit: "curation" },
    ],
  },
  {
    category: "Data Operations",
    description: "Structuring and processing data for machine learning.",
    items: [
      { name: "ETL Pipeline Construction", price: "$1,200", unit: "per source" },
      { name: "Data Labeling Automation", price: "$800", unit: "setup" },
      { name: "Model Monitoring & Drift Detection", price: "$500", unit: "monthly" },
      { name: "Custom API Integration", price: "$400", unit: "per endpoint" },
    ],
  },
];

const itemVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1 },
};

// SVG components for the Neural Network
const NeuralNetwork = () => {
  return (
    <svg width="400" height="400" viewBox="0 0 400 400" className="overflow-visible">
      {/* Connection Lines */}
      {[...Array(8)].map((_, i) => (
        <motion.line
          key={`line-${i}`}
          x1="200" y1="200"
          x2={200 + 140 * Math.cos((i * Math.PI * 2) / 8)}
          y2={200 + 140 * Math.sin((i * Math.PI * 2) / 8)}
          stroke="currentColor"
          strokeWidth="1"
          className="text-primary/20"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
      {/* Outer Nodes */}
      {[...Array(8)].map((_, i) => (
        <motion.circle
          key={`node-${i}`}
          cx={200 + 140 * Math.cos((i * Math.PI * 2) / 8)}
          cy={200 + 140 * Math.sin((i * Math.PI * 2) / 8)}
          r="6"
          className="fill-primary"
          animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
        />
      ))}
      {/* Central Node */}
      <motion.circle
        cx="200"
        cy="200"
        r="12"
        className="fill-primary shadow-lg shadow-primary"
        animate={{ r: [12, 15, 12], filter: ["blur(0px)", "blur(4px)", "blur(0px)"] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </svg>
  );
};

export default function MachineLearningPage() {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setAnimationKey(k => k + 1), 5000);
    return () => clearInterval(interval);
  }, []);

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
              <Bot className="h-3.5 w-3.5" />
              Next-Gen Data Intelligence
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.1]">
              Automated <br /> 
              <span className="text-muted-foreground">Intelligence.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              We bridge the gap between raw data and actionable intelligence. 
              Our team builds proprietary ML models and RAG pipelines that 
              automate decision-making and content generation for the modern enterprise.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg" className="h-12 px-8" asChild>
                <Link href="/contact">Start Training</Link>
              </Button>
              <Button variant="outline" size="lg" className="h-12 px-8">
                View AI Audit
              </Button>
            </div>
          </motion.div>

          {/* Neural Network Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent blur-[120px] -z-10" />
            
            <div className="relative">
              <NeuralNetwork />
              
              {/* Floating Intelligence Nodes */}
              <AnimatePresence>
                <motion.div 
                  key={animationKey}
                  initial="hidden" 
                  animate="visible" 
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                >
                  <motion.div 
                    variants={itemVariants}
                    className="absolute -top-10 left-0 bg-background/80 backdrop-blur border p-4 rounded-2xl shadow-xl flex items-center gap-3"
                  >
                    <Search className="h-4 w-4 text-primary" />
                    <span className="text-xs font-mono">Semantic Search: OK</span>
                  </motion.div>
                  <motion.div 
                    variants={itemVariants}
                    className="absolute bottom-0 right-0 bg-background/80 backdrop-blur border p-4 rounded-2xl shadow-xl flex items-center gap-3"
                  >
                    <Database className="h-4 w-4 text-primary" />
                    <span className="text-xs font-mono">Embedding... 1536d</span>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-12">AI Project Suites</h2>
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
        <h2 className="text-3xl font-bold mb-16">Modular AI Services</h2>
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