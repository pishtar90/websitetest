import React from "react";
import { motion } from "framer-motion";

const fadeVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeInOut" } },
};

const HeaderSection = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <motion.h2
        className="text-black text-6xl uppercase font-matt lg:leading-[158px] font-[222] lg:text-[174px] tracking-[-2.88px] text-center"
        initial="hidden"
        animate="visible"
        variants={fadeVariants}
        transition={{ duration: 0.9, ease: "easeInOut" }}
      >
        WARUM WIR <br /> BEGEISTERN
      </motion.h2>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="109"
        height="110"
        viewBox="0 0 109 110"
        fill="none"
        className="w-[100px] h-[100px] mt-6"
        initial={{ rotate: 0 }}
        animate={{ rotate: 270 }}
        transition={{ duration: 2, ease: "easeInOut" }}
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

const WarumWirBegeistern = () => {
  return (
    <section id="Warum wir begeistern" className="font-matt py-12 bg-white lg:min-w-[1280px] mx-auto">
      <HeaderSection />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-2">
        {/* Section 1 */}
        <motion.div
          className="flex flex-col items-center text-center space-y-7 lg:mt-[250px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeVariants}
        >
          <svg width="205" height="180" viewBox="0 0 205 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M193.735 88.8999L166.459 116.176L141.467 141.168L102.635 180L63.8032 141.168L26.5838 103.949L11.1989 88.564C-2.50641 74.8586 -2.50641 52.7554 11.1989 39.0501L45.4622 4.78679C51.8446 -1.5956 62.1908 -1.5956 68.6404 4.78679L102.635 38.7814L136.361 5.05552C142.743 -1.32687 153.089 -1.32687 159.539 5.05552L193.802 39.3188C207.508 53.0242 207.508 75.1273 193.802 88.8327L193.735 88.8999Z"
              fill="#E24125"
            />
          </svg>
          <h3 className="text-xl lg:text-[28px] leading-[37px] font-extrabold text-black uppercase">Liebe</h3>
        </motion.div>
        {/* Section 2 */}
        <motion.div
          className="flex flex-col items-center text-center space-y-7"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeVariants}
        >
          <svg width="205" height="180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 392.89 291.2">
            <rect fill="#0009ff" x="21.21" y="112.65" width="102.4" height="102.4" transform="translate(-94.65 99.19) rotate(-45)" />
            <path
              fill="#0009ff"
              d="M320.49,0l72.4,72.4-202.3,202.3c-22,22-57.6,22-79.6,0l-32.6-32.6L320.49,0h0Z"
            />
          </svg>
          <h3 className="text-xl lg:text-[28px] leading-[37px] font-extrabold text-black uppercase">Integrität</h3>
        </motion.div>
        {/* Section 3 */}
        <motion.div
          className="flex flex-col items-center text-center space-y-7 lg:mt-[250px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeVariants}
        >
          <svg width="205" height="180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 375.5 375.6">
            <path
              fill="#cfff49"
              d="M343.5,219.8l32-31.9-31.8-31.8h-79.2l39.6-39.6h0l-45.1-45.1-46.9,46.9-3.2,3.2c6.9-6.9,10.7-16.1,10.7-25.8v-63.7L187.7,0l-31.7,31.8v79.2l-39.6-39.6-45.1,45.1,39.6,39.6H31.7L0,187.9l31.9,31.9h63.7c9.7,0,18.9-3.8,25.8-10.7l-3.2,3.2-46.9,46.8h0l45.1,45.1,39.6-39.6v79.2l31.7,31.8,32-32v-63.7c0-9.7-3.8-18.9-10.7-25.8l50.1,50.1,45.1-45.1h0l-45.6-45.6-3.2-3.3c6.7,6.1,15.4,9.4,24.5,9.4h63.7l-.1.2Z"
            />
          </svg>
          <h3 className="text-xl lg:text-[28px] leading-[37px] font-extrabold text-black uppercase">Exzellenz</h3>
        </motion.div>
      </div>
      {/* Additional Two Sections */}
      <motion.div
  className="grid grid-cols-1 md:grid-cols-2 gap-2 px-6 md:px-28 mt-20"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  variants={fadeVariants}
>
  <motion.div
    className="flex flex-col items-center text-center space-y-7"
    variants={fadeVariants}
  >
    <motion.svg
      width="205"
      height="180"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 582.6 290.4"
      variants={fadeVariants}
    >
      <rect fill="#03c319" y="79.9" width="37.9" height="37.9" />
      <rect fill="#03c319" x="544.7" y="252.4" width="37.9" height="37.9" />
      <path
        fill="#03c319"
        d="M526.5,290.4h-260.4c-46,0-83.2-37.3-83.2-83.2v-34.7h225.7c65.1,0,117.9,52.8,117.9,117.9Z"
      />
      <path
        fill="#03c319"
        d="M56.4,117.8h260.3c46,0,83.2-37.3,83.2-83.2V0h-225.7C109.1,0,56.3,52.8,56.3,117.9l.1-.1Z"
      />
    </motion.svg>
    <h3 className="text-xl lg:text-[28px] leading-[37px] font-extrabold text-black uppercase">
      Kommunikation
    </h3>
  </motion.div>
  <motion.div
    className="flex flex-col items-center text-center space-y-7"
    variants={fadeVariants}
  >
    <motion.svg
      width="205"
      height="180"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 408.2 445.61"
      variants={fadeVariants}
    >
      <path
        fill="#cfff49"
        d="M408.1,238.11l-40.2,40.2h-119.4v167.3h-48.4v-200.8c0-5.7,1-11.2,2.9-16.2.5-1.6,1.2-3.1,2-4.6,1-2,2.1-3.9,3.3-5.6,3.7-5.4,8.5-10,14-13.3,7.1-4.5,15.7-7.1,24.6-7.1h121.1l40.2,40.2-.1-.1Z"
      />
      <path
        fill="#03c319"
        d="M208.2,190.91v24c-2,2.8-3.5,5.8-4.8,9-.6,1.5-1.2,3.1-1.6,4.6-1.2,4.1-1.8,8.4-1.8,12.9v204.1h-31.9v-173.9c0-1-.1-2-.1-3.1v-40.1H40.2L0,188.21l40.2-40.2h123.9c1.3,0,2.6,0,3.9.2,22.1,1.9,39.5,20.1,40.2,42.5h0v.2Z"
      />
      <path
        fill="#0009ff"
        d="M248.3,194.51h-1.4c-9.9,0-19.1,3.1-26.6,8.4-4.7,3.2-8.8,7.3-12,12v-27.2c0-23.1-17.7-42-40.3-44V40.11h80.3v154.4Z"
      />
      <rect
        fill="#0009ff"
        x="179.71"
        y="11.74"
        width="56.7"
        height="56.7"
        transform="translate(32.59 158.86) rotate(-45)"
      />
    </motion.svg>
    <h3 className="text-xl lg:text-[28px] leading-[37px] font-extrabold text-black uppercase">
      Flexibilität
    </h3>
  </motion.div>
</motion.div>
    </section>
  );
};

export default WarumWirBegeistern;
