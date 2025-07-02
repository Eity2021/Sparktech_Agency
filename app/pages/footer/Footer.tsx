"use client";
import { useState } from "react";
import {  Phone, Mail} from "lucide-react";
import Image from "next/image";
import bottomLogo from "../../../public/image/bottomLogo.png";
import fb from "../../../public/image/socialMedia/logo-fb.png";
import github from "../../../public/image/socialMedia/logo-github.png";
import instagram from "../../../public/image/socialMedia/logo-instagram.png";
import twitter from "../../../public/image/socialMedia/logo-twitter.png";
import location from "../../../public/image/socialMedia/location.png";
import apple from "../../../public/image/socialMedia/apple.png";
import playStore from "../../../public/image/socialMedia/play-store.png";
export default function Footer() {
  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "Hotels", href: "/hotel" },
    { name: "Deals", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <div className="bg-[#00548C] text-white py-18 rounded-b-[42px] w-full">
      <div className=" md:container mx-auto  px-4">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <div className="lg:border-r lg:border-[#C8C8C8] ">
            <div className="flex items-center space-x-4">
              <Image src={bottomLogo} alt="bottomLogo" />
            </div>

            <div>
              <p className="font-normal text-[12px] text-white  font-dm lg:w-[440px] w-[300px]  mt-3">
                [App Name] makes booking your next stay easy, affordable, and
                stress-free. With thousands of hotels worldwide, exclusive
                deals, and secure payment options, we’re here to help you find
                the perfect place to stay, every time.
              </p>
            </div>

            <div className="flex gap-5 my-6">
              <Image src={fb} alt="fb" />
              <Image src={github} alt="github" />
              <Image src={instagram} alt="instagram" />
              <Image src={twitter} alt="twitter" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <div className="">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    className="font-normal text-[16px] text-white font-dm transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </div>
              ))}
            </div>

            <div>
              <div className="">
                <div className="text-right">
                  <div className="flex items-center space-x-2 font-normal text-[13px] text-white font-dm">
                    <Phone className="w-4 h-4" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-2 font-normal text-[13px] text-white font-dm mt-1">
                    <Mail className="w-4 h-4" />
                    <span>support@yourcompany.com</span>
                  </div>
                </div>

                <div className="flex gap-5 items-center mt-8">
                  <span className="font-normal text-[18px] text-white font-dm">
                    Download Our App
                  </span>
                  <div className="flex space-x-2">
                    <Image src={playStore} alt="playStore" />
                    <Image src={apple} alt="apple" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="py-3  md:flex block justify-between">
          <div className="flex gap-2 text-xs">
            <Image src={location} alt="location" />
            <div className="mt-2 sm:mt-0 flex items-center font-normal text-[13px] text-white">
              <span>123 Travel St, Suite 100, City, Country</span>
            </div>
          </div>
          <p className="font-normal text-[13px] text-white">
            2023. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}
