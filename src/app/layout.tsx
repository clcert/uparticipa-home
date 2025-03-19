import type { Metadata } from "next";
import { Nunito } from 'next/font/google'
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import "../styles/globals.scss"

export const metadata: Metadata = {
  title: "UParticipa",
  description: "Sitio principal de UParticipa",
};

const nunito = Nunito({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="has-navbar-fixed-top">
      <head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>UParticipa</title>
      </head>
      <body className={nunito.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
