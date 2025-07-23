'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('https://careloops.ca/contact-form/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        setStatus('✅ Thank You! Message sent successfully.');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('❌ Failed to send message. Please try again later!');
      }
    } catch (error) {
      console.error(error);
      setStatus('❌ Error sending message. Please try again later.');
    }
  };

  return (
    <section className="bg-white" id="contact">
      {/* Hero Section */}
      <div className="relative h-[400px] max-sm:h-[300px] w-full overflow-hidden">
        <Image
          src="/bg1.jpg"
          alt="Contact Banner"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute top-20 inset-0 flex flex-col items-center justify-center text-white text-center z-10">
          <h1 className="text-4xl font-bold">Contact</h1>
          <p className="mt-2 text-lg">
            <Link href="/" className="bg-green-400 p-2 text-white hover:underline">Home - Contact</Link>
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 mt-10 px-10 gap-10 items-center">
        {/* Left Contact Info */}
        <div>
          <h2 className="text-3xl font-bold text-black mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-6">
            We’re here to support you! Whether you're a parent looking for more information or an educator wanting to connect,
            feel free to reach out to us using the details below or by filling out the form.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-red-500 text-xl" />
              <span>484 Blackburn Drive, Toronto, Ontario</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-red-500 text-xl" />
              <a href="mailto:info@careloops.ca" className="text-black hover:underline">
                info@careloops.ca
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-red-500 text-xl" />
              <Link href="tel:+14379991773" className="text-black hover:underline">
                +1 (437) 999 - 1773
              </Link>
            </div>
          </div>

          {/* Child Images */}
          <div className="flex gap-3 mt-6">
            <Image src="/image17.jpg" alt="child 1" width={70} height={50} className="rounded-lg object-fit" />
            <Image src="/image8.jpg" alt="child 2" width={70} height={50} className="rounded-lg object-cover" />
            <Image src="/image25.jpg" alt="child 3" width={70} height={50} className="rounded-lg object-cover" />
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-purple-50 p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-red-500 mb-4">Send Us a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-purple-500"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-purple-500"
              required
            />
            <input
              name="phone"
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-purple-500"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-purple-500"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md font-semibold"
            >
              Send Message
            </button>
            {status && <p className="mt-3 text-sm text-green-600">{status}</p>}
          </form>
        </div>
      </div>

      {/* Embedded Google Map */}
      <div className="mt-12">
        <iframe
          title="CareLoops Location - 484 Blackburn Drive, Toronto"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2784.029458438652!2d-75.51838838443946!3d45.46117907910024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cd1fbdb99bb777f%3A0x2e1609e21f2b9670!2s484%20Blackburn%20Dr%2C%20Ottawa%2C%20ON%20K1E%202R3%2C%20Canada!5e0!3m2!1sen!2sca!4v1718623400000!5m2!1sen!2sca"
          width="100%"
          height="350"
          allowFullScreen
          loading="lazy"
          className="rounded-lg shadow-md"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactSection;
