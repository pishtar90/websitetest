// components/ServicesSection.js
import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    id: "web-design",
    heading: "Web Design & Development",
    description:
      "Crafting digital experiences where beauty meets ROI, turning heads and unlocking revenue potential with every click.",
    tags: [
      { name: "Creative web design", link: "/service/creative-web-design" },
      { name: "Web development", link: "/service/web-development" },
      { name: "Copywriting", link: "/service/copywriting" },
      { name: "E-Commerce", link: "/service/e-commerce" },
      { name: "WordPress", link: "/service/wordpress" },
    ],
    video: "https://kota-content.b-cdn.net/app/uploads/2024/02/homepage.mp4",
    link: "/service/web-design-development",
  },
  {
    id: "branding",
    heading: "Branding",
    description:
      "It all starts with your brand. We use sound strategic thinking to create or elevate your brand identity, from your visuals to your voice.",
    tags: [
      { name: "Brand strategy", link: "/service/brand-strategy" },
      { name: "Tone of voice", link: "/service/tone-of-voice" },
      { name: "Visual identity", link: "/service/visual-identity" },
    ],
    video: "https://kota-content.b-cdn.net/app/uploads/2024/02/homepage-1.mp4",
    link: "/service/branding",
  },
  {
    id: "digital-marketing",
    heading: "Digital Marketing",
    description:
      "Delivering eye-catching motion graphics and campaigns that earn attention, spark emotion and increase conversions.",
    tags: [
      { name: "Motion graphics", link: "/service/motion-graphics" },
      { name: "Creative campaigns", link: "/service/creative-campaigns" },
      { name: "Marketing support", link: "/service/marketing-support" },
    ],
    video: "https://kota-content.b-cdn.net/app/uploads/2024/02/homepage-3.mp4",
    link: "/service/digital-marketing",
  },
];

// Animation variants for staggered appearance
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ServicesSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-100 to-blue-200 py-16 overflow-hidden">
      {/* Title */}
      <h2 className="text-5xl font-extrabold text-center mb-12 text-blue-900">
        Our Services
      </h2>

      {/* Service Cards */}
      <div className="container mx-auto space-y-12 px-6 lg:px-20">
        {services.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </section>
  );
};

const ServiceCard = ({ service }) => {
  return (
    <motion.div
      className="group bg-white rounded-xl shadow-lg flex flex-col lg:flex-row overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-500"
      initial="hidden"
      whileHover="visible"
      variants={staggerContainer}
    >
      {/* Text Section */}
      <div className="lg:w-1/2 p-6 flex flex-col justify-between relative">
        <motion.h3
          className="text-3xl font-bold text-blue-900 mb-4"
          variants={fadeInUp}
        >
          {service.heading}
        </motion.h3>
        <motion.p className="text-gray-600 mb-6" variants={fadeInUp}>
          {service.description}
        </motion.p>
        <motion.div
          className="flex flex-wrap gap-2 mb-6"
          variants={fadeInUp}
        >
          {service.tags.map((tag) => (
            <a
              key={tag.name}
              href={tag.link}
              className="text-blue-500 hover:underline text-sm"
            >
              {tag.name}
            </a>
          ))}
        </motion.div>
        <motion.a
          href={service.link}
          className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-semibold"
          variants={fadeInUp}
        >
          Find out more →
        </motion.a>
      </div>

      {/* Video Section */}
      <motion.div
        className="lg:w-1/2 relative group-hover:scale-105 transition-transform duration-500"
        whileHover={{ scale: 1.05 }}
      >
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={service.video} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 group-hover:opacity-0 transition-all duration-700"></div>
      </motion.div>
    </motion.div>
  );
};

export default ServicesSection;
