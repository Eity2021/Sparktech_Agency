import React from 'react';
import Availability from './Availability';
import ImageGallerySection from './ImageGallerySection';
import OverView from './OverView';

export default function HomePage() {
  return (
    <div>
      <ImageGallerySection></ImageGallerySection>
        <OverView></OverView>
        <Availability></Availability>

    </div>
  )
}
