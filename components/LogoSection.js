import { useState } from 'react';
import { useRouter } from 'next/router'; // Use Next.js router for navigation

const LogoSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const router = useRouter(); // Initialize the Next.js router

  const logos = [
    { default: "/images/mobiliar-logo.png", hover: "/images/mobiliar-logo-hover.png" },
    { default: "/images/phc-logo.png", hover: "/images/phc-logo-hover.png" },
    { default: "/images/netto-logo.png", hover: "/images/netto-logo-hover.png" },
    { default: "/images/mobilezone-official-logo.png", hover: "/images/mobilezone-logo-hover.png" },
    { default: "/images/pluxe-logo.png", hover: "/images/pluxe-logo-hover.png" },
    { default: "/images/novalex-logo.png", hover: "/images/novalex-logo-hover.png" },
    { default: "/images/eco-logo.png", hover: "/images/eco-logo-hover.png" },
    { default: "/images/mobilezone-logo.png", hover: "/images/smzh-logo-hover.png" },
    { default: "/images/greenfinity-logo.png", hover: "/images/greenfinity-logo-hover.png" },
    { default: "/images/awh-logo.png", hover: "/images/awh-logo-hover.png" },
    { default: "/images/rexhepi-logo.png", hover: "/images/rexhepi-logo-hover.png" },
    { default: "/images/max-logo.png", hover: "/images/max-logo-hover.png" },
    { default: "/images/divid-logo.png", hover: "/images/divid-logo-hover.png" },
    { default: "/images/mint-logo.png", hover: "/images/mint-logo-hover.png" },
    { default: "/images/def-logo.png", hover: "/images/def-logo-hover.png" },
    { default: "/images/mobilezone-voiceline-logo.png", hover: "/images/mobilezone-voiceline-logo-hover.png" },
    { default: "/images/von-logo.png", hover: "/images/von-logo-hover.png" },
    { default: "/images/spitex-logo.png", hover: "/images/spitex-logo-hover.png" },
    { default: "/images/ballenberg-logo.png", hover: "/images/ballenberg-logo-hover.png" },
    { default: "/images/yourplace-hover.png", hover: "/images/yourplace.png" }
  ];

  // Function to navigate to the contact page when the specific logo is clicked
  const handleLogoClick = (index) => {
    if (index === logos.length - 1) { // This checks if it's the "yourplace" logo (last one in the list)
      router.push('/contact'); // Navigate to contact page
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-[1280px] lg:mb-[200px] mt-[100px] lg:mt-[200px] mb-[50px]">
      <div className="text-left mb-12">
        <h2 className="text-4xl font-extrabold mb-4">Vertrauen durch Zusammenarbeit</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:gap-[50px] gap-[30px]">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="relative flex justify-center items-center"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => handleLogoClick(index)} // Add onClick event for each logo
          >
            <img
              src={logo.default}
              alt={`Logo ${index + 1}`}
              className={`w-full h-full object-contain transition-opacity duration-300 ${
                hoveredIndex === index ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <img
              src={logo.hover}
              alt={`Hovered Logo ${index + 1}`}
              className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-300 ${
                hoveredIndex === index ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSection;