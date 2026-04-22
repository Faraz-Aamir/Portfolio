import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const inter = Inter({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["900"],
});

export const metadata: Metadata = {
  title: "Faraz Aamir — Cybersecurity & Web Development",
  description:
    "Portfolio of Faraz Aamir. Cybersecurity student at FAST NUCES, web developer, and problem solver. I hack, code and create.",
  keywords: [
    "Faraz Aamir",
    "cybersecurity",
    "web developer",
    "portfolio",
    "FAST NUCES",
    "ethical hacking",
  ],
  authors: [{ name: "Faraz Aamir" }],
  openGraph: {
    title: "Faraz Aamir — Cybersecurity & Web Development",
    description: "I hack, code and create. Cybersecurity student & web developer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jetbrainsMono.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
