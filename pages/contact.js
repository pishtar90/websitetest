import { useState } from 'react';
import '../styles/global.css'; 

export default function Contact() {
        const [formData, setFormData] = useState({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
          topics: [],
          datenschutz: false,
        });
        const [errors, setErrors] = useState({
          topic: "",
          datenschutz: "",
        });
        const [faqOpen, setFaqOpen] = useState(null);

        // Handle input changes
        const handleChange = (e) => {
          setFormData({ ...formData, [e.target.name]: e.target.value });
        };

        // Handle topic checkbox changes
        const handleTopicChange = (e) => {
          const { value, checked } = e.target;
          setFormData((prev) => ({
            ...prev,
            topics: checked
              ? [...prev.topics, value] // Add topic if checked
              : prev.topics.filter((topic) => topic !== value), // Remove topic if unchecked
          }));
        };

        // Handle Datenschutzerklärung checkbox changes
        const handleDatenschutzChange = (e) => {
          setFormData({ ...formData, datenschutz: e.target.checked });
        };

        const handleSubmit = async (e) => {
          e.preventDefault();
        
          const newErrors = {
            topic: formData.topics.length === 0 ? "Bitte wählen Sie mindestens ein Thema aus." : "",
            datenschutz: !formData.datenschutz
              ? "Bitte stimmen Sie der Verarbeitung Ihrer Daten zu."
              : "",
          };
        
          setErrors(newErrors);
        
          if (newErrors.topic || newErrors.datenschutz) return;
        
          try {
            await emailjs.send(
              "service_rnxvz7es", // Replace with your EmailJS Service ID
              "template_q8wvlxn", // Replace with your EmailJS Template ID
              {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                message: formData.message,
                topics: formData.topics.join(", "),
              },
              "RnxvZ7esPh9kJPP7C" // Replace with your Public Key
            );
        
            alert("Vielen Dank! Ihre Nachricht wurde gesendet.");
            setFormData({
              firstName: "",
              lastName: "",
              email: "",
              message: "",
              topics: [],
              datenschutz: false,
            });
          } catch (error) {
            console.error("Error sending email:", error);
            alert("Es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen Sie es erneut.");
          }
        };
        const faqs = [
          {
            question: 'Warum sollte ich mich für the eksperts entscheiden und nicht für andere Anbieter?',
            answer: `Viele Unternehmen – von klein bis gross – vertrauen uns bereits. Wir wissen, dass auch andere Anbieter gute Arbeit leisten, und wünschen unserer Konkurrenz alles Gute.
            Was wir jedoch anders und vor allem besser machen: Hinter jeder Technologie steht immer ein Mensch, der diese bedient, wartet oder verwaltet. Unser Ansatz beginnt genau dort – bei der Person. Wir nehmen uns die Zeit, die Menschen hinter den Projekten zu verstehen, ihre Herausforderungen zu erkennen und gemeinsam Lösungen zu entwickeln, die nicht nur funktionieren, sondern auch nachhaltig sind.`,
          },
          {
            question: 'Wie kann ich ein Projekt mit the eksperts starten?',
            answer: `
              Jedes Projekt beginnt mit einem ersten Gespräch. Dieses können Sie ganz einfach über unsere Website starten: <br />
              • Buchen Sie direkt einen Termin über <a href="https://calendly.com/fisnik-salihu-the-eksperts/30min" target="_blank" class="text-blue-500 hover:underline"> Calendly</a><br />
              • Schreiben Sie uns an <a href="mailto:info@the-eksperts.com" class="text-blue-500 hover:underline">info@the-eksperts.com</a><br />
              • Nutzen Sie unser <a href="/contact" class="text-blue-500 hover:underline">Kontaktformular</a><br />
              Unser Ansatz: Ein Projekt beginnt stets mit dem Verstehen und endet mit dem Erklären. Dazwischen arbeiten wir mit vollem Einsatz daran, die bestmögliche Lösung für Ihr Anliegen zu entwickeln und umzusetzen.
            `,
          },
          {
            question: 'Auf welche Branchen/Unternehmen ist the eksperts spezialisiert?',
            answer: `Wir setzen unseren Fokus auf die Menschen, nicht auf bestimmte Branchen oder Unternehmensgrössen.
            Ein Blick auf unsere Homepage zeigt unsere zufriedenen Kunden – aus verschiedensten Branchen und unterschiedlichsten Grössenordnungen. Was all diese Unternehmen verbindet, sind grossartige Menschen, mit denen wir gerne zusammenarbeiten. Unser Ziel ist es, Lösungen zu schaffen, die zu den individuellen Bedürfnissen jedes Kunden passen.`,
          },
          {
            question: 'Wie stellt the eksperts die Qualität und den Erfolg von Projekten sicher?',
            answer: `<div>
              <p style="font-size: 1em; margin-bottom: 5px;">
                Qualität und Erfolg stehen bei uns an erster Stelle.
              </p>
              <p style="font-size: 1em; margin-bottom: 5px;  font-weight: bold;">
                Wir stellen dies sicher, indem wir:
              </p>
              <ul style="list-style-type: square; padding-left: 20px; margin-bottom: 20px;">
                <li>Einen klaren und transparenten Plan für jedes Projekt erstellen.</li>
                <li>Eng mit unseren Kunden zusammenarbeiten, um ihre Bedürfnisse genau zu verstehen.</li>
                <li>Regelmäßige Feedbackschleifen einbauen, um sicherzustellen, dass das Projekt auf Kurs bleibt.</li>
                <li>Am Ende des Projekts sicherstellen, dass der Kunde die Lösung versteht und sie nahtlos in den Alltag integrieren kann.</li>
              </ul>
              <p style="font-size: 1em;">
                <strong>Unsere Philosophie: </strong> Qualität entsteht durch Kommunikation, Innovation und Engagement – und genau das bringen wir in jedes Projekt ein.
              </p>
            </div>
            `,
          },
          {
            question: 'Welche Informationen oder Voraussetzungen muss ich als Kunde mitbringen, um ein Projekt zu starten?',
            answer: `Das Wichtigste ist der Wille zur Veränderung – auch wenn der Weg oder die Lösung noch nicht ganz klar ist. Wir helfen genau in diesen Situationen und entwickeln gemeinsam eine Strategie, die zu Ihren Zielen passt.
            Falls Sie bereits konkrete Anforderungen haben, freuen wir uns, diese mit Ihnen zu prüfen. Wir hinterfragen und challengen die Anforderungen, um sicherzustellen, dass sie technisch umsetzbar und zielführend sind. Sobald alles abgestimmt ist, planen wir den Umsetzungsprozess – stets gemeinsam.
            Unsere wichtigste Voraussetzung: Das Wollen.
            Unser erster Wert ist „Liebe“ – und das gilt für uns genauso wie für unsere Kunden:
            Tu es mit Liebe oder lass es sein.`,
          },
        ];
        

        const toggleFaq = (index) => {
          setFaqOpen((prev) => (prev === index ? null : index));
        };

    return (
      <div className="bg-white min-h-screen p-4 text-gray-900 font-matt">
        {/* Contact Form Section */}
              <div className="font-matt flex flex-col lg:flex-row items-top justify-between max-w-[1280px] mx-auto space-y-10 lg:space-y-0 lg:space-x-16">
          {/* Left Side: Text */}
          <div className="lg:w-1/2 space-y-10">
            <h1 className="text-5xl lg:text-[80px] font-normal lg:leading-[85px] leading-tight text-gray-800">
              Wir freuen uns auf Ihre Nachricht
            </h1>
           
            <div className="bg-[#FAFAFA] p-4 rounded-[20px] space-y-4">
              <div className="flex items-center space-x-4">
                <img
                  src="/images/FisnikSalihu-theeksperts.png"
                  alt="Fisnik Salihu"
                  className="rounded-full w-20 h-20 object-cover border-2 border-[#0009FF] "
                />
                <h2 className="font-semibold text-xl">
                   Hi, Ich bin Fisnik!
                  Lassen Sie uns gemeinsam
                  über Ihr Projekt sprechen.
                </h2>
              </div>
              <p className=" text-gray-600">
                Ich stehe dafür, dass unsere Lösungen nicht nur heute funktionieren,
                sondern auch Ihre Zukunft sichern.
              </p>
              <div className="flex flex-row items-start text-center space-x-2">
                {/* Email Link */}
                <a
                  href="mailto:fisnik.salihu@the-eksperts.com"
                  className="text-[#0009FF] hover:underline"
                >
                  Email an Fisnik
                </a>
                
                {/* Separator Text */}
                <p className=" text-gray-600">oder ein</p>
                
                {/* Calendly Link */}
                <a
                  href="https://calendly.com/fisnik-salihu-the-eksperts/30min" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0009FF] hover:underline"
                >
                  Gespräch vereinbaren.
                </a>
              </div>

            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:w-1/2 bg-[#FAFAFA] px-2 py-4 rounded-[20px]  space-y-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name and Unternehmen */}
          <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-6 lg:space-y-0">
            <div className="w-full">
              <label className="block text-sm font-semibold mb-1">Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-[20px] p-4 focus:border-blue-500 focus:ring-0"
                placeholder="Ihr Name"
              />
            </div>
            <div className="w-full">
              <label className="block text-sm font-semibold mb-1">Unternehmen</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-[20px] p-4 focus:border-blue-500 focus:ring-0"
                placeholder="Ihr Unternehmen"
              />
            </div>
          </div>

          {/* E-Mail */}
          <div>
            <label className="block text-sm font-semibold mb-1">E-Mail Adresse</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-[20px] p-4 focus:border-blue-500 focus:ring-0"
              placeholder="Ihre E-Mail Adresse"
            />
          </div>

          {/* Betreff oder Thema */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Betreff oder Thema</h3>
            {errors.topic && <p className="text-red-500 text-sm mb-2">{errors.topic}</p>}
            <div className="space-y-2">
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="topic"
                  value="Neues Projekt"
                  onChange={handleTopicChange}
                  className="w-5 h-5 text-[#0009FF] border-gray-300 rounded focus:ring-[#0009FF]"
                />
                <span>Neues Projekt</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="topic"
                  value="Problembehebung"
                  onChange={handleTopicChange}
                  className="w-5 h-5 text-[#0009FF] border-gray-300 rounded focus:ring-[#0009FF]"
                />
                <span>Problembehebung</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="topic"
                  value="Ressourcen-Erweiterung"
                  onChange={handleTopicChange}
                  className="w-5 h-5 text-[#0009FF] border-gray-300 rounded focus:ring-[#0009FF]"
                />
                <span>Ressourcen-Erweiterung</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="topic"
                  value="Allgemeine Anfrage"
                  onChange={handleTopicChange}
                  className="w-5 h-5 text-[#0009FF] border-gray-300 rounded focus:ring-[#0009FF]"
                />
                <span>Allgemeine Anfrage</span>
              </label>
            </div>
          </div>

          {/* Nachricht */}
          <div>
            <label className="block text-sm font-semibold mb-1">Nachricht</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-[20px] p-4 focus:border-blue-500 focus:ring-0"
              placeholder="z.B. Wir brauchen eine digitale Plattform"
              rows="4"
            ></textarea>
          </div>

          {/* Telefonnummer */}
          <div>
            <label className="block text-sm font-semibold mb-1">Telefonnummer</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Ihre Telefonnummer"
              className="w-full border border-gray-300 rounded-[20px] p-4 focus:ring-[#0009FF] focus:border-[#0009FF]"
            />
          </div>

          {/* Datenschutz */}
          <div>
            {errors.datenschutz && <p className="text-red-500 text-sm mb-2">{errors.datenschutz}</p>}
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="datenschutz"
                name="datenschutz"
                onChange={handleDatenschutzChange}
                className="w-5 h-5 text-[#0009FF] border-gray-300 rounded focus:ring-[#0009FF]"
              />
              <label htmlFor="datenschutz" className="text-sm text-gray-700">
                Ich stimme der Verarbeitung meiner Daten gemäss der Datenschutzerklärung zu.
              </label>
            </div>
          </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-[20px] bg-[#0009FF] text-white font-semibold tracking-wide hover:bg-blue-700 transition"
            >
              Senden
            </button>
          </form>
        </div>
      </div>


          <div className="max-w-[1280px] mx-auto mt-20">
            <h2 className="font-matt text-3xl font-bold mb-10">FAQs</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-300 pb-4">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="font-matt w-full text-left text-lg font-semibold focus:outline-none flex justify-between items-center"
                  >
                    {faq.question}
                    <span>{faqOpen === index ? '-' : '+'}</span>
                  </button>
                  {faqOpen === index && (
                    <div
                      className="mt-2 text-gray-600 font-matt"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="py-12 mt-20 font-matt">
            <h2 className="font-matt text-2xl md:text-4xl font-bold text-center text-gray-800 mb-10">
              Kaffee? Hier finden Sie uns!
            </h2>
            <div className="font-matt max-w-[1280px] mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {/* Switzerland Section */}
              <div className="font-matt flex flex-col items-center  space-y-4 transition-all duration-300 p-4 rounded-[20px] group">
                {/* Image */}
                <div
                  className="font-matt  w-[290px] h-[250px]"
                  style={{
                    backgroundImage: `url('/images/Switzerland.png')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <div className="font-matt text-center group-hover:text-blue-600 transition-all duration-300">
                  <h3 className="font-matt font-semibold text-lg sm:text-xl">
                    <a
                      href="https://www.google.com/maps?q=Sonnengartenstrasse+6,+9000+St.+Gallen"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Schweiz
                    </a>
                  </h3>
                  <p className="text-sm md:text-base">Sonnengartenstrasse 6</p>
                  <p className="text-sm md:text-base">9000 St. Gallen</p>
                </div>
              </div>

              <div className="font-matt flex flex-col items-center space-y-4 transition-all duration-300 p-6 rounded-[20px] group">
                  <div
                    className="font-matt w-[290px] h-[250px]"
                    style={{
                      backgroundImage: `url('/images/Kosovo.png')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>

                  <div className="font-matt text-center group-hover:text-blue-600 transition-all duration-300">
                    <h3 className="font-matt font-semibold text-lg sm:text-xl">
                      <a
                        href="https://www.google.com/maps?q=23+Ganimete+T%C3%ABrbeshi,+10000+Prishtin%C3%AB"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        Kosovë
                      </a>
                    </h3>
                    <p className="text-sm md:text-base">23 Ganimete Tërbeshi</p>
                    <p className="text-sm md:text-base">10000 Prishtinë</p>
                  </div>
                  </div>


              {/* Kosovo Section */}
              <div className="font-matt flex flex-col items-center  space-y-4 transition-all duration-300 p-6 rounded-[20px]  group">
                {/* Image */}
                <div
                  className="font-matt w-[290px] h-[250px]"
                  style={{
                    backgroundImage: `url('/images/digital.png')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                {/* Text */}
                <div className="font-matt text-center group-hover:text-blue-600 transition-all duration-300">
                  <h3 className="font-matt font-semibold text-lg sm:text-xl">
                    <a
                      href="mailto:info@the-eksperts.com"
                      className="hover:underline"
                    >
                      Weltweit
                    </a>
                  </h3>
                  <p className="text-sm md:text-base">info@the-eksperts.com</p>
                  <p className="text-sm md:text-base">Digital</p>
                </div>
              </div>
            </div>
          </div>
    </div>
  );
}
