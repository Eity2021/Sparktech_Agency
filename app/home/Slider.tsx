"use client"

import { useState, useEffect } from "react"
import { MoveLeft,MoveRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

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



  return (
    <div className="w-full container py-8 relative">
      {/* Header */}
      <div className="flex items-center justify-between mb-28 ">
        <h2 className="text-2xl font-semibold text-gray-900">What Our Guests Say</h2>
        <button className="text-[#007DD0] hover:text-[#007DD0] font-medium flex items-center gap-1 absolute right-24 top-[115px]">
          See All
          <MoveRight className="w-4 h-4" />
        </button>
      </div>

      {/* Slider Container */}
      <div className="">
        {/* Navigation Arrows */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-24 top-[115px] w-[42px] h-[42px]  -translate-y-1/2 z-10 bg-white shadow-lg hover:bg-gray-50 rounded-[50%] border-none"
          onClick={goToPrevious}
        >
          <MoveLeft className="w-4 h-4"  color="#D2D2D2"/>
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute left-36 top-[115px] w-[42px] h-[42px] -translate-y-1/2 z-10 bg-[#007DD01A] shadow-lg hover:bg-gray-50 rounded-[50%] border-none"
          onClick={goToNext}
        >
          <MoveRight  className="w-5 h-5" color="#007DD0" />
        </Button>

        {/* Testimonials */}
        <div className="overflow-hidden rounded-lg">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (window.innerWidth < 768 ? 100 : 50)}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full md:w-1/2 flex-shrink-0 pr-4">
                <div className="bg-white border h-[202px] ">
                  <CardContent className="py-2 px-4">
                    <div className="space-y-4">
                      {/* Title */}
                      <h3 className="text-base font-semibold text-gray-900">"{testimonial.title}"</h3>

                      {/* Content */}
                      <p className="text-sm text-gray-600 leading-relaxed line-clamp-4">{testimonial.content}</p>

                      {/* Rating */}
                      <div className="flex items-center gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>

                      {/* Author Info */}
                      <div className="flex items-center justify-between ">
                        <div className="text-sm">
                          <span className="font-medium text-gray-900">— {testimonial.author}</span>
                          <span className="text-gray-500">, {testimonial.location}</span>
                        </div>
                        <div className="text-sm text-gray-500">{testimonial.date}</div>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        {/* <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                Math.floor(currentIndex / 2) === index ? "bg-blue-500" : "bg-gray-300"
              }`}
              onClick={() => goToSlide(index * 2)}
            />
          ))}
        </div> */}
      </div>
    </div>
  )
}
