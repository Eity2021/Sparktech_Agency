"use client";

import { useState } from "react";
import { ChevronDown, Bell, ExternalLink, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "../../../public/image/logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from 'next/image';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { name: "Home", href: "/", active: false },
    { name: "Hotels", href: "hotel", active: true },
    { name: "House", href: "/house", active: false },
    { name: "About Us", href: "/about", active: false },
    { name: "Contact Us", href: "/contact", active: false },
  ];

  return (
    <header className="w-full bg-[#E9F6FF] border-b border-gray-200">
      <div className="container sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div>
           <Image  src={logo} alt="logo"/>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`px-[18px] py-2 rounded-md text-[16px] font-normal  text-[#626262] font-dm ${
                  item.active
                    ? "text-purple-600 bg-purple-50"
                    : "text-gray-700 hover:text-purple-600 hover:bg-gray-50"
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Currency Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="hidden sm:flex items-center space-x-1"
                >
                  <span className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
                    €
                  </span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>EUR (€)</DropdownMenuItem>
                <DropdownMenuItem>USD ($)</DropdownMenuItem>
                <DropdownMenuItem>GBP (£)</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="hidden sm:flex items-center space-x-1"
                >
                  <div className="w-5 h-5 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-r from-red-500 via-yellow-400 to-red-500"></div>
                  </div>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Español</DropdownMenuItem>
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>Français</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* List Property Link */}
            <a
              href="#"
              className="hidden lg:flex items-center space-x-1 text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              <span>List your property</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            {/* Notification Bell */}
            <Button variant="ghost" size="sm" className="hidden sm:flex">
              <Bell className="w-5 h-5" />
            </Button>

            {/* User Profile */}
            <div className="hidden sm:flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-gray-700">S</span>
              </div>
              <span className="text-sm font-medium text-gray-700">Sunan</span>
            </div>

            {/* Mobile Menu Button */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-6 mt-6">
                  {/* Mobile User Profile */}
                  <div className="flex items-center space-x-3 pb-4 border-b">
                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-gray-700">
                        S
                      </span>
                    </div>
                    <span className="text-base font-medium text-gray-900">
                      Sunan
                    </span>
                  </div>

                  {/* Mobile Navigation */}
                  <nav className="flex flex-col space-y-2">
                    {navigationItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={`px-3 py-3 rounded-md text-base font-medium transition-colors ${
                          item.active
                            ? "text-purple-600 bg-purple-50"
                            : "text-gray-700 hover:text-purple-600 hover:bg-gray-50"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </a>
                    ))}
                  </nav>

                  {/* Mobile Actions */}
                  <div className="flex flex-col space-y-4 pt-4 border-t">
                    <a
                      href="#"
                      className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 text-base font-medium"
                    >
                      <span>List your property</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>

                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">
                        Currency
                      </span>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="flex items-center space-x-1"
                          >
                            <span className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
                              €
                            </span>
                            <ChevronDown className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem>EUR (€)</DropdownMenuItem>
                          <DropdownMenuItem>USD ($)</DropdownMenuItem>
                          <DropdownMenuItem>GBP (£)</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">
                        Language
                      </span>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="flex items-center space-x-1"
                          >
                            <div className="w-5 h-5 rounded-full overflow-hidden">
                              <div className="w-full h-full bg-gradient-to-r from-red-500 via-yellow-400 to-red-500"></div>
                            </div>
                            <ChevronDown className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem>Español</DropdownMenuItem>
                          <DropdownMenuItem>English</DropdownMenuItem>
                          <DropdownMenuItem>Français</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
