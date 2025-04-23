"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "@/styles/contact.module.css";

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
    country: "USA OFFICE",
    branch: "DELAWARE BRANCH",
    address: ["3626 Silverside Road", "Wilmington, DE 19810", "USA"],
    tel: "(001)-609-632-0397",
    fax: "(001) 888-937-4775",
    image: "/contact/usa-delaware.jpg",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.7655617755607!2d-75.54774748459872!3d39.81052097944116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6e45ae5c30de9%3A0x96d16b5a9e86c49d!2s3626%20Silverside%20Rd%2C%20Wilmington%2C%20DE%2019810%2C%20USA!5e0!3m2!1sen!2sin!4v1645609037562!5m2!1sen!2sin",
  },
  {
    id: "newjersey",
    country: "USA OFFICE",
    branch: "NEW JERSEY BRANCH",
    address: [
      "614 Route 130 South",
      "Suite B2",
      "East Windsor, NJ 08520",
      "USA",
    ],
    tel: "(001)-609-632-0397",
    fax: "(001) 888-937-4775",
    image: "/contact/usa-nj.jpg",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3041.904783967621!2d-74.5437445845775!3d40.27560897937883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3e1e6c1a7c43d%3A0x6d2d1c5ac3c34c01!2s614%20US-130%2C%20East%20Windsor%2C%20NJ%2008520%2C%20USA!5e0!3m2!1sen!2sin!4v1709825247559!5m2!1sen!2sin",
  },
  {
    id: "mysore",
    country: "INDIA OFFICE",
    branch: "MYSORE BRANCH",
    address: [
      "1168, 4th Stage",
      "Chaduranga Road, T.K Layout,",
      "MYSORE, KARNATAKA STATE",
      "INDIA",
    ],
    tel: "(91)-821-4253778",
    image: "/contact/india-office.jpg",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.1133188892805!2d76.62163827573827!3d12.309039888278283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf70139e1e1acf%3A0x3c8d0b8aa0d15b72!2sChaduranga%20Rd%2C%20T.K%20Layout%2C%20Mysuru%2C%20Karnataka%20570009!5e0!3m2!1sen!2sin!4v1709825163044!5m2!1sen!2sin",
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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-28 md:pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#8A1D2F] mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            If you have any questions, please contact us by filling out the form
            and we will get in touch with you shortly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.formContainer}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className={styles.input}
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className={styles.input}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className={styles.input}
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="department"
                  className="block text-sm font-medium text-gray-700"
                >
                  Related to
                </label>
                <select
                  id="department"
                  required
                  className={styles.select}
                  value={formData.department}
                  onChange={(e) =>
                    setFormData({ ...formData, department: e.target.value })
                  }
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
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  className={styles.textarea}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>
              <button type="submit" className={styles.submitButton}>
                Send Message
              </button>
            </form>

            <div className="mt-8 text-gray-600">
              <p className="mb-2">
                <strong>Email:</strong> info@yesgroups.net
              </p>
              <p>
                <strong>Fax:</strong> (001) 888-937-4775
              </p>
            </div>
          </motion.div>

          {/* Office Locations and Map */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Our Offices
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  {officeLocations.map((office) => (
                    <button
                      key={office.id}
                      onClick={() => setSelectedOffice(office)}
                      className={`p-4 rounded-lg text-left transition-all transform hover:scale-105 ${
                        selectedOffice.id === office.id
                          ? "bg-[#8A1D2F] text-white shadow-lg scale-105"
                          : "bg-gray-50 hover:bg-gray-100 text-gray-800"
                      }`}
                    >
                      <h3 className="font-semibold mb-2">{office.branch}</h3>
                      <div className="text-sm space-y-1">
                        {office.address.map((line, index) => (
                          <p
                            key={index}
                            className={`${
                              selectedOffice.id === office.id
                                ? "text-gray-100"
                                : "text-gray-600"
                            }`}
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                    </button>
                  ))}
                </div>

                {/* Map */}
                <motion.div
                  key={selectedOffice.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="h-64 md:h-80 rounded-lg overflow-hidden"
                >
                  <iframe
                    src={selectedOffice.mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Office Carousels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Our Global Presence
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* USA Office Carousel */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  USA Offices
                </h2>
                <Carousel
                  showArrows={true}
                  showStatus={false}
                  showThumbs={false}
                  infiniteLoop={true}
                  autoPlay={true}
                  interval={5000}
                  className="carousel-container"
                >
                  {usaOfficeImages.map((image, index) => (
                    <div key={index} className="relative h-64 md:h-80">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <h3 className="text-white text-xl font-semibold">
                          {image.title}
                        </h3>
                      </div>
                    </div>
                  ))}
                </Carousel>
              </div>
            </motion.div>

            {/* India Office Carousel */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  India Office
                </h2>
                <Carousel
                  showArrows={true}
                  showStatus={false}
                  showThumbs={false}
                  infiniteLoop={true}
                  autoPlay={true}
                  interval={5000}
                  className="carousel-container"
                >
                  {indiaOfficeImages.map((image, index) => (
                    <div key={index} className="relative h-64 md:h-80">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <h3 className="text-white text-xl font-semibold">
                          {image.title}
                        </h3>
                      </div>
                    </div>
                  ))}
                </Carousel>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Carousel Styles */}
        <style jsx global>{`
          .carousel-container .carousel .slide {
            background: transparent;
          }
          .carousel-container .carousel .control-arrow {
            background: rgba(138, 29, 47, 0.7);
            width: 40px;
            height: 40px;
            border-radius: 50%;
            top: 50%;
            transform: translateY(-50%);
            opacity: 0;
            transition: opacity 0.3s;
          }
          .carousel-container:hover .carousel .control-arrow {
            opacity: 1;
          }
          .carousel-container .carousel .control-prev.control-arrow {
            left: 20px;
          }
          .carousel-container .carousel .control-next.control-arrow {
            right: 20px;
          }
          .carousel-container .carousel .control-arrow:before {
            border-width: 8px;
          }
          .carousel-container .carousel .control-prev.control-arrow:before {
            border-right-color: white;
            margin-right: 3px;
          }
          .carousel-container .carousel .control-next.control-arrow:before {
            border-left-color: white;
            margin-left: 3px;
          }
        `}</style>
      </div>
    </div>
  );
}
