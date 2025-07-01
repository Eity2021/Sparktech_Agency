import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Users, Bed, Home, Snowflake, Bath, Tv, Wifi } from "lucide-react"

export default function Table() {
  const rooms = [
    {
      id: 1,
      type: "Twin Room",
      beds: "2 single beds",
      size: "1200 sq ft",
      price: "$282",
      amenities: ["Room", "Air condition", "Bathroom", "TV", "WiFi"],
    },
    {
      id: 2,
      type: "Deluxe Double Room",
      beds: "2 single beds",
      size: "1200 sq ft",
      price: "$282",
      amenities: ["Room", "Air condition", "Bathroom", "TV", "WiFi"],
    },
    {
      id: 3,
      type: "Deluxe Double Room",
      beds: "2 single beds",
      size: "1200 sq ft",
      price: "$282",
      amenities: ["Room", "Air condition", "Bathroom", "TV", "WiFi"],
    },
  ]

  const getAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case "Room":
        return <Home className="w-4 h-4" />
      case "Air condition":
        return <Snowflake className="w-4 h-4" />
      case "Bathroom":
        return <Bath className="w-4 h-4" />
      case "TV":
        return <Tv className="w-4 h-4" />
      case "WiFi":
        return <Wifi className="w-4 h-4" />
      default:
        return null
    }
  }

  return (
    <div className="w-full container overflow-hidden rounded-lg border">
      {/* Desktop Table View */}
      <div className="hidden lg:block">
        <table className="w-full">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="px-4 py-3 text-left font-medium">Room type</th>
              <th className="px-4 py-3 text-left font-medium">Number of guests</th>
              <th className="px-4 py-3 text-left font-medium">Price for 1 week</th>
              <th className="px-4 py-3 text-left font-medium">Your choices</th>
              <th className="px-4 py-3 text-left font-medium">Select rooms</th>
              <th className="px-4 py-3 text-left font-medium">Your choices</th>
            </tr>
          </thead>
          <tbody>
            {rooms.map((room, index) => (
              <tr key={room.id} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                <td className="px-4 py-4">
                  <div className="space-y-2">
                    <div className="text-blue-600 font-medium">{room.type}</div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Bed className="w-4 h-4" />
                      {room.beds}
                    </div>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                      {room.amenities.map((amenity, idx) => (
                        <div key={idx} className="flex items-center gap-1">
                          {getAmenityIcon(amenity)}
                          <span>{amenity}</span>
                        </div>
                      ))}
                    </div>
                    <div className="text-sm text-gray-600">{room.size}</div>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-1">
                    <Users className="w-5 h-5 text-gray-600" />
                    <Users className="w-5 h-5 text-gray-600" />
                  </div>
                </td>
                <td className="px-4 py-4">
                  <div className="text-xl font-semibold">{room.price}</div>
                </td>
                <td className="px-4 py-4">
                  <div className="space-y-1">
                    <div className="text-sm">Breakfast included</div>
                    <div className="text-red-500 text-sm font-medium">Only 4 rooms left</div>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <Select defaultValue="0">
                    <SelectTrigger className="w-16">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">0</SelectItem>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                    </SelectContent>
                  </Select>
                </td>
                <td className="px-4 py-4">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">Reserve</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="lg:hidden">
        <div className="bg-blue-600 text-white p-4">
          <h2 className="font-medium text-lg">Room Selection</h2>
        </div>
        <div className="divide-y">
          {rooms.map((room, index) => (
            <div key={room.id} className="p-4 space-y-4">
              <div className="space-y-2">
                <h3 className="text-blue-600 font-medium text-lg">{room.type}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Bed className="w-4 h-4" />
                  {room.beds}
                </div>
                <div className="text-sm text-gray-600">{room.size}</div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">
                {room.amenities.map((amenity, idx) => (
                  <div key={idx} className="flex items-center gap-1">
                    {getAmenityIcon(amenity)}
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Guests:</span>
                <Users className="w-5 h-5 text-gray-600" />
                <Users className="w-5 h-5 text-gray-600" />
              </div>

              <div className="space-y-2">
                <div className="text-2xl font-semibold">{room.price}</div>
                <div className="text-sm">Breakfast included</div>
                <div className="text-red-500 text-sm font-medium">Only 4 rooms left</div>
              </div>

              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm">Rooms:</span>
                  <Select defaultValue="0">
                    <SelectTrigger className="w-16">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">0</SelectItem>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">Reserve</Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tablet View */}
      <div className="hidden md:block lg:hidden">
        <div className="bg-blue-600 text-white p-4">
          <div className="grid grid-cols-4 gap-4 font-medium">
            <div>Room Details</div>
            <div>Price & Guests</div>
            <div>Availability</div>
            <div>Action</div>
          </div>
        </div>
        <div className="divide-y">
          {rooms.map((room, index) => (
            <div key={room.id} className={`p-4 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
              <div className="grid grid-cols-4 gap-4 items-center">
                <div className="space-y-2">
                  <div className="text-blue-600 font-medium">{room.type}</div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Bed className="w-4 h-4" />
                    {room.beds}
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                    {room.amenities.slice(0, 4).map((amenity, idx) => (
                      <div key={idx} className="flex items-center gap-1">
                        {getAmenityIcon(amenity)}
                        <span className="truncate">{amenity}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-sm text-gray-600">{room.size}</div>
                </div>

                <div className="space-y-2">
                  <div className="text-xl font-semibold">{room.price}</div>
                  <div className="flex items-center gap-1">
                    <Users className="w-5 h-5 text-gray-600" />
                    <Users className="w-5 h-5 text-gray-600" />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="text-sm">Breakfast included</div>
                  <div className="text-red-500 text-sm font-medium">Only 4 rooms left</div>
                  <Select defaultValue="0">
                    <SelectTrigger className="w-16">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">0</SelectItem>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 w-full">Reserve</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
