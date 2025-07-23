'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import Gallery from '../components/Gallery';

const RegisterSection = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    childName: '',
    childDOB: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('https://careloops.ca/register-form/register.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        setStatus('✅ Thank you! Registration submitted successfully.');
        setFormData({
          parentName: '',
          email: '',
          phone: '',
          childName: '',
          childDOB: '',
          message: '',
        });
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('❌ Failed to submit registration. Please try again later.');
      }
    } catch (error) {
      console.error(error);
      setStatus('❌ Error occurred. Please try again later.');
    }
  };

  return (
    <div>
      {/* Top Hero Section */}
      <div className="relative">
        <Image
          src='/image8.jpg'
          alt='daycare kids playing'
          height={100}
          width={1000}
          objectFit='cover'
          className='w-full z-0 h-[300px] md:h-[400px]'
          priority
        />
        <div className='absolute inset-0 flex items-center justify-center top-40'>
          <h1 className="text-2xl text-center p-3 px-5 rounded-xl bg-purple-800 font-semibold text-white">
            Home - Registration
          </h1>
        </div>
      </div>

      {/* Form Section */}
      <div className="w-full mt-20 py-12 px-6 max-w-3xl mx-auto bg-purple-50 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-purple-800 mb-4 z-10">Register Your Child</h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 font-semibold">Parent's Full Name</label>
            <input
              type="text"
              name="parentName"
              value={formData.parentName}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-3 rounded-md"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-3 rounded-md"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-3 rounded-md"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Child's Full Name</label>
            <input
              type="text"
              name="childName"
              value={formData.childName}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-3 rounded-md"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Child's Date of Birth</label>
            <input
              type="date"
              name="childDOB"
              value={formData.childDOB}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-3 rounded-md"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Message (optional)</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full border border-gray-300 p-3 rounded-md"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 rounded-md font-semibold"
            >
              Submit Registration
            </button>
            {status && <p className="mt-3 text-sm text-green-600">{status}</p>}
          </div>
        </form>
      </div>

      <Gallery/>

      {/* Map Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-center mb-4 text-purple-800">Our Location</h2>
        <div className="max-w-5xl mx-auto">
          <iframe
            title="CareLoops Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2784.029458438652!2d-75.51838838443946!3d45.46117907910024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cd1fbdb99bb777f%3A0x2e1609e21f2b9670!2s484%20Blackburn%20Dr%2C%20Ottawa%2C%20ON%20K1E%202R3%2C%20Canada!5e0!3m2!1sen!2sca!4v1718623400000!5m2!1sen!2sca"
            width="100%"
            height="350"
            allowFullScreen
            loading="lazy"
            className="w-full rounded-lg left-0 right-0 shadow-md"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default RegisterSection;
