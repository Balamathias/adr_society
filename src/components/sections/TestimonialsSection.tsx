"use client"

import { motion } from "framer-motion"

const testimonials = [
  {
    quote: "Being part of the ADR Society has significantly enhanced my understanding of mediation and arbitration practices.",
    name: "Amina Ibrahim",
    role: "Law Student, 400 Level"
  },
  {
    quote: "The practical skills I gained through ADR Society workshops have been invaluable in my early legal career.",
    name: "Mohammed Bello",
    role: "Recent Graduate"
  },
  {
    quote: "The ADR Society provides an excellent platform for networking with professionals in the field of alternative dispute resolution.",
    name: "Chika Okonkwo",
    role: "Law Student, 300 Level"
  }
]

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.5,
      delay: 0.1 * custom,
      ease: "easeOut"
    }
  })
};

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full opacity-70 -z-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full opacity-70 -z-10 blur-3xl"></div>
      
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 mt-2">What Our Members Say</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Hear from our members about how the ADR Society has impacted their academic and professional journeys.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div 
              key={testimonial.name}
              className="bg-primary/5 p-8 rounded-2xl shadow-md relative"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={cardVariants}
            >
              <div className="absolute top-4 right-4 text-black/20 text-5xl font-serif">
                "
              </div>
              
              <p className="mb-8 italic">{testimonial.quote}</p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 relative rounded-full overflow-hidden bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">
                    {testimonial.name.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div className="ml-4">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-primary">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 