import Link from "next/link";
import { navLinks } from "@/constants/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-page border-t border-primary/10 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand & Mission */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-title font-bold text-primary">
              Franck<span className="text-text-main">.A</span>
            </Link>
            <p className="text-text-muted max-w-xs leading-relaxed">
              Building digital experiences with a focus on quality, 
              collaboration, and scalable architecture.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-title font-bold text-lg mb-6 text-text-main">Navigation</h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.path} 
                    className="text-text-muted hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-title font-bold text-lg mb-6 text-text-main">Connect</h4>
            <div className="flex gap-4">
              {/* Replace # with your actual links */}
              {['LinkedIn', 'GitHub', 'Twitter'].map((platform) => (
                <Link
                  key={platform}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <span className="sr-only">{platform}</span>
                  {/* You can insert icons here */}
                  {platform[0]}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-muted font-body">
          <p>© {currentYear} Franck Andritina. All rights reserved.</p>
          <p>Designed & Built with <span className="text-primary">Passion</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;