// pages/testimonials.js
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";

const testimonials = [
  {
    quote: "the eksperts ist unser Go-to-Partner für IT-Lösungen. Egal was wir brauchen, sie haben die passenden Experten und liefern immer pünktlich. Ein unschlagbares Team!",
    name: "Nicolas H.",
    title: "CO-FOUNDER & CEO",
    company: "VOICELINE",
  },
  {
    quote:
      "Ich kann the eksperts als IT Company wärmstens empfehlen. Ihre fundierten Kenntnisse in CRM-Systemen und ihre Fähigkeit, maßgeschneiderte Lösungen zu entwickeln, haben in zahlreichen Projekten zu signifikanten Effizienzsteigerungen geführt.",
    name: "Benjamin T.",
    title: "CEO",
    company: "MAX ASP",
  },
  {
    quote:
      "We had an outstanding experience working with the eksperts, who expertly set up our Salesforce system and implemented essential automations. Their team was exceptionally responsive and demonstrated a high level of knowledge throughout the entire process. Highly recommended!",
    name: "Pren P.",
    title: "COO & PARTNER",
    company: "SMZH AG",
  },
  {
    quote:
      "Für mich verkörpert the eksperts das perfekte Team aus digitalen Vordenkern. Ich kann ihre Zusammenarbeit nur empfehlen. Sie überzeugen durch ihre herausragenden Fähigkeiten, ihr umfassendes Verständnis und ihr unermüdliches Streben nach dem Besten.",
    name: "Tobias K.",
    title: "Performer & Sparringpartner",
    company: "Divid",
  },
  {
    quote:
      "Agile, fast, and reliable – three virtues I greatly value in services, and the eksperts truly embody them.",
    name: "Dario F.",
    title: "Consultant & Manager",
    company: "Faé Consulting",
  },
  {
    quote:
      "Vertrauensvolle Experten, die jedes Projekt mit viel Erfahrung, Know-how und Herzblut durchführen.",
    name: "Steffanie K.",
    title: "Co-Founder - Owner,",
    company: "mint&more gmbh",
  },
  {
    quote:
      "Die Zusammenarbeit mit the eksperts gmbh war absolut professionell und effizient. Ihr Team überzeugt durch Fachwissen, Flexibilität und den Fokus auf nachhaltige Ergebnisse. Absolut empfehlenswert!",
    name: "Luli R.",
    title: "Präsident,",
    company: "Diaspora Economic Forum",
  },
  {
    quote:
      "the eksperts gmbh bringt Projekte mit einer klaren Vision und lösungsorientiertem Ansatz zum Erfolg. Die Kombination aus Expertise und Engagement hat mich beeindruckt.",
    name: "Shpend B.",
    title: "Inhaber,",
    company: "Bergen Treuhand und Revisions AG",
  },
];

export default function Testimonials() {
  return (
    <div className="py-12 px-4 lg:px-0 lg:mb-[300px]">
      <div className="max-w-7xl mx-auto text-center">
      <h2 className="font-matt text-center text-3xl lg:text-[80px] lg:leading-[80px] font-bold mb-12">Kein Eigenlob – sondern ehrliches Feedback</h2>

      </div>

      <div className="relative lg:max-w-6xl mx-auto">
        <Swiper
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          loop
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Pagination, Navigation]}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-4 lg:p-2 text-center lg:text-left">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="72"
                  height="72"
                  viewBox="0 0 72 72"
                  fill="none"
                  className="mx-auto mt-10"
                >
                  <path
                    d="M37.876 0L28.532 42.24H0.5L16.372 0H37.876ZM70.388 0L61.044 42.24H33.012L48.884 0H70.388Z"
                    fill="#0009FF"
                  />
                </svg>
                <p className="text-gray-700 text-xl font-matt mt-10">{testimonial.quote}</p>
                <div className="mt-6">
                <h3 className="font-extrabold text-xl lg:text-[25px] lg:leading-[32px] font-matt text-black uppercase">{testimonial.name}</h3>
                <p className="text-sm text-black lg:text-[18px] lg:leading-[24px] font-matt">{testimonial.title}</p>
                <p className="text-sm text-black lg:text-[18px] lg:leading-[24px] font-matt">{testimonial.company}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="absolute lg:top-1 transform -translate-y-1/2 lg:left-[-50px] cursor-pointer custom-prev">
        <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
  <path d="M0.75277 35.6516L5.6543 30.7501L10.5558 35.6516L5.6543 40.5531L0.75277 35.6516Z" fill="#0009FF" stroke="#0009FF"/>
  <path d="M66.9695 32.3581L66.9694 39.2901L17.2011 39.2901L13.7515 35.8404L16.0229 33.569C16.7966 32.7953 17.8475 32.3619 18.9435 32.3581C18.9437 32.3581 18.9439 32.3581 18.944 32.3581L66.9695 32.3581Z" fill="#0009FF" stroke="#0009FF"/>
  <path d="M20.5265 25.5891L12.0259 34.0898L10.0438 32.1078C8.43312 30.497 8.42962 27.883 10.0438 26.2687L15.625 20.6876L20.5265 25.5891Z" fill="#0009FF" stroke="#0009FF"/>
  <path d="M20.7409 45.8367L15.8394 50.7382L10.0707 44.9696C8.5622 43.461 8.56219 41.0141 10.0707 39.5055L12.2402 37.336L20.7409 45.8367Z" fill="#0009FF" stroke="#0009FF"/>
</svg>
        </div>
        <div className="absolute lg:top-1 transform -translate-y-1/2 lg:right-[-50px] cursor-pointer custom-next">
        <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
  <path d="M71.2472 35.782L66.3457 40.6835L61.4442 35.782L66.3457 30.8805L71.2472 35.782Z" fill="#0009FF" stroke="#0009FF"/>
  <path d="M5.03055 39.0755L5.03056 32.1435L54.7989 32.1435L58.2486 35.5932L55.9771 37.8646C55.2034 38.6383 54.1525 39.0717 53.0565 39.0755C53.0563 39.0755 53.0561 39.0755 53.056 39.0755L5.03055 39.0755Z" fill="#0009FF" stroke="#0009FF"/>
  <path d="M51.4735 45.8445L59.9741 37.3438L61.9562 39.3258C63.5669 40.9365 63.5704 43.5506 61.9562 45.1649L56.375 50.746L51.4735 45.8445Z" fill="#0009FF" stroke="#0009FF"/>
  <path d="M51.2591 25.5969L56.1606 20.6954L61.9293 26.464C63.4378 27.9726 63.4378 30.4195 61.9293 31.9281L59.7598 34.0976L51.2591 25.5969Z" fill="#0009FF" stroke="#0009FF"/>
</svg>
        </div>
      </div>
    </div>
  );
}
