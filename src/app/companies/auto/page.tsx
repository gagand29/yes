"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaTruck, FaCreditCard, FaHeadset } from "react-icons/fa";

const serviceHighlights = [
  {
    icon: <FaTruck className="w-8 h-8" />,
    title: "Fast Shipping",
    description: "5–7 Days Standard Delivery\nExpress Options Available",
  },
  {
    icon: <FaCreditCard className="w-8 h-8" />,
    title: "Secure Payment",
    description: "Credit Cards, PayPal\nBank Transfer Available",
  },
  {
    icon: <FaHeadset className="w-8 h-8" />,
    title: "24/7 Support",
    description: "Phone: (001)-609-632-0397\nMon-Fri: 9AM-6PM EST",
  },
];

export default function AutoNeedsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#8A1D2F] text-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            YES AutoNeeds
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Empowering vehicle owners with quality used parts and expert
            solutions
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Navigation */}
          <div className="md:w-64 flex-shrink-0">
            <nav className="space-y-2">
              <Link
                href="#overview"
                className="block w-full px-6 py-3 text-left text-white bg-[#8A1D2F] rounded-md font-medium"
              >
                Overview
              </Link>
              <Link
                href="#services"
                className="block w-full px-6 py-3 text-left text-gray-700 hover:bg-gray-100 rounded-md font-medium"
              >
                Services
              </Link>
              <Link
                href="#what-we-do"
                className="block w-full px-6 py-3 text-left text-gray-700 hover:bg-gray-100 rounded-md font-medium"
              >
                What We Do
              </Link>
              <Link
                href="#how-we-do"
                className="block w-full px-6 py-3 text-left text-gray-700 hover:bg-gray-100 rounded-md font-medium"
              >
                How We Do
              </Link>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="prose max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Overview
              </h2>

              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <p className="text-gray-600 text-lg mb-6">
                  YES AutoNeeds is a leading auto parts provider specializing in
                  quality used parts for vehicles of all makes and models. With
                  years of experience and a dedicated team of automotive
                  experts, we deliver reliable parts that ensure optimal vehicle
                  performance and customer satisfaction.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-800">
                      Our Expertise
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center gap-2">
                        <span className="text-[#8A1D2F]">✓</span>
                        Comprehensive Parts Inventory
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[#8A1D2F]">✓</span>
                        Expert Technical Support
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[#8A1D2F]">✓</span>
                        Quality Assurance
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-800">
                      Our Promise
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center gap-2">
                        <span className="text-[#8A1D2F]">✓</span>
                        30-Day Money Back Guarantee
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[#8A1D2F]">✓</span>
                        Nationwide Shipping
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[#8A1D2F]">✓</span>
                        Competitive Pricing
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Service Highlights */}
              <section id="services" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Services
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {serviceHighlights.map((service, index) => (
                    <div
                      key={service.title}
                      className="bg-white rounded-lg shadow-sm p-6"
                    >
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#8A1D2F] text-white mb-4">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 whitespace-pre-line">
                        {service.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Contact Section */}
              <section id="contact" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Get in Touch
                </h2>
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Contact Information
                      </h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>Phone: (001)-609-632-0397</li>
                        <li>Email: auto@yesgroups.net</li>
                        <li>Fax: (001) 888-937-4775</li>
                        <li>Hours: Mon-Fri: 9AM-6PM EST</li>
                      </ul>
                    </div>
                    <div>
                      <Link
                        href="/contact?source=auto"
                        className="inline-flex items-center gap-2 bg-[#8A1D2F] text-white px-6 py-3 rounded font-semibold hover:bg-[#6A152F] transition-colors"
                      >
                        <FaHeadset className="w-5 h-5" />
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
