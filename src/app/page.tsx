"use client"

import { SiteHeader } from "@/components/site-header"
import Hero from "@/components/home/hero"
import { FeaturesSection } from "@/components/sections/FeaturesSection"
import { MissionSection } from "@/components/sections/MissionSection"
import { ExecutivesSection } from "@/components/sections/ExecutivesSection"
import { EventsSection } from "@/components/sections/EventsSection"
import { TestimonialsSection } from "@/components/sections/TestimonialsSection"
import { CTASection } from "@/components/sections/CTASection"
import { FooterSection } from "@/components/sections/FooterSection"

export default function Home() {
  return (
    <div className="overflow-hidden">
      <SiteHeader />
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* Features Section */}
        <FeaturesSection />
        
        {/* Mission Statement Section */}
        <MissionSection />
        
        {/* Executive Team Section */}
        <ExecutivesSection />
        
        {/* Events Preview */}
        <EventsSection />
        
        {/* Testimonials Section */}
        <TestimonialsSection />
        
        {/* Call to Action */}
        <CTASection />
      </main>
      
      {/* Footer */}
      <FooterSection />
    </div>
  )
}

