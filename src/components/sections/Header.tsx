"use client"; // Obligatoire car on utilise useState

import { useState, useEffect } from "react";
import Link from "next/link";
import { navLinks } from "@/constants/constants";
import NavLink from "@/components/pieces/NavLink";
import ThemeToggle from "@/components/pieces/ToggleTheme";
import MobileMenuButton from "@/components/pieces/MobileMenuButton";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

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
          {navLinks.map((link) => (
            <NavLink key={link.label} {...link} isActive={activeSection === link.path.replace("#", "")} />
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link href="#contact" className="hidden sm:block bg-primary text-white px-5 py-2 rounded-full font-bold">
            Hire me
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
        {navLinks.map((link) => (
          <div key={link.label} onClick={() => setIsMenuOpen(false)}>
            <NavLink {...link} isActive={activeSection === link.path.replace("#", "")} />
          </div>
        ))}
        <Link 
          href="#contact" 
          onClick={() => setIsMenuOpen(false)}
          className="bg-primary text-white px-8 py-3 rounded-full font-bold text-lg animate-pulse"
        >
          Hire me
        </Link>
      </div>
    </header>
  );
};

export default Header;