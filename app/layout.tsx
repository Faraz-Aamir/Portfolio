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
    "Next.js",
    "full-stack developer",
    "Islamabad",
  ],
  authors: [{ name: "Faraz Aamir" }],
  creator: "Faraz Aamir",
  metadataBase: new URL("https://farazaamir.vercel.app"),
  openGraph: {
    title: "Faraz Aamir — Cybersecurity & Web Development",
    description: "I hack, code and create. Cybersecurity student & web developer.",
    type: "website",
    url: "https://farazaamir.vercel.app",
    siteName: "Faraz Aamir Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Faraz Aamir — Cybersecurity & Web Development",
    description: "I hack, code and create. Cybersecurity student & web developer.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
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
      data-theme="dark"
    >
      <head>
        {/* Prevent theme flash: set data-theme before React hydrates */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'light' || theme === 'dark') {
                    document.documentElement.setAttribute('data-theme', theme);
                  } else {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
