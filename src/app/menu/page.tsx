import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Menu from "@/components/pages/menu/Menu";
import Image from "next/image";

const Page = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="relative h-[40vh] md:h-[50vh] w-full overflow-hidden select-none">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10" />
        <Image
          src="/menu-hero.jpg"
          alt="Novaria Coffee Services"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-2xl animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Menus
            </h1>
          </div>
        </div>
      </div>

      <Menu />

      <Footer />
    </div>
  );
};

export default Page;
