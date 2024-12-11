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
      <div className="h-[400vh] relative">
        {/* Salesforce Section */}
        <motion.section
          ref={ref}
          className="sticky top-0 h-screen flex items-center justify-center z-10 bg-[#FAFAFA]"
          initial="hidden"
          animate={controls}
          variants={fadeVariants}
        >
          <div className="text-center">
            <h2 className="text-6xl font-bold">Salesforce</h2>
            <p className="text-lg mt-4">Ihr Partner für individuelle Salesforce Lösungen.</p>
          </div>
        </motion.section>

        {/* Website Section */}
        <motion.section
          className="sticky top-0 h-screen flex items-center justify-center z-20 bg-[#FFFFFF]"
          initial="hidden"
          animate={controls}
          variants={fadeVariants}
        >
          <div className="text-center">
            <h2 className="text-6xl font-bold">Website</h2>
            <p className="text-lg mt-4">Ihre digitale Visitenkarte – modern, effizient und einzigartig.</p>
          </div>
        </motion.section>

        {/* Custom Development Section */}
        <motion.section
          className="sticky top-0 h-screen flex items-center justify-center z-30 bg-[#FAFAFA]"
          initial="hidden"
          animate={controls}
          variants={fadeVariants}
        >
          <div className="text-center">
            <h2 className="text-6xl font-bold">Custom Development</h2>
            <p className="text-lg mt-4">Individuelle Softwarelösungen für einzigartige Anforderungen.</p>
          </div>
        </motion.section>

        {/* Book Your Ekspert Section */}
        <motion.section
          className="sticky top-0 h-screen flex items-center justify-center z-40 bg-[#0009FF] text-white"
          initial="hidden"
          animate={controls}
          variants={fadeVariants}
        >
          <div className="text-center">
            <h2 className="text-6xl font-bold">Book Your Ekspert</h2>
            <p className="text-lg mt-4">Ihre Expertise – flexibel und auf Abruf.</p>
          </div>
        </motion.section>
      </div>
    </section>
  );
};

export default ServicesSection;
