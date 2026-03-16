export default function DankeBusiness() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#ffffff",
        fontFamily: "Arial",
        padding: "24px",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: "700px" }}>
        <h1 style={{ fontSize: "42px", marginBottom: "20px", lineHeight: "1.2" }}>
          Zahlung erfolgreich. Ihr Business-Assistent wird jetzt eingerichtet.
        </h1>

        <p style={{ fontSize: "18px", marginBottom: "30px", color: "#333" }}>
          Vielen Dank für Ihr Vertrauen. Bitte nehmen Sie sich jetzt 3–4 Minuten Zeit,
          damit wir Ihren Website-Chatbot und/oder Telefon-Agenten optimal konfigurieren können.
        </p>

        <div style={{ textAlign: "left", marginBottom: "35px", display: "inline-block" }}>
          <p>✅ Sie beantworten kurz die Setup-Fragen</p>
          <p>✅ Wir richten Ihren Business-Assistenten individuell ein</p>
          <p>✅ Bereitstellung innerhalb von 24–48 Stunden</p>
        </div>

        <a href="https://tally.so/r/lbrGZN">
          <button
            style={{
              padding: "16px 32px",
              fontSize: "18px",
              background: "#000",
              color: "#fff",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Business-Setup jetzt starten
          </button>
        </a>

        <p style={{ marginTop: "20px", color: "#666", fontSize: "14px" }}>
          🔒 Sichere Einrichtung · Keine technischen Kenntnisse erforderlich
        </p>
      </div>
    </main>
  );
}
