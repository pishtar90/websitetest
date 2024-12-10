const Agency = () => {

  const management = [
    {
      name: "Fisnik Salihu",
      title: "Co-Founder & strategy ekspert",
      description:"Spezialgebiet: Strategie, Digitalisierung und Verkauf/Marketing",
      shortDescription:"“Ich glaube daran, dass jede Herausforderung eine Chance für Innovation und Wachstum ist. Gemeinsam mit meinem Team täglich Lösungen zu schaffen, die nicht nur funktionieren, sondern nachhaltig beeindrucken und begeistern, ist für mich ein Privileg.”",
      background: "/images/Fisnik-theeksperts.png",
      linkedin: "https://www.linkedin.com/in/fisnik-salihu/",
      email:"fisnik.salihu@the-eksperts.com",
    },
    {
      name: "Petrit Baralija",
      title: "Co-Founder & delivery ekspert",
      description:"Spezialgebiet: CRM, Digitalisierung, Agiles Projektmanagement.",
      shortDescription:"“Professionelle Arbeit muss nicht kompliziert sein – Effizienz entsteht durch Expertise und klare Kommunikation”",
      background: "/images/Petrit-theeksperts.png",
      linkedin: "https://www.linkedin.com/in/petrit-baralija-29681218a/",
      email:"petrit.baralija@the-eksperts.com",

    },
    {
      name: "Pishtar Salihu",
      title: "Co-Founder & business ekspert",
      description:"Spezialgebiet: Finanzen, Business Analyse, Projekt Leitung",
      shortDescription:"“Grosse Dinge entstehen, wenn man Schritt für Schritt vorgeht und auf eine Zusammenarbeit baut, die von Vertrauen getragen wird. Nachhaltige Lösungen entstehen, wenn Ansätze wirtschaftlich durchdacht und langfristig tragfähig sind.”",
      background: "/images/Pishtar-theeksperts.png",
      linkedin: "https://www.linkedin.com/in/pishtar-salihu-747b64259/",
      email:"pishtar.salihu@the-eksperts.com",

    },
  ];

  return (
<div className="container mx-auto px-2 lg:px-2 lg:py-2 py-10 w-full lg:max-w-[1280px]">
{/* Header Section */}
      <div className="lg:max-w-[1280px] flex justify-center mx-auto text-center ">
        <h1
          className="font-matt  lg:text-[80px] text-[30px] flex justify-center text-center font-[900] lg:leading-[100px] leding-[30px] tracking-[-2.99px] uppercase text-black lg:mb-[200px] lg:mt-[200px]"
          style={{
            textAlign: "center",
            textTransform: "uppercase",
            textEdge: "cap",
            leadingTrim: "both",
          }}
        >
          Ekspertise treibt uns an, <br></br> Tag für Tag, <br></br> Projekt für Projekt.
        </h1>
       
      </div>

      {/* Description Section */}
      <div className="lg:max-w-[1280px] mx-auto text-center mt-6 text-gray-700 lg:mb-[200px]">
        <p className="font-matt text-lg sm:text-xl leading-relaxed max-w-[900px] mx-auto">
        Hi, wir sind the eksperts – nicht, weil wir alles wissen oder perfekt sind, sondern weil wir jeden Tag daran arbeiten, die besten Lösungen zu finden und uns weiterzuentwickeln. Unser Name steht für den Anspruch, ständig besser zu werden.
        </p>
        <p className="font-matt text-lg sm:text-xl leading-relaxed max-w-[900px] mx-auto mt-6">
        Wir stellen Menschen und Prozesse in den Mittelpunkt. Nachdem wir unsere Kunden und ihre Herausforderungen verstanden haben, entwickeln wir innovative Lösungen, die Wachstum und Effizienz fördern. So helfen wir Unternehmen, in einer schnelllebigen digitalen Welt erfolgreich zu sein.
        </p>
      </div>


      {/* Management Section */}
      <div className="lg:max-w-[1280px] mx-auto px-2 py-2 lg:mb-[200px]">
        <h2 className="text-center text-black font-bold text-4xl mb-12">
          UNSER MANAGEMENT AUF EINEN BLICK
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gap-10 gap-2 lg:max-w-[1280px]">
              {management.map((person, index) => (
                <div
                  key={index}
                  className="relative group rounded-lg overflow-hidden "
                >
                  {/* Image */}
                  <img
                    src={person.background}
                    alt={`${person.name}'s background`}
                    className="w-full h-full md:w-[393px] md:h-[602px] object-cover"
                  />
                  
                  {/* Overlay content */}
                  <div 
                    className="absolute bottom-[15px] left-[15px] right-[15px] transform bg-[#F1F1F1] text-black p-4 lg:w-[327px] lg:h-[250px] overflow-hidden "
                    style={{ clipPath: 'polygon(100% 0%, 94% 98%, 0% 100%, 0% 0%)' }}
                  >

                  <h3 className="font-matt text-xl md:text-[28px] md:leading-[20px] font-extrabold uppercase mb-2">{person.name}</h3>
                    <p className="font-matt text-sm md:text-[18px] md:leading-[20px] font-normal mb-2">{person.title}</p>
                    <p className="font-matt text-sm md:text-[14px] md:leading-[18px] font-light mb-2">{person.description}</p>
                    <p className="font-matt text-xs md:text-[12px] md:leading-[14px] font-light italic">{person.shortDescription}</p>
                    <div className="lg:mt-6 flex space-x-4">
                    <a href={person.linkedin} className="text-blue-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 14 14" fill="none">
                        <path d="M13.399 13.4004V8.71244C13.399 6.40844 12.903 4.64844 10.215 4.64844C8.91895 4.64844 8.05495 5.35244 7.70295 6.02444H7.67095V4.85644H5.12695V13.4004H7.78295V9.16044C7.78295 8.04044 7.99095 6.96844 9.36695 6.96844C10.727 6.96844 10.743 8.23244 10.743 9.22444V13.3844H13.399V13.4004Z" fill="black"/>
                        <path d="M0.806641 4.85938H3.46264V13.4034H0.806641V4.85938Z" fill="black"/>
                        <path d="M2.13561 0.601562C1.28761 0.601562 0.599609 1.28956 0.599609 2.13756C0.599609 2.98556 1.28761 3.68956 2.13561 3.68956C2.98361 3.68956 3.67161 2.98556 3.67161 2.13756C3.67161 1.28956 2.98361 0.601562 2.13561 0.601562Z" fill="black"/>
                      </svg>
                    </a>
                    <a href={`mailto:${person.email}`} className="text-blue-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" viewBox="0 0 20 20" fill="none">
                        <path d="M18.2422 2.96875H1.75781C0.790547 2.96875 0 3.75582 0 4.72656V15.2734C0 16.2445 0.791055 17.0312 1.75781 17.0312H18.2422C19.2095 17.0312 20 16.2442 20 15.2734V4.72656C20 3.75559 19.2091 2.96875 18.2422 2.96875ZM17.9723 4.14062C17.4039 4.71082 10.7283 11.4082 10.4541 11.6834C10.225 11.9131 9.77512 11.9133 9.54594 11.6834L2.02773 4.14062H17.9723ZM1.17188 15.058V4.94199L6.21348 10L1.17188 15.058ZM2.02773 15.8594L7.04078 10.83L8.71598 12.5107C9.40246 13.1994 10.5978 13.1991 11.2841 12.5107L12.9593 10.83L17.9723 15.8594H2.02773ZM18.8281 15.058L13.7865 10L18.8281 4.94199V15.058Z" fill="black"/>
                      </svg>
                    </a>
                  </div>
                  </div>
                </div>
              ))}
            </div>


            <section className="font-matt lg:max-w-[1280px] mx-auto px-6 lg:px-4 py-2 flex flex-col items-center text-center lg:mt-[200px] ">
                {/* Title */}
                <h2 className="text-center text-2xl lg:text-6xl font-bold mb-20 uppercase">
                Unsere Werte
                </h2>

                {/* Values List */}
                <div className="flex flex-col items-center space-y-10 ">
                  {/* Love */}
                  <div className="flex items-start space-x-6 max-w-[800px] mb-2 lg:ml-[65px]">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-[110px] h-[110px]">
                      <img
                        src="/images/love-icon.png"
                        alt="Love Icon"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    {/* Text */}
                    <div className="text-left">
                      <h3 className="text-2xl leading-10 font-bold text-[#E24125] uppercase md:leading-[60px] md:text-[32px]">
                        ● LIEBE :
                      </h3>
                      <p className="text-gray-600 text-2xl max-w-[589px] md:leading-[37px] md:text-[28px] uppercase">
                      Leidenschaft treibt alles an, was wir tun
                      </p>
                    </div>
                  </div>

                  {/* Integrity */}
                  <div className="flex items-start space-x-6 max-w-[800px] mb-2 lg:ml-[65px]">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-[110px] h-[110px]">
                      <img
                        src="/images/integrity-icon.png"
                        alt="Integrity Icon"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    {/* Text */}
                    <div className="text-left">
                      <h3 className="text-2xl leading-10 font-bold text-[#0009FF] uppercase md:leading-[60px] md:text-[32px]">
                        ● Integrität
                        :
                      </h3>
                      <p className="text-gray-600 text-2xl max-w-[589px] md:leading-[37px] md:text-[28px] uppercase">
                      Transparenz und Vertrauen schaffen langfristige Partnerschaften
                      </p>
                    </div>
                  </div>

                  {/* Excellence */}
                  <div className="flex items-start space-x-6 max-w-[800px] mb-2 lg:ml-[65px]">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-[110px] h-[110px]">
                      <img
                        src="/images/excellence-icon.png"
                        alt="Excellence Icon"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    {/* Text */}
                    <div className="text-left">
                      <h3 className="text-2xl leading-10 font-bold text-[#CFFF49] uppercase md:leading-[60px] md:text-[32px]">
                        ● Exzellenz
                        :
                      </h3>
                      <p className="text-gray-600 text-2xl max-w-[589px] md:leading-[37px] md:text-[28px] uppercase">
                      Qualität liefern, die Erwartungen übertrifft</p>
                    </div>
                  </div>

                  {/* Communication */}
                  <div className="flex items-start space-x-6 max-w-[800px] mb-2 lg:ml-[65px]">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-[110px] h-[110px]">
                      <img
                        src="/images/communication-icon.png"
                        alt="Communication Icon"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    {/* Text */}
                    <div className="text-left">
                    <h3 className="text-2xl leading-10 font-bold text-[#03C319] uppercase md:leading-[60px] md:text-[32px]">
                        ● Kommunikation
                        :
                      </h3>
                      <p className="text-gray-600 text-2xl max-w-[589px] md:leading-[37px] md:text-[28px] uppercase">
                      Klare Dialoge für den
                      gemeinsamen Erfolg</p>
                    
                    </div>
                  </div>

                  {/* Flexibility */}
                  <div className="flex items-start space-x-6 max-w-[800px] mb-2 lg:ml-[65px]">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-[110px] h-[110px]">
                      <img
                        src="/images/flexibility-icon.png"
                        alt="Flexibility Icon"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    {/* Text */}
                    <div className="text-left">
                      <h3 className="text-2xl leading-10 font-bold text-[#0009FF] uppercase md:leading-[60px] md:text-[32px]">
                        ● Flexibilität

                        :
                      </h3>
                      <p className="text-gray-600 text-2xl max-w-[589px] md:leading-[37px] md:text-[28px] uppercase">
                      Agil und bereit für jede
                      Herausforderung</p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="wie" className="font-matt flex flex-col md:flex-row items-center justify-between px-4 md:px-2 py-2 lg:max-w-[1280px] mx-auto lg:mt-[200px]">
                    <div className="font-matt flex-1 max-w-md lg:text-left text-center ">
                        <h2 className="font-matt text-2xl md:text-[28px] md:leading-[37px] font-extrabold text-black mb-4 uppercase">
                        Unsere 4 Säulen – Ein ganzheitlicher Ansatz
                        </h2>
                        <p className="font-matt lg:text-[20px] lg:leading-[33px] text-lg text-gray-700 ">
                        Unser Ansatz baut auf vier zentralen Säulen auf, die nahtlose Zusammenarbeit und nachhaltige Ergebnisse sichern. Von der Analyse eurer Anforderungen über die visuelle und technische Umsetzung bis zur langfristigen Partnerschaft entwickeln wir Lösungen, die eure aktuellen und zukünftigen Bedürfnisse erfüllen. Jede Phase ist auf Zusammenarbeit und Qualität ausgerichtet, um echten Mehrwert zu schaffen.                        </p>
                    </div>

                    <div className="font-matt flex-1 mt-8 md:mt-0 flex justify-center">
                        <img
                        src="/images/Full 1.png" 
                        alt="Info Section Image"
                        className="w-full lg:w-[800px] lg:h-[600px] lg:ml-12"
                        />
                    </div>
                    </section>

                    <section className="font-matt flex flex-col md:flex-row items-center justify-between px-6 md:px-2 py-10  lg:max-w-[1280px] mx-auto">
                    <div className="flex-1 mt-8 md:mt-0 flex justify-center">
                        <img
                        src="/images/1 2.png" 
                        alt="Info Section Image"
                        className="w-full lg:w-[800px] lg:h-[600px] lg:mr-10"
                        />
                    </div>

                    <div className="font-matt flex-1 max-w-md lg:text-left text-center">
                        <h2 className="font-matt text-2xl md:text-[28px] md:leading-[37px] font-extrabold text-black mb-4 uppercase">
                        Verstehen und Kommunikation – Die Basis für euren Erfolg
                        </h2>
                        <p className="font-matt lg:text-[20px] lg:leading-[33px] text-lg text-gray-700">
                        Alles beginnt mit einer klaren und offenen Kommunikation. Wir analysieren eure Anforderungen, verstehen eure individuellen Herausforderungen und definieren gemeinsam die Ziele. Durch Consulting, Business-Analyse und strategische Planung legen wir den Grundstein für massgeschneiderte Lösungen, die eure spezifischen Bedürfnisse widerspiegeln.
                        </p>
                    </div>
                    </section>

                    <section className="font-matt flex flex-col md:flex-row items-center justify-between px-6 md:px-2 py-2 lg:max-w-[1280px] mx-auto">
                    <div className="font-matt flex-1 max-w-md lg:text-left text-center">
                        <h2 className="font-matt text-2xl md:text-[28px] md:leading-[37px] font-extrabold text-black mb-4 uppercase">
                        UI/UX – Benutzerzentrierte Gestaltung für eure Lösung
                        </h2>
                        <p className="font-matt lg:text-[20px] lg:leading-[33px] text-lg text-gray-700">
                        Im nächsten Schritt gestalten wir das Look-and-Feel eurer Lösung. Wir entwickeln Prototypen, optimieren Prozesse und entwerfen ein ansprechendes, intuitives Design. Unser Ziel ist es, dass eure Website, Software oder andere Plattformen nicht nur ästhetisch überzeugen, sondern auch funktional und benutzerfreundlich sind, um den höchsten Ansprüchen gerecht zu werden.
                        </p>
                    </div>

                    <div className="font-matt flex-1 mt-8 md:mt-0 flex justify-center">
                        <img
                        src="/images/2 1.png" 
                        alt="Info Section Image"
                        className="w-full lg:w-[800px] lg:h-[600px] lg:ml-14"
                        />
                    </div>
                    </section>

                    <section className="font-matt flex flex-col md:flex-row items-center justify-between px-6 md:px-2 py-2 lg:max-w-[1280px] mx-auto">
                    <div className="font-matt flex-1 mt-8 md:mt-0 flex justify-center">
                        <img
                        src="/images/4 1.png" 
                        alt="Info Section Image"
                        className="w-full lg:w-[800px] lg:h-[600px] lg:mr-12"
                        />
                    </div>
                    
                    <div className="font-matt flex-1 max-w-md lg:text-left text-center">
                        <h2 className="font-matt text-2xl md:text-[28px] md:leading-[37px] font-extrabold text-black mb-4 uppercase">
                        Technische Implementierung – Von der Idee zur Realität </h2>
                        <p className="font-matt lg:text-[20px] lg:leading-[33px] text-lg text-gray-700">
                        Hier setzen wir eure Vision in die Tat um. Wir entwickeln leistungsfähige und skalierbare Systeme, die eure Anforderungen perfekt erfüllen. Egal ob Online-Shop, Salesforce-Instanz, Cloud-Infrastruktur oder ERP/CRM-System – wir stellen sicher, dass die technische Umsetzung stabil, effizient, sicher und zukunftssicher ist.
                        </p>
                    </div>
                    </section>

                    <section className="font-matt flex flex-col md:flex-row items-center justify-between px-6 md:px-2 py-10 lg:max-w-[1280px] mx-auto">
                    <div className="font-matt flex-1 max-w-md text-left">
                        <h2 className="font-matt text-2xl md:text-[28px] md:leading-[37px] font-extrabold text-black mb-4 uppercase">
                        Optimierung, Schulung und Support – Nachhaltige Partnerschaft
                        </h2>
                        <p className="font-matt text-lg lg:text-[20px] lg:leading-[33px] text-gray-700">
                        Unsere Arbeit endet nicht mit der Implementierung. Wir stehen euch langfristig zur Seite, indem wir die Lösungen kontinuierlich optimieren, Schulungen anbieten und zuverlässigen Support gewährleisten. Unsere Systeme sind darauf ausgelegt, euch auch in Zukunft zu unterstützen – und wenn es Fragen gibt, sind wir immer für euch da. Unser Ziel ist es, euch eine nachhaltige und zukunftsfähige Lösung zu bieten, die langfristig Mehrwert schafft.
                        </p>
                    </div>

                    <div className="font-matt flex-1 mt-8 md:mt-0 flex justify-center">
                        <img
                        src="/images/3 1.png" 
                        alt="Info Section Image"
                        className="w-full lg:w-[800px] lg:h-[600px] lg:ml-14"
                        />
                    </div>
                    </section>
                    </div>

                    <section className="px-6 lg:px-4 py-2">
                    <div className="lg:min-w-[1280px] mx-auto md:text-center">
                      {/* Section Header */}
                      <h2 className="font-matt text-xl lg:text-[80px] lg:leading-[80px] font-bold text-black mb-12">
                      Unser Engagement für Gutes!
                          </h2>
                    </div>
                    
                    {/* Content Section (Visible only on mobile) */}
                    <div className="block lg:hidden lg:max-w-[1280px] mx-auto mt-12 flex flex-col items-center">
                      {/* Images with title and text together */}
                      <div className="flex flex-wrap justify-between w-full gap-12 mb-6">
                        <div className="flex-shrink-0 flex flex-col justify-center items-center w-full sm:w-1/3 mb-4">
                        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M162.875 132.476C162.23 132.475 161.606 132.252 161.106 131.844C160.607 131.436 160.264 130.869 160.135 130.238C159.345 126.392 157.804 122.74 155.599 119.492C155.182 118.877 155.027 118.121 155.168 117.392C155.308 116.663 155.733 116.019 156.348 115.603C156.963 115.186 157.718 115.031 158.447 115.172C159.177 115.312 159.82 115.737 160.237 116.352C162.861 120.206 164.697 124.542 165.637 129.11C165.711 129.47 165.714 129.841 165.644 130.202C165.575 130.564 165.435 130.908 165.233 131.215C165.031 131.522 164.77 131.786 164.465 131.993C164.161 132.199 163.819 132.343 163.459 132.418C163.266 132.457 163.071 132.476 162.875 132.476Z" fill="#0009FF"/>
                          <path d="M110.917 111.362C110.313 111.363 109.725 111.168 109.241 110.808C108.757 110.447 108.402 109.939 108.23 109.361C108.057 108.782 108.077 108.163 108.285 107.596C108.493 107.03 108.879 106.545 109.385 106.216C113.329 103.643 117.732 101.853 122.353 100.944C123.081 100.8 123.837 100.951 124.454 101.364C125.071 101.778 125.499 102.419 125.643 103.148C125.787 103.876 125.636 104.632 125.222 105.249C124.809 105.866 124.167 106.294 123.439 106.438C119.519 107.209 115.785 108.726 112.439 110.908C111.987 111.204 111.458 111.362 110.917 111.362Z" fill="#0009FF"/>
                          <path d="M96.4111 132.473C96.221 132.473 96.0314 132.453 95.8451 132.415C95.4848 132.341 95.1427 132.197 94.8383 131.991C94.5338 131.784 94.273 131.52 94.0708 131.213C93.8685 130.905 93.7287 130.561 93.6595 130.2C93.5902 129.839 93.5928 129.468 93.6671 129.107C94.6041 124.541 96.436 120.205 99.0571 116.349C99.4788 115.748 100.12 115.336 100.843 115.203C101.566 115.069 102.312 115.226 102.92 115.638C103.529 116.05 103.951 116.685 104.095 117.405C104.24 118.126 104.095 118.875 103.693 119.489C101.486 122.738 99.9429 126.389 99.1511 130.235C99.0217 130.867 98.6785 131.434 98.1793 131.842C97.6801 132.25 97.0556 132.473 96.4111 132.473Z" fill="#0009FF"/>
                          <path d="M101.375 157.461C100.917 157.462 100.467 157.35 100.062 157.135C99.6576 156.921 99.3119 156.611 99.0552 156.231C96.4337 152.376 94.6018 148.039 93.6652 143.471C93.5814 143.108 93.5712 142.731 93.6352 142.363C93.6992 141.995 93.8361 141.644 94.0379 141.33C94.2396 141.016 94.5022 140.745 94.81 140.534C95.1179 140.323 95.4649 140.175 95.8306 140.1C96.1963 140.025 96.5733 140.024 96.9395 140.097C97.3056 140.169 97.6536 140.315 97.9628 140.524C98.272 140.733 98.5362 141.002 98.74 141.315C98.9437 141.628 99.0829 141.978 99.1492 142.345C99.9411 146.191 101.485 149.843 103.691 153.091C103.976 153.512 104.141 154.003 104.169 154.51C104.196 155.018 104.085 155.523 103.847 155.973C103.609 156.422 103.253 156.798 102.818 157.06C102.382 157.322 101.884 157.461 101.375 157.461Z" fill="#0009FF"/>
                          <path d="M148.367 111.362C147.826 111.362 147.296 111.204 146.843 110.908C143.497 108.726 139.762 107.209 135.843 106.438C135.482 106.366 135.139 106.225 134.833 106.021C134.527 105.817 134.264 105.555 134.06 105.249C133.855 104.944 133.713 104.601 133.64 104.24C133.568 103.88 133.568 103.509 133.639 103.148C133.71 102.787 133.852 102.444 134.056 102.138C134.26 101.832 134.522 101.569 134.828 101.364C135.133 101.16 135.476 101.017 135.837 100.945C136.197 100.873 136.568 100.872 136.929 100.944C141.55 101.853 145.953 103.643 149.897 106.216C150.403 106.545 150.789 107.03 150.997 107.596C151.205 108.163 151.224 108.782 151.052 109.361C150.88 109.939 150.525 110.447 150.041 110.807C149.557 111.168 148.969 111.363 148.365 111.362H148.367Z" fill="#0009FF"/>
                           <path d="M157.909 157.461C157.401 157.46 156.903 157.32 156.469 157.058C156.034 156.795 155.679 156.419 155.442 155.97C155.204 155.521 155.094 155.016 155.121 154.509C155.149 154.002 155.314 153.512 155.599 153.091C157.807 149.844 159.351 146.192 160.143 142.345C160.209 141.978 160.348 141.628 160.552 141.315C160.756 141.002 161.02 140.733 161.329 140.524C161.638 140.315 161.986 140.169 162.352 140.097C162.719 140.024 163.096 140.025 163.461 140.1C163.827 140.175 164.174 140.323 164.482 140.534C164.79 140.745 165.052 141.016 165.254 141.33C165.456 141.644 165.593 141.995 165.657 142.363C165.721 142.731 165.711 143.108 165.627 143.471C164.687 148.04 162.852 152.376 160.227 156.231C159.97 156.61 159.625 156.92 159.221 157.135C158.817 157.349 158.366 157.461 157.909 157.461Z" fill="#0009FF"/>
                           <path d="M136.402 106.491C135.659 106.491 134.947 106.196 134.422 105.671C133.897 105.146 133.602 104.434 133.602 103.691V95.725H125.698V103.691C125.698 104.434 125.403 105.146 124.878 105.671C124.352 106.196 123.64 106.491 122.898 106.491C122.155 106.491 121.443 106.196 120.918 105.671C120.393 105.146 120.098 104.434 120.098 103.691V92.925C120.098 92.1824 120.393 91.4702 120.918 90.9451C121.443 90.42 122.155 90.125 122.898 90.125H136.402C137.144 90.125 137.856 90.42 138.382 90.9451C138.907 91.4702 139.202 92.1824 139.202 92.925V103.691C139.202 104.434 138.907 105.146 138.382 105.671C137.856 106.196 137.144 106.491 136.402 106.491Z" fill="#0009FF"/>
                           <path d="M136.402 106.491C135.659 106.491 134.947 106.196 134.422 105.671C133.897 105.146 133.602 104.434 133.602 103.691V95.725H125.698V103.691C125.698 104.434 125.403 105.146 124.878 105.671C124.352 106.196 123.64 106.491 122.898 106.491C122.155 106.491 121.443 106.196 120.918 105.671C120.393 105.146 120.098 104.434 120.098 103.691V92.925C120.098 92.1824 120.393 91.4702 120.918 90.9451C121.443 90.42 122.155 90.125 122.898 90.125H136.402C137.144 90.125 137.856 90.42 138.382 90.9451C138.907 91.4702 139.202 92.1824 139.202 92.925V103.691C139.202 104.434 138.907 105.146 138.382 105.671C137.856 106.196 137.144 106.491 136.402 106.491Z" fill="#0009FF"/>
                          <path d="M136.402 106.491C135.659 106.491 134.947 106.196 134.422 105.671C133.897 105.146 133.602 104.434 133.602 103.691V95.725H125.698V103.691C125.698 104.434 125.403 105.146 124.878 105.671C124.352 106.196 123.64 106.491 122.898 106.491C122.155 106.491 121.443 106.196 120.918 105.671C120.393 105.146 120.098 104.434 120.098 103.691V92.925C120.098 92.1824 120.393 91.4702 120.918 90.9451C121.443 90.42 122.155 90.125 122.898 90.125H136.402C137.144 90.125 137.856 90.42 138.382 90.9451C138.907 91.4702 139.202 92.1824 139.202 92.925V103.691C139.202 104.434 138.907 105.146 138.382 105.671C137.856 106.196 137.144 106.491 136.402 106.491Z" fill="#0009FF"/>
                           <path d="M163.241 162.688C162.509 162.688 161.805 162.401 161.281 161.888L155.949 156.66C155.687 156.403 155.477 156.096 155.333 155.758C155.189 155.419 155.113 155.056 155.11 154.688C155.106 154.32 155.175 153.955 155.312 153.614C155.45 153.273 155.653 152.962 155.91 152.699C156.168 152.437 156.475 152.227 156.813 152.083C157.151 151.939 157.515 151.863 157.883 151.86C158.251 151.856 158.616 151.925 158.957 152.062C159.298 152.2 159.609 152.403 159.871 152.66L165.199 157.89C165.597 158.28 165.869 158.778 165.982 159.323C166.094 159.868 166.042 160.434 165.832 160.949C165.622 161.464 165.263 161.904 164.801 162.215C164.339 162.525 163.796 162.69 163.239 162.69L163.241 162.688Z" fill="#0009FF"/>
                           <path d="M101.373 120.719C100.64 120.72 99.9357 120.433 99.413 119.919L91.649 112.305C91.3829 112.044 91.1715 111.733 91.0272 111.39C90.8829 111.046 90.8086 110.677 90.8086 110.305C90.8086 109.932 90.8829 109.564 91.0272 109.22C91.1715 108.877 91.3829 108.566 91.649 108.305L101.199 98.9488C101.722 98.4358 102.426 98.1484 103.159 98.1484C103.892 98.1484 104.596 98.4358 105.119 98.9488L112.883 106.563C113.146 106.82 113.355 107.127 113.499 107.466C113.643 107.804 113.719 108.167 113.723 108.535C113.726 108.903 113.658 109.268 113.52 109.609C113.383 109.95 113.18 110.261 112.922 110.524C112.664 110.786 112.358 110.996 112.019 111.14C111.681 111.284 111.317 111.36 110.95 111.364C110.582 111.367 110.217 111.298 109.876 111.161C109.534 111.024 109.224 110.82 108.961 110.563L103.161 104.871L97.619 110.307L103.343 115.923C103.74 116.312 104.013 116.811 104.125 117.356C104.238 117.9 104.186 118.466 103.976 118.981C103.765 119.496 103.406 119.937 102.945 120.247C102.483 120.557 101.939 120.723 101.383 120.723L101.373 120.719Z" fill="#0009FF"/>
                           <path d="M96.3988 145.707H85.4328C84.6902 145.707 83.978 145.412 83.4529 144.887C82.9278 144.362 82.6328 143.65 82.6328 142.907V129.671C82.6328 128.928 82.9278 128.216 83.4529 127.691C83.978 127.166 84.6902 126.871 85.4328 126.871H96.3988C97.1414 126.871 97.8536 127.166 98.3787 127.691C98.9038 128.216 99.1988 128.928 99.1988 129.671C99.1988 130.414 98.9038 131.126 98.3787 131.651C97.8536 132.176 97.1414 132.471 96.3988 132.471H88.2328V140.107H96.3988C97.1414 140.107 97.8536 140.402 98.3787 140.927C98.9038 141.452 99.1988 142.164 99.1988 142.907C99.1988 143.65 98.9038 144.362 98.3787 144.887C97.8536 145.412 97.1414 145.707 96.3988 145.707Z" fill="#0009FF"/>
                           <path d="M173.852 145.707H162.878C162.136 145.707 161.423 145.412 160.898 144.887C160.373 144.362 160.078 143.65 160.078 142.907C160.078 142.164 160.373 141.452 160.898 140.927C161.423 140.402 162.136 140.107 162.878 140.107H171.052V132.471H162.878C162.136 132.471 161.423 132.176 160.898 131.651C160.373 131.126 160.078 130.414 160.078 129.671C160.078 128.928 160.373 128.216 160.898 127.691C161.423 127.166 162.136 126.871 162.878 126.871H173.852C174.595 126.871 175.307 127.166 175.832 127.691C176.357 128.216 176.652 128.928 176.652 129.671V142.907C176.652 143.65 176.357 144.362 175.832 144.887C175.307 145.412 174.595 145.707 173.852 145.707Z" fill="#0009FF"/>
                           <path d="M96.0431 162.686C95.4804 162.687 94.9307 162.517 94.4656 162.2C94.0006 161.884 93.6418 161.434 93.4361 160.91C93.2303 160.386 93.1872 159.813 93.3122 159.264C93.4373 158.715 93.7247 158.217 94.1371 157.834L99.4111 152.66C99.6738 152.403 99.9846 152.2 100.326 152.062C100.667 151.925 101.032 151.856 101.4 151.86C101.768 151.863 102.131 151.939 102.469 152.083C102.808 152.227 103.115 152.437 103.372 152.699C103.63 152.962 103.833 153.273 103.97 153.614C104.108 153.955 104.177 154.32 104.173 154.688C104.169 155.056 104.093 155.419 103.949 155.758C103.805 156.096 103.596 156.403 103.333 156.66L97.9991 161.886C97.4766 162.398 96.7746 162.685 96.0431 162.686Z" fill="#0009FF"/>
                           <path d="M157.91 120.719C157.354 120.719 156.81 120.554 156.348 120.244C155.886 119.934 155.527 119.493 155.316 118.978C155.106 118.463 155.053 117.897 155.166 117.352C155.278 116.807 155.551 116.308 155.948 115.919L161.674 110.303L156.132 104.867L150.332 110.559C149.802 111.079 149.087 111.367 148.344 111.36C147.601 111.352 146.891 111.05 146.371 110.52C145.851 109.989 145.563 109.274 145.57 108.531C145.578 107.789 145.88 107.079 146.41 106.559L154.174 98.9449C154.698 98.4319 155.401 98.1445 156.134 98.1445C156.867 98.1445 157.571 98.4319 158.094 98.9449L167.634 108.303C167.9 108.564 168.112 108.875 168.256 109.218C168.4 109.562 168.475 109.93 168.475 110.303C168.475 110.675 168.4 111.044 168.256 111.388C168.112 111.731 167.9 112.042 167.634 112.303L159.87 119.919C159.348 120.433 158.643 120.72 157.91 120.719Z" fill="#0009FF"/>
                           <path d="M116.517 157.025C116.108 157.025 115.704 156.935 115.334 156.763C114.964 156.59 114.635 156.338 114.373 156.025C114.11 155.712 113.919 155.346 113.813 154.951C113.707 154.556 113.688 154.143 113.759 153.741L115.911 141.441L106.783 132.717C106.402 132.354 106.131 131.891 106.001 131.381C105.871 130.871 105.887 130.335 106.048 129.834C106.209 129.333 106.507 128.887 106.91 128.548C107.312 128.209 107.802 127.99 108.323 127.917L120.985 126.117L126.637 114.891C126.87 114.428 127.228 114.039 127.669 113.767C128.11 113.495 128.619 113.352 129.137 113.352C129.655 113.352 130.163 113.495 130.605 113.767C131.046 114.039 131.403 114.428 131.637 114.891L137.289 126.117L149.951 127.917C150.472 127.99 150.962 128.209 151.364 128.548C151.766 128.887 152.065 129.333 152.226 129.834C152.387 130.335 152.403 130.871 152.273 131.381C152.143 131.891 151.872 132.354 151.491 132.717L142.365 141.439L144.517 153.743C144.606 154.256 144.551 154.784 144.356 155.267C144.162 155.751 143.837 156.17 143.417 156.479C142.997 156.788 142.5 156.973 141.98 157.014C141.461 157.056 140.94 156.951 140.477 156.713L129.139 150.871L117.799 156.713C117.402 156.917 116.963 157.024 116.517 157.025ZM129.139 144.921C129.585 144.921 130.024 145.027 130.421 145.231L138.021 149.153L136.599 140.931C136.52 140.477 136.554 140.012 136.697 139.574C136.841 139.137 137.09 138.742 137.423 138.425L143.463 132.653L135.063 131.453C134.616 131.389 134.191 131.218 133.824 130.955C133.458 130.692 133.16 130.344 132.957 129.941L129.157 122.375L125.347 129.941C125.144 130.344 124.846 130.692 124.479 130.955C124.113 131.218 123.688 131.389 123.241 131.453L114.841 132.653L120.881 138.425C121.213 138.742 121.462 139.137 121.606 139.574C121.75 140.01 121.784 140.476 121.705 140.929L120.267 149.153L127.867 145.231C128.261 145.029 128.696 144.923 129.139 144.921Z" fill="#0009FF"/>
                           <path d="M96.0422 162.69C95.4884 162.69 94.947 162.526 94.4866 162.218C94.0261 161.91 93.6672 161.473 93.4553 160.961C93.2434 160.45 93.188 159.887 93.296 159.344C93.404 158.8 93.6707 158.302 94.0623 157.91C94.4539 157.518 94.9528 157.252 95.4959 157.144C96.0391 157.036 96.6021 157.091 97.1137 157.303C97.6253 157.515 98.0626 157.874 98.3703 158.334C98.678 158.795 98.8422 159.336 98.8422 159.89C98.8422 160.258 98.7697 160.622 98.6289 160.962C98.488 161.302 98.2816 161.61 98.0214 161.87C97.7612 162.13 97.4523 162.337 97.1123 162.477C96.7724 162.618 96.4081 162.69 96.0402 162.69H96.0422Z" fill="#0009FF"/>
                          <path d="M136.389 182.452H122.897C122.154 182.452 121.442 182.157 120.917 181.632C120.392 181.107 120.097 180.395 120.097 179.652V171.114C117.029 170.307 114.079 169.105 111.321 167.538L105.121 173.628C104.597 174.142 103.893 174.43 103.16 174.43C102.426 174.43 101.722 174.142 101.199 173.628L91.6607 164.27C91.3946 164.01 91.1833 163.698 91.039 163.355C90.8946 163.012 90.8203 162.643 90.8203 162.27C90.8203 161.898 90.8946 161.529 91.039 161.186C91.1833 160.842 91.3946 160.531 91.6607 160.27L94.0927 157.886C94.6232 157.366 95.3384 157.079 96.081 157.086C96.8236 157.094 97.5329 157.396 98.0527 157.926C98.5725 158.457 98.8604 159.172 98.8529 159.915C98.8454 160.657 98.5432 161.366 98.0127 161.886L97.6127 162.27L103.155 167.706L108.955 162.016C109.41 161.57 110.003 161.292 110.638 161.229C111.272 161.166 111.909 161.321 112.443 161.668C115.788 163.852 119.523 165.37 123.443 166.14C124.078 166.266 124.651 166.609 125.062 167.109C125.474 167.61 125.699 168.238 125.699 168.886V176.852H133.591V168.886C133.591 168.238 133.816 167.61 134.228 167.109C134.64 166.608 135.213 166.266 135.849 166.14C139.769 165.37 143.503 163.852 146.849 161.668C147.383 161.321 148.02 161.166 148.654 161.229C149.288 161.292 149.882 161.57 150.337 162.016L156.137 167.706L161.679 162.272L161.279 161.886C161.016 161.629 160.807 161.322 160.663 160.984C160.518 160.646 160.442 160.282 160.439 159.915C160.435 159.547 160.504 159.182 160.641 158.841C160.778 158.5 160.981 158.189 161.239 157.926C161.496 157.664 161.803 157.454 162.141 157.31C162.479 157.166 162.843 157.09 163.21 157.086C163.578 157.082 163.943 157.151 164.284 157.288C164.625 157.426 164.936 157.629 165.199 157.886L167.631 160.27C167.897 160.531 168.108 160.842 168.252 161.186C168.397 161.529 168.471 161.898 168.471 162.27C168.471 162.643 168.397 163.012 168.252 163.355C168.108 163.698 167.897 164.01 167.631 164.27L158.089 173.628C157.565 174.142 156.861 174.43 156.128 174.43C155.394 174.43 154.69 174.142 154.167 173.628L147.967 167.538C145.208 169.106 142.258 170.309 139.189 171.114V179.652C139.189 180.395 138.894 181.107 138.369 181.632C137.844 182.157 137.131 182.452 136.389 182.452Z" fill="#0009FF"/>
                           <path d="M83.1573 87.7776C65.3033 87.7776 50.7773 73.2516 50.7773 55.3976C50.7773 37.5436 65.3033 23.0156 83.1573 23.0156C101.011 23.0156 115.539 37.5416 115.539 55.3996C115.539 73.2576 101.013 87.7776 83.1573 87.7776ZM83.1573 28.6156C68.3913 28.6156 56.3773 40.6296 56.3773 55.3976C56.3773 70.1656 68.3913 82.1776 83.1573 82.1776C97.9233 82.1776 109.939 70.1636 109.939 55.3996C109.939 40.6356 97.9253 28.6156 83.1573 28.6156Z" fill="#0009FF"/>
                            <path d="M13.8542 135.131C13.6887 135.131 13.5234 135.117 13.3602 135.089C12.9981 135.025 12.6523 134.89 12.3425 134.692C12.0326 134.494 11.7648 134.236 11.5544 133.935C11.344 133.633 11.195 133.293 11.1161 132.934C11.0371 132.575 11.0297 132.203 11.0942 131.841C13.5876 118.016 20.8488 105.502 31.6146 96.4759C42.3804 87.4502 55.9696 82.4841 70.0182 82.4414H96.2902C106.796 82.4465 117.114 85.2284 126.198 90.5054C126.84 90.8786 127.308 91.4915 127.498 92.2094C127.688 92.9273 127.585 93.6913 127.212 94.3334C126.839 94.9755 126.226 95.4431 125.508 95.6332C124.79 95.8234 124.026 95.7206 123.384 95.3474C115.155 90.5674 105.809 88.0483 96.2922 88.0454H70.0182C57.2734 88.0394 44.9341 92.5248 35.1681 100.714C25.4021 108.902 18.8342 120.271 16.6182 132.821C16.5029 133.47 16.1626 134.057 15.657 134.48C15.1514 134.902 14.5131 135.133 13.8542 135.131Z" fill="#0009FF"/>
                            <path d="M85.4328 135.131H13.8508C13.1082 135.131 12.396 134.836 11.8709 134.311C11.3458 133.786 11.0508 133.074 11.0508 132.331C11.0508 131.589 11.3458 130.876 11.8709 130.351C12.396 129.826 13.1082 129.531 13.8508 129.531H85.4328C86.1754 129.531 86.8876 129.826 87.4127 130.351C87.9378 130.876 88.2328 131.589 88.2328 132.331C88.2328 133.074 87.9378 133.786 87.4127 134.311C86.8876 134.836 86.1754 135.131 85.4328 135.131Z" fill="#0009FF"/>
                             </svg>
                            <h2 className="text-[22px] leading-[30px] font-extrabold text-black mb-4 font-matt text-center uppercase">
                            Förderung von Talenten
                           </h2>
                          <p className="text-[17px] text-black mb-4 font-matt text-center">
                          Mit der Gründung der eksperts
                          Academy unterstützen wir die
                          nächste Generation von
                          Fachkräften durch Zugang zu
                          Wissen und Ressourcen.
                          </p>
                        </div>
                        <div className="flex-shrink-0 flex flex-col justify-center items-center w-full sm:w-1/3 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="170" height="170" viewBox="0 0 170 170" fill="none">
                                              <g clip-path="url(#clip0_1292_11573)">
                                                <path d="M84.7033 21.602C86.55 21.602 88.0472 20.1048 88.0472 18.2581V3.34389C88.0472 1.49713 86.55 0 84.7033 0C82.8565 0 81.3594 1.49713 81.3594 3.34389V18.2581C81.3597 20.1048 82.8568 21.602 84.7033 21.602Z" fill="#0009FF"/>
                                                <path d="M166.441 114.878L160.533 108.987C158.432 106.888 155.631 105.732 152.647 105.732C150.739 105.732 148.907 106.207 147.284 107.097L136.152 95.9781L136.694 95.4366C141.21 90.9117 141.209 83.5588 136.694 79.0492C135.081 77.4329 133.068 76.3551 130.873 75.9015C131.175 74.8586 131.334 73.7662 131.334 72.6483C131.334 69.5421 130.128 66.6296 127.944 64.4544C126.33 62.8381 124.317 61.7603 122.123 61.3068C122.425 60.2639 122.584 59.1718 122.584 58.0535C122.584 54.947 121.377 52.0348 119.19 49.8563C117.537 48.2061 115.506 47.1616 113.374 46.717C114.515 42.7834 113.54 38.3578 110.445 35.2579C107.869 32.693 104.374 31.5906 101.006 31.9479L78.9471 27.7726C75.583 27.1344 71.3818 26.7124 68.7298 29.1313C68.5625 29.284 68.3918 29.4597 68.2238 29.6552C64.112 28.1564 59.3161 29.0489 56.0233 32.338C53.8389 34.5198 52.6356 37.4311 52.6356 40.5356C52.6356 41.6538 52.794 42.7459 53.0958 43.7891C50.9038 44.2424 48.8933 45.3188 47.2853 46.9298C45.0965 49.1096 43.8896 52.0175 43.8873 55.1184C43.8863 56.2393 44.0453 57.335 44.3488 58.3809C42.1557 58.8331 40.1439 59.9076 38.5309 61.5186C36.3422 63.705 35.1369 66.6179 35.1369 69.7208C35.1369 72.0975 35.8465 74.3616 37.1613 76.2741C35.5012 76.8369 33.9804 77.7735 32.7071 79.0455C28.1882 83.5588 28.1865 90.912 32.7101 95.4436L33.2503 95.9815L22.1173 107.094C17.9799 105.146 12.8822 105.876 9.46791 109.286L3.55709 115.18C1.45467 117.28 0.297207 120.081 0.296875 123.067C0.296875 126.053 1.45467 128.855 3.55709 130.955L10.9338 138.322C12.2404 139.628 14.3577 139.626 15.6626 138.32C16.9678 137.013 16.9665 134.896 15.66 133.591L8.28322 126.223C7.44584 125.387 6.98465 124.266 6.98465 123.067C6.98465 121.869 7.44584 120.748 8.28123 119.914L14.1924 114.019C15.6693 112.544 17.9297 112.324 19.6463 113.351C19.7672 113.532 19.907 113.705 20.067 113.865C20.3536 114.153 20.6806 114.373 21.0279 114.534L54.926 148.382C55.087 148.733 55.3081 149.063 55.5967 149.352C55.8776 149.633 56.198 149.851 56.538 150.011C57.2548 150.821 57.651 151.857 57.651 152.961C57.651 154.16 57.1898 155.28 56.3524 156.117L50.4472 162.015C48.7024 163.752 45.8642 163.752 44.1247 162.02L36.7479 154.643C35.4421 153.337 33.325 153.337 32.0191 154.643C30.7133 155.949 30.7133 158.066 32.0191 159.372L39.4012 166.754C41.574 168.918 44.4275 170 47.2823 170C50.1378 170 52.9945 168.916 55.17 166.751L61.0788 160.849C63.1813 158.749 64.3391 155.948 64.3391 152.961C64.3391 150.83 63.7464 148.794 62.6444 147.039L75.1739 134.525C75.1872 134.511 75.2005 134.498 75.2141 134.484C76.6488 133.001 80.6441 133.279 84.508 133.547C87.2532 133.738 90.3139 133.95 93.3041 133.605L107.025 147.31C106.136 148.93 105.662 150.76 105.662 152.665C105.662 155.648 106.819 158.448 108.922 160.548L114.831 166.45C116.932 168.549 119.733 169.705 122.717 169.705C125.701 169.705 128.502 168.549 130.603 166.45L166.443 130.653C168.545 128.554 169.703 125.753 169.703 122.766C169.703 119.78 168.545 116.979 166.441 114.878ZM77.702 34.3435L92.2074 37.0891L83.5252 45.768C82.1821 45.1226 80.3413 43.9186 78.3219 41.9869C75.5577 39.3426 73.5805 36.2895 73.4005 34.3853C73.4002 34.3843 73.4002 34.3834 73.4002 34.3824C73.4002 34.382 73.3999 34.3817 73.3999 34.3814C73.3869 34.2446 73.3836 34.1353 73.3853 34.052C73.8225 33.9457 74.984 33.8279 77.702 34.3435ZM60.7491 37.0698C62.4432 35.3775 65.0748 35.1822 66.989 36.4785C68.0738 41.0266 71.9535 45.1488 73.699 46.8189C74.9926 48.0567 79.1433 51.7678 83.3329 52.7878C83.8997 53.6003 84.2081 54.5689 84.2081 55.5909C84.2081 56.9074 83.7018 58.1382 82.7791 59.0599C81.859 59.9816 80.6262 60.489 79.3074 60.489C77.9882 60.489 76.7554 59.9816 75.831 59.0556L75.8307 59.0553L75.829 59.0536L60.7488 44.0006C59.8294 43.0826 59.3231 41.8517 59.3231 40.5356C59.3234 39.2191 59.8298 37.9882 60.7491 37.0698ZM52.0114 51.6616C52.9315 50.7402 54.163 50.2325 55.4798 50.2325C56.7983 50.2325 58.0338 50.7412 58.9598 51.6662L71.1029 63.7851C73.015 65.7002 73.015 68.8167 71.1095 70.7252C70.1845 71.6466 68.9473 72.1539 67.6262 72.1539C66.305 72.1539 65.0679 71.6466 64.1468 70.7292L64.1465 70.7288L54.9343 61.5186C54.92 61.5043 54.9044 61.491 54.8898 61.4764L52.0078 58.5957C51.083 57.672 50.574 56.4389 50.575 55.1234C50.5764 53.8122 51.0837 52.5853 52.0114 51.6616ZM43.2571 66.2504C44.1778 65.331 45.412 64.8246 46.7328 64.8246C48.0426 64.8246 49.2662 65.3237 50.1829 66.2271L59.4233 75.4633C60.3447 76.381 60.8524 77.6105 60.8524 78.9253C60.8524 80.2399 60.3447 81.4694 59.4197 82.3908C58.4993 83.3098 57.2665 83.8162 55.948 83.8162C54.6275 83.8162 53.3907 83.3085 52.4689 82.3908L49.1191 79.0449C49.1184 79.0439 49.1174 79.0432 49.1168 79.0426L43.2574 73.1902C42.3337 72.2675 41.825 71.035 41.825 69.7201C41.825 68.4056 42.3337 67.1728 43.2571 66.2504ZM37.4332 83.777C38.3579 82.8533 39.5938 82.3446 40.9129 82.3446C42.2318 82.3446 43.4673 82.8529 44.3916 83.776L47.7461 87.1265C48.6679 88.0443 49.1752 89.2738 49.1752 90.5886C49.1752 91.9035 48.6675 93.1326 47.7392 94.0577C46.8191 94.9791 45.5863 95.4867 44.2674 95.4867C42.9483 95.4867 41.7155 94.9794 40.7887 94.051L40.3687 93.6327C40.3631 93.627 40.3588 93.6211 40.3535 93.6157C40.3471 93.6098 40.3405 93.6045 40.3342 93.5985L37.4366 90.7121C35.5244 88.796 35.5227 85.6852 37.4332 83.777ZM105.577 121.781C104.272 120.474 102.155 120.473 100.849 121.778L97.8736 124.749C95.0466 127.576 89.9244 127.22 84.9708 126.876C79.5916 126.502 74.0291 126.117 70.4295 129.812L58.1128 142.114L27.3126 111.359L38.2125 100.479C40.0141 101.583 42.093 102.175 44.2681 102.175C47.3756 102.175 50.2895 100.97 52.466 98.7898C54.657 96.6077 55.864 93.6954 55.864 90.5889C55.864 90.5601 55.862 90.5315 55.862 90.5026C55.8909 90.5029 55.9197 90.5046 55.9486 90.5046C59.0518 90.5046 61.9634 89.3036 64.1428 87.1269C66.3339 84.9447 67.5408 82.0322 67.5408 78.926C67.5408 78.8971 67.5388 78.8686 67.5388 78.8397C67.5681 78.8397 67.5973 78.8417 67.6268 78.8417C70.729 78.8417 73.6423 77.642 75.8363 75.4569C78.114 73.1756 79.2406 70.172 79.219 67.1748C79.2489 67.1751 79.2788 67.1768 79.3087 67.1768C82.4162 67.1764 85.3298 65.9721 87.5095 63.7884C89.694 61.6066 90.8972 58.6953 90.8972 55.5909C90.8972 53.4197 90.3069 51.3442 89.2062 49.5462L98.7597 39.9967C99.4716 39.2878 100.35 38.8429 101.27 38.6592C101.369 38.6486 101.467 38.6327 101.565 38.6134C103.041 38.4099 104.591 38.8654 105.72 39.9897C107.632 41.9052 107.632 45.0216 105.727 46.9301L102.817 49.8278C102.808 49.8374 102.798 49.8461 102.788 49.8557L99.4368 53.2012C98.1299 54.5061 98.1286 56.6235 99.4338 57.93C100.739 59.2369 102.856 59.2379 104.163 57.933L107.084 55.0158C107.084 55.0151 107.085 55.0144 107.086 55.0138L107.527 54.5738C109.445 52.674 112.551 52.6779 114.467 54.5908C115.389 55.5085 115.896 56.738 115.896 58.0529C115.896 59.3674 115.389 60.5969 114.46 61.5219L111.533 64.4541C111.533 64.4544 111.533 64.4548 111.532 64.4554L108.181 67.7927C106.873 69.0959 106.869 71.2133 108.172 72.5215C109.475 73.83 111.592 73.834 112.901 72.5311L116.267 69.1786C117.187 68.2569 118.42 67.7495 119.738 67.7495C121.058 67.7495 122.291 68.2568 123.217 69.1852C124.139 70.1033 124.647 71.3328 124.647 72.6476C124.647 73.9621 124.139 75.1917 123.212 76.1147L117.378 81.9508C116.073 83.257 116.073 85.3741 117.379 86.6796C118.032 87.3324 118.887 87.6584 119.743 87.6584C120.599 87.6584 121.455 87.3317 122.108 86.6786L124.967 83.8185C124.983 83.8029 125.001 83.7893 125.017 83.773C125.937 82.8513 127.17 82.3439 128.489 82.3439C129.808 82.3439 131.041 82.8513 131.964 83.7763C133.874 85.6845 133.873 88.7956 131.964 90.7075L129.057 93.6111C129.056 93.6121 129.055 93.6131 129.054 93.6141C129.053 93.6151 129.052 93.6164 129.051 93.6174L124.437 98.2257C123.131 99.5309 123.129 101.648 124.434 102.955C125.087 103.609 125.944 103.936 126.8 103.936C127.655 103.936 128.51 103.61 129.163 102.958L131.42 100.704L142.237 111.508L111.439 142.268L100.404 131.246C101.174 130.751 101.91 130.17 102.601 129.479L105.574 126.509C106.881 125.205 106.883 123.087 105.577 121.781ZM161.717 125.922L125.877 161.718C125.038 162.555 123.916 163.017 122.717 163.017C121.517 163.017 120.395 162.555 119.557 161.718L113.647 155.816C112.81 154.98 112.349 153.861 112.349 152.665C112.349 151.47 112.81 150.351 113.647 149.515L149.487 113.718C150.326 112.881 151.448 112.419 152.647 112.419C153.847 112.419 154.969 112.881 155.81 113.72L161.717 119.611C162.554 120.447 163.015 121.567 163.015 122.766C163.015 123.965 162.554 125.086 161.717 125.922Z" fill="#0009FF"/>
                                                <path d="M40.2994 18.7818C40.9522 19.4332 41.8069 19.7586 42.6615 19.7586C43.5181 19.7586 44.3751 19.4312 45.0282 18.7768C46.3328 17.4696 46.3308 15.3526 45.0236 14.048L32.8387 1.88737C31.5318 0.582816 29.4144 0.584477 28.1099 1.89202C26.8053 3.19922 26.8073 5.31625 28.1145 6.62081L40.2994 18.7818Z" fill="#0009FF"/>
                                                <path d="M126.742 19.7585C127.597 19.7585 128.453 19.4324 129.105 18.7807L141.281 6.61968C142.587 5.3148 142.589 3.19744 141.284 1.89089C139.979 0.584351 137.862 0.583023 136.555 1.88824L124.379 14.0492C123.073 15.3541 123.071 17.4715 124.377 18.778C125.03 19.4318 125.886 19.7585 126.742 19.7585Z" fill="#0009FF"/>
                                                <path d="M20.8577 143.836C19.5631 145.152 19.5811 147.27 20.8982 148.564L20.9079 148.574C21.5576 149.213 22.4013 149.531 23.2447 149.531C24.1103 149.531 24.9759 149.196 25.6317 148.529C26.9262 147.212 26.9033 145.09 25.5865 143.795C24.27 142.501 22.153 142.519 20.8577 143.836Z" fill="#0009FF"/>
                                                <path d="M113.755 116.964C114.263 116.964 114.779 116.848 115.264 116.604C116.913 115.772 117.575 113.761 116.744 112.112C115.912 110.463 113.901 109.801 112.252 110.632L112.234 110.642C110.585 111.473 109.932 113.48 110.763 115.128C111.35 116.293 112.531 116.964 113.755 116.964Z" fill="#0009FF"/>
                                              </g>
                                              <defs>
                                                <clipPath id="clip0_1292_11573">
                                                  <rect width="170" height="170" fill="white"/>
                                                </clipPath>
                                              </defs>
                                            </svg>
                                            <h2 className="text-[22px] leading-[30px] font-extrabold text-black mb-4 font-matt text-center uppercase mt-2">
                            Unterstützung lokaler Unternehmen
                          </h2>
                          <p className="text-[17px] text-black mb-4 font-matt text-center">
                          Wir helfen kleineren Unternehmen nicht
                          nur mit finanziellen Mitteln, sondern auch
                          durch unsere personellen Ressourcen, um
                          ihre Ideen und Projekte zu realisieren.   
                          </p>
                        </div>
                        <div className="flex-shrink-0 flex flex-col justify-center items-center w-full sm:w-1/3 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="172" height="172" viewBox="0 0 172 172" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M37.0754 88.5652C41.1752 88.5652 44.5058 91.9013 44.5058 95.9973C44.5058 100.093 41.1752 103.429 37.0754 103.429C32.9756 103.429 29.6433 100.093 29.6433 95.9973C29.6433 91.9013 32.9756 88.5652 37.0754 88.5652ZM29.7045 55.2227C29.7045 51.1267 33.0406 47.7905 37.1367 47.7905C41.2364 47.7905 44.5671 51.1267 44.5671 55.2227C44.5671 59.3187 41.2364 62.6548 37.1367 62.6548C33.0406 62.6548 29.7045 59.3187 29.7045 55.2227ZM65.9071 19.0996C70.0031 19.0996 73.3375 22.4357 73.3375 26.5317C73.3375 30.6277 70.0031 33.9638 65.9071 33.9638C61.8073 33.9638 58.4733 30.6277 58.4733 26.5317C58.4729 22.4357 61.8073 19.0996 65.9071 19.0996ZM106.53 19.0996C110.626 19.0996 113.962 22.4357 113.962 26.5317C113.962 30.6277 110.626 33.9638 106.53 33.9638C102.43 33.9638 99.0959 30.6277 99.0959 26.5317C99.0959 22.4357 102.43 19.0996 106.53 19.0996ZM142.641 55.2227C142.641 59.3187 139.309 62.6548 135.209 62.6548C131.113 62.6548 127.779 59.3187 127.779 55.2227C127.779 51.1267 131.113 47.7905 135.209 47.7905C139.309 47.7902 142.641 51.1267 142.641 55.2227ZM142.579 95.9973C142.579 100.093 139.248 103.429 135.148 103.429C131.048 103.429 127.718 100.093 127.718 95.9973C127.718 91.9013 131.048 88.5652 135.148 88.5652C139.248 88.5652 142.579 91.9013 142.579 95.9973ZM25.2525 95.9973C25.2525 102.503 30.5552 107.822 37.0754 107.822C43.5956 107.822 48.8984 102.503 48.8984 95.9973C48.8984 89.4734 43.5956 84.1727 37.0754 84.1727C36.8288 84.1727 36.5863 84.1727 36.3434 84.1912C35.3761 78.5383 35.3761 72.6631 36.3434 67.0102C36.6066 67.0287 36.8697 67.0473 37.1367 67.0473C43.6568 67.0473 48.9596 61.7466 48.9596 55.2227C48.9596 51.6826 47.4044 48.5133 44.9434 46.3447C48.2461 41.7114 52.3645 37.5968 57.0126 34.3161C59.1812 36.7994 62.3632 38.3563 65.9071 38.3563C72.4256 38.3563 77.73 33.0556 77.73 26.5317C77.73 26.2909 77.719 26.0312 77.7042 25.7718C83.3145 24.8451 89.123 24.8451 94.7315 25.8089C94.7168 26.0497 94.7037 26.2909 94.7037 26.5317C94.7037 33.0556 100.01 38.3563 106.53 38.3563C110.04 38.3563 113.201 36.818 115.367 34.39C119.984 37.6704 124.082 41.7664 127.366 46.3815C124.927 48.5501 123.387 51.7008 123.387 55.2223C123.387 61.7463 128.69 67.047 135.21 67.047C135.456 67.047 135.703 67.0284 135.946 67.0098C136.909 72.6813 136.909 78.5379 135.942 84.1909C135.679 84.1723 135.415 84.1723 135.148 84.1723C128.628 84.1723 123.326 89.473 123.326 95.997C123.326 102.502 128.628 107.822 135.148 107.822C141.669 107.822 146.971 102.502 146.971 95.997C146.971 91.2893 144.203 87.2119 140.206 85.3031C141.343 78.9274 141.344 72.3109 140.212 65.9348C144.237 64.0442 147.034 59.9485 147.034 55.2223C147.034 48.6984 141.731 43.3977 135.209 43.3977C133.78 43.3977 132.411 43.657 131.143 44.1204C127.473 38.8937 122.856 34.2789 117.634 30.6091C118.099 29.3301 118.353 27.9589 118.353 26.5317C118.353 20.0263 113.048 14.707 106.53 14.707C101.796 14.707 97.7058 17.5055 95.8189 21.5461C89.499 20.4154 82.9303 20.4154 76.6065 21.5089C74.7125 17.5055 70.6292 14.707 65.9068 14.707C59.3866 14.707 54.0804 20.0263 54.0804 26.5317C54.0804 27.9404 54.327 29.2747 54.7753 30.5166C49.5041 34.205 44.8484 38.8383 41.1546 44.1018C39.8997 43.6385 38.5467 43.3977 37.1363 43.3977C30.6179 43.3977 25.3134 48.6984 25.3134 55.2223C25.3134 59.93 28.0822 64.0074 32.0764 65.898C30.944 72.2737 30.944 78.9088 32.0726 85.2845C28.0475 87.1751 25.2525 91.2525 25.2525 95.9973ZM88.3387 104.449V90.6413V81.5779L95.2242 74.6834C96.0824 73.831 96.0824 72.4409 95.2242 71.5881C94.3679 70.7171 92.9761 70.7171 92.1178 71.5881L88.3387 75.369V68.5671V56.0379C88.3387 54.8333 87.3545 53.8508 86.1422 53.8508C84.93 53.8508 83.9458 54.8329 83.9458 56.0379V63.2661L80.1666 59.4852C79.3083 58.6327 77.9203 58.6327 77.062 59.4852C76.2037 60.3376 76.2037 61.7277 77.062 62.5987L83.9454 69.4749V80.6694V85.3399L80.1662 81.559C79.308 80.7065 77.9199 80.7065 77.0616 81.559C76.2034 82.4114 76.2034 83.8015 77.0616 84.6728L83.9451 91.5491V104.449C76.1163 97.3689 71.5477 86.7303 71.5477 75.165C71.5477 62.5433 76.9763 51.0338 86.1412 44.0464C95.3098 51.0338 100.735 62.5433 100.735 75.165C100.736 86.7303 96.1674 97.3689 88.3387 104.449ZM87.3933 39.5242C98.499 47.2157 105.127 60.5419 105.127 75.1654C105.127 89.7888 98.4987 103.115 87.3933 110.806C87.3933 110.806 87.3896 110.806 87.3878 110.806C87.3008 110.862 87.2138 110.917 87.123 110.954C87.1061 110.973 87.0913 110.973 87.0731 110.992C86.8952 111.066 86.7043 111.121 86.502 111.158C86.4817 111.158 86.4594 111.177 86.437 111.177C86.3424 111.196 86.2423 111.196 86.1422 111.196C86.0421 111.196 85.9458 111.196 85.8495 111.177C85.8254 111.177 85.803 111.158 85.7827 111.158C85.5808 111.121 85.3899 111.066 85.2138 110.992C85.1969 110.973 85.1787 110.973 85.158 110.954C85.071 110.917 84.9819 110.862 84.9004 110.806C84.8986 110.806 84.8949 110.806 84.8911 110.806C73.7854 103.115 67.1579 89.7885 67.1579 75.1654C67.1579 60.5419 73.7857 47.2161 84.8911 39.5242C85.6438 39.0051 86.6389 39.0051 87.3933 39.5242ZM147.739 123.038C139.374 129.896 126.819 139.237 116.674 144.834C109.154 148.967 101.213 152.822 94.09 152.897C90.1832 152.915 86.3448 151.803 82.2746 150.598C80.2154 149.987 78.0878 149.375 75.9323 148.893C65.2253 146.576 55.0628 145.78 45.1102 145.78C37.7132 145.78 30.4293 146.224 23.1269 146.762V122.612C36.8198 124.187 43.6923 124.984 59.3333 121.889C62.1413 121.333 64.6192 120.295 67.0175 119.313C71.3506 117.515 75.0964 115.958 79.7132 117.719L98.3288 124.799C100.199 125.522 101.142 127.616 100.431 129.488C99.6559 131.527 97.3986 132.064 95.5654 131.527C94.6369 131.268 93.573 130.953 92.446 130.6C89.3583 129.655 85.8536 128.599 83.2272 128.154C79.6946 127.561 75.6447 127.95 70.8445 129.377C69.6808 129.711 69.0172 130.934 69.3598 132.101C69.7007 133.269 70.9223 133.936 72.0843 133.584C76.234 132.361 79.6423 132.009 82.5003 132.491C84.845 132.88 88.2031 133.899 91.1667 134.807C92.3122 135.16 93.3927 135.475 94.3583 135.753C95.2107 135.994 96.0615 136.124 96.8974 136.124C99.746 136.124 102.352 134.752 103.822 132.454C106.222 132.398 108.564 132.083 110.793 131.508C118.972 129.396 131.744 123.354 143.01 118.034L144.193 117.478C145.586 116.811 147.186 117.238 148.079 118.479L148.303 118.794C149.253 120.129 149.004 122.001 147.739 123.038ZM151.884 116.255L151.66 115.94C149.546 112.975 145.612 111.937 142.313 113.494L141.133 114.049C130.042 119.313 117.472 125.262 109.701 127.246C108.209 127.635 106.652 127.894 105.058 128.005C104.978 124.836 103.023 121.889 99.8926 120.703L81.2753 113.605C75.0255 111.232 70.0974 113.271 65.3323 115.254C63.1341 116.162 60.8599 117.108 58.4822 117.59C43.5141 120.536 37.2791 119.813 23.6233 118.238L21.1788 117.96C20.5579 117.886 19.9353 118.09 19.4702 118.516C19.0013 118.924 18.7344 119.517 18.7344 120.147V149.134C18.7344 149.746 18.9882 150.339 19.4406 150.747C19.8875 151.173 20.4915 151.377 21.0994 151.321C38.6936 149.95 56.0546 149.06 74.9983 153.193C76.9983 153.619 79.0479 154.231 81.0331 154.806C85.1625 156.029 89.4253 157.29 93.8939 157.29H94.133C102.232 157.197 110.771 153.101 118.793 148.671C131.891 141.443 146.393 129.822 150.525 126.43C153.566 123.928 154.162 119.462 151.884 116.255Z" fill="#0009FF"/>
                                              </svg>
                                              <h2 className="text-[22px] leading-[30px] font-extrabold text-black mb-4 font-matt text-center uppercase">
                            Nachhaltige Zukunft
                          </h2>
                          <p className="text-[17px] text-black mb-4 font-matt text-center">
                          Erfolg bedeutet für uns, etwas
                          zurückzugeben und gemeinsam
                          Innovation und Wachstum in unserer
                          Region zu fördern.
                          </p>
                        </div>
                      </div>
                      </div>


                    {/* Content Section */}
                      <div className=" hidden lg:block lg:max-w-[1280px] mx-auto mt-12 flex flex-col items-center">
                        {/* Images in one line */}
                        <div className="flex justify-between w-full gap-12 mb-6 lg:max-w-[1280px] lg:px-2">
                          <div className="flex-shrink-0 flex justify-center items-center w-1/3 lg: lg:ml-[-20px] lg:mr-[-20px]">
                          <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M162.875 132.476C162.23 132.475 161.606 132.252 161.106 131.844C160.607 131.436 160.264 130.869 160.135 130.238C159.345 126.392 157.804 122.74 155.599 119.492C155.182 118.877 155.027 118.121 155.168 117.392C155.308 116.663 155.733 116.019 156.348 115.603C156.963 115.186 157.718 115.031 158.447 115.172C159.177 115.312 159.82 115.737 160.237 116.352C162.861 120.206 164.697 124.542 165.637 129.11C165.711 129.47 165.714 129.841 165.644 130.202C165.575 130.564 165.435 130.908 165.233 131.215C165.031 131.522 164.77 131.786 164.465 131.993C164.161 132.199 163.819 132.343 163.459 132.418C163.266 132.457 163.071 132.476 162.875 132.476Z" fill="#0009FF"/>
                                                    <path d="M110.917 111.362C110.313 111.363 109.725 111.168 109.241 110.808C108.757 110.447 108.402 109.939 108.23 109.361C108.057 108.782 108.077 108.163 108.285 107.596C108.493 107.03 108.879 106.545 109.385 106.216C113.329 103.643 117.732 101.853 122.353 100.944C123.081 100.8 123.837 100.951 124.454 101.364C125.071 101.778 125.499 102.419 125.643 103.148C125.787 103.876 125.636 104.632 125.222 105.249C124.809 105.866 124.167 106.294 123.439 106.438C119.519 107.209 115.785 108.726 112.439 110.908C111.987 111.204 111.458 111.362 110.917 111.362Z" fill="#0009FF"/>
                                                    <path d="M96.4111 132.473C96.221 132.473 96.0314 132.453 95.8451 132.415C95.4848 132.341 95.1427 132.197 94.8383 131.991C94.5338 131.784 94.273 131.52 94.0708 131.213C93.8685 130.905 93.7287 130.561 93.6595 130.2C93.5902 129.839 93.5928 129.468 93.6671 129.107C94.6041 124.541 96.436 120.205 99.0571 116.349C99.4788 115.748 100.12 115.336 100.843 115.203C101.566 115.069 102.312 115.226 102.92 115.638C103.529 116.05 103.951 116.685 104.095 117.405C104.24 118.126 104.095 118.875 103.693 119.489C101.486 122.738 99.9429 126.389 99.1511 130.235C99.0217 130.867 98.6785 131.434 98.1793 131.842C97.6801 132.25 97.0556 132.473 96.4111 132.473Z" fill="#0009FF"/>
                                                    <path d="M101.375 157.461C100.917 157.462 100.467 157.35 100.062 157.135C99.6576 156.921 99.3119 156.611 99.0552 156.231C96.4337 152.376 94.6018 148.039 93.6652 143.471C93.5814 143.108 93.5712 142.731 93.6352 142.363C93.6992 141.995 93.8361 141.644 94.0379 141.33C94.2396 141.016 94.5022 140.745 94.81 140.534C95.1179 140.323 95.4649 140.175 95.8306 140.1C96.1963 140.025 96.5733 140.024 96.9395 140.097C97.3056 140.169 97.6536 140.315 97.9628 140.524C98.272 140.733 98.5362 141.002 98.74 141.315C98.9437 141.628 99.0829 141.978 99.1492 142.345C99.9411 146.191 101.485 149.843 103.691 153.091C103.976 153.512 104.141 154.003 104.169 154.51C104.196 155.018 104.085 155.523 103.847 155.973C103.609 156.422 103.253 156.798 102.818 157.06C102.382 157.322 101.884 157.461 101.375 157.461Z" fill="#0009FF"/>
                                                    <path d="M148.367 111.362C147.826 111.362 147.296 111.204 146.843 110.908C143.497 108.726 139.762 107.209 135.843 106.438C135.482 106.366 135.139 106.225 134.833 106.021C134.527 105.817 134.264 105.555 134.06 105.249C133.855 104.944 133.713 104.601 133.64 104.24C133.568 103.88 133.568 103.509 133.639 103.148C133.71 102.787 133.852 102.444 134.056 102.138C134.26 101.832 134.522 101.569 134.828 101.364C135.133 101.16 135.476 101.017 135.837 100.945C136.197 100.873 136.568 100.872 136.929 100.944C141.55 101.853 145.953 103.643 149.897 106.216C150.403 106.545 150.789 107.03 150.997 107.596C151.205 108.163 151.224 108.782 151.052 109.361C150.88 109.939 150.525 110.447 150.041 110.807C149.557 111.168 148.969 111.363 148.365 111.362H148.367Z" fill="#0009FF"/>
                                                    <path d="M157.909 157.461C157.401 157.46 156.903 157.32 156.469 157.058C156.034 156.795 155.679 156.419 155.442 155.97C155.204 155.521 155.094 155.016 155.121 154.509C155.149 154.002 155.314 153.512 155.599 153.091C157.807 149.844 159.351 146.192 160.143 142.345C160.209 141.978 160.348 141.628 160.552 141.315C160.756 141.002 161.02 140.733 161.329 140.524C161.638 140.315 161.986 140.169 162.352 140.097C162.719 140.024 163.096 140.025 163.461 140.1C163.827 140.175 164.174 140.323 164.482 140.534C164.79 140.745 165.052 141.016 165.254 141.33C165.456 141.644 165.593 141.995 165.657 142.363C165.721 142.731 165.711 143.108 165.627 143.471C164.687 148.04 162.852 152.376 160.227 156.231C159.97 156.61 159.625 156.92 159.221 157.135C158.817 157.349 158.366 157.461 157.909 157.461Z" fill="#0009FF"/>
                                                    <path d="M136.402 106.491C135.659 106.491 134.947 106.196 134.422 105.671C133.897 105.146 133.602 104.434 133.602 103.691V95.725H125.698V103.691C125.698 104.434 125.403 105.146 124.878 105.671C124.352 106.196 123.64 106.491 122.898 106.491C122.155 106.491 121.443 106.196 120.918 105.671C120.393 105.146 120.098 104.434 120.098 103.691V92.925C120.098 92.1824 120.393 91.4702 120.918 90.9451C121.443 90.42 122.155 90.125 122.898 90.125H136.402C137.144 90.125 137.856 90.42 138.382 90.9451C138.907 91.4702 139.202 92.1824 139.202 92.925V103.691C139.202 104.434 138.907 105.146 138.382 105.671C137.856 106.196 137.144 106.491 136.402 106.491Z" fill="#0009FF"/>
                                                    <path d="M136.402 106.491C135.659 106.491 134.947 106.196 134.422 105.671C133.897 105.146 133.602 104.434 133.602 103.691V95.725H125.698V103.691C125.698 104.434 125.403 105.146 124.878 105.671C124.352 106.196 123.64 106.491 122.898 106.491C122.155 106.491 121.443 106.196 120.918 105.671C120.393 105.146 120.098 104.434 120.098 103.691V92.925C120.098 92.1824 120.393 91.4702 120.918 90.9451C121.443 90.42 122.155 90.125 122.898 90.125H136.402C137.144 90.125 137.856 90.42 138.382 90.9451C138.907 91.4702 139.202 92.1824 139.202 92.925V103.691C139.202 104.434 138.907 105.146 138.382 105.671C137.856 106.196 137.144 106.491 136.402 106.491Z" fill="#0009FF"/>
                                                    <path d="M136.402 106.491C135.659 106.491 134.947 106.196 134.422 105.671C133.897 105.146 133.602 104.434 133.602 103.691V95.725H125.698V103.691C125.698 104.434 125.403 105.146 124.878 105.671C124.352 106.196 123.64 106.491 122.898 106.491C122.155 106.491 121.443 106.196 120.918 105.671C120.393 105.146 120.098 104.434 120.098 103.691V92.925C120.098 92.1824 120.393 91.4702 120.918 90.9451C121.443 90.42 122.155 90.125 122.898 90.125H136.402C137.144 90.125 137.856 90.42 138.382 90.9451C138.907 91.4702 139.202 92.1824 139.202 92.925V103.691C139.202 104.434 138.907 105.146 138.382 105.671C137.856 106.196 137.144 106.491 136.402 106.491Z" fill="#0009FF"/>
                                                    <path d="M163.241 162.688C162.509 162.688 161.805 162.401 161.281 161.888L155.949 156.66C155.687 156.403 155.477 156.096 155.333 155.758C155.189 155.419 155.113 155.056 155.11 154.688C155.106 154.32 155.175 153.955 155.312 153.614C155.45 153.273 155.653 152.962 155.91 152.699C156.168 152.437 156.475 152.227 156.813 152.083C157.151 151.939 157.515 151.863 157.883 151.86C158.251 151.856 158.616 151.925 158.957 152.062C159.298 152.2 159.609 152.403 159.871 152.66L165.199 157.89C165.597 158.28 165.869 158.778 165.982 159.323C166.094 159.868 166.042 160.434 165.832 160.949C165.622 161.464 165.263 161.904 164.801 162.215C164.339 162.525 163.796 162.69 163.239 162.69L163.241 162.688Z" fill="#0009FF"/>
                                                    <path d="M101.373 120.719C100.64 120.72 99.9357 120.433 99.413 119.919L91.649 112.305C91.3829 112.044 91.1715 111.733 91.0272 111.39C90.8829 111.046 90.8086 110.677 90.8086 110.305C90.8086 109.932 90.8829 109.564 91.0272 109.22C91.1715 108.877 91.3829 108.566 91.649 108.305L101.199 98.9488C101.722 98.4358 102.426 98.1484 103.159 98.1484C103.892 98.1484 104.596 98.4358 105.119 98.9488L112.883 106.563C113.146 106.82 113.355 107.127 113.499 107.466C113.643 107.804 113.719 108.167 113.723 108.535C113.726 108.903 113.658 109.268 113.52 109.609C113.383 109.95 113.18 110.261 112.922 110.524C112.664 110.786 112.358 110.996 112.019 111.14C111.681 111.284 111.317 111.36 110.95 111.364C110.582 111.367 110.217 111.298 109.876 111.161C109.534 111.024 109.224 110.82 108.961 110.563L103.161 104.871L97.619 110.307L103.343 115.923C103.74 116.312 104.013 116.811 104.125 117.356C104.238 117.9 104.186 118.466 103.976 118.981C103.765 119.496 103.406 119.937 102.945 120.247C102.483 120.557 101.939 120.723 101.383 120.723L101.373 120.719Z" fill="#0009FF"/>
                                                    <path d="M96.3988 145.707H85.4328C84.6902 145.707 83.978 145.412 83.4529 144.887C82.9278 144.362 82.6328 143.65 82.6328 142.907V129.671C82.6328 128.928 82.9278 128.216 83.4529 127.691C83.978 127.166 84.6902 126.871 85.4328 126.871H96.3988C97.1414 126.871 97.8536 127.166 98.3787 127.691C98.9038 128.216 99.1988 128.928 99.1988 129.671C99.1988 130.414 98.9038 131.126 98.3787 131.651C97.8536 132.176 97.1414 132.471 96.3988 132.471H88.2328V140.107H96.3988C97.1414 140.107 97.8536 140.402 98.3787 140.927C98.9038 141.452 99.1988 142.164 99.1988 142.907C99.1988 143.65 98.9038 144.362 98.3787 144.887C97.8536 145.412 97.1414 145.707 96.3988 145.707Z" fill="#0009FF"/>
                                                    <path d="M173.852 145.707H162.878C162.136 145.707 161.423 145.412 160.898 144.887C160.373 144.362 160.078 143.65 160.078 142.907C160.078 142.164 160.373 141.452 160.898 140.927C161.423 140.402 162.136 140.107 162.878 140.107H171.052V132.471H162.878C162.136 132.471 161.423 132.176 160.898 131.651C160.373 131.126 160.078 130.414 160.078 129.671C160.078 128.928 160.373 128.216 160.898 127.691C161.423 127.166 162.136 126.871 162.878 126.871H173.852C174.595 126.871 175.307 127.166 175.832 127.691C176.357 128.216 176.652 128.928 176.652 129.671V142.907C176.652 143.65 176.357 144.362 175.832 144.887C175.307 145.412 174.595 145.707 173.852 145.707Z" fill="#0009FF"/>
                                                    <path d="M96.0431 162.686C95.4804 162.687 94.9307 162.517 94.4656 162.2C94.0006 161.884 93.6418 161.434 93.4361 160.91C93.2303 160.386 93.1872 159.813 93.3122 159.264C93.4373 158.715 93.7247 158.217 94.1371 157.834L99.4111 152.66C99.6738 152.403 99.9846 152.2 100.326 152.062C100.667 151.925 101.032 151.856 101.4 151.86C101.768 151.863 102.131 151.939 102.469 152.083C102.808 152.227 103.115 152.437 103.372 152.699C103.63 152.962 103.833 153.273 103.97 153.614C104.108 153.955 104.177 154.32 104.173 154.688C104.169 155.056 104.093 155.419 103.949 155.758C103.805 156.096 103.596 156.403 103.333 156.66L97.9991 161.886C97.4766 162.398 96.7746 162.685 96.0431 162.686Z" fill="#0009FF"/>
                                                    <path d="M157.91 120.719C157.354 120.719 156.81 120.554 156.348 120.244C155.886 119.934 155.527 119.493 155.316 118.978C155.106 118.463 155.053 117.897 155.166 117.352C155.278 116.807 155.551 116.308 155.948 115.919L161.674 110.303L156.132 104.867L150.332 110.559C149.802 111.079 149.087 111.367 148.344 111.36C147.601 111.352 146.891 111.05 146.371 110.52C145.851 109.989 145.563 109.274 145.57 108.531C145.578 107.789 145.88 107.079 146.41 106.559L154.174 98.9449C154.698 98.4319 155.401 98.1445 156.134 98.1445C156.867 98.1445 157.571 98.4319 158.094 98.9449L167.634 108.303C167.9 108.564 168.112 108.875 168.256 109.218C168.4 109.562 168.475 109.93 168.475 110.303C168.475 110.675 168.4 111.044 168.256 111.388C168.112 111.731 167.9 112.042 167.634 112.303L159.87 119.919C159.348 120.433 158.643 120.72 157.91 120.719Z" fill="#0009FF"/>
                                                    <path d="M116.517 157.025C116.108 157.025 115.704 156.935 115.334 156.763C114.964 156.59 114.635 156.338 114.373 156.025C114.11 155.712 113.919 155.346 113.813 154.951C113.707 154.556 113.688 154.143 113.759 153.741L115.911 141.441L106.783 132.717C106.402 132.354 106.131 131.891 106.001 131.381C105.871 130.871 105.887 130.335 106.048 129.834C106.209 129.333 106.507 128.887 106.91 128.548C107.312 128.209 107.802 127.99 108.323 127.917L120.985 126.117L126.637 114.891C126.87 114.428 127.228 114.039 127.669 113.767C128.11 113.495 128.619 113.352 129.137 113.352C129.655 113.352 130.163 113.495 130.605 113.767C131.046 114.039 131.403 114.428 131.637 114.891L137.289 126.117L149.951 127.917C150.472 127.99 150.962 128.209 151.364 128.548C151.766 128.887 152.065 129.333 152.226 129.834C152.387 130.335 152.403 130.871 152.273 131.381C152.143 131.891 151.872 132.354 151.491 132.717L142.365 141.439L144.517 153.743C144.606 154.256 144.551 154.784 144.356 155.267C144.162 155.751 143.837 156.17 143.417 156.479C142.997 156.788 142.5 156.973 141.98 157.014C141.461 157.056 140.94 156.951 140.477 156.713L129.139 150.871L117.799 156.713C117.402 156.917 116.963 157.024 116.517 157.025ZM129.139 144.921C129.585 144.921 130.024 145.027 130.421 145.231L138.021 149.153L136.599 140.931C136.52 140.477 136.554 140.012 136.697 139.574C136.841 139.137 137.09 138.742 137.423 138.425L143.463 132.653L135.063 131.453C134.616 131.389 134.191 131.218 133.824 130.955C133.458 130.692 133.16 130.344 132.957 129.941L129.157 122.375L125.347 129.941C125.144 130.344 124.846 130.692 124.479 130.955C124.113 131.218 123.688 131.389 123.241 131.453L114.841 132.653L120.881 138.425C121.213 138.742 121.462 139.137 121.606 139.574C121.75 140.01 121.784 140.476 121.705 140.929L120.267 149.153L127.867 145.231C128.261 145.029 128.696 144.923 129.139 144.921Z" fill="#0009FF"/>
                                                    <path d="M96.0422 162.69C95.4884 162.69 94.947 162.526 94.4866 162.218C94.0261 161.91 93.6672 161.473 93.4553 160.961C93.2434 160.45 93.188 159.887 93.296 159.344C93.404 158.8 93.6707 158.302 94.0623 157.91C94.4539 157.518 94.9528 157.252 95.4959 157.144C96.0391 157.036 96.6021 157.091 97.1137 157.303C97.6253 157.515 98.0626 157.874 98.3703 158.334C98.678 158.795 98.8422 159.336 98.8422 159.89C98.8422 160.258 98.7697 160.622 98.6289 160.962C98.488 161.302 98.2816 161.61 98.0214 161.87C97.7612 162.13 97.4523 162.337 97.1123 162.477C96.7724 162.618 96.4081 162.69 96.0402 162.69H96.0422Z" fill="#0009FF"/>
                                                    <path d="M136.389 182.452H122.897C122.154 182.452 121.442 182.157 120.917 181.632C120.392 181.107 120.097 180.395 120.097 179.652V171.114C117.029 170.307 114.079 169.105 111.321 167.538L105.121 173.628C104.597 174.142 103.893 174.43 103.16 174.43C102.426 174.43 101.722 174.142 101.199 173.628L91.6607 164.27C91.3946 164.01 91.1833 163.698 91.039 163.355C90.8946 163.012 90.8203 162.643 90.8203 162.27C90.8203 161.898 90.8946 161.529 91.039 161.186C91.1833 160.842 91.3946 160.531 91.6607 160.27L94.0927 157.886C94.6232 157.366 95.3384 157.079 96.081 157.086C96.8236 157.094 97.5329 157.396 98.0527 157.926C98.5725 158.457 98.8604 159.172 98.8529 159.915C98.8454 160.657 98.5432 161.366 98.0127 161.886L97.6127 162.27L103.155 167.706L108.955 162.016C109.41 161.57 110.003 161.292 110.638 161.229C111.272 161.166 111.909 161.321 112.443 161.668C115.788 163.852 119.523 165.37 123.443 166.14C124.078 166.266 124.651 166.609 125.062 167.109C125.474 167.61 125.699 168.238 125.699 168.886V176.852H133.591V168.886C133.591 168.238 133.816 167.61 134.228 167.109C134.64 166.608 135.213 166.266 135.849 166.14C139.769 165.37 143.503 163.852 146.849 161.668C147.383 161.321 148.02 161.166 148.654 161.229C149.288 161.292 149.882 161.57 150.337 162.016L156.137 167.706L161.679 162.272L161.279 161.886C161.016 161.629 160.807 161.322 160.663 160.984C160.518 160.646 160.442 160.282 160.439 159.915C160.435 159.547 160.504 159.182 160.641 158.841C160.778 158.5 160.981 158.189 161.239 157.926C161.496 157.664 161.803 157.454 162.141 157.31C162.479 157.166 162.843 157.09 163.21 157.086C163.578 157.082 163.943 157.151 164.284 157.288C164.625 157.426 164.936 157.629 165.199 157.886L167.631 160.27C167.897 160.531 168.108 160.842 168.252 161.186C168.397 161.529 168.471 161.898 168.471 162.27C168.471 162.643 168.397 163.012 168.252 163.355C168.108 163.698 167.897 164.01 167.631 164.27L158.089 173.628C157.565 174.142 156.861 174.43 156.128 174.43C155.394 174.43 154.69 174.142 154.167 173.628L147.967 167.538C145.208 169.106 142.258 170.309 139.189 171.114V179.652C139.189 180.395 138.894 181.107 138.369 181.632C137.844 182.157 137.131 182.452 136.389 182.452Z" fill="#0009FF"/>
                                                    <path d="M83.1573 87.7776C65.3033 87.7776 50.7773 73.2516 50.7773 55.3976C50.7773 37.5436 65.3033 23.0156 83.1573 23.0156C101.011 23.0156 115.539 37.5416 115.539 55.3996C115.539 73.2576 101.013 87.7776 83.1573 87.7776ZM83.1573 28.6156C68.3913 28.6156 56.3773 40.6296 56.3773 55.3976C56.3773 70.1656 68.3913 82.1776 83.1573 82.1776C97.9233 82.1776 109.939 70.1636 109.939 55.3996C109.939 40.6356 97.9253 28.6156 83.1573 28.6156Z" fill="#0009FF"/>
                                                    <path d="M13.8542 135.131C13.6887 135.131 13.5234 135.117 13.3602 135.089C12.9981 135.025 12.6523 134.89 12.3425 134.692C12.0326 134.494 11.7648 134.236 11.5544 133.935C11.344 133.633 11.195 133.293 11.1161 132.934C11.0371 132.575 11.0297 132.203 11.0942 131.841C13.5876 118.016 20.8488 105.502 31.6146 96.4759C42.3804 87.4502 55.9696 82.4841 70.0182 82.4414H96.2902C106.796 82.4465 117.114 85.2284 126.198 90.5054C126.84 90.8786 127.308 91.4915 127.498 92.2094C127.688 92.9273 127.585 93.6913 127.212 94.3334C126.839 94.9755 126.226 95.4431 125.508 95.6332C124.79 95.8234 124.026 95.7206 123.384 95.3474C115.155 90.5674 105.809 88.0483 96.2922 88.0454H70.0182C57.2734 88.0394 44.9341 92.5248 35.1681 100.714C25.4021 108.902 18.8342 120.271 16.6182 132.821C16.5029 133.47 16.1626 134.057 15.657 134.48C15.1514 134.902 14.5131 135.133 13.8542 135.131Z" fill="#0009FF"/>
                                                    <path d="M85.4328 135.131H13.8508C13.1082 135.131 12.396 134.836 11.8709 134.311C11.3458 133.786 11.0508 133.074 11.0508 132.331C11.0508 131.589 11.3458 130.876 11.8709 130.351C12.396 129.826 13.1082 129.531 13.8508 129.531H85.4328C86.1754 129.531 86.8876 129.826 87.4127 130.351C87.9378 130.876 88.2328 131.589 88.2328 132.331C88.2328 133.074 87.9378 133.786 87.4127 134.311C86.8876 134.836 86.1754 135.131 85.4328 135.131Z" fill="#0009FF"/>
                                                    </svg>
                          </div>
                          <div className="flex-shrink-0 flex justify-center items-center w-1/3 lg:mr-[-10px]">
                          <svg xmlns="http://www.w3.org/2000/svg" width="170" height="170" viewBox="0 0 170 170" fill="none">
                                              <g clip-path="url(#clip0_1292_11573)">
                                                <path d="M84.7033 21.602C86.55 21.602 88.0472 20.1048 88.0472 18.2581V3.34389C88.0472 1.49713 86.55 0 84.7033 0C82.8565 0 81.3594 1.49713 81.3594 3.34389V18.2581C81.3597 20.1048 82.8568 21.602 84.7033 21.602Z" fill="#0009FF"/>
                                                <path d="M166.441 114.878L160.533 108.987C158.432 106.888 155.631 105.732 152.647 105.732C150.739 105.732 148.907 106.207 147.284 107.097L136.152 95.9781L136.694 95.4366C141.21 90.9117 141.209 83.5588 136.694 79.0492C135.081 77.4329 133.068 76.3551 130.873 75.9015C131.175 74.8586 131.334 73.7662 131.334 72.6483C131.334 69.5421 130.128 66.6296 127.944 64.4544C126.33 62.8381 124.317 61.7603 122.123 61.3068C122.425 60.2639 122.584 59.1718 122.584 58.0535C122.584 54.947 121.377 52.0348 119.19 49.8563C117.537 48.2061 115.506 47.1616 113.374 46.717C114.515 42.7834 113.54 38.3578 110.445 35.2579C107.869 32.693 104.374 31.5906 101.006 31.9479L78.9471 27.7726C75.583 27.1344 71.3818 26.7124 68.7298 29.1313C68.5625 29.284 68.3918 29.4597 68.2238 29.6552C64.112 28.1564 59.3161 29.0489 56.0233 32.338C53.8389 34.5198 52.6356 37.4311 52.6356 40.5356C52.6356 41.6538 52.794 42.7459 53.0958 43.7891C50.9038 44.2424 48.8933 45.3188 47.2853 46.9298C45.0965 49.1096 43.8896 52.0175 43.8873 55.1184C43.8863 56.2393 44.0453 57.335 44.3488 58.3809C42.1557 58.8331 40.1439 59.9076 38.5309 61.5186C36.3422 63.705 35.1369 66.6179 35.1369 69.7208C35.1369 72.0975 35.8465 74.3616 37.1613 76.2741C35.5012 76.8369 33.9804 77.7735 32.7071 79.0455C28.1882 83.5588 28.1865 90.912 32.7101 95.4436L33.2503 95.9815L22.1173 107.094C17.9799 105.146 12.8822 105.876 9.46791 109.286L3.55709 115.18C1.45467 117.28 0.297207 120.081 0.296875 123.067C0.296875 126.053 1.45467 128.855 3.55709 130.955L10.9338 138.322C12.2404 139.628 14.3577 139.626 15.6626 138.32C16.9678 137.013 16.9665 134.896 15.66 133.591L8.28322 126.223C7.44584 125.387 6.98465 124.266 6.98465 123.067C6.98465 121.869 7.44584 120.748 8.28123 119.914L14.1924 114.019C15.6693 112.544 17.9297 112.324 19.6463 113.351C19.7672 113.532 19.907 113.705 20.067 113.865C20.3536 114.153 20.6806 114.373 21.0279 114.534L54.926 148.382C55.087 148.733 55.3081 149.063 55.5967 149.352C55.8776 149.633 56.198 149.851 56.538 150.011C57.2548 150.821 57.651 151.857 57.651 152.961C57.651 154.16 57.1898 155.28 56.3524 156.117L50.4472 162.015C48.7024 163.752 45.8642 163.752 44.1247 162.02L36.7479 154.643C35.4421 153.337 33.325 153.337 32.0191 154.643C30.7133 155.949 30.7133 158.066 32.0191 159.372L39.4012 166.754C41.574 168.918 44.4275 170 47.2823 170C50.1378 170 52.9945 168.916 55.17 166.751L61.0788 160.849C63.1813 158.749 64.3391 155.948 64.3391 152.961C64.3391 150.83 63.7464 148.794 62.6444 147.039L75.1739 134.525C75.1872 134.511 75.2005 134.498 75.2141 134.484C76.6488 133.001 80.6441 133.279 84.508 133.547C87.2532 133.738 90.3139 133.95 93.3041 133.605L107.025 147.31C106.136 148.93 105.662 150.76 105.662 152.665C105.662 155.648 106.819 158.448 108.922 160.548L114.831 166.45C116.932 168.549 119.733 169.705 122.717 169.705C125.701 169.705 128.502 168.549 130.603 166.45L166.443 130.653C168.545 128.554 169.703 125.753 169.703 122.766C169.703 119.78 168.545 116.979 166.441 114.878ZM77.702 34.3435L92.2074 37.0891L83.5252 45.768C82.1821 45.1226 80.3413 43.9186 78.3219 41.9869C75.5577 39.3426 73.5805 36.2895 73.4005 34.3853C73.4002 34.3843 73.4002 34.3834 73.4002 34.3824C73.4002 34.382 73.3999 34.3817 73.3999 34.3814C73.3869 34.2446 73.3836 34.1353 73.3853 34.052C73.8225 33.9457 74.984 33.8279 77.702 34.3435ZM60.7491 37.0698C62.4432 35.3775 65.0748 35.1822 66.989 36.4785C68.0738 41.0266 71.9535 45.1488 73.699 46.8189C74.9926 48.0567 79.1433 51.7678 83.3329 52.7878C83.8997 53.6003 84.2081 54.5689 84.2081 55.5909C84.2081 56.9074 83.7018 58.1382 82.7791 59.0599C81.859 59.9816 80.6262 60.489 79.3074 60.489C77.9882 60.489 76.7554 59.9816 75.831 59.0556L75.8307 59.0553L75.829 59.0536L60.7488 44.0006C59.8294 43.0826 59.3231 41.8517 59.3231 40.5356C59.3234 39.2191 59.8298 37.9882 60.7491 37.0698ZM52.0114 51.6616C52.9315 50.7402 54.163 50.2325 55.4798 50.2325C56.7983 50.2325 58.0338 50.7412 58.9598 51.6662L71.1029 63.7851C73.015 65.7002 73.015 68.8167 71.1095 70.7252C70.1845 71.6466 68.9473 72.1539 67.6262 72.1539C66.305 72.1539 65.0679 71.6466 64.1468 70.7292L64.1465 70.7288L54.9343 61.5186C54.92 61.5043 54.9044 61.491 54.8898 61.4764L52.0078 58.5957C51.083 57.672 50.574 56.4389 50.575 55.1234C50.5764 53.8122 51.0837 52.5853 52.0114 51.6616ZM43.2571 66.2504C44.1778 65.331 45.412 64.8246 46.7328 64.8246C48.0426 64.8246 49.2662 65.3237 50.1829 66.2271L59.4233 75.4633C60.3447 76.381 60.8524 77.6105 60.8524 78.9253C60.8524 80.2399 60.3447 81.4694 59.4197 82.3908C58.4993 83.3098 57.2665 83.8162 55.948 83.8162C54.6275 83.8162 53.3907 83.3085 52.4689 82.3908L49.1191 79.0449C49.1184 79.0439 49.1174 79.0432 49.1168 79.0426L43.2574 73.1902C42.3337 72.2675 41.825 71.035 41.825 69.7201C41.825 68.4056 42.3337 67.1728 43.2571 66.2504ZM37.4332 83.777C38.3579 82.8533 39.5938 82.3446 40.9129 82.3446C42.2318 82.3446 43.4673 82.8529 44.3916 83.776L47.7461 87.1265C48.6679 88.0443 49.1752 89.2738 49.1752 90.5886C49.1752 91.9035 48.6675 93.1326 47.7392 94.0577C46.8191 94.9791 45.5863 95.4867 44.2674 95.4867C42.9483 95.4867 41.7155 94.9794 40.7887 94.051L40.3687 93.6327C40.3631 93.627 40.3588 93.6211 40.3535 93.6157C40.3471 93.6098 40.3405 93.6045 40.3342 93.5985L37.4366 90.7121C35.5244 88.796 35.5227 85.6852 37.4332 83.777ZM105.577 121.781C104.272 120.474 102.155 120.473 100.849 121.778L97.8736 124.749C95.0466 127.576 89.9244 127.22 84.9708 126.876C79.5916 126.502 74.0291 126.117 70.4295 129.812L58.1128 142.114L27.3126 111.359L38.2125 100.479C40.0141 101.583 42.093 102.175 44.2681 102.175C47.3756 102.175 50.2895 100.97 52.466 98.7898C54.657 96.6077 55.864 93.6954 55.864 90.5889C55.864 90.5601 55.862 90.5315 55.862 90.5026C55.8909 90.5029 55.9197 90.5046 55.9486 90.5046C59.0518 90.5046 61.9634 89.3036 64.1428 87.1269C66.3339 84.9447 67.5408 82.0322 67.5408 78.926C67.5408 78.8971 67.5388 78.8686 67.5388 78.8397C67.5681 78.8397 67.5973 78.8417 67.6268 78.8417C70.729 78.8417 73.6423 77.642 75.8363 75.4569C78.114 73.1756 79.2406 70.172 79.219 67.1748C79.2489 67.1751 79.2788 67.1768 79.3087 67.1768C82.4162 67.1764 85.3298 65.9721 87.5095 63.7884C89.694 61.6066 90.8972 58.6953 90.8972 55.5909C90.8972 53.4197 90.3069 51.3442 89.2062 49.5462L98.7597 39.9967C99.4716 39.2878 100.35 38.8429 101.27 38.6592C101.369 38.6486 101.467 38.6327 101.565 38.6134C103.041 38.4099 104.591 38.8654 105.72 39.9897C107.632 41.9052 107.632 45.0216 105.727 46.9301L102.817 49.8278C102.808 49.8374 102.798 49.8461 102.788 49.8557L99.4368 53.2012C98.1299 54.5061 98.1286 56.6235 99.4338 57.93C100.739 59.2369 102.856 59.2379 104.163 57.933L107.084 55.0158C107.084 55.0151 107.085 55.0144 107.086 55.0138L107.527 54.5738C109.445 52.674 112.551 52.6779 114.467 54.5908C115.389 55.5085 115.896 56.738 115.896 58.0529C115.896 59.3674 115.389 60.5969 114.46 61.5219L111.533 64.4541C111.533 64.4544 111.533 64.4548 111.532 64.4554L108.181 67.7927C106.873 69.0959 106.869 71.2133 108.172 72.5215C109.475 73.83 111.592 73.834 112.901 72.5311L116.267 69.1786C117.187 68.2569 118.42 67.7495 119.738 67.7495C121.058 67.7495 122.291 68.2568 123.217 69.1852C124.139 70.1033 124.647 71.3328 124.647 72.6476C124.647 73.9621 124.139 75.1917 123.212 76.1147L117.378 81.9508C116.073 83.257 116.073 85.3741 117.379 86.6796C118.032 87.3324 118.887 87.6584 119.743 87.6584C120.599 87.6584 121.455 87.3317 122.108 86.6786L124.967 83.8185C124.983 83.8029 125.001 83.7893 125.017 83.773C125.937 82.8513 127.17 82.3439 128.489 82.3439C129.808 82.3439 131.041 82.8513 131.964 83.7763C133.874 85.6845 133.873 88.7956 131.964 90.7075L129.057 93.6111C129.056 93.6121 129.055 93.6131 129.054 93.6141C129.053 93.6151 129.052 93.6164 129.051 93.6174L124.437 98.2257C123.131 99.5309 123.129 101.648 124.434 102.955C125.087 103.609 125.944 103.936 126.8 103.936C127.655 103.936 128.51 103.61 129.163 102.958L131.42 100.704L142.237 111.508L111.439 142.268L100.404 131.246C101.174 130.751 101.91 130.17 102.601 129.479L105.574 126.509C106.881 125.205 106.883 123.087 105.577 121.781ZM161.717 125.922L125.877 161.718C125.038 162.555 123.916 163.017 122.717 163.017C121.517 163.017 120.395 162.555 119.557 161.718L113.647 155.816C112.81 154.98 112.349 153.861 112.349 152.665C112.349 151.47 112.81 150.351 113.647 149.515L149.487 113.718C150.326 112.881 151.448 112.419 152.647 112.419C153.847 112.419 154.969 112.881 155.81 113.72L161.717 119.611C162.554 120.447 163.015 121.567 163.015 122.766C163.015 123.965 162.554 125.086 161.717 125.922Z" fill="#0009FF"/>
                                                <path d="M40.2994 18.7818C40.9522 19.4332 41.8069 19.7586 42.6615 19.7586C43.5181 19.7586 44.3751 19.4312 45.0282 18.7768C46.3328 17.4696 46.3308 15.3526 45.0236 14.048L32.8387 1.88737C31.5318 0.582816 29.4144 0.584477 28.1099 1.89202C26.8053 3.19922 26.8073 5.31625 28.1145 6.62081L40.2994 18.7818Z" fill="#0009FF"/>
                                                <path d="M126.742 19.7585C127.597 19.7585 128.453 19.4324 129.105 18.7807L141.281 6.61968C142.587 5.3148 142.589 3.19744 141.284 1.89089C139.979 0.584351 137.862 0.583023 136.555 1.88824L124.379 14.0492C123.073 15.3541 123.071 17.4715 124.377 18.778C125.03 19.4318 125.886 19.7585 126.742 19.7585Z" fill="#0009FF"/>
                                                <path d="M20.8577 143.836C19.5631 145.152 19.5811 147.27 20.8982 148.564L20.9079 148.574C21.5576 149.213 22.4013 149.531 23.2447 149.531C24.1103 149.531 24.9759 149.196 25.6317 148.529C26.9262 147.212 26.9033 145.09 25.5865 143.795C24.27 142.501 22.153 142.519 20.8577 143.836Z" fill="#0009FF"/>
                                                <path d="M113.755 116.964C114.263 116.964 114.779 116.848 115.264 116.604C116.913 115.772 117.575 113.761 116.744 112.112C115.912 110.463 113.901 109.801 112.252 110.632L112.234 110.642C110.585 111.473 109.932 113.48 110.763 115.128C111.35 116.293 112.531 116.964 113.755 116.964Z" fill="#0009FF"/>
                                              </g>
                                              <defs>
                                                <clipPath id="clip0_1292_11573">
                                                  <rect width="170" height="170" fill="white"/>
                                                </clipPath>
                                              </defs>
                                            </svg>
                          </div>
                          <div className="flex-shrink-0 flex justify-center items-center w-1/3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="172" height="172" viewBox="0 0 172 172" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M37.0754 88.5652C41.1752 88.5652 44.5058 91.9013 44.5058 95.9973C44.5058 100.093 41.1752 103.429 37.0754 103.429C32.9756 103.429 29.6433 100.093 29.6433 95.9973C29.6433 91.9013 32.9756 88.5652 37.0754 88.5652ZM29.7045 55.2227C29.7045 51.1267 33.0406 47.7905 37.1367 47.7905C41.2364 47.7905 44.5671 51.1267 44.5671 55.2227C44.5671 59.3187 41.2364 62.6548 37.1367 62.6548C33.0406 62.6548 29.7045 59.3187 29.7045 55.2227ZM65.9071 19.0996C70.0031 19.0996 73.3375 22.4357 73.3375 26.5317C73.3375 30.6277 70.0031 33.9638 65.9071 33.9638C61.8073 33.9638 58.4733 30.6277 58.4733 26.5317C58.4729 22.4357 61.8073 19.0996 65.9071 19.0996ZM106.53 19.0996C110.626 19.0996 113.962 22.4357 113.962 26.5317C113.962 30.6277 110.626 33.9638 106.53 33.9638C102.43 33.9638 99.0959 30.6277 99.0959 26.5317C99.0959 22.4357 102.43 19.0996 106.53 19.0996ZM142.641 55.2227C142.641 59.3187 139.309 62.6548 135.209 62.6548C131.113 62.6548 127.779 59.3187 127.779 55.2227C127.779 51.1267 131.113 47.7905 135.209 47.7905C139.309 47.7902 142.641 51.1267 142.641 55.2227ZM142.579 95.9973C142.579 100.093 139.248 103.429 135.148 103.429C131.048 103.429 127.718 100.093 127.718 95.9973C127.718 91.9013 131.048 88.5652 135.148 88.5652C139.248 88.5652 142.579 91.9013 142.579 95.9973ZM25.2525 95.9973C25.2525 102.503 30.5552 107.822 37.0754 107.822C43.5956 107.822 48.8984 102.503 48.8984 95.9973C48.8984 89.4734 43.5956 84.1727 37.0754 84.1727C36.8288 84.1727 36.5863 84.1727 36.3434 84.1912C35.3761 78.5383 35.3761 72.6631 36.3434 67.0102C36.6066 67.0287 36.8697 67.0473 37.1367 67.0473C43.6568 67.0473 48.9596 61.7466 48.9596 55.2227C48.9596 51.6826 47.4044 48.5133 44.9434 46.3447C48.2461 41.7114 52.3645 37.5968 57.0126 34.3161C59.1812 36.7994 62.3632 38.3563 65.9071 38.3563C72.4256 38.3563 77.73 33.0556 77.73 26.5317C77.73 26.2909 77.719 26.0312 77.7042 25.7718C83.3145 24.8451 89.123 24.8451 94.7315 25.8089C94.7168 26.0497 94.7037 26.2909 94.7037 26.5317C94.7037 33.0556 100.01 38.3563 106.53 38.3563C110.04 38.3563 113.201 36.818 115.367 34.39C119.984 37.6704 124.082 41.7664 127.366 46.3815C124.927 48.5501 123.387 51.7008 123.387 55.2223C123.387 61.7463 128.69 67.047 135.21 67.047C135.456 67.047 135.703 67.0284 135.946 67.0098C136.909 72.6813 136.909 78.5379 135.942 84.1909C135.679 84.1723 135.415 84.1723 135.148 84.1723C128.628 84.1723 123.326 89.473 123.326 95.997C123.326 102.502 128.628 107.822 135.148 107.822C141.669 107.822 146.971 102.502 146.971 95.997C146.971 91.2893 144.203 87.2119 140.206 85.3031C141.343 78.9274 141.344 72.3109 140.212 65.9348C144.237 64.0442 147.034 59.9485 147.034 55.2223C147.034 48.6984 141.731 43.3977 135.209 43.3977C133.78 43.3977 132.411 43.657 131.143 44.1204C127.473 38.8937 122.856 34.2789 117.634 30.6091C118.099 29.3301 118.353 27.9589 118.353 26.5317C118.353 20.0263 113.048 14.707 106.53 14.707C101.796 14.707 97.7058 17.5055 95.8189 21.5461C89.499 20.4154 82.9303 20.4154 76.6065 21.5089C74.7125 17.5055 70.6292 14.707 65.9068 14.707C59.3866 14.707 54.0804 20.0263 54.0804 26.5317C54.0804 27.9404 54.327 29.2747 54.7753 30.5166C49.5041 34.205 44.8484 38.8383 41.1546 44.1018C39.8997 43.6385 38.5467 43.3977 37.1363 43.3977C30.6179 43.3977 25.3134 48.6984 25.3134 55.2223C25.3134 59.93 28.0822 64.0074 32.0764 65.898C30.944 72.2737 30.944 78.9088 32.0726 85.2845C28.0475 87.1751 25.2525 91.2525 25.2525 95.9973ZM88.3387 104.449V90.6413V81.5779L95.2242 74.6834C96.0824 73.831 96.0824 72.4409 95.2242 71.5881C94.3679 70.7171 92.9761 70.7171 92.1178 71.5881L88.3387 75.369V68.5671V56.0379C88.3387 54.8333 87.3545 53.8508 86.1422 53.8508C84.93 53.8508 83.9458 54.8329 83.9458 56.0379V63.2661L80.1666 59.4852C79.3083 58.6327 77.9203 58.6327 77.062 59.4852C76.2037 60.3376 76.2037 61.7277 77.062 62.5987L83.9454 69.4749V80.6694V85.3399L80.1662 81.559C79.308 80.7065 77.9199 80.7065 77.0616 81.559C76.2034 82.4114 76.2034 83.8015 77.0616 84.6728L83.9451 91.5491V104.449C76.1163 97.3689 71.5477 86.7303 71.5477 75.165C71.5477 62.5433 76.9763 51.0338 86.1412 44.0464C95.3098 51.0338 100.735 62.5433 100.735 75.165C100.736 86.7303 96.1674 97.3689 88.3387 104.449ZM87.3933 39.5242C98.499 47.2157 105.127 60.5419 105.127 75.1654C105.127 89.7888 98.4987 103.115 87.3933 110.806C87.3933 110.806 87.3896 110.806 87.3878 110.806C87.3008 110.862 87.2138 110.917 87.123 110.954C87.1061 110.973 87.0913 110.973 87.0731 110.992C86.8952 111.066 86.7043 111.121 86.502 111.158C86.4817 111.158 86.4594 111.177 86.437 111.177C86.3424 111.196 86.2423 111.196 86.1422 111.196C86.0421 111.196 85.9458 111.196 85.8495 111.177C85.8254 111.177 85.803 111.158 85.7827 111.158C85.5808 111.121 85.3899 111.066 85.2138 110.992C85.1969 110.973 85.1787 110.973 85.158 110.954C85.071 110.917 84.9819 110.862 84.9004 110.806C84.8986 110.806 84.8949 110.806 84.8911 110.806C73.7854 103.115 67.1579 89.7885 67.1579 75.1654C67.1579 60.5419 73.7857 47.2161 84.8911 39.5242C85.6438 39.0051 86.6389 39.0051 87.3933 39.5242ZM147.739 123.038C139.374 129.896 126.819 139.237 116.674 144.834C109.154 148.967 101.213 152.822 94.09 152.897C90.1832 152.915 86.3448 151.803 82.2746 150.598C80.2154 149.987 78.0878 149.375 75.9323 148.893C65.2253 146.576 55.0628 145.78 45.1102 145.78C37.7132 145.78 30.4293 146.224 23.1269 146.762V122.612C36.8198 124.187 43.6923 124.984 59.3333 121.889C62.1413 121.333 64.6192 120.295 67.0175 119.313C71.3506 117.515 75.0964 115.958 79.7132 117.719L98.3288 124.799C100.199 125.522 101.142 127.616 100.431 129.488C99.6559 131.527 97.3986 132.064 95.5654 131.527C94.6369 131.268 93.573 130.953 92.446 130.6C89.3583 129.655 85.8536 128.599 83.2272 128.154C79.6946 127.561 75.6447 127.95 70.8445 129.377C69.6808 129.711 69.0172 130.934 69.3598 132.101C69.7007 133.269 70.9223 133.936 72.0843 133.584C76.234 132.361 79.6423 132.009 82.5003 132.491C84.845 132.88 88.2031 133.899 91.1667 134.807C92.3122 135.16 93.3927 135.475 94.3583 135.753C95.2107 135.994 96.0615 136.124 96.8974 136.124C99.746 136.124 102.352 134.752 103.822 132.454C106.222 132.398 108.564 132.083 110.793 131.508C118.972 129.396 131.744 123.354 143.01 118.034L144.193 117.478C145.586 116.811 147.186 117.238 148.079 118.479L148.303 118.794C149.253 120.129 149.004 122.001 147.739 123.038ZM151.884 116.255L151.66 115.94C149.546 112.975 145.612 111.937 142.313 113.494L141.133 114.049C130.042 119.313 117.472 125.262 109.701 127.246C108.209 127.635 106.652 127.894 105.058 128.005C104.978 124.836 103.023 121.889 99.8926 120.703L81.2753 113.605C75.0255 111.232 70.0974 113.271 65.3323 115.254C63.1341 116.162 60.8599 117.108 58.4822 117.59C43.5141 120.536 37.2791 119.813 23.6233 118.238L21.1788 117.96C20.5579 117.886 19.9353 118.09 19.4702 118.516C19.0013 118.924 18.7344 119.517 18.7344 120.147V149.134C18.7344 149.746 18.9882 150.339 19.4406 150.747C19.8875 151.173 20.4915 151.377 21.0994 151.321C38.6936 149.95 56.0546 149.06 74.9983 153.193C76.9983 153.619 79.0479 154.231 81.0331 154.806C85.1625 156.029 89.4253 157.29 93.8939 157.29H94.133C102.232 157.197 110.771 153.101 118.793 148.671C131.891 141.443 146.393 129.822 150.525 126.43C153.566 123.928 154.162 119.462 151.884 116.255Z" fill="#0009FF"/>
                                              </svg>
                          </div>
                        </div>

                        {/* Headings in one line */}
                        <div className="flex justify-between w-full gap-12 mb-6 lg:max-w-[1280px] lg:px-2">
                          <h2 className="text-[28px] leading-[37px] font-extrabold text-black mb-4 font-matt text-center uppercase">
                            Förderung von Talenten
                          </h2>
                          <h2 className="text-[28px] leading-[37px] font-extrabold text-black mb-4 font-matt text-center uppercase">
                            Unterstützung lokaler Unternehmen
                          </h2>
                          <h2 className="text-[28px] leading-[37px] font-extrabold text-black mb-4 font-matt text-center uppercase">
                            Nachhaltige Zukunft
                          </h2>
                        </div>

                        {/* Paragraphs in one line */}
                        <div className="flex justify-between w-full gap-12 lg:max-w-[1280px] lg:px-2">
                          <p className="text-[20px] leading-[33px] text-black mb-4 font-matt text-center">
                            Mit der Gründung der eksperts Academy unterstützen
                            wir die nächste Generation von Fachkraeften durch
                            Zugang zu Wissen und Ressourcen.                          </p>
                          <p className="text-[20px] leading-[33px] text-black mb-4 font-matt text-center">
                            Wir helfen kleineren Unternehmen nicht nur mit finanziellen Mitteln, sondern auch durch unsere personellen Ressourcen und die Infrastruktur unserer Firma, um ihre Ideen und Projekte zu realisieren.
                          </p>
                          <p className="text-[20px] leading-[33px] text-black mb-4 font-matt text-center">
                            Erfolg bedeutet für uns, etwas zurückzugeben und
                            gemeinsam Innovation und Wachstum in unserer
                            Region zu fördern.
                          </p>
                        </div>
                      </div>

                <div className="w-full flex justify-center items-center mt-12 bg-white px-8 md:p-4 rounded-[20px] lg:mt-[50px]">
                <div className="flex-shrink-0 flex items-center justify-center lg:ml-[20px] ">
                <svg xmlns="http://www.w3.org/2000/svg" width="228" height="228" viewBox="0 0 228 228" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M206.589 113.998C208.468 113.965 210.335 114.309 212.078 115.01C213.834 115.716 215.428 116.769 216.766 118.107C218.104 119.445 219.158 121.04 219.864 122.795C220.569 124.55 220.913 126.43 220.874 128.322C220.857 129.183 220.528 130.008 219.949 130.645L184.324 169.832C183 171.288 180.747 171.395 179.291 170.072C177.835 168.748 177.728 166.495 179.052 165.039L213.669 126.961C213.588 126.445 213.449 125.94 213.253 125.454C212.906 124.589 212.387 123.804 211.728 123.145C211.069 122.487 210.284 121.968 209.42 121.62C208.556 121.273 207.63 121.103 206.698 121.123L206.625 121.123C202.228 121.123 198.296 123.35 194.382 126.964C191.663 129.476 189.301 132.296 186.915 135.145C185.76 136.524 184.599 137.91 183.388 139.272L166.537 158.225C165.23 159.695 162.978 159.827 161.508 158.52C160.038 157.213 159.905 154.961 161.213 153.491L178.063 134.538C178.063 134.539 178.063 134.538 178.063 134.538C178.994 133.491 180.004 132.288 181.076 131.009C183.606 127.993 186.491 124.554 189.548 121.73C194.017 117.603 199.603 114.011 206.589 113.998Z" fill="#0009FF"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M185.165 114.001C188.618 113.854 192.003 114.999 194.658 117.215C196.168 118.476 196.371 120.722 195.11 122.233C193.85 123.743 191.603 123.946 190.092 122.685C188.788 121.596 187.122 121.038 185.424 121.121C185.366 121.124 185.308 121.126 185.25 121.126C181.773 121.126 178.609 122.488 175.508 124.832C172.362 127.209 169.487 130.437 166.61 133.883C165.348 135.393 163.102 135.595 161.592 134.334C160.081 133.073 159.88 130.826 161.141 129.316C164.035 125.85 167.358 122.06 171.212 119.147C175.092 116.216 179.702 114.023 185.165 114.001Z" fill="#0009FF"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M103.933 153.91C108.752 157.369 114.357 159.569 120.24 160.313H167.438C174.267 160.313 180.34 162.283 184.795 165.413C189.18 168.493 192.375 173.015 192.375 178.125C192.375 178.18 192.374 178.236 192.371 178.291C192.243 181.039 191.094 183.641 189.148 185.586C187.203 187.531 184.602 188.681 181.853 188.809C181.798 188.811 181.743 188.813 181.688 188.813H169.496C164.387 197.298 157.096 204.277 148.366 209.009L148.355 209.015C142.152 212.349 135.177 213.982 128.138 213.748C112.23 213.281 96.5739 209.657 82.0792 203.086C68.327 197.311 54.2987 192.375 39.8288 192.375C29.7542 192.375 23.2322 195.64 19.2634 198.744C17.257 200.313 15.8678 201.87 14.9954 203.006C14.5596 203.573 14.2551 204.033 14.0691 204.332C13.9762 204.481 13.9131 204.59 13.8784 204.652L13.8475 204.707L13.8514 204.7L13.8544 204.694M13.8475 204.707C13.0922 206.159 11.4441 206.91 9.85177 206.526C8.2521 206.14 7.125 204.708 7.125 203.063V160.313C7.125 158.37 8.68098 156.786 10.6231 156.751C15.6566 156.66 20.678 156.222 25.6515 155.442C34.8874 153.905 43.8577 151.062 52.2928 146.998C58.1757 144.049 64.6641 142.509 71.2449 142.5C83.1191 142.491 94.6458 146.514 103.933 153.91M167.509 181.688C167.463 181.687 167.418 181.687 167.372 181.688H131.812V185.25C131.812 181.688 131.814 181.688 131.812 181.688L131.801 181.688L131.786 181.688L131.744 181.688L131.613 181.69C131.507 181.692 131.361 181.697 131.181 181.705C130.821 181.722 130.32 181.755 129.714 181.818C128.511 181.945 126.852 182.199 125.045 182.715C121.551 183.713 116.818 185.899 114.376 190.782C113.496 192.542 114.21 194.682 115.969 195.561C117.729 196.441 119.869 195.728 120.749 193.968C121.87 191.726 124.261 190.349 127.002 189.566C128.312 189.192 129.548 189 130.46 188.904C130.912 188.857 131.273 188.834 131.512 188.823C131.631 188.817 131.718 188.815 131.77 188.813L131.82 188.813L160.944 188.813C156.73 194.556 151.284 199.321 144.976 202.742C139.881 205.48 134.151 206.82 128.369 206.627L128.354 206.627C113.372 206.187 98.6264 202.771 84.9773 196.577C84.9467 196.563 84.9158 196.549 84.8848 196.536C71.0067 190.706 55.8376 185.25 39.8288 185.25C28.0652 185.25 20.0166 189.11 14.8743 193.131C14.661 193.298 14.4529 193.465 14.25 193.632V163.759C18.4434 163.557 22.6237 163.13 26.7727 162.478L26.8042 162.473C36.7225 160.824 46.3553 157.77 55.4121 153.404L55.4636 153.379C60.3637 150.918 65.7696 149.633 71.2528 149.625M167.509 181.688H181.591C182.541 181.626 183.436 181.222 184.11 180.548C184.781 179.877 185.186 178.986 185.249 178.041C185.213 176.037 183.876 173.475 180.699 171.243C177.548 169.029 172.934 167.438 167.438 167.438H120.021C119.878 167.438 119.736 167.429 119.595 167.412C112.411 166.547 105.564 163.872 99.6964 159.639C99.6489 159.605 99.6023 159.57 99.5565 159.533C91.5218 153.112 81.5381 149.617 71.2528 149.625" fill="#0009FF"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M67.6875 99.75V146.062H60.5625V99.75H67.6875Z" fill="#0009FF"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M160.312 163.875V99.75H167.438V163.875H160.312Z" fill="#0009FF"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M64.125 81.9375C63.1802 81.9375 62.274 82.3128 61.6059 82.9809C60.9378 83.649 60.5625 84.5552 60.5625 85.5V96.1875H103.312C105.28 96.1875 106.875 97.7825 106.875 99.75C106.875 101.718 105.28 103.312 103.312 103.312H57C55.0325 103.312 53.4375 101.718 53.4375 99.75V85.5C53.4375 82.6655 54.5635 79.9471 56.5678 77.9428C58.5721 75.9385 61.2905 74.8125 64.125 74.8125H163.875C166.709 74.8125 169.428 75.9385 171.432 77.9428C173.437 79.9471 174.562 82.6655 174.562 85.5V99.75C174.562 101.718 172.968 103.312 171 103.312H124.688C122.72 103.312 121.125 101.718 121.125 99.75C121.125 97.7825 122.72 96.1875 124.688 96.1875H167.438V85.5C167.438 84.5552 167.062 83.649 166.394 82.9809C165.726 82.3128 164.82 81.9375 163.875 81.9375H64.125Z" fill="#0009FF"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M93.125 42.7383C90.1548 42.7383 87.3062 43.9182 85.206 46.0185C83.1057 48.1187 81.9258 50.9673 81.9258 53.9375C81.9258 56.9077 83.1057 59.7563 85.206 61.8566C86.0769 62.7275 88.1276 63.8829 91.3077 65.1219C94.3394 66.3029 97.9313 67.3882 101.423 68.3159C104.35 69.0933 107.158 69.7476 109.433 70.245C108.935 67.9705 108.281 65.1621 107.503 62.2355C106.576 58.7438 105.49 55.1519 104.309 52.1202C103.07 48.9401 101.915 46.8894 101.044 46.0185C98.9438 43.9182 96.0952 42.7383 93.125 42.7383ZM114.001 74.8138C117.506 74.1735 117.506 74.1731 117.506 74.1726L117.501 74.15L117.49 74.09L117.448 73.8645C117.411 73.6688 117.357 73.3838 117.286 73.0208C117.144 72.2949 116.935 71.2558 116.667 69.9924C116.131 67.4693 115.353 64.0346 114.389 60.4061C113.429 56.7906 112.265 52.9146 110.948 49.5338C109.689 46.3015 108.097 42.995 106.082 40.9803C102.646 37.5439 97.9849 35.6133 93.125 35.6133C88.2651 35.6133 83.6043 37.5439 80.1678 40.9803C76.7314 44.4168 74.8008 49.0776 74.8008 53.9375C74.8008 58.7974 76.7314 63.4582 80.1678 66.8947C82.1825 68.9094 85.489 70.5016 88.7213 71.7608C92.1021 73.0779 95.9781 74.2415 99.5936 75.202C103.222 76.166 106.657 76.9434 109.18 77.4792C110.443 77.7475 111.482 77.9561 112.208 78.0982C112.571 78.1692 112.856 78.2236 113.052 78.2606L113.277 78.3028L113.337 78.3139L113.359 78.3178C113.359 78.3179 113.361 78.3183 114.001 74.8138ZM114.001 74.8138L113.359 78.3178C114.51 78.5281 115.693 78.1602 116.52 77.3328C117.348 76.5055 117.716 75.3236 117.506 74.1726L114.001 74.8138Z" fill="#0009FF"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M121.919 40.9803C125.355 37.5439 130.016 35.6133 134.876 35.6133C139.736 35.6133 144.397 37.5439 147.833 40.9803C151.27 44.4168 153.2 49.0776 153.2 53.9375C153.2 58.7974 151.27 63.4583 147.833 66.8947C145.819 68.9094 142.512 70.5016 139.28 71.7608C135.899 73.0779 132.023 74.2415 128.408 75.202C124.779 76.166 121.344 76.9434 118.821 77.4792C117.558 77.7475 116.519 77.9561 115.793 78.0982C115.43 78.1692 115.145 78.2236 114.949 78.2606L114.724 78.3028L114.664 78.3139L114.643 78.3178C114.642 78.3179 114.64 78.3183 114 74.8138C110.495 74.1735 110.495 74.1731 110.496 74.1726L110.5 74.15L110.511 74.09L110.553 73.8645C110.59 73.6688 110.644 73.3838 110.716 73.0208C110.858 72.2949 111.066 71.2558 111.334 69.9924C111.87 67.4693 112.648 64.0346 113.612 60.4061C114.572 56.7906 115.736 52.9146 117.053 49.5338C118.312 46.3015 119.904 42.995 121.919 40.9803ZM114 74.8138L110.496 74.1726C110.285 75.3236 110.653 76.5055 111.481 77.3328C112.308 78.1602 113.492 78.5281 114.643 78.3178L114 74.8138ZM118.569 70.245C120.843 69.7476 123.652 69.0933 126.578 68.3159C130.07 67.3882 133.662 66.3029 136.693 65.1219C139.874 63.8829 141.924 62.7275 142.795 61.8566C144.895 59.7563 146.075 56.9077 146.075 53.9375C146.075 50.9673 144.895 48.1187 142.795 46.0185C140.695 43.9182 137.846 42.7383 134.876 42.7383C131.906 42.7383 129.057 43.9182 126.957 46.0185C126.086 46.8894 124.931 48.9401 123.692 52.1202C122.511 55.1519 121.425 58.7438 120.498 62.2355C119.72 65.1621 119.066 67.9705 118.569 70.245Z" fill="#0009FF"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M99.75 156.75V78.375H106.875V156.75H99.75Z" fill="#0009FF"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M121.125 163.875V78.375H128.25V163.875H121.125Z" fill="#0009FF"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M114 14.25C115.968 14.25 117.562 15.845 117.562 17.8125V21.375C117.562 23.3425 115.968 24.9375 114 24.9375C112.032 24.9375 110.438 23.3425 110.438 21.375V17.8125C110.438 15.845 112.032 14.25 114 14.25Z" fill="#0009FF"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M50.9184 36.6684C52.3097 35.2772 54.5653 35.2772 55.9566 36.6684L59.5191 40.2309C60.9103 41.6222 60.9103 43.8778 59.5191 45.2691C58.1278 46.6603 55.8722 46.6603 54.4809 45.2691L50.9184 41.7066C49.5272 40.3153 49.5272 38.0597 50.9184 36.6684Z" fill="#0009FF"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M28.5 92.625C28.5 90.6575 30.095 89.0625 32.0625 89.0625H35.625C37.5925 89.0625 39.1875 90.6575 39.1875 92.625C39.1875 94.5925 37.5925 96.1875 35.625 96.1875H32.0625C30.095 96.1875 28.5 94.5925 28.5 92.625Z" fill="#0009FF"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M177.082 36.6684C178.473 38.0597 178.473 40.3153 177.082 41.7066L173.519 45.2691C172.128 46.6603 169.872 46.6603 168.481 45.2691C167.09 43.8778 167.09 41.6222 168.481 40.2309L172.043 36.6684C173.435 35.2772 175.69 35.2772 177.082 36.6684Z" fill="#0009FF"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M188.812 92.625C188.812 90.6575 190.407 89.0625 192.375 89.0625H195.938C197.905 89.0625 199.5 90.6575 199.5 92.625C199.5 94.5925 197.905 96.1875 195.938 96.1875H192.375C190.407 96.1875 188.812 94.5925 188.812 92.625Z" fill="#0009FF"/>
                  </svg>
                  </div>
                  <div className="flex-1 text-left md:ml-[40px]">
                    <h3 className="text-lg md:text-[28px] md:leading-[37px] font-extrabold text-black mb-4 font-matt">
                      PRO-BONO-PROJEKT:
                    </h3>
                    <p className="text-sm md:text-[20px] md:leading-[33px] text-black mb-4 font-matt">
                          Bist du ein Verein, eine NGO oder eine gemeinnützige Organisation?
                          Möchtest du von unserem Pro-Bono-Implementierungsprojekt profitieren? <br></br> <br></br>
                          Dann melde dich – wir spenden gerne in Form eines grossartigen Projekts!
                          Kontaktieren Sie uns via <a className="font-bold" href="mailto:info@the-eksperts.com">info@the-eksperts.com</a>
          
                          </p>     
                    </div>
                </div>

              </section>

                    <section className=" lg:mt-[200px] lg:mb-[200px] px-6">
                        <div className="lg:max-w-[1280px] mx-auto text-center">
                          {/* Buttons */}
                          <h2 className="font-matt text-[42px] leading-[45px] font-extrabold uppercase mb-2"> Folgen Sie uns für mehr Einblicke! </h2>
                          <p className="font-matt text-[20px] leading-[28px] mb-10"> Unsere Reise – digital und direkt zu Ihnen.</p>
`
                          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                            {/* Instagram Button */}
                            <a
                              href="https://www.instagram.com/theeksperts/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center lg:w-[480px] lg:h-[100px] md:w-auto bg-[#0009FF] text-white lg:text-[64px] text-[24px] pr-2 rounded-lg text-lg font-normal transition-transform transform hover:scale-105"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="89" height="90" viewBox="0 0 89 90" fill="none" className="mr-2 lg:p-2 p-4">
                                <g clip-path="url(#clip0_1068_9931)">
                                <path d="M88.9128 26.7561C88.7044 22.0272 87.9396 18.7761 86.8442 15.959C85.7141 12.9687 83.9754 10.2915 81.6976 8.06591C79.472 5.80571 76.7771 4.04943 73.8215 2.93698C70.9881 1.84151 67.754 1.07679 63.0251 0.868295C58.2608 0.642138 56.7484 0.589844 44.6649 0.589844C32.5815 0.589844 31.0691 0.642138 26.3225 0.850637C21.5936 1.05914 18.3425 1.82454 15.5261 2.91932C12.5351 4.04943 9.85789 5.78805 7.63232 8.06591C5.37211 10.2915 3.61651 12.9863 2.50339 15.942C1.40792 18.7761 0.6432 22.0095 0.434701 26.7384C0.208544 31.5027 0.15625 33.0151 0.15625 45.0985C0.15625 57.1819 0.208544 58.6944 0.417043 63.441C0.625542 68.1699 1.39094 71.421 2.48641 74.2381C3.61651 77.2284 5.37211 79.9056 7.63232 82.1312C9.85789 84.3914 12.5528 86.1476 15.5084 87.2601C18.3425 88.3556 21.5759 89.1203 26.3055 89.3288C31.0514 89.5379 32.5646 89.5896 44.648 89.5896C56.7314 89.5896 58.2439 89.5379 62.9904 89.3288C67.7193 89.1203 70.9704 88.3556 73.7868 87.2601C79.7681 84.9476 84.497 80.2187 86.8095 74.2381C87.9043 71.404 88.6697 68.1699 88.8782 63.441C89.0867 58.6944 89.139 57.1819 89.139 45.0985C89.139 33.0151 89.1214 31.5027 88.9128 26.7561ZM80.8982 63.0933C80.7067 67.4398 79.9766 69.7869 79.3681 71.3517C77.8726 75.229 74.7954 78.3062 70.9181 79.8017C69.3534 80.4102 66.9893 81.1403 62.6597 81.3311C57.9654 81.5403 56.5575 81.5919 44.6826 81.5919C32.8077 81.5919 31.3822 81.5403 26.7049 81.3311C22.3583 81.1403 20.0112 80.4102 18.4464 79.8017C16.5169 79.0886 14.7607 77.9585 13.3351 76.4806C11.8573 75.0374 10.7272 73.2988 10.0141 71.3694C9.40558 69.8046 8.67549 67.4398 8.48465 63.1109C8.27547 58.4166 8.22386 57.0081 8.22386 45.1332C8.22386 33.2583 8.27547 31.8327 8.48465 27.1561C8.67549 22.8096 9.40558 20.4624 10.0141 18.8977C10.7272 16.9675 11.8573 15.2119 13.3528 13.7857C14.7953 12.3079 16.5339 11.1778 18.4641 10.4653C20.0288 9.85683 22.3936 9.12674 26.7225 8.93522C31.4168 8.72672 32.8253 8.67443 44.6996 8.67443C56.5922 8.67443 58 8.72672 62.6773 8.93522C67.0239 9.12674 69.371 9.85683 70.9358 10.4653C72.8652 11.1778 74.6215 12.3079 76.0471 13.7857C77.5249 15.2289 78.655 16.9675 79.3681 18.8977C79.9766 20.4624 80.7067 22.8265 80.8982 27.1561C81.1067 31.8504 81.159 33.2583 81.159 45.1332C81.159 57.0081 81.1067 58.399 80.8982 63.0933Z" fill="#FDFEFF"/>
                                <path d="M44.6636 22.2344C32.0417 22.2344 21.8008 32.4746 21.8008 45.0972C21.8008 57.7199 32.0417 67.9601 44.6636 67.9601C57.2863 67.9601 67.5265 57.7199 67.5265 45.0972C67.5265 32.4746 57.2863 22.2344 44.6636 22.2344ZM44.6636 59.9278C36.4752 59.9278 29.8331 53.2864 29.8331 45.0972C29.8331 36.9081 36.4752 30.2667 44.6636 30.2667C52.8528 30.2667 59.4942 36.9081 59.4942 45.0972C59.4942 53.2864 52.8528 59.9278 44.6636 59.9278Z" fill="#FDFEFF"/>
                                <path d="M73.7693 21.3335C73.7693 24.281 71.3794 26.671 68.4312 26.671C65.4837 26.671 63.0938 24.281 63.0938 21.3335C63.0938 18.3853 65.4837 15.9961 68.4312 15.9961C71.3794 15.9961 73.7693 18.3853 73.7693 21.3335Z" fill="#FDFEFF"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_1068_9931">
                                <rect width="89" height="89" fill="white" transform="translate(0 0.589844)"/>
                                </clipPath>
                                </defs>
                              </svg>
                              theeksperts
                            </a>

                            {/* LinkedIn Button */}
                            <a
                              href="https://www.linkedin.com/company/the-eksperts/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center lg:w-[480px] lg:h-[100px] w-auto bg-[#0009FF] text-white lg:text-[64px] text-[24px] pr-2 rounded-lg shadow-lg text-lg font-normal transition-transform transform hover:scale-105"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="87" height="88" viewBox="0 0 87 88" fill="none" className="mr-2 lg:p-2 p-4">
                                <g clip-path="url(#clip0_1068_9947)">
                                <path d="M27.1888 72.4668H15.2943V34.0645H27.1888V72.4668ZM28.3756 21.8294C28.3756 17.9843 25.256 14.8633 21.4128 14.8633C17.5551 14.8633 14.4434 17.9843 14.4434 21.8294C14.4434 25.6759 17.5551 28.7969 21.4128 28.7969C25.256 28.7969 28.3756 25.6759 28.3756 21.8294ZM71.707 51.3394C71.707 41.0306 69.5292 33.3848 57.4867 33.3848C51.7001 33.3848 47.8158 36.2787 46.23 39.2882H46.2188V34.0645H34.6641V72.4668H46.2188V53.3997C46.2188 48.4063 47.4898 43.5688 53.6794 43.5688C59.7846 43.5688 59.9824 49.2791 59.9824 53.717V72.4668H71.707V51.3394ZM87 77.3945V10.7852C87 5.16313 82.4267 0.589844 76.8047 0.589844H10.1953C4.57329 0.589844 0 5.16313 0 10.7852V77.3945C0 83.0166 4.57329 87.5898 10.1953 87.5898H76.8047C82.4267 87.5898 87 83.0166 87 77.3945ZM76.8047 7.38672C78.6785 7.38672 80.2031 8.91137 80.2031 10.7852V77.3945C80.2031 79.2683 78.6785 80.793 76.8047 80.793H10.1953C8.32153 80.793 6.79688 79.2683 6.79688 77.3945V10.7852C6.79688 8.91137 8.32153 7.38672 10.1953 7.38672H76.8047Z" fill="white"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_1068_9947">
                                <rect width="87" height="87" fill="white" transform="translate(0 0.589844)"/>
                                </clipPath>
                                </defs>
                              </svg>
                              theeksperts
                            </a>
                          </div>
                        </div>
                      </section>


    </div>
  );
};

export default Agency;
