"use client";

import { motion } from "framer-motion";
import { BloodDonationForm } from "./components/BloodDonationForm";
import { ActivitiesAccordion } from "./components/ActivitiesAccordion";

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

export default function TrustPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Left Navigation */}
      <nav className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 p-6">
        <div className="space-y-4">
          <a href="#overview" className="block text-[#8A1D2F] font-medium">
            Overview
          </a>
          <a
            href="#activities"
            className="block text-gray-600 hover:text-[#8A1D2F]"
          >
            Activities
          </a>
          <a
            href="#donate"
            className="block text-gray-600 hover:text-[#8A1D2F]"
          >
            Donate
          </a>
          <a
            href="#blood-donation"
            className="block text-gray-600 hover:text-[#8A1D2F]"
          >
            Blood Donation
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="ml-64 p-8">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">YES Trust</h1>
          <p className="text-xl text-gray-600 mb-6">
            A Registered Trust Since 2004
          </p>
          <p className="text-gray-700 max-w-3xl">
            YES Trust has been at the forefront of social initiatives in
            Karnataka for nearly two decades. Our mission is to create positive
            change through sustainable community development programs.
          </p>
        </motion.section>

        {/* Donation Information */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          id="donate"
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Support Our Cause
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <blockquote className="border-l-4 border-[#8A1D2F] pl-4 mb-4">
              <p className="text-gray-700">
                All donations to YES Trust are eligible for 80G tax deduction
                benefits under the Income Tax Act.
              </p>
            </blockquote>
            <p className="text-gray-600 mb-4">
              Your contribution helps us continue our mission of community
              service and social development.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Bank Details
              </h3>
              <p className="text-gray-700">Account Name: YES Trust</p>
              <p className="text-gray-700">Account Number: XXXX XXXX XXXX</p>
              <p className="text-gray-700">IFSC Code: XXXX0000XXX</p>
            </div>
          </div>
        </motion.section>

        {/* Activities Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          id="activities"
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Our Activities
          </h2>
          <ActivitiesAccordion activities={activities} />
        </motion.section>

        {/* Blood Donation Form */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          id="blood-donation"
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Blood Donation Registration
          </h2>
          <BloodDonationForm />
        </motion.section>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <img
                src="/trust/logo.png"
                alt="YES Trust Logo"
                className="h-12 w-auto mb-4"
              />
              <p className="text-gray-600 max-w-md">
                Empowering communities through sustainable development and
                social initiatives.
              </p>
            </div>
            <div className="text-right">
              <p className="text-gray-700 font-medium">Contact Us</p>
              <p className="text-gray-600">contact@yestrust.org</p>
              <p className="text-gray-600">+91 XXXXX XXXXX</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
