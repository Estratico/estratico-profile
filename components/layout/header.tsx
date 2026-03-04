"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Moon,
  Sun,
  ChevronDown,
  Globe,
  Smartphone,
  Cloud,
  Brain,
  Megaphone,
  Palette,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { navLinks, services } from "@/config/site";

// Map icons from strings to Lucide components
const iconMap = {
  Globe,
  Smartphone,
  Cloud,
  Brain,
  Megaphone,
  Palette,
};

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [activeMenu, setActiveMenu] = React.useState<string | null>(null);
  const [mounted, setMounted] = React.useState(false);
  const pathname = usePathname();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isServicesExpanded, setIsServicesExpanded] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () =>
    setTheme(resolvedTheme === "dark" ? "light" : "dark");

  const logoSrc =
    mounted && resolvedTheme === "dark"
      ? "/logos/estratico-logo-reversed.svg"
      : "/logos/estratico-logo-standard.svg";

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled || activeMenu
            ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm"
            : "bg-transparent",
        )}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 md:h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative flex items-center">
              {mounted && (
                <Image
                  src={logoSrc}
                  alt="Estratico"
                  width={140}
                  height={32}
                  className="h-16 w-auto"
                  priority
                />
              )}
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1 h-full">
              {navLinks.map((link) => {
                const isServices = link.label === "Services";

                return (
                  <div
                    key={link.href}
                    className="relative flex items-center h-full"
                    onMouseEnter={() => isServices && setActiveMenu("services")}
                    onMouseLeave={() => setActiveMenu(null)}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "relative flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-md",
                        pathname === link.href
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground",
                      )}
                    >
                      {link.label}
                      {isServices && (
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform duration-200",
                            activeMenu === "services" && "rotate-180",
                          )}
                        />
                      )}
                      {pathname === link.href && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute inset-0 bg-muted rounded-md -z-10"
                        />
                      )}
                    </Link>

                    {/* Mega Menu / Services Compound Menu */}
                    {isServices && (
                      <AnimatePresence>
                        {activeMenu === "services" && (
                          <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute top-[calc(100%-10px)] left-1/2 -translate-x-1/2 w-[600px] pt-4"
                          >
                            <div className="bg-popover border border-border rounded-xl shadow-2xl overflow-hidden p-6 grid grid-cols-2 gap-4">
                              {services.map((service) => {
                                const Icon =
                                  iconMap[
                                    service.icon as keyof typeof iconMap
                                  ] || Globe;
                                return (
                                  <Link
                                    key={service.id}
                                    href={`/services/${service.id}`}
                                    className="group flex items-start gap-4 p-3 rounded-lg hover:bg-muted transition-colors"
                                  >
                                    <div className="mt-1 p-2 rounded-md bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                      <Icon className="h-5 w-5" />
                                    </div>
                                    <div>
                                      <div className="text-sm font-semibold text-foreground">
                                        {service.title}
                                      </div>
                                      <p className="text-xs text-muted-foreground line-clamp-2 mt-1">
                                        {service.shortDescription}
                                      </p>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right side Actions */}
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full"
              >
                {mounted && (
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={resolvedTheme}
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 10, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {resolvedTheme === "dark" ? (
                        <Sun className="h-5 w-5" />
                      ) : (
                        <Moon className="h-5 w-5" />
                      )}
                    </motion.div>
                  </AnimatePresence>
                )}
              </Button>
              <Button asChild className="hidden md:inline-flex">
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X /> : <Menu />}
              </Button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu (Updated for Services) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed inset-0 z-40 md:hidden bg-background overflow-y-auto"
          >
            <div className="flex flex-col h-full pt-20 pb-10 px-6">
              <div className="flex flex-col gap-2 grow">
                {navLinks.map((link, index) => {
                  const isServices = link.label === "Services";

                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {isServices ? (
                        // Services Collapsible Logic
                        <div className="flex flex-col">
                          <button
                            onClick={() =>
                              setIsServicesExpanded(!isServicesExpanded)
                            }
                            className="flex items-center justify-between w-full px-4 py-3 text-lg font-medium rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                          >
                            {link.label}
                            <ChevronDown
                              className={cn(
                                "h-5 w-5 transition-transform duration-300",
                                isServicesExpanded && "rotate-180",
                              )}
                            />
                          </button>

                          <AnimatePresence>
                            {isServicesExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden bg-muted/30 rounded-lg mt-1 ml-2"
                              >
                                {services.map((service) => (
                                  <Link
                                    key={service.id}
                                    href={`/services/${service.id}`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground border-l border-border ml-4"
                                  >
                                    <div className="h-1.5 w-1.5 rounded-full bg-primary/40" />
                                    {service.title}
                                  </Link>
                                ))}
                                {/* The "View All Services" option */}
                                <Link
                                  href="/services"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="flex items-center gap-3 px-4 py-4 text-sm font-bold text-primary border-t border-border mt-2"
                                >
                                  Explore All Services →
                                </Link>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        // Regular Links
                        <Link
                          href={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={cn(
                            "block px-4 py-3 text-lg font-medium rounded-lg transition-colors",
                            pathname === link.href
                              ? "bg-muted text-foreground"
                              : "text-muted-foreground hover:bg-muted hover:text-foreground",
                          )}
                        >
                          {link.label}
                        </Link>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              <div className="shrink-0 pt-10">
                <Button asChild className="w-full">
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get in Touch
                  </Link>
                </Button>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
