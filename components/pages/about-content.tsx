"use client"

import * as React from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import {
  ArrowRight,
  Target,
  Eye,
  Heart,
  Zap,
  Users,
  Award,
  MapPin,
  Mail,
  Phone,
} from "lucide-react"
import { siteConfig, stats } from "@/config/site"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const values = [
  {
    icon: Target,
    title: "Excellence",
    description:
      "We pursue excellence in every line of code, every design decision, and every client interaction.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description:
      "We embrace cutting-edge technologies and creative approaches to solve complex challenges.",
  },
  {
    icon: Heart,
    title: "Partnership",
    description:
      "We build lasting relationships with our clients, treating their success as our own.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We believe the best solutions emerge from diverse perspectives working together.",
  },
]

const team = [
  {
    name: "Alex Chen",
    role: "Founder & CEO",
    bio: "15+ years in tech leadership, previously at Google and Stripe.",
  },
  {
    name: "Maria Rodriguez",
    role: "CTO",
    bio: "Expert in cloud architecture and AI systems with a PhD from MIT.",
  },
  {
    name: "James Wilson",
    role: "Head of Design",
    bio: "Award-winning designer with experience at Apple and Airbnb.",
  },
  {
    name: "Sarah Kim",
    role: "VP of Engineering",
    bio: "Former Amazon principal engineer specializing in scalable systems.",
  },
  {
    name: "David Brown",
    role: "Client Success Director",
    bio: "10+ years helping enterprises achieve digital transformation.",
  },
  {
    name: "Emily Zhang",
    role: "Head of AI/ML",
    bio: "Published researcher and expert in applied machine learning.",
  },
]

export function AboutPageContent() {
  const heroRef = React.useRef(null)
  const missionRef = React.useRef(null)
  const valuesRef = React.useRef(null)
  const teamRef = React.useRef(null)

  const isHeroInView = useInView(heroRef, { once: true })
  const isMissionInView = useInView(missionRef, { once: true, margin: "-100px" })
  const isValuesInView = useInView(valuesRef, { once: true, margin: "-100px" })
  const isTeamInView = useInView(teamRef, { once: true, margin: "-100px" })

  return (
    <>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background" />
          <div className="absolute top-0 left-1/3 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="text-sm font-medium text-accent uppercase tracking-wider">
              About Us
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance">
              We build technology that transforms businesses
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
              Founded with a vision to bridge the gap between business needs and
              technological possibilities, Estratico has grown into a trusted
              partner for companies seeking meaningful digital transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold">{stat.value}</div>
                <p className="text-primary-foreground/70 text-sm mt-1">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section ref={missionRef} className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isMissionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm font-medium text-accent uppercase tracking-wider">
                  Our Mission
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Empowering businesses through technology
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                We exist to help businesses harness the full potential of
                technology. Our mission is to deliver innovative, scalable, and
                sustainable digital solutions that drive real business outcomes
                and create lasting value for our clients and their customers.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isMissionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Eye className="h-6 w-6 text-accent" />
                </div>
                <span className="text-sm font-medium text-accent uppercase tracking-wider">
                  Our Vision
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Shaping the future of digital innovation
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                We envision a world where every business, regardless of size,
                has access to world-class technology solutions. We strive to be
                at the forefront of digital innovation, setting new standards
                for excellence in software development and digital
                transformation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-20 md:py-32 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mb-16"
          >
            <span className="text-sm font-medium text-accent uppercase tracking-wider">
              Our Values
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground text-balance">
              The principles that guide everything we do
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 md:p-8 rounded-xl border border-border bg-card"
              >
                <div className="p-3 rounded-lg bg-muted w-fit mb-4">
                  <value.icon className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mb-16"
          >
            <span className="text-sm font-medium text-accent uppercase tracking-wider">
              Our Team
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground text-balance">
              Meet the people behind Estratico
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              A diverse team of experts passionate about technology and
              committed to delivering excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow"
              >
                <Avatar className="h-24 w-24 mx-auto mb-4">
                  <AvatarFallback className="bg-primary text-primary-foreground text-2xl font-semibold">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-lg font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="text-accent text-sm font-medium">{member.role}</p>
                <p className="mt-2 text-muted-foreground text-sm">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            id="careers"
            className="mt-16 p-8 rounded-xl border border-border bg-muted/30 text-center"
          >
            <Award className="h-10 w-10 mx-auto mb-4 text-accent" />
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Join Our Team
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              {"We're always looking for talented individuals who share our passion for technology and excellence."}
            </p>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/contact?subject=careers">
                View Open Positions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <span className="text-sm font-medium text-accent uppercase tracking-wider">
                Get in Touch
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground text-balance">
                {"Let's start a conversation"}
              </h2>
              <p className="mt-4 text-muted-foreground text-lg">
                {"Have a project in mind or just want to learn more about what we do? We'd love to hear from you."}
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-muted">
                    <Mail className="h-5 w-5 text-foreground" />
                  </div>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-muted">
                    <Phone className="h-5 w-5 text-foreground" />
                  </div>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-muted">
                    <MapPin className="h-5 w-5 text-foreground" />
                  </div>
                  <span className="text-foreground">
                    {siteConfig.contact.address}
                  </span>
                </div>
              </div>

              <div className="mt-8">
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/contact">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="relative rounded-xl overflow-hidden bg-muted h-80 lg:h-auto">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 mx-auto text-muted-foreground/50 mb-2" />
                  <p className="text-muted-foreground">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
