"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "@/styles/contact.module.css";

const officeLocations = [
  {
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
  },
  {
    country: "USA OFFICE",
    branch: "DELAWARE BRANCH",
    address: ["3626 Silverside Road", "Wilmington, DE 19810", "USA"],
    tel: "(001)-609-632-0397",
    fax: "(001) 888-937-4775",
    image: "/contact/usa-delaware.jpg",
  },
  {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
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

          {/* Office Images Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.carouselContainer}
          >
            <Carousel
              showArrows={true}
              showStatus={false}
              showThumbs={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={5000}
              className={styles.carousel}
            >
              {officeLocations.map((office, index) => (
                <div key={index} className={styles.carouselSlide}>
                  <Image
                    src={office.image}
                    alt={`${office.branch} Office`}
                    width={600}
                    height={400}
                    className="object-cover rounded-lg"
                  />
                  <div className={styles.carouselCaption}>
                    <h3 className="text-xl font-bold">{office.branch}</h3>
                    {office.address.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </Carousel>
          </motion.div>
        </div>

        {/* Office Locations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {officeLocations.map((office, index) => (
            <div key={index} className={styles.locationCard}>
              <h3 className="text-xl font-bold text-[#8A1D2F] mb-2">
                {office.branch}
              </h3>
              <div className="space-y-1 text-gray-600">
                {office.address.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
                <p className="mt-4">
                  <strong>Tel:</strong> {office.tel}
                </p>
                {office.fax && (
                  <p>
                    <strong>Fax:</strong> {office.fax}
                  </p>
                )}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Delaware Office Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className={styles.mapContainer}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.7655617755607!2d-75.54774748459872!3d39.81052097944116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6e45ae5c30de9%3A0x96d16b5a9e86c49d!2s3626%20Silverside%20Rd%2C%20Wilmington%2C%20DE%2019810%2C%20USA!5e0!3m2!1sen!2sin!4v1645609037562!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </div>
  );
}
