"use client";

import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="pt-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 items-stretch overflow-hidden"
      >
        {/* Image Half */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#cbc8b6] h-full"
        >
          <div className="relative h-[600px] w-full">
            <Image
              src="/nouvaria-shop.jpg"
              alt="Coffee Shop Interior"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Content Half */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col justify-center items-center space-y-6 bg-primary p-12 h-[600px]"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-3xl font-bold text-primary-foreground"
          >
            About Novaria
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="space-y-4 text-primary-foreground max-w-lg text-center"
          >
            <p>
              Novaria is a Specialty Syrian Coffee shop in the Strip district of Pittsburgh, PA. With a decade of experience in the coffee industry, we bring great hospitality, cozy ambiance, and delicious drinks.
            </p>
            <p>
              Indulge in our homemade pastries and signature drinks, crafted with passion and care.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <Button 
              className="bg-primary-foreground text-primary hover:bg-[#e5e5c5] mt-4 px-8"
            >
              Visit Us
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;