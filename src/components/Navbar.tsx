"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const companies = [
  { name: "YES HardSoft Solutions Inc", href: "/companies/hardsoft" },
  { name: "YES Trust", href: "/companies/trust" },
  { name: "YES Auto Needs", href: "/companies/auto" },
  { name: "YES Finance", href: "/companies/finance" },
];

const navLinks = [
  { href: "/", label: "Home" },
  {
    label: "Companies",
    dropdown: true,
    items: companies,
  },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 md:top-10 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="flex items-center space-x-2 md:space-x-3">
              <Image
                src="/home/logoR.png"
                alt="YES Groups Logo"
                width={40}
                height={40}
                className="rounded-full w-8 h-8 md:w-10 md:h-10"
              />
              <span className="font-bold text-lg md:text-xl text-[#8A1D2F] whitespace-nowrap">
                YES Groups
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group">
                {link.dropdown ? (
                  <button
                    onMouseEnter={() => setActiveDropdown(link.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    className={`px-3 py-2 text-base lg:text-lg font-bold tracking-wide transition-colors inline-flex items-center space-x-2 ${
                      activeDropdown === link.label
                        ? "text-[#8A1D2F]"
                        : "text-gray-700 hover:text-[#8A1D2F]"
                    }`}
                  >
                    <span>{link.label}</span>
                    <svg
                      className={`w-5 h-5 transition-transform ${
                        activeDropdown === link.label ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                ) : (
                  <Link
                    href={link.href!}
                    className={`px-3 py-2 text-base lg:text-lg font-bold tracking-wide transition-colors ${
                      pathname === link.href
                        ? "text-[#8A1D2F]"
                        : "text-gray-700 hover:text-[#8A1D2F]"
                    }`}
                  >
                    {link.label}
                    {pathname === link.href && (
                      <motion.div
                        layoutId="underline"
                        className="absolute left-0 right-0 bottom-0 h-0.5 bg-[#8A1D2F]"
                      />
                    )}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {link.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2"
                        onMouseEnter={() => setActiveDropdown(link.label)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        {link.items?.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block px-4 py-2.5 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-[#8A1D2F]"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg -mr-2"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-gray-600 transition-transform ${
                  isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-gray-600 transition-opacity ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-gray-600 transition-transform ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden pt-16"
          >
            <div
              className="absolute inset-0 bg-black/20"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="absolute right-0 top-0 bottom-0 w-64 bg-white shadow-xl"
            >
              <div className="p-5 pt-6 space-y-3">
                {navLinks.map((link) =>
                  link.dropdown ? (
                    <div key={link.label} className="space-y-2">
                      <h3 className="text-sm font-semibold text-gray-400 px-2">
                        {link.label}
                      </h3>
                      {link.items?.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-2 px-2 text-sm font-medium text-gray-600 hover:text-[#8A1D2F]"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      key={link.label}
                      href={link.href!}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block py-2 px-2 text-sm font-bold ${
                        pathname === link.href
                          ? "text-[#8A1D2F]"
                          : "text-gray-600 hover:text-[#8A1D2F]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
