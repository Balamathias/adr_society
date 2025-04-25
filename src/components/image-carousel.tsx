"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

const images = [
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    alt: "Modern house with pool",
  },
  {
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    alt: "Luxury waterfront home",
  },
  {
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    alt: "Contemporary suburban house",
  },
]

export function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const next = () => setCurrentIndex((currentIndex + 1) % images.length)
  const previous = () => setCurrentIndex((currentIndex - 1 + images.length) % images.length)

  return (
    <div className="relative overflow-hidden rounded-lg w-full max-w-3xl mx-auto">
      <div className="aspect-[4/3] relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              fill
              priority
              className="object-cover rounded-lg"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute inset-0 flex items-center justify-between p-4">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 rounded-full bg-white/70 hover:bg-white/90"
          onClick={previous}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 rounded-full bg-white/70 hover:bg-white/90"
          onClick={next}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-colors ${
              index === currentIndex ? "bg-primary" : "bg-white/70"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}
