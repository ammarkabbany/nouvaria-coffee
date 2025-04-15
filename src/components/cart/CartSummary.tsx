import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

interface CartSummaryProps {
  subtotal: number;
  total: number;
  onCheckout: () => void;
}

export const CartSummary = ({ subtotal, total, onCheckout }: CartSummaryProps) => (
  <motion.div className="border-t border-border p-4 space-y-4 bg-muted/10">
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-muted-foreground">Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>

      <Separator className="my-2" />

      <div className="flex justify-between font-medium">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
    </div>

    <Button
      className="w-full bg-amber-700 hover:bg-amber-800 text-white group"
      size="lg"
      onClick={onCheckout}
    >
      <span>Checkout</span>
      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Button>
  </motion.div>
);