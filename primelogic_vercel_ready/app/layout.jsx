import "./globals.css";

export const metadata = {
  title: "PrimeLogic AI",
  description: "Automatisiere dein Business mit KI.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
