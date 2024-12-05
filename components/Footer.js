import Link from 'next/link';
import '../styles/global.css'; 
import ScrollToTop from './ScrollToTop';


const Footer = () => {
  return (
    <footer id="footer" className="bg-white border-gray-200 p-8 font-matt">
          <ScrollToTop />

      <div className="font-matt max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        
        {/* Contact Section */}
        <div>
          <h2 className="font-matt font-extrabold text-[28px] mb-4 uppercase" >Sie können jederzeit auf diese Schaltfläche klicken.</h2>
          <Link href="/contact">
            <button className="bg-[#0009FF] text-white px-6 py-3 rounded-[20px] font-bold font-matt uppercase">
            Jetzt Gespräch buchen
            </button>
          </Link>
        </div>
        
        {/* Navigation Links */}
          <div className="lg:ml-[150px]">
            <ul className="space-y-6 text-[17px] leading-[24px] text-black">
              {/* Main Menu Items */}
              <Link href="/index" className="hover:underline hover:text-blue-700">Home</Link>
              <li className="group">
                <div className="flex justify-center md:justify-normal items-center space-x-2">
                  <Link href="" className="hover:underline hover:text-blue-700">
                    Services
                  </Link>
                  <span className="text-black text-[20px]">›</span>
                </div>
                {/* Submenu */}
                <ul className="mt-2 ml-4 space-y-4 hidden group-hover:block transition-all duration-300 opacity-0 group-hover:opacity-100">
                  <li><Link href="/services/salesforce" className="hover:underline hover:text-blue-700">Salesforce</Link></li>
                  <li><Link href="/services/website" className="hover:underline hover:text-blue-700">Website</Link></li>
                  <li><Link href="/services/custom-development" className="hover:underline hover:text-blue-700">Custom Development</Link></li>
                  <li><Link href="/services/graphic-design" className="hover:underline hover:text-blue-700">Graphic Design</Link></li>
                  <li><Link href="/services/book-your-expert" className="hover:underline hover:text-blue-700">Book your Ekspert</Link></li>
                </ul>
              </li>
              <li><Link href="/agency" className="hover:underline hover:text-blue-700">Agentur</Link></li>
              <li><Link href="/projekte" className="hover:underline hover:text-blue-700">Projekte</Link></li>
              <li><Link href="/contact" className="hover:underline hover:text-blue-700">Kontakt</Link></li>
            </ul>
          </div>

        
        {/* Newsletter Section */}
        <div>
          <h2 className="font-matt font-extrabold text-[28px] leading-[37px] mb-4 uppercase">Wir haben einen Newsletter</h2>
          <p className="font-matt mb-4 text-[20px] leading-[33px]">Unsere Recherchen zeigen, dass Sie einfach nicht genug E-Mails erhaltet.</p>
          <form className="font-matt flex items-center border-b border-gray-400">
            <input
              type="email"
              placeholder="E-Mail"
              className="font-matt bg-transparent w-full py-4 px-4 focus:outline-none"
            />
            <button type="submit" className="font-matt text-xl font-bold">→</button>
          </form>
          <div className="font-matt font-bold mb-4 text-[20px] leading-[33px] mt-[40px]">
            <h2>Schauen Sie vorbei und <br></br>
            Follow & Like nicht vergessen!</h2>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 justify-center items-center md:items-left md:justify-start">
          <Link href="https://www.linkedin.com/company/the-eksperts/" target="_blank" className="text-black hover:underline">
            LinkedIn
          </Link>
          <Link href="https://www.instagram.com/theeksperts/" target="_blank" className="text-black hover:underline">
            Instagram
          </Link>
        </div>

        </div>
      </div>

      {/* Social Links and Copyright */}
      <div className="font-matt max-w-[1280px] mx-auto mt-[40px] md:mt-[100px] px-4 flex flex-col md:flex-row md:space-x-6 items-center md:items-start text-sm text-black">
      <div className="font-matt mb-4 md:mb-0 ml-[10px]">
          © 2024 the eksperts
        </div>
        <div className="font-matt flex space-x-6 mb-4 md:mb-0">
          <Link href="/impressum">Impressum</Link>
          <Link href="/disclaimer">Disclaimer</Link>
          <Link href="/datenschutz">Datenschutz</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

  