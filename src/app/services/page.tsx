"use client";

import CoreOfferings from "@/components/CoreOfferings";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="max-w-7xl mx-auto px-4 pt-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          All Our Services
        </h1>
        <p className="text-lg text-gray-600">
          Explore the full range of what YES Groups offers.
        </p>
      </section>

      {/* 👇 Full 6 services will be shown because `previewOnly` is NOT passed */}
      <CoreOfferings />
    </main>
  );
}
