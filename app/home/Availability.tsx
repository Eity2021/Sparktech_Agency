"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarIcon, Users, Search } from "lucide-react"
import { format } from "date-fns"

export default function Availability() {
    const [checkIn, setCheckIn] = useState<Date>()
    const [checkOut, setCheckOut] = useState<Date>()
    const [adults, setAdults] = useState("2")
    const [children, setChildren] = useState("0")
    const [rooms, setRooms] = useState("1")
    return (
        <div className="w-full container p-4 sm:p-6">
            <div className="bg-white rounded-lg shadow-sm border p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">Availability</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-3">
                    {/* Check-in Date */}
                    <div className="space-y-2">
                        <Label htmlFor="checkin" className="text-sm font-medium text-gray-700">
                            Check-in
                        </Label>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    className="w-full justify-start text-left font-normal h-12 px-4 bg-transparent"
                                    id="checkin"
                                >
                                    <CalendarIcon className="mr-2 h-4 w-4 text-blue-500" />
                                    {checkIn ? format(checkIn, "EEE dd MMMM yyyy") : <span className="text-gray-500">Select date</span>}
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
                        <Label htmlFor="checkout" className="text-sm font-medium text-gray-700">
                            Check-out
                        </Label>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    className="w-full justify-start text-left font-normal h-12 px-4 bg-transparent"
                                    id="checkout"
                                >
                                    <CalendarIcon className="mr-2 h-4 w-4 text-blue-500" />
                                    {checkOut ? format(checkOut, "EEE dd MMMM yyyy") : <span className="text-gray-500">Select date</span>}
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
                        <Label htmlFor="guests" className="text-sm font-medium text-gray-700">
                            Guests
                        </Label>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    className="w-full justify-start text-left font-normal h-12 px-4 bg-transparent"
                                    id="guests"
                                >
                                    <Users className="mr-2 h-4 w-4 text-blue-500" />
                                    <span className="truncate">
                                        {adults} Adults - {children} Children - {rooms} Room
                                    </span>
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-80" align="start">
                                <div className="space-y-4 p-2">
                                    <div className="flex items-center justify-between">
                                        <Label className="text-sm font-medium">Adults</Label>
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
                                        <Label className="text-sm font-medium">Rooms</Label>
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
                    <div className="space-y-2 sm:col-span-2 lg:col-span-1">
                        <Label className="text-sm font-medium text-transparent">Search</Label>
                        <Button
                            className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium"
                            onClick={() => {
                                console.log("Search clicked", { checkIn, checkOut, adults, children, rooms })
                            }}
                        >
                            <Search className="mr-2 h-4 w-4" />
                            Search
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
