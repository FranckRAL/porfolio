import type { Metadata } from "next";
import SideBar from "@/components/admin/SideBar";
import ToggleTheme from "@/components/pieces/ToggleTheme";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import {notFound} from 'next/navigation';
import OceanBackground from '@/components/pieces/OceanBackground'

export const metadata: Metadata = {
  title: {
    template: "%s | Administration Page",
    default: "Dashboard | Portfolio Admin",
  },
  description:
    "Admin dashboard for managing projects, skills, and contact messages.",
};


type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};

export default async function AdminLayout({
  children,
  params
}: Props) {

    const {locale} = await params;
  
    if (!hasLocale(routing.locales, locale)) {
      notFound();
    }
  
  return (
    <>
      <div className="flex min-h-screen  text-text-main ">
        <OceanBackground />
        <SideBar />
        <main className="container flex-1 p-8 overflow-y-auto mx-auto">
          <NextIntlClientProvider locale={locale}>
            {children}
          </NextIntlClientProvider>
        </main>
        <div className="fixed bottom-4 right-4 z-50 bg-bg-card rounded-full shadow-lg">
          <ToggleTheme />
        </div>
      </div>
    </>
  );
}
