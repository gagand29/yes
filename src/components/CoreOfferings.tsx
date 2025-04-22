"use client";

import { useState } from "react";
import InfoCard from "./InfoCard";

const services = [
  { title: "Web Development", image: "/home/services/web.png" },
  { title: "Software Consulting", image: "/home/services/consulting.png" },
  { title: "UI/UX Design", image: "/home/services/uiux.png" },
  { title: "Mobile App Development", image: "/home/services/mobile.png" },
  { title: "IT Staffing", image: "/home/services/staffing.png" },
  { title: "Software Training", image: "/home/services/training.png" },
];

interface Props {
  previewOnly?: boolean;
}

export default function CoreOfferings({ previewOnly = false }: Props) {
  const visibleServices = previewOnly ? services.slice(0, 3) : services;

  return (
    <section className="max-w-7xl mx-auto px-4 py-2">
      <h2 className="text-2xl md:text-3xl font-semibold text-[#8A1D2F] mb-6 text-center">
        Our Core Offerings
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {visibleServices.map((service, index) => (
          <InfoCard key={index} title={service.title} image={service.image} />
        ))}
      </div>
    </section>
  );
}
