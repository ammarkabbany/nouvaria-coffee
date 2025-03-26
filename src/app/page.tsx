"use client";

import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import FilterBar from "@/components/FilterBar";
import SearchOverlay from "@/components/SearchOverlay";
import CartSidebar from "@/components/CartSidebar";
import Footer from "@/components/Footer";

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
      <HeroSection onCtaClick={() => console.log("CTA clicked")} />

      {/* Filter Bar */}
      <div className="container mx-auto px-4 py-8">
        <FilterBar onFilterChange={handleFilterChange} />
      </div>

      {/* Featured Products */}
      <ProductGrid
        title="Our Featured Coffee"
        onAddToCart={handleAddToCart}
        onViewDetails={handleViewDetails}
      />

      {/* Best Sellers */}
      <div className="bg-muted/30 py-12">
        <ProductGrid
          title="Best Sellers"
          onAddToCart={handleAddToCart}
          onViewDetails={handleViewDetails}
        />
      </div>

      {/* New Arrivals */}
      <ProductGrid
        title="New Arrivals"
        onAddToCart={handleAddToCart}
        onViewDetails={handleViewDetails}
      />

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
