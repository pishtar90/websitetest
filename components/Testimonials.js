// testimonials.js
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import core Swiper styles
import 'swiper/css/pagination'; // Import pagination-specific styles
import 'swiper/css/navigation'; // Import navigation-specific styles
import '../styles/global.css'; 

import { Navigation } from 'swiper'; // Import Swiper's Navigation module

const testimonials = [
  {
    quote: "the eksperts ist unser Go-to-Partner für IT-Lösungen. Egal was wir brauchen, sie haben die passenden Experten und liefern immer pünktlich. Ein unschlagbares Team!",
    name: "Nicolas H.",
    title: "CO-FOUNDER & CEO",
    company:"VOICELINE"
  },
  {
    quote: "Ich kann the eksperts als IT Company wärmstens empfehlen. Ihre fundierten Kenntnisse in CRM-Systemen und ihre Fähigkeit, massgeschneiderte Lösungen zu entwickeln, haben in zahlreichen Projekten zu signifikanten Effizienzsteigerungen geführt. the eksperts ist zuverlässig, engagiert und stets bestrebt, die besten Ergebnisse für ihre Kunden zu erzielen.",
    name: "Benjamin T.",
    title: "CEO",
    company:"MAX ASP"
  },
  {
    quote: "We had an outstanding experience working with the eksperts, who expertly set up our Salesforce system and implemented essential automations. Their team was exceptionally responsive and demonstrated a high level of knowledge throughout the entire process. Their expertise significantly enhanced our operational efficiency. Highly recommended!",
    name: "Pren P.",
    title: "COO & PARTNER",
    company:"SMZH AG"
  },
  {
    quote: "Für mich verkörpert the eksperts das perfekte Team aus digitalen Vordenkern. Ich kann ihre Zusammenarbeit nur empfehlen. Sie überzeugen durch ihre herausragenden Fähigkeiten, ihr umfassendes Verständnis und ihr unermüdliches Streben nach dem Besten. The Eksperts sind für mich der ideale Partner, wenn es um die Bewältigung digitaler Herausforderungen, die Optimierung von Prozessen und die Steigerung von Effizienz mittels Software und Tools geht. Von der Entwicklung eines Webshops über die Transformation von CRM-Systemen bis hin zu spezialisiertes Wissen in Salesforce. Ich kann mit voller Überzeugung sagen, dass The Eksperts jedem Unternehmen, das nach erstklassigen digitalen Lösungen sucht, einen unschätzbaren Mehrwert bieten.",
    name: "Tobias K.",
    title: "Performer & Sparringpartner",
    company:"Divid"
  },
  {
    quote: "Agile, fast, and reliable – three virtues I greatly value in services, and the eksperts truly embody them.",
    name: "Dario F. ",
    title: "Consultant & Manager",
    company:"Faé Consulting"
  },
  {
    quote: "Vertrauensvolle Experten, die jedes Projekt mit viel Erfahrung, Know-how und Herzblut durchführen.",
    name: "Steffanie K.",
    title: "Co-Founder - Owner,",
    company:"mint&more gmbh"
  },
];

export default function Testimonials() {

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set the client-side state after the component mounts
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Render a loading or placeholder if we're on the server
    return <div>Loading...</div>;
  }
  
  return (
    <div className="container mx-auto px-6 py-2 lg:mt-[200px] lg:mb-[200px]">
      <h2 className="font-matt text-center text-3xl lg:text-[80px] lg:leading-[80px] font-bold mb-12">Kein Eigenlob – sondern ehrliches Feedback</h2>
      
      <div className="swiper-container relative testimonials-swiper">
        <Swiper
          spaceBetween={40}
          pagination={{ clickable: true, type: 'bullets', el: '.swiper-pagination' }}
          loop
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1, 
            },
            768: {
              slidesPerView: 2, 
            },
            1024: {
              slidesPerView: 3, 
            },
          }}
          navigation
          modules={[Navigation]}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#F1F1F1] p-6 rounded-[20px]">
                 <svg xmlns="http://www.w3.org/2000/svg" width="71" height="43" viewBox="0 0 71 43" fill="none">
                    <path d="M37.876 0L28.532 42.24H0.5L16.372 0H37.876ZM70.388 0L61.044 42.24H33.012L48.884 0H70.388Z" fill="#0009FF"/>
                  </svg>              
                  
                  <p className="text-sm md:text-[16px] text-black mt-8 mb-8 lg:text-[16px] lg:leading-[22px] font-matt font-normal">{testimonial.quote}</p>
                <div className="mt-4">
                  <h3 className="font-extrabold text-xl lg:text-[25px] lg:leading-[32px] font-matt text-black uppercase">{testimonial.name}</h3>
                  <p className="text-sm text-black lg:text-[18px] lg:leading-[24px] font-matt">{testimonial.title}</p>
                  <p className="text-sm text-black lg:text-[18px] lg:leading-[24px] font-matt">{testimonial.company}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
}
