"use client";

import CoreOfferings from "@/components/CoreOfferings";
import BusinessCategories from "@/components/BusinessCategories";
import { motion } from "framer-motion";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white pt-28 md:pt-32">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[#8A1D2F] mb-6">
              Our Services & Ventures
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
              From technology solutions to community initiatives, discover how
              we're making a difference across multiple sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technical Services Section */}
      <CoreOfferings />

      {/* Business Categories Section */}
      <BusinessCategories />
    </div>
  );
}
