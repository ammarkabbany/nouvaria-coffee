import Image from "next/image";
import { Badge } from "./Badge";
import Card from "./Card";
import { coffee, tea, pastries, desserts, specials } from "./menuData";

const Menu = () => {
  
  return (
    <div className="flex-grow bg-background py-12 scroll-smooth">
      <div className="container mx-auto px-4 ">
        {/* Menu Navigation */}
        <div className="flex justify-center mb-10">
          <nav className="flex flex-wrap justify-center gap-2 md:gap-4">
            <a
              href="#coffee"
              className="px-4 py-2 bg-coffee-700 text-white rounded-full hover:bg-coffee-900 transition-colors"
            >
              Coffee
            </a>
            <a
              href="#tea"
              className="px-4 py-2 bg-coffee-700 text-white rounded-full hover:bg-coffee-900 transition-colors"
            >
              Tea
            </a>
            <a
              href="#pastries"
              className="px-4 py-2 bg-coffee-700 text-white rounded-full hover:bg-coffee-900 transition-colors"
            >
              Pastries
            </a>
            <a
              href="#desserts"
              className="px-4 py-2 bg-coffee-700 text-white rounded-full hover:bg-coffee-900 transition-colors"
            >
              Desserts
            </a>
            <a
              href="#specials"
              className="px-4 py-2 bg-coffee-700 text-white rounded-full hover:bg-coffee-900 transition-colors"
            >
              Specials
            </a>
          </nav>
        </div>

        {/* Coffee Section */}
        <section id="coffee" className="mb-16 ">
          <div className="flex items-center mb-6">
            <h2 className="text-3xl font-bold text-coffee-800">Coffee</h2>
            <div className="h-[2px] bg-coffee-800 flex-grow ml-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coffee.map((coffee, index) => (
              <Card category={coffee} index={index}/>
            ))}
          </div>
        </section>

        {/* Tea Section */}
        <section id="tea" className="mb-16">
          <div className="flex items-center mb-6">
            <h2 className="text-3xl font-bold text-coffee-800">Tea</h2>
            <div className="h-[2px] bg-coffee-800 flex-grow ml-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tea.map((tea, index) => (
              <Card category={tea} index={index} />
            ))}
          </div>
        </section>

        {/* Pastries Section */}
        <section id="pastries" className="mb-16">
          <div className="flex items-center mb-6">
            <h2 className="text-3xl font-bold text-coffee-800">Pastries</h2>
            <div className="h-[2px] bg-coffee-800 flex-grow ml-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastries.map((pastries, index) => (
              <Card category={pastries} index={index} />
            ))}
          </div>
        </section>

        {/* Desserts Section */}
        <section id="desserts" className="mb-16">
          <div className="flex items-center mb-6">
            <h2 className="text-3xl font-bold text-coffee-800">Desserts</h2>
            <div className="h-[2px] bg-coffee-800 flex-grow ml-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {desserts.map((desserts, index) => (
              <Card category={desserts} index={index} />
            ))}
          </div>
        </section>

        {/* Specials Section */}
        <section id="specials">
          <div className="flex items-center mb-6">
            <h2 className="text-3xl font-bold text-coffee-800">Specials</h2>
            <div className="h-[2px] bg-coffee-800 flex-grow ml-4"></div>
          </div>

          <div className="bg-cardamom-600 p-6 rounded-lg  border-2">
            <h3 className="text-xl font-bold text-primary-foreground mb-4">
              Seasonal Offerings
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {specials.map((specials, index) => (
                <Card category={specials} index={index} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Menu;
