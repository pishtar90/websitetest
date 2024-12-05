import { useEffect, useState } from 'react';

const Submenu = ({ isHeroVisible }) => {
  const [activeSection, setActiveSection] = useState('what');
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['Was wir leisten', 'Wie wir arbeiten', 'Warum wir begeistern']; // Ensure these match your section IDs in the HTML
      const headerOffset = 100; // Adjust this value for the fixed header height
      const scrollPosition = window.scrollY + headerOffset; // Include header offset for accurate scroll detection
  
      // Calculate offsets for all sections
      const offsets = sections.map((id) => {
        const section = document.getElementById(id);
        return section ? section.offsetTop - headerOffset : 0; // Adjust for header height
      });
  
      // Find the current section based on scroll position
      const currentSection = sections.reduce((current, id, index) => {
        return scrollPosition >= offsets[index] ? id : current;
      }, 'what'); // Default to 'what' if no section is matched
  
      setActiveSection(currentSection);
  
      // Check visibility for the submenu based on the last section
      const lastSection = document.getElementById(sections[sections.length - 1]);
      if (lastSection) {
        const extraSpace = 200; // Add extra space at the bottom for better visibility
        const lastSectionBottom = lastSection.offsetTop + lastSection.offsetHeight + extraSpace;
  
        // Hide the submenu when scrolling past the last section's bottom
        setIsVisible(scrollPosition < lastSectionBottom);
      }
    };
  
    // Attach and clean up the scroll event listener
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Hide the submenu if the hero is visible or the last section is reached
  if (isHeroVisible || !isVisible) return null;

  return (
    <nav className="fixed lg:top-[70px] top-[40px] left-0 w-full z-50">
      <div className="max-w-[1310px] mx-auto flex justify-center items-center py-4">
        <div className="w-full lg:w-full bg-[#EEEE] rounded-[10px] py-2 flex justify-center items-center lg:space-x-6 space-x- font-normal">
          {['Was wir leisten', 'Wie wir arbeiten', 'Warum wir begeistern'].map((section, index, arr) => (
            <div key={section} className="flex items-center">
              <a
                href={`#${section}`}
                className={`font-matt font-normal lg:text-[20px] text-[14px] lg:leading-10 transition-colors duration-200 lg:px-8 lg:py-1 px-2 ${
                  activeSection === section
                    ? 'text-[#0009FF] lg:font-extrabold lg:text-[21px] text-[14px]' 
                    : 'text-gray-700'
                } hover:text-[#0009FF]`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
              {index < arr.length - 1 && (
                <span className="text-gray-400 mx-2">|</span> // Separator
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Submenu;
