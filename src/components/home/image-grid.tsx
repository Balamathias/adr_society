"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

const images = [
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80",
    alt: "Modern house with pool",
  },
  {
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=300&q=80",
    alt: "Luxury waterfront home",
  },
  {
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=500&q=80",
    alt: "Contemporary suburban house",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
    alt: "Cozy wooden cabin",
  },
  {
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=350&q=80",
    alt: "City skyline at night",
  },
]

export function ImageGrid() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section className="container py-5 space-y-4">
        <h2 className="md:text-3xl text-2xl font-semibold">Gallery</h2>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="overflow-hidden rounded-2xl cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setSelectedImage(image.src)}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={300}
            height={400}
            className="w-full h-auto object-cover rounded-2xl"
          />
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-3xl w-full bg-white p-4 rounded-xl shadow-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 bg-white/80 p-1 rounded-full hover:bg-white"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-6 w-6 text-black" />
              </button>
              <Image
                src={selectedImage}
                alt="Expanded view"
                width={800}
                height={600}
                className="w-full h-auto rounded-xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </section>
  )
}
