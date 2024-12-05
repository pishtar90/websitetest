import React from "react";

const DisclaimerHeroSection = () => {
    return (
      <div className="relative bg-[#FAFAFA] text-black py-16">
        <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
          <h1 className="text-5xl font-bold tracking-tight mb-4 uppercase">
            Disclaimer
          </h1>
         
        </div>
  
       
      </div>
    );
  };

const Disclaimer = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-6 py-12">
      <DisclaimerHeroSection />
      <h1 className="text-3xl font-bold mt-8 mb-8">Disclaimer</h1>

      {/* General Disclaimer */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mt-8 mb-8">Allgemeiner Haftungsausschluss</h2>
        <p>
          Die Inhalte dieser Website wurden mit grösstmöglicher Sorgfalt erstellt.
          Dennoch übernimmt die the eksperts gmbh keine Gewähr für die Richtigkeit,
          Vollständigkeit und Aktualität der bereitgestellten Informationen. Die Nutzung
          der Inhalte erfolgt auf eigene Gefahr.
        </p>
      </section>

      {/* Contact Forms */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Kontaktformulare</h2>
        <p>
          Die Nutzung von Kontaktformularen erfolgt freiwillig. Die Benutzer sind dafür
          verantwortlich, korrekte und vollständige Informationen anzugeben. Die
          übermittelten Daten werden vertraulich behandelt und ausschliesslich für den
          vorgesehenen Zweck verwendet.
        </p>
      </section>

      {/* Intellectual Property */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Urheberrechte</h2>
        <p>
          Die Inhalte dieser Website, einschliesslich Texte, Bilder, Grafiken und Logos,
          sind urheberrechtlich geschützt. Jede Verwendung, insbesondere Vervielfältigung,
          Verbreitung oder öffentliche Wiedergabe, bedarf der vorherigen schriftlichen
          Zustimmung der the eksperts gmbh.
        </p>
      </section>

      {/* Applicable Law */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Anwendbares Recht</h2>
        <p>
          Für sämtliche Rechtsbeziehungen, die durch die Nutzung dieser Website entstehen,
          gilt Schweizer Recht.
        </p>
      </section>

      {/* Jurisdiction */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Gerichtsstand</h2>
        <p>
          Ausschliesslicher Gerichtsstand ist St. Gallen, 9000, Schweiz.
        </p>
      </section>

      {/* Changes to Terms */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Änderungen der Nutzungsbedingungen</h2>
        <p>
          Die the eksperts gmbh behält sich das Recht vor, diesen Disclaimer jederzeit
          ohne vorherige Ankündigung zu ändern. Es gilt die jeweils aktuelle Version, die
          auf dieser Website veröffentlicht wird.
        </p>
      </section>
    </div>
  );
};

export default Disclaimer;
