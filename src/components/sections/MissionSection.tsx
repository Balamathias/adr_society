"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const missionPoints = [
  "Promote understanding of ADR methods in legal education",
  "Develop practical skills through workshops and simulations",
  "Build connections with ADR professionals and organizations",
  "Support research and development in dispute resolution techniques"
];

export function MissionSection() {
  return (
    <section className="py-24 bg-white/50">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-xl overflow-hidden h-[500px] relative">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center" 
                style={{ 
                  backgroundImage: "url('https://images.unsplash.com/photo-1521587760476-6c12a4b040da')",
                }}
              ></div>
              
              {/* Green Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-transparent"></div>
              
              {/* Dark Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              
              <div className="absolute bottom-8 left-8 right-8">
                <blockquote className="italic text-xl text-white text-shadow-lg">
                  "Empowering students with the skills to resolve disputes amicably and effectively."
                </blockquote>
                <p className="text-white/80 mt-3">— ADR Society Founder</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <div className="w-20 h-1 bg-primary mb-8"></div>
            <p className="text-lg text-muted-foreground mb-6">
              The ADR Society of Ahmadu Bello University aims to educate, advocate, and implement alternative dispute resolution techniques, fostering a culture of peaceful conflict resolution.
            </p>
            <ul className="space-y-4 my-8">
              {missionPoints.map((item, i) => (
                <motion.li 
                  key={i}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.4 }}
                >
                  <span className="text-primary mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
            <Button asChild className="btn-primary mt-4">
              <a href="/mission">Our Full Mission Statement</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 