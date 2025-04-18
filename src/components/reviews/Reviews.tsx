"use client";

import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import { ReviewsData } from "./ReviewsData";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";

export default function Reviews() {

  return (
    <section className="py-16 px-4 bg-amber-50 syrian-pattern">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-coffee-700 mb-4">
            Customer Love
          </h2>
          <div className="flex justify-center items-center">
            <div className="h-0.5 w-12 bg-coffee-800"></div>
            <div className="text-coffee-800">★★★★★</div>
            <div className="h-0.5 w-12 bg-coffee-800"></div>
          </div>
          <p className="mt-4 text-coffee-800 max-w-2xl mx-auto">
            We're proud of the experience we provide. Here are some of our
            favorite reviews from Google Maps.
          </p>
        </div>

        <div className="relative px-8">
          <Carousel className="w-full">
            <CarouselContent className="items-center">
              {ReviewsData.map((review) => (
                <CarouselItem key={review.id} className="">
                  <div className="w-full flex-shrink-0 px-4">
                    <div className="bg-white rounded-lg shadow-lg p-8 relative">
                      <Quote className="absolute text-coffee-200 h-24 w-24 -top-4 -left-4 opacity-20" />

                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-coffee-800">
                          {review.avatar ? (
                            <img
                              src={review.avatar}
                              alt={`${review.name}'s avatar`}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full bg-coffee-200 flex items-center justify-center text-coffee-800 font-bold">
                              {review.name.charAt(0)}
                            </div>
                          )}
                        </div>
                        <div>
                          <h3 className="font-bold text-coffee-700">
                            {review.name}
                          </h3>
                          <p className="text-sm text-coffee-500">
                            {review.date}
                          </p>
                        </div>
                        <div className="ml-auto flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={cn(
                                "w-5 h-5",
                                i < review.rating
                                  ? "text-amber-400 fill-amber-400"
                                  : "text-gray-300"
                              )}
                            />
                          ))}
                        </div>
                      </div>

                      <p className="text-coffee-500 italic relative z-10">
                        "{review.text}"
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:inline-flex -left-2" />
            <CarouselNext className="hidden md:inline-flex -right-2" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
