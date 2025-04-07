import { Star } from 'lucide-react'
import React from 'react'

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-coffee-100 syrian-pattern">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12 text-coffee-800">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-spice-500 text-spice-500" />
                  ))}
                </div>
                <p className="italic mb-4 text-coffee-700">"{testimonial.quote}"</p>
                <p className="font-semibold text-coffee-800">{testimonial.name}</p>
                <p className="text-coffee-500 text-sm">{testimonial.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

const testimonials = [
  {
    quote:
      "The most authentic Syrian coffee I've had outside of Damascus. The atmosphere is so welcoming, and the baklava is absolutely divine!",
    name: "Sarah Johnson",
    location: "Pittsburgh, PA",
  },
  {
    quote:
      "Novaria has become my favorite spot to work remotely. The cardamom coffee is incredible, and the staff makes you feel like family.",
    name: "Michael Chen",
    location: "Pittsburgh, PA",
  },
  {
    quote:
      "They catered our office event, and everyone was blown away by the quality and unique flavors. A true gem in the Strip District!",
    name: "Emma Rodriguez",
    location: "Pittsburgh, PA",
  },
]

export default TestimonialsSection