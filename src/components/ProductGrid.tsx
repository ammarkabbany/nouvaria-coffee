"use client";

import React, { useState } from "react";
import ProductCard from "./ProductCard";

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

interface ProductGridProps {
  title?: string;
  products?: Product[];
  onAddToCart?: (productId: string) => void;
  onViewDetails?: (productId: string) => void;
}

const ProductGrid = ({
  title = "Featured Products",
  products = defaultProducts,
  onAddToCart = (id) => console.log(`Add to cart: ${id}`),
  onViewDetails = (id) => console.log(`View details: ${id}`),
}: ProductGridProps) => {
  return (
    <div className="w-full bg-background">
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold mb-8">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
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
          ))}
        </div>
      </div>
    </div>
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
  {
    id: "7",
    name: "Brazil Santos",
    price: 13.99,
    image:
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&q=80",
    rating: 4.0,
    origin: "Brazil",
    roastLevel: "Medium",
  },
  {
    id: "8",
    name: "Hawaiian Kona",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1542879568-5ab6d3d6e04c?w=400&q=80",
    rating: 4.9,
    isNew: true,
    origin: "Hawaii",
    roastLevel: "Medium",
  },
];

export default ProductGrid;
