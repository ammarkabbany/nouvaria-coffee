"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import { ReviewsData } from "./ReviewsData";

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % ReviewsData.length);
  };

  const prevReview = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + ReviewsData.length) % ReviewsData.length
    );
  };

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

        <div className="relative">
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 z-10">
            <button
              onClick={prevReview}
              className="bg-white p-2 rounded-full shadow-md hover:bg-coffee-50 transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft className="h-6 w-6 text-coffee-800" />
            </button>
          </div>

          <div className="overflow-hidden relative">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {ReviewsData.map((review) => (
                <div key={review.id} className="w-full flex-shrink-0 px-4 ">
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

                    {/* <div className="mt-4 flex justify-end">
                      <div className="flex items-center text-xs text-coffee-700">
                        <img
                          src="/placeholder.svg?height=20&width=20"
                          alt="Google Maps icon"
                          className="w-4 h-4 mr-1"
                        />
                        Google Maps Review
                      </div>
                    </div> */}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-10">
            <button
              onClick={nextReview}
              className="bg-white p-2 rounded-full shadow-md hover:bg-coffee-50 transition-colors"
              aria-label="Next review"
            >
              <ChevronRight className="h-6 w-6 text-coffee-800" />
            </button>
          </div>
        </div>

        <div className="flex justify-center mt-6 gap-2">
          {/* {ReviewsData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-colors",
                index === currentIndex ? "bg-amber-500" : "bg-amber-200"
              )}
              aria-label={`Go to review ${index + 1}`}
            />
          ))} */}
        </div>
      </div>
    </section>
  );
}
