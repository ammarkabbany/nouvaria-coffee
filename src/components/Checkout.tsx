"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { Check, CreditCard, Lock } from "lucide-react";

interface CheckoutProps {
  subtotal: number;
  shipping: number;
  total: number;
  onBack: () => void;
  onComplete: () => void;
}

const Checkout = ({
  subtotal = 51.97,
  shipping = 0,
  total = 51.97,
  onBack = () => console.log("Back to cart"),
  onComplete = () => console.log("Order completed"),
}: CheckoutProps) => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<
    "shipping" | "payment" | "review"
  >("shipping");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  // Form state
  const [shippingInfo, setShippingInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
  });

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvc: "",
  });

  const handleShippingInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShippingInfo({
      ...shippingInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handlePaymentInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentInfo({
      ...paymentInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep("payment");
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep("review");
  };

  const handlePlaceOrder = async () => {
    setIsProcessing(true);

    // Simulate API call to Stripe
    setTimeout(() => {
      setIsProcessing(false);
      setIsComplete(true);

      // Simulate redirect to confirmation page
      setTimeout(() => {
        onComplete();
      }, 2000);
    }, 2000);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      className="w-full bg-background p-6 rounded-lg"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">Checkout</h2>
        <Button variant="ghost" onClick={onBack}>
          Back to Cart
        </Button>
      </div>

      {/* Progress Steps */}
      <div className="flex items-center justify-center mb-8">
        <div className="flex items-center">
          <div
            className={`h-8 w-8 rounded-full flex items-center justify-center ${currentStep === "shipping" || currentStep === "payment" || currentStep === "review" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
          >
            1
          </div>
          <div className="h-1 w-12 bg-muted mx-2">
            <div
              className={`h-full ${currentStep === "payment" || currentStep === "review" ? "bg-primary" : "bg-muted"}`}
            />
          </div>
        </div>
        <div className="flex items-center">
          <div
            className={`h-8 w-8 rounded-full flex items-center justify-center ${currentStep === "payment" || currentStep === "review" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
          >
            2
          </div>
          <div className="h-1 w-12 bg-muted mx-2">
            <div
              className={`h-full ${currentStep === "review" ? "bg-primary" : "bg-muted"}`}
            />
          </div>
        </div>
        <div className="flex items-center">
          <div
            className={`h-8 w-8 rounded-full flex items-center justify-center ${currentStep === "review" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
          >
            3
          </div>
        </div>
      </div>

      {/* Shipping Information */}
      {currentStep === "shipping" && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="space-y-6"
        >
          <motion.h3
            variants={itemVariants}
            className="text-xl font-medium mb-4"
          >
            Shipping Information
          </motion.h3>
          <form onSubmit={handleShippingSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium mb-1"
                >
                  First Name
                </label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={shippingInfo.firstName}
                  onChange={handleShippingInfoChange}
                  required
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium mb-1"
                >
                  Last Name
                </label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={shippingInfo.lastName}
                  onChange={handleShippingInfoChange}
                  required
                />
              </motion.div>
            </div>
            <motion.div variants={itemVariants}>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email Address
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={shippingInfo.email}
                onChange={handleShippingInfoChange}
                required
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <label
                htmlFor="address"
                className="block text-sm font-medium mb-1"
              >
                Street Address
              </label>
              <Input
                id="address"
                name="address"
                value={shippingInfo.address}
                onChange={handleShippingInfoChange}
                required
              />
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium mb-1"
                >
                  City
                </label>
                <Input
                  id="city"
                  name="city"
                  value={shippingInfo.city}
                  onChange={handleShippingInfoChange}
                  required
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="state"
                  className="block text-sm font-medium mb-1"
                >
                  State
                </label>
                <Input
                  id="state"
                  name="state"
                  value={shippingInfo.state}
                  onChange={handleShippingInfoChange}
                  required
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="zipCode"
                  className="block text-sm font-medium mb-1"
                >
                  ZIP Code
                </label>
                <Input
                  id="zipCode"
                  name="zipCode"
                  value={shippingInfo.zipCode}
                  onChange={handleShippingInfoChange}
                  required
                />
              </motion.div>
            </div>
            <motion.div variants={itemVariants} className="pt-4">
              <Button type="submit" className="w-full">
                Continue to Payment
              </Button>
            </motion.div>
          </form>
        </motion.div>
      )}

      {/* Payment Information */}
      {currentStep === "payment" && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="space-y-6"
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center mb-4"
          >
            <h3 className="text-xl font-medium">Payment Information</h3>
            <div className="ml-auto flex items-center text-sm text-muted-foreground">
              <Lock className="h-4 w-4 mr-1" />
              Secure Payment
            </div>
          </motion.div>
          <form onSubmit={handlePaymentSubmit} className="space-y-4">
            <motion.div variants={itemVariants}>
              <label
                htmlFor="cardName"
                className="block text-sm font-medium mb-1"
              >
                Name on Card
              </label>
              <Input
                id="cardName"
                name="cardName"
                value={paymentInfo.cardName}
                onChange={handlePaymentInfoChange}
                required
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <label
                htmlFor="cardNumber"
                className="block text-sm font-medium mb-1"
              >
                Card Number
              </label>
              <div className="relative">
                <Input
                  id="cardNumber"
                  name="cardNumber"
                  value={paymentInfo.cardNumber}
                  onChange={handlePaymentInfoChange}
                  placeholder="1234 5678 9012 3456"
                  required
                />
                <CreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              </div>
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="expiry"
                  className="block text-sm font-medium mb-1"
                >
                  Expiry Date
                </label>
                <Input
                  id="expiry"
                  name="expiry"
                  placeholder="MM/YY"
                  value={paymentInfo.expiry}
                  onChange={handlePaymentInfoChange}
                  required
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <label htmlFor="cvc" className="block text-sm font-medium mb-1">
                  CVC
                </label>
                <Input
                  id="cvc"
                  name="cvc"
                  placeholder="123"
                  value={paymentInfo.cvc}
                  onChange={handlePaymentInfoChange}
                  required
                />
              </motion.div>
            </div>
            <motion.div variants={itemVariants} className="pt-4 flex space-x-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setCurrentStep("shipping")}
              >
                Back
              </Button>
              <Button type="submit" className="flex-1">
                Review Order
              </Button>
            </motion.div>
          </form>
        </motion.div>
      )}

      {/* Order Review */}
      {currentStep === "review" && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="space-y-6"
        >
          <motion.h3
            variants={itemVariants}
            className="text-xl font-medium mb-4"
          >
            Review Your Order
          </motion.h3>

          {/* Shipping Information Summary */}
          <motion.div
            variants={itemVariants}
            className="bg-muted/30 p-4 rounded-lg"
          >
            <h4 className="font-medium mb-2">Shipping Information</h4>
            <p>
              {shippingInfo.firstName} {shippingInfo.lastName}
            </p>
            <p>{shippingInfo.address}</p>
            <p>
              {shippingInfo.city}, {shippingInfo.state} {shippingInfo.zipCode}
            </p>
            <p>{shippingInfo.email}</p>
            <Button
              variant="ghost"
              size="sm"
              className="mt-2 text-xs"
              onClick={() => setCurrentStep("shipping")}
            >
              Edit
            </Button>
          </motion.div>

          {/* Payment Information Summary */}
          <motion.div
            variants={itemVariants}
            className="bg-muted/30 p-4 rounded-lg"
          >
            <h4 className="font-medium mb-2">Payment Information</h4>
            <p>{paymentInfo.cardName}</p>
            <p>Card ending in {paymentInfo.cardNumber.slice(-4)}</p>
            <p>Expires {paymentInfo.expiry}</p>
            <Button
              variant="ghost"
              size="sm"
              className="mt-2 text-xs"
              onClick={() => setCurrentStep("payment")}
            >
              Edit
            </Button>
          </motion.div>

          {/* Order Summary */}
          <motion.div variants={itemVariants} className="space-y-3">
            <h4 className="font-medium">Order Summary</h4>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Shipping</span>
              <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
            </div>
            <Separator className="my-2" />
            <div className="flex justify-between font-medium">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="pt-4 flex space-x-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setCurrentStep("payment")}
            >
              Back
            </Button>
            <Button
              className="flex-1"
              onClick={handlePlaceOrder}
              disabled={isProcessing}
            >
              {isProcessing ? "Processing..." : "Place Order"}
            </Button>
          </motion.div>
        </motion.div>
      )}

      {/* Order Complete */}
      {isComplete && (
        <motion.div
          className="text-center py-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <Check className="h-10 w-10 text-green-600" />
          </motion.div>
          <h3 className="text-2xl font-semibold mb-2">Order Confirmed!</h3>
          <p className="text-muted-foreground mb-6">
            Thank you for your purchase. Your order has been received and is
            being processed.
          </p>
          <p className="text-sm text-muted-foreground mb-6">
            A confirmation email has been sent to {shippingInfo.email}
          </p>
          <Button onClick={() => router.push("/")}>Continue Shopping</Button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Checkout;
