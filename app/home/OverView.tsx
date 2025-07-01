"use client"
import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Wifi, UtensilsCrossed, Waves, Snowflake, Dumbbell, Star, MapPin } from "lucide-react"

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
    { name: "Wifi", icon: <Wifi className="h-4 w-4" /> },
    { name: "Dining", icon: <UtensilsCrossed className="h-4 w-4" /> },
    { name: "Swimming Pool", icon: <Waves className="h-4 w-4" /> },
    { name: "Air Conditioning", icon: <Snowflake className="h-4 w-4" /> },
    { name: "Gym", icon: <Dumbbell className="h-4 w-4" /> },
  ],
  bookingDetails = {
    duration: "1 week, 2 adults, 1 child",
    guests: "1 week, 2 adults, 1 child",
    price: "USD $6,112",
  },
}: PropertyDetailsProps) {
  const [activeTab, setActiveTab] = useState("Guarantee")

  const tabs = ["Over View", "Features", "Reviews", "Guarantee"]

  return (
 <div className="w-full container pt-4">

        <div className="">
          {/* Navigation Tabs */}
          <div className="flex flex-wrap gap-2 sm:gap-6 mb-6 sm:mb-8 border-b border-gray-100 pb-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-2 text-sm sm:text-base font-medium transition-colors ${
                  activeTab === tab ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Property Type Section */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-2">Property Type</h3>
                    <p className="text-gray-900 font-medium">{propertyType}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-2">Property Type</h3>
                    <p className="text-gray-900 font-medium">{propertyType}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-gray-900 font-medium">{rating}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-900 font-medium">{area}</span>
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
                      className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:border-gray-200 transition-colors"
                    >
                      <div className="text-blue-600">{feature.icon}</div>
                      <span className="text-gray-900 font-medium text-sm">{feature.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar - Booking Summary */}
            <div className="lg:col-span-1">
              <Card className="bg-gray-50 border-gray-200 p-4 sm:p-6 sticky top-4">
                <div className="space-y-4">
                  <div className="text-center space-y-2">
                    <p className="text-sm text-gray-600">{bookingDetails.guests}</p>
                    <p className="text-2xl sm:text-3xl font-bold text-gray-900">{bookingDetails.price}</p>
                  </div>

                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg"
                    size="lg"
                  >
                    Reserve
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
   
    </div>
  )
}
