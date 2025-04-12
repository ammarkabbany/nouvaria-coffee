import Image from "next/image";
import { Badge } from "./Badge";
import Card from "./Card";

const Menu = () => {
  const coffee = [
    {
      name: "Traditional Syrian Coffee",
      price: "$4.50",
      description:
        "Finely ground coffee beans brewed with cardamom in the traditional Syrian method.",
      image: "/placeholder.svg?height=100&width=100",
      sizes: [
        { size: "S", price: "Rs.350" },
        { size: "M", price: "Rs.400" },
        { size: "L", price: "Rs.450" },
      ],
      isNew: true,
    },
    {
      name: "Rosewater Latte",
      price: "$5.25",
      description:
        "Espresso with steamed milk and a hint of rosewater for a floral aroma.",
      image: "/placeholder.svg?height=100&width=100",
      sizes: [
        { size: "S", price: "Rs.350" },
        { size: "M", price: "Rs.400" },
        { size: "L", price: "Rs.450" },
      ],
      isNew: true,
    },
    {
      name: "Cardamom Cold Brew",
      price: "$5.50",
      description:
        "Slow-steeped coffee infused with cardamom, served over ice.",
      image: "/placeholder.svg?height=100&width=100",
      sizes: [
        { size: "S", price: "Rs.350" },
        { size: "M", price: "Rs.400" },
        { size: "L", price: "Rs.450" },
      ],
      isNew: true,
    },
    {
      name: "Turkish Coffee",
      price: "$4.75",
      description:
        "Unfiltered coffee prepared in a traditional copper pot with sugar to taste.",
      image: "/placeholder.svg?height=100&width=100",
      sizes: [
        { size: "S", price: "Rs.350" },
        { size: "M", price: "Rs.400" },
        { size: "L", price: "Rs.450" },
      ],
      isNew: true,
    },
    {
      name: "Pistachio Latte",
      price: "$5.75",
      description: "Espresso with steamed milk and house-made pistachio syrup.",
      image: "/placeholder.svg?height=100&width=100",
      sizes: [
        { size: "S", price: "Rs.350" },
        { size: "M", price: "Rs.400" },
        { size: "L", price: "Rs.450" },
      ],
      isNew: true,
    },
    {
      name: "Date Caramel Macchiato",
      price: "$5.50",
      description: "Espresso with steamed milk and natural date caramel.",
      image: "/placeholder.svg?height=100&width=100",
      sizes: [
        { size: "S", price: "Rs.350" },
        { size: "M", price: "Rs.400" },
        { size: "L", price: "Rs.450" },
      ],
      isNew: true,
    },
  ];

  const coffeeSizes = [
    { size: "S", price: "Rs.350" },
    { size: "M", price: "Rs.400" },
    { size: "L", price: "Rs.450" },
  ];
  const tea = [
    {
      name: "Fresh Mint Tea",
      price: "$3.75",
      description:
        "Fresh mint leaves steeped in hot water, served with honey on the side.",
      image: "/placeholder.svg?height=100&width=100",
      isNew: true,
      sizes: [
        { size: "S", price: "Rs.300" },
        { size: "M", price: "Rs.350" },
        { size: "L", price: "Rs.400" },
      ],
    },
    {
      name: "Sage Tea",
      price: "$3.75",
      description:
        "Traditional Syrian sage tea known for its soothing properties.",
      image: "/placeholder.svg?height=100&width=100",
      isNew: true,
      sizes: [
        { size: "S", price: "Rs.300" },
        { size: "M", price: "Rs.350" },
        { size: "L", price: "Rs.400" },
      ],
    },
    {
      name: "Cinnamon Tea",
      price: "$3.95",
      description:
        "Black tea infused with cinnamon sticks and a touch of honey.",
      image: "/placeholder.svg?height=100&width=100",
      isNew: true,
      sizes: [
        { size: "S", price: "Rs.300" },
        { size: "M", price: "Rs.350" },
        { size: "L", price: "Rs.400" },
      ],
    },
    {
      name: "Rose Hip Tea",
      price: "$4.25",
      description:
        "Caffeine-free herbal tea with a naturally sweet and tart flavor.",
      image: "/placeholder.svg?height=100&width=100",
      isNew: true,
      sizes: [
        { size: "S", price: "Rs.300" },
        { size: "M", price: "Rs.350" },
        { size: "L", price: "Rs.400" },
      ],
    },
  ];

  const pastries = [
    {
      name: "Baklava",
      price: "$3.75",
      description:
        "Layers of flaky phyllo pastry filled with chopped nuts and sweetened with honey syrup.",
      image: "/placeholder.svg?height=100&width=100",
      isNew: true,
      sizes: [
        { size: "S", price: "Rs.300" },
        { size: "M", price: "Rs.350" },
        { size: "L", price: "Rs.400" },
      ],
    },
    {
      name: "Mamoul",
      price: "$3.25",
      description:
        "Semolina cookies filled with dates, pistachios, or walnuts and dusted with powdered sugar.",
      image: "/placeholder.svg?height=100&width=100",
      isNew: true,
      sizes: [
        { size: "S", price: "Rs.280" },
        { size: "M", price: "Rs.330" },
        { size: "L", price: "Rs.380" },
      ],
    },
    {
      name: "Kunafa",
      price: "$4.50",
      description:
        "Shredded phyllo pastry layered with sweet cheese and soaked in sugar syrup.",
      image: "/placeholder.svg?height=100&width=100",
      isNew: true,
      sizes: [
        { size: "S", price: "Rs.350" },
        { size: "M", price: "Rs.400" },
        { size: "L", price: "Rs.450" },
      ],
    },
    {
      name: "Halawet El-Jibn",
      price: "$4.25",
      description:
        "Sweet cheese rolls filled with cream and topped with pistachios.",
      image: "/placeholder.svg?height=100&width=100",
      isNew: true,
      sizes: [
        { size: "S", price: "Rs.330" },
        { size: "M", price: "Rs.380" },
        { size: "L", price: "Rs.430" },
      ],
    },
    {
      name: "Basbousa",
      price: "$3.50",
      description:
        "Semolina cake soaked in sweet syrup and topped with almonds.",
      image: "/placeholder.svg?height=100&width=100",
      isNew: true,
      sizes: [
        { size: "S", price: "Rs.300" },
        { size: "M", price: "Rs.350" },
        { size: "L", price: "Rs.400" },
      ],
    },
    {
      name: "Ghraybeh",
      price: "$3.00",
      description:
        "Traditional shortbread cookies with a delicate, crumbly texture.",
      image: "/placeholder.svg?height=100&width=100",
      isNew: true,
      sizes: [
        { size: "S", price: "Rs.280" },
        { size: "M", price: "Rs.330" },
        { size: "L", price: "Rs.380" },
      ],
    },
  ];
  const desserts = [
    {
      name: "Muhallabiah",
      price: "$4.50",
      description:
        "Milk pudding infused with rose water and topped with pistachios.",
      image: "/placeholder.svg?height=100&width=100",
      isNew: true,
      sizes: [
        { size: "S", price: "Rs.340" },
        { size: "M", price: "Rs.390" },
        { size: "L", price: "Rs.440" },
      ],
    },
    {
      name: "Qatayef",
      price: "$4.75",
      description:
        "Sweet dumplings filled with cream or nuts, then fried and soaked in syrup.",
      image: "/placeholder.svg?height=100&width=100",
      isNew: true,
      sizes: [
        { size: "S", price: "Rs.350" },
        { size: "M", price: "Rs.400" },
        { size: "L", price: "Rs.450" },
      ],
    },
    {
      name: "Namoura",
      price: "$3.95",
      description: "Semolina cake soaked in orange blossom syrup.",
      image: "/placeholder.svg?height=100&width=100",
      isNew: true,
      sizes: [
        { size: "S", price: "Rs.300" },
        { size: "M", price: "Rs.350" },
        { size: "L", price: "Rs.400" },
      ],
    },
    {
      name: "Awamat",
      price: "$4.25",
      description:
        "Crispy fried dough balls soaked in syrup, similar to donut holes.",
      image: "/placeholder.svg?height=100&width=100",
      isNew: true,
      sizes: [
        { size: "S", price: "Rs.320" },
        { size: "M", price: "Rs.370" },
        { size: "L", price: "Rs.420" },
      ],
    },
  ];
  const specials = [
    {
      name: "Saffron Rose Latte",
      price: "$6.50",
      description:
        "Limited edition latte infused with saffron and rose water, topped with dried rose petals.",
      image: "/placeholder.svg?height=100&width=100",
      isNew: true,
      tag: "Limited Time",
      sizes: [
        { size: "S", price: "Rs.450" },
        { size: "M", price: "Rs.500" },
        { size: "L", price: "Rs.550" },
      ],
    },
    {
      name: "Date & Tahini Cake",
      price: "$5.75",
      description:
        "Seasonal cake made with dates and tahini, served with a scoop of vanilla ice cream.",
      image: "/placeholder.svg?height=100&width=100",
      isNew: true,
      tag: "New",
      sizes: [
        { size: "S", price: "Rs.400" },
        { size: "M", price: "Rs.450" },
        { size: "L", price: "Rs.500" },
      ],
    },
  ];

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  ">
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
