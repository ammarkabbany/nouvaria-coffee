"use client"
import CartSidebar from "@/components/CartSidebar";
import Header from "@/components/layout/Header"
import { useState } from "react"

export const MenuHeader = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <>
      <Header onCartClick={() => setIsCartOpen(true)} />
      {isCartOpen && (
        <CartSidebar
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          onCheckout={() => console.log("Proceed to checkout")}
        />
      )}
    </>
  )
}
