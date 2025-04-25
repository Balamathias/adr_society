"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-24 bg-primary text-white overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-accent/20 blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-accent/20 blur-3xl"></div>
      
      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Join the ADR Society Today</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Become part of our growing community and help promote peaceful resolutions through ADR practices. Membership opens doors to exclusive workshops, networking opportunities, and practical experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button className="btn-white" size="lg" asChild>
                <a href="/join">Become a Member</a>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button className="btn-pop bg-transparent border-2 border-white text-white hover:bg-white/10 hover:text-white" size="lg" asChild>
                <a href="/contact">Contact Us</a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 