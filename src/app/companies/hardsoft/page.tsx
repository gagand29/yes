"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// Types for our accordion items
type ServiceItem = {
  id: string;
  title: string;
  summary: string;
  details: string;
};

const services: ServiceItem[] = [
  {
    id: "desktop",
    title: "Desktop Applications",
    summary:
      "Custom desktop solutions that streamline your business operations.",
    details:
      "Our desktop application development services focus on creating robust, user-friendly software tailored to your specific business needs. We utilize modern frameworks and technologies to ensure optimal performance, security, and scalability.",
  },
  {
    id: "enterprise",
    title: "Enterprise Applications",
    summary: "Scalable enterprise solutions for large-scale operations.",
    details:
      "We develop comprehensive enterprise applications that integrate seamlessly with your existing infrastructure. Our solutions are built to handle complex business processes, high data volumes, and multiple user roles.",
  },
  {
    id: "migration",
    title: "System Migration",
    summary: "Seamless transition of your legacy systems to modern platforms.",
    details:
      "Our migration services ensure a smooth transition from legacy systems to modern platforms while preserving data integrity and minimizing downtime. We follow a systematic approach to reduce risks and ensure business continuity.",
  },
  {
    id: "maintenance",
    title: "Software Maintenance",
    summary: "Ongoing support and maintenance for optimal performance.",
    details:
      "We provide comprehensive maintenance services to keep your software running smoothly. This includes regular updates, bug fixes, performance optimization, and technical support to ensure your systems remain efficient and secure.",
  },
  {
    id: "testing",
    title: "Quality Assurance",
    summary: "Rigorous testing to ensure reliable software delivery.",
    details:
      "Our QA team employs comprehensive testing methodologies to ensure your software meets the highest quality standards. We conduct automated and manual testing, performance testing, and security assessments.",
  },
  {
    id: "web",
    title: "Web Applications",
    summary: "Modern web solutions for enhanced digital presence.",
    details:
      "We create responsive, feature-rich web applications using cutting-edge technologies. Our solutions are designed for optimal user experience across all devices while maintaining high performance and security standards.",
  },
];

const sections = [
  { id: "overview", label: "Overview" },
  { id: "services", label: "Services" },
  { id: "what-we-do", label: "What We Do" },
  { id: "how-we-do", label: "How We Do" },
  { id: "why-us", label: "Why Us" },
  { id: "contact", label: "Contact" },
];

export default function HardSoftPage() {
  const [activeSection, setActiveSection] = useState("overview");
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const [expandedDetails, setExpandedDetails] = useState<string[]>([]);

  const toggleService = (id: string) => {
    setExpandedService(expandedService === id ? null : id);
  };

  const toggleDetails = (id: string) => {
    setExpandedDetails(
      expandedDetails.includes(id)
        ? expandedDetails.filter((item) => item !== id)
        : [...expandedDetails, id]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="bg-[#8A1D2F] text-white pt-28 md:pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            YES HardSoft Solutions Inc
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-200 max-w-2xl"
          >
            Empowering businesses through innovative software solutions and
            cutting-edge technology.
          </motion.p>
        </div>
      </header>

      {/* Navigation - Mobile */}
      <nav className="lg:hidden sticky top-0 bg-white shadow-md z-50">
        <select
          value={activeSection}
          onChange={(e) => {
            setActiveSection(e.target.value);
            document
              .getElementById(e.target.value)
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="w-full p-4 text-gray-700 bg-white border-0 focus:ring-2 focus:ring-[#8A1D2F]"
        >
          {sections.map((section) => (
            <option key={section.id} value={section.id}>
              {section.label}
            </option>
          ))}
        </select>
      </nav>

      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-4 py-8 gap-8">
        {/* Navigation - Desktop */}
        <nav className="hidden lg:block sticky top-24 h-fit bg-white rounded-lg shadow-sm p-4 w-64">
          <ul className="space-y-2">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => {
                    setActiveSection(section.id);
                    document
                      .getElementById(section.id)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                    activeSection === section.id
                      ? "bg-[#8A1D2F] text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Main Content */}
        <main className="flex-1 space-y-12">
          {/* Overview Section */}
          <section id="overview" className="scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Overview</h2>
            <p className="text-gray-600 leading-relaxed">
              YES HardSoft Solutions Inc is a leading software development
              company specializing in creating custom solutions for businesses
              of all sizes. With years of experience and a team of skilled
              professionals, we deliver high-quality software that drives
              business growth and efficiency.
            </p>
          </section>

          {/* Services Section */}
          <section id="services" className="scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Software Development Services
            </h2>
            <div className="space-y-4">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleService(service.id)}
                    className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-50"
                  >
                    <span className="font-semibold text-gray-800">
                      {service.title}
                    </span>
                    <svg
                      className={`w-5 h-5 transform transition-transform ${
                        expandedService === service.id ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {expandedService === service.id && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 bg-gray-50">
                          <p className="text-gray-600 mb-4">
                            {service.summary}
                          </p>
                          <div className="space-y-4">
                            <button
                              onClick={() => toggleDetails(service.id)}
                              className="text-[#8A1D2F] hover:text-[#6A152F] font-medium"
                            >
                              {expandedDetails.includes(service.id)
                                ? "Read less"
                                : "Read more"}
                            </button>
                            <AnimatePresence>
                              {expandedDetails.includes(service.id) && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                >
                                  <p className="text-gray-600">
                                    {service.details}
                                  </p>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </section>

          {/* What We Do Section */}
          <section id="what-we-do" className="scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              What We Do
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">
                  Custom Development
                </h3>
                <p className="text-gray-600">
                  We create tailored software solutions that perfectly align
                  with your business objectives and operational requirements.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">
                  Technology Consulting
                </h3>
                <p className="text-gray-600">
                  Our experts provide strategic guidance to help you make
                  informed decisions about your technology investments.
                </p>
              </div>
            </div>
          </section>

          {/* How We Do Section */}
          <section id="how-we-do" className="scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              How We Do It
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#8A1D2F] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Discovery & Planning
                  </h3>
                  <p className="text-gray-600">
                    We begin with a thorough analysis of your requirements and
                    create a detailed project roadmap.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#8A1D2F] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Design & Development
                  </h3>
                  <p className="text-gray-600">
                    Our team follows agile methodologies to ensure efficient
                    development and regular updates.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#8A1D2F] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Testing & Deployment
                  </h3>
                  <p className="text-gray-600">
                    Rigorous testing ensures your solution meets quality
                    standards before deployment.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Why Us Section */}
          <section id="why-us" className="scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Why Choose Us
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Expertise</h3>
                <p className="text-gray-600">
                  Our team brings years of experience and deep technical
                  knowledge to every project.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Innovation</h3>
                <p className="text-gray-600">
                  We stay ahead of technology trends to deliver cutting-edge
                  solutions.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Support</h3>
                <p className="text-gray-600">
                  Dedicated support and maintenance ensure your software
                  continues to perform optimally.
                </p>
              </div>
            </div>
          </section>

          {/* Contact CTA Section */}
          <section id="contact" className="scroll-mt-24 mb-16">
            <div className="bg-[#8A1D2F] text-white rounded-lg p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl mb-8">
                Let's discuss how our software solutions can help you achieve
                your goals.
              </p>
              <Link
                href="/contact?source=hardsoft"
                className="inline-block bg-white text-[#8A1D2F] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Request a Consultation
              </Link>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
