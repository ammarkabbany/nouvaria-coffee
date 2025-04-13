"use client";
import { SquareCatalogCategory, SquareItem } from "@/types/CatalogTypes";
import RedefinedMenuCard from "./RedefinedCard";

interface MenuProps {
  data: SquareItem[];
  categories: SquareCatalogCategory[];
}

const Menu = ({ data, categories }: MenuProps) => {
  return (
    <div className="flex-grow bg-background py-12 scroll-smooth relative">
      <div className="container mx-auto px-4">
        {/* Menu Navigation */}
        <div className="flex justify-center mb-10">
          <nav className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((category) => {
              if (
                data && data.filter(
                  (i) => i.item_data?.categories?.[0].id === category.id
                ).length === 0
              )
                return null;
              return (
                <a
                  href={`#${category.category_data.name}`}
                  key={category.id}
                  className="px-4 py-2 bg-primary text-white rounded-full hover:bg-primary-hover transition-colors"
                >
                  {category.category_data.name.charAt(0).toUpperCase() +
                    category.category_data.name.slice(1)}
                </a>
              );
              
            })}
            <a
                  href={`#Other`}
                  key={"Other"}
                  className="px-4 py-2 bg-primary text-white rounded-full hover:bg-primary-hover transition-colors"
                >
                  {"Other".charAt(0).toUpperCase() +
                    "Other".slice(1)}
                </a>
          </nav>
        </div>

        {/* Menu Sections */}
        {categories.map((category) => {
          if (
            data && data.filter((i) => i.item_data?.categories?.[0].id === category.id)
              .length === 0
          )
            return null;
          return (
            <section
              id={category.category_data.name}
              className="mb-16 "
              key={category.id}
            >
              <div className="flex items-center mb-6">
                <h2 className="text-3xl font-bold text-coffee-800">
                  {category.category_data.name.charAt(0).toUpperCase() +
                    category.category_data.name.slice(1)}
                </h2>
                <div className="h-[2px] bg-coffee-800 flex-grow ml-4"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {data && data
                  .filter((i) => i.item_data?.categories?.[0].id === category.id)
                  .map((object, index) => (
                    <RedefinedMenuCard catalogObject={object} key={index} />
                  ))}
              </div>
            </section>
          );
        })}

        {/* Other section */}
        <section id={"Other"} className="mb-16">
          <div className="flex items-center mb-6">
            <h2 className="text-3xl font-bold text-coffee-800">Other</h2>
            <div className="h-[2px] bg-coffee-800 flex-grow ml-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data && data
              .filter((i) => !i.item_data?.categories || i.item_data?.categories.length === 0)
              .map((object, index) => (
                <RedefinedMenuCard catalogObject={object} key={index} />
              ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Menu;
