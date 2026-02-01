import { Hero } from "@/components/sections/hero"
import { ServicesOverview } from "@/components/sections/services-overview"
import { Stats } from "@/components/sections/stats"
import { FeaturedWork } from "@/components/sections/featured-work"
import { Testimonials } from "@/components/sections/testimonials"
import { CTA } from "@/components/sections/cta"

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <Stats />
      <FeaturedWork />
      <Testimonials />
      <CTA />
    </>
  )
}
