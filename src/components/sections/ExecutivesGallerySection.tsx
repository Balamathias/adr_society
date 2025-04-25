"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ImageGallery, GalleryImage } from "@/components/ui/image-gallery"
import { ArrowRight } from "lucide-react"

// Sample executives data - replace with actual data
const executivesPreview: GalleryImage[] = [
  {
    src: "/images/excos/president.jpg",
    alt: "President",
    title: "John Doe",
    role: "President"
  },
  {
    src: "/images/excos/vice-president.jpg",
    alt: "Vice President",
    title: "Jane Smith",
    role: "Vice President"
  },
  {
    src: "/images/excos/secretary.jpg",
    alt: "Secretary",
    title: "Michael Johnson",
    role: "Secretary"
  },
  {
    src: "/images/excos/treasurer.jpg",
    alt: "Treasurer",
    title: "Sarah Williams",
    role: "Treasurer"
  }
]

export function ExecutivesGallerySection() {
  return (
    <section className="w-full py-12 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Meet Our Executive Team
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              The dedicated individuals leading the ADR Society forward
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <ImageGallery 
              images={executivesPreview} 
              columns={{ default: 2, sm: 2, md: 3, lg: 4 }} 
              gap="medium" 
              aspectRatio="square"
              lightbox={true}
              className="mb-8"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link href="/gallery" passHref>
              <Button variant="default" size="lg" className="group">
                View All Executives
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 