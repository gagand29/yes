import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

// ✅ Set tab title and description
export const metadata = {
  title: "YES Groups",
  description: "YES Groups - Empowering Businesses and Communities",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <TopBar />
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
