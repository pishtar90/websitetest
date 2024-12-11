import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Testimonials from '../components/Testimonials';
import LogoSection from '../components/LogoSection'; 
import Hero from '../components/Hero';
import '../styles/global.css'; 
import AnimatedSection from '../components/AnimatedSection';
import '../styles/swiper.css';
import Work from '../pages/work';
import Wie from '../components/wie';
import Warum from '../components/warum';
import { motion } from 'framer-motion';

const fadeVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const Home = () => {
  const [hovered, setHovered] = useState(false);
  const [isHeroVisible, setHeroVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const heroElement = document.getElementById('hero');
      if (!heroElement) return;
      const heroHeight = heroElement.offsetHeight;
      const scrollY = window.scrollY;
      setHeroVisible(scrollY < heroHeight - 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>The Eksperts</title>
      </Head>

      <main className="font-matt flex flex-col items-center bg-white px-4">
        {/* Hero Section */}
        <div className="font-matt w-full max-w-[1280px] mx-auto text-center my-2">
          <Hero setHeroVisible={setHeroVisible} />
        </div>

        {/* Work, Wie, Warum */}
        <Work />
        <Wie />
        <Warum />

        {/* Sticky Scroll Service Sections */}
        <div className="relative h-[400vh]">
          {/* Salesforce Section */}
          <motion.section
            className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gray-100 z-40"
            initial="hidden"
            whileInView="visible"
            variants={fadeVariants}
          >
            <h2 className="text-6xl font-bold">Salesforce</h2>
            <p className="text-lg mt-4">Ihr Partner für nachhaltige Salesforce-Lösungen.</p>
          </motion.section>

          {/* Website Section */}
          <motion.section
            className="sticky top-0 h-screen flex flex-col items-center justify-center bg-white z-30"
            initial="hidden"
            whileInView="visible"
            variants={fadeVariants}
          >
            <h2 className="text-6xl font-bold">Website</h2>
            <p className="text-lg mt-4">Ihre digitale Visitenkarte – modern, effizient und einzigartig.</p>
          </motion.section>

          {/* Custom Development Section */}
          <motion.section
            className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gray-200 z-20"
            initial="hidden"
            whileInView="visible"
            variants={fadeVariants}
          >
            <h2 className="text-6xl font-bold">Custom Development</h2>
            <p className="text-lg mt-4">Individuelle Softwarelösungen für Ihre Anforderungen.</p>
          </motion.section>

          {/* Book Your Ekspert Section */}
          <motion.section
            className="sticky top-0 h-screen flex flex-col items-center justify-center bg-blue-600 text-white z-10"
            initial="hidden"
            whileInView="visible"
            variants={fadeVariants}
          >
            <h2 className="text-6xl font-bold">Book Your Ekspert</h2>
            <p className="text-lg mt-4">Flexibel und auf Abruf – Ihre Experten direkt verfügbar.</p>
          </motion.section>
        </div>

        {/* Additional Components */}
        <Testimonials />
        <AnimatedSection />
        <LogoSection />

        <section className="bg-white py-16 lg:py-2 lg:max-w-[1280px] mx-auto flex flex-col font-matt space-y-16 lg:space-y-0">
          {/* Content */}
        </section>
      </main>
    </>
  );
};

export default Home;
