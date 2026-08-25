"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import { boolean } from "zod";

interface NavLinkProps {
  id: string;
  path: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  isMobile?: boolean;
}

const NavLink = ({ id, path, Icon, isMobile }: NavLinkProps) => {
  const t = useTranslations("Nav");
  const pathname = usePathname();

  const normalizedPathname = pathname.replace(/^\/(en|fr)/, "");
  console.log("normalizedPathname", normalizedPathname);

  const isActive =
    normalizedPathname === path || normalizedPathname.startsWith(`${path}/`);
  console.log(`isActive for path "${path}":`, isActive);

  return isMobile ? (
    <Link href={path} className={`flex justify-center rounded-md items-center hover:bg-primary/20 p-2 text-primary 
    ${isActive ? "text-primary  bg-primary/20 " : "" }`} aria-label={t(id)}>
      <Icon className="w-12 h-12 " />
    </Link>
  ) : (
    <Link
      href={path}
      className={`relative p-4 flex gap-2 items-center text-text-main/80 rounded-md hover:text-primary hover:bg-primary/20 text-lg font-semibold transition-colors
         ${isActive ? "text-primary  bg-primary/20 " : ""}`}
    >
      <Icon className="w-6 h-6 " />
      {t(id)}
    </Link>
  );
};

export default NavLink;
