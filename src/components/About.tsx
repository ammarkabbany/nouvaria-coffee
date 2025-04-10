"use client";

import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] md:h-[600px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/nouvaria-shop.jpg"
              alt="Syrian coffee preparation"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-coffee-900/70 to-transparent"></div>
          </div>
          <div className="animate-slideInRight">
            <h2 className="text-3xl font-bold mb-6">About Novaria</h2>
            <p className="mb-4 text-xl">
              Novaria is a Specialty Syrian Coffee shop in the Strip district of
              Pittsburgh, PA. With a decade of experience in the coffee
              industry, we bring great hospitality, cozy ambiance, and delicious
              drinks.
            </p>
            <p className="mb-6 text-xl">
              Indulge in our homemade pastries and signature drinks, crafted
              with passion and care.
            </p>
            <Button variant={"secondary"}>
              Discover Our Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
