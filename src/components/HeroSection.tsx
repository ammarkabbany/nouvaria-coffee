"use client";

import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { env } from "@/env";
import { fadeIn, slideUp } from "@/lib/animations";

interface HeroSectionProps {
  backgroundImage?: string;
}

const HeroSection = ({
  backgroundImage = "/hero-image.jpg",
}: HeroSectionProps) => {
  return (
    <section className="relative h-dvh w-full overflow-hidden select-none">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10"
        {...fadeIn}
        transition={{ duration: 0.6 }}
      />
      <Image
        src={backgroundImage}
        alt="Novaria Syrian Coffee Shop"
        fill
        className="object-cover"
        priority
      />
      <motion.div
        className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center"
        variants={slideUp}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Authentic <span className="text-coffee-300">Syrian Coffee</span> in the Heart of Pittsburgh
          </h1>
          <p
            className="mt-4 text-lg md:text-xl text-gray-200 max-w-xl"
          >
            Experience the rich tradition of Syrian coffee culture with our handcrafted beverages and homemade
            pastries in a cozy, welcoming atmosphere.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <Link href={env.NEXT_PUBLIC_MENU_LINK}>
                Our Menu <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </motion.div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
    </section>
  );
};

export default HeroSection;
