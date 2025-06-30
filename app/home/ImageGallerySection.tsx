"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Bookmark } from "lucide-react"
import Image from "next/image"
import image1 from "../../public/image/gallery/image1.png";
import image2 from "../../public/image/gallery/image2.png";
import image3 from "../../public/image/gallery/image3.png";
import image4 from "../../public/image/gallery/image4.png";
import image5 from "../../public/image/gallery/image5.png";
import image6 from "../../public/image/gallery/image6.png";
import image7 from "../../public/image/gallery/image7.png";
import image8 from "../../public/image/gallery/image8.png";
import image9 from "../../public/image/gallery/image9.png";



interface HotelImage {
  src: string
  alt: string
}

interface HotelListingProps {
  name: string
  description: string
  mainImage: HotelImage
  galleryImages: HotelImage[]
  onReserve?: () => void
  onBookmark?: () => void
  isBookmarked?: boolean
}


const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,

];

export default function ImageGallerySection({
  name = "El Aurassi Hotel",
  description = "Spacious, modern rooms with panoramic views of the Mediterranean Sea, SPA",
  onReserve,
  onBookmark,
  isBookmarked = false,
}: HotelListingProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [bookmarked, setBookmarked] = useState(isBookmarked)

  const handleBookmark = () => {
    setBookmarked(!bookmarked)
    onBookmark?.()
  }

  const handleReserve = () => {
    onReserve?.()
    console.log("Reserve clicked for", name)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <div className="w-full  container ">
      {/* Header Section */}
      <div className="">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div className="flex-1">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">{name}</h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-md">{description}</p>
          </div>

          <div className="flex items-center gap-3 sm:flex-shrink-0">
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-full border-gray-200 hover:bg-gray-50 bg-transparent"
              onClick={handleBookmark}
            >
              <Bookmark className={`h-4 w-4 ${bookmarked ? "fill-blue-600 text-blue-600" : "text-gray-600"}`} />
            </Button>

            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium"
              onClick={handleReserve}
            >
              Reserve →
            </Button>
          </div>
        </div>
      </div>

      {/* Image Gallery Section */}

      {/* Top Section: Large Left, Two Small Right */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Left Large Image */}
        <div className="md:col-span-2">
          <Image
            src={images[0]}
            alt="Large Main"
            width={800}
            height={500}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Right Two Vertical Images */}
        <div className="flex flex-col gap-4">
          <Image
            src={images[1]}
            alt="Side 1"
            width={400}
            height={240}
            className="w-full h-[240px] object-cover rounded-lg"
          />
          <Image
            src={images[2]}
            alt="Side 2"
            width={400}
            height={240}
            className="w-full h-[240px] object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Grid of 6 Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 mt-4">
        {images.slice(3, 9).map((img, i) => (
          <Image
            key={i}
            src={img}
            alt={`Gallery ${i + 4}`}
            width={400}
            height={300}
            className="w-full h-[250px] object-cover rounded-md"
          />
        ))}
      </div>
      </div>

  )
}
