// components/Slider.js
import { useEffect, useState } from "react";

const Slider = () => {
  const [isHeaderShrink, setIsHeaderShrink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsHeaderShrink(true);
      } else {
        setIsHeaderShrink(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Header */}
      <header
        className={`fixed top-0 w-full bg-white z-50 transition-all duration-300 ${
          isHeaderShrink ? "h-16 shadow-lg" : "h-28"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center h-full">
          <h1 className="text-2xl md:text-3xl font-bold">Unsere Säulen</h1>
        </div>
      </header>

      {/* Sections */}
      <main className="pt-28 space-y-12">
        {[
          {
            id: "section1",
            title: "Unsere 4 Säulen – Ein ganzheitlicher Ansatz",
            description:
              "Unser Ansatz baut auf vier zentralen Säulen auf, die nahtlose Zusammenarbeit und nachhaltige Ergebnisse sichern.",
            image: "/images/Full 1.png",
          },
          {
            id: "section2",
            title: "Verstehen und Kommunikation",
            description:
              "Wir analysieren eure Anforderungen, verstehen eure individuellen Herausforderungen und definieren gemeinsam die Ziele.",
            image: "/images/1 2.png",
          },
          {
            id: "section3",
            title: "UI/UX – Benutzerzentrierte Gestaltung",
            description:
              "Wir entwickeln Prototypen, optimieren Prozesse und entwerfen ein ansprechendes, intuitives Design.",
            image: "/images/2 1.png",
          },
          {
            id: "section4",
            title: "Technische Implementierung",
            description:
              "Wir entwickeln leistungsfähige und skalierbare Systeme, die eure Anforderungen perfekt erfüllen.",
            image: "/images/4 1.png",
          },
        ].map((section, index) => (
          <section
            key={section.id}
            className={`flex flex-col md:flex-row items-center justify-between px-6 py-12 lg:max-w-7xl mx-auto transition-opacity duration-700 ${
              isHeaderShrink ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            <div className="flex-1 max-w-md lg:text-left text-center">
              <h2 className="text-2xl md:text-3xl font-extrabold text-black mb-4 uppercase">
                {section.title}
              </h2>
              <p className="text-lg text-gray-700">{section.description}</p>
            </div>
            <div className="flex-1 mt-8 md:mt-0 flex justify-center">
              <img
                src={section.image}
                alt={section.title}
                className="w-full lg:w-[600px] lg:h-[400px] object-cover"
              />
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default Slider;
