"use client";

import React from "react";
import { Coffee, Users, Store, Utensils, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";

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
    <section className="py-16 bg-coffee-100 syrian-pattern">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-slideUp">
            <h2 className="text-3xl md:text-4xl font-bold text-coffee-800 mb-4">Experience Novaria</h2>
            <p className="text-coffee-700 max-w-2xl mx-auto">
              With a decade of experience in the coffee industry, we bring great hospitality, cozy ambiance, and
              delicious drinks to Pittsburgh's Strip District.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 bg-white/90">
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

            <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 bg-white/90">
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

            <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 bg-white/90">
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

            <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 bg-white/90">
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
          </div>
        </div>
      </section>
  );
};

export default Services;