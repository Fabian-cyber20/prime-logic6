export const metadata = {
  title: "Zahlung – PrimeLogic AI",
  description: "Wähle dein Paket und bezahle die Einrichtung.",
};

export default function ZahlungPage() {
  // HIER DEINE PAYPAL-LINKS EINFÜGEN:
  const PAYPAL_STARTER = "https://www.paypal.com/ncp/payment/LSASKBJHW74D8";
  const PAYPAL_BUSINESS = "https://www.paypal.com/ncp/payment/V5DQ2S2GKJNRW";

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="max-w-5xl mx-auto px-6 py-8">
        <a href="/" className="text-sm text-slate-600 hover:text-slate-900">
          ← Zurück zur Website
        </a>
        <h1 className="mt-4 text-3xl md:text-4xl font-light tracking-tight">
          Zahlung – Einrichtung buchen
        </h1>
        <p className="mt-3 text-slate-600 max-w-2xl">
          Wähle dein Paket und bezahle die einmalige Einrichtung (4.999 €). Danach erhältst du
          automatisch die nächsten Schritte per E-Mail.
        </p>
      </header>

      <main className="max-w-5xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Starter */}
          <div className="p-6 rounded-2xl border border-slate-100 bg-white shadow-sm">
            <div className="text-xs text-slate-500 font-medium">Starter</div>
            <div className="mt-2 text-xl font-semibold">Chatbot</div>

            <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div className="text-sm font-medium">Einmalige Einrichtung</div>
              <div className="mt-1 text-2xl font-semibold">4.999 €</div>
            </div>

            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>• KI-Chatbot für Website oder Link</li>
              <li>• Beantwortet Fragen & macht Termine</li>
              <li>• Betreuung & Updates inklusive</li>
            </ul>

            <a
              href={PAYPAL_STARTER}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center px-5 py-3 rounded-md bg-slate-900 text-white text-sm hover:bg-slate-800"
            >
              Starter jetzt bezahlen
            </a>

            <p className="mt-3 text-xs text-slate-500">
              Zahlung öffnet in einem neuen Tab (PayPal / Karte / Apple Pay).
            </p>
          </div>

          {/* Business */}
          <div className="p-6 rounded-2xl border border-slate-900 bg-slate-900 text-white shadow-sm relative overflow-hidden">
            <div className="absolute top-3 right-4 text-[10px] uppercase tracking-[0.15em] text-slate-300">
              Beliebt
            </div>

            <div className="text-xs text-slate-200 font-medium">Business</div>
            <div className="mt-2 text-xl font-semibold">Chatbot + Telefon</div>

            <div className="mt-4 p-4 rounded-xl bg-white/10 border border-white/10">
              <div className="text-sm font-medium">Einmalige Einrichtung</div>
              <div className="mt-1 text-2xl font-semibold">4.999 €</div>
            </div>

            <ul className="mt-4 space-y-2 text-sm text-slate-100">
              <li>• Alles aus Starter</li>
              <li>• KI-Telefonassistent für Anrufe</li>
              <li>• Ideal bei vielen Anrufen</li>
            </ul>

            <a
              href={PAYPAL_BUSINESS}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center px-5 py-3 rounded-md bg-white text-slate-900 text-sm hover:bg-slate-100"
            >
              Business jetzt bezahlen
            </a>

            <p className="mt-3 text-xs text-slate-200">
              Zahlung öffnet in einem neuen Tab (PayPal / Karte / Apple Pay).
            </p>
          </div>
        </div>

        <div className="mt-10 p-6 rounded-2xl bg-slate-50 border border-slate-100">
          <h2 className="text-lg font-medium">Was passiert nach der Zahlung?</h2>
          <ol className="mt-3 space-y-2 text-sm text-slate-600">
            <li>1) Du erhältst eine Bestätigung per E-Mail.</li>
            <li>2) Wir starten automatisch mit der Einrichtung.</li>
            <li>3) Du bekommst Link/Einbau-Code und die nächsten Schritte.</li>
          </ol>

          <p className="mt-4 text-xs text-slate-500">
            Hinweis: Die monatlichen Kosten werden separat nach der Einrichtung eingerichtet (damit alles sauber bleibt).
          </p>
        </div>
      </main>
    </div>
  );
}
