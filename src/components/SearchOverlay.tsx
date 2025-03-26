"use client";

import React, { useState, useEffect } from "react";
import { X, Search as SearchIcon, Coffee } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import ProductCard from "./ProductCard";
import FilterBar from "./FilterBar";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
  isNew?: boolean;
  origin: string;
  roastLevel: string;
}

interface SearchOverlayProps {
  isOpen?: boolean;
  onClose?: () => void;
  products?: Product[];
  onAddToCart?: (productId: string) => void;
  onViewDetails?: (productId: string) => void;
}

const SearchOverlay = ({
  isOpen = true,
  onClose = () => console.log("Close search overlay"),
  products = defaultProducts,
  onAddToCart = (id) => console.log(`Add to cart: ${id}`),
  onViewDetails = (id) => console.log(`View details: ${id}`),
}: SearchOverlayProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [activeFilters, setActiveFilters] = useState<{
    roast: string[];
    origin: string[];
    flavor: string[];
  }>({
    roast: [],
    origin: [],
    flavor: [],
  });
  const [isSearching, setIsSearching] = useState(false);

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsSearching(true);
    setSearchTerm(e.target.value);

    // Simulate search delay
    setTimeout(() => {
      setIsSearching(false);
    }, 500);
  };

  // Handle filter changes
  const handleFilterChange = (
    filterType: string,
    selectedOptions: string[],
  ) => {
    setIsSearching(true);
    setActiveFilters({
      ...activeFilters,
      [filterType]: selectedOptions,
    });

    // Simulate filter delay
    setTimeout(() => {
      setIsSearching(false);
    }, 300);
  };

  // Filter products based on search term and active filters
  useEffect(() => {
    let results = products;

    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      results = results.filter(
        (product) =>
          product.name.toLowerCase().includes(term) ||
          product.origin.toLowerCase().includes(term) ||
          product.roastLevel.toLowerCase().includes(term),
      );
    }

    // Apply active filters
    if (activeFilters.roast.length > 0) {
      results = results.filter((product) =>
        activeFilters.roast.some((roast) =>
          product.roastLevel.toLowerCase().includes(roast.toLowerCase()),
        ),
      );
    }

    if (activeFilters.origin.length > 0) {
      results = results.filter((product) =>
        activeFilters.origin.some((origin) =>
          product.origin.toLowerCase().includes(origin.toLowerCase()),
        ),
      );
    }

    // Note: In a real app, flavor profiles would be part of the product data
    // This is a simplified version

    setFilteredProducts(results);
  }, [searchTerm, activeFilters, products]);

  // Handle escape key to close overlay
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscKey);
    return () => window.removeEventListener("keydown", handleEscKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Animation variants
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
        duration: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    exit: {
      y: -20,
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };

  const productCardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm overflow-y-auto"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={overlayVariants}
    >
      <div className="container mx-auto px-4 py-8">
        {/* Header with search input and close button */}
        <motion.div
          className="flex items-center justify-between mb-8"
          variants={itemVariants}
        >
          <h2 className="text-3xl font-semibold">Search Products</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </Button>
        </motion.div>

        {/* Search input */}
        <motion.div
          className="relative mb-8 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search for coffee by name, origin, or roast level..."
            className="pl-10 py-6 text-lg shadow-sm focus-within:ring-2 focus-within:ring-amber-500 focus-within:border-amber-500 transition-all"
            value={searchTerm}
            onChange={handleSearchChange}
            autoFocus
          />
        </motion.div>

        {/* Filters */}
        <motion.div className="mb-8" variants={itemVariants}>
          <FilterBar onFilterChange={handleFilterChange} />
        </motion.div>

        {/* Results count */}
        <motion.div
          className="mb-6 flex items-center justify-between"
          variants={itemVariants}
        >
          <p className="text-muted-foreground">
            {filteredProducts.length} products found
          </p>
          {(activeFilters.roast.length > 0 ||
            activeFilters.origin.length > 0 ||
            activeFilters.flavor.length > 0 ||
            searchTerm) && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSearchTerm("");
                setActiveFilters({ roast: [], origin: [], flavor: [] });
              }}
              className="text-xs"
            >
              Clear All Filters
            </Button>
          )}
        </motion.div>

        {/* Search results */}
        <AnimatePresence mode="wait">
          {isSearching ? (
            <motion.div
              key="searching"
              className="flex flex-col items-center justify-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                animate={{
                  rotate: 360,
                  transition: {
                    repeat: Infinity,
                    duration: 2,
                    ease: "linear",
                  },
                }}
                className="mb-4"
              >
                <Coffee className="h-10 w-10 text-amber-600" />
              </motion.div>
              <p className="text-muted-foreground">Searching...</p>
            </motion.div>
          ) : filteredProducts.length > 0 ? (
            <motion.div
              key="results"
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              variants={itemVariants}
            >
              <AnimatePresence>
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    variants={productCardVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    layout
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <ProductCard
                      id={product.id}
                      name={product.name}
                      price={product.price}
                      image={product.image}
                      rating={product.rating}
                      isNew={product.isNew}
                      origin={product.origin}
                      roastLevel={product.roastLevel}
                      onAddToCart={() => onAddToCart(product.id)}
                      onViewDetails={() => onViewDetails(product.id)}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              key="no-results"
              className="text-center py-12 bg-muted/20 rounded-lg border border-border"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="inline-block mb-4 p-4 bg-muted rounded-full"
              >
                <Coffee className="h-10 w-10 text-amber-600" />
              </motion.div>
              <p className="text-xl text-muted-foreground mb-4">
                No products found matching your search criteria
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setActiveFilters({ roast: [], origin: [], flavor: [] });
                }}
                className="bg-amber-700 hover:bg-amber-800 text-white"
              >
                Clear All Filters
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

// Default products data
const defaultProducts: Product[] = [
  {
    id: "1",
    name: "Ethiopian Yirgacheffe",
    price: 16.99,
    image:
      "https://images.unsplash.com/photo-1559525839-8f275eef5678?w=400&q=80",
    rating: 4.5,
    isNew: true,
    origin: "Ethiopia",
    roastLevel: "Medium",
  },
  {
    id: "2",
    name: "Colombian Supremo",
    price: 14.99,
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&q=80",
    rating: 4.3,
    origin: "Colombia",
    roastLevel: "Medium-Dark",
  },
  {
    id: "3",
    name: "Sumatra Mandheling",
    price: 17.99,
    image:
      "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=400&q=80",
    rating: 4.7,
    origin: "Indonesia",
    roastLevel: "Dark",
  },
  {
    id: "4",
    name: "Costa Rica Tarrazu",
    price: 15.99,
    image:
      "https://images.unsplash.com/photo-1580933073521-dc49ac0d4e6a?w=400&q=80",
    rating: 4.2,
    isNew: true,
    origin: "Costa Rica",
    roastLevel: "Light",
  },
  {
    id: "5",
    name: "Guatemala Antigua",
    price: 18.99,
    image:
      "https://images.unsplash.com/photo-1587734361993-0490df9b9f15?w=400&q=80",
    rating: 4.6,
    origin: "Guatemala",
    roastLevel: "Medium",
  },
  {
    id: "6",
    name: "Kenya AA",
    price: 19.99,
    image:
      "https://images.unsplash.com/photo-1565600444102-063f8a7a1e67?w=400&q=80",
    rating: 4.8,
    origin: "Kenya",
    roastLevel: "Medium-Light",
  },
];

export default SearchOverlay;
