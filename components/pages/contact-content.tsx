"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import { motion, useInView } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { siteConfig, faqs, services } from "@/config/site";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { DiscoveryCallDialog } from "../discovery-call-cta";

const budgetRanges = [
  { value: "5k-10k", label: "$5,000 - $10,000" }, // Adjusted for high-end tech
  { value: "10k-25k", label: "$10,000 - $25,000" },
  { value: "25k-50k", label: "$25,000 - $50,000" },
  { value: "50k+", label: "$50,000+" },
  { value: "undisclosed", label: "Budget not yet defined" },
];

const projectTimelines = [
  { value: "urgent", label: "Urgent (Less than 1 month)" },
  { value: "standard", label: "Standard (1-3 months)" },
  { value: "long-term", label: "Strategic (3-6+ months)" },
  { value: "not-sure", label: "Flexible / Not sure" },
];

const projectTypes = [
  { value: "new-build", label: "New Project from Scratch" },
  { value: "scaling", label: "Scaling Existing Product" },
  { value: "maintenance", label: "Support & Maintenance" },
  { value: "consulting", label: "Technical Strategy/Consulting" },
];



export function ContactPageContent() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service");

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<
    "idle" | "success" | "error"
  >("idle");

  const heroRef = React.useRef(null);
  const faqRef = React.useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const isFaqInView = useInView(faqRef, { once: true, margin: "-100px" });

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      jobTitle: "",
      service: preselectedService || "",
      projectType: "",
      budget: "",
      timeline: "",
      referral: "",
      message: "",
      honeypot: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    // Check honeypot
    if (data.honeypot) {
      console.log("Bot detected");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          type: "contact",
          subject: "New Website Enquiry",
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const serviceValue = watch("service");
  const budgetValue = watch("budget");

  return (
    <>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-linear-to-b from-muted/50 to-background" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="text-sm font-medium text-accent uppercase tracking-wider">
              Contact Us
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance">
              {"Let's build something great together"}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
              Have a project in mind? {"We'd"} love to hear about it. Fill out
              the form below and {"we'll"} get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="pb-20 md:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-6 md:p-8 rounded-2xl border border-border bg-card"
              >
                {submitStatus === "success" ? (
                  <div className="text-center py-12">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                      }}
                    >
                      <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Thank you for reaching out. {"We'll"} get back to you
                      within 24 hours.
                    </p>
                    <Button
                      onClick={() => setSubmitStatus("idle")}
                      variant="outline"
                      className="bg-transparent"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Honeypot field - hidden from users */}
                    <input
                      type="text"
                      {...register("honeypot")}
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    {/* Section 1: Contact Details */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold border-b pb-2">1. About You</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name <span className="text-destructive">*</span></Label>
                          <Input id="name" placeholder="John Doe" {...register("name")} />
                          {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Work Email <span className="text-destructive">*</span></Label>
                          <Input id="email" type="email" placeholder="john@company.com" {...register("email")} />
                          {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company">Organization</Label>
                          <Input id="company" placeholder="Company Name" {...register("company")} />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="jobTitle">Job Title</Label>
                          <Input id="jobTitle" placeholder="e.g. CTO, Founder" {...register("jobTitle")} />
                        </div>
                      </div>
                    </div>

                    {/* Section 2: Project Scope */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold border-b pb-2">2. Project Scope</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label>Interested Service</Label>
                          <Select onValueChange={(v) => setValue("service", v)} defaultValue={preselectedService || ""}>
                            <SelectTrigger><SelectValue placeholder="Select service" /></SelectTrigger>
                            <SelectContent>
                              {services.map((s) => <SelectItem key={s.id} value={s.id}>{s.title}</SelectItem>)}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label>Project Type</Label>
                          <Select onValueChange={(v) => setValue("projectType", v)}>
                            <SelectTrigger><SelectValue placeholder="Nature of project" /></SelectTrigger>
                            <SelectContent>
                              {projectTypes.map((t) => <SelectItem key={t.value} value={t.value}>{t.label}</SelectItem>)}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label>Budget Range</Label>
                          <Select onValueChange={(v) => setValue("budget", v)}>
                            <SelectTrigger><SelectValue placeholder="Estimated budget" /></SelectTrigger>
                            <SelectContent>
                              {budgetRanges.map((b) => <SelectItem key={b.value} value={b.value}>{b.label}</SelectItem>)}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label>Desired Timeline</Label>
                          <Select onValueChange={(v) => setValue("timeline", v)}>
                            <SelectTrigger><SelectValue placeholder="How fast do you need it?" /></SelectTrigger>
                            <SelectContent>
                              {projectTimelines.map((t) => <SelectItem key={t.value} value={t.value}>{t.label}</SelectItem>)}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    {/* Section 3: Project Details */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold border-b pb-2">3. Details</h3>
                      <div className="space-y-2">
                        <Label htmlFor="message">Project Description <span className="text-destructive">*</span></Label>
                        <Textarea 
                          id="message" 
                          placeholder="Please describe your goals, key features, and any specific challenges you're looking to solve..." 
                          rows={5} 
                          {...register("message")} 
                        />
                        {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="referral">How did you hear about Estratico?</Label>
                        <Input id="referral" placeholder="e.g. LinkedIn, Referral, Google Search" {...register("referral")} />
                      </div>
                    </div>

                    {submitStatus === "error" && (
                      <div className="p-4 rounded-lg bg-destructive/10 text-destructive flex items-center gap-2">
                        <AlertCircle className="h-5 w-5" />
                        <span>
                          Something went wrong. Please try again or email us
                          directly.
                        </span>
                      </div>
                    )}

                    <Button type="submit" size="lg" className="w-full h-12 text-md bg-primary text-primary-foreground hover:bg-primary/90" disabled={isSubmitting}>
                      {isSubmitting ? <Loader2 className="animate-spin" /> : "Initiate Consultation"}
                    </Button>
                  </form>
                )}
              </motion.div>
            </div>

            {/* Contact Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <div className="p-2 rounded-lg bg-muted">
                        <Mail className="h-5 w-5" />
                      </div>
                      <span>{siteConfig.contact.email}</span>
                    </a>
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <div className="p-2 rounded-lg bg-muted">
                        <Phone className="h-5 w-5" />
                      </div>
                      <span>{siteConfig.contact.phone}</span>
                    </a>
                    <div className="flex items-start gap-3 text-muted-foreground">
                      <div className="p-2 rounded-lg bg-muted">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <span>{siteConfig.contact.address}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl border border-border bg-muted/30">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="h-5 w-5 text-accent" />
                    <h4 className="font-semibold text-foreground">
                      Response Time
                    </h4>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    We typically respond to all inquiries within 24 hours during
                    business days. For urgent matters, please call us directly.
                  </p>
                </div>

                <div className="p-6 rounded-xl border border-border bg-primary text-primary-foreground">
                  <h4 className="font-semibold mb-2">
                    Prefer a scheduled call?
                  </h4>
                  <p className="text-primary-foreground/80 text-sm mb-4">
                    Book a free 30-minute discovery call to discuss your project
                    in detail.
                  </p>
                  {/* <Button
                    variant="secondary"
                    size="sm"
                    className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                  >
                    Schedule a Call
                  </Button> */}
                  <DiscoveryCallDialog/>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="py-20 md:py-32 bg-muted/30">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="text-sm font-medium text-accent uppercase tracking-wider">
              FAQ
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-foreground">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* JSON-LD for Contact Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            mainEntity: {
              "@type": "Organization",
              name: siteConfig.name,
              telephone: siteConfig.contact.phone,
              email: siteConfig.contact.email,
              address: {
                "@type": "PostalAddress",
                streetAddress: siteConfig.contact.address,
              },
            },
          }),
        }}
      />
    </>
  );
}
