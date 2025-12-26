import Image from "next/image";

export const metadata = {
  title: "PrimeLogic AI",
  description: "Automatisiere dein Business mit KI – Chatbot & Telefonassistent.",
};

export default function HomePage() {
  const LOGO_SRC = "/logo.png"; // optional (liegt in /public)
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
                Automatisiere dein Business
              </div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
            <a href="#pakete" className="hover:text-slate-900">
              Pakete
            </a>
            <a href="#ablauf" className="hover:text-slate-900">
              Ablauf
            </a>
            <a href="#faq" className="hover:text-slate-900">
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={FORM_URL}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-xl border border-slate-200 text-slate-700 text-sm hover:bg-slate-50 transition"
            >
              Kostenlos starten
            </a>
            <a
              href={FORM_URL}
              className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-slate-900 text-white text-sm hover:bg-slate-800 transition"
            >
              Angebot erhalten
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-6 pt-14 pb-10 md:pt-20 md:pb-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-xs text-slate-600">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                Keine Technik nötig • Schnell startklar
              </div>

              <h1 className="mt-6 text-4xl md:text-5xl font-light tracking-tight">
                KI, die Anfragen beantwortet <br className="hidden md:block" />
                und Termine macht.
              </h1>

              <p className="mt-5 text-slate-600 text-base md:text-lg max-w-xl">
                PrimeLogic AI automatisiert Kundenfragen (Chat) – und im Business
                Paket auch Telefonanrufe. Ideal für kleine Betriebe, Studios,
                Praxen und lokale Services.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={FORM_URL}
                  className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-slate-900 text-white text-sm hover:bg-slate-800 transition"
                >
                  In 2–3 Minuten starten
                </a>
                <a
                  href="#pakete"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-slate-200 text-slate-700 text-sm hover:bg-slate-50 transition"
                >
                  Pakete ansehen
                </a>
              </div>

              <div className="mt-6 text-xs text-slate-500">
                Du füllst nur kurz das Formular aus. Danach läuft der Prozess
                automatisch.
              </div>
            </div>

            {/* Right card (Apple-like) */}
            <div className="rounded-3xl border border-slate-100 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)] p-6 md:p-8">
              <div className="text-sm font-medium">Was du bekommst</div>

              <div className="mt-4 grid gap-3">
                <Feature title="Sofort nutzbar" text="Chatbot als Link oder auf deiner Website." />
                <Feature title="Weniger Stress" text="Häufige Fragen, Preise, Öffnungszeiten – automatisch." />
                <Feature title="Mehr Termine" text="Der Bot sammelt Infos und leitet sauber weiter." />
                <Feature title="Optional Telefon-KI" text="Business: Anrufe annehmen, Anliegen sortieren." />
              </div>

              <div className="mt-6 rounded-2xl bg-slate-50 border border-slate-100 p-5">
                <div className="text-xs text-slate-500">Start dauert</div>
                <div className="mt-1 text-lg font-semibold">2–3 Minuten</div>
                <div className="mt-3 flex gap-3">
                  <a
                    href={FORM_URL}
                    className="inline-flex w-full items-center justify-center px-4 py-2 rounded-xl bg-slate-900 text-white text-sm hover:bg-slate-800 transition"
                  >
                    Formular öffnen
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Packages */}
        <section id="pakete" className="max-w-6xl mx-auto px-6 py-12 md:py-16">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <h2 className="text-2xl md:text-3xl font-light tracking-tight">
                Pakete
              </h2>
              <p className="mt-2 text-slate-600">
                Einmalige Einrichtung + monatliche Betreuung.
              </p>
            </div>

            <a
              href={FORM_URL}
              className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-slate-900 text-white text-sm hover:bg-slate-800 transition"
            >
              Jetzt starten
            </a>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {/* Starter */}
            <div className="rounded-3xl border border-slate-100 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.04)] p-7">
              <div className="text-xs text-slate-500 font-medium">Starter</div>
              <div className="mt-2 text-2xl font-semibold">Chatbot</div>
              <p className="mt-2 text-sm text-slate-600">
                Für Website & Kundenanfragen.
              </p>

              <div className="mt-5 rounded-2xl bg-slate-50 border border-slate-100 p-5">
                <div className="text-xs text-slate-500">Einrichtung</div>
                <div className="mt-1 text-2xl font-semibold">4.999 €</div>
                <div className="mt-3 text-xs text-slate-500">
                  Monatlich: 299 € (Jahr 1), ab Jahr 2: 399 €
                </div>
              </div>

              <ul className="mt-5 space-y-2 text-sm text-slate-600">
                <li>• Chatbot als Link oder Website-Widget</li>
                <li>• FAQ, Leistungen, Preise, Öffnungszeiten</li>
                <li>• Lead-Erfassung (Name, E-Mail, Anliegen)</li>
              </ul>

              <a
                href={FORM_URL}
                className="mt-7 inline-flex w-full items-center justify-center px-5 py-3 rounded-xl bg-slate-900 text-white text-sm hover:bg-slate-800 transition"
              >
                Starter anfragen
              </a>
            </div>

            {/* Business */}
            <div className="rounded-3xl bg-slate-900 text-white shadow-[0_20px_60px_rgba(0,0,0,0.18)] p-7 relative overflow-hidden">
              <div className="absolute -top-28 -right-28 w-80 h-80 rounded-full bg-white/10 blur-2xl" />
              <div className="absolute top-5 right-5 text-[10px] uppercase tracking-[0.15em] text-slate-300">
                Empfehlung
              </div>

              <div className="text-xs text-slate-200 font-medium relative">
                Business
              </div>
              <div className="mt-2 text-2xl font-semibold relative">
                Chatbot + Telefon
              </div>
              <p className="mt-2 text-sm text-slate-200 relative">
                Für viele Anrufe & Buchungen.
              </p>

              <div className="mt-5 rounded-2xl bg-white/10 border border-white/10 p-5 relative">
                <div className="text-xs text-slate-200">Einrichtung</div>
                <div className="mt-1 text-2xl font-semibold">4.999 €</div>
                <div className="mt-3 text-xs text-slate-200">
                  Monatlich: 399 € (Jahr 1), ab Jahr 2: 499 €
                </div>
              </div>

              <ul className="mt-5 space-y-2 text-sm text-slate-100 relative">
                <li>• Alles aus Starter</li>
                <li>• Telefon-KI für Anrufe (Anliegen & Termine)</li>
                <li>• Priorisierung & bessere Erreichbarkeit</li>
              </ul>

              <a
                href={FORM_URL}
                className="mt-7 inline-flex w-full items-center justify-center px-5 py-3 rounded-xl bg-white text-slate-900 text-sm hover:bg-slate-100 transition relative"
              >
                Business anfragen
              </a>
            </div>
          </div>

          <p className="mt-5 text-xs text-slate-500">
            Hinweis: Zahlung der Einrichtung erfolgt nach dem Formular auf der
            Zahlungsseite.
          </p>
        </section>

        {/* Flow */}
        <section id="ablauf" className="max-w-6xl mx-auto px-6 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-light tracking-tight">
            Ablauf (vollautomatisch)
          </h2>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <Step n="1" title="Formular" text="Du beantwortest kurz ein paar Fragen (2–3 Minuten)." />
            <Step n="2" title="Zahlung" text="Du wirst zur Zahlungsseite weitergeleitet und bezahlst die Einrichtung." />
            <Step n="3" title="Einrichtung" text="Du bekommst automatisch die nächsten Schritte per E-Mail." />
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="max-w-6xl mx-auto px-6 pb-16">
          <h2 className="text-2xl md:text-3xl font-light tracking-tight">
            FAQ
          </h2>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <Faq q="Brauche ich eine Website?" a="Nein. Du kannst den Chatbot auch als Link nutzen. Website ist optional." />
            <Faq q="Muss ich technisch etwas können?" a="Nein. Du bekommst klare Schritte. Einrichtung läuft automatisch." />
            <Faq q="Wie schnell kann ich starten?" a="Oft am selben Tag. Du wählst im Formular deinen Startzeitpunkt." />
            <Faq q="Wie läuft die Zahlung?" a="Nach dem Formular landest du auf der Zahlungsseite und bezahlst per PayPal/Karte." />
          </div>

          <div className="mt-10">
            <a
              href={FORM_URL}
              className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-slate-900 text-white text-sm hover:bg-slate-800 transition"
            >
              Jetzt starten (2–3 Minuten)
            </a>
          </div>

          <footer className="mt-12 text-xs text-slate-500">
            © {new Date().getFullYear()} PrimeLogic AI
          </footer>
        </section>
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
    <div className="rounded-3xl border border-slate-100 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.04)] p-7">
      <div className="text-xs text-slate-500 font-medium">Schritt {n}</div>
      <div className="mt-2 text-lg font-semibold">{title}</div>
      <div className="mt-2 text-sm text-slate-600">{text}</div>
    </div>
  );
}

function Faq({ q, a }) {
  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-7">
      <div className="text-sm font-semibold">{q}</div>
      <div className="mt-2 text-sm text-slate-600">{a}</div>
    </div>
  );
}


