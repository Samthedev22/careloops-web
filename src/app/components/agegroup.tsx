'use client';
import React from 'react';
import Link from 'next/link';

const AgeGroup = () => {
  const cards = [
    {
      label: 'INFANTS',
      title: 'Infant',
      age: '(9 – 18 months)',
    },
    {
      label: 'TODDLERS',
      title: 'Toddler',
      age: '(18 – 30 months)',
    },
    {
      label: 'PRESCHOOLERS',
      title: 'PRE-K',
      age: '(2 and half – 5 Years)',
    },
  ];

  return (
    <div className="flex flex-col items-center gap-10 px-6 md:px-16 py-12 bg-white">
      <h2 className="text-3xl font-bold text-center">Age Groups</h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative bg-white rounded-2xl p-6 text-center shadow-xl border-t-4 border-green-500 
              hover:bg-green-400 hover:text-white transition duration-300"
          >
            {/* Red Circle Label */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="w-20 h-20 bg-red-600 text-white flex items-center justify-center rounded-full font-bold text-xs shadow-md">
                {card.label}
              </div>
            </div>

            {/* Card Body */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
              <p className="text-lg font-medium">{card.age}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Enrolment Button */}
      <Link
        href="/register"
        className="mt-8 bg-green-500 text-white font-semibold px-6 py-3 rounded hover:bg-cyan-500 transition"
      >
        ENROLMENT
      </Link>
    </div>
  );
};

export default AgeGroup;
