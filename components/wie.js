import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Animation Variants
const fadeVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeInOut" } },
};

const HeaderSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className="sticky top-0 flex flex-col items-center justify-center h-screen bg-white transition-opacity duration-700 z-50"
    >
      <motion.h2
        className="text-black text-6xl uppercase font-matt lg:leading-[158px] font-[222] lg:text-[174px] tracking-[-2.88px] text-center"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{
          duration: 0.9,
          ease: "easeInOut",
        }}
      >
        WIE WIR <br /> ARBEITEN
      </motion.h2>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="109"
        height="110"
        viewBox="0 0 109 110"
        fill="none"
        className="w-[100px] h-[100px] mt-6"
        style={{
          transformOrigin: "center",
        }}
        initial={{ rotate: 0 }}
        animate={{
          rotate: inView ? 270 : 0,
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
      >
        <path d="M39.6 54.8L20.4 35.5L1.1 54.8L20.4 74.1L39.6 54.8Z" fill="black" />
        <path
          d="M95.3 69L59.3 69L45.7 55.4L54.8 46.4C57.7 43.4 61.8 41.8 66 41.8H95.3V69Z"
          fill="black"
        />
        <path
          d="M73.9 20.2L42.2 51.9L34.2 43.8C28 37.6 28 27.6 34.2 21.4L54.6 1L73.9 20.2Z"
          fill="black"
        />
        <path
          d="M74.6 89.8L55.3 109L34.3 88C28.5 82.2 28.5 72.7 34.3 66.8L43 58.1L74.6 89.8Z"
          fill="black"
        />
      </motion.svg>
    </div>
  );
};

const Section = ({ title, text, image, reverse }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <motion.section
      ref={ref}
      className={`font-matt flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center justify-between px-4 md:px-2 py-8 lg:min-w-[1280px] mx-auto`}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeVariants}
    >
      <motion.div className="flex-1 max-w-lg text-center md:text-left">
        <motion.h2
          className="font-matt text-2xl md:text-[28px] md:leading-[37px] font-extrabold text-black mb-4 uppercase"
          variants={fadeVariants}
        >
          {title}
        </motion.h2>
        <motion.p
          className="font-matt text-lg lg:text-[20px] lg:leading-[33px] text-gray-700"
          variants={fadeVariants}
        >
          {text}
        </motion.p>
      </motion.div>
      <motion.div
        className="flex-1 mt-8 md:mt-0 flex justify-center"
        variants={fadeVariants}
      >
        <img
          src={image}
          alt={title}
          className="w-full lg:w-[750px] lg:h-[600px] object-cover"
        />
      </motion.div>
    </motion.section>
  );
};

const WieWirArbeiten = () => {
  return (
    <div className="overflow-y-hidden">
      <HeaderSection />
      <Section
        title="Unsere 4 Säulen – Ein ganzheitlicher Ansatz"
        text="Unser Ansatz baut auf vier zentralen Säulen auf, die nahtlose Zusammenarbeit und nachhaltige Ergebnisse sichern. Von der Analyse eurer Anforderungen über die visuelle und technische Umsetzung bis zur langfristigen Partnerschaft entwickeln wir Lösungen, die eure aktuellen und zukünftigen Bedürfnisse erfüllen. Jede Phase ist auf Zusammenarbeit und Qualität ausgerichtet, um echten Mehrwert zu schaffen."
        image="/images/all 1.png"
      />
      <Section
        title="Verstehen und Kommunikation – Die Basis für euren Erfolg"
        text="Alles beginnt mit einer klaren und offenen Kommunikation. Wir analysieren eure Anforderungen, verstehen eure individuellen Herausforderungen und definieren gemeinsam die Ziele. Durch Consulting, Business-Analyse und strategische Planung legen wir den Grundstein für massgeschneiderte Lösungen, die eure spezifischen Bedürfnisse widerspiegeln."
        image="/images/blue 1.png"
        reverse
      />
      <Section
        title="UI/UX – Benutzerzentrierte Gestaltung für eure Lösung"
        text="Im nächsten Schritt gestalten wir das Look-and-Feel eurer Lösung. Wir entwickeln Prototypen, optimieren Prozesse und entwerfen ein ansprechendes, intuitives Design. Unser Ziel ist es, dass eure Website, Software oder andere Plattformen nicht nur ästhetisch überzeugen, sondern auch funktional und benutzerfreundlich sind, um den höchsten Ansprüchen gerecht zu werden."
        image="/images/yellow 1.png"
      />
      <Section
        title="Technische Implementierung – Von der Idee zur Realität"
        text="Hier setzen wir eure Vision in die Tat um. Wir entwickeln leistungsfähige und skalierbare Systeme, die eure Anforderungen perfekt erfüllen. Egal ob Online-Shop, Salesforce-Instanz, Cloud-Infrastruktur oder ERP/CRM-System – wir stellen sicher, dass die technische Umsetzung stabil, effizient, sicher und zukunftssicher ist."
        image="/images/Green 1.png"
        reverse
      />
      <Section
        title="Optimierung, Schulung und Support – Nachhaltige Partnerschaft"
        text="Unsere Arbeit endet nicht mit der Implementierung. Wir stehen euch langfristig zur Seite, indem wir die Lösungen kontinuierlich optimieren, Schulungen anbieten und zuverlässigen Support gewährleisten. Unsere Systeme sind darauf ausgelegt, euch auch in Zukunft zu unterstützen – und wenn es Fragen gibt, sind wir immer für euch da. Unser Ziel ist es, euch eine nachhaltige und zukunftsfähige Lösung zu bieten, die langfristig Mehrwert schafft."
        image="/images/red 1.png"
      />
    </div>
  );
};

export default WieWirArbeiten;
