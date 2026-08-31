"use client";
import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import ToggleTheme from "./ToggleTheme";
import { Download } from "lucide-react";

const CommandPanel = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute top-2 right-2  z-50 flex flex-row-reverse gap-6 overflow-x-hidden w-full">
      <button
        className="text-muted-foreground hover:text-foreground flex justify-center items-center w-10 h-10 p-1 rounded-full border border-primary/50 z-50 transition-all duration-500 backdrop-blur-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          >
            <line x1="6" y1="6" x2="18" y2="18" />
            <line x1="18" y1="6" x2="6" y2="18" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-5"
          >
            <circle cx="5" cy="12" r="2" />
            <circle cx="12" cy="12" r="2" />
            <circle cx="19" cy="12" r="2" />
          </svg>
        )}
      </button>
      
      <div
        className={`flex gap-6 xl:gap-2 transition-all duration-300 ${isOpen ? " translatex-0" : " translate-x-[300%]"}`}
      >
        <a
          href="/assets/CV_RAKOTOMAVO_Franck_Developpeur_web_et_mobile.pdf"
          className="group flex items-center gap-2 text-text-main font-semibold  transition-colors p-2 "
          download
          title="Download my CV"
          aria-label="Download my CV"
        >
          <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
        </a>
        
        <ToggleTheme />
        <LanguageSwitcher />
      </div>
    </div>
  );
};

export default CommandPanel;
