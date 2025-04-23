"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const usaOfficeImages = [
  {
    src: "/contact/usa-delaware.jpg",
    alt: "Delaware Office",
    title: "Delaware Office",
  },
  {
    src: "/contact/usa-nj.jpg",
    alt: "New Jersey Office",
    title: "New Jersey Office",
  },
];

const indiaOfficeImages = [
  {
    src: "/contact/india-office.jpg",
    alt: "Mysore Office",
    title: "Mysore Office",
  },
  {
    src: "/contact/india-office2.jpg",
    alt: "Mysore Office Interior",
    title: "Modern Workspace",
  },
];

const officeLocations = [
  {
    id: "delaware",
    title: "DELAWARE BRANCH",
    address: ["3626 Silverside Road", "Wilmington, DE 19810", "USA"],
    tel: "(001)-609-632-0397",
    fax: "(001) 888-937-4775",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.7655617755607!2d-75.54774748459872!3d39.81052097944116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6e45ae5c30de9%3A0x96d16b5a9e86c49d!2s3626%20Silverside%20Rd%2C%20Wilmington%2C%20DE%2019810%2C%20USA!5e0!3m2!1sen!2sin!4v1645609037562!5m2!1sen!2sin",
  },
  {
    id: "newjersey",
    title: "NEW JERSEY BRANCH",
    address: ["614 Route 130 South", "Suite B2", "East Windsor, NJ 08520", "USA"],
    tel: "(001)-609-632-0397",
    fax: "(001) 888-937-4775",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3041.904783967621!2d-74.5437445845775!3d40.27560897937883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3e1e6c1a7c43d%3A0x6d2d1c5ac3c34c01!2s614%20US-130%2C%20East%20Windsor%2C%20NJ%2008520%2C%20USA!5e0!3m2!1sen!2sin!4v1709825247559!5m2!1sen!2sin",
  },
  {
    id: "mysore",
    title: "MYSORE BRANCH",
    address: [
      "1168, 4th Stage",
      "Chaduranga Road, T.K Layout,",
      "MYSORE, KARNATAKA STATE",
      "INDIA",
    ],
    tel: "(91)-821-4253778",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.1133188892805!2d76.62163827573827!3d12.309039888278283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf70139e1e1acf%3A0x3c8d0b8aa0d15b72!2sChaduranga%20Rd%2C%20T.K%20Layout%2C%20Mysuru%2C%20Karnataka%20570009!5e0!3m2!1sen!2sin!4v1709825163044!5m2!1sen!2sin",
  },
];

const departments = [
  "General Inquiry",
  "YES HardSoft Solutions",
  "YES Trust",
  "YES Auto Needs",
  "YES Finance",
  "Career Opportunities",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    message: "",
  });

  const [selectedOffice, setSelectedOffice] = useState(officeLocations[0]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="pt-28 md:pt-32 pb-12 md:pb-16 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#8A1D2F] mb-4 text-center">
            Contact Us
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto text-center px-4">
            If you have any questions, please contact us by filling out the form and we will get in touch with you shortly.
          </p>
        </div>
      </motion.div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Office Locations - Horizontal */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 md:mb-8">Our Offices</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {officeLocations.map((office, index) => (
              <motion.button
                key={office.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index + 1) }}
                onClick={() => setSelectedOffice(office)}
                className={`w-full p-5 sm:p-6 rounded-xl text-left transition-all duration-200 transform hover:scale-[1.02] ${
                  selectedOffice.id === office.id
                    ? "bg-[#8A1D2F] text-white shadow-lg"
                    : "bg-white border-2 border-gray-100 hover:border-[#8A1D2F] hover:shadow-md"
                }`}
              >
                <h3 className="text-lg sm:text-xl font-bold mb-3">{office.title}</h3>
                <div className="space-y-1">
                  {office.address.map((line, index) => (
                    <p
                      key={index}
                      className={`text-sm sm:text-base ${
                        selectedOffice.id === office.id ? "text-gray-100" : "text-gray-600"
                      }`}
                    >
                      {line}
                    </p>
                  ))}
                  {office.tel && (
                    <p className={`mt-2 text-sm sm:text-base ${
                      selectedOffice.id === office.id ? "text-gray-100" : "text-gray-600"
                    }`}>
                      Tel: {office.tel}
                    </p>
                  )}
                  {office.fax && (
                    <p className={`text-sm sm:text-base ${
                      selectedOffice.id === office.id ? "text-gray-100" : "text-gray-600"
                    }`}>
                      Fax: {office.fax}
                    </p>
                  )}
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Two Column Layout: Contact Form and Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6 bg-white p-6 sm:p-8 rounded-xl border-2 border-gray-100"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-2.5 text-base border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#8A1D2F] focus:border-[#8A1D2F] transition-colors duration-200"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-2.5 text-base border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#8A1D2F] focus:border-[#8A1D2F] transition-colors duration-200"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2.5 text-base border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#8A1D2F] focus:border-[#8A1D2F] transition-colors duration-200"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-2">
                  Related to
                </label>
                <select
                  id="department"
                  required
                  className="w-full px-4 py-2.5 text-base border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#8A1D2F] focus:border-[#8A1D2F] transition-colors duration-200"
                  value={formData.department}
                  onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                >
                  <option value="">Select a department</option>
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  className="w-full px-4 py-2.5 text-base border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#8A1D2F] focus:border-[#8A1D2F] transition-colors duration-200 resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#8A1D2F] text-white text-base font-medium rounded-lg hover:bg-[#7A1D2F] transform hover:scale-[1.02] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8A1D2F]"
              >
                Send Message
              </button>
            </form>

            <div className="pt-4 border-t border-gray-100">
              <p className="text-gray-600">
                <span className="font-medium">Email:</span>{" "}
                <a href="mailto:info@yesgroups.net" className="text-[#8A1D2F] hover:underline">
                  info@yesgroups.net
                </a>
              </p>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="h-[600px] rounded-xl overflow-hidden border-2 border-gray-100 bg-white"
          >
            <iframe
              src={selectedOffice.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
