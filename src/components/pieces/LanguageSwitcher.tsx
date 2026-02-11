"use client";

import { useTransition } from "react";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { Languages, Loader2 } from "lucide-react";

export default function LanguageSwitcher() {
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const nextLocale = locale === "en" ? "fr" : "en";
    
    startTransition(() => {
      // On remplace la langue actuelle par la nouvelle tout en gardant la page
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <button
      onClick={toggleLanguage}
      disabled={isPending}
      className="relative flex items-center gap-2 px-3 py-1.5 rounded-full 
                 border border-primary/30 bg-bg-card/50 backdrop-blur-md
                 hover:border-primary hover:shadow-[0_0_15px_rgba(var(--color-primary),0.3)]
                 transition-all duration-300 group disabled:opacity-70"
      aria-label="Changer de langue"
    >
      {/* Icône animée */}
      {isPending ? (
        <Loader2 className="w-4 h-4 animate-spin text-primary" />
      ) : (
        <Languages className="w-4 h-4 text-primary group-hover:rotate-12 transition-transform" />
      )}

      {/* Texte de la langue */}
      <span className="text-xs font-bold uppercase tracking-widest">
        {locale === "en" ? "FR" : "EN"}
      </span>

      {/* Effet de lueur "Abysse" au survol */}
      <span className="absolute inset-0 rounded-full bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
    </button>
  );
}