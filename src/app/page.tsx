"use client";

import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SearchOverlay from "@/components/SearchOverlay";
import CartSidebar from "@/components/CartSidebar";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Services from "@/components/Services";
import InstagramFeed from "@/components/InstagramFeed";
import Contact from "@/components/Contact";

export default function Home() {
  // State for search overlay and cart sidebar visibility
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // State for active filters
  const [activeFilters, setActiveFilters] = useState<{
    roast: string[];
    origin: string[];
    flavor: string[];
  }>({
    roast: [],
    origin: [],
    flavor: [],
  });

  // Handle filter changes
  const handleFilterChange = (
    filterType: string,
    selectedOptions: string[],
  ) => {
    setActiveFilters({
      ...activeFilters,
      [filterType]: selectedOptions,
    });
  };

  // Handle add to cart
  const handleAddToCart = (productId: string) => {
    console.log(`Added product ${productId} to cart`);
    setIsCartOpen(true);
  };

  // Handle view product details
  const handleViewDetails = (productId: string) => {
    console.log(`View details for product ${productId}`);
    // In a real app, this would navigate to the product detail page
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <Header
        onSearchClick={() => setIsSearchOpen(true)}
        onCartClick={() => setIsCartOpen(true)}
      />

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

      {/* InstagramFeed */}
      <InstagramFeed />

      {/* Services */}
      <Services />

      {/* About */}
      <About />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Search Overlay */}
      {isSearchOpen && (
        <SearchOverlay
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
          onAddToCart={handleAddToCart}
          onViewDetails={handleViewDetails}
        />
      )}

      {/* Cart Sidebar */}
      {isCartOpen && (
        <CartSidebar
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          onCheckout={() => console.log("Proceed to checkout")}
        />
      )}
    </main>
  );
}
