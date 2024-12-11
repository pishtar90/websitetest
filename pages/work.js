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
    exiting: {
      opacity: 0,
      y: -50,
      transition: { duration: 1.6, ease: "easeOut" },
    },
  };
  


const ServicesSection = () => {
  const [hovered, setHovered] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
   

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
      {/* Original Header */}
      <div
      className={`sticky top-0 flex flex-col items-center justify-center h-screen ${
        scrollY > 500 ? "opacity-0 pointer-events-none" : "opacity-100"
      } transition-opacity duration-700`}
    >
      <motion.h2
        className="text-black text-6xl uppercase font-matt lg:leading-[158px] font-[222] lg:text-[174px] tracking-[-2.88px] text-center"
        initial={{ opacity: 1 }}
        animate={{ opacity: scrollY > 500 ? 0 : 1 }}
        transition={{
          duration: 3.5, // Smooth fade-in/out
          ease: "easeInOut",
        }}
      >
        Was wir <br /> leisten
      </motion.h2>
      
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="109"
        height="110"
        viewBox="0 0 109 110"
        fill="none"
        className="w-[100px] h-[100px] mt-6"
        style={{
          rotate: `${Math.min(scrollY / 20, 270)}deg`, // Slowed rotation
          transformOrigin: "center",
        }}
        initial={{ rotate: 0 }}
        animate={{
          rotate: scrollY > 500 ? 270 : 0,
        }}
        transition={{
          duration: 2, // Adjusted for smoother rotation
          ease: "easeInOut",
        }}
      >
        <path
          d="M39.6286 54.7907L20.3691 35.5312L1.10965 54.7907L20.3691 74.0502L39.6286 54.7907Z"
          fill="black"
        />
        <path
          d="M95.2794 69.0033L59.3078 69.0033L45.745 55.4405L54.7589 46.4266C57.7402 43.4453 61.7853 41.7797 65.9983 41.7657L95.2794 41.7657L95.2794 69.0033Z"
          fill="black"
        />
        <path
          d="M73.865 20.2361L42.2464 51.8546L34.2262 43.8345C28.0257 37.634 28.0117 27.5703 34.2262 21.3558L54.6055 0.976562L73.865 20.2361Z"
          fill="black"
        />
        <path
          d="M74.6049 89.767L55.3454 109.027L34.3224 88.0034C28.4717 82.1528 28.4717 72.663 34.3224 66.8124L42.9863 58.1484L74.6049 89.767Z"
          fill="black"
        />
      </motion.svg>
    </div>

      {/* Section 1: Salesforce */}
      <motion.section
        ref={ref}
        className="group font-matt cloudy-section flex flex-col md:flex-row items-center justify-between p-2 rounded-[20px] bg-[#FAFAFA] max-w-[1280px] mx-auto my-8 lg:h-[600px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeVariants}
      >
        <div className="font-matt md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left z-10 lg:ml-8 lg:mr-12 lg:transition-all lg:duration-500 lg:ease-out lg:group-hover:ml-12">
        <h2 className="font-matt text-3xl sm:text-4xl md:text-5xl lg:text-[62px] font-[700] lg:leading-[80px] lg:mb-6 ">
            Salesforce
          </h2>
          <p className="text-black mb-6 font-matt font-[700] text-[20px] leading-[33px]">
            Ihr Partner für individuelle und nachhaltige Salesforce Lösungen.
          </p>
          <p className="text-black mb-6 font-matt text-[18px] font-[300] leading-[33px]">
           
                    Als offizieller Salesforce-Partner helfen wir Ihnen, das volle Potenzial von Salesforce zu nutzen. <br></br>
                    Ob Neuimplementierung, Optimierung oder
                    massgeschneiderte Integrationen – wir stehen Ihnen zur Seite.
          </p>
          <p className="text-black mb-6 font-matt font-[700] text-[20px] leading-[33px]">
          Kontaktieren Sie uns und starten Sie Ihre Salesforce-Reise!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/services/salesforce">
                        <motion.button className="font-matt border-2 border-[#0009FF] text-white bg-[#0009FF] px-4 py-1 rounded-[20px] font-[800] text-[14px] transition-colors duration-200 group-hover:text-white group-hover:bg-black group-hover:border-black">
                        MEHR <br>
                            </br>ERFAHREN
                        </motion.button>
                        </Link>
                        <Link href="/contact">
                        <motion.button className="font-matt border-2 border-[#0009FF] text-[#0009FF] bg-white px-4 py-1 rounded-[20px] font-[800] text-[14px] transition-colors duration-200 group-hover:text-white group-hover:bg-[#0009FF]">
                            JETZT PROJEKT <br>
                            </br>STARTEN
                        </motion.button>
                        </Link>
          </div>
        </div>
        <div className="font-matt md:w-1/2 mt-8 md:mt-0 flex justify-center z-10 group-hover:scale-115 transition-transform duration-300 ease-out">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1110 1177"  class="svg-hover">
                    <defs>
                        <style>
                        {`
                            .cls-1 {
                            fill-rule: evenodd;
                            }
                            .cls-1, .cls-2 {
                            fill: #fff;
                            }
                            .cls-3 {
                            fill: #032e61;
                            }
                            .cls-4 {
                            fill: #00a1e0;
                            }
                        `}
                        </style>
                        </defs>
                        <g>
                        <g id="Layer_1">
                        <rect class="cls-3" width="1110" height="1177" rx="61.8" ry="61.8"/>
                        <g>
                            <path class="cls-4" d="M487.7,235.9c25.9-27,61.9-43.7,101.8-43.7s99.2,29.5,123.8,73.4c21.4-9.6,45.1-14.9,70-14.9,95.5,0,173,78.1,173,174.5s-77.5,174.5-173,174.5c-11.4,0-22.9-1.1-34.1-3.4-21.7,38.7-63,64.8-110.4,64.8-19.2,0-38.1-4.3-55.3-12.7-22,51.7-73.2,87.9-132.8,87.9s-115.1-39.3-135.4-94.4c-9.1,1.9-18.3,2.9-27.5,2.9-74,0-133.9-60.6-133.9-135.3s26.9-93.8,67-117.2c-8.5-19.5-12.8-40.6-12.8-61.9,0-86,69.8-155.6,155.8-155.6s95.4,24,123.9,61.3"/>
                            <path class="cls-2" d="M270,466c-.5,1.3.2,1.6.3,1.8,1.5,1.1,3,1.9,4.6,2.8,8.2,4.3,15.9,5.6,24,5.6,16.5,0,26.7-8.7,26.7-22.8v-.3c0-13-11.5-17.8-22.4-21.2l-1.4-.5c-8.1-2.7-15.2-4.9-15.2-10.3v-.3c0-4.6,4.1-8,10.5-8s15.5,2.4,20.9,5.3c0,0,1.6,1,2.2-.5,1.1-3,2.2-6,3.3-9,.3-.9-.2-1.5-.8-1.8-6.2-3.8-14.7-6.3-23.6-6.3h-1.6c-15.1,0-25.6,9.1-25.6,22.2v.3c0,13.7,11.6,18.2,22.5,21.3l1.7.5c7.9,2.4,14.8,4.5,14.8,10.1v.3c0,5.1-4.4,8.9-11.6,8.9s-11.6,0-21.2-6.1c-1.2-.7-1.8-1.2-2.7-1.7-.5-.3-1.6-.8-2.2.7l-3.3,9h0ZM511,466c-.5,1.3.2,1.6.3,1.8,1.5,1.1,3,1.9,4.6,2.8,8.2,4.3,15.9,5.6,24,5.6,16.5,0,26.7-8.7,26.7-22.8v-.3c0-13-11.5-17.8-22.4-21.2l-1.4-.5c-8.2-2.7-15.2-4.9-15.2-10.3v-.3c0-4.6,4.1-8,10.5-8s15.5,2.4,20.9,5.3c0,0,1.6,1,2.2-.5,1.1-3,2.2-6,3.3-9,.3-.9-.2-1.5-.8-1.8-6.2-3.8-14.7-6.3-23.6-6.3h-1.7c-15.1,0-25.6,9.1-25.6,22.2v.3c0,13.7,11.6,18.2,22.5,21.3l1.7.5c7.9,2.4,14.8,4.5,14.8,10.1v.3c0,5.1-4.4,8.9-11.6,8.9s-11.6,0-21.2-6.1c-1.2-.7-1.8-1.1-2.7-1.7-.3-.2-1.7-.7-2.2.7l-3.3,9h0ZM675.5,438.3c0,8-1.5,14.2-4.4,18.7-2.9,4.4-7.3,6.5-13.4,6.5s-10.5-2.1-13.3-6.5c-2.9-4.4-4.3-10.7-4.3-18.7s1.5-14.2,4.3-18.6c2.9-4.3,7.2-6.5,13.3-6.5s10.5,2.1,13.4,6.5c2.9,4.4,4.4,10.6,4.4,18.6M689.2,423.6c-1.4-4.6-3.5-8.6-6.3-11.9-2.8-3.4-6.3-6.1-10.5-8-4.2-2-9.2-2.9-14.7-2.9s-10.5,1-14.7,2.9c-4.2,2-7.8,4.7-10.6,8-2.8,3.4-4.9,7.4-6.2,11.9-1.3,4.5-2,9.5-2,14.8s.7,10.2,2,14.8c1.3,4.6,3.4,8.6,6.2,11.9,2.8,3.4,6.4,6.1,10.6,8,4.2,1.9,9.2,2.9,14.7,2.9s10.5-1,14.7-2.9c4.2-1.9,7.8-4.6,10.6-8,2.8-3.4,4.9-7.4,6.3-11.9,1.3-4.5,2-9.5,2-14.8s-.7-10.2-2-14.8"/>
                            <path class="cls-1" d="M802,461.4c-.5-1.3-1.8-.8-1.8-.8-2,.8-4.1,1.5-6.4,1.8-2.5.4-5,.6-7.5.5-6.6,0-11.9-2-15.7-5.9-3.8-3.9-5.9-10.2-5.9-18.8,0-7.8,1.9-13.6,5.3-18.1,3.4-4.4,8.5-6.7,15.2-6.7s10,.7,14.5,2.1c0,0,1.1.5,1.6-.9,1.2-3.3,2.1-5.7,3.4-9.4.4-1-.5-1.5-.9-1.6-1.8-.7-6-1.8-9.2-2.3-3-.4-6.4-.7-10.3-.7-5.8,0-10.9,1-15.3,2.9-4.4,2-8.1,4.7-11.1,8-2.9,3.4-5.2,7.4-6.7,11.9-1.5,4.5-2.2,9.5-2.2,14.8,0,11.4,3.1,20.6,9.1,27.3,6.1,6.8,15.2,10.2,27.1,10.2s14.3-1.4,19.5-3.5c0,0,1-.5.6-1.6l-3.4-9.3h0ZM826.1,430.7c.7-4.4,1.9-8.1,3.8-11,2.8-4.3,7.2-6.7,13.3-6.7s10.1,2.4,13,6.7c1.9,2.9,2.8,6.7,3.1,11h-33.2ZM872.3,421c-1.2-4.4-4.1-8.8-5.9-10.9-3-3.2-5.9-5.5-8.8-6.7-4.2-1.8-8.7-2.7-13.3-2.7-5.8,0-11.1,1-15.4,3-4.3,2-7.9,4.8-10.7,8.2-2.8,3.4-4.9,7.5-6.3,12.1-1.4,4.6-2,9.6-2,14.8s.7,10.4,2.1,14.8c1.4,4.5,3.7,8.5,6.7,11.8,3.1,3.3,7,5.9,11.7,7.8,4.7,1.8,10.4,2.8,16.9,2.7,13.4,0,20.5-3,23.4-4.7.5-.3,1-.8.4-2.2l-3-8.5c-.5-1.3-1.7-.8-1.7-.8-3.3,1.2-8.1,3.5-19.1,3.4-7.2,0-12.6-2.1-15.9-5.5-3.4-3.4-5.1-8.4-5.4-15.5h46.5s1.2,0,1.3-1.2c0-.5,1.6-9.6-1.4-20M453.6,430.7c.7-4.4,1.9-8.1,3.8-11,2.9-4.3,7.2-6.7,13.3-6.7s10.1,2.4,13,6.7c1.9,2.9,2.8,6.7,3.1,11h-33.2,0ZM499.9,421c-1.2-4.4-4.1-8.8-5.9-10.9-3-3.2-5.9-5.5-8.8-6.7-4.2-1.8-8.7-2.7-13.3-2.7-5.8,0-11.1,1-15.4,3-4.3,2-7.9,4.8-10.7,8.2-2.8,3.4-4.9,7.5-6.3,12.1-1.4,4.6-2.1,9.6-2.1,14.8s.7,10.4,2.1,14.8c1.4,4.5,3.7,8.5,6.7,11.8,3.1,3.3,7,5.9,11.7,7.8,4.7,1.8,10.4,2.8,16.9,2.7,13.4,0,20.5-3,23.4-4.7.5-.3,1-.8.4-2.2l-3-8.5c-.5-1.3-1.7-.8-1.7-.8-3.3,1.2-8.1,3.5-19.1,3.4-7.2,0-12.6-2.1-15.9-5.5-3.4-3.4-5.1-8.4-5.4-15.5h46.5s1.2,0,1.3-1.2c0-.5,1.6-9.6-1.4-20"/>
                            <path class="cls-2" d="M353.1,461.2c-1.8-1.5-2.1-1.8-2.7-2.8-.9-1.4-1.4-3.5-1.4-6.1,0-4.1,1.4-7,4.2-9,0,0,4-3.5,13.5-3.4,4.2,0,8.5.4,12.6,1.1v21.2s-5.9,1.3-12.6,1.7c-9.5.6-13.7-2.7-13.6-2.7M371.6,428.5c-2.4-.2-4.8-.2-7.3-.2-4,0-7.8.5-11.4,1.5-3.6,1-6.9,2.5-9.7,4.5-2.8,2-5.1,4.6-6.7,7.7-1.7,3.1-2.5,6.7-2.5,10.7s.7,7.7,2.1,10.6c1.4,2.9,3.5,5.4,6.1,7.3,2.6,1.9,5.8,3.3,9.5,4.1,3.7.8,7.8,1.3,12.3,1.3s9.5-.4,14.1-1.2c4.6-.8,10.2-1.9,11.7-2.3,1.6-.4,3.3-.8,3.3-.8,1.1-.3,1.1-1.5,1.1-1.5v-42.5c0-9.3-2.5-16.2-7.4-20.5-4.9-4.3-12.1-6.4-21.4-6.4s-9.1.5-12.5,1.1c0,0-10.2,2-14.3,5.2,0,0-.9.6-.4,1.8l3.3,8.8c.4,1.1,1.5.8,1.5.8,0,0,.4-.1.8-.4,9-4.9,20.3-4.7,20.3-4.7,5,0,8.9,1,11.5,3,2.5,2,3.8,4.9,3.8,11.1v2c-2.5-.4-5.1-.7-7.7-.9"/>
                            <path class="cls-1" d="M746.7,404.5c.3-.6,0-1.4-.7-1.7,0,0,0,0,0,0-.8-.3-4.8-1.1-7.8-1.3-5.8-.4-9.1.6-12,1.9-2.9,1.3-6.1,3.4-7.9,5.8v-5.7c0-.8-.6-1.4-1.3-1.4h-11.9c-.8,0-1.3.6-1.3,1.4v69.4c0,.8.6,1.4,1.4,1.4h12.2c.8,0,1.4-.6,1.4-1.4v-34.7c0-4.7.5-9.3,1.5-12.2,1-2.9,2.4-5.2,4.1-6.8,1.6-1.6,3.6-2.8,5.8-3.5,2.2-.7,4.5-.9,6.2-.9,2.4,0,5.1.6,5.1.6.9.1,1.4-.4,1.7-1.2.8-2.1,3.1-8.5,3.5-9.8M632,372.4c-1.5-.5-3-.8-4.6-1.1-1.8-.3-3.9-.5-6.3-.5-8.4,0-15,2.4-19.7,7.1-4.6,4.7-7.8,11.8-9.3,21.1l-.6,3.1h-10.6s-1.3,0-1.6,1.4l-1.7,9.7c-.1.9.3,1.5,1.5,1.5h10.3l-10.4,58.2c-.8,4.7-1.7,8.5-2.8,11.5-1,2.9-2,5-3.2,6.6-1.2,1.5-2.3,2.6-4.3,3.3-1.6.5-3.5.8-5.5.8-1.3,0-2.5-.2-3.7-.4-1.1-.2-1.7-.5-2.5-.8,0,0-1.2-.5-1.7.7-.4,1-3.1,8.5-3.5,9.5-.3.9.1,1.6.7,1.9,1.4.5,2.4.8,4.3,1.2,2.6.6,4.8.6,6.8.6,4.3,0,8.2-.6,11.4-1.8,3.3-1.2,6.1-3.2,8.6-6,2.7-3,4.4-6.1,6-10.4,1.6-4.2,3-9.5,4.1-15.6l10.5-59.3h15.3s1.3,0,1.6-1.4l1.7-9.7c.1-.9-.3-1.5-1.5-1.5h-14.9c0-.3.8-5.6,2.5-10.5.7-2.1,2.1-3.8,3.3-5,1.1-1.1,2.4-1.9,3.9-2.4,1.5-.5,3.2-.7,5-.7,1.3,0,2.6.1,3.8.4,1.4.3,2,.5,2.4.6,1.5.5,1.7,0,2-.7l3.6-9.8c.4-1-.5-1.5-.9-1.6M424.2,473c0,.8-.6,1.4-1.3,1.4h-12.3c-.8,0-1.3-.6-1.3-1.4v-99.3c0-.8.6-1.4,1.3-1.4h12.3c.8,0,1.3.6,1.3,1.4v99.3Z"/>
                        </g>
                        <path class="cls-2" d="M229.9,868.3c13.1,0,19.7-4.5,19.7-15.4s-6.4-15-20.9-15h-12.8v30.4h14ZM184.7,937v-127.7h43.1c13.6-.2,23.8,1.7,30.5,4.8,13.8,6.4,22.4,21.1,22.4,38.3s-13.1,44.5-49.7,44.5h-15.2v40h-31.2ZM334.1,849.1l-.5-.2-13.1,43.7h26.7l-13.1-43.5h0ZM362,937l-6.2-18.5h-44.4l-6.7,18.5h-35l51.2-127.7h25.7l50.7,127.7h-35.4,0ZM453.8,873.5c12.9,0,20.9-6,20.9-18.3s-8.3-17.3-20.5-17.3h-12.4v35.5h12.1ZM471.6,937l-29.5-41.3h-.3v41.3h-31.2v-127.7h41.8c13.3,0,23.5,1.7,30.2,4.7,13.8,6.2,23.5,21.2,23.5,39.3s-12.1,36.8-31.8,40.2l34.7,43.5h-37.3,0ZM534.2,937v-99.1h-25.2v-28.6h82.8v28.6h-25v99.1h-32.6ZM684.3,937l-49-78,.9,78h-31.2v-127.7h28.1l49.7,80.8-1.4-80.8h31.2v127.7h-28.3,0ZM735.9,937v-127.7h70.9v28.6h-39.7v19.8h38.5v28.6h-38.5v21.9h39.7v28.6h-70.9,0ZM870.3,873.5c12.9,0,20.9-6,20.9-18.3s-8.3-17.3-20.5-17.3h-12.4v35.5h12.1ZM888.1,937l-29.5-41.3h-.3v41.3h-31.2v-127.7h41.8c13.3,0,23.5,1.7,30.2,4.7,13.8,6.2,23.5,21.2,23.5,39.3s-12.1,36.8-31.7,40.2l34.7,43.5h-37.3Z"/>
                        </g>
                    </g>
                    </svg>
        </div>
      </motion.section>

      {/* Section 2: Website */}
      <motion.section
        ref={ref}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="font-matt relative flex flex-col md:flex-row text-center lg:text-left items-center justify-between p-2 rounded-[20px] max-w-[1280px] mx-auto my-8 lg:h-[620px] bg-[#FAFAFA] transition-all duration-300 ease-in-out gradient-container"
        initial="hidden"

        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeVariants}
      >
        <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center relative transition-transform duration-500 ease-in-out hover:scale-105">
        <Image
                        src={firstImage}
                        alt="Default Image"
                        width={550}
                        height={520}
                        className={`rounded-lg object-contain transition-opacity duration-500 ease-in-out ${hovered ? 'opacity-0' : 'opacity-100'}`}
                        />

                        <Image
                        src={firstImage2}
                        alt="Hover Image"
                        width={550}  
                        height={530}
                        className={`rounded-lg object-contain absolute transition-opacity duration-500 ease-in-out transform ${hovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'}`}
                        />
        
        </div>
        <div className="group md:w-1/2 transition-all duration-500 ease-out lg:hover:mr-16 lg:mr-14">
        <h2 className="font-matt text-3xl sm:text-4xl md:text-5xl lg:text-[62px] font-[700] lg:leading-[80px] lg:mb-6 ">
            Website
          </h2>
          <p className="text-black mb-4 font-matt text-[20px] font-[700] leading-[33px]">
            Ihre digitale Visitenkarte – modern, effizient und einzigartig.
          </p>
          <p className="text-black mb-6 font-matt font-[300] text-[20px] leading-[33px]">
            Wir gestalten Websites, die gut aussehen und performen – 
            ob Unternehmensseite, E-Commerce oder Portfolio. <br></br>
            <span className="font-[700]">Individuelles Design:</span> Massgeschneidert für Ihre Marke. <br></br>
            <span className="font-[700]">Benutzerfreundlich:</span> Intuitive Navigation und responsives Design.<br></br>
            <span className="font-[700]">SEO & Performance:</span> Optimiert für Suchmaschinen, mit schnellen Ladezeiten und sicherer Technologie.
            </p>

          <p className="text-black mb-4 text-[20px] font-[700] font-matt leading-[33px]">
            Starten Sie jetzt Ihre digitale Transformation!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/services/website">
                        <motion.button className="font-matt border-2 border-[#0009FF] text-white bg-[#0009FF] px-4 py-1 rounded-[20px] font-[800] text-[14px] transition-colors duration-200 group-hover:text-white group-hover:bg-black group-hover:border-black">
                            MEHR <br>
                            </br>ERFAHREN
                        </motion.button>
                        </Link>
                        <Link href="/contact">
                        <motion.button className="font-matt border-2 border-[#0009FF] text-[#0009FF] bg-white px-4 py-1 rounded-[20px] font-[800] text-[14px] transition-colors duration-200 group-hover:bg-white group-hover:text-[#0009FF] group-hover:border-white">
                            JETZT PROJEKT <br>
                            </br>STARTEN
                        </motion.button>
                        </Link>
          </div>
        </div>
      </motion.section>
    
 

    <motion.section
            ref={ref}

      className="font-matt relative flex flex-col md:flex-row items-center justify-between p-2 rounded-[20px] max-w-[1280px] mx-auto my-8 lg:h-[620px] bg-[#FAFAFA] text-black overflow-hidden transition-all duration-500 group conic-gradient-container hover-gradient-container  hover:text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeVariants}
    >
      {/* Left Section: Text */}
      <motion.div
        className="font-matt md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left lg:ml-8 lg:group-hover:ml-12 transition-transform duration-300 ease-in-out lg:group-hover:translate-x-4"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 className="font-matt text-3xl sm:text-4xl md:text-5xl lg:text-[62px] font-[700] lg:leading-[80px] lg:mb-6 ">
        Custom Development
        </h2>
        <p className="font-matt text-black mb-4  text-[20px] leading-[33px] font-[700] lg:mb-4 transition-colors duration-300 group-hover:text-white">
          Individuelle Softwarelösungen für einzigartige Anforderungen.
        </p>
        <p className="text-black mb-4 font-matt text-[20px] font-[300] leading-[28px] group-hover:text-white">
        Keine Herausforderung ist zu gross. Wir entwickeln skalierbare und zukunftssichere Anwendungen, die perfekt auf Ihre Bedürfnisse zugeschnitten sind– von speziellen Modulen bis hin zu komplexen Systemen. Unsere Lösungen integrieren sich nahtlos in bestehende Systeme und nutzen modernste Technologien, um Ihrem Unternehmen einen Wettbewerbsvorteil zu verschaffen.
        </p>
        <p className="text-black mb-4 font-matt font-[700] text-[20px] leading-[33px] group-hover:text-white">
        Entwickeln Sie Ihre massgeschneiderte Lösung– starten Sie jetzt!
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
          <Link href="/services/costumdevelopment">
            <motion.button
              className="font-matt border-2 border-[#0009FF] text-white bg-[#0009FF] px-4 py-1 rounded-[20px] font-[800] text-[14px] transition-colors duration-200 group-hover:bg-black group-hover:text-white group-hover:border-black"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              MEHR <br />
              ERFAHREN
            </motion.button>
          </Link>
          <Link href="/contact">
            <motion.button
              className="font-matt border-2 border-[#0009FF] text-[#0009FF] bg-white px-4 py-1 rounded-[20px] font-[800] text-[14px] transition-colors duration-200 group-hover:bg-white group-hover:text-[#0009FF] group-hover:border-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              JETZT PROJEKT <br />
              STARTEN
            </motion.button>
          </Link>
        </div>
      </motion.div>

      {/* Right Section: Image */}
      <motion.div
        className="font-matt md:w-1/2 mt-8 md:mt-0 flex justify-center relative overflow-hidden"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="transition-transform duration-300 ease-in-out transform group-hover:scale-105">
          <Image
            src={secondImage}
            alt="Custom Development Image"
            className="rounded-lg object-contain drop-shadow-lg group-hover:hidden"
            priority
          />
          <Image
            src={secondImage2}
            alt="Custom Development Image Hover"
            className="rounded-lg object-contain drop-shadow-lg hidden group-hover:block"
            priority
          />
        </div>
      </motion.div>
    </motion.section>

    < GraphicDesignSection/>


      {/* Section: Book Your Experts */}
      <motion.section
              ref={ref}

      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="font-matt relative flex flex-col md:flex-row text-center lg:text-left items-center justify-between p-2 rounded-[20px] max-w-[1280px] mx-auto my-8 lg:h-[620px] bg-[#FAFAFA] transition-all duration-300 ease-in-out hover:bg-[#0009FF] group"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeVariants}
    >
      {/* Left Section: Text */}
      <motion.div
        className="group md:w-1/2 flex flex-col items-center md:space-y-6 md:items-start text-center md:text-left transition-colors duration-500 group-hover:text-white lg:ml-4 lg:group-hover:ml-8 space-y-4"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 className="font-matt text-3xl sm:text-4xl md:text-5xl lg:text-[62px] font-[700] lg:leading-[80px] ">
          Book your Ekspert
        </h2>
        <p className="text-black text-base font-[700] sm:text-lg font-matt leading-relaxed sm:leading-[30px] md:leading-[33px] transition-colors duration-500 group-hover:text-white">
          Ihre Expertise – flexibel und auf Abruf.
        </p>
        <p className="text-black text-base sm:text-lg font-[300] font-matt leading-relaxed sm:leading-[30px] md:leading-tight transition-colors duration-500 group-hover:text-white">
        Mit unserem „Book Your Ekspert"-Service bringen erfahrene Fachkräfte Ihre Projekte individuell und flexibel voran. Ob IT, Design, Entwicklung oder Beratung - buchen Sie unsere Eksperten genau dann, wenn Sie sie brauchen. Unsere Spezialistenintegrieren sich nahtlos in Ihr Team und Ihre Prozesse.
        </p>
        <p className="text-black text-base font-[700] sm:text-lg font-matt leading-relaxed sm:leading-[30px] md:leading-[33px] transition-colors duration-500 group-hover:text-white">
          Warum warten, wenn Sie Unterstützung brauchen?
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
          

          <Link href="/services/bookyourekspert">
            <motion.button
            className="border-2 border-[#0009FF] text-white bg-[#0009FF] group-hover:bg-black group-hover:text-white group-hover:border-black px-4 py-1 rounded-[20px] font-[800] text-[14px] transition-colors duration-300">
                                        MEHR <br />
                                        ERFAHREN
                                        </motion.button>
                                    </Link>
                                    <Link href="/services/contact">
                                        <motion.button className="border-2 border-[#0009FF] text-[#0009FF] bg-white group-hover:bg-white group-hover:text-[#0009FF] group-hover:border-white px-4 py-1 rounded-[20px] font-[800] text-[14px] transition-colors duration-300">
                                        JETZT PROJEKT <br />
                                        STARTEN
                                        </motion.button>
                                    </Link>
          
        </div>
      </motion.div>

      {/* Right Section: Image */}
      <motion.div
        className="md:w-1/2 mt-6 md:mt-0 flex justify-center relative overflow-hidden"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="transition-transform duration-500 ease-out transform group-hover:scale-100">
          {hovered ? (
            <div className="flex justify-center items-center w-full h-full">
              <Image
                                src={figure2}
                                alt="Book Your Ekspert Image"
                                width={550} 
                                height={550}
                                className=" object-contain "
                                priority
                                />
            </div>
          ) : (
            <Image
                                src={figure}
                                alt="Book Your Ekspert Image"
                                width={500} 
                                height={500}
                                className=" object-contain "
                                priority
                                />
          )}
        </div>
      </motion.div>
    </motion.section>


    </section>
  );
};

export default ServicesSection;
