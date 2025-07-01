"use client"

import { MapPin, Train, ShoppingBag, Utensils, Waves } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import location from "../../public/image/location.png";
import Image from 'next/image';
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
        <h2 className="text-2xl font-semibold text-gray-900">Explore the Area</h2>
      </div>


      <div className="relative">

    

       

        {/* Content */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
           
          >
            {areaData.map((area) => (
              <div key={area.id} className="w-full flex-shrink-0 ">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  {/* Restaurants & Cafes */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Utensils className="w-4 h-4" />
                      <h3 className="font-medium">Restaurants & Cafes</h3>
                    </div>
                    <div className="space-y-2">
                      {area.restaurants.map((restaurant, index) => (
                        <div key={index} className="flex justify-between items-center text-sm">
                          <span className="text-gray-700">{restaurant.name}</span>
                          <span className="text-gray-500">{restaurant.distance}</span>
                        </div>
                      ))}
                    </div>

                    {/* Beaches */}
                    <div className="pt-4">
                      <div className="flex items-center gap-2 text-gray-600 mb-3">
                        <Waves className="w-4 h-4" />
                        <h3 className="font-medium">Beaches</h3>
                      </div>
                      <div className="space-y-2">
                        {area.beaches.map((beach, index) => (
                          <div key={index} className="flex justify-between items-center text-sm">
                            <span className="text-gray-700">{beach.name}</span>
                            <span className="text-gray-500">{beach.distance}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Shops & Markets */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <ShoppingBag className="w-4 h-4" />
                      <h3 className="font-medium">Shops & Markets</h3>
                    </div>
                    <div className="space-y-2">
                      {area.shops.map((shop, index) => (
                        <div key={index} className="flex justify-between items-center text-sm">
                          <span className="text-gray-700">{shop.name}</span>
                          <span className="text-gray-500">{shop.distance}</span>
                        </div>
                      ))}
                    </div>

                    {/* Public Transport */}
                    <div className="pt-4">
                      <div className="flex items-center gap-2 text-gray-600 mb-3">
                        <Train className="w-4 h-4" />
                        <h3 className="font-medium">Public Transport</h3>
                      </div>
                      <div className="space-y-2">
                        {area.transport.map((transport, index) => (
                          <div key={index} className="flex justify-between items-center text-sm">
                            <span className="text-gray-700">{transport.name}</span>
                            <span className="text-gray-500">{transport.distance}</span>
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
                            className="w-full h-full "
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
