import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.scss";

const plusJakarta = Plus_Jakarta_Sans({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Khidmat-e-Khalq",
};

import Header from "../components/headerSection/Header";
import Footer from "../components/footerSection/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={plusJakarta.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
