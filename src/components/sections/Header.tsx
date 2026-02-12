"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/constants/constants";
import NavLink from "@/components/pieces/NavLink";
import ThemeToggle from "@/components/pieces/ToggleTheme";
import LanguageSwitcher from "@/components/pieces/LanguageSwitcher";
import MobileMenuButton from "@/components/pieces/MobileMenuButton";
import {useTranslations} from 'next-intl';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const t = useTranslations('Nav')

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
    threshold: 0 
  });

  const sections = document.querySelectorAll("section[id]");
  sections.forEach((section) => observer.observe(section));

  return () => observer.disconnect();
}, []);

  return (
    <header className="sticky top-0 w-full z-50 bg-bg-page/80 backdrop-blur-md border-b border-primary/10 py-4">
      <div className="container relative flex justify-between items-center mx-auto px-6">
        
        <Link href="/" className="text-2xl font-title font-bold text-primary">
          Franck<span className="text-text-main">.A</span>
        </Link>

        <nav className="hidden md:flex gap-8">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.id} {...link} isActive={activeSection === link.path.replace("#", "")} />
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <LanguageSwitcher />
          <Link href="#contact" className="hidden sm:block w-full sm:w-auto bg-primary text-white px-5 py-2 rounded-full font-bold text-lg hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 active:scale-95 text-center">
            {t('cta_hire')}
          </Link>
          
          <MobileMenuButton isOpen={isMenuOpen} toggle={() => setIsMenuOpen(!isMenuOpen)} />
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
            <NavLink {...link} isActive={activeSection === link.path.replace("#", "")} />
          </div>
        ))}
        <Link 
          href="#contact" 
          onClick={() => setIsMenuOpen(false)}
          className="w-full sm:w-auto bg-primary text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 active:scale-95 text-center"
        >
          {t('cta_hire')}
        </Link>
      </div>
    </header>
  );
};

export default Header;