import Image from "next/image";

export const metadata = {
  title: "PrimeLogic AI",
  description:
    "KI-gestützte Chat- und Telefonassistenten für Unternehmen. Automatisieren Sie Kundenanfragen und Terminbuchungen.",
};

export default function HomePage() {
  const LOGO_SRC = "/logo.png";
  const FORM_URL = "https://tally.so/r/pbdPx1";

  return (
    <div className="min-h-screen bg-[#080808] text-white">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-[#080808]/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-white/5 border border-white/10">
              <Image
                src={LOGO_SRC}
                alt="PrimeLogic AI"
                fill
                className="object-contain p-1"
                priority
              />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-wide">
                PrimeLogic AI
              </div>
              <div className="text-[11px] text-white/45">
                Intelligente Prozessautomatisierung
              </div>
            </div>
          </a>

          <a
            href={FORM_URL}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#D4AF37] text-black text-sm font-medium hover:bg-[#E7C75A] transition"
          >
            Angebot anfordern
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[-260px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-[#D4AF37]/10 blur-3xl" />
            <div className="absolute top-[240px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-white/5 blur-3xl" />
          </div>

          <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-28 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4AF37]/30 bg-white/5 backdrop-blur text-xs text-[#D4AF37]">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
              KI-Chatbots & Telefon-Assistenten für Unternehmen
            </div>

            <h1 className="mt-8 text-5xl md:text-7xl font-light tracking-tight leading-[1.05]">
              Mehr Anfragen.
              <br />
              Weniger Aufwand.
            </h1>

            <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-white/60 leading-relaxed">
              PrimeLogic AI automatisiert Kundenanfragen, Terminbuchungen und
              telefonische Erstkontakte – professionell, skalierbar und ohne
              zusätzlichen Personalaufwand.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={FORM_URL}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#D4AF37] text-black text-sm md:text-base font-medium hover:bg-[#E7C75A] transition shadow-[0_0_40px_rgba(212,175,55,0.25)]"
              >
                Jetzt starten
              </a>

              <a
                href="#pakete"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/15 bg-white/5 text-white text-sm md:text-base hover:bg-white/10 transition"
              >
                Pakete ansehen
              </a>
            </div>

            <div className="mt-6 text-sm text-white/40">
              Einrichtung ab 4.999 € · Start in wenigen Minuten
            </div>
          </div>
        </section>

        {/* Demo */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center max-w-3xl mx-auto">
            <div className="text-sm text-[#D4AF37]">
              Demo für lokale Unternehmen
            </div>
            <h2 className="mt-3 text-3xl md:text-5xl font-light tracking-tight">
              Ihr KI-Assistent übernimmt Kundenanfragen automatisch.
            </h2>
            <p className="mt-5 text-white/60 text-lg">
              Egal ob Praxis, Handwerk, Friseur, Studio oder Dienstleister:
              Der Assistent beantwortet Fragen, sammelt Anfragen und leitet
              Kunden zum nächsten Schritt.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 shadow-2xl">
              <div className="text-sm text-white/45 mb-5">Website-Chatbot</div>

              <div className="space-y-4">
                <div className="max-w-sm rounded-2xl bg-white/10 px-4 py-3 text-sm text-white/80">
                  Hallo 👋 Wie kann ich Ihnen helfen?
                </div>

                <div className="ml-auto max-w-sm rounded-2xl bg-[#D4AF37] px-4 py-3 text-sm text-black">
                  Ich möchte einen Termin / ein Angebot.
                </div>

                <div className="max-w-sm rounded-2xl bg-white/10 px-4 py-3 text-sm text-white/80">
                  Gerne. Worum geht es genau?
                </div>

                <div className="ml-auto max-w-sm rounded-2xl bg-[#D4AF37] px-4 py-3 text-sm text-black">
                  Ich habe eine Frage zu Leistungen und Preisen.
                </div>

                <div className="max-w-sm rounded-2xl bg-white/10 px-4 py-3 text-sm text-white/80">
                  Ich helfe Ihnen weiter und nehme bei Interesse direkt Ihre
                  Anfrage auf.
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-[#D4AF37]/25 bg-[#111111] p-6 shadow-[0_0_60px_rgba(212,175,55,0.08)]">
              <div className="text-sm text-[#D4AF37] mb-5">
                Was automatisiert wird
              </div>

              <div className="space-y-4 text-sm">
                <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                  ✅ Häufige Fragen zu Leistungen, Preisen und Öffnungszeiten
                </div>
                <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                  ✅ Erfassung von Name, E-Mail, Telefonnummer und Anliegen
                </div>
                <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                  ✅ Weiterleitung zu Formular, Terminbuchung oder Angebot
                </div>
                <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                  ✅ Entlastung von Telefon, E-Mail und Empfang
                </div>
              </div>

              <a
                href={FORM_URL}
                className="mt-8 inline-flex w-full items-center justify-center px-5 py-3 rounded-xl bg-[#D4AF37] text-black text-sm font-medium hover:bg-[#E7C75A] transition"
              >
                Einrichtung starten
              </a>
            </div>
          </div>
        </section>

        {/* Pakete */}
        <section id="pakete" className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight">
            Pakete & Leistungen
          </h2>
          <p className="mt-3 text-white/55">
            Einmalige Einrichtung, danach monatliche Betreuung.
          </p>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7">
              <div className="text-xs text-[#D4AF37] font-medium">Starter</div>
              <h3 className="mt-2 text-2xl font-semibold">KI-Chatbot</h3>
              <p className="mt-2 text-sm text-white/55">
                Ideal für Websites und Online-Anfragen.
              </p>

              <div className="mt-5 rounded-2xl bg-white/5 border border-white/10 p-5">
                <div className="text-xs text-white/45">Einrichtung</div>
                <div className="text-3xl font-semibold text-[#D4AF37]">
                  4.999 €
                </div>
                <div className="mt-2 text-xs text-white/45">
                  Monatlich: 299 € im ersten Jahr, danach 399 €
                </div>
              </div>

              <ul className="mt-5 space-y-2 text-sm text-white/65">
                <li>• Chatbot für Website oder Direktlink</li>
                <li>• Beantwortung typischer Kundenfragen</li>
                <li>• Übergabe relevanter Informationen</li>
              </ul>

              <a
                href={FORM_URL}
                className="mt-6 inline-flex w-full items-center justify-center px-5 py-3 rounded-xl bg-white text-black text-sm font-medium hover:bg-white/90 transition"
              >
                Starter anfragen
              </a>
            </div>

            <div className="rounded-[28px] border border-[#D4AF37]/30 bg-[#D4AF37] text-black p-7 shadow-[0_0_80px_rgba(212,175,55,0.18)] relative">
              <div className="absolute top-4 right-4 text-[10px] tracking-widest uppercase">
                Empfehlung
              </div>

              <div className="text-xs font-medium">Business</div>
              <h3 className="mt-2 text-2xl font-semibold">
                Chatbot + Telefon-KI
              </h3>
              <p className="mt-2 text-sm text-black/70">
                Für Unternehmen mit hohem Anfrage- oder Anrufvolumen.
              </p>

              <div className="mt-5 rounded-2xl bg-black/10 p-5">
                <div className="text-xs text-black/60">Einrichtung</div>
                <div className="text-3xl font-semibold">4.999 €</div>
                <div className="mt-2 text-xs text-black/60">
                  Monatlich: 399 € im ersten Jahr, danach 499 €
                </div>
              </div>

              <ul className="mt-5 space-y-2 text-sm text-black/75">
                <li>• Alle Starter-Funktionen</li>
                <li>• Telefonassistent für eingehende Anrufe</li>
                <li>• Optimierung & laufende Betreuung</li>
              </ul>

              <a
                href={FORM_URL}
                className="mt-6 inline-flex w-full items-center justify-center px-5 py-3 rounded-xl bg-black text-white text-sm font-medium hover:bg-[#111] transition"
              >
                Business anfragen
              </a>
            </div>
          </div>
        </section>

        {/* Ablauf */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight">
            So funktioniert es
          </h2>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <Step
              n="1"
              title="Formular ausfüllen"
              text="Sie beantworten wenige Fragen zu Ihrem Unternehmen."
            />
            <Step
              n="2"
              title="Einrichtung bezahlen"
              text="Sie werden automatisch zur Zahlungsseite weitergeleitet."
            />
            <Step
              n="3"
              title="Einrichtung & Start"
              text="Sie erhalten alle nächsten Schritte per E-Mail."
            />
          </div>
        </section>

        <footer className="max-w-6xl mx-auto px-6 pb-10 text-xs text-white/40 flex justify-between items-center">
          <div>© {new Date().getFullYear()} PrimeLogic AI</div>
          <div className="flex gap-4">
            <a href="/impressum" className="hover:text-[#D4AF37]">
              Impressum
            </a>
            <a href="/datenschutz" className="hover:text-[#D4AF37]">
              Datenschutz
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}

function Step({ n, title, text }) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7">
      <div className="text-xs text-[#D4AF37]">Schritt {n}</div>
      <div className="mt-2 text-lg font-semibold">{title}</div>
      <div className="mt-2 text-sm text-white/55">{text}</div>
    </div>
  );
}


