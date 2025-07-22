"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Search } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "About Us", href: "#about" },
    {
      label: "Education",
      href: "#education",
      submenu: [
        { label: "Holiday Tech Camp", href: "#htc" },
        { label: "STEAM Boost", href: "#steam" },
      ]
    },
    {
      label: "Makerspace",
      href: "#makerspace",
      submenu: [
        { label: "3D Printing", href: "#3d-printing" },
        { label: "Laser Cutting", href: "#laser-cutting" },
        { label: "PCB Design & Printing", href: "#pcb" },
        { label: "Drone Services", href: "#drone-services" },
        { label: "Product Development", href: "#product-development" },
      ]
    },
    {
      label: "Community",
      href: "#community",
      submenu: [
        { label: "Meetups", href: "#meetup" },
        { label: "Girls Bootcamp", href: "#girls-bootcamp" },
        { label: "Online Series", href: "#online-series" },
      ]
    },
    {
      label: "Products",
      href: "#products",
      submenu: [
        { label: "nTron Kit", href: "#ntron-kit" },
      ]
    },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-8 h-8 bg-blue-600 rounded text-white font-bold text-sm">
            NT
          </div>
          <span className="font-bold text-xl text-blue-600">ARTSKE</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <div key={item.label} className="relative group">
              <Link
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </Link>
              {item.submenu && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {item.submenu.map((subItem) => (
                    <Link
                      key={subItem.label}
                      href={subItem.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-4 w-4" />
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-4 mt-6">
                {navItems.map((item) => (
                  <div key={item.label} className="space-y-2">
                    <Link
                      href={item.href}
                      className="text-lg font-medium text-gray-900 hover:text-blue-600 block"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {item.submenu && (
                      <div className="ml-4 space-y-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="block text-sm text-gray-600 hover:text-blue-600"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
