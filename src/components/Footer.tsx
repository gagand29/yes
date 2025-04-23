"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const footerLinks = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Contact", href: "/contact" },
      { label: "Careers", href: "/jobs" },
      { label: "FAQs", href: "/faqs" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Web Development", href: "/services#web" },
      { label: "Software Consulting", href: "/services#consulting" },
      { label: "UI/UX Design", href: "/services#design" },
      { label: "IT Staffing", href: "/services#staffing" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "LinkedIn", href: "https://linkedin.com" },
      { label: "Twitter", href: "https://twitter.com" },
      { label: "Facebook", href: "https://facebook.com" },
      { label: "Instagram", href: "https://instagram.com" },
    ],
  },
];

const companies = [
  { href: "/companies/hardsoft", label: "YES HardSoft Solutions" },
  { href: "/companies/trust", label: "YES Trust" },
  { href: "/companies/auto", label: "YES Auto Needs" },
  { href: "/companies/finance", label: "YES Finance" },
];

export default function Footer() {
  return (
    <footer className="bg-[#8A1D2F] text-white">
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/home/logoR.png"
                alt="YES Groups Logo"
                width={40}
                height={40}
                className="rounded-full bg-white"
              />
              <h3 className="text-xl font-bold">YES Groups</h3>
            </div>
            <p className="text-gray-200 mb-4 max-w-md">
              Youth Effort for Society — an organization committed to excellence
              through innovation, skill, and purpose.
            </p>
            <div className="space-y-2 text-gray-200">
              <p className="flex items-center gap-2">
                <span>📧</span>
                <a
                  href="mailto:info@yesgroups.com"
                  className="hover:text-white transition-colors"
                >
                  info@yesgroups.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span>📱</span>
                <a
                  href="tel:+1234567890"
                  className="hover:text-white transition-colors"
                >
                  +1 234 567 890
                </a>
              </p>
            </div>
          </motion.div>

          {/* Links */}
          {footerLinks.map((section, idx) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-200 hover:text-white transition-colors inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Companies */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-semibold mb-4">Our Companies</h3>
            <ul className="space-y-2">
              {companies.map((company) => (
                <li key={company.href}>
                  <Link
                    href={company.href}
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    {company.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="mt-1 flex-shrink-0" />
                <span>
                  3626 Silverside Road,
                  <br />
                  Wilmington, DE 19810
                  <br />
                  USA
                </span>
              </li>
              <li>
                <a
                  href="tel:+16096320397"
                  className="flex items-center space-x-3 hover:text-white transition-colors"
                >
                  <FaPhone />
                  <span>(001)-609-632-0397</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@yesgroups.net"
                  className="flex items-center space-x-3 hover:text-white transition-colors"
                >
                  <FaEnvelope />
                  <span>info@yesgroups.net</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-200 text-sm">
              © {new Date().getFullYear()} YES HardSoft Solutions, Inc. All
              rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-200">
              <Link
                href="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <span>•</span>
              <Link
                href="/terms"
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
