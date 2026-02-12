import Link from "next/link";
import { NAV_LINKS, socialLinks } from "@/constants/constants";
import {useTranslations} from 'next-intl';


const Footer = () => {
  const currentYear = new Date().getFullYear();
  const t = useTranslations('Nav')



  return (
    <footer className="bg-bg-page  border-t border-primary/10 pt-16 pb-8 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-linear-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand & Mission */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-title font-bold text-primary">
              Franck<span className="text-text-main">.A</span>
            </Link>
            <p className="text-text-muted max-w-xs leading-relaxed">
              {t('description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-title font-bold text-lg mb-6 text-text-main">{t('navigation_title_footer')}</h4>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <Link 
                    href={link.path} 
                    className="text-text-muted hover:text-primary transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-primary mr-0 group-hover:mr-2 transition-all duration-300" />
                    {t(link.id)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          <div>
            <h4 className="font-title font-bold text-lg mb-6 text-text-main">{t('connect_footer')}</h4>
            <p className="text-sm text-text-muted mb-4">{t('social_intro_text')}</p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:-translate-y-1.5 transition-all duration-300 shadow-lg shadow-primary/5"
                    title={social.name}
                  >
                    <span className="sr-only">{social.name}</span>
                    <Icon size={20} strokeWidth={1.5} />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-primary/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-muted font-body">
          <p>© {currentYear} Franck Andritina. {t('copyright')}</p>
          <div className="flex items-center gap-1">
            <span>{t('final_word')}</span>
            <span className="text-primary animate-pulse">💙</span>
            <span>{t('in')} Madagascar</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;