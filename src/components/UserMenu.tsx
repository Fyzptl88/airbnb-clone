"use client";

import { useState, useRef, useEffect } from "react";
import { Menu, Globe, CircleUserRound } from "lucide-react";

export default function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex items-center gap-2.5" ref={menuRef}>
      <a
        href="#"
        className="hidden rounded-full px-4 py-3 text-sm font-semibold text-text-primary transition-colors duration-200 hover:bg-bg-hover focus-visible:bg-bg-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black lg:block"
      >
        Become a Host
      </a>

      <button
        className="hidden h-10 bg-gray-100 w-10 items-center justify-center rounded-full transition-colors duration-200 hover:bg-bg-hover focus-visible:bg-bg-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black lg:flex"
        aria-label="Choose a language"
      >
        <Globe className="h-5 w-5 text-[#222222]" strokeWidth={2} />
      </button>

      <button
        id="user-menu-button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 rounded-full border border-border bg-white py-[5px] pl-3 pr-[5px] shadow-sm transition-all duration-200 hover:shadow-[0_2px_4px_rgba(0,0,0,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="User menu"
      >
        <Menu className="h-4 w-4 text-[#222222]" strokeWidth={2.5} />

        <span className="flex h-[30px] w-[30px] items-center justify-center overflow-hidden rounded-full bg-text-secondary">
          <CircleUserRound className="h-5 w-5 text-white" strokeWidth={1.5} />
        </span>
      </button>

      {isOpen && (
        <div
          className="absolute right-0 top-[70px] z-50 w-60 rounded-2xl border border-border-light bg-white py-2 shadow-[0_2px_16px_rgba(0,0,0,0.12)]"
          role="menu"
        >
          <a
            href="#"
            className="block px-4 py-3 text-sm font-semibold text-text-primary transition-colors hover:bg-bg-hover focus-visible:bg-bg-hover focus-visible:outline-none"
            role="menuitem"
          >
            Sign up
          </a>
          <a
            href="#"
            className="block px-4 py-3 text-sm text-text-primary transition-colors hover:bg-bg-hover focus-visible:bg-bg-hover focus-visible:outline-none"
            role="menuitem"
          >
            Log in
          </a>
          <hr className="my-1 border-border-light" />
          <a
            href="#"
            className="block px-4 py-3 text-sm text-text-primary transition-colors hover:bg-bg-hover focus-visible:bg-bg-hover focus-visible:outline-none"
            role="menuitem"
          >
            Airbnb your home
          </a>
          <a
            href="#"
            className="block px-4 py-3 text-sm text-text-primary transition-colors hover:bg-bg-hover focus-visible:bg-bg-hover focus-visible:outline-none"
            role="menuitem"
          >
            Help Center
          </a>
        </div>
      )}
    </div>
  );
}
