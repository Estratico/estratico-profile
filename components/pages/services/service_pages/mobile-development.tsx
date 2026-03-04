"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { 
  CheckCircle2, 
  Smartphone, 
  Zap, 
  Layers, 
  ArrowRight,
  ShieldCheck,
  Cpu,
  AppWindow
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const features = [
  { 
    title: "Cross-Platform Apps", 
    description: "High-performance iOS and Android applications built from a single codebase using React Native or Flutter.",
    icon: Smartphone 
  },
  { 
    title: "Native Performance", 
    description: "Direct access to device hardware including camera, GPS, and biometrics with optimized native bridges.",
    icon: Cpu 
  },
  { 
    title: "Offline-First Logic", 
    description: "Robust local data persistence ensuring your app remains fully functional without a network connection.",
    icon: ShieldCheck 
  },
  { 
    title: "Polished UI/UX", 
    description: "Platform-specific design patterns that feel native to both Apple and Android ecosystems.",
    icon: AppWindow 
  },
];

const combos = [
  {
    name: "The MVP Mobile Lite",
    price: "From $2,500",
    description: "Transform your core idea into a functional app ready for the stores.",
    items: ["React Native/Flutter Setup", "Core UI (Up to 5 screens)", "Firebase/Supabase Integration", "App Store Submission Support"],
    popular: false,
    cta: "Launch MVP"
  },
  {
    name: "The Business Ecosystem",
    price: "From $6,000",
    description: "A complete mobile solution with a dedicated backend and admin sync.",
    items: ["Cross-Platform App (iOS & Android)", "Custom Backend API Integration", "Real-time Push Notifications", "Analytics & Crash Reporting"],
    popular: true,
    cta: "Get Started"
  },
  {
    name: "Enterprise Mobility",
    price: "Custom",
    description: "Complex mobile systems for large-scale corporate operations.",
    items: ["Offline Data Synchronization", "Biometric Authentication (FaceID/TouchID)", "Custom SDK Development", "24/7 Priority Support & SLA"],
    popular: false,
    cta: "Scale Now"
  },
];

const pricingCategories = [
  {
    category: "Mobile Core & Architecture",
    description: "The foundation of your mobile application's performance and reliability.",
    items: [
      { name: "Environment Setup & Boilerplate", price: "$600", unit: "flat fee" },
      { name: "Global State Management (Redux/Zustand)", price: "$800", unit: "setup" },
      { name: "Offline Data Sync (SQLite/WatermelonDB)", price: "$1,200", unit: "implementation" },
      { name: "Push Notification Infrastructure", price: "$500", unit: "setup" },
    ],
  },
  {
    category: "Native & Hardware Integration",
    description: "Leveraging the full power of mobile hardware.",
    items: [
      { name: "Camera & Image Processing", price: "$450", unit: "per module" },
      { name: "Geolocation & Background Tracking", price: "$700", unit: "per module" },
      { name: "Biometric Auth (Face/Fingerprint)", price: "$400", unit: "setup" },
      { name: "NFC/Bluetooth Integration", price: "$900", unit: "implementation" },
    ],
  },
  {
    category: "Deployment & Maintenance",
    description: "Getting your app into users' hands and keeping it there.",
    items: [
      { name: "App Store (iOS) Submission", price: "$300", unit: "per build" },
      { name: "Play Store (Android) Submission", price: "$300", unit: "per build" },
      { name: "Over-the-Air (OTA) Updates Setup", price: "$500", unit: "one-time" },
      { name: "OS Version Compatibility Update", price: "$150", unit: "per hour" },
    ],
  },
];

// Define animation variants for the internal loading elements
const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 },
};

const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.1, // This creates the staggered loading effect
    },
  },
};

