"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ImageGallery, type GalleryImage } from "@/components/ui/image-gallery"

const executives: GalleryImage[] = [
  {
    src: "/excos/joseph.png",
    alt: "Joseph Adeleke - President",
    title: "Joseph Adeleke",
    description: "President - Leads the ADR Society with vision and dedication"
  },
  {
    src: "/excos/chioma.png",
    alt: "Chioma Eze - Vice President",
    title: "Chioma Eze",
    description: "Vice President - Supports society initiatives and drives excellence"
  },
  {
    src: "/excos/deborah.png",
    alt: "Deborah Akintade - Secretary",
    title: "Deborah Akintade",
    description: "Secretary - Manages communications and administrative functions"
  },
  {
    src: "/excos/dogan.png",
    alt: "Dogan Smith - Treasurer",
    title: "Dogan Smith",
    description: "Treasurer - Oversees financial matters and budget planning"
  }
]

export function ExecutivesSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-bl-full -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 rounded-tr-full -z-10"></div>
      
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
          >
            Meet Our Executive Team
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isLoaded ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 w-24 bg-primary mx-auto mb-6 origin-center"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-muted-foreground text-lg"
          >
            Our dedicated team of leaders works tirelessly to create meaningful opportunities for members
            and advance the field of alternative dispute resolution.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-10"
        >
          <ImageGallery 
            images={executives} 
            columns={{ default: 2, sm: 2, md: 4, lg: 4 }}
            aspectRatio="square"
            gap="large"
            lightbox={true}
            lightboxOptions={{
              showTitle: true,
              showDescription: true,
              showThumbnails: true,
              backdropBlur: true
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center"
        >
          <Link href="/gallery" passHref>
            <Button variant="outline" size="lg" className="group shadow-sm hover:shadow rounded-full px-6">
              View All Executives
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
} 