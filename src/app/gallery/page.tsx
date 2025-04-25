"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { ImageGallery, type GalleryImage } from "@/components/ui/image-gallery"
import { Metadata } from "next"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb"

// export const metadata: Metadata = {
//   title: "Executive Gallery | ADR Society",
//   description: "Meet the executive team of the ADR Society who lead our initiatives and activities.",
// }

// Full list of executives
const allExecutives: GalleryImage[] = [
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
  },
  {
    src: "/excos/amos.png",
    alt: "Amos Johnson - Public Relations Officer",
    title: "Amos Johnson",
    description: "Public Relations Officer - Manages external communications and public image"
  },
  {
    src: "/excos/egya.png",
    alt: "Egya Peters - Events Coordinator",
    title: "Egya Peters",
    description: "Events Coordinator - Organizes society events and coordinates activities"
  },
  {
    src: "/excos/exco-ls-1.png",
    alt: "Research Director",
    title: "Tunde Olatunji",
    description: "Research Director - Oversees research initiatives and academic activities"
  },
  {
    src: "/excos/exco-ls-2.png",
    alt: "Media Coordinator",
    title: "Sarah Johnson",
    description: "Media Coordinator - Manages digital content and social media presence"
  },
  {
    src: "/excos/exco-ls-3.png",
    alt: "Education Officer",
    title: "Daniel Mensah",
    description: "Education Officer - Coordinates educational programs and workshops"
  },
  {
    src: "/excos/exco-ls-4.png",
    alt: "Mentorship Coordinator",
    title: "Fatima Hassan",
    description: "Mentorship Coordinator - Manages the society's mentorship program"
  },
  {
    src: "/excos/exco-ls-5.png",
    alt: "Alumni Relations Officer",
    title: "Grace Adebayo",
    description: "Alumni Relations Officer - Maintains connections with society alumni"
  },
  {
    src: "/excos/exco-ls-6.png",
    alt: "Membership Officer",
    title: "Kwame Osei",
    description: "Membership Officer - Handles membership recruitment and engagement"
  }
]

export default function GalleryPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  
  useEffect(() => {
    setIsLoaded(true)
  }, [])
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <SiteHeader />
      
      {/* Decorative elements */}
      <div className="absolute top-32 right-0 w-72 h-72 bg-primary/5 rounded-l-full -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-tr-full -z-10"></div>
      
      <main className="py-24 md:py-28 relative">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <Breadcrumb className="mb-8">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/gallery" current={true}>Executive Gallery</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            
            <div className="max-w-3xl">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80"
              >
                Meet Our Executive Team
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={isLoaded ? { opacity: 1, scaleX: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="h-1 w-40 bg-primary mb-6 origin-left"
              ></motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-xl text-muted-foreground"
              >
                Our leadership team brings diverse expertise and unwavering commitment to 
                the ADR Society. Get to know the individuals who drive our mission forward.
              </motion.p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <ImageGallery 
              images={allExecutives}
              columns={{ default: 2, sm: 2, md: 3, lg: 4 }}
              aspectRatio="square"
              gap="large"
              lightbox={true}
              lightboxOptions={{
                showThumbnails: true,
                showTitle: true,
                showDescription: true,
                backdropBlur: true
              }}
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex justify-center"
          >
            <Link href="/" passHref>
              <Button variant="default" size="lg" className="group shadow-sm hover:shadow rounded-full px-6">
                <ChevronLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Home
              </Button>
            </Link>
          </motion.div>
        </div>
      </main>
    </div>
  )
} 