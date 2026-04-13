import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "PrimeLogic KI",
  description: "Automatisieren Sie Ihr Unternehmen mit KI.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>
        {children}

        <footer
          style={{
            marginTop: "80px",
            padding: "20px",
            borderTop: "1px solid #eee",
            textAlign: "center",
            fontSize: "14px",
          }}
        >
          <a href="/impressum" style={{ marginRight: "20px" }}>
            Impressum
          </a>
          <a href="/datenschutz">Datenschutz</a>
        </footer>

        <Script id="chatbase-config" strategy="afterInteractive">
          {`
            window.embeddedChatbotConfig = {
              chatbotId: "ELtyLX9FtSdvU-IMn7SdH",
              domain: "www.chatbase.co"
            }
          `}
        </Script>

        <Script
          src="https://www.chatbase.co/embed.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
