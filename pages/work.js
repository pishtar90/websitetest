import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import secondImage from '/images/costum-normal-2.png';
import secondImage2 from '/images/costum-hover.png';
import firstImage from '/images/website-normal.png';
import firstImage2 from '/images/website-hover.png';
import figure from '/images/the-eksperts-book.png';
import figure2 from '/images/the-eksperts-book-hover.png';

// Animation Variants
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } },
};

const ServicesSection = () => {
  const sections = [
    {
      title: "Salesforce",
      description: "Ihr Partner für individuelle und nachhaltige Salesforce Lösungen.",
      details:
        "Als offizieller Salesforce-Partner helfen wir Ihnen, das volle Potenzial von Salesforce zu nutzen. Ob Neuimplementierung, Optimierung oder massgeschneiderte Integrationen – wir stehen Ihnen zur Seite.",
      link: "/services/salesforce",
    },
    {
      title: "Website",
      description: "Ihre digitale Visitenkarte – modern, effizient und einzigartig.",
      details:
        "Wir gestalten Websites, die gut aussehen und performen – ob Unternehmensseite, E-Commerce oder Portfolio. Optimiert für SEO und Performance.",
      link: "/services/website",
    },
    {
      title: "Custom Development",
      description: "Individuelle Softwarelösungen für einzigartige Anforderungen.",
      details:
        "Wir entwickeln skalierbare und zukunftssichere Anwendungen, die perfekt auf Ihre Bedürfnisse zugeschnitten sind.",
      link: "/services/customdevelopment",
    },
    {
      title: "Book Your Ekspert",
      description: "Ihre Expertise – flexibel und auf Abruf.",
      details:
        "Buchen Sie erfahrene Fachkräfte, die Ihre Projekte individuell und flexibel voranbringen.",
      link: "/services/bookyourekspert",
    },
  ];

  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sectionHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const current = Math.min(Math.floor(scrollY / sectionHeight), sections.length - 1);
      setCurrentSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-screen">
      {sections.map((section, index) => (
        <motion.section
          key={index}
          className={`absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center px-8 text-center ${
            index === currentSection ? "block" : "hidden"
          }`}
          initial="hidden"
          animate={index === currentSection ? "visible" : "hidden"}
          variants={sectionVariants}
        >
          <h2 className="text-6xl font-bold text-[#0009FF] mb-4">{section.title}</h2>
          <p className="text-xl font-semibold mb-4">{section.description}</p>
          <p className="max-w-2xl text-lg mb-6">{section.details}</p>
          <Link href={section.link} passHref>
            <button className="border-2 border-[#0009FF] text-[#0009FF] px-6 py-2 rounded-full hover:bg-[#0009FF] hover:text-white transition">
              Mehr Erfahren
            </button>
          </Link>
        </motion.section>
      ))}
    </div>
  );
};

export default ServicesSection;
