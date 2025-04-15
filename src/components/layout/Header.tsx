"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import useCartStore from '@/store/cart-store'
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { env } from "@/env";

interface HeaderProps {
  onSearchClick?: () => void;
  onCartClick?: () => void;
}

  export default function Header({ onSearchClick, onCartClick }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const {getTotalItems} = useCartStore()

  const navItems = [
    { label: "Shop", href: "/shop" },
    { label: "Menu", href: env.NEXT_PUBLIC_MENU_LINK },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full from-primary via-[#3c6962] to-[#336162] bg-gradient-to-b border-b border-[#7aa492]">
      <div className="container mx-auto px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-creamy.png"
            alt="Nouvaria Logo"
            width={120}
            height={120}
            className="pt-8 pb-2 size-[120px] md:size-[115px] object-cover"
          />
          {/* <span className="text-xl font-light text-primary">COFFEE</span> */}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 mr-16">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-primary-foreground hover:text-accent transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          {/* <Button
            variant="ghost"
            size="icon"
            // onClick={onSearchClick}
            className="text-primary-foreground hover:text-primary"
          >
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button> */}

          {/* Mobile Menu Button */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden hover:text-primary text-primary-foreground"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                <Link href="/" className="flex items-center">
                  <Image
                    src="/logo-green.png"
                    alt="Novaria Logo"
                    width={150}
                    height={150}
                    className="pt-8 w-[120px] object-cover"
                  />
                  {/* <span className="text-xl font-light text-primary">COFFEE</span> */}
                </Link>
                </div>
                <nav className="flex flex-col space-y-6">
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="text-lg font-medium text-primary hover:text-muted-foreground transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                {/* <div className="mt-auto pt-8">
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Search for products
                    </p>
                    <div className="flex space-x-2">
                      <Input placeholder="Search..." className="flex-1" />
                      <Button size="icon">
                        <Search className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div> */}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
