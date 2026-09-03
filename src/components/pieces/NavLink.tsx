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
    <Link
        href={path}
        className={`
          group
          flex min-w-16 flex-1
          flex-col items-center justify-center
          gap-1
          py-1.5

          text-xs font-medium
          transition-all duration-200

          dark:text-white

          ${isActive
            ? "text-primary"
            : "text-muted hover:text-primary"
          }
        `}
      >
        {/* Active indicator */}
        <span
          className={`
            flex h-8 min-w-16
            items-center justify-center
            rounded-full
            transition-all duration-200

            ${isActive
              ? "bg-primary/15 dark:bg-white/10"
              : "bg-transparent"
            }
          `}
        >
          <span
            className={`
              transition-transform duration-200
              ${isActive ? "scale-110" : "group-hover:scale-105"}
            `}
          >
            <Icon className="w-4 h-4"/>
          </span>
        </span>

        {/* Label */}
        <span>{t(id)}</span>
      </Link>
  ) : (
    <Link
      href={path}
      className={`relative font-decorative p-4 flex gap-2 items-center text-text-main/80 rounded-md hover:text-primary hover:bg-primary/20 text-2xl font-semibold transition-colors
         ${isActive ? "text-primary  bg-primary/20 " : ""}`}
    >
      <Icon className="w-6 h-6 " />
      {t(id)}
    </Link>
  );
};

export default NavLink;
