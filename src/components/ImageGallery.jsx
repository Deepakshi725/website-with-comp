import React from 'react';
import Image from './Image'; // Import the Image component

export default function ImageGallery({ imageData }) {
  return (
    <div>
      {imageData.map(image => (
        <Image key={image.id} id={image.id} img={image.img} />
      ))}
    </div>
  );
}