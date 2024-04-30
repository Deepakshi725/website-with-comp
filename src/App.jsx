import React from 'react';
import './App.css';
import Header from './components/Header'; //Import the header component
import ImageGallery from './components/ImageGallery'; //Import the ImageGallery component
import GallaryFooter from './components/GallaryFooter'; //Import the GallaryFooter component
import generateImageData from './components/ImageData'; //Import the geenrateImageDta function from ImageData

function App() {
  const imageData = generateImageData(); // Call the function to get the imageData
  return (
    <div>
      <Header />
      <ImageGallery imageData={imageData} />
      <GallaryFooter />
    </div>
  );
}

export default App;
