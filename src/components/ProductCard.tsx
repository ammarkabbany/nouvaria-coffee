"use client";

import React from "react";
import { Star, ShoppingCart, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  id?: string;
  name?: string;
  price?: number;
  image?: string;
  rating?: number;
  isNew?: boolean;
  origin?: string;
  roastLevel?: string;
  onAddToCart?: () => void;
  onViewDetails?: () => void;
}

const ProductCard = ({
  id = "1",
  name = "Ethiopian Yirgacheffe",
  price = 16.99,
  image = "https://images.unsplash.com/photo-1559525839-8f275eef5678?w=400&q=80",
  rating = 4.5,
  isNew = false,
  origin = "Ethiopia",
  roastLevel = "Medium",
  onAddToCart = () => console.log("Add to cart clicked"),
  onViewDetails = () => console.log("View details clicked"),
}: ProductCardProps) => {
  return (
    <motion.div
      className="group relative flex flex-col rounded-lg border border-border bg-card shadow-sm transition-all hover:shadow-md overflow-hidden"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {isNew && (
        <Badge className="absolute left-2 top-2 z-10 bg-amber-600 text-white border-none">
          New
        </Badge>
      )}
      <div className="relative h-48 w-full overflow-hidden bg-muted">
        <motion.img
          src={image}
          alt={name}
          className="h-full w-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Quick action buttons */}
        <div className="absolute bottom-2 right-2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.button
            className="bg-white text-gray-800 rounded-full p-2 shadow-md hover:bg-amber-50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onAddToCart}
          >
            <ShoppingCart size={16} />
          </motion.button>
          <motion.button
            className="bg-white text-gray-800 rounded-full p-2 shadow-md hover:bg-amber-50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onViewDetails}
          >
            <Eye size={16} />
          </motion.button>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="font-medium text-foreground">{name}</h3>
          <span className="font-semibold text-amber-700 dark:text-amber-400">
            ${price.toFixed(2)}
          </span>
        </div>
        <div className="mb-2 flex items-center text-sm text-muted-foreground">
          <span className="mr-2">{origin}</span>
          <span className="mx-1">•</span>
          <span>{roastLevel} Roast</span>
        </div>
        <div className="mb-4 flex items-center">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={16}
              className={cn(
                "mr-0.5",
                i < Math.floor(rating)
                  ? "fill-amber-400 text-amber-400"
                  : i < rating
                    ? "fill-amber-400/50 text-amber-400"
                    : "text-gray-300",
              )}
            />
          ))}
          <span className="ml-1 text-xs text-muted-foreground">{rating}</span>
        </div>
        <div className="mt-auto flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 hover:bg-muted/50 hover:text-foreground transition-colors"
            onClick={onViewDetails}
          >
            Details
          </Button>
          <Button
            size="sm"
            className="flex-1 bg-amber-700 hover:bg-amber-800 text-white border-none"
            onClick={onAddToCart}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
