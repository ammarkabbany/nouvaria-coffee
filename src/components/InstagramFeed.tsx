"use client";

import React from "react";
import Image from "next/image";
import { Instagram } from "lucide-react";
import { motion } from "framer-motion";

const InstagramFeed = () => {
  const instagramPosts = [
    {
      id: 1,
      imageUrl: "/i-image-1.jpeg",
      likes: 124,
      caption: "Start your morning right ☕",
    },
    {
      id: 2,
      imageUrl: "/i-image-2.jpg",
      likes: 98,
      caption: "Fresh baklava just out of the oven 🍯",
    },
    {
      id: 3,
      imageUrl: "/i-image-3.jpg",
      likes: 156,
      caption: "Syrian coffee brewing traditions ✨",
    },
    {
      id: 4,
      imageUrl: "/coffee-with-nouvaria-card.jpg",
      likes: 203,
      caption: "Weekend vibes at Nouvaria ❤️",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="container mx-auto px-4 py-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl font-bold text-primary mb-4"
        >
          Follow Us on Instagram
        </motion.h2>
        <motion.a 
          href="https://instagram.com/novaria_coffee" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary hover:text-[#3A5331]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Instagram className="w-5 h-5" />
          <span>@novaria_coffee</span>
        </motion.a>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {instagramPosts.map((post) => (
          <motion.div 
            key={post.id}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="relative flex flex-col bg-accent rounded-lg overflow-hidden"
          >
            <div className="relative aspect-square">
              <Image
                src={post.imageUrl}
                alt={post.caption}
                fill
                className="object-cover"
              />
            </div>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-sm p-4 text-center bg-primary text-[#f5f5dc]"
            >
              {post.caption}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default InstagramFeed;