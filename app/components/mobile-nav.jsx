"use client";

import Link from "next/link";
import { useState } from "react";

export default function MobileNav({ links }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 text-2xl text-slate-700"
      >
        {isOpen ? "×" : "☰"}
      </button>

      {isOpen && (
        <nav className="absolute left-0 right-0 top-full z-10 border-t border-slate-200 bg-white px-6 py-4 shadow-md">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </div>
  );
}
