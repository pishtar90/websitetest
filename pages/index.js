import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import secondImage from '/images/costum-normal-2.png';
import secondImage2 from '/images/costum-hover.png';
import firstImage from '/images/website-normal.png';
import firstImage2 from '/images/website-hover.png';
import GraphicDesignSection from '../components/GraphisDesignSection';
import figure from '/images/the-eksperts-book.png';
import figure2 from '/images/the-eksperts-book-hover.png';

// Animation Variants
const fadeVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: "easeInOut" },
    },
};

const ServicesSection = () => {
  const [hovered, setHovered] = useState(false);

  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <section className="relative overflow-hidden">
      {/* Hero Section */}
      <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-500 to-blue-700 text-white text-center">
        <h1 className="text-5xl lg:text-7xl font-bold mb-4">Welcome to Our Services</h1>
        <p className="text-lg lg:text-2xl max-w-3xl">
          Discover our range of solutions to elevate your business with modern, flexible, and scalable services.
        </p>
        <Link href="/contact">
          <motion.button
            className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Get Started
          </motion.button>
        </Link>
      </div>

      <div className="relative h-screen">
        {/* Salesforce Section */}
        <motion.section
          ref={ref}
          className="absolute top-0 w-full h-screen flex items-center justify-center z-40 bg-[#FAFAFA]"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="text-center">
            <h2 className="text-6xl font-bold">Salesforce</h2>
            <p className="mt-4 text-lg">Ihr Partner für nachhaltige Salesforce-Lösungen.</p>
          </div>
        </motion.section>

        {/* Website Section */}
        <motion.section
          className="absolute top-0 w-full h-screen flex items-center justify-center z-30 bg-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="text-center">
            <h2 className="text-6xl font-bold">Website</h2>
            <p className="mt-4 text-lg">Ihre digitale Visitenkarte – modern, effizient und einzigartig.</p>
          </div>
        </motion.section>

        {/* Custom Development Section */}
        <motion.section
          className="absolute top-0 w-full h-screen flex items-center justify-center z-20 bg-[#FAFAFA]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="text-center">
            <h2 className="text-6xl font-bold">Custom Development</h2>
            <p className="mt-4 text-lg">Individuelle Softwarelösungen für Ihre Anforderungen.</p>
          </div>
        </motion.section>

        {/* Book Your Ekspert Section */}
        <motion.section
          className="absolute top-0 w-full h-screen flex items-center justify-center z-10 bg-blue-600 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="text-center">
            <h2 className="text-6xl font-bold">Book Your Ekspert</h2>
            <p className="mt-4 text-lg">Flexibel und auf Abruf – Ihre Experten direkt verfügbar.</p>
          </div>
        </motion.section>
      </div>
    </section>
  );
};

export default ServicesSection;
