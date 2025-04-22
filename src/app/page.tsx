"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import CoreOfferings from "@/components/CoreOfferings";
import ClientsCarousel from "@/components/ClientsCarousel";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* ✅ Hero Section */}
      <section className="max-w-7xl mx-auto px-4 pt-12 pb-4 text-center relative">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
        >
          Welcome to <span className="text-[#8A1D2F]">YES Groups</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-gray-600 max-w-2xl mx-auto"
        >
          <strong>Y</strong>outh <strong>E</strong>ffort for <strong>S</strong>ociety — 
          an organization for the cause of society, committed to excellence through innovation, skill, and purpose.
        </motion.p>

        {/* Logo Emblem (BE POSITIVE clock) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-6 flex justify-center"
        >
          <Image
            src="/home/logoR.png"
            alt="YES Logo"
            width={100}
            height={100}
            className="rounded-full"
            style={{ width: "auto", height: "auto" }}
          />
        </motion.div>
      </section>

      {/* ✅ Services Preview */}
      <CoreOfferings previewOnly />

      {/* ✅ CTA to View All Services */}
      <div className="text-center mt-6">
        <Link
          href="/services"
          className="inline-block bg-[#8A1D2F] hover:bg-[#701624] transition text-white px-6 py-2 rounded-md font-medium"
        >
          View All Services →
        </Link>
        <ClientsCarousel />

      </div>
      
    </main>
  );
}
