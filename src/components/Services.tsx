"use client";

import React from "react";
import { Coffee, Users, Store, Utensils, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, slideUp } from "@/lib/animations";
import { Card, CardContent } from "./ui/card";

const Services = () => {
  return (
    <section className="py-16 bg-coffee-100 syrian-pattern">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          variants={slideUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-coffee-800 mb-4">Experience Novaria</h2>
          <p className="text-coffee-700 max-w-2xl mx-auto">
            With a decade of experience in the coffee industry, we bring great hospitality, cozy ambiance, and
            delicious drinks to Pittsburgh's Strip District.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div variants={slideUp} transition={{ duration: 0.4 }}>
            <Card className="border-none h-[250px] shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 bg-white/90">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-coffee-600 flex items-center justify-center">
                  <Coffee className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-coffee-800 mb-2">Specialty Coffee</h3>
                <p className="text-coffee-600">
                  Indulge in our signature Syrian-inspired coffee blends, crafted with passion and tradition.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={slideUp} transition={{ duration: 0.4 }}>
            <Card className="border-none h-[250px] shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 bg-white/90">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-coffee-600 flex items-center justify-center">
                  <Utensils className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-coffee-800 mb-2">Catering</h3>
                <p className="text-coffee-600">
                  Enhance your event with our catering, featuring Syrian coffee flavors and delicious pastries like
                  baklava.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={slideUp} transition={{ duration: 0.4 }}>
            <Card className="border-none h-[250px] shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 bg-white/90">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-coffee-600 flex items-center justify-center">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-coffee-800 mb-2">Event Hosting</h3>
                <p className="text-coffee-600">
                  Host your next gathering in our welcoming space with a unique atmosphere and friendly service.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={slideUp} transition={{ duration: 0.4 }}>
            <Card className="border-none h-[250px] shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 bg-white/90">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-coffee-600 flex items-center justify-center">
                  <Store className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-coffee-800 mb-2">Wholesale</h3>
                <p className="text-coffee-600">
                  We provide high-quality coffee beans for cafés and businesses looking to expand their offerings.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;