export const metadata = {
  title: "Danke – PrimeLogic AI",
  description: "Zahlung erhalten. Die nächsten Schritte starten automatisch.",
};

export default function DankePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <main className="max-w-3xl mx-auto px-6 py-16">
        <div className="p-8 rounded-2xl border border-slate-100 bg-white shadow-sm">
          <h1 className="text-3xl md:text-4xl font-light tracking-tight">
            Danke! Zahlung erhalten ✅
          </h1>

          <p className="mt-4 text-slate-600">
            Wir starten jetzt automatisch mit der Einrichtung. Du bekommst in Kürze eine E-Mail
            mit den nächsten Schritten.
          </p>

          <div className="mt-8 p-5 rounded-xl bg-slate-50 border border-slate-100">
            <div className="text-sm font-medium">So geht es weiter</div>
            <ol className="mt-3 space-y-2 text-sm text-slate-600">
              <li>1) Bestätigungs-E-Mail prüfen (auch Spam).</li>
              <li>2) Wir richten deinen Assistenten ein.</li>
              <li>3) Du erhältst Link/Einbau-Code und eine kurze Anleitung.</li>
            </ol>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/"
              className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-slate-900 text-white text-sm hover:bg-slate-800"
            >
              Zurück zur Startseite
            </a>
            <a
              href="mailto:info@prime-logic.de"
              className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-slate-200 text-slate-700 text-sm hover:bg-slate-50"
            >
              Hilfe per E-Mail
            </a>
          </div>

          <p className="mt-4 text-xs text-slate-500">
            Hinweis: Wenn du innerhalb von 10 Minuten keine E-Mail bekommst, schreibe an
            info@prime-logic.de.
          </p>
        </div>
      </main>
    </div>
  );
}
