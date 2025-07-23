'use client'
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative text-white pt-12 overflow-hidden">
           
      {/* Background Image */}
      <Image 
        src="/bg4.jpg"
        alt="background"
        objectFit="cover"
        quality={100}
        width={70}
        height={70}
        className="absolute z-0 object-cover w-full h-full inset-0"
      />

      {/* Content Container */}
      <div className="relative md:pl-70 z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Giving your child the best start in life!</h2>
          <div className="border-b border-yellow-400 w-8 mb-4"></div>

          <div className="flex gap-2">
            <Image src="/image25.jpg" width={150} height={150} alt="child" className="w-16 h-16 rounded-lg object-cover" />
            <Image src="/image8.jpg" width={150} height={150} alt="child" className="w-16 h-16 rounded-lg object-cover" />
            <Image src="/image26.jpg" width={150} height={150} alt="child" className="w-16 h-16 rounded-lg object-cover" />
          </div>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Get In Touch</h3>
          <div className="border-b border-yellow-400 w-8 mb-4"></div>
          <p>We are one phone call away!</p>
          <div className="flex items-center gap-2 mt-4">
            <FaEnvelope className="text-yellow-400" />
            <a href="mailto:info@careloops.ca">info@careloops.ca</a>
          </div>
          <div className="flex items-center gap-2 mb-4 mt-2">
            <FaMapMarkerAlt className="text-yellow-400" />
            <span>484 Blackburn Drive Brantford, Ontario</span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <FaPhoneAlt className="text-yellow-400" />
            <a href="tel:+14379991773">+1 (437) - 999 - 1773</a>
          </div>
        </div>

        {/* Services Section */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Quick Menu</h3>
          <div className="border-b border-yellow-400 w-8 mb-4"></div>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:underline text-yellow-400">Home</Link></li>
            <li><a href="/service" className="hover:underline text-yellow-400">Service</a></li>
            <li><a href="/service" className="hover:underline text-yellow-400">Register</a></li>
            <li><a href="/contact" className="hover:underline text-yellow-400">Contact Us</a></li>
            <li><a href="/about" className="hover:underline text-yellow-400">About Us</a></li>
          </ul>
        </div>
      </div>

      {/* Registration CTA */}
      <div className="relative z-10 mt-6 flex items-center justify-center md:justify-end max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4">
          <span className="font-semibold text-lg">Enroll your child today!</span>
          <a href="/register" className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full font-bold">
            Start Registration
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 bg-yellow-400 text-purple-900 text-center py-3 mt-10">
        2025 © All Rights Reserved | <strong>CareLoop Early Learning Center</strong>
        <a 
        href="https://samthewebdev.com/" 
        className='px-2 hover:underline cursor-pointer underline'
        target='_blank'
        rel='noopener noreferrer'
        >
        <strong>Dev.</strong>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
