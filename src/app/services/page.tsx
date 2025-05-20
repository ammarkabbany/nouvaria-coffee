"use client"
import Image from "next/image"
import { Utensils, Calendar, Store, Check } from 'lucide-react'

import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import * as React from 'react';
import { useRouter, useSearchParams } from "next/navigation"

export default function ServicesPage() {
  const params = useSearchParams();
  const tabParam = params.get("tab");
  const router = useRouter();
  const defaultTab = tabParam || "catering"; // Default to "catering" if no tab is specified
  const [activeTab, setActiveTab] = React.useState(defaultTab)
  const handleTabChange = (value: string) => {
    setActiveTab(value)
    router.push(`/services?tab=${value}`, {scroll: false}) // Update the URL with the selected tab
  }

  React.useEffect(() => {
    setActiveTab(defaultTab)
  }, [defaultTab])

  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header />
      {/* Hero Banner */}
      <div className="relative h-[40vh] md:h-[50vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10" />
        <Image
          src="/services-hero-image.jpg"
          alt="Novaria Coffee Services"
          fill
          className="object-cover"
          style={{
            objectPosition: "bottom",
          }}
          priority
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-2xl animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
            <p className="text-lg text-gray-200 max-w-xl">
              From catering and event hosting to wholesale partnerships, we bring the authentic taste of Syrian coffee
              culture to your business or special occasion.
            </p>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <section className="py-16 bg-coffee-50 syrian-pattern">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-coffee-800 mb-4">How We Can Serve You</h2>
            <p className="text-coffee-600 max-w-2xl mx-auto">
              With a decade of experience in the coffee industry, we offer a range of services to bring the warmth and
              flavor of Syrian coffee culture to your events and business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 bg-white/90">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-coffee-600 flex items-center justify-center">
                  <Utensils className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-coffee-800 mb-2">Catering</h3>
                <p className="text-coffee-600 mb-4">
                  Enhance your event with our catering, featuring Syrian coffee flavors and delicious pastries like
                  baklava. Delight your guests with the rich flavors that bring the warmth of Syrian culture to any
                  gathering.
                </p>
                {/* <Button
                  asChild
                  variant="outline"
                  className="border-coffee-600 text-coffee-600 hover:bg-coffee-50 hover:text-coffee-700"
                >
                  <Link href="?tab=catering#details" className="flex items-center">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button> */}
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 bg-white/90">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-coffee-600 flex items-center justify-center">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-coffee-800 mb-2">Event Hosting</h3>
                <p className="text-coffee-600 mb-4">
                  Looking for a unique venue for your next event? We can host your gathering right here at our shop! With
                  a welcoming atmosphere and friendly service, we're ready to make your event memorable.
                </p>
                {/* <Button
                  asChild
                  variant="outline"
                  className="border-coffee-600 text-coffee-600 hover:bg-coffee-50 hover:text-coffee-700"
                >
                  <Link href="?tab=event-hosting#details" className="flex items-center">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button> */}
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 bg-white/90">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-coffee-600 flex items-center justify-center">
                  <Store className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-coffee-800 mb-2">Wholesale</h3>
                <p className="text-coffee-600 mb-4">
                  We provide high-quality coffee beans sourced from the finest farms. Whether you're a small café or
                  looking to expand your offerings, we have the perfect blends to meet your needs.
                </p>
                {/* <Button
                  asChild
                  variant="outline"
                  className="border-coffee-600 text-coffee-600 hover:bg-coffee-50 hover:text-coffee-700"
                >
                  <Link href="?tab=wholesale#details" className="flex items-center">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button> */}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section id="details" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Tabs className="w-full" defaultValue={activeTab} onValueChange={handleTabChange}>
            <div className="flex flex-col w-fit mx-auto space-y-1 justify-center mb-8">
              <TabsList className="bg-coffee-50 p-1 shadow-md">
                <TabsTrigger
                  value="catering"
                  className="data-[state=active]:bg-coffee-600 data-[state=active]:text-white"
                >
                  <Utensils className="h-4 w-4 mr-2" />
                  Catering
                </TabsTrigger>
                <TabsTrigger
                  value="event-hosting"
                  className="data-[state=active]:bg-coffee-600 data-[state=active]:text-white"
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Event Hosting
                </TabsTrigger>
                <TabsTrigger
                  value="wholesale"
                  className="data-[state=active]:bg-coffee-600 data-[state=active]:text-white hidden sm:inline-flex"
                >
                  <Store className="h-4 w-4 mr-2" />
                  Wholesale
                </TabsTrigger>
              </TabsList>
              <TabsList className="bg-coffee-50 p-1 shadow-md sm:hidden">
                <TabsTrigger
                  value="wholesale"
                  className="data-[state=active]:bg-coffee-600 data-[state=active]:text-white"
                >
                  <Store className="h-4 w-4 mr-2" />
                  Wholesale
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Catering Tab */}
            <TabsContent value="catering" className="animate-fadeIn">
              <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                <div>
                  <h2 className="text-3xl font-bold text-coffee-800 mb-4">Catering Services</h2>
                  <p className="text-coffee-600 mb-6">
                    Bring the authentic taste of Syrian coffee and pastries to your next event. Our catering services are
                    perfect for corporate events, weddings, private parties, and cultural celebrations.
                  </p>

                  <h3 className="text-xl font-semibold text-coffee-700 mb-3">Our Catering Packages</h3>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <div className="mt-1 mr-3 bg-coffee-600 rounded-full p-1">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-coffee-800">Traditional Coffee Service</h4>
                        <p className="text-coffee-600 text-sm">
                          Authentic Syrian coffee prepared on-site in traditional copper pots (rakweh), served in small
                          cups a sweet treat.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="mt-1 mr-3 bg-coffee-600 rounded-full p-1">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-coffee-800">Pastry Platters</h4>
                        <p className="text-coffee-600 text-sm">
                          Assortments of homemade Syrian pastries including baklava, and maamoul, beautifully
                          arranged and ready to serve.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="mt-1 mr-3 bg-coffee-600 rounded-full p-1">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-coffee-800">Full Beverage Service</h4>
                        <p className="text-coffee-600 text-sm">
                          A complete coffee and tea bar with our signature drinks, including specialty lattes, cold
                          beverages, and traditional teas.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* <Button
                    asChild
                    className="bg-coffee-600 hover:bg-coffee-700 text-white shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <Link href="#inquiry-form">Request Catering Quote</Link>
                  </Button> */}
                </div>

                <div className="relative h-[600px] rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/services-hero-image.jpg"
                    alt="Novaria Coffee Catering Service"
                    fill
                    priority
                    className="object-cover brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-coffee-900/50 to-transparent"></div>
                </div>
              </div>
            </TabsContent>

            {/* Event Hosting Tab */}
            <TabsContent value="event-hosting" className="animate-fadeIn">
              <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                <div className="">
                  <h2 className="text-3xl font-bold text-coffee-800 mb-4">Event Hosting</h2>
                  <p className="text-coffee-600 mb-6">
                    Host your next gathering in our warm, inviting space in Pittsburgh's Strip District. Our café
                    provides a unique atmosphere with authentic Syrian décor and ambiance, perfect for a variety of
                    events.
                  </p>

                  <h3 className="text-xl font-semibold text-coffee-700 mb-3">Event Types We Host</h3>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <div className="mt-1 mr-3 bg-coffee-600 rounded-full p-1">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-coffee-800">Private Celebrations</h4>
                        <p className="text-coffee-600 text-sm">
                          Birthday parties, anniversaries, graduation celebrations, and other special occasions.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="mt-1 mr-3 bg-coffee-600 rounded-full p-1">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-coffee-800">Business Meetings</h4>
                        <p className="text-coffee-600 text-sm">
                          Team meetings, client presentations, networking events, and workshops in a relaxed setting.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="mt-1 mr-3 bg-coffee-600 rounded-full p-1">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-coffee-800">Cultural Events</h4>
                        <p className="text-coffee-600 text-sm">
                          Poetry readings, book clubs, language exchange meetups, and cultural celebrations.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="mt-1 mr-3 bg-coffee-600 rounded-full p-1">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-coffee-800">Coffee Tastings & Workshops</h4>
                        <p className="text-coffee-600 text-sm">
                          Educational events about Syrian coffee traditions, brewing methods, and tasting experiences.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* <div className="bg-coffee-50 p-4 rounded-lg mb-6">
                    <h4 className="font-semibold text-coffee-800 mb-2">Venue Capacity</h4>
                    <ul className="space-y-1 text-coffee-700">
                      <li className="flex justify-between">
                        <span>Seated Events</span>
                        <span>Up to 30 guests</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Standing Reception</span>
                        <span>Up to 45 guests</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Partial Venue Rental</span>
                        <span>Available</span>
                      </li>
                    </ul>
                  </div> */}

                  {/* <Button
                    asChild
                    className="bg-coffee-600 hover:bg-coffee-700 text-white shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <Link href="#inquiry-form">Check Availability</Link>
                  </Button> */}
                </div>

                <div className="order-1 md:order-2 relative h-[600px] rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/test.jpg"
                    alt="Novaria Coffee Shop Interior for Events"
                    fill
                    priority
                    className="object-cover brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-coffee-900/50 to-transparent"></div>
                </div>
              </div>
            </TabsContent>

            {/* Wholesale Tab */}
            <TabsContent value="wholesale" className="animate-fadeIn">
              <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                <div>
                  <h2 className="text-3xl font-bold text-coffee-800 mb-4">Wholesale</h2>
                  <p className="text-coffee-600 mb-6">
                    Elevate your coffee offerings with our premium Syrian coffee blends and specialty products. We
                    partner with cafés, restaurants, specialty food stores, and offices to provide high-quality coffee
                    beans and products.
                  </p>

                  <h3 className="text-xl font-semibold text-coffee-700 mb-3">Our Wholesale Products</h3>

                  <div className="space-y-4 mb-6">

                    <div className="flex items-start">
                      <div className="mt-1 mr-3 bg-coffee-600 rounded-full p-1">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-coffee-800">Single-Origin Beans</h4>
                        <p className="text-coffee-600 text-sm">
                          Premium single-origin coffee beans from select farms around the world.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="mt-1 mr-3 bg-coffee-600 rounded-full p-1">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-coffee-800">Specialty Syrups & Ingredients</h4>
                        <p className="text-coffee-600 text-sm">
                          House-made syrups and specialty ingredients for creating our signature drinks.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="mt-1 mr-3 bg-coffee-600 rounded-full p-1">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-coffee-800">Brewing Equipment</h4>
                        <p className="text-coffee-600 text-sm">
                          Traditional Syrian coffee pots (rakweh) and other specialty brewing equipment.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* <h3 className="text-xl font-semibold text-coffee-700 mb-3">Wholesale Benefits</h3>
                  <ul className="list-disc list-inside text-coffee-600 mb-6 space-y-1">
                    <li>Competitive wholesale pricing</li>
                    <li>Flexible ordering quantities</li>
                    <li>Staff training on Syrian coffee preparation</li>
                    <li>Marketing support and materials</li>
                    <li>Consistent, reliable delivery</li>
                  </ul> */}

                  {/* <Button
                    asChild
                    className="bg-coffee-600 hover:bg-coffee-700 text-white shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <Link href="#inquiry-form">Become a Wholesale Partner</Link>
                  </Button> */}
                </div>

                <div className="relative h-[600px] rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/temp-wholesale-img.jpg"
                    alt="Novaria Coffee Wholesale Products"
                    fill
                    priority
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-coffee-900/50 to-transparent"></div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="py-16 bg-coffee-100 syrian-pattern">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12 text-coffee-800">What Our Partners Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {serviceTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1"
              >
                <div className="mb-4">
                  <Image
                    src={testimonial.logo || "/placeholder.svg?height=100&width=100"}
                    alt={testimonial.company}
                    width={80}
                    height={80}
                    className="mx-auto rounded-full object-cover"
                  />
                </div>
                <p className="italic mb-4 text-coffee-700">"{testimonial.quote}"</p>
                <p className="font-semibold text-coffee-800">{testimonial.name}</p>
                <p className="text-coffee-500 text-sm">{testimonial.title}</p>
                <p className="text-coffee-600 font-medium text-sm mt-1">{testimonial.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Inquiry Form */}
      {/* <section id="inquiry-form" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-coffee-800 mb-4">Request Information</h2>
              <p className="text-coffee-600">
                Interested in our services? Fill out the form below, and our team will get back to you within 24 hours to
                discuss your needs.
              </p>
            </div>

            <ServiceInquiryForm />
          </div>
        </div>
      </section> */}
      <Footer />
    </div>
  )
}

// Sample testimonial data
const serviceTestimonials = [
  {
    quote:
      "Novaria catered our company's annual meeting, and the authentic Syrian coffee experience was the highlight of the event. Their attention to detail and professional service impressed everyone.",
    name: "Jennifer Martinez",
    title: "Events Manager",
    company: "Tech Innovations Inc.",
    logo: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "We've been serving Novaria's coffee blends in our restaurant for over a year now, and our customers consistently rave about the unique flavors. Their wholesale service is reliable and the quality is exceptional.",
    name: "Michael Chen",
    title: "Owner",
    company: "Fusion Bistro",
    logo: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "We hosted our book club's anniversary at Novaria, and the space was perfect. The staff went above and beyond to create a warm, inviting atmosphere, and the Syrian coffee and pastries were a delightful cultural experience.",
    name: "Sarah Johnson",
    title: "Organizer",
    company: "Pittsburgh Literary Society",
    logo: "/placeholder.svg?height=100&width=100",
  },
]
