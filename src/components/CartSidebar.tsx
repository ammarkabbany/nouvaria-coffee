"use client";

import React, { useState } from "react";
import { X, ShoppingBag, Trash2, Plus, Minus, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import Checkout from "./Checkout";

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  roastLevel: string;
}

interface CartSidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
  cartItems?: CartItem[];
  onUpdateQuantity?: (id: string, quantity: number) => void;
  onRemoveItem?: (id: string) => void;
  onCheckout?: () => void;
}

const CartSidebar = ({
  isOpen = true,
  onClose = () => console.log("Close cart"),
  cartItems = defaultCartItems,
  onUpdateQuantity = (id, quantity) =>
    console.log(`Update quantity: ${id}, ${quantity}`),
  onRemoveItem = (id) => console.log(`Remove item: ${id}`),
  onCheckout = () => console.log("Checkout"),
}: CartSidebarProps) => {
  const [showCheckout, setShowCheckout] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  // Calculate shipping (free over $50)
  const shipping = subtotal >= 50 ? 0 : 5.99;

  // Calculate total
  const total = subtotal + shipping;

  // Handle escape key to close sidebar
  React.useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        if (showCheckout) {
          setShowCheckout(false);
        } else {
          onClose();
        }
      }
    };

    window.addEventListener("keydown", handleEscKey);
    return () => window.removeEventListener("keydown", handleEscKey);
  }, [isOpen, onClose, showCheckout]);

  const handleCheckoutClick = () => {
    setShowCheckout(true);
  };

  const handleBackToCart = () => {
    setShowCheckout(false);
  };

  const handleOrderComplete = () => {
    setOrderComplete(true);
    setTimeout(() => {
      onClose();
      // Reset state after closing
      setTimeout(() => {
        setShowCheckout(false);
        setOrderComplete(false);
      }, 500);
    }, 2000);
  };

  if (!isOpen) return null;

  // Animation variants
  const sidebarVariants = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.div
      className="fixed inset-y-0 right-0 z-50 w-full sm:w-[400px] bg-background border-l border-border shadow-xl flex flex-col"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={sidebarVariants}
    >
      <AnimatePresence mode="wait">
        {!showCheckout ? (
          <motion.div
            key="cart"
            className="flex flex-col h-full"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={itemVariants}
          >
            {/* Header */}
            <motion.div
              className="flex items-center justify-between p-4 border-b border-border"
              variants={itemVariants}
            >
              <div className="flex items-center">
                <ShoppingBag className="h-5 w-5 mr-2" />
                <h2 className="text-lg font-medium">Your Cart</h2>
                <span className="ml-2 text-sm text-muted-foreground">
                  ({cartItems.length} items)
                </span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Close</span>
              </Button>
            </motion.div>

            {/* Cart Items */}
            <motion.div
              className="flex-1 overflow-y-auto p-4"
              variants={itemVariants}
            >
              {cartItems.length > 0 ? (
                <div className="space-y-4">
                  <AnimatePresence>
                    {cartItems.map((item) => (
                      <motion.div
                        key={item.id}
                        className="flex gap-4 bg-card p-3 rounded-lg border border-border shadow-sm"
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        layout
                        whileHover={{ scale: 1.02 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 17,
                        }}
                      >
                        {/* Product Image */}
                        <div className="h-20 w-20 rounded-md overflow-hidden bg-muted flex-shrink-0">
                          <motion.img
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full object-cover"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                          />
                        </div>

                        {/* Product Details */}
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <h3 className="font-medium">{item.name}</h3>
                            <p className="font-medium">
                              ${(item.price * item.quantity).toFixed(2)}
                            </p>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">
                            {item.roastLevel} Roast
                          </p>

                          {/* Quantity Controls */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center border rounded-md overflow-hidden">
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 rounded-none bg-muted/50 hover:bg-muted"
                                onClick={() =>
                                  item.quantity > 1 &&
                                  onUpdateQuantity(item.id, item.quantity - 1)
                                }
                                disabled={item.quantity <= 1}
                              >
                                <Minus className="h-3 w-3" />
                              </Button>
                              <span className="w-8 text-center text-sm">
                                {item.quantity}
                              </span>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 rounded-none bg-muted/50 hover:bg-muted"
                                onClick={() =>
                                  onUpdateQuantity(item.id, item.quantity + 1)
                                }
                              >
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>

                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
                              onClick={() => onRemoveItem(item.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              ) : (
                <motion.div
                  className="flex flex-col items-center justify-center h-full text-center"
                  variants={itemVariants}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <ShoppingBag className="h-12 w-12 text-muted-foreground mb-4" />
                  </motion.div>
                  <h3 className="text-lg font-medium mb-2">
                    Your cart is empty
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Looks like you haven't added any coffee to your cart yet.
                  </p>
                  <Button
                    onClick={onClose}
                    className="bg-amber-700 hover:bg-amber-800 text-white"
                  >
                    Continue Shopping
                  </Button>
                </motion.div>
              )}
            </motion.div>

            {/* Order Summary */}
            {cartItems.length > 0 && (
              <motion.div
                className="border-t border-border p-4 space-y-4 bg-muted/10"
                variants={itemVariants}
              >
                <h3 className="font-medium">Order Summary</h3>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>
                      {shipping === 0 ? "Free" : `${shipping.toFixed(2)}`}
                    </span>
                  </div>

                  {subtotal < 50 && (
                    <motion.div
                      className="text-xs text-amber-700 bg-amber-50 dark:bg-amber-950/20 dark:text-amber-400 p-2 rounded-md"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      Add ${(50 - subtotal).toFixed(2)} more for free shipping
                    </motion.div>
                  )}

                  <Separator className="my-2" />

                  <div className="flex justify-between font-medium">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <Button
                  className="w-full bg-amber-700 hover:bg-amber-800 text-white group"
                  size="lg"
                  onClick={handleCheckoutClick}
                >
                  <span>Checkout</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Shipping & taxes calculated at checkout
                </p>
              </motion.div>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="checkout"
            className="flex flex-col h-full"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={itemVariants}
          >
            <Checkout
              subtotal={subtotal}
              shipping={shipping}
              total={total}
              onBack={handleBackToCart}
              onComplete={handleOrderComplete}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Default cart items for demonstration
const defaultCartItems: CartItem[] = [
  {
    id: "1",
    name: "Ethiopian Yirgacheffe",
    price: 16.99,
    image:
      "https://images.unsplash.com/photo-1559525839-8f275eef5678?w=400&q=80",
    quantity: 2,
    roastLevel: "Medium",
  },
  {
    id: "3",
    name: "Sumatra Mandheling",
    price: 17.99,
    image:
      "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=400&q=80",
    quantity: 1,
    roastLevel: "Dark",
  },
];

export default CartSidebar;
