import Footer from "@/components/layout/Footer";
import { MenuHeader } from "@/components/pages/menu/MenuHeader";
import Menu from "@/components/pages/menu/Menu";
import { EmptyState } from "@/components/ui/EmptyState";
import { env } from "@/env";
import Image from "next/image";
import { Coffee, RefreshCcw } from "lucide-react";

const Page = async () => {
  try {
    const [categoriesResponse, itemsResponse, secondItemsResponse] =
      await Promise.all([
        fetch(`${env.API_ENDPOINT}/catalog/list?types=CATEGORY`, {
          headers: {
            "Content-Type": "application/json",
            "Square-Version": `${env.SQUARE_VERSION}`,
            Authorization: `Bearer ${env.ACCESS_TOKEN}`,
          },
        }),
        fetch(`${env.API_ENDPOINT}/catalog/list`, {
          headers: {
            "Content-Type": "application/json",
            "Square-Version": `${env.SQUARE_VERSION}`,
            Authorization: `Bearer ${env.ACCESS_TOKEN}`,
          },
        }),
        fetch(
          `${env.API_ENDPOINT}/catalog/list?types=ITEM&cursor=CAASGgoSODQ5MDc5ODc6MjA5NjA3MzczEgQQAThk`,
          {
            headers: {
              "Content-Type": "application/json",
              "Square-Version": `${env.SQUARE_VERSION}`,
              Authorization: `Bearer ${env.ACCESS_TOKEN}`,
            },
          }
        ),
      ]);

    const [categories, data, secondData] = await Promise.all([
      categoriesResponse.json(),
      itemsResponse.json(),
      secondItemsResponse.json(),
    ]);

    if (
      !categoriesResponse.ok ||
      !itemsResponse.ok ||
      !secondItemsResponse.ok
    ) {
      throw new Error("Failed to fetch data");
    }

    const hasCategories = categories.objects && categories.objects.length > 0;
    const hasItems =
      data.objects &&
      secondData.objects &&
      (data.objects.length > 0 || secondData.objects.length > 0);

    return (
      <div className="flex min-h-screen flex-col">
        <MenuHeader />
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

        {!hasCategories || !hasItems ? (
          <div className="container mx-auto px-4 py-12">
            <EmptyState
              icon={<Coffee className="h-12 w-12 text-coffee-600" />}
              title="No Menu Items Available"
              description="We're currently updating our menu. Please check back later."
              action={{
                label: "Refresh Page",
                onClick: () => window.location.reload(),
              }}
            />
          </div>
        ) : (
          <Menu
            data={[...data.objects, ...secondData.objects]}
            categories={categories.objects}
          />
        )}

        <Footer />
      </div>
    );
  } catch (error) {
    return (
      <div className="flex min-h-screen flex-col">
        <MenuHeader />
        <div className="container mx-auto px-4 py-12">
          <EmptyState
            icon={<RefreshCcw className="h-12 w-12 text-destructive" />}
            title="Error Loading Menu"
            description="There was a problem loading the menu. Please try again."
            // action={{
            //   label: "Try Again",
            //   onClick: () => window.location.reload(),
            // }}
          />
        </div>
        <Footer />
      </div>
    );
  }
};

export default Page;
