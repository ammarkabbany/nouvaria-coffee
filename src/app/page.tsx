"use client";

import Header from "@/components/layout/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/layout/Footer";
import About from "@/components/About";
import Services from "@/components/Services";
import InstagramFeed from "@/components/InstagramFeed";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Reviews from "@/components/reviews/Reviews";

export default function Home() {

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Filter Bar */}
      {/* <div className="container mx-auto px-4 py-8">
        <FilterBar onFilterChange={handleFilterChange} />
      </div> */}

      {/* Featured Products */}
      {/* <ProductGrid
        title="Our Featured Coffee"
        onAddToCart={handleAddToCart}
        onViewDetails={handleViewDetails}
      /> */}

      {/* Services */}
      <Services />

      {/* About */}
      <About />

      {/* Reviews*/}
      < Reviews />

      {/* InstagramFeed */}
      <InstagramFeed />

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Experience Authentic Syrian Coffee?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Visit us today or contact us to learn more about our catering, event
            hosting, and wholesale services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size={"lg"} variant={"secondary"} asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
