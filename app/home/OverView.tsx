"use client"
import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image";
import elements from "../../public/image/elements.png";
import house from "../../public/image/house-2.png";
import home from "../../public/image/home.png";
import restaurant from "../../public/image/restaurant.png";
import wifi from "../../public/image/wifi-square.png";
import swimming from "../../public/image/swimming.png";
import airConditioner from "../../public/image/air-conditioner.png";
import dumbbell from "../../public/image/dumbbell.png";
interface PropertyDetailsProps {
  propertyType?: string
  rating?: string
  area?: string
  features?: Array<{
    name: string
    icon: React.ReactNode
  }>
  bookingDetails?: {
    duration: string
    guests: string
    price: string
  }
}

export default function OverView({
  propertyType = "Property Type",
  rating = "Resorts",
  area = "2000 sqft",
  features = [
    { name: "Wifi", icon: <Image src={wifi} alt="wifi"/> },
    { name: "Dining", icon: <Image src={restaurant} alt="restaurant"/> },
    { name: "Swimming Pool", icon: <Image src={swimming} alt="swimming"/>},
    { name: "Air Conditioning",icon: <Image src={airConditioner} alt="airConditioner"/> },
    { name: "Gym", icon:<Image src={dumbbell} alt="dumbbell"/> },
  ],
  bookingDetails = {
    duration: "1 week, 2 adults, 1 child",
    guests: "1 week, 2 adults, 1 child",
    price: "USD $6,112",
  },
}: PropertyDetailsProps) {
  const [activeTab, setActiveTab] = useState("Over View")

  const tabs = ["Over View", "Features", "Reviews"]

  return (
 <div className="w-full md:container mx-auto pt-8 pb-12">

        <div className="">
          {/* Navigation Tabs */}


       <div className="sm:gap-6 mb-8 sm:mb-8 pb-4 md:flex block">
           <div className="flex  flex-wrap gap-2  md:mb-0 mb-4">
            {tabs.map((tab) => (
                 <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-2 text-[16px] font-dm  transition-colors ${
                  activeTab === tab ? "text-[#007DD0] border-b-2 border-[#007DD0] font-medium " : "text-[#626262] font-normal "
                }`}
              >
                {tab}
               
              </button>
            ))}
          </div>

             <div className="bg-[#007DD0] flex gap-2 items-center px-[10px] w-[110px] h-[32px] rounded-[20px] cursor-pointer">
             <div>
                  <Image src={elements} alt="" />
             </div>
                 <p className="text-[14px] font-normal font-dm text-[#fff]">Message</p>
                </div>

       </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Property Type Section */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
          
                    <p className="text-[#252525] text-[18px] font-semibold font-urbanist">{propertyType}</p>
                  </div>
                  <div>
              
                    <p className="text-[#252525] text-[18px] font-semibold font-urbanist">{propertyType}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <div className="rounded-[7px] w-[36px] h-[36px] border border-[#EDEDF2] flex justify-center items-center">
                      <Image src={house} alt="house" />
                    </div>
                    <span className="text-[#010101] font-normal text-[16px]">{rating}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="rounded-[7px] w-[36px] h-[36px] border border-[#EDEDF2] flex justify-center items-center">

                  <Image src={home} alt="home" />
                    </div>
                    <span className="text-[#010101] font-normal text-[16px]">{area}</span>
                  </div>
                </div>
              </div>

              {/* Features Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Features</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-1 "
                    >
                      <div className="rounded-[7px] w-[36px] h-[36px] border border-[#EDEDF2] flex justify-center items-center">{feature.icon}</div>
                      <span className="text-[#010101] font-normal text-[16px]">{feature.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar - Booking Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white border border-[#A3D0EE]  md:w-[268px] h-[240px] w-full flex items-center justify-center rounded-[12px] shadow-sm" >
                <div className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-[#000] font-normal text-[16px]">{bookingDetails.guests}</p>
                    <p className="text-[18px] sm:text-[20px] font-bold text-[#000] ">{bookingDetails.price}</p>
                  </div>

                  <Button
                    className="w-full bg-[#007DD0] hover:bg-[#007DD0] text-white font-medium py-3 rounded-[24.2px]"
                    size="lg"
                  >
                    Reserve
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
   
    </div>
  )
}
