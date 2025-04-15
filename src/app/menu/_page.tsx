"use client"
import Footer from "@/components/layout/Footer";
import Menu from "@/components/pages/menu/Menu";
import Image from "next/image";
import { Catalogcategories, CatalogProducts } from "@/lib/mock-data";
import Header from "@/components/layout/Header";
import { useState } from "react";
import CartSidebar from "@/components/CartSidebar";
import useCartStore from "@/store/cart-store";

const Page = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const {items} = useCartStore();

    const handleCheckout = async () => {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: items, // Replace with actual items
        }),
      });

      if (!response.ok) {
        console.error("Failed to create checkout session");
        return;
      }

      const data = await response.json();
      console.log(data)
      // window.location.href = data.checkout_url; // Redirect to the checkout URL
    }

    return (
      <div className="flex min-h-screen flex-col">
        <Header onCartClick={() => setIsCartOpen(true)} />
        <div className="relative h-[40vh] md:h-[50vh] w-full overflow-hidden select-none">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10" />
          <Image
            src="/menu-hero.jpg"
            alt="Novaria Coffee Services"
            fill
            className="object-cover"
            priority
          />
          <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
            <div className="max-w-2xl animate-fadeIn">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Menus
              </h1>
            </div>
          </div>
        </div>
          <Menu
            data={CatalogProducts}
            categories={Catalogcategories}
          />

        <Footer />
        {isCartOpen && (
        <CartSidebar
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          onCheckout={handleCheckout}
        />
      )}
      </div>
    );
};

export default Page;
