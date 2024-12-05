import React from "react";

const DatenschutzHeroSection = () => {
    return (
      <div className="relative bg-[#FAFAFA] text-black py-16">
        <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
          <h1 className="text-5xl font-bold tracking-tight mb-4 uppercase">
            Datenschutz
          </h1>
        </div>
      </div>
    );
};

const Datenschutz = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-6 py-12">
      <DatenschutzHeroSection />

      <h1 className="text-3xl font-bold mt-8 mb-8">Datenschutzerklärung</h1>

      {/* Allgemeines */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mt-8 mb-8">Allgemeines</h2>
        <p>
          Die the eksperts gmbh legt grossen Wert auf den Schutz Ihrer persönlichen
          Daten. Diese Datenschutzerklärung informiert Sie darüber, wie wir
          personenbezogene Daten erheben, verarbeiten und schützen.
        </p>
      </section>

      {/* Erhebung und Verarbeitung von Personendaten */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Erhebung und Verarbeitung von Personendaten</h2>
        <p>
          Wir erheben und verarbeiten personenbezogene Daten ausschließlich im
          Rahmen der gesetzlichen Bestimmungen der Schweiz. Dazu gehören Daten,
          die Sie uns freiwillig übermitteln (z. B. über Kontaktformulare), sowie
          technische Daten, die während Ihres Besuchs auf unserer Website entstehen
          (z. B. IP-Adresse).
        </p>
      </section>

      {/* Google Analytics and Google Maps */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Hinweis zu Google Analytics und Google Maps</h2>
        <p>
          Diese Website nutzt Google Analytics, einen Webanalysedienst der Google
          Inc., um die Nutzung der Website zu analysieren und zu verbessern. Google
          Analytics verwendet Cookies, die auf Ihrem Gerät gespeichert werden. Die
          dadurch erzeugten Informationen können an einen Server von Google in den
          USA übertragen werden.
        </p>
        <p>
          Zusätzlich nutzt diese Website Google Maps, um Kartenmaterial darzustellen.
          Bitte beachten Sie die Datenschutzrichtlinien von Google unter{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            https://policies.google.com/privacy
          </a>
          .
        </p>
      </section>

      {/* Your Rights */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Ihre Rechte</h2>
        <p>
          Sie haben das Recht, jederzeit Auskunft über Ihre von uns gespeicherten
          personenbezogenen Daten zu verlangen. Darüber hinaus können Sie die
          Berichtigung oder Löschung Ihrer Daten beantragen, sofern keine gesetzliche
          Aufbewahrungspflicht besteht.
        </p>
      </section>

      {/* Data Security */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Datensicherheit</h2>
        <p>
          Die the eksperts gmbh setzt technische und organisatorische
          Sicherheitsmaßnahmen ein, um Ihre Daten vor Verlust, Missbrauch und
          unberechtigtem Zugriff zu schützen.
        </p>
      </section>

      {/* Retention Period */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Speicherdauer</h2>
        <p>
          Personenbezogene Daten werden nur so lange gespeichert, wie es für die
          Erfüllung der genannten Zwecke erforderlich ist oder gesetzlich vorgeschrieben
          wird.
        </p>
      </section>

      {/* Changes to Privacy Policy */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Änderung dieser Datenschutzerklärung</h2>
        <p>
          Die the eksperts gmbh behält sich das Recht vor, diese
          Datenschutzerklärung jederzeit zu ändern. Änderungen werden auf dieser Seite
          veröffentlicht.
        </p>
      </section>
      
    </div>
  );
};

export default Datenschutz;
