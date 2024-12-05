import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import logo3 from "/images/graph.png";
import hoverImage1 from "/images/hover-image1.png";
import hoverImage2 from "/images/hover-image-2.png";
import hoverImage3 from "/images/hover-image-3.png";
import hoverImage4 from "/images/hover-image-4.png";
import hoverImage5 from "/images/hover-image-5.png";
import hoverImage6 from "/images/hover-image-6.png";


const GraphicDesignSection = () => {
  const additionalImages = [hoverImage1, hoverImage2, hoverImage3, hoverImage4, hoverImage5, hoverImage6];
  const [currentImage, setCurrentImage] = useState(logo3);
  const [hovering, setHovering] = useState(false);

  const handleMouseEnter = () => {
    setHovering(true);
    let currentIndex = 0;

    const interval = setInterval(() => {
      setCurrentImage(additionalImages[currentIndex]);
      currentIndex = (currentIndex + 1) % additionalImages.length;
    }, 900);

    document.hoverInterval = interval;
  };

  const handleMouseLeave = () => {
    setHovering(false);
    clearInterval(document.hoverInterval);
    setCurrentImage(logo3);
  };

  return (
    <section
      className="font-matt relative flex flex-col lg:flex-row items-center justify-between bg-[#FAFAFA] p-6 sm:p-8 rounded-[20px] max-w-[1280px] mx-auto my-8 lg:h-[620px] group transition-all duration-300 hover:bg-radial hover:bg-gradient-to-r from-[#D83200] via-[#0009FF] to-[#0009FF]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0 transition-transform duration-100 lg:group-hover:translate-x-4">
        <Image
          src={currentImage}
          alt="Graphic Design"
          width={300}
          height={300}
          className="rounded-lg object-contain sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[450px] lg:h-[450px]"
          priority
        />
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 text-center lg:text-left space-y-8 transition-transform duration-500 lg:group-hover:-translate-x-4">
        <h2 className="font-matt text-3xl sm:text-4xl md:text-[80px] font-bold  transition-colors duration-300 group-hover:text-white">
          Graphic Design
        </h2>
        <p className="text-[#5A585A] text-sm sm:text-base mt-6 md:text-[17px] md:font-bold leading-relaxed transition-colors duration-300 group-hover:text-white">
        Visuelle Kommunikation, die Eindruck macht.
        </p>
        <p className="text-[#5A585A] mb-6 font-matt font-[20px] leading-tight transition-colors duration-300 group-hover:text-white">
        Unser kreatives Team gestaltet Designs, die Ihre Botschaft klar transportieren und Ihre Marke im Gedächtnis bleiben lassen. Ob Logo, komplette Markenidentität, Print oder Digital – wir liefern durchdachte und frische Ideen, die Ihre Zielgruppe begeistern.
        </p>
            <p className="text-[#5A585A] text-sm sm:text-base md:text-[17px] md:font-bold leading-relaxed transition-colors duration-300 group-hover:text-white">
            Zeigen Sie Ihre Marke von ihrer besten Seite.        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
          <Link href="/services/graphicdesign">
            <button className="font-matt border-2 border-[#0009FF] text-white bg-[#0009FF] px-4 py-2 rounded-[20px] text-sm sm:text-base font-extrabold transition-all duration-300 group-hover:border-white group-hover:text-[#0009FF] group-hover:bg-white">
              MEHR <br />
              ERFAHREN
            </button>
          </Link>
          <Link href="/contact">
            <button className="font-matt border-2 border-[#0009FF] text-[#0009FF] bg-white px-4 py-2 rounded-[20px] text-sm sm:text-base font-extrabold transition-all duration-300 group-hover:bg-transparent group-hover:text-white group-hover:border-white">
              JETZT PROJEKT <br />
              STARTEN
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GraphicDesignSection;
