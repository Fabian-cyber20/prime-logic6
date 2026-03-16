import "./globals.css";

export const metadata = {
  title: "PrimeLogic AI",
  description: "Automatisiere dein Business mit KI.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body><footer style={{
  marginTop: "80px",
  padding: "20px",
  borderTop: "1px solid #eee",
  textAlign: "center",
  fontSize: "14px"
}}>
  
  <a href="/impressum" style={{marginRight:"20px"}}>
    Impressum
  </a>

  <a href="/datenschutz">
    Datenschutz
  </a>

</footer>{children}</body>
    </html>
  );
}
