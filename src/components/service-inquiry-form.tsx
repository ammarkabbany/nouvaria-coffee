"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { CalendarIcon, CheckCircle2 } from "lucide-react"
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

// Define the form schema with Zod
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  serviceType: z.enum(["catering", "event-hosting", "wholesale"]),
  companyName: z.string().optional(),
  eventDate: z.date().optional(),
  guestCount: z.string().optional(),
  eventType: z.string().optional(),
  businessType: z.string().optional(),
  message: z.string().min(10, { message: "Please provide more details about your inquiry." }),
})

export default function ServiceInquiryForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Initialize the form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      serviceType: "catering",
      companyName: "",
      message: "",
    },
  })

  // Form submission handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real application, you would send this data to your server
    console.log(values)

    // Show success message
    setIsSubmitted(true)

    // Reset form after submission
    setTimeout(() => {
      form.reset()
      setIsSubmitted(false)
    }, 5000)
  }

  // Get the current service type to conditionally render fields
  const serviceType = form.watch("serviceType")

  return (
    <div className="bg-coffee-50 rounded-lg p-6 shadow-md">
      {isSubmitted ? (
        <div className="text-center py-10">
          <div className="flex justify-center mb-4">
            <CheckCircle2 className="h-16 w-16 text-green-500" />
          </div>
          <h3 className="text-2xl font-bold text-coffee-800 mb-2">Thank You!</h3>
          <p className="text-coffee-600">
            Your inquiry has been submitted successfully. Our team will contact you within 24 hours.
          </p>
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-coffee-700">Full Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your name"
                        {...field}
                        className="border-coffee-200 focus:border-coffee-500 focus:ring-coffee-500"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-coffee-700">Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="your.email@example.com"
                        {...field}
                        className="border-coffee-200 focus:border-coffee-500 focus:ring-coffee-500"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-coffee-700">Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="(123) 456-7890"
                        {...field}
                        className="border-coffee-200 focus:border-coffee-500 focus:ring-coffee-500"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-coffee-700">Company/Organization Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your company name (if applicable)"
                        {...field}
                        className="border-coffee-200 focus:border-coffee-500 focus:ring-coffee-500"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="serviceType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-coffee-700">Service Type</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="catering" />
                        </FormControl>
                        <FormLabel className="font-normal cursor-pointer">Catering</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="event-hosting" />
                        </FormControl>
                        <FormLabel className="font-normal cursor-pointer">Event Hosting</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="wholesale" />
                        </FormControl>
                        <FormLabel className="font-normal cursor-pointer">Wholesale</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Conditional fields based on service type */}
            {serviceType === "catering" || serviceType === "event-hosting" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="eventDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel className="text-coffee-700">Event Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full pl-3 text-left font-normal border-coffee-200 focus:border-coffee-500 focus:ring-coffee-500",
                                !field.value && "text-muted-foreground",
                              )}
                            >
                              {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) => date < new Date()}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormDescription className="text-xs text-coffee-500">
                        Select your preferred event date
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="guestCount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-coffee-700">Number of Guests</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="border-coffee-200 focus:border-coffee-500 focus:ring-coffee-500">
                            <SelectValue placeholder="Select guest count" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="1-10">1-10 guests</SelectItem>
                          <SelectItem value="11-25">11-25 guests</SelectItem>
                          <SelectItem value="26-50">26-50 guests</SelectItem>
                          <SelectItem value="51-100">51-100 guests</SelectItem>
                          <SelectItem value="100+">100+ guests</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            ) : null}

            {serviceType === "event-hosting" && (
              <FormField
                control={form.control}
                name="eventType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-coffee-700">Event Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="border-coffee-200 focus:border-coffee-500 focus:ring-coffee-500">
                          <SelectValue placeholder="Select event type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="private-party">Private Party</SelectItem>
                        <SelectItem value="business-meeting">Business Meeting</SelectItem>
                        <SelectItem value="workshop">Workshop or Class</SelectItem>
                        <SelectItem value="cultural-event">Cultural Event</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            {serviceType === "wholesale" && (
              <FormField
                control={form.control}
                name="businessType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-coffee-700">Business Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="border-coffee-200 focus:border-coffee-500 focus:ring-coffee-500">
                          <SelectValue placeholder="Select business type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="cafe">Café</SelectItem>
                        <SelectItem value="restaurant">Restaurant</SelectItem>
                        <SelectItem value="specialty-store">Specialty Food Store</SelectItem>
                        <SelectItem value="office">Office/Corporate</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-coffee-700">Additional Details</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Please provide details about your inquiry..."
                      className="resize-none min-h-[120px] border-coffee-200 focus:border-coffee-500 focus:ring-coffee-500"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full bg-coffee-600 hover:bg-coffee-700 text-white shadow-md hover:shadow-lg transition-all duration-300"
            >
              Submit Inquiry
            </Button>
          </form>
        </Form>
      )}
    </div>
  )
}
