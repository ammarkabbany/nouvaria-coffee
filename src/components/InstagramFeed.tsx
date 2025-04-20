"use client";

import React from "react";
import Image from "next/image";
import { Heart, Instagram, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";
import { staggerContainer, scaleIn, slideUp } from "@/lib/animations";

const InstagramFeed = () => {
  const instagramPosts = [
    {
      id: 1,
      image: "/i-image-1.jpeg",
      likes: 124,
      comments: 42,
      caption: "Start your morning right ☕",
      url: ""
    },
    {
      id: 2,
      image: "/i-image-2.jpg",
      likes: 98,
      comments: 18,
      caption: "Fresh baklava just out of the oven 🍯",
      url: ""
    },
    {
      id: 3,
      image: "/i-image-3.jpg",
      likes: 156,
      comments: 32,
      caption: "Syrian coffee brewing traditions ✨",
      url: ""
    },
    {
      id: 4,
      image: "/coffee-with-nouvaria-card.jpg",
      likes: 203,
      comments: 16,
      caption: "Weekend vibes at Nouvaria ❤️",
      url: ""
    },
    {
      id: 5,
      image: "/i-image-4.jpg",
      likes: 151,
      comments: 4,
      caption: "Tasty Coffee ☕",
      url: ""
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col items-center text-center mb-10"
          variants={slideUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center mb-4">
            <Instagram className="h-6 w-6 text-coffee-800 mr-2" />
            <h2 className="text-3xl font-bold text-coffee-800">Follow Us on Instagram</h2>
          </div>
          <p className="text-coffee-600 max-w-2xl">
            Join our community and stay updated with our latest creations, events, and behind-the-scenes moments at
            Novaria Coffee.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {instagramPosts.map((post) => (
            <motion.div
              key={post.id}
              variants={scaleIn}
              transition={{ duration: 0.4 }}
              className="group relative overflow-hidden aspect-square"
            >
              <Link
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={`Instagram post: ${post.caption.substring(0, 30)}...`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-coffee-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4 text-white">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-center">
                    <p className="text-sm line-clamp-3 mb-4">{post.caption}</p>
                    <div className="flex justify-center space-x-6">
                      <div className="flex items-center">
                        <Heart className="h-5 w-5 mr-1 fill-white text-white" />
                        <span className="text-sm">{post.likes}</span>
                      </div>
                      <div className="flex items-center">
                        <MessageCircle className="h-5 w-5 mr-1" />
                        <span className="text-sm">{post.comments}</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Instagram corner icon */}
                <div className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md opacity-80">
                  <Instagram className="h-4 w-4 text-coffee-800" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 text-center">
          <Button
            asChild
            className="bg-gradient-to-r from-coffee-600 to-spice-600 hover:from-coffee-700 hover:to-spice-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Link href="https://instagram.com/novaria_coffee" target="_blank" rel="noopener noreferrer">
              <Instagram className="h-5 w-5 mr-2" />
              @novaria_coffee
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;