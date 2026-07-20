import Footer from "@/app/components/shared/Footer";
import Header from "@/app/components/shared/Header";

import "./globals.css";
import { Toaster } from "sonner";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
          <Toaster
    richColors
    position="top-right"
  />
        <Footer />
      </body>
    </html>
  );
}