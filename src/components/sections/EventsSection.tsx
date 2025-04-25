"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const events = [
  {
    date: "Oct 15",
    title: "Introduction to Mediation",
    type: "Workshop",
    color: "from-primary/30 to-accent/30",
    description: "Learn the basics of mediation and conflict resolution in this introductory workshop."
  },
  {
    date: "Nov 05",
    title: "Negotiation Techniques",
    type: "Workshop",
    color: "from-primary/20 to-accent/40",
    description: "Master essential negotiation skills and strategies in this hands-on session."
  },
  {
    date: "Dec 12",
    title: "ADR in Corporate Settings",
    type: "Seminar",
    color: "from-accent/20 to-primary/50",
    description: "Explore how ADR can effectively resolve corporate and commercial disputes."
  }
];

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

export function EventsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-muted">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">Mark Your Calendar</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 mt-2">Upcoming Events</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Join us for workshops, conferences, and networking events focused on ADR practices.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, i) => (
            <motion.div 
              key={event.title}
              className="bg-white rounded-xl overflow-hidden shadow-md group"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div className={`h-48 bg-gradient-to-r ${event.color} relative`}>
                <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                  {event.date}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <span className="inline-block bg-primary/10 text-primary px-2 py-1 rounded-full text-xs mr-2">
                    {event.type}
                  </span>
                  <span className="text-xs uppercase tracking-wider">{event.date.split(" ")[0]}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                <p className="text-muted-foreground mb-5 line-clamp-2">
                  {event.description}
                </p>
                <Button asChild className="btn-outline text-sm px-4 py-2 h-auto">
                  <a href={`/events/${i+1}`}>View Details</a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Button asChild className="btn-outline">
              <a href="/events">View All Events</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 