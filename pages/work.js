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

const fadeVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeInOut" },
  },
  exiting: {
    opacity: 0,
    y: -50,
    transition: { duration: 1.6, ease: "easeOut" },
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
    } else {
      controls.start("exiting");
    }
  }, [inView, controls]);

  return (
    <section className="relative py-2">

      {/* Section 1: Salesforce */}
      <div className="relative h-screen">
        <div className="sticky top-0 flex items-center justify-center h-screen bg-white">
          <motion.section
            ref={ref}
            className="group font-matt cloudy-section flex flex-col md:flex-row items-center justify-between p-2 rounded-[20px] bg-[#FAFAFA] max-w-[1280px] mx-auto lg:h-[600px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeVariants}
          >
            <div className="font-matt md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left z-10 lg:ml-8 lg:mr-12">
              <h2 className="font-matt text-3xl sm:text-4xl md:text-5xl lg:text-[62px] font-[700] lg:leading-[80px] lg:mb-6">
                Salesforce
              </h2>
              <p className="text-black mb-6 font-matt font-[700] text-[20px] leading-[33px]">
                Ihr Partner für individuelle und nachhaltige Salesforce Lösungen.
              </p>
              <p className="text-black mb-6 font-matt text-[18px] font-[300] leading-[33px]">
                Als offizieller Salesforce-Partner helfen wir Ihnen, das volle Potenzial von Salesforce zu nutzen. 
                Ob Neuimplementierung, Optimierung oder massgeschneiderte Integrationen – wir stehen Ihnen zur Seite.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/services/salesforce">
                  <motion.button className="border-2 border-[#0009FF] text-white bg-[#0009FF] px-4 py-1 rounded-[20px] font-[800] text-[14px] transition-colors duration-200 group-hover:text-white group-hover:bg-black">
                    MEHR <br /> ERFAHREN
                  </motion.button>
                </Link>
                <Link href="/contact">
                  <motion.button className="border-2 border-[#0009FF] text-[#0009FF] bg-white px-4 py-1 rounded-[20px] font-[800] text-[14px] transition-colors duration-200 group-hover:text-white group-hover:bg-[#0009FF]">
                    JETZT PROJEKT <br /> STARTEN
                  </motion.button>
                </Link>
              </div>
            </div>
            <div className="font-matt md:w-1/2 mt-8 md:mt-0 flex justify-center z-10">
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1110 1177" className="svg-hover">
                <rect fill="#032e61" width="1110" height="1177" rx="61.8" ry="61.8" />
                <path fill="#00a1e0" d="M487.7,235.9c25.9-27,61.9-43.7,101.8-43.7s99.2,29.5,123.8,73.4..." />
              </svg>
            </div>
          </motion.section>
        </div>
      </div>

      {/* Weitere Sektionen hier... */}
      
    </section>
  );
};

export default ServicesSection;
