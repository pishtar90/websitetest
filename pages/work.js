import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import secondImage from '/images/costum-normal-2.png';
import secondImage2 from '/images/costum-hover.png';
import firstImage from '/images/website-normal.png';
import firstImage2 from '/images/website-hover.png';
import figure from '/images/the-eksperts-book.png';
import figure2 from '/images/the-eksperts-book-hover.png';

// Array of services for clean code
const services = [
  {
    title: "Salesforce",
    description: "Ihr Partner für individuelle und nachhaltige Salesforce Lösungen.",
    detail: "Als offizieller Salesforce-Partner helfen wir Ihnen, das volle Potenzial von Salesforce zu nutzen.",
    link: "/services/salesforce",
    imageDefault: firstImage,
    imageHover: firstImage2
  },
  {
    title: "Website",
    description: "Ihre digitale Visitenkarte – modern, effizient und einzigartig.",
    detail: "Wir gestalten Websites, die gut aussehen und performen.",
    link: "/services/website",
    imageDefault: firstImage,
    imageHover: firstImage2
  },
  {
    title: "Custom Development",
    description: "Individuelle Softwarelösungen für einzigartige Anforderungen.",
    detail: "Wir entwickeln skalierbare Anwendungen, die auf Ihre Bedürfnisse zugeschnitten sind.",
    link: "/services/costumdevelopment",
    imageDefault: secondImage,
    imageHover: secondImage2
  },
  {
    title: "Book Your Ekspert",
    description: "Ihre Expertise – flexibel und auf Abruf.",
    detail: "Mit unserem Service buchen Sie Experten individuell und flexibel.",
    link: "/services/bookyourekspert",
    imageDefault: figure,
    imageHover: figure2
  },
];

const ServicesSection = () => {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sectionHeight = window.innerHeight;

      // Set active section based on scroll
      const newActiveSection = Math.floor(scrollPosition / sectionHeight);
      setActiveSection(newActiveSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      {services.map((service, index) => (
        <section
          key={index}
          className={`h-screen flex flex-col items-center justify-center transition-opacity duration-700 ${
            activeSection === index ? "opacity-100" : "opacity-0"
          } absolute top-0 w-full`}
        >
          <motion.div
            className="flex flex-col md:flex-row items-center justify-between p-8 bg-white rounded-lg max-w-[1280px] mx-auto shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Left Content */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-4xl font-bold mb-4">{service.title}</h2>
              <p className="text-lg mb-4 font-semibold">{service.description}</p>
              <p className="text-gray-700 mb-6">{service.detail}</p>
              <Link href={service.link} passHref>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 transition">
                  Mehr Erfahren
                </button>
              </Link>
            </div>

            {/* Right Image */}
            <div className="relative w-full md:w-1/2 flex justify-center">
              <Image
                src={service.imageDefault}
                alt={service.title}
                width={400}
                height={300}
                className="rounded-lg object-cover"
              />
            </div>
          </motion.div>
        </section>
      ))}
    </div>
  );
};

export default ServicesSection;
