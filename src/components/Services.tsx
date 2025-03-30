"use client";

import React from "react";
import { Coffee, Users, Store } from "lucide-react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      icon: <Coffee className="w-12 h-12 text-primary" />,
      title: "Catering",
      description: "Enhance your event with our catering, featuring Syrian inspired coffee flavors and delicious pastries like baklava. Delight your guests with the rich flavors that bring the warmth of Syrian culture to any gathering. Make your occasion memorable with a unique culinary experience."
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Event Hosting",
      description: "Looking for a unique venue for your next event? We can host your gathering right here at our shop! With a welcoming atmosphere and friendly service, we're ready to make your event memorable. Contact us today to learn more about our space and availability!"
    },
    {
      icon: <Store className="w-12 h-12 text-primary" />,
      title: "Wholesale",
      description: "We provide high-quality coffee beans sourced from the finest farms. Whether you're a small café or looking to expand your offerings, we have the perfect blends to meet your needs. Let us elevate your coffee offerings and delight your customers with every cup."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="container mx-auto px-4 py-16">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12 text-primary"
      >
        Our Services
      </motion.h2>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {services.map((service, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="bg-accent rounded-lg p-8 flex flex-col items-center text-center transition-transform"
          >
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.4 }}
              className="bg-muted p-4 rounded-full mb-6"
            >
              {service.icon}
            </motion.div>
            <h3 className="text-2xl font-semibold mb-4 text-primary">
              {service.title}
            </h3>
            <p className="text-primary">
              {service.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;