"use client";

import React from "react";
import { Button } from "./ui/button";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  backgroundImage?: string;
  onCtaClick?: () => void;
}

const HeroSection = ({
  title = "Exceptional Coffee, Extraordinary Experience",
  subtitle = "Discover our carefully selected beans from around the world, roasted to perfection for a truly remarkable cup.",
  ctaText = "Shop Now",
  backgroundImage = "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1512&q=80",
  onCtaClick = () => console.log("CTA clicked"),
}: HeroSectionProps) => {
  return (
    <div className="relative w-full h-[600px] bg-amber-950 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content Container */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-start">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">{subtitle}</p>
          <Button
            size="lg"
            className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-6 text-lg"
            onClick={onCtaClick}
          >
            {ctaText}
          </Button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-background to-transparent" />
      <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-amber-600/20 blur-xl" />
      <div className="absolute top-1/4 -left-8 w-16 h-16 rounded-full bg-amber-500/20 blur-lg" />
    </div>
  );
};

export default HeroSection;
