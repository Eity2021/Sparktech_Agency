import React from 'react';
import Availability from './Availability';
import ImageGallerySection from './ImageGallerySection';
import OverView from './OverView';
import { Slider } from './Slider';
import { ExploreArea } from './ExploreArea';
import Property from './Property';
import Policies from './Policies';
import HotelSlider from './HotelSlider';



export default function HomePage() {
  return (
    <div>

      <ImageGallerySection></ImageGallerySection>
        <OverView></OverView>
        <Availability></Availability>
        <Property></Property>
        <ExploreArea></ExploreArea>
        <Slider></Slider>
        <Policies></Policies>
        <HotelSlider></HotelSlider>

    </div>
  )
}
