"use client";
import { NAV_LINKS } from "@/constants";
import NavLink from "./NavLink";


const MobileNavigation = () => {
  return (
    <nav className="flex justify-center items-center gap-6 fixed bottom-2 md:bottom-6 lg:bottom-12 left-1/2 -translate-x-1/2 z-50 px-3 py-1 rounded-md bg-primary/10 xl:hidden">
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.id}
            isMobile = {true}
            {...link}
          />
        ))}
    </nav>
  )
}

export default MobileNavigation