'use client';
import React, { useEffect, useState } from 'react';
import { FiArrowUpCircle } from 'react-icons/fi';

const Scroll = () => {
  const [visible, setVisible] = useState(false);

  // Show button when user scrolls down 300px
  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 text-purple-700 hover:text-purple-900 transition-all duration-300"
        >
          <FiArrowUpCircle className="text-5xl" />
        </button>
      )}
    </>
  );
};

export default Scroll;
