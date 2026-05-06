import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";
import type { ReactNode } from "react";
import { AuthProvider } from "../components/auth/AuthContext";

const headingFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "600", "700"], // 🔥 REQUIRED
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}