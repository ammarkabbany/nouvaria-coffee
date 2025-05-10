"use client";

import React from "react";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: ["1812 Penn Ave", "Pittsburgh, PA 15222"],
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: ["(510) 827 6131"],
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Hours",
      details: [
        "Fri - Sun: 8:00 AM - 5:30 PM",
        "Mon - Thu: 8:00 AM - 5:00 PM",
      ],
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["novariacoffee@gmail.com"],
    },
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="w-full px-4 py-16">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-primary mb-12"
        >
          Contact Us
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mb-12">
          {/* Contact Information */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 5 }}
                className="bg-coffee-50 p-6 rounded-lg flex items-start space-x-4"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-primary p-2 rounded-full text-[#f5f5dc]"
                >
                  {item.icon}
                </motion.div>
                <div>
                  <h3 className="text-primary font-semibold text-lg mb-2">
                    {item.title}
                  </h3>
                  {item.details.map((detail, idx) => (
                    <p key={idx} className="text-primary">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          {/* <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-accent p-8 rounded-lg"
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-primary font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-md bg-background border border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-primary font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-md bg-background border border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-primary font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-md bg-background border border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Your message"
                ></textarea>
              </div>
              <Button variant={"default"} className="w-full">
                Send Message
              </Button>
            </form>
          </motion.div> */}
        </div>

        {/* Map */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full h-[400px] bg-coffee-50 p-4 rounded-lg"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d759.0298081362912!2d-79.98507373036644!3d40.45049791875096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834f316a0efc979%3A0xc103354f26cb923f!2sNovaria%20Coffee%20Co.!5e0!3m2!1sen!2seg!4v1743366149403!5m2!1sen!2seg"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: "0.5rem" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;