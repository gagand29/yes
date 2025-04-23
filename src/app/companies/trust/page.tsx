"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BloodDonationForm } from "./components/BloodDonationForm";
import { ActivitiesAccordion } from "./components/ActivitiesAccordion";
import Link from "next/link";

const activities = [
  {
    id: "1",
    title: "Tree Planting Initiative",
    location: "Bangalore Urban Area",
    description:
      "Regular tree planting drives to increase green cover in urban areas. We work with local communities and schools to create awareness about environmental conservation.",
    image: "/trust/planting.jpg",
  },
  {
    id: "2",
    title: "Blood Donation Camps",
    location: "Multiple Locations",
    description:
      "Organizing blood donation camps in partnership with leading hospitals. Our network of regular donors helps save lives during emergencies.",
    image: "/trust/blood-donation.jpg",
  },
  {
    id: "3",
    title: "Education Support",
    location: "Rural Karnataka",
    description:
      "Providing educational support to underprivileged children through scholarships, books, and learning materials. Supporting digital literacy initiatives.",
    image: "/trust/education.jpg",
  },
];

const sections = [
  { id: "overview", label: "Overview" },
  { id: "activities", label: "Activities" },
  { id: "donate", label: "Donate" },
  { id: "blood-donation", label: "Blood Donation" },
  { id: "contact", label: "Contact" },
];

export default function TrustPage() {
  const [activeSection, setActiveSection] = useState("overview");

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
            YES Trust
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-200 max-w-2xl"
          >
            A Registered Trust Since 2004 - Creating positive change through sustainable community development programs.
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
                      : "text-white hover:bg-[#8A1D2F]"
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
            <div className="bg-white rounded-lg shadow-sm p-6">
              <p className="text-gray-600 text-lg mb-6">
                YES Trust has been at the forefront of social initiatives in Karnataka 
                for nearly two decades. Our mission is to create positive change through 
                sustainable community development programs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800">Our Impact</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <span className="text-[#8A1D2F]">✓</span>
                      Environmental Conservation
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#8A1D2F]">✓</span>
                      Healthcare Support
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#8A1D2F]">✓</span>
                      Education Initiatives
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800">Our Reach</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <span className="text-[#8A1D2F]">✓</span>
                      Multiple Cities
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#8A1D2F]">✓</span>
                      Rural Communities
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#8A1D2F]">✓</span>
                      Educational Institutions
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Activities Section */}
          <section id="activities" className="scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Activities</h2>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <ActivitiesAccordion activities={activities} />
            </div>
          </section>

          {/* Donation Section */}
          <section id="donate" className="scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Support Our Cause</h2>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <blockquote className="border-l-4 border-[#8A1D2F] pl-4 mb-6">
                <p className="text-gray-700">
                  All donations to YES Trust are eligible for 80G tax deduction benefits 
                  under the Income Tax Act.
                </p>
              </blockquote>
              <p className="text-gray-600 mb-6">
                Your contribution helps us continue our mission of community service 
                and social development.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Bank Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-700">Account Name: YES Trust</p>
                    <p className="text-gray-700">Account Number: XXXX XXXX XXXX</p>
                    <p className="text-gray-700">IFSC Code: XXXX0000XXX</p>
                  </div>
                  <div className="flex items-center justify-end">
                    <Link
                      href="/contact?source=trust"
                      className="inline-flex items-center px-6 py-3 bg-[#8A1D2F] text-white rounded-lg transition-colors"
                    >
                      Contact for Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Blood Donation Section */}
          <section id="blood-donation" className="scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Blood Donation Registration</h2>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <BloodDonationForm />
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="scroll-mt-24 mb-16">
            <div className="bg-[#8A1D2F] text-white rounded-lg p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
              <p className="text-xl mb-8">
                Join us in our mission to create positive change in communities.
              </p>
              <Link
                href="/contact?source=trust"
                className="inline-block bg-[#8A1D2F] text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Involved
              </Link>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
