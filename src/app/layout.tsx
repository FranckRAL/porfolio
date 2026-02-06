import type { Metadata } from "next";
import { Quicksand, Inter } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/pieces/ThemeProvider";
import BackToTop from "@/components/pieces/BackToTop";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});


const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-title",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Admin Abyss",
    default: "Franck andritina | Web developer and software engineer",
  },
  description: "Fullstack web developer and software engineer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body suppressHydrationWarning className={`${inter.variable} ${quicksand.variable} antialiased`}>
        <ThemeProvider>
          {children}
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}