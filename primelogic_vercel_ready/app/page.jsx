import Image from "next/image";

export default function HomePage() {
  const LOGO_SRC = "/logo.png";
  const FORM_URL = "https://tally.so/r/pbdPx1";

  return (
    <div className="min-h-screen bg-[#080808] text-white">
      
      {/* HEADER */}
      <header className="sticky top-0 z-20 border-b border-white/10 bg-[#080808]/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* LOGO FIXED */}
          <a href="/" className="flex items-center">
            <div className="relative w-[220px] h-[60px]">
              <Image
                src={LOGO_SRC}
                alt="PrimeLogic AI"
                fill
                className="object-contain"
                priority
              />
            </div>
          </a>

          <a
            href={FORM_URL}
            className="px-6 py-2 rounded-full bg-[#D4AF37] text-black text-sm font-medium hover:bg-[#E7C75A]"
          >
            Angebot anfordern
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="text-center px-6 pt-28 pb-24">
        <h1 className="text-5xl md:text-7xl font-light leading-tight">
          Mehr Anfragen.<br />Weniger Aufwand.
        </h1>

        <p className="mt-6 text-white/60 max-w-xl mx-auto text-lg">
          Automatisieren Sie Kundenanfragen und Terminbuchungen mit KI –
          ohne zusätzlichen Personalaufwand.
        </p>

        <div className="mt-10 flex gap-4 justify-center">
          <a
            href={FORM_URL}
            className="px-8 py-4 rounded-full bg-[#D4AF37] text-black font-medium"
          >
            Jetzt starten
          </a>

          <a
            href="#pakete"
            className="px-8 py-4 rounded-full border border-white/20"
          >
            Pakete ansehen
          </a>
        </div>
      </section>

      {/* DEMO */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-5xl font-light">
          Ihr KI-Assistent übernimmt alles
        </h2>

        <p className="mt-4 text-white/60">
          Egal ob Zahnarzt, Handwerker oder Friseur – automatisch mehr Anfragen.
        </p>

        <div className="mt-10 bg-[#111] p-8 rounded-2xl border border-white/10">
          <p className="text-white/80">
            „Hallo 👋 Wie kann ich helfen?“
          </p>
        </div>
      </section>

      {/* PAKETE */}
      <section id="pakete" className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-5xl font-light">
          Pakete
        </h2>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          
          <div className="p-6 border border-white/10 rounded-2xl bg-[#111]">
            <h3 className="text-xl">Starter</h3>
            <p className="mt-2 text-white/60">Chatbot</p>
            <p className="mt-4 text-[#D4AF37] text-2xl">4.999 €</p>
          </div>

          <div className="p-6 border border-[#D4AF37] rounded-2xl bg-[#D4AF37] text-black">
            <h3 className="text-xl">Business</h3>
            <p className="mt-2">Chatbot + Telefon-KI</p>
            <p className="mt-4 text-2xl font-bold">4.999 €</p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-white/40 py-10 text-sm">
        © PrimeLogic AI
      </footer>

    </div>
  );
}

