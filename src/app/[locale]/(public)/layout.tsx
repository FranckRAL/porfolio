import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import LocaleSync from "@/components/pieces/LocaleSync";
import AsideNavigation from "@/components/pieces/AsideNavigation";
import BindingRing from "@/components/pieces/BindingRing";
import CommandPanel from "@/components/pieces/CommandPanel";
import MobileNavigation from "@/components/pieces/MobileNavigation";


export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title").concat(" | Franck Andritina"),
    description: t("description"),
  };
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function PublicLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }


  return (
    <NextIntlClientProvider locale={locale}>
      <LocaleSync />
      <div className="bg-bg-page min-h-screen flex items-center justify-center p-1 md:p-8 lg:p-10">
        <div className="relative max-w-7xl  mx-auto bg-white shadow-2xl rounded-r-lg overflow-hidden flex">
          <BindingRing />
          <MobileNavigation />
          <div className="flex justify-center items-center m-4 w-full relative overflow-hidden">
            <AsideNavigation/>
            <div className="flex-1 w-full h-full bg-white  shadow-md relative z-10 px-2 paper">
              <CommandPanel/>
              {children}
            </div>
          </div>
        </div>
      </div>
    </NextIntlClientProvider>
  );
}