export default function MobileDevelopmentPage() {
    const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    // Restart the animation sequence every 3 seconds
    const interval = setInterval(() => {
      setAnimationKey((prev) => prev + 1);
    }, 3000);
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
              <Smartphone className="h-3.5 w-3.5" />
              High-Performance Mobile Apps
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.1]">
              Mobile First <br /> 
              <span className="text-muted-foreground">Engineering.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              We build seamless mobile experiences that leverage native hardware 
              capabilities while maintaining the scalability of a modern web stack. 
              Production-ready, store-approved, and user-centric.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg" className="h-12 px-8" asChild>
                <Link href="/contact">Launch Your App</Link>
              </Button>
              <Button variant="outline" size="lg" className="h-12 px-8">
                App Strategy
              </Button>
            </div>
          </motion.div>

          <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative hidden lg:block"
      >
        {/* Ambient Glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent blur-[100px] -z-10" />

        {/* Device Frame */}
        <div className="relative w-[300px] mx-auto aspect-[9/14.5] bg-[#0F0F0F] rounded-[3.5rem] p-3 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] border-t border-white/10 border-l border-white/5">
          
          {/* Side Buttons (Silent Switch + Volume) */}
          <div className="absolute -left-[2px] top-24 w-[3px] h-8 bg-gradient-to-b from-neutral-800 to-black rounded-l-sm" />
          <div className="absolute -left-[2px] top-36 w-[3px] h-14 bg-gradient-to-b from-neutral-800 to-black rounded-l-sm" />
          <div className="absolute -left-[2px] top-52 w-[3px] h-14 bg-gradient-to-b from-neutral-800 to-black rounded-l-sm" />
          
          {/* Power Button */}
          <div className="absolute -right-[2px] top-40 w-[3px] h-20 bg-gradient-to-b from-neutral-800 to-black rounded-r-sm" />

          {/* Inner Screen Container */}
          <div className="relative w-full h-full bg-background rounded-[2.8rem] border border-black overflow-hidden flex flex-col">
            
            {/* Status Bar / Dynamic Island */}
            <div className="absolute top-0 inset-x-0 h-8 flex items-center justify-center z-20">
              <div className="w-24 h-6 bg-black rounded-full mt-2 flex items-center justify-around px-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50" /> {/* Camera Sensor */}
                  <div className="w-8 h-1 bg-neutral-800 rounded-full" /> {/* Speaker */}
              </div>
            </div>

            {/* Simulated Live App Content */}
            <div className="flex-1 pt-12 p-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={animationKey} // Forces re-render to restart the sequence
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="space-y-6"
                >
                  {/* Profile Header */}
                  <motion.div variants={itemVariants} className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/20" />
                    <div className="space-y-2">
                      <div className="h-3 w-20 bg-muted rounded" />
                      <div className="h-2 w-12 bg-muted/60 rounded" />
                    </div>
                  </motion.div>

                  {/* Feature Card */}
                  <motion.div variants={itemVariants} className="bg-muted/40 p-4 rounded-2xl border border-border/50">
                    <div className="h-24 w-full bg-gradient-to-br from-primary/10 to-transparent rounded-xl mb-4 relative overflow-hidden">
                       {/* Subtle internal shimmer */}
                       <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-shimmer" />
                    </div>
                    <div className="h-3 w-3/4 bg-muted rounded mb-2" />
                    <div className="h-3 w-1/2 bg-muted rounded" />
                  </motion.div>

                  {/* Action Grid (Logs/Metrics) */}
                  <div className="grid grid-cols-2 gap-3">
                    {[1, 2, 3, 4].map((i) => (
                      <motion.div key={i} variants={itemVariants} className="aspect-square bg-muted/30 rounded-2xl flex flex-col items-center justify-center gap-2 border border-border/20">
                         <div className="h-6 w-6 rounded-lg bg-primary/10" />
                         <div className="h-1.5 w-10 bg-muted rounded" />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Home Indicator */}
            <div className="h-8 flex items-end justify-center pb-2">
              <motion.div 
                animate={{ scaleX: [1, 1.1, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-32 h-1 bg-muted/50 rounded-full" 
              />
            </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Mobile Project Combos</h2>
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
        <h2 className="text-3xl font-bold mb-16">Modular Mobile Services</h2>
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