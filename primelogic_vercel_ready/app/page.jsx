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
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <div className="relative w-9 h-9 rounded-xl overflow-hidden bg-slate-100">
              <Image src={LOGO_SRC} alt="PrimeLogic AI" fill className="object-contain p-1" priority />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight">PrimeLogic AI</div>
              <div className="text-[11px] text-slate-500">Intelligente Prozessautomatisierung</div>
            </div>
          </a>

          <a
            href={FORM_URL}
            className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-slate-900 text-white text-sm hover:bg-slate-800 transition"
          >
            Angebot anfordern
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-white">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-slate-100/60 blur-3xl" />
          </div>

          <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-20 md:pt-28 md:pb-28 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white/80 backdrop-blur text-xs text-slate-600">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              KI-Chatbots und Telefon-Assistenten für Unternehmen
            </div>

            <h1 className="mt-8 text-5xl md:text-7xl font-light tracking-tight text-slate-900 leading-[1.05]">
              Mehr Anfragen.
              <br />
              Weniger Aufwand.
            </h1>

            <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-slate-600 leading-relaxed">
              PrimeLogic AI automatisiert Ihren Kundenkontakt über Website-Chatbots und
              Telefon-Assistenten – professionell, skalierbar und ohne zusätzlichen Personalaufwand.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={FORM_URL}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-slate-900 text-white text-sm md:text-base hover:bg-slate-800 transition shadow-sm"
              >
                Jetzt starten
              </a>

              <a
                href="#pakete"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-slate-300 bg-white text-slate-700 text-sm md:text-base hover:bg-slate-50 transition"
              >
                Pakete ansehen
              </a>
            </div>

            <div className="mt-6 text-sm text-slate-500">
              Einrichtung ab 4.999 € · Start in wenigen Minuten
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="text-sm text-slate-500">Demo für lokale Unternehmen</div>
            <h2 className="mt-3 text-3xl md:text-5xl font-light tracking-tight">
              So übernimmt Ihr KI-Assistent Kundenanfragen automatisch.
            </h2>
            <p className="mt-5 text-slate-600 text-lg">
              Egal ob Praxis, Handwerk, Friseur, Studio oder Dienstleister:
              Der Assistent beantwortet Fragen, sammelt Anfragen und leitet Kunden zum nächsten Schritt.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-6 items-stretch">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-sm text-slate-500 mb-5">Website-Chatbot</div>

              <div className="space-y-4">
                <div className="max-w-sm rounded-2xl bg-slate-100 px-4 py-3 text-sm text-slate-700">
                  Hallo 👋 Wie kann ich Ihnen helfen?
                </div>

                <div className="ml-auto max-w-sm rounded-2xl bg-slate-900 px-4 py-3 text-sm text-white">
                  Ich möchte einen Termin / ein Angebot.
                </div>

                <div className="max-w-sm rounded-2xl bg-slate-100 px-4 py-3 text-sm text-slate-700">
                  Gerne. Worum geht es genau?
                </div>

                <div className="ml-auto max-w-sm rounded-2xl bg-slate-900 px-4 py-3 text-sm text-white">
                  Ich habe eine Frage zu Leistungen und Preisen.
                </div>

                <div className="max-w-sm rounded-2xl bg-slate-100 px-4 py-3 text-sm text-slate-700">
                  Ich helfe Ihnen weiter und nehme bei Interesse direkt Ihre Anfrage auf.
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-slate-900 text-white p-6 shadow-xl">
              <div className="text-sm text-slate-300 mb-5">Was automatisiert wird</div>

              <div className="space-y-4 text-sm">
                <div className="rounded-2xl bg-white/10 p-4">
                  ✅ Häufige Fragen zu Leistungen, Preisen und Öffnungszeiten
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  ✅ Erfassung von Name, E-Mail, Telefonnummer und Anliegen
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  ✅ Weiterleitung zu Formular, Terminbuchung oder Angebot
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  ✅ Entlastung von Telefon, E-Mail und Empfang
                </div>
              </div>

              <a
                href={FORM_URL}
                className="mt-8 inline-flex w-full items-center justify-center px-5 py-3 rounded-xl bg-white text-slate-900 text-sm hover:bg-slate-100 transition"
              >
                Einrichtung starten
              </a>
            </div>
          </div>
        </section>

        <section id="pakete" className="max-w-6xl mx-auto px-6 py-14">
          <h2 className="text-3xl font-light tracking-tight">Pakete & Leistungen</h2>
          <p className="mt-2 text-slate-600">Einmalige Einrichtung, danach monatliche Betreuung.</p>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="rounded-3xl border border-slate-100 bg-white p-7 shadow-sm">
              <div className="text-xs text-slate-500 font-medium">Starter</div>
              <h3 className="mt-2 text-2xl font-semibold">KI-Chatbot</h3>
              <p className="mt-2 text-sm text-slate-600">Ideal für Websites und Online-Anfragen.</p>

              <div className="mt-5 rounded-2xl bg-slate-50 border border-slate-100 p-5">
                <div className="text-xs text-slate-500">Einrichtung</div>
                <div className="text-2xl font-semibold">4.999 €</div>
                <div className="mt-2 text-xs text-slate-500">
                  Monatlich: 299 € (Jahr 1), ab Jahr 2: 399 €
                </div>
              </div>

              <ul className="mt-5 space-y-2 text-sm text-slate-600">
                <li>• Chatbot für Website oder Direktlink</li>
                <li>• Beantwortung typischer Kundenfragen</li>
                <li>• Übergabe relevanter Informationen</li>
              </ul>

              <a
                href={FORM_URL}
                className="mt-6 inline-flex w-full items-center justify-center px-5 py-3 rounded-xl bg-slate-900 text-white text-sm hover:bg-slate-800 transition"
              >
                Starter anfragen
              </a>
            </div>

            <div className="rounded-3xl bg-slate-900 text-white p-7 shadow-xl relative">
              <div className="absolute top-4 right-4 text-[10px] tracking-widest text-slate-300 uppercase">
                Empfehlung
              </div>

              <div className="text-xs text-slate-300 font-medium">Business</div>
              <h3 className="mt-2 text-2xl font-semibold">Chatbot + Telefon-KI</h3>
              <p className="mt-2 text-sm text-slate-200">
                Für Unternehmen mit hohem Anfrage- oder Anrufvolumen.
              </p>

              <div className="mt-5 rounded-2xl bg-white/10 p-5">
                <div className="text-xs text-slate-200">Einrichtung</div>
                <div className="text-2xl font-semibold">4.999 €</div>
                <div className="mt-2 text-xs text-slate-200">
                  Monatlich: 399 € (Jahr 1), ab Jahr 2: 499 €
                </div>
              </div>

              <ul className="mt-5 space-y-2 text-sm text-slate-100">
                <li>• Alle Starter-Funktionen</li>
                <li>• Telefonassistent für eingehende Anrufe</li>
                <li>• Optimierung & laufende Betreuung</li>
              </ul>

              <a
                href={FORM_URL}
                className="mt-6 inline-flex w-full items-center justify-center px-5 py-3 rounded-xl bg-white text-slate-900 text-sm hover:bg-slate-100 transition"
              >
                Business anfragen
              </a>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 py-14">
          <h2 className="text-3xl font-light tracking-tight">So funktioniert es</h2>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <Step n="1" title="Formular ausfüllen" text="Sie beantworten wenige Fragen zu Ihrem Unternehmen." />
            <Step n="2" title="Einrichtung bezahlen" text="Sie werden automatisch zur Zahlungsseite weitergeleitet." />
            <Step n="3" title="Einrichtung & Start" text="Sie erhalten alle nächsten Schritte per E-Mail." />
          </div>
        </section>

        <footer className="max-w-6xl mx-auto px-6 pb-10 text-xs text-slate-500 flex justify-between items-center">
          <div>© {new Date().getFullYear()} PrimeLogic AI</div>
          <div className="flex gap-4">
            <a href="/impressum" className="hover:underline">Impressum</a>
            <a href="/datenschutz" className="hover:underline">Datenschutz</a>
          </div>
        </footer>
      </main>
    </div>
  );
}

function Step({ n, title, text }) {
  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-7 shadow-sm">
      <div className="text-xs text-slate-500">Schritt {n}</div>
      <div className="mt-2 text-lg font-semibold">{title}</div>
      <div className="mt-2 text-sm text-slate-600">{text}</div>
    </div>
  );
}


