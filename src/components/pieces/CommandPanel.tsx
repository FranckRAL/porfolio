import LanguageSwitcher from "./LanguageSwitcher";
import ToggleTheme from "./ToggleTheme";
import { Download } from "lucide-react";

const CommandPanel = () => {
  return (
    <div className="absolute top-2 right-2 z-50 flex gap-8 xl:gap-2">
      <a
            href="/assets/CV_RAKOTOMAVO_Franck_Developpeur_web_et_mobile.pdf"
            className="group flex items-center gap-2 text-text-main font-semibold hover:text-primary transition-colors py-2"
            download
            title="Download my CV"
            aria-label="Download my CV"
          >
            <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </a>
      <ToggleTheme />
      <LanguageSwitcher />
    </div>
  );
};

export default CommandPanel;
