"use client";

import { NAV_LINKS } from "@/constants";
import NavLink from "./NavLink";

const MobileNavigation = () => {
  return (
    <nav
      className="
        fixed bottom-0 left-1/2 z-50
        -translate-x-1/2
        w-[calc(100%-1.5rem)]
        max-w-md
        xl:hidden

        flex items-center justify-around
        px-2 py-2

        bg-bg-page/80
        backdrop-blur-md

        border border-primary/50
        rounded-t-2xl



        supports-[padding:max(0px)]:pb-[max(0.5rem,env(safe-area-inset-bottom))]
      "
    >
      {NAV_LINKS.map((link) => (
        <NavLink
          key={link.id}
          isMobile={true}
          {...link}
        />
      ))}
    </nav>
  );
};

export default MobileNavigation;