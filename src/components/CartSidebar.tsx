"use client";

import { useEffect } from "react";
import { X, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { CartItem } from "./cart/CartItem";
import { CartSummary } from "./cart/CartSummary";
import useCartStore from "@/store/cart-store";

interface CartSidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
  onCheckout?: () => void;
}

const CartSidebar = ({
  isOpen = true,
  onClose = () => console.log("Close cart"),
  onCheckout = () => console.log("Checkout"),
}: CartSidebarProps) => {
  const { 
    items,
    removeItem,
    updateQuantity,
    clearCart,
    getSubtotal,
    getTotal
  } = useCartStore();

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

  return (
    <motion.div
      className="fixed inset-y-0 right-0 z-50 w-full sm:w-[400px] bg-secondary border-l border-border shadow-xl flex flex-col"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <motion.div className="flex flex-col h-full">
        <CartHeader clearCart={clearCart} itemCount={items.length} onClose={onClose} />
        
        <motion.div className="flex-1 overflow-y-auto p-4">
          {items.length > 0 ? (
            <div className="space-y-4">
              <AnimatePresence>
                {items.map((item) => (
                  <CartItem
                    key={item.uid}
                    item={{
                      ...item,
                      base_price_money: {
                        ...item.base_price_money,
                        amount: Number(item.base_price_money.amount * item.quantity),
                      },
                      quantity: item.quantity,
                      catalog_object_id: item.catalog_object_id,
                      item_type: item.item_type,
                      note: item.note,
                      variation_name: item.variation_name,
                      name: item.name,
                      uid: item.uid,
                    }}
                    onUpdateQuantity={updateQuantity}
                    onRemoveItem={removeItem}
                  />
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <EmptyCart onClose={onClose} />
          )}
        </motion.div>

        {items.length > 0 && (
          <CartSummary
            subtotal={getSubtotal()}
            total={getTotal()}
            onCheckout={onCheckout}
          />
        )}
      </motion.div>
    </motion.div>
  );
};

const CartHeader = ({ itemCount, onClose, clearCart }: { itemCount: number; onClose: () => void, clearCart: () => void }) => (
  <div className="flex items-center justify-between p-4 border-b border-border">
    <div className="flex items-center">
      <ShoppingBag className="h-5 w-5 mr-2" />
      <h2 className="text-lg font-medium">Your Cart</h2>
      <span className="ml-2 text-sm text-muted-foreground">({itemCount} items)</span>
      <Button onClick={clearCart} size={"sm"} variant={"link"} className="mx-2">
        Clear
      </Button>
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
  </div>
);

const EmptyCart = ({ onClose }: { onClose: () => void }) => (
  <motion.div className="flex flex-col items-center justify-center h-full text-center">
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <ShoppingBag className="h-12 w-12 text-muted-foreground mb-4" />
    </motion.div>
    <h3 className="text-lg font-medium mb-2">Your cart is empty</h3>
    <p className="text-muted-foreground mb-6">
      Looks like you haven't added any coffee to your cart yet.
    </p>
    <Button onClick={onClose} className="bg-amber-700 hover:bg-amber-800 text-white">
      Continue Shopping
    </Button>
  </motion.div>
);

export default CartSidebar;
