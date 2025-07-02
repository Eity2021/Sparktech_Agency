"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChevronDown, Bell, ExternalLink, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "../../../public/image/logo.png";
import Image from "next/image";
import Link from "next/link";
import euro from "../../../public/image/euro-circle.png";
import down from "../../../public/image/arrow-down.png";
import flag from "../../../public/image/flag.png";
import arrowUp from "../../../public/image/arrow-up.png";
import message from "../../../public/image/message.png";
import user from "../../../public/image/User_light.png";
import MobileResponsive from "./MobileResponsive";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "Hotels", href: "hotel" },
    { name: "House", href: "/house" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="w-full bg-[#E9F6FF] ">
      <div className="md:container mx-auto lg:px-0 px-4">
        <div className="flex items-center justify-between h-[76px]">
          {/* Logo */}
          <div>
            <Image src={logo} alt="logo" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center ">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`md:px-[12px] px-[18px] py-2 rounded-md text-[16px]  font-dm bg-transparent transition-colors duration-200 ${
                    isActive
                      ? "text-[#007DD0] font-bold"
                      : "text-[#626262] font-normal"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center ">
            {/* Currency Selector */}
            <div className="rounded-[46px] border border-[#A5D3F1] py-[3px] mr-1">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="hidden sm:flex items-center space-x-1 "
                  >
                    <span className="w-5 h-5  flex items-center justify-center">
                      <Image src={euro} alt="euro" />
                    </span>
                    <Image src={down} alt="down" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>EUR (€)</DropdownMenuItem>
                  <DropdownMenuItem>USD ($)</DropdownMenuItem>
                  <DropdownMenuItem>GBP (£)</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Language Selector */}
            <div className="rounded-[46px] border border-[#A5D3F1] py-[3px] mr-1">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="hidden sm:flex items-center space-x-1"
                  >
                    <div>
                      <Image src={flag} alt="flag" />
                    </div>
                    <Image src={down} alt="down" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Español</DropdownMenuItem>
                  <DropdownMenuItem>English</DropdownMenuItem>
                  <DropdownMenuItem>Français</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* List Property Link */}
            <div className="rounded-[46px] border border-[#A5D3F1] py-2 px-3 mr-1 hidden lg:flex">
              <a
                href="#"
                className="flex items-center space-x-1 text-[#007DD0] hover:text-[#007DD0] text-[16px] font-normal font-dm"
              >
                <span>List your property</span>
                <Image src={arrowUp} alt="arrowUp" />
              </a>
            </div>
            {/* Notification Bell */}
            <div className="hidden sm:flex cursor-pointer">
              <Image src={message} alt="message" />
            </div>

            {/* User Profile */}
            <div className="hidden sm:flex items-center space-x-2 rounded-[46px] bg-white py-2 px-3 mr-2">
              <Image src={user} alt="user" />
              <span className="text-[16px] font-normal text-[#007DD0]">
                Sunan
              </span>
            </div>
            <MobileResponsive
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            ></MobileResponsive>
          </div>
        </div>
      </div>
    </header>
  );
}
