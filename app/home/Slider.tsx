"use client"

import { useState, useEffect } from "react"
import { MoveLeft, MoveRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CardContent } from "@/components/ui/card"

const testimonials = [
  // ...your testimonials (same as before)
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
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full md:w-1/2 flex-shrink-0 pr-4">
                <div className="bg-white border h-[202px]">
                  <CardContent className="py-2 px-4">
                    <div className="space-y-4">
                      <h3 className="text-base font-semibold text-gray-900">"{testimonial.title}"</h3>
                      <p className="text-sm text-gray-600 leading-relaxed line-clamp-4">
                        {testimonial.content}
                      </p>
                      <div className="flex items-center gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
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
      </div>
    </div>
  )
}
