import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Users, Bed, Home, Snowflake, Bath, Tv, Wifi } from "lucide-react"
import Image from "next/image";
import bed from "../../public/image/table/bed.png";
import bath from "../../public/image/table/bath.png";
import arrow from "../../public/image/table/arrow.png";
import fastWind from "../../public/image/table/fastWind.png";
import room from "../../public/image/table/room.png";
import tv from "../../public/image/table/tv.png";
import wifiSquare from "../../public/image/table/wifiSquare.png";
import user from "../../public/image/table/User.png";
export default function Table() {
  const rooms = [
    {
      id: 1,
      type: "Twin Room",
      beds: "2 single beds",
      size: "1200 sq ft",
      price: "$282",
      check:true,
           amenities: [
        {
         title: "Room", 
         image:room
       
        },
        {
          title:"1200 sq ft",
          image:arrow
          
        },
        {
          title:"Air condition",
          image:fastWind
          
        },
        {
          title: "Bathroom", 
          
          image:bath
          
        },
        {
          title: "TV",
          image:tv
        },
        {
          title: "WiFi",
          image:wifiSquare
        }

      ],
    },
    {
      id: 2,
      type: "Deluxe Double Room",
      beds: "2 single beds",
      size: "1200 sq ft",
      price: "$282",
        check:false,
        amenities: [
        {
         title: "Room", 
         image:room
       
        },
        {
          title:"1200 sq ft",
          image:arrow
          
        },
        {
          title:"Air condition",
          image:fastWind
          
        },
        {
          title: "Bathroom", 
          
          image:bath
          
        },
        {
          title: "TV",
          image:tv
        },
        {
          title: "WiFi",
          image:wifiSquare
        }

      ],
    },
    {
      id: 3,
      type: "Deluxe Double Room",
      beds: "2 single beds",
      size: "1200 sq ft",
      price: "$282",
         check:false,
      amenities: [
        {
         title: "Room", 
         image:room
       
        },
        {
          title:"1200 sq ft",
          image:arrow
          
        },
        {
          title:"Air condition",
          image:fastWind
          
        },
        {
          title: "Bathroom", 
          
          image:bath
          
        },
        {
          title: "TV",
          image:tv
        },
        {
          title: "WiFi",
          image:wifiSquare
        }

      ],

    },
  ]
      console.log( "amenities",room)
  // const getAmenityIcon = (amenity: string) => {
  //   switch (amenity) {
  //     case "Room":
  //       return <Home className="w-4 h-4" />
  //     case "Air condition":
  //       return <Snowflake className="w-4 h-4" />
  //     case "Bathroom":
  //       return <Bath className="w-4 h-4" />
  //     case "TV":
  //       return <Tv className="w-4 h-4" />
  //     case "WiFi":
  //       return <Wifi className="w-4 h-4" />
  //     default:
  //       return null
  //   }
  // }

  return (
    <div className=" mt-4">
    <div className="w-full container overflow-hidden rounded-lg border-none">
      {/* Desktop Table View */}
      <div className="hidden lg:block">
        <table className="w-full">
          <thead>
            <tr className="bg-[#007DD0] text-white">
              <th className="px-4 py-3 text-left text-[16px] font-bold font-dm">Room type</th>
              <th className="px-4 py-3 text-left text-[16px] font-bold font-dm">Number of guests</th>
              <th className="px-4 py-3 text-left text-[16px] font-bold font-dm">Price for 1 week</th>
              <th className="px-4 py-3 text-left text-[16px] font-bold font-dm">Your choices</th>
              <th className="px-4 py-3 text-left text-[16px] font-bold font-dm">Select rooms</th>
              <th className="px-4 py-3 text-left text-[16px] font-bold font-dm">Your choices</th>
            </tr>
          </thead>
          <tbody>
            {rooms.map((room, index) => (
              <tr key={room.id} className="bg-white  md:border-y-2 md:border-[#007DD05C]">
                <td className="px-4 py-4">
                  <div className="space-y-2 md:border-r-2 md:border-[#007DD05C]">
                    <div className="text-[#007DD0] text-[12px] font-bold font-dm">{room.type}</div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                     <span className="text-[12px] font-bold font-dm text-[#252525]"> {room.beds}</span>
                      <Image src={bed} alt="bed"/>
                      <Image src={bed} alt="bed"/>
                    </div>
                    <div className="grid grid-cols-2 gap-1  text-sm text-gray-600">
                      {room?.amenities?.map((amenity, idx) => (
                        <div key={idx} className="flex gap-2 pb-1 ">
                         <Image src={amenity.image} alt="bed"/>  
                         <p className="text-[12px] font-normal font-dm text-[#252525]"> {amenity.title}</p>
                        </div>
                      ))}
                    </div>
               
                  </div>
                </td>



                <td className="px-4 py-4 ">
                <div className="space-y-2 md:border-r-2 md:border-[#007DD05C]">
                    <div className="flex gap-1 ">
                      <Image src={user} alt="user"/>  
                      <Image src={user} alt="user"/>  
                  </div>
                    <div className="h-[100px] ">
                     
                      </div>

                  </div>
                </td>


                <td className="px-4 py-4 ">
         <div className="space-y-2 md:border-r-2 md:border-[#007DD05C]">
                   <div className="text-xl font-semibold">{room.price}</div>
                       <div className="h-[100px] "></div>
          </div>

                </td>
                <td className="px-4 py-4">
                  <div className="space-y-1 md:border-r-2 md:border-[#007DD05C]">
                    <div className="text-sm">Breakfast included</div>
                    <div className="text-red-500 text-sm font-medium">Only 4 rooms left</div>
                        <div className="h-[90px] "></div>
                  </div>
                </td>

                {
                  room?.check === true ? (
                             <td className="px-4 py-4">
            <div className="space-y-1 md:border-r-2 md:border-[#007DD05C]">
                  <div >
                    <Select defaultValue="0">
                    <SelectTrigger className="w-16 rounded-[42px]">
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
              <div className="h-[90px] "></div>
              </div>
                </td>
                  ): (
                    <></>
                  )
                }

                {
                  room?.check === true ? (
               <td className="px-4 py-4">
 
                   <Button className="bg-[#007DD0] hover:bg-[#007DD0] w-full rounded-[24.2px] text-white px-6 py-1 font-normal text-[14px]">Reserve</Button>
   
                     <div className="h-[90px] "></div>
                </td>
                  ): (
                    <></>
                  )
                }
       
             
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
          {rooms.map((room) => (
            <div key={room.id} className="p-4 space-y-4">
              <div className="space-y-2">
                <h3 className="text-blue-600 font-medium text-lg">{room.type}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Bed className="w-4 h-4" />
                  {room.beds}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">
                    {room?.amenities?.map((amenity, idx) => (
                        <div key={idx} className="flex gap-2 pb-1">
                  
                         <Image src={amenity.image} alt="bed"/>
                         <p className="text-[12px] font-normal font-dm text-[#252525]"> {amenity.title}</p>
   
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
                <Button className="bg-[#007DD0] hover:bg-[#007DD0] text-white px-6">Reserve</Button>
              </div>
            </div>
          ))}
        </div>
      </div>


             

    </div>
     </div>
  )
}
