import Image from "next/image"
import { Button } from "@/components/ui/button"
import {CardContent } from "@/components/ui/card"
import { Info} from "lucide-react"
import hotel from "../../public/image/gallery/hotel.png";
import room from "../../public/image/table/room.png";
import bath from "../../public/image/table/bath.png";
import arrow from "../../public/image/table/arrow.png";
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
    area: "1200 ",
    image: hotel,
  })

  return (
    <div className="w-full md:container mx-auto py-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">You may also like</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {accommodations.map((item, index) => (
          <div
            key={index}
            className="overflow-hidden  border-none rounded-lg  transition-shadow"
          >
            <div className="relative">
              <Image
                src={item.image}
                alt={item.name}

                className="w-full object-cover rounded-[30px]"
              />
            </div>

            <CardContent className="p-4">
              <h3 className="text-[20px] font-600 font-dm text-[#252525] mb-2 line-clamp-1">{item.name}</h3>

              <p className="text-[12px] font-300 font-dm text-[#626262] mb-4 line-clamp-3 leading-relaxed">{item.description}</p>

              <div className="mb-4">
                <div className="flex items-baseline gap-1">
                  <span className=" text-[18px] font-normal font-dm text-[#000]">{item.price}</span>
                  <span className=" text-[10px] font-normal font-dm text-[#000]">{item.currency}</span>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  {/* <Users className="w-4 h-4" /> */}
                    <Image src={room} alt="room"/>
                  <span className=" text-[14px] font-normal font-dm text-[#252525]">{item.bedrooms} <span className="text-[10px] font-normal font-dm text-[#252525]">Bedrooms</span></span>
                </div>
                <div className="flex items-center gap-1">
                    <Image src={bath} alt="bath"/>
                  <span className=" text-[14px] font-normal font-dm text-[#252525]">{item.bathrooms} <span className="text-[10px] font-normal font-dm text-[#252525]">Bathrooms</span></span>
                </div>
                <div className="flex items-center gap-1">
                    <Image src={arrow} alt="arrow"/>
                  <span className=" text-[14px] font-normal font-dm text-[#252525]">{item.area} <span className="text-[10px] font-normal font-dm text-[#252525]">sq ft</span></span>
                </div>
              </div>

              <div className="flex justify-between gap-2">

                <div className="h-[46px] w-[245px] rounded-[35px] bg-[#007DD0] hover:bg-[#007DD0] cursor-pointer  flex justify-center items-center">
                  <p className="  text-white  text-[20px] font-semibold font-dm  flex justify-center items-center">Book Now</p>
                </div>

                <Button variant="outline" size="icon" className="rounded-full w-[46px] h-[46px] border-none bg-[#007DD01A] ">
                  <Info className="w-4 h-4" color="#007DD0"/>
                </Button>
              </div>
            </CardContent>
          </div>
        ))}
      </div>
    </div>
  )
}
