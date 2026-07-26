"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";
import NavLink from "@/components/pieces/NavLink";
import ThemeToggle from "@/components/pieces/ToggleTheme";
import LanguageSwitcher from "@/components/pieces/LanguageSwitcher";
import MobileMenuButton from "@/components/pieces/MobileMenuButton";
import { useTranslations } from "next-intl";
import { Download } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const t = useTranslations("Nav");

  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      rootMargin: "-20% 0px -75% 0px",
      threshold: 0,
    });

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 w-full z-50 bg-bg-page/50 backdrop-blur-[5px] border-b border-primary/10 py-4">
      <div className="container relative flex justify-between items-center mx-auto px-6">
        <Link href="/" className="text-2xl font-title font-bold text-primary">
          Franck<span className="text-text-main">.A</span>
        </Link>

        <nav className="hidden lg:flex gap-8">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.id}
              {...link}
              isActive={activeSection === link.path.replace("#", "")}
            />
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <LanguageSwitcher />
          <a
            href="/assets/CV_RAKOTOMAVO_Franck_Developpeur_web_et_mobile.pdf"
            className="group flex items-center gap-2 text-text-main font-semibold hover:text-primary transition-colors py-2"
            download
            title="Download my CV"
            aria-label="Download my CV"
          >
            <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </a>

          <MobileMenuButton
            isOpen={isMenuOpen}
            toggle={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute w-full h-screen top-0 inset-0 bg-bg-page/90 backdrop-blur-lg flex flex-col items-center justify-center gap-8 transition-all duration-1000 ease-in-out md:hidden z-40 ${
          isMenuOpen ? "translate-x-0 " : "hidden translate-x-full"
        }`}
      >
        {NAV_LINKS.map((link) => (
          <div key={link.id} onClick={() => setIsMenuOpen(false)}>
            <NavLink
              {...link}
              isActive={activeSection === link.path.replace("#", "")}
            />
          </div>
        ))}
        <Link
          href="#contact"
          onClick={() => setIsMenuOpen(false)}
          className=" sm:col-span-2 flex items-center justify-center gap-2 bg-primary text-white text-base p-4 rounded-xl hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 active:scale-[0.98] group"
        >
          {t("cta_hire")}
        </Link>
      </div>
    </header>
  );
};

export default Header;
