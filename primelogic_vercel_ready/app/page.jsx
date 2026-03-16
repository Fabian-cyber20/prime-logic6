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
       <section className="relative overflow-hidden bg-white">
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-slate-100/60 blur-3xl" />
    <div className="absolute top-[180px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-slate-50 blur-3xl" />
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
      Telefon-Assistenten – professionell, skalierbar und ohne zusätzlichen
      Personalaufwand.
    </p>

    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
      <a
        href="https://tally.so/r/pbdPx1"
        className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-slate-900 text-white text-sm md:text-base hover:bg-slate-800 transition shadow-sm"
      >
        Jetzt starten
      </a>

      <a
        href="/zahlung"
        className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-slate-300 bg-white text-slate-700 text-sm md:text-base hover:bg-slate-50 transition"
      >
        Pakete ansehen
      </a>
    </div>

    <div className="mt-6 text-sm text-slate-500">
      Einrichtung ab 4.999 € · Start in wenigen Minuten
    </div>

    <div className="mt-16 max-w-5xl mx-auto">
      <div className="rounded-[28px] border border-slate-200 bg-white/80 backdrop-blur shadow-[0_30px_80px_rgba(15,23,42,0.08)] overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between text-sm">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-slate-200" />
            <div className="w-3 h-3 rounded-full bg-slate-200" />
            <div className="w-3 h-3 rounded-full bg-slate-200" />
          </div>
          <div className="text-slate-500">PrimeLogic AI Assistant</div>
        </div>

        <div className="grid md:grid-cols-2">
          <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-slate-100 text-left">
            <div className="text-sm text-slate-500 mb-4">Website-Chatbot</div>

            <div className="space-y-4">
              <div className="max-w-xs rounded-2xl bg-slate-100 px-4 py-3 text-sm text-slate-700">
                Guten Tag. Wie kann ich Ihnen weiterhelfen?
              </div>

              <div className="ml-auto max-w-xs rounded-2xl bg-slate-900 px-4 py-3 text-sm text-white">
                Ich möchte einen Termin vereinbaren.
              </div>

              <div className="max-w-sm rounded-2xl bg-slate-100 px-4 py-3 text-sm text-slate-700">
                Gerne. Darf ich Ihnen direkt die nächsten freien Termine anzeigen?
              </div>
            </div>
          </div>

          <div className="p-8 md:p-10 text-left">
            <div className="text-sm text-slate-500 mb-4">Telefon-Assistent</div>

            <div className="rounded-2xl bg-slate-50 border border-slate-100 p-5">
              <div className="text-sm text-slate-900 font-medium">
                Eingehender Anruf
              </div>
              <div className="mt-3 text-sm text-slate-600 leading-relaxed">
                „Willkommen bei PrimeLogic AI. Ich bin der digitale Assistent.
                Möchten Sie einen Termin vereinbaren oder haben Sie eine kurze
                Frage?“
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-xl bg-white border border-slate-200 px-4 py-3">
                  Terminbuchung
                </div>
                <div className="rounded-xl bg-white border border-slate-200 px-4 py-3">
                  Lead-Erfassung
                </div>
                <div className="rounded-xl bg-white border border-slate-200 px-4 py-3">
                  FAQ-Antworten
                </div>
                <div className="rounded-xl bg-white border border-slate-200 px-4 py-3">
                  Weiterleitung
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 text-xs text-slate-400">
        Beispielhafte Darstellung. Inhalte werden individuell auf Ihr Unternehmen angepasst.
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


