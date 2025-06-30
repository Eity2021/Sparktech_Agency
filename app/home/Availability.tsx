"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarIcon, Users } from "lucide-react"
import { format } from "date-fns"
import calender from "../../public/image/calender.png";
import room from "../../public/image/room.png";
import Image from 'next/image';
export default function Availability() {
    const [checkIn, setCheckIn] = useState<Date>()
    const [checkOut, setCheckOut] = useState<Date>()
    const [adults, setAdults] = useState("2")
    const [children, setChildren] = useState("0")
    const [rooms, setRooms] = useState("1")
    return (
        <div className="w-full container p-4 sm:p-6">
            <h2 className="text-[20px]  font-bold text-[#000000] mb-4 sm:mb-6">Availability</h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 w-full">

                <div className="col-span-2">
                    <div className="bg-white rounded-lg shadow-sm border p-4 sm:p-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-3">
                            {/* Check-in Date */}
                            <div className="space-y-2">
                                <Label htmlFor="checkin" className="text-[13px] font-medium text_color">
                                    Check-in
                                </Label>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant="outline"
                                            className="w-full justify-start text-left font-normal h-12 px-4 bg-[#F6F6F6] rounded-[28px] border-none"
                                            id="checkin"
                                        >
                                            <Image src={calender} alt="calender" />
                                            {checkIn ? format(checkIn, "EEE dd MMMM yyyy") : <span className="text-[#252525] text-[13px] font-medium">Select date</span>}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            mode="single"
                                            selected={checkIn}
                                            onSelect={setCheckIn}
                                            disabled={(date) => date < new Date()}
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>

                            {/* Check-out Date */}
                            <div className="space-y-2">
                                <Label htmlFor="checkout" className="text-[13px] font-medium text_color">
                                    Check-out
                                </Label>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant="outline"
                                            className="w-full justify-start text-left font-normal h-12 px-4 bg-[#F6F6F6] rounded-[28px] border-none"
                                            id="checkout"
                                        >
                                            <Image src={calender} alt="calender" />
                                            {checkOut ? format(checkOut, "EEE dd MMMM yyyy") : <span className="text-[#252525] text-[13px] font-medium">Select date</span>}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            mode="single"
                                            selected={checkOut}
                                            onSelect={setCheckOut}
                                            disabled={(date) => date < new Date() || (checkIn && date <= checkIn)}
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>

                            {/* Guests */}
                            <div className="space-y-2">
                                <Label htmlFor="guests" className="text-[13px] font-medium text_color">
                                    Guests
                                </Label>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant="outline"
                                            className="w-full justify-start text-left font-normal h-12 px-4 bg-[#F6F6F6] rounded-[28px] border-none "
                                            id="guests"
                                        >
                                            <Image src={room} alt="room" />
                                            <span className="text-[#252525] text-[13px] font-medium ">
                                                {adults} Adults - {children} Children - {rooms} Room
                                            </span>
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-80" align="start">
                                        <div className="space-y-4 p-2">
                                            <div className="flex items-center justify-between">
                                                <Label className="text-[#252525] text-[13px] font-medium">Adults</Label>
                                                <Select value={adults} onValueChange={setAdults}>
                                                    <SelectTrigger className="w-20">
                                                        <SelectValue />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {[1, 2, 3, 4, 5, 6].map((num) => (
                                                            <SelectItem key={num} value={num.toString()}>
                                                                {num}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <Label className="text-sm font-medium">Children</Label>
                                                <Select value={children} onValueChange={setChildren}>
                                                    <SelectTrigger className="w-20">
                                                        <SelectValue />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {[0, 1, 2, 3, 4].map((num) => (
                                                            <SelectItem key={num} value={num.toString()}>
                                                                {num}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <Label className="text-sm font-medium">Room & Guest</Label>
                                                <Select value={rooms} onValueChange={setRooms}>
                                                    <SelectTrigger className="w-20">
                                                        <SelectValue />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {[1, 2, 3, 4].map((num) => (
                                                            <SelectItem key={num} value={num.toString()}>
                                                                {num}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>
                                    </PopoverContent>
                                </Popover>
                            </div>

                            {/* Search Button */}
                            <div className="space-y-2 sm:col-span-2 lg:col-span-1 mt-2 ml-8">
                                <Label className="text-sm font-medium text-transparent">Search</Label>
                                <Button
                                    className="md:w-[116px] h-[32px]  w-[200px]  button_color hover:button_color text-white font-normal fontSize-[13px] rounded-[24px] p-[7px]"
                                    onClick={() => {
                                        console.log("Search clicked", { checkIn, checkOut, adults, children, rooms })
                                    }}
                                >
                                    Search
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    )
}
