import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Users, Bed, Home, Snowflake, Bath, Tv, Wifi } from "lucide-react";
import Image from "next/image";
import bed from "../../public/image/table/bed.png";
import bath from "../../public/image/table/bath.png";
import arrow from "../../public/image/table/arrow.png";
import fastWind from "../../public/image/table/fastWind.png";
import room from "../../public/image/table/room.png";
import tv from "../../public/image/table/tv.png";
import wifiSquare from "../../public/image/table/wifiSquare.png";
import user from "../../public/image/table/User.png";
export default function TableMobileResponsive() {
  const rooms = [
    {
      id: 1,
      type: "Twin Room",
      beds: "2 single beds",
      size: "1200 sq ft",
      price: "$282",
      check: true,
      amenities: [
        {
          title: "Room",
          image: room,
        },
        {
          title: "1200 sq ft",
          image: arrow,
        },
        {
          title: "Air condition",
          image: fastWind,
        },
        {
          title: "Bathroom",

          image: bath,
        },
        {
          title: "TV",
          image: tv,
        },
        {
          title: "WiFi",
          image: wifiSquare,
        },
      ],
    },
    {
      id: 2,
      type: "Deluxe Double Room",
      beds: "2 single beds",
      size: "1200 sq ft",
      price: "$282",
      check: false,
      amenities: [
        {
          title: "Room",
          image: room,
        },
        {
          title: "1200 sq ft",
          image: arrow,
        },
        {
          title: "Air condition",
          image: fastWind,
        },
        {
          title: "Bathroom",

          image: bath,
        },
        {
          title: "TV",
          image: tv,
        },
        {
          title: "WiFi",
          image: wifiSquare,
        },
      ],
    },
    {
      id: 3,
      type: "Deluxe Double Room",
      beds: "2 single beds",
      size: "1200 sq ft",
      price: "$282",
      check: false,
      amenities: [
        {
          title: "Room",
          image: room,
        },
        {
          title: "1200 sq ft",
          image: arrow,
        },
        {
          title: "Air condition",
          image: fastWind,
        },
        {
          title: "Bathroom",

          image: bath,
        },
        {
          title: "TV",
          image: tv,
        },
        {
          title: "WiFi",
          image: wifiSquare,
        },
      ],
    },
  ];

  return (
    <div className=" mt-4">
      {/* Mobile Card View */}
      <div className="lg:hidden">
        <div className="bg-[#007DD0] text-white p-4">
          <h2 className="text-left text-[16px] font-bold font-dm">Room Selection</h2>
        </div>
        <div className="divide-y">
          {rooms.map((room) => (
            <div key={room.id} className="p-4 space-y-4">
              <div className="space-y-2">
                <h3 className="text-blue-600 font-medium text-lg">
                  {room.type}
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                     <span className="text-[12px] font-bold font-dm text-[#252525]"> {room.beds}</span>
                      <Image src={bed} alt="bed"/>
                      <Image src={bed} alt="bed"/>
                    </div>
              </div>

                <div className="grid grid-cols-2 gap-1  text-sm text-gray-600">
                      {room?.amenities?.map((amenity, idx) => (
                        <div key={idx} className="flex gap-2 pb-1 ">
                         <Image src={amenity.image} alt="bed"/>  
                         <p className="text-[12px] font-normal font-dm text-[#252525]"> {amenity.title}</p>
                        </div>
                      ))}
                    </div>

              <div className="flex items-center gap-2">
                <span className="text-[12px] font-normal font-dm text-[#252525]">Guests:</span>
                  <div className="flex gap-1 ">
                      <Image src={user} alt="user"/>  
                      <Image src={user} alt="user"/>  
                  </div>
              </div>

              <div className="space-y-2">
                <div  className="text-[20px] font-bold font-dm text-[#00000]">{room.price}</div>
                <div className="text-[16px] font-normal font-dm text-[#252525]">Breakfast included</div>
                <div className="text-[16px] font-normal font-dm text-[#FE0D05]">
                  Only 4 rooms left
                </div>
              </div>

              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-[16px] font-normal font-dm text-[#252525]">Rooms:</span>
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
                <Button className="bg-[#007DD0] hover:bg-[#007DD0] text-white px-6">
                  Reserve
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
