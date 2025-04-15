import { motion } from "framer-motion";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { CartItem as CartItemType } from "@/store/cart-store";

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
}

export const CartItem = ({ item, onUpdateQuantity, onRemoveItem }: CartItemProps) => {
  return (
    <motion.div
      className="flex gap-4 bg-card p-3 rounded-lg border border-border shadow-sm"
      layout
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {/* <div className="h-20 w-20 rounded-md overflow-hidden bg-muted flex-shrink-0">
        <motion.img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
      </div> */}

      <div className="flex-1">
        <div className="flex justify-between">
          <h3 className="font-medium">{item.name}</h3>
          <p className="font-medium">${(item.base_price_money.amount).toFixed(2)}</p>
        </div>
        <p className="text-sm text-muted-foreground mb-2">{item.variation_name}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center border rounded-md overflow-hidden">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-none bg-muted/50 hover:bg-muted"
              onClick={() => item.quantity > 1 && onUpdateQuantity(item.uid, item.quantity - 1)}
              disabled={item.quantity <= 1}
            >
              <Minus className="h-3 w-3" />
            </Button>
            <span className="w-8 text-center text-sm">{item.quantity}</span>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-none bg-muted/50 hover:bg-muted"
              onClick={() => onUpdateQuantity(item.uid, item.quantity + 1)}
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
            onClick={() => onRemoveItem(item.uid)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};