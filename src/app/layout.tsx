import type { Metadata } from "next";
import { Quicksand, Inter } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/pieces/ThemeProvider";
import { AuthProvider } from "@/components/providers/AuthProvider";
import BackToTop from "@/components/pieces/BackToTop";
import {headers} from "next/headers";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  preload: true,
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-title",
  display: "swap",
  preload: true,
});



export const metadata: Metadata = {
  title: {
    template: "%s",
    default: "Franck andritina | Web developer and software engineer",
  },
  description: "Fullstack web developer and software engineer portfolio",
};




export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const headerList = await headers();
  const locale = headerList.get('x-locale') || 'en';

  return (
    <html lang={locale} suppressHydrationWarning className="scroll-smooth">
      <body suppressHydrationWarning className={`${inter.variable} ${quicksand.variable} antialiased`}>
        <AuthProvider>
            <ThemeProvider> 
                {children}
                <BackToTop />
            </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}