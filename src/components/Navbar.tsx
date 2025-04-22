"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "@/styles/navbar.module.css";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Companies", href: "/companies" },
  { name: "Services", href: "/services" },
  { name: "FAQs", href: "/faqs" },
  { name: "Jobs", href: "/jobs" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      {/* Top Banner */}
      <div className="bg-[#8A1D2F] text-white text-sm py-2 px-4 flex justify-between items-center">
        <span>Do something, Lead follow, or get out of the way</span>
        <div className="flex gap-4 text-sm">
          <a href="tel:+1234567890" className="hover:underline">
            +1 234 567 890
          </a>
          <span>|</span>
          <a href="mailto:info@yesgroups.com" className="hover:underline">
            info@yesgroups.com
          </a>
        </div>
      </div>

      {/* Main Nav */}
      <div className={styles.navWrapper}>
        {/* Logo only */}
        <Link href="/">
          <Image
            src="/home/logo.png"
            alt="YES Groups Logo"
            width={100}
            height={100}
            priority
          />
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[16px] font-medium text-gray-700 hover:text-[#8A1D2F] transition"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-orange-500 text-white text-sm px-4 py-2 rounded-md shadow hover:bg-orange-600 transition"
        >
          Get in Touch →
        </motion.a>
      </div>
    </header>
  );
}
