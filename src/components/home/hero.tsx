"use client"

import React from 'react'
import { Button } from '../ui/button'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('/images/adr.png')",
          backgroundPosition: "center",
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
      />
      
      {/* Dark Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/90 to-black/85 z-10 w-full h-full" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 z-10 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(16,138,0,0.2),transparent_70%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(16,138,0,0.2),transparent_70%)]"></div>
      </div>
      
      {/* Content */}
      <div className="container max-w-7xl mx-auto px-4 relative z-20 mt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight text-shadow-lg tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="block">ADR Society</span>
              <motion.span 
                className="text-white/90 font-medium italic text-3xl md:text-3xl"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Ahmadu Bello University, Zaria.
              </motion.span>
            </motion.h1>
          </motion.div>
          
          <motion.p 
            className="text-xl md:text-2xl text-white/90 mb-8 text-shadow max-w-xl leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Fostering excellence in alternative dispute resolution since 1982
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                className="bg-primary hover:bg-accent text-white font-medium px-8 py-6 rounded-md shadow-lg transition-all duration-300"
                size="lg"
                asChild
              >
                <Link href="/join">Become a Member</Link>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                variant="outline" 
                className="border-white border-2 text-black hover:bg-white/10 font-medium px-8 py-6 rounded-md backdrop-blur-sm transition-all duration-300"
                size="lg"
                asChild
              >
                <Link href="/about">Discover More</Link>
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Stats */}
          <motion.div 
            className="grid grid-cols-3 gap-4 mt-16 max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {[
              { label: 'Active Members', value: '1000+' },
              { label: 'Annual Events', value: '200+' },
              { label: 'Years of Excellence', value: '40+' },
            ].map((stat, i) => (
              <motion.div 
                key={stat.label}
                className="text-center backdrop-blur-sm bg-white/5 rounded-lg p-3"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 + (i * 0.1), duration: 0.5 }}
                whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.1)' }}
              >
                <p className="text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-xs md:text-sm text-white/80 font-medium tracking-wide">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <motion.div 
            className="w-1 h-3 bg-primary rounded-full mt-2"
            animate={{ 
              y: [0, 4, 0],
              backgroundColor: ['#108a00', '#1aff00', '#108a00'] 
            }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </motion.div>
        <motion.p 
          className="text-xs uppercase text-white mt-2 tracking-widest text-center font-medium"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          Explore
        </motion.p>
      </motion.div>
    </div>
  )
}

export default Hero
