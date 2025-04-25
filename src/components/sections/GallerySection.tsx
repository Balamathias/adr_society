"use client"

import { Button } from "@/components/ui/button"
import { ImageGallery, type GalleryImage } from "@/components/ui/image-gallery"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

// Define our executive team members with their information
const executiveImages: GalleryImage[] = [
  {
    src: "/excos/joseph.png",
    alt: "Joseph",
    title: "Joseph Adeleke",
    role: "President",
  },
  {
    src: "/excos/chioma.png",
    alt: "Chioma",
    title: "Chioma Eze",
    role: "Vice President",
  },
  {
    src: "/excos/deborah.png",
    alt: "Deborah",
    title: "Deborah Akintade",
    role: "Secretary",
  },
  {
    src: "/excos/dogan.png",
    alt: "Dogan",
    title: "Dogan Smith",
    role: "Treasurer",
  },
  {
    src: "/excos/amos.png",
    alt: "Amos",
    title: "Amos Johnson",
    role: "Public Relations Officer",
  },
  {
    src: "/excos/egya.png",
    alt: "Egya",
    title: "Egya Peters",
    role: "Events Coordinator",
  },
]

export function GallerySection() {
  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10 md:mb-16">
          <div>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Meet Our Executive Team
            </motion.h2>
            <motion.p 
              className="mt-2 text-muted-foreground max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Our dedicated team of executives works tirelessly to create valuable experiences and opportunities for all ADR Society members.
            </motion.p>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button asChild variant="default" className="group">
              <Link href="/gallery">
                View All Executives
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <ImageGallery 
            images={executiveImages} 
            columns={{ default: 2, sm: 2, md: 3, lg: 4 }}
            gap="large" 
            aspectRatio="portrait"
            lightbox={true}
            lightboxOptions={{
              showThumbnails: true,
              showDescription: true,
            }}
            className="sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3"
          />
        </motion.div>
      </div>
    </section>
  )
} 