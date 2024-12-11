import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import logo from '/images/Logo 1.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  let menuTimeout;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMouseEnter = () => {
    clearTimeout(menuTimeout); // Clear timeout to prevent menu from hiding
    setIsServicesMenuOpen(true);
  };

  const handleMouseLeave = () => {
    menuTimeout = setTimeout(() => {
      setIsServicesMenuOpen(false);
    }, 200); // Adjust the delay as needed
  };

  return (
    <header
      className="bg-white sticky top-0 z-[60] px-4 py-4 text-[17px] font-normal font-matt"
      style={{ scrollBehavior: 'smooth' }}
    >
      <div className="max-w-[1280px] mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link href="/">
            <Image
              src={logo}
              alt="The Eksperts Logo"
              width={126}
              height={17}
              priority
            />
          </Link>
        </div>

        {/* Main Navigation */}
        <nav className="hidden md:flex space-x-6 px-8 py-4 rounded-[10px] relative">
          <Link href="/" className="text-gray-700">Home</Link>
          <span className="text-gray-300">|</span>
          
          {/* Services Dropdown */}
          <div
            className="relative cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span className="text-gray-700">Services</span>
            {isServicesMenuOpen && (
            <div className="absolute left-0 mt-2 w-[220px] bg-white rounded-lg shadow-lg border border-gray-200 z-50 transition-transform duration-300">
              <ul className="flex flex-col divide-y divide-gray-100">
                <li className="group">
                  <Link
                    href="/services/salesforce"
                    className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-t-lg transition-colors duration-200"
                  >
                    Salesforce
                  </Link>
                </li>
                <li className="group">
                  <Link
                    href="/services/website-development"
                    className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
                  >
                    Website Development
                  </Link>
                </li>
                <li className="group">
                  <Link
                    href="/services/custom-development"
                    className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
                  >
                    Custom Development
                  </Link>
                </li>
                <li className="group">
                  <Link
                    href="/services/book-your-expert"
                    className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
                  >
                    Book Your Expert
                  </Link>
                </li>
                <li className="group">
                  <Link
                    href="/services/graphic-design"
                    className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-b-lg transition-colors duration-200"
                  >
                    Graphic Design
                  </Link>
                </li>
              </ul>
            </div>
            )}
          </div>
          <span className="text-gray-300">|</span>
          <Link href="/agency" className="text-gray-700">Agentur</Link>
          <span className="text-gray-300">|</span>
          <Link href="/work" className="text-gray-700">Projekte</Link>
          <span className="text-gray-300">|</span>
          <Link href="/contact" className="text-gray-700">Kontakt</Link>
        </nav>

        {/* Call to Action */}
        <a href="https://calendly.com/fisnik-salihu-the-eksperts/30min" class="inline-block hidden sm:inline-block hover-link">
  <svg xmlns="http://www.w3.org/2000/svg" width="220" height="40" viewBox="0 0 220 40" fill="none" class="cursor-pointer">
    <path d="M1.5 34V14.2353L15.4504 2H216.5V34H1.5Z" stroke="#0009FF" stroke-width="3" class="svg-path"/>
    <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#0009FF" font-size="16" font-weight="bold" class="svg-text">
      Jetzt Gespräch buchen
    </text>
  </svg>
</a>


        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-gray-100 p-4 mt-2 rounded-lg shadow-lg">
          <ul className="space-y-4 text-center">
            <li><Link href="/">Home</Link></li>
            <li>
              <details>
                <summary className="cursor-pointer text-gray-700">Services</summary>
                <ul className="mt-2 space-y-2 pl-4">
                  <li>
                    <Link href="/services/salesforce">Salesforce</Link>
                  </li>
                  <li>
                    <Link href="/services/website-development">Website</Link>
                  </li>
                  <li>
                  <Link href="/services/custom-development">Custom Development</Link>
                  </li>
                  <li>
                    <Link href="/services/book-your-expert">Book Your Expert</Link>
                  </li>
                  <li>
                    <Link href="/services/graphic-design">Graphic Design</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li><Link href="/agency">Agentur</Link></li>
            <li><Link href="/work">Projekte</Link></li>
            <li><Link href="/contact">Kontakt</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
