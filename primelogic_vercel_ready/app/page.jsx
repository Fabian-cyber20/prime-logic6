import Image from "next/image";

export const metadata = {
  title: "PrimeLogic AI",
  description:
    "KI-gestützte Chat- und Telefonassistenten für Unternehmen. Automatisieren Sie Kundenanfragen und Terminbuchungen.",
};

export default function HomePage() {
  const LOGO_SRC = "/logo.png"; // optional
  const FORM_URL = "https://tally.so/r/pbdPx1";

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <div className="relative w-9 h-9 rounded-xl overflow-hidden bg-slate-100">
              <Image
                src={LOGO_SRC}
                alt="PrimeLogic AI"
                fill
                className="object-contain p-1"
                priority
              />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight">
                PrimeLogic AI
              </div>
              <div className="text-[11px] text-slate-500">
                Intelligente Prozessautomatisierung
              </div>
            </div>
          </a>

          <div className="flex items-center gap-3">
            <a
              href={FORM_URL}
              className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-slate-900 text-white text-sm hover:bg-slate-800 transition"
            >
              Angebot anfordern
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-6 pt-16 pb-14">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-xs text-slate-600">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                Keine Technikkenntnisse erforderlich
              </div>

              <h1 className="mt-6 text-4xl md:text-5xl font-light tracking-tight">
                Automatisieren Sie Kundenanfragen <br className="hidden md:block" />
                mit intelligenter KI.
              </h1>

              <p className="mt-5 text-slate-600 text-lg max-w-xl">
                PrimeLogic AI übernimmt wiederkehrende Anfragen, Terminwünsche
                und – im Business-Paket – auch Telefonanrufe.
                <br />
                <strong>Strukturiert. Zuverlässig. Rund um die Uhr.</strong>
              </p>

              <div className="mt-8 flex gap-3">
                <a
                  href={FORM_URL}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-900 text-white text-sm hover:bg-slate-800 transition"
                >
                  In 2–3 Minuten starten
                </a>
                <a
                  href="#pakete"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-slate-200 text-slate-700 text-sm hover:bg-slate-50 transition"
                >
                  Pakete ansehen
                </a>
              </div>

              <p className="mt-4 text-xs text-slate-500">
                Nach dem Formular erhalten Sie automatisch alle nächsten Schritte per E-Mail.
              </p>
            </div>

            {/* Info Card */}
            <div className="rounded-3xl border border-slate-100 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)] p-8">
              <h3 className="text-sm font-medium">
                Warum PrimeLogic AI?
              </h3>

              <div className="mt-4 grid gap-3">
                <Feature
                  title="Sofort einsatzbereit"
                  text="Kein IT-Aufwand. Die Einrichtung erfolgt vollständig durch uns."
                />
                <Feature
                  title="Entlastung im Alltag"
                  text="Häufige Fragen, Preise und Öffnungszeiten werden automatisch beantwortet."
                />
                <Feature
                  title="Mehr qualifizierte Anfragen"
                  text="Kunden werden strukturiert erfasst und vorbereitet."
                />
                <Feature
                  title="Optional: Telefon-KI"
                  text="Der Assistent nimmt Anrufe an und sortiert Anliegen vor."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Pakete */}
        <section id="pakete" className="max-w-6xl mx-auto px-6 py-14">
          <h2 className="text-3xl font-light tracking-tight">
            Pakete & Leistungen
          </h2>
          <p className="mt-2 text-slate-600">
            Einmalige Einrichtung, danach monatliche Betreuung.
          </p>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {/* Starter */}
            <div className="rounded-3xl border border-slate-100 bg-white p-7 shadow-sm">
              <div className="text-xs text-slate-500 font-medium">
                Starter
              </div>
              <h3 className="mt-2 text-2xl font-semibold">
                KI-Chatbot
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Ideal für Websites und Online-Anfragen.
              </p>

              <div className="mt-5 rounded-2xl bg-slate-50 border border-slate-100 p-5">
                <div className="text-xs text-slate-500">
                  Einrichtung
                </div>
                <div className="text-2xl font-semibold">
                  4.999 €
                </div>
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

            {/* Business */}
            <div className="rounded-3xl bg-slate-900 text-white p-7 shadow-xl relative">
              <div className="absolute top-4 right-4 text-[10px] tracking-widest text-slate-300 uppercase">
                Empfehlung
              </div>

              <div className="text-xs text-slate-300 font-medium">
                Business
              </div>
              <h3 className="mt-2 text-2xl font-semibold">
                Chatbot + Telefon-KI
              </h3>
              <p className="mt-2 text-sm text-slate-200">
                Für Unternehmen mit hohem Anfrage- oder Anrufvolumen.
              </p>

              <div className="mt-5 rounded-2xl bg-white/10 p-5">
                <div className="text-xs text-slate-200">
                  Einrichtung
                </div>
                <div className="text-2xl font-semibold">
                  4.999 €
                </div>
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

        {/* Ablauf */}
        <section className="max-w-6xl mx-auto px-6 py-14">
          <h2 className="text-3xl font-light tracking-tight">
            So funktioniert es
          </h2>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
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

        <footer className="max-w-6xl mx-auto px-6 pb-10 text-xs text-slate-500">
          © {new Date().getFullYear()} PrimeLogic AI
        </footer>
      </main>
    </div>
  );
}

function Feature({ title, text }) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-4">
      <div className="text-sm font-medium">{title}</div>
      <div className="mt-1 text-sm text-slate-600">{text}</div>
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


