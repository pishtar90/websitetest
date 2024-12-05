import React from "react";

const Hero = ({ title, subtitle }) => {
    return (
        <div className="relative bg-[#FAFAFA] text-black py-16">
            <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
                <h1 className="text-5xl font-bold tracking-tight mb-4 uppercase">
                    {title}
                </h1>
               
            </div>
        </div>
    );
};

const Impressum = () => {
    return (
        <div className="max-w-[1280px] mx-auto px-6 py-12">
            <Hero
                title="Impressum"
                subtitle="Transparenz, Verantwortung und Vertrauen durch die eksperts"
            />
            <h2 className="text-3xl font-bold mt-8 mb-8">Rechtliche Informationen</h2>

            {/* Business Address */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Geschäftsadresse</h2>
                <address className="not-italic">
                    the eksperts gmbh <br />
                    Sonnengartenstrasse 6 <br />
                    9000 St. Gallen <br />
                    Schweiz
                </address>
            </section>

            {/* Contact Information */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Kontaktinformationen</h2>
                <p>
                    <strong>E-Mail:</strong>{" "}
                    <a
                        href="mailto:info@the-eksperts.com"
                        className="text-blue-600 hover:underline"
                    >
                        info@the-eksperts.com
                    </a>
                </p>
                <p>
                    <strong>Telefon:</strong> +41 79 921 30 00
                </p>
                <p>
                    <strong>Website:</strong>{" "}
                    <a
                        href="https://the-eksperts.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                    >
                        https://the-eksperts.com/
                    </a>
                </p>
            </section>

            {/* Official Incorporation Information */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Offizielle Firmeninformationen</h2>
                <p>
                    <strong>Vertretungsberechtigte Person:</strong> Geschäftsführer: Fisnik Salihu <br />
                    <strong>UID:</strong> CHE-488.301.08 <br />
                    <strong>MWST-Nr.:</strong> CHE-488.301.08 MWST <br />
                    <strong>Gerichtsstand:</strong> CH-9000 St. Gallen SG
                </p>
            </section>
        </div>
    );
};

export default Impressum;
