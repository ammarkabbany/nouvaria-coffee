import { Separator } from "@/components/ui/separator";
import { Badge } from "./Badge";
import Image from "next/image";

type Size = {
  size: string;
  price: string;
};

type Category = {
  name: string;
  image?: string;
  isNew?: boolean;
  sizes: Size[];
  description?: string;
};

type CardProps = {
  category: Category;
  index: number;
};

const Card = ({ category, index }: CardProps) => {
  return (
    <div key={index} className="bg-coffee-50 h-[450px] rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      <div className="relative h-60">
        <Image
          src={category.image || "/placeholder.svg"}
          alt={category.name}
          fill
          className="object-cover rounded-t-lg"
        />
        {category.isNew && (
          <div className="absolute top-2 right-2">
            <Badge className="bg-spice-500 text-primary-foreground hover:bg-spice-800 select-none">
              NEW
            </Badge>
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-coffee-900 mb-3">
          {category.name}
        </h3>
        <Separator className="mb-2" />
        <p className="text-sm text-coffee-700 mb-4">
          {category.description || "No description available."}
        </p>

        <div className="flex flex-wrap gap-2">
          {category.sizes.map((sizeOption, sizeIndex) => (
            <div key={sizeIndex} className="flex flex-col items-center">
              <span className="bg-spice-400 text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                {sizeOption.size}
              </span>
              <span className="text-sm text-coffee-700  mt-1">
                {sizeOption.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
