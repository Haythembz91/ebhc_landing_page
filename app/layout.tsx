import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: "EBHC - Entreprise Ben Hammed de Construction",
  description: "EBHC est une entreprise spécialisée dans les travaux de génie civil, plomberie, menuiserie et peinture. Nous réalisons vos projets avec professionnalisme et qualité.",
  icons:{
    icon:'https://res.cloudinary.com/dmgfsayir/image/upload/c_pad,w_100/v1759798025/logo-modified_g9f8cq.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`antialiased`}>
        <Header></Header>
        {children}
        <Footer></Footer>
        <Analytics />
      </body>
    </html>
  );
}
