"use client"

import { useState, useEffect } from "react"
import { MoveLeft, MoveRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CardContent } from "@/components/ui/card"
import star from "../../public/image/star.png";
import Image from "next/image"
const testimonials = [
  {
    id: 1,
    title: "Breathtaking Views and Luxury Comfort",
    content:
      "We were absolutely thrilled with our accommodation! The five-star-rated room came absolutely stunning. The suite was spacious, impeccably clean, and the modern decor made our feel right at home. The bathroom was luxurious, and the balcony provided spectacular views. Perfect for both relaxation and romance.",
    rating: 5,
    author: "Sofia B.",
    location: "France",
    date: "23.10.2024",
  },
  {
    id: 2,
    title: "Exceptional Stay with Excellent Amenities",
    content:
      "Our experience exceeded all expectations from start to finish. The room was well-equipped with everything you could need. The marble bathroom with its bathtub was divine. The location is perfect for exploring the city, and the staff was incredibly helpful throughout our stay.",
    rating: 5,
    author: "Youssef R.",
    location: "Morocco",
    date: "15.11.2024",
  },
  {
    id: 3,
    title: "Outstanding Service and Beautiful Rooms",
    content:
      "From the moment we arrived, we were impressed by the attention to detail. The room was beautifully decorated with high-quality furnishings. The staff went above and beyond to ensure our comfort. The amenities were top-notch and the location couldn't be better.",
    rating: 5,
    author: "Emma L.",
    location: "United Kingdom",
    date: "02.12.2024",
  },
  {
    id: 4,
    title: "Perfect Getaway with Amazing Views",
    content:
      "This place exceeded all our expectations! The panoramic views from our room were absolutely stunning. Every detail was thoughtfully considered, from the comfortable bedding to the modern amenities. We'll definitely be returning for our next vacation.",
    rating: 5,
    author: "Marco T.",
    location: "Italy",
    date: "18.11.2024",
  },
]

export function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [screenWidth, setScreenWidth] = useState<number>(0)

  // Get screen width only on client
  useEffect(() => {
    const updateWidth = () => {
      setScreenWidth(window.innerWidth)
    }

    updateWidth()
    window.addEventListener("resize", updateWidth)
    return () => window.removeEventListener("resize", updateWidth)
  }, [])

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex >= testimonials.length - 2 ? 0 : prevIndex + 2))
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? Math.max(0, testimonials.length - 2) : Math.max(0, currentIndex - 2))
    setIsAutoPlaying(false)
  }

  const goToNext = () => {
    setCurrentIndex(currentIndex >= testimonials.length - 2 ? 0 : currentIndex + 2)
    setIsAutoPlaying(false)
  }

  const translateX = currentIndex * (screenWidth < 768 ? 100 : 50)

  return (
    <div className="w-full container py-8 relative">
      {/* Header */}
      <div className="flex items-center justify-between mb-28">
        <h2 className="text-[20.8px] font-bold text-[#252525]">What Our Guests Say</h2>
        <button className="text-[#007DD0] hover:text-[#007DD0] text-[20px] font-medium flex items-center gap-1 absolute right-24 top-[115px] border-b-2 border-[#007DD0]">
          See All..
          <MoveRight className="w-5 h-5" color="#007DD0" />
        </button>
      </div>

      {/* Slider Container */}
      <div className="">
        {/* Navigation Arrows */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-24 top-[115px] w-[42px] h-[42px] -translate-y-1/2 z-10 bg-white shadow-lg hover:bg-gray-50 rounded-full border-none"
          onClick={goToPrevious}
        >
          <MoveLeft className="w-4 h-4" color="#D2D2D2" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute left-36 top-[115px] w-[42px] h-[42px] -translate-y-1/2 z-10 bg-[#007DD01A] shadow-lg hover:bg-gray-50 rounded-full border-none"
          onClick={goToNext}
        >
          <MoveRight className="w-5 h-5" color="#007DD0" />
        </Button>

        {/* Testimonials */}
        <div className="overflow-hidden rounded-lg">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${translateX}%)` }}
          >
            {testimonials?.map((testimonial) => (
              <div key={testimonial.id} className="w-full md:w-1/2 flex-shrink-0 pr-4">
                <div className="bg-white border border-[#DEDEDE] rounded-[12px] h-[240px] p-[16px]">
                  <CardContent className="py-2 px-4">
                    <div className="space-y-2">
                      <h3 className="text-[20px] font-semibold text-[#252525] font-dm">"{testimonial.title}"</h3>
                      <p className="text-[12px] text-[#626262] font-300 leading-relaxed line-clamp-4">
                        {testimonial.content}
                      </p>
                      <div className="flex items-center gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Image src={star} alt="star" />
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm">
                          <span className="font-normal text-[20px] text-[#252525] font-roboto">— {testimonial.author}</span>
                          <span className="font-normal text-[20px] text-[#252525] font-roboto">, {testimonial.location}</span>
                        </div>
                        <div className="font-normal text-[12px] text-[#000000] font-roboto">{testimonial.date}</div>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
