"use client";
import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import image1 from "../../public/image/gallery/image1.png";
import image2 from "../../public/image/gallery/image2.png";
import image3 from "../../public/image/gallery/image3.png";
import image4 from "../../public/image/gallery/image4.png";
import image5 from "../../public/image/gallery/image5.png";
import image6 from "../../public/image/gallery/image6.png";
import image7 from "../../public/image/gallery/image7.png";
import image8 from "../../public/image/gallery/image8.png";
import image9 from "../../public/image/gallery/image9.png";
import rectangle from "../../public/image/rectangle.png";
import corner from "../../public/image/corner.png";

interface HotelListingProps {
  name?: string;
  description?: string;
  onReserve?: () => void;
  onBookmark?: () => void;
  isBookmarked?: boolean;
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
  const [bookmarked, setBookmarked] = useState<boolean>(isBookmarked);

  const handleBookmark = useCallback(() => {
    setBookmarked((prev) => !prev);
    onBookmark?.();
  }, [onBookmark]);

  const handleReserve = useCallback(() => {
    onReserve?.();
    console.log("Reserve clicked for", name);
  }, [onReserve, name]);

  return (
    <div className="w-full  md:container mx-auto pb-12">
      {/* Header Section */}
      <div className="mt-[30px] md:px-0 px-2  ">
        <div className="flex flex-col md:flex-row sm:items-start sm:justify-between gap-4">
          <div className="flex-1">
            <h2 className="text-[20px] sm:text-[31px] font-medium text-[#252525] font-dm mb-2">
              {name}
            </h2>
            <p className="text-sm sm:text-base font-normal text-[#626262] font-dm leading-relaxed md:max-w-md max-w-sm mb-4 ">
              {description}
            </p>
          </div>

          <div className="flex items-center gap-3 sm:flex-shrink-0 md:mb-0 mb-6">
            <Button
              variant="outline"
              size="icon"
              className="h-[70px] w-[70px] rounded-full bg-[#007DD01A] border-none "
              onClick={handleBookmark}
            >
              <Image src={rectangle} alt="rectangle" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-[70px] w-[70px] rounded-full bg-[#007DD01A] border-none "
              onClick={handleBookmark}
            >
              <Image src={corner} alt="corner" />
            </Button>

            <Button
              className="bg-[#007DD0] hover:bg-[#007DD0] text-white px-[26px] py-[22px] rounded-[36px] font-medium text-[20px] font-dm"
              onClick={handleReserve}
            >
              Reserve →
            </Button>
          </div>
        </div>
      </div>

      {/* Top Section: Large Left, Two Small Right */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
        {/* Left Large Image */}
        <div className="md:col-span-2">
          <Image
            src={images[0]}
            alt="Large Main"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Right Two Vertical Images */}
        <div className="flex flex-col gap-4">
          <Image
            src={images[1]}
            alt="Side 1"
            className="w-full h-[240px]  rounded-lg"
          />
          <Image
            src={images[2]}
            alt="Side 2"
            className="w-full h-[240px] rounded-lg"
          />
        </div>
      </div>

      {/* Grid of 6 Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-4">
        {images.slice(3, 9).map((img, i) => (
          <Image
            key={i}
            src={img}
            alt={`Gallery ${i + 4}`}
            className="w-full h-[250px]  rounded-md"
          />
        ))}
      </div>
    </div>
  );
}
