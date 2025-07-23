'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { FaPlus, FaTimes } from 'react-icons/fa';

const images = [
  '/image24.jpg',
  '/image20.jpg',
  '/image16.jpg',
  '/image21.jpg',
  '/image23.jpg',
  '/image22.jpg',
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="relative bg-white py-10  md:px-12">
      <h2 className="text-2xl font-bold text-center mb-6">Image Gallery</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 px-10">
        {images.map((src, index) => (
          <div key={index} className="relative group rounded overflow-hidden shadow-md">
            <Image
              src={src}
              alt={`Gallery ${index}`}
              width={300}
              height={200}
              className="object-cover w-full h-48 md:h-70"
            />
            <button
              onClick={() => setSelectedImage(src)}
              className="absolute inset-0 flex items-center justify-center bg-purple-500 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <div className="bg-red-600 text-white p-3 rounded-full">
                <FaPlus />
              </div>
            </button>
          </div>
        ))}
      </div>

      {/* Fullscreen View */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white text-3xl bg-red-600 rounded-full p-2"
          >
            <FaTimes />
          </button>
          <div className="max-w-full max-h-full px-4">
            <Image
              src={selectedImage}
              alt="Expanded"
              width={800}
              height={600}
              className="object-contain max-h-[90vh] w-auto h-auto"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
