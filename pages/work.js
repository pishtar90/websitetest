// components/ServicesSection.js
import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    id: "web-design",
    heading: "Web design & development",
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

const ServicesSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Our Services
        </motion.h2>
        <div className="space-y-12">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col lg:flex-row"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: index * 0.3,
        ease: [0.25, 0.46, 0.45, 0.94], // Webflow-like smooth easing
      }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Text Section */}
      <div className="lg:w-1/2 p-6 flex flex-col justify-between">
        <div>
          <motion.h3
            className="text-2xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.4, duration: 0.8 }}
          >
            {service.heading}
          </motion.h3>
          <p className="text-gray-600 mb-6">{service.description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {service.tags.map((tag) => (
              <a
                key={tag.name}
                href={tag.link}
                className="text-blue-500 hover:underline text-sm"
              >
                {tag.name}
              </a>
            ))}
          </div>
        </div>
        <a
          href={service.link}
          className="inline-block mt-4 text-blue-600 hover:text-blue-700 font-semibold"
        >
          Find out more →
        </a>
      </div>

      {/* Video Section */}
      <motion.div
        className="lg:w-1/2 relative"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.6, duration: 0.8 }}
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
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
      </motion.div>
    </motion.div>
  );
};

export default ServicesSection;
