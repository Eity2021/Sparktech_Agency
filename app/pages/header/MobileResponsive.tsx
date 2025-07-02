import React from 'react'
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronDown, Bell, ExternalLink, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import euro from "../../../public/image/euro-circle.png";
import flag from "../../../public/image/flag.png";
interface MobileResponsiveProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  
}
export default function MobileResponsive({isOpen,setIsOpen} : MobileResponsiveProps) {
{

}
      const navigationItems : { name: string; href: string; active: boolean }[] = [
    {
        name: "Home", href: "/",
        active: false
    },
    {
        name: "Hotels", href: "hotel",
        active: false
    },
    {
        name: "House", href: "/house",
        active: false
    },
    {
        name: "About Us", href: "/about",
        active: false
    },
    {
        name: "Contact Us", href: "/contact",
        active: false
    },
  ];

  return (
    <div>
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
                   <div className="flex flex-col space-y-4 pt-4 border-t md:px-0 px-3">
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
                           <Image src={euro} alt="euro" />
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
                               <div>
                      <Image src={flag} alt="flag" />
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
  )
}
