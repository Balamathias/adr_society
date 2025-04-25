"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export interface GalleryImage {
  src: string
  alt: string
  title?: string
  description?: string,
  role?: string
}

interface ImageGalleryProps {
  images: GalleryImage[]
  columns?: {
    default: number
    sm?: number
    md?: number
    lg?: number
  }
  aspectRatio?: "square" | "video" | "portrait" | "auto"
  gap?: "small" | "medium" | "large"
  lightbox?: boolean
  lightboxOptions?: {
    showThumbnails?: boolean
    showTitle?: boolean
    showDescription?: boolean
    backdropBlur?: boolean
  }
  className?: string
}

export function ImageGallery({
  images,
  columns = { default: 2, sm: 3, md: 4, lg: 4 },
  aspectRatio = "auto",
  gap = "medium",
  lightbox = false,
  lightboxOptions = {
    showThumbnails: true,
    showTitle: true,
    showDescription: true,
    backdropBlur: true,
  },
  className,
}: ImageGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  const gapClass = {
    small: "gap-2",
    medium: "gap-4",
    large: "gap-6",
  }

  const aspectRatioClass = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
    auto: "aspect-auto",
  }

  const gridColsClass = {
    default: `grid-cols-${columns.default}`,
    sm: columns.sm ? `sm:grid-cols-${columns.sm}` : "",
    md: columns.md ? `md:grid-cols-${columns.md}` : "",
    lg: columns.lg ? `lg:grid-cols-${columns.lg}` : "",
  }

  const handleImageClick = (index: number) => {
    if (lightbox) {
      setActiveImageIndex(index)
      setLightboxOpen(true)
    }
  }

  const handleNext = () => {
    setActiveImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const handlePrevious = () => {
    setActiveImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const renderGalleryItems = () => {
    return images.map((image, index) => (
      <motion.div
        key={`gallery-item-${index}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        className={cn(
          "overflow-hidden rounded-xl cursor-pointer relative group",
          aspectRatioClass[aspectRatio]
        )}
        onClick={() => handleImageClick(index)}
      >
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors z-10"></div>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          style={{ objectPosition: "center 25%" }}
        />
        {image.title && (
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-20">
            <h4 className="text-white font-medium text-lg">{image.title}</h4>
          </div>
        )}
      </motion.div>
    ))
  }

  return (
    <>
      <div
        className={cn(
          "grid",
          gridColsClass.default,
          gridColsClass.sm,
          gridColsClass.md,
          gridColsClass.lg,
          gapClass[gap],
          className
        )}
      >
        {renderGalleryItems()}
      </div>

      {lightbox && lightboxOpen && (
        <div
          className={cn(
            "fixed inset-0 z-50 flex flex-col items-center justify-center p-4 md:p-8",
            lightboxOptions.backdropBlur
              ? "backdrop-blur-md bg-black/90"
              : "bg-black/95"
          )}
          onClick={closeLightbox}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative max-w-5xl w-full h-[70vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute right-0 top-0 p-2 text-white bg-black/50 rounded-full z-50 m-4"
              onClick={closeLightbox}
            >
              <X className="h-6 w-6" />
            </button>

            <div className="relative flex-1 bg-black/30 rounded-xl overflow-hidden">
              <Image
                src={images[activeImageIndex].src}
                alt={images[activeImageIndex].alt}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 90vw, 70vw"
                priority
              />
              
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white bg-black/50 rounded-full hover:bg-black/70 transition-colors"
                onClick={(e) => {
                  e.stopPropagation()
                  handlePrevious()
                }}
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white bg-black/50 rounded-full hover:bg-black/70 transition-colors"
                onClick={(e) => {
                  e.stopPropagation()
                  handleNext()
                }}
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {(lightboxOptions.showTitle || lightboxOptions.showDescription) && (
              <div className="bg-black/80 text-white p-4 mt-2 rounded-md">
                {lightboxOptions.showTitle && images[activeImageIndex].title && (
                  <h3 className="text-xl font-bold mb-2">{images[activeImageIndex].title}</h3>
                )}
                {lightboxOptions.showDescription && images[activeImageIndex].description && (
                  <p className="text-gray-300">{images[activeImageIndex].description}</p>
                )}
              </div>
            )}

            {lightboxOptions.showThumbnails && images.length > 1 && (
              <div className="flex overflow-x-auto gap-2 mt-4 pb-2 max-w-full">
                {images.map((image, index) => (
                  <div
                    key={`thumbnail-${index}`}
                    className={cn(
                      "shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 cursor-pointer transition-all",
                      index === activeImageIndex
                        ? "border-white opacity-100 scale-105"
                        : "border-transparent opacity-60 hover:opacity-100"
                    )}
                    onClick={(e) => {
                      e.stopPropagation()
                      setActiveImageIndex(index)
                    }}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        sizes="64px"
                        style={{ objectPosition: "center 25%" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </>
  )
} 