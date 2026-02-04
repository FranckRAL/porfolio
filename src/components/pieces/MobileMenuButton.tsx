"use client";

interface Props {
  isOpen: boolean;
  toggle: () => void;
}

export default function MobileMenuButton({ isOpen, toggle }: Props) {
  return (
    <button
      onClick={toggle}
      className="flex flex-col justify-center items-center md:hidden w-10 h-10 gap-1.5 z-50 group"
      aria-label="Toggle Menu"
    >
      <span
        className={`h-0.5 w-6 bg-primary transition-all duration-300 ${
          isOpen ? "rotate-45 translate-y-2" : ""
        }`}
      />
      <span
        className={`h-0.5 w-6 bg-primary transition-all duration-300 ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`h-0.5 w-6 bg-primary transition-all duration-300 ${
          isOpen ? "-rotate-45 -translate-y-2" : ""
        }`}
      />
    </button>
  );
}