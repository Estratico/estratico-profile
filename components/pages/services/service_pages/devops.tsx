"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { 
  CheckCircle2, 
  Zap, 
  Layers, 
  ShieldCheck,
  Cloud,
  Terminal,
  Server,
  Activity,
  Cpu,
  Network
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const features = [
  { 
    title: "Infrastructure as Code", 
    description: "Repeatable, version-controlled cloud environments using Terraform and AWS CloudFormation.", 
    icon: Cloud 
  },
  { 
    title: "CI/CD Automation", 
    description: "Automated deployment pipelines that reduce human error and speed up release cycles.", 
    icon: Zap 
  },
  { 
    title: "Kubernetes Orchestration", 
    description: "Scaling containerized applications with high availability and self-healing capabilities.", 
    icon: Layers 
  },
  { 
    title: "Cloud Security & IAM", 
    description: "Hardened cloud environments with strict identity management and encryption at rest.", 
    icon: ShieldCheck 
  },
];

const combos = [
  {
    name: "The Cloud Migration",
    price: "From $3,000",
    description: "Move your legacy infrastructure to the modern cloud.",
    items: ["Architecture Audit", "VPC & Network Setup", "Database Migration", "Basic Monitoring & Alerts"],
    popular: true,
    cta: "Modernize Now"
  },
  {
    name: "DevOps Transformation",
    price: "From $5,500",
    description: "Automate your entire software delivery lifecycle.",
    items: ["Full CI/CD Implementation", "Containerization (Docker)", "Auto-scaling Groups", "Infrastructure Monitoring"],
    popular: false,
    cta: "Automate"
  },
  {
    name: "Enterprise Scalability",
    price: "Custom",
    description: "High-concurrency systems designed for global scale.",
    items: ["Multi-region Deployment", "Kubernetes Fleet Management", "Disaster Recovery Planning", "24/7 SRE Support"],
    popular: false,
    cta: "Scale Now"
  },
];

const pricingCategories = [
  {
    category: "Cloud Engineering",
    description: "The core foundation of your scalable cloud architecture.",
    items: [
      { name: "Environment Provisioning", price: "$1,200", unit: "per env" },
      { name: "Load Balancer Configuration", price: "$400", unit: "setup" },
      { name: "Serverless (Lambda/CloudRun)", price: "$800", unit: "per service" },
      { name: "Log Aggregation Setup", price: "$500", unit: "setup" },
    ],
  },
  {
    category: "Security & Monitoring",
    description: "Ensuring uptime, visibility, and data protection.",
    items: [
      { name: "Grafana/Prometheus Dashboard", price: "$750", unit: "implementation" },
      { name: "WAF & DDoS Protection", price: "$600", unit: "setup" },
      { name: "Automated Backup Systems", price: "$400", unit: "per region" },
      { name: "Vulnerability Scanning", price: "$900", unit: "setup" },
    ],
  },
];

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const containerVariants = {
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

export default function DevOpsInfrastructurePage() {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey((prev) => prev + 1);
    }, 4000);
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
              <Terminal className="h-3.5 w-3.5" />
              Cloud-Native Infrastructure
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.1]">
              Scalable Cloud <br /> 
              <span className="text-muted-foreground">Orchestration.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              We engineer resilient infrastructure using DevOps best practices. 
              From automated CI/CD pipelines to self-healing Kubernetes clusters, 
              we ensure your systems are production-ready and built to scale.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg" className="h-12 px-8" asChild>
                <Link href="/contact">Deploy Now</Link>
              </Button>
              <Button variant="outline" size="lg" className="h-12 px-8">
                Cloud Audit
              </Button>
            </div>
          </motion.div>

          {/* Infrastructure Node Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent blur-[100px] -z-10" />
            
            <div className="relative w-[400px] mx-auto aspect-square flex items-center justify-center">
              {/* Server Rack Mockup */}
              <div className="w-64 h-80 bg-[#0F0F0F] rounded-xl border border-white/10 p-4 shadow-2xl relative flex flex-col gap-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="h-10 w-full bg-neutral-900 rounded border border-white/5 flex items-center px-3 gap-3 overflow-hidden">
                    <div className={cn("h-2 w-2 rounded-full animate-pulse", i === 1 ? "bg-green-500" : "bg-primary")} />
                    <div className="h-1 w-24 bg-neutral-800 rounded" />
                    <div className="ml-auto flex gap-1">
                       <div className="h-1 w-4 bg-neutral-700 rounded" />
                       <div className="h-1 w-2 bg-neutral-700 rounded" />
                    </div>
                  </div>
                ))}

                {/* Pulsing Data Packets */}
                <div className="absolute -inset-10 pointer-events-none">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={`${animationKey}-${i}`}
                      initial={{ opacity: 0, x: -20, y: 0 }}
                      animate={{ 
                        opacity: [0, 1, 0], 
                        x: [0, 150], 
                        y: [i * 40, i * 40] 
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        delay: i * 0.4,
                        ease: "linear"
                      }}
                      className="absolute w-2 h-2 bg-primary rounded-full blur-[2px]"
                    />
                  ))}
                </div>
              </div>

              {/* Floating Status Nodes */}
              <AnimatePresence>
                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="absolute inset-0"
                >
                  <motion.div variants={itemVariants} className="absolute top-0 right-10 p-4 bg-background border rounded-2xl shadow-xl flex items-center gap-3">
                    <Activity className="h-5 w-5 text-green-500" />
                    <div className="text-xs font-mono">Uptime 99.9%</div>
                  </motion.div>
                  <motion.div variants={itemVariants} className="absolute bottom-10 left-0 p-4 bg-background border rounded-2xl shadow-xl flex items-center gap-3">
                    <Cpu className="h-5 w-5 text-primary" />
                    <div className="text-xs font-mono">Auto-scaling Active</div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Infrastructure Solutions</h2>
            <div className="grid lg:grid-cols-3 gap-8">
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
        <h2 className="text-3xl font-bold mb-16">Modular Engineering Services</h2>
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