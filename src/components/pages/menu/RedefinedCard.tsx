import { Separator } from "@/components/ui/separator";
import { Badge } from "./Badge";
import Image from "next/image";
import { SquareItem, SquareItemVariation } from "@/types/CatalogTypes";
import { Button } from "@/components/ui/button";
import { Thermometer, ThermometerSnowflake } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import useCartStore from "@/store/cart-store";

type CardProps = {
  catalogObject: SquareItem;
};

const RedefinedMenuCard = ({ catalogObject: item }: CardProps) => {
  const isNew = (() => {
    if (!item.created_at) return false;
    const createdDate = new Date(item.created_at);
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - 30);
    return createdDate > cutoffDate;
  })();
  const [selectedVariation, setSelectedVariation] = useState<
    SquareItemVariation | undefined
  >(item.item_data?.variations[0]);
  const [isPending, setIsPending] = useState<boolean>(false)

  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    if (!selectedVariation) {
      return;
    }
    addItem({
      id: `${item.id}_${selectedVariation.id}`,
      name: item.item_data.name,
      price: selectedVariation.item_variation_data.price_money.amount / 100,
      variation_name: selectedVariation.item_variation_data.name,
      quantity: 1
    })
    setIsPending(true)
    setTimeout(() => {
      setIsPending(false)
    }, 400)
  };

  return (
    <div className="sm:max-w-md bg-white rounded-xl overflow-hidden shadow-sm relative p-5 space-y-4">
      <div>
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">{item.item_data?.name || "N/A"}</h2>
          {isNew && (
            <Badge className="bg-yellow-500 hover:bg-yellow-500 text-white">
              NEW
            </Badge>
          )}
        </div>
        <div className="mt-2">
          <span className="font-semibold">
            $
            {selectedVariation
              ? selectedVariation.item_variation_data.price_money?.amount / 100
              : item.item_data?.variations[0].item_variation_data.price_money
                  ?.amount / 100}
          </span>
        </div>
      </div>

      {/* Size Selection */}
      <div className="space-y-2 h-24">
        <h4 className="text-sm font-medium text-gray-600">Variant</h4>
        <div className="flex flex-wrap gap-2">
          {item.item_data?.variations?.map((variation) => (
            <button
              key={variation.id}
              onClick={() => setSelectedVariation(variation)}
              className={cn(
                "px-4 py-1 rounded-full text-sm border",
                selectedVariation?.id === variation.id
                  ? "bg-primary text-secondary"
                  : "border-gray-200"
              )}
            >
              {variation.item_variation_data.name}
            </button>
          ))}
        </div>
      </div>

      <Button
        onClick={handleAddToCart}
        disabled={isPending}
        className="w-full bg-coffee-600 hover:bg-coffee-700 text-white"
      >
        Add to Cart
      </Button>
    </div>
  );
};

export default RedefinedMenuCard;
