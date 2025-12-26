export const metadata = {
  title: "Zahlung – PrimeLogic AI",
  description: "Wähle dein Paket und bezahle die Einrichtung.",
};

export default function ZahlungPage() {
  const PAYPAL_STARTER = "https://www.paypal.com/ncp/payment/LSASKBJHW74D8";
  const PAYPAL_BUSINESS = "https://www.paypal.com/ncp/payment/V5DQ2S2GKJNRW";

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Top bar */}
      <header className="border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-xs font-semibold">
              PL
            </div>
            <div>
              <div className="text-sm font-semibold tracking-tight">PrimeLogic AI</div>
              <div className="text-[11px] text-slate-500">Zahlung</div>
            </div>
          </a>

          <a
            href="/"
            className="text-sm text-slate-600 hover:text-slate-900"
          >
            Zurück
          </a>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10 md:py-14">
        {/* Title */}
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-light tracking-tight">
            Einrichtung bezahlen
          </h1>
          <p className="mt-3 text-slate-600">
            Wähle dein Paket und bezahle die einmalige Einrichtung (4.999 €). Danach erhältst du
            die nächsten Schritte per E-Mail.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {/* Starter */}
          <div className="rounded-2xl border border-slate-100 bg-white shadow-sm p-7">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-xs text-slate-500 font-medium">Starter</div>
                <div className="mt-2 text-2xl font-semibold">Chatbot</div>
              </div>
              <div className="text-right">
                <div className="text-xs text-slate-500">Einrichtung</div>
                <div className="text-2xl font-semibold">4.999 €</div>
              </div>
            </div>

            <div className="mt-5 rounded-xl bg-slate-50 border border-slate-100 p-4 text-sm text-slate-600">
              Enthält: Einrichtung, Anpassung an dein Business, Tests, Übergabe.
            </div>

            <ul className="mt-5 space-y-2 text-sm text-slate-600">
              <li>• Chatbot für Website oder Link</li>
              <li>• Häufige Fragen + Termine</li>
              <li>• Betreuung & Updates</li>
            </ul>

            <a
              href={PAYPAL_STARTER}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex w-full items-center justify-center px-5 py-3 rounded-md bg-slate-900 text-white text-sm hover:bg-slate-800"
            >
              Starter bezahlen
            </a>

            <p className="mt-3 text-xs text-slate-500">
              PayPal / Karte / Apple Pay. Öffnet in neuem Tab.
            </p>
          </div>

          {/* Business */}
          <div className="rounded-2xl bg-slate-900 text-white shadow-sm p-7 relative overflow-hidden">
            <div className="absolute top-4 right-4 text-[10px] uppercase tracking-[0.15em] text-slate-300">
              Empfehlung
            </div>

            <div className="flex items-start justify-between">
              <div>
                <div className="text-xs text-slate-200 font-medium">Business</div>
                <div className="mt-2 text-2xl font-semibold">Chatbot + Telefon</div>
              </div>
              <div className="text-right">
                <div className="text-xs text-slate-200">Einrichtung</div>
                <div className="text-2xl font-semibold">4.999 €</div>
              </div>
            </div>

            <div className="mt-5 rounded-xl bg-white/10 border border-white/10 p-4 text-sm text-slate-100">
              Zusätzlich: Telefon-KI für Anrufe (ideal bei hohem Anrufvolumen).
            </div>

            <ul className="mt-5 space-y-2 text-sm text-slate-100">
              <li>• Alles aus Starter</li>
              <li>• Telefonassistent für Anrufe</li>
              <li>• Betreuung & Optimierung</li>
            </ul>

            <a
              href={PAYPAL_BUSINESS}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex w-full items-center justify-center px-5 py-3 rounded-md bg-white text-slate-900 text-sm hover:bg-slate-100"
            >
              Business bezahlen
            </a>

            <p className="mt-3 text-xs text-slate-200">
              PayPal / Karte / Apple Pay. Öffnet in neuem Tab.
            </p>
          </div>
        </div>

        {/* After payment helper */}
        <div className="mt-10 rounded-2xl border border-slate-100 bg-slate-50 p-6">
          <div className="text-sm font-medium">Nach der Zahlung</div>
          <p className="mt-2 text-sm text-slate-600">
            Wenn du bezahlt hast, öffne anschließend diese Seite:
            <span className="font-medium text-slate-900"> prime-logic.de/danke</span>
          </p>
        </div>

        <footer className="mt-12 text-xs text-slate-500">
          © {new Date().getFullYear()} PrimeLogic AI
        </footer>
      </main>
    </div>
  );
}

