import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const services = [
  {
    id: "web-design",
    heading: "Web Design & Development",
    description:
      "Crafting digital experiences where beauty meets ROI, turning heads and unlocking revenue potential with every click.",
    tags: ["Creative web design", "Web development", "Copywriting", "E-Commerce", "WordPress"],
    video: "https://kota-content.b-cdn.net/app/uploads/2024/02/homepage.mp4",
  },
  {
    id: "branding",
    heading: "Branding",
    description:
      "It all starts with your brand. We use sound strategic thinking to create or elevate your brand identity, from your visuals to your voice.",
    tags: ["Brand strategy", "Tone of voice", "Visual identity"],
    video: "https://kota-content.b-cdn.net/app/uploads/2024/02/homepage-1.mp4",
  },
  {
    id: "digital-marketing",
    heading: "Digital Marketing",
    description:
      "Delivering eye-catching motion graphics and campaigns that earn attention, spark emotion, and increase conversions.",
    tags: ["Motion graphics", "Creative campaigns", "Marketing support"],
    video: "https://kota-content.b-cdn.net/app/uploads/2024/02/homepage-3.mp4",
  },
];

// Animation Variants
const fadeVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
  exiting: {
    opacity: 0,
    y: -50,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const ServicesSection = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative bg-gray-50 py-2">
      {/* Title with Animated SVG */}
      <div
        className={`sticky top-0 flex flex-col items-center justify-center h-screen ${
          scrollY > 300 ? "opacity-0 pointer-events-none" : "opacity-100"
        } transition-opacity duration-500`}
      >
        <motion.h2
          className="text-black uppercase font-[Matt_Trial Variable] leading-[158px] text-[174px] tracking-[-2.88px] text-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: scrollY > 300 ? 0 : 1 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h2>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="109"
          height="110"
          viewBox="0 0 109 110"
          fill="none"
          className="w-[100px] h-[100px] mt-6"
          style={{
            rotate: `${Math.min(scrollY / 1, 270)}deg`, // Dynamic rotation on scroll
            transformOrigin: "center",
          }}
          initial={{ rotate: 0 }}
          animate={{
            rotate: scrollY > 250 ? 270 : 0, // Add a smooth animation for rotation
          }}
          transition={{
            duration: 0.2,
            ease: "easeOut",
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

      {/* Services Sections */}
      <div className="container mx-auto px-6 lg:px-20 space-y-16">
        {services.map((service, index) => (
          <ServicePanel key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};

const ServicePanel = ({ service }) => {
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
    <motion.div
      ref={ref}
      className="flex flex-col lg:flex-row items-center justify-between bg-white rounded-xl shadow-lg p-6 lg:p-12 space-y-8 lg:space-y-0"
      initial="hidden"
      animate={controls}
      variants={fadeVariants}
    >
      {/* Text Section */}
      <div className="lg:w-1/2 space-y-4 text-center lg:text-left">
        <h3 className="text-3xl font-bold text-gray-900">{service.heading}</h3>
        <p className="text-gray-600">{service.description}</p>
        <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
          {service.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Video Section */}
      <div className="lg:w-1/2">
        <div className="relative">
          <video
            className="w-full h-full object-cover rounded-xl shadow-md"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={service.video} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-20"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesSection;
