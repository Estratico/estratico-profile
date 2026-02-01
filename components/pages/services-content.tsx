"use client"

import * as React from "react"
import Link from "next/link"
import { motion, useInView, AnimatePresence } from "framer-motion"
import {
  Globe,
  Smartphone,
  Cloud,
  Brain,
  TrendingUp,
  Palette,
  ArrowRight,
  Check,
  ChevronDown,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { services } from "@/config/site"
import { Button } from "@/components/ui/button"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe,
  Smartphone,
  Cloud,
  Brain,
  TrendingUp,
  Palette,
}

export function ServicesPageContent() {
  const [expandedService, setExpandedService] = React.useState<string | null>(null)
  const [activeFilter, setActiveFilter] = React.useState<string>("all")
  const heroRef = React.useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })

  const categories = [
    { id: "all", label: "All Services" },
    { id: "development", label: "Development" },
    { id: "strategy", label: "Strategy" },
    { id: "design", label: "Design" },
  ]

  const categoryMap: Record<string, string> = {
    "web-development": "development",
    "mobile-development": "development",
    "cloud-solutions": "development",
    "ai-integration": "development",
    "digital-strategy": "strategy",
    "ui-ux-design": "design",
  }

  const filteredServices =
    activeFilter === "all"
      ? services
      : services.filter((s) => categoryMap[s.id] === activeFilter)

  return (
    <>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background" />
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="text-sm font-medium text-accent uppercase tracking-wider">
              Our Services
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance">
              Technology solutions that drive real business impact
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
              From custom software development to AI integration, we deliver
              end-to-end technology services that help businesses innovate,
              scale, and succeed in the digital age.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 flex flex-wrap gap-3"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                type="button"
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all",
                  activeFilter === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                )}
              >
                {category.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20 md:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service, index) => {
                const Icon = iconMap[service.icon]
                const isExpanded = expandedService === service.id

                return (
                  <motion.article
                    key={service.id}
                    id={service.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className={cn(
                      "rounded-2xl border border-border bg-card overflow-hidden scroll-mt-24",
                      "transition-shadow duration-300 hover:shadow-lg"
                    )}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedService(isExpanded ? null : service.id)
                      }
                      className="w-full p-6 md:p-8 flex items-start gap-4 md:gap-6 text-left"
                      aria-expanded={isExpanded}
                    >
                      <div className="p-3 md:p-4 rounded-xl bg-muted text-foreground shrink-0">
                        {Icon && <Icon className="h-6 w-6 md:h-8 md:w-8" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                          {service.title}
                        </h2>
                        <p className="mt-2 text-muted-foreground line-clamp-2">
                          {service.shortDescription}
                        </p>
                      </div>
                      <ChevronDown
                        className={cn(
                          "h-6 w-6 text-muted-foreground shrink-0 transition-transform duration-300",
                          isExpanded && "rotate-180"
                        )}
                      />
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0">
                            <div className="pt-6 border-t border-border">
                              <p className="text-muted-foreground leading-relaxed mb-6">
                                {service.description}
                              </p>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                                {service.features.map((feature) => (
                                  <div
                                    key={feature}
                                    className="flex items-center gap-2"
                                  >
                                    <Check className="h-5 w-5 text-accent shrink-0" />
                                    <span className="text-foreground">
                                      {feature}
                                    </span>
                                  </div>
                                ))}
                              </div>
                              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                                <Link href={`/contact?service=${service.id}`}>
                                  Inquire About {service.title}
                                  <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                              </Button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.article>
                )
              })}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <span className="text-sm font-medium text-accent uppercase tracking-wider">
              Our Process
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground text-balance">
              How we bring your vision to life
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "We dive deep into understanding your business, goals, and challenges through collaborative workshops.",
              },
              {
                step: "02",
                title: "Strategy",
                description:
                  "We craft a comprehensive roadmap that aligns technology solutions with your business objectives.",
              },
              {
                step: "03",
                title: "Development",
                description:
                  "Our expert team builds your solution using agile methodologies with regular updates and feedback.",
              },
              {
                step: "04",
                title: "Launch & Support",
                description:
                  "We ensure a smooth deployment and provide ongoing maintenance and optimization.",
              },
            ].map((item, index) => (
              <div key={item.step} className="relative">
                <div className="text-6xl font-bold text-primary/10 mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-border -translate-x-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
              {"Ready to get started?"}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {"Let's discuss your project and explore how we can help you achieve your goals."}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent">
                <Link href="/work">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD for Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Estratico Services",
            description: "Technology services offered by Estratico",
            itemListElement: services.map((service, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "Service",
                name: service.title,
                description: service.description,
                provider: {
                  "@type": "Organization",
                  name: "Estratico",
                },
              },
            })),
          }),
        }}
      />
    </>
  )
}
