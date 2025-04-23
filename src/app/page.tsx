"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import CoreOfferings from "@/components/CoreOfferings";
import ClientsCarousel from "@/components/ClientsCarousel";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-gradient-to-b from-gray-50 to-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[#8A1D2F]/5" />
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            {/* <Image
              src="/home/logo.png"
              alt="Background Pattern"
              fill
              className="object-cover opacity-30"
            /> */}
          </motion.div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.h1
                className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Welcome to <span className="text-[#8A1D2F]">YES Groups</span>
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl text-gray-600 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <strong>Y</strong>outh <strong>E</strong>ffort for{" "}
                <strong>S</strong>ociety — an organization committed to
                excellence through innovation, skill, and purpose.
              </motion.p>
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Link
                  href="/services"
                  className="px-8 py-3 bg-[#8A1D2F] text-white rounded-lg hover:bg-[#a9253d] transition-colors duration-300"
                >
                  Explore Services
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-3 border-2 border-[#8A1D2F] text-[#8A1D2F] rounded-lg hover:bg-[#8A1D2F] hover:text-white transition-colors duration-300"
                >
                  Contact Us
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[400px] md:h-[500px]"
            >
              <Image
                src="/home/banner-yes-copy.png"
                alt="YES Groups Hero"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "200+", label: "Projects Delivered" },
              { number: "25+", label: "Team Members" },
              { number: "20+", label: "Years Experience" },
              { number: "20+", label: "Global Clients" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group cursor-pointer"
              >
                <motion.h3
                  className="text-3xl md:text-4xl font-bold text-[#8A1D2F] mb-2 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.number}
                </motion.h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <CoreOfferings previewOnly />

      {/* Clients Section */}
      <section className="py-16 bg-gray-50">
        <ClientsCarousel />
      </section>

      {/* CTA Section */}
      <section className="bg-[#8A1D2F] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl mb-8 opacity-90"
          >
            Let's discuss how we can help your business grow
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-white text-[#8A1D2F] rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Contact Us Today
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
