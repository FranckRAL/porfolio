"use client";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";
import NavLink from "@/components/pieces/NavLink";
import { useTranslations } from "next-intl";
import { socialLinks } from "@/constants";

const AsideNavigation = () => {
  const t = useTranslations("Nav");
  const currentYear = new Date().getFullYear();
  

  return (
    <aside className="h-full absolute top-0 left-0 bg-white -translate-full xl:translate-0 z-20 xl:relative transition-all duration-300">
      <div className="relative px-6 py-8 w-60 xl:w-auto h-full border-e border-red-400">

        {/* navbrand */}
        <p className=" text-gray-400 text-sm mb-10  hidden xl:flex xl:flex-col gap-1">
        <Link
          href="/"
          className=" font-handwritten text-4xl  font-bold text-primary"
        >
          Franck<span className="text-text-main">.A</span>
        </Link>
        
        <span className="relative inline-block max-w-50">
          <mark className="bg-yellow-300/50 rounded-md px-1 py-0.5 relative z-10">
            <em className="relative z-10 font-decorative  text-wrap text-text-muted  text-center text-xs xl:text-lg">
              {t("post_title")}
            </em>
          </mark>
        </span>
      </p>

      {/* Navigation links */}
      <nav className="flex flex-col gap-2">
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.id}
            {...link}
          />
        ))}
      </nav>

      {/* footer and social links */}
      <footer className="absolute bottom-0 left-0 right-0 hidden xl:block">
        <address className="flex justify-center items-center flex-nowrap gap-3 ">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 text-primary/90 hover:text-primary/80 hover:scale-105 transition-all duration-300"
                title={social.name}
              >
                <span className="sr-only">{social.name}</span>
                <Icon size={23} strokeWidth={1.5} />
              </Link>
            );
          })}
        </address>
        <p className="text-text-muted text-md text-center font-decorative">
          &copy;<time dateTime={currentYear.toString()}>{currentYear}</time> Franck Andritina. {t("copyright")}
        </p>
      </footer>
      </div>
    </aside>
  );
};

export default AsideNavigation;
