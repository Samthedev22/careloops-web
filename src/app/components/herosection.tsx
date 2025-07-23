'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const ImageSliders: string[] = [
  '/image9.jpg',
  '/image19.jpg',
  '/image14.jpg',
];

const HeroHeader: string[] = [
  'Kids Education',
  'Building a Brighter Future',
  'Nurturing Young Minds',
]

const HeroDescription: string[] = [
  'At Careloop, we set children up for a better future.',
  'Explore a nurturing space where children learn through play, creativity, and social interaction.',
  'Our daycare focuses on emotional, cognitive, and physical growth for every child.',
]

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const prevImage = () => {
    setCurrent((prev) => (prev - 1 + ImageSliders.length) % ImageSliders.length);
  };

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % ImageSliders.length);
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {/* Image Background */}
      {ImageSliders[current] ? (
        <Image
          src={ImageSliders[current]}
          alt={`Slide ${current + 1}`}
          layout="fill"
          objectFit="cover"
          className="w-full h-full object-cover"
          priority
        />
      ) : (
        <p className="text-center text-red-500">Image not found</p>
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Text & CTA */}
      <div className="absolute top-0 md:left-10 w-full h-full flex flex-col justify-center pl-3 z-10 text-white">
        <h3 className="text-lg md:text-xl mb-2">A NEW APPROACH TO</h3>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
         {HeroHeader[current]}
        </h1>
        <p className="max-w-xl text-md md:text-lg mb-6">
          {HeroDescription[current]}
        </p>
        <div className="flex gap-4">
          <a
            href="/register"
            className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-6 py-3 rounded-md font-semibold shadow-md"
          >
            ADMISSION NOW
          </a>
          <a
            href="/service"
            className="bg-gradient-to-r from-green-500 to-lime-500 text-white px-6 py-3 rounded-md font-semibold shadow-md"
          >
            OUR SERVICES
          </a>
        </div>
      </div>

      {/* Arrows */}
      <IoIosArrowBack
        onClick={prevImage}
        className="absolute left-4 max-md:left-0 top-1/2 transform -translate-y-1/2 bg-white/50 text-black text-4xl rounded-full p-2 cursor-pointer z-20"
      />
      <IoIosArrowForward
        onClick={nextImage}
        className="absolute right-4 max-md:right-0 top-1/2 transform -translate-y-1/2 bg-white/50 text-black text-4xl rounded-full p-2 cursor-pointer z-20"
      />
    </div>
  );
};

export default HeroSection;
