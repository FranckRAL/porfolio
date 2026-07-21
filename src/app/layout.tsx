import type { Metadata } from "next";
import { Quicksand, Inter } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/pieces/ThemeProvider";
import BackToTop from "@/components/pieces/BackToTop";
import { headers } from "next/headers";
import { cookies } from "next/headers";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { NextIntlClientProvider } from "next-intl";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headerList = await headers();
  const locale = headerList.get("x-locale") || "en";
  const cookieStore = await cookies();

  const theme =
    (cookieStore.get("theme")?.value as "light" | "dark") ?? "light";

  
  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${theme === "dark" ? "dark" : ""} scroll-smooth`}
    >
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${quicksand.variable} antialiased`}
      >
        <ThemeProvider initialTheme={theme}>
          <NextIntlClientProvider locale={locale}>
          <GoogleOAuthProvider
            clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}
          >
            {children}
            <BackToTop />
          </GoogleOAuthProvider>
          </NextIntlClientProvider>
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
