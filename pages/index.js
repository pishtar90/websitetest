import React from "react";
import { motion } from "framer-motion";

const fadeVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeInOut" },
  },
};

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="h-[400vh] relative">
        {/* Salesforce Section */}
        <motion.section
          className="sticky top-0 h-screen flex items-center justify-center z-10 bg-gray-100"
          initial="hidden"
          whileInView="visible"
          variants={fadeVariants}
        >
          <h2 className="text-6xl font-bold">Salesforce</h2>
        </motion.section>

        {/* Website Section */}
        <motion.section
          className="sticky top-0 h-screen flex items-center justify-center z-20 bg-white"
          initial="hidden"
          whileInView="visible"
          variants={fadeVariants}
        >
          <h2 className="text-6xl font-bold">Website</h2>
        </motion.section>

        {/* Custom Development Section */}
        <motion.section
          className="sticky top-0 h-screen flex items-center justify-center z-30 bg-gray-200"
          initial="hidden"
          whileInView="visible"
          variants={fadeVariants}
        >
          <h2 className="text-6xl font-bold">Custom Development</h2>
        </motion.section>

        {/* Book Your Ekspert Section */}
        <motion.section
          className="sticky top-0 h-screen flex items-center justify-center z-40 bg-blue-600 text-white"
          initial="hidden"
          whileInView="visible"
          variants={fadeVariants}
        >
          <h2 className="text-6xl font-bold">Book Your Ekspert</h2>
        </motion.section>
      </div>
    </div>
  );
}
