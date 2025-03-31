"use client";

import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
}

const HeroSection = ({
  title = "Novaria",
  subtitle = "Fresh Coffee, Exceptional Hospitality.",
  backgroundImage = "/hero-image.jpg",
}: HeroSectionProps) => {
  return (
    <div className="relative w-full min-h-screen flex items-center bg-amber-950 overflow-hidden">
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-black/40" 
        />
      </motion.div>

      <div className="relative w-full text-center">
        <div className="">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl md:text-2xl text-white/90 mb-8"
          >
            {subtitle}
          </motion.p>
        </div>
      </div>

      {/* Decorative Elements */}
      {/* <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-background to-transparent" />
      <div className="absolute -bottom-6 -right-6 w-14 h-14 rounded-full bg-amber-600/20 blur-xl" />
      <div className="absolute top-1/4 -left-8 w-10 h-10 rounded-full bg-amber-500/20 blur-lg" /> */}
    </div>
  );
};

export default HeroSection;
