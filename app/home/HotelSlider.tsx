import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Info, Users, Bath, Square } from "lucide-react"
import hotel from "../../public/image/gallery/hotel.png";
export default function HotelSlider() {
  const accommodations = Array(8).fill({
    id: 1,
    name: "Sofitel Algiers Hamma Garden",
    description:
      "Escape to our luxurious hotel offering world-class accommodations overlooking the stunning Botanical Garden of Hamma.",
    price: 699,
    currency: "per Night",
    bedrooms: 2,
    bathrooms: 2,
    area: "1200 sq ft",
    image: hotel,
  })

  return (
    <div className="w-full container py-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">You may also like</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {accommodations.map((item, index) => (
          <Card
            key={index}
            className="overflow-hidden border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="relative">
              <Image
                src={item.image}
                alt={item.name}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
            </div>

            <CardContent className="p-4">
              <h3 className="font-semibold text-gray-900 mb-2 line-clamp-1">{item.name}</h3>

              <p className="text-sm text-gray-600 mb-4 line-clamp-3 leading-relaxed">{item.description}</p>

              <div className="mb-4">
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-gray-900">{item.price}</span>
                  <span className="text-sm text-gray-600">{item.currency}</span>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>{item.bedrooms} Bedrooms</span>
                </div>
                <div className="flex items-center gap-1">
                  <Bath className="w-4 h-4" />
                  <span>{item.bathrooms} Bathrooms</span>
                </div>
                <div className="flex items-center gap-1">
                  <Square className="w-4 h-4" />
                  <span>{item.area}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-full">Book Now</Button>
                <Button variant="outline" size="icon" className="rounded-full border-gray-300 bg-transparent">
                  <Info className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
