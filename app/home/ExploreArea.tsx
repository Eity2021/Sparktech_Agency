"use client"

import { Train, ShoppingBag, Utensils, Waves } from "lucide-react"
import { CardContent } from "@/components/ui/card"
import location from "../../public/image/location.png";
import Image from 'next/image';
import beach from "../../public/image/area/beach.png";
import bus from "../../public/image/area/bus.png";
import cafe from "../../public/image/area/cafe.png";
import shop from "../../public/image/area/shop.png";
const areaData = [
  {
    id: 1,
    restaurants: [
      { name: "Blue Cafe", distance: "1.4 km" },
      { name: "Blue Sea", distance: "1.4 km" },
      { name: "Blue Sea", distance: "1.4 km" },
    ],
    beaches: [
      { name: "Les Dunes Beach", distance: "1.4 km" },
      { name: "Les Dunes Beach", distance: "1.4 km" },
      { name: "Les Dunes Beach", distance: "1.4 km" },
    ],
    shops: [
      { name: "Central Mall", distance: "4 km" },
      { name: "Central Mall", distance: "1.4 km" },
      { name: "Central Mall", distance: "1.4 km" },
    ],
    transport: [
      { name: "Train - Riverside Central Station", distance: "1.4 km" },
      { name: "Metro - Central Station", distance: "1.4 km" },
      { name: "Metro - Chylou Metro Hub", distance: "1.4 km" },
    ],
    mapImage: "/placeholder.svg?height=200&width=300",
    hotelName: "Hotel Saint Eugene",
    landmarks: ["CHU Lamine Debaghine", "Bab El Oued"],
  },
  {
    id: 2,
    restaurants: [
      { name: "Ocean View Restaurant", distance: "0.8 km" },
      { name: "Mediterranean Bistro", distance: "1.2 km" },
      { name: "Coastal Dining", distance: "2.1 km" },
    ],
    beaches: [
      { name: "Golden Sands Beach", distance: "0.5 km" },
      { name: "Crystal Bay", distance: "1.8 km" },
      { name: "Sunset Beach", distance: "2.3 km" },
    ],
    shops: [
      { name: "Marina Shopping Center", distance: "1.1 km" },
      { name: "Seaside Market", distance: "0.9 km" },
      { name: "Harbor Plaza", distance: "2.5 km" },
    ],
    transport: [
      { name: "Bus - Marina Terminal", distance: "0.7 km" },
      { name: "Metro - Seaside Station", distance: "1.3 km" },
      { name: "Taxi Stand - Hotel Plaza", distance: "0.2 km" },
    ],
    mapImage: "/placeholder.svg?height=200&width=300",
    hotelName: "Marina Resort",
    landmarks: ["Port Authority", "Lighthouse Point"],
  },
  {
    id: 3,
    restaurants: [
      { name: "Mountain View Cafe", distance: "2.1 km" },
      { name: "Alpine Restaurant", distance: "1.7 km" },
      { name: "Summit Dining", distance: "3.2 km" },
    ],
    beaches: [
      { name: "Lake Shore", distance: "4.5 km" },
      { name: "River Beach", distance: "3.8 km" },
      { name: "Pebble Cove", distance: "5.1 km" },
    ],
    shops: [
      { name: "Valley Mall", distance: "2.8 km" },
      { name: "Mountain Market", distance: "1.9 km" },
      { name: "Highland Center", distance: "3.5 km" },
    ],
    transport: [
      { name: "Cable Car Station", distance: "1.2 km" },
      { name: "Bus - Valley Route", distance: "0.8 km" },
      { name: "Train - Mountain Express", distance: "2.4 km" },
    ],
    mapImage: "/placeholder.svg?height=200&width=300",
    hotelName: "Mountain Lodge",
    landmarks: ["Scenic Overlook", "Adventure Park"],
  },
]

export function ExploreArea() {


  return (
    <div className="w-full container px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-[20px] font-bold text-[#252525">Explore the Area</h2>
      </div>
      <div className="relative">
        {/* Content */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out">
            {areaData.map((area) => (
              <div key={area.id} className="w-full flex-shrink-0 ">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  {/* Restaurants & Cafes */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Image src={cafe} alt="cafe" />
                      <h3 className="font-normal text-[16px] text-[#252525] font-dm">Restaurants & Cafes</h3>
                    </div>
                    <div className="space-y-2">
                      {area.restaurants.map((restaurant, index) => (
                        <div key={index} className="flex justify-between items-center text-sm">
                          <span className="font-normal text-[12px] text-[#757575] font-dm">{restaurant.name}</span>
                          <span className="font-normal text-[12px] text-[#757575] font-dm">{restaurant.distance}</span>
                        </div>
                      ))}
                    </div>

                    {/* Beaches */}
                    <div className="pt-4">
                      <div className="flex items-center gap-2 text-gray-600 mb-3">

                          <Image src={beach} alt="beach" />
                        <h3 className="font-normal text-[16px] text-[#252525] font-dm">Beaches</h3>
                      </div>
                      <div className="space-y-2">
                        {area.beaches.map((beach, index) => (
                          <div key={index} className="flex justify-between items-center text-sm">
                            <span className="font-normal text-[12px] text-[#757575] font-dm">{beach.name}</span>
                            <span className="font-normal text-[12px] text-[#757575] font-dm">{beach.distance}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Shops & Markets */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Image src={shop} alt="shop" />
                      <h3 className="font-normal text-[16px] text-[#252525] font-dm">Shops & Markets</h3>
                    </div>
                    <div className="space-y-2">
                      {area.shops.map((shop, index) => (
                        <div key={index} className="flex justify-between items-center text-sm">
                          <span className="font-normal text-[12px] text-[#757575] font-dm">{shop.name}</span>
                          <span className="font-normal text-[12px] text-[#757575] font-dm">{shop.distance}</span>
                        </div>
                      ))}
                    </div>

                    {/* Public Transport */}
                    <div className="pt-4">
                      <div className="flex items-center gap-2 text-gray-600 mb-3">
                         <Image src={bus} alt="bus" />
                        <h3 className="font-normal text-[16px] text-[#252525]">Public Transport</h3>
                      </div>
                      <div className="space-y-2">
                        {area.transport.map((transport, index) => (
                          <div key={index} className="flex justify-between items-center text-sm">
                            <span className="font-normal text-[12px] text-[#757575] font-dm">{transport.name}</span>
                            <span className="font-normal text-[12px] text-[#757575] font-dm">{transport.distance}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Map Section */}
                  <div className="lg:col-span-2">
         
                        <div className="relative">
                          <Image
                            src={location}
                            alt="location"
                            className="w-[100%] h-[100%] "
                          />
                        </div>
                      <CardContent className="text-center py-[12px] border rounded-b-lg">
                        <p>
                          Explore the Area
                        </p>
                      </CardContent>
                  
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      
      </div>
    </div>
  )
}
