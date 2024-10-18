"use client";
import { useState } from 'react';
import Image from 'next/image';

interface SimpleCarouselProps {
  directory: string; // New prop for directory name
}

const SimpleCarousel: React.FC<SimpleCarouselProps> = ({ directory }) => {
  const images = [
    `/${directory}/image1.jpg`, 
    `/${directory}/image2.jpg`,
    `/${directory}/image3.jpg`,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative my-8 max-w-[90%] mx-auto overflow-hidden sm:max-w-[70%] lg:max-w-[60%]">
      <div className="relative">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="relative flex-shrink-0 w-full h-[300px] sm:h-[400px]"> {/* Responsive height */}
              <Image
                src={image}
                alt={`Image ${index + 1}`}
                className="rounded-lg shadow-lg"
                fill
                style={{ objectFit: 'cover' }} // Maintain aspect ratio and cover the container
                priority
              />
            </div>
          ))}
        </div>
        {/* Left Arrow */}
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200 transition"
        >
          &#8249; {/* HTML code for left arrow */}
        </button>
        {/* Right Arrow */}
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200 transition"
        >
          &#8250; {/* HTML code for right arrow */}
        </button>
      </div>
      <div className="flex justify-center space-x-2 mt-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition ${currentIndex === index ? 'bg-black' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SimpleCarousel;