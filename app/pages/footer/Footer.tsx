"use client"
import { useState } from "react"
import { Menu, Phone, Mail, Apple, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false)

  const navigationItems = [
    { name: "Home", href: "#" },
    { name: "Hotels", href: "#" },
    { name: "Deals", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Contact Us", href: "#" },
  ]

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        {/* Main Header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-pink-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">D</span>
              </div>
              <div>
                <h1 className="text-xl font-bold">DAYF</h1>
                <p className="text-xs text-blue-100 hidden sm:block">
                  Dear friends, please booking your next stay easy, affordable, and stress-free.
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-blue-200 transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Contact Info & App Download - Desktop */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="text-right">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm mt-1">
                <Mail className="w-4 h-4" />
                <span>support@yourcompany.com</span>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-sm">Download Our App</span>
              <div className="flex space-x-2">
                <Button size="sm" variant="secondary" className="p-2">
                  <Apple className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="secondary" className="p-2">
                  <Play className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="lg:hidden text-white">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-blue-700 text-white border-blue-600">
              <div className="flex flex-col space-y-6 mt-8">
                {/* Mobile Navigation */}
                <nav className="flex flex-col space-y-4">
                  {navigationItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-white hover:text-blue-200 transition-colors duration-200 py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </nav>

                {/* Mobile Contact Info */}
                <div className="border-t border-blue-600 pt-6">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4" />
                      <span className="text-sm">+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4" />
                      <span className="text-sm">support@yourcompany.com</span>
                    </div>
                  </div>
                </div>

                {/* Mobile App Download */}
                <div className="border-t border-blue-600 pt-6">
                  <p className="text-sm mb-3">Download Our App</p>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="secondary" className="flex items-center space-x-2">
                      <Apple className="w-4 h-4" />
                      <span>iOS</span>
                    </Button>
                    <Button size="sm" variant="secondary" className="flex items-center space-x-2">
                      <Play className="w-4 h-4" />
                      <span>Android</span>
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Search Bar Section */}
        <div className="pb-4">
          <div className="flex items-center space-x-2 max-w-md">
            <div className="flex items-center bg-white rounded-lg overflow-hidden flex-1">
              <input
                type="text"
                placeholder="Search hotels, destinations..."
                className="px-4 py-2 text-gray-800 flex-1 outline-none"
              />
              <Button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-none">Search</Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-700 py-3">
          <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-blue-200">
            <p>© 2023. All Rights Reserved</p>
            <div className="mt-2 sm:mt-0">
              <span>123 Travel St, Suite 456, City, State 12345</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
