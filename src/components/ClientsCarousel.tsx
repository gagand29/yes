"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "@/styles/clients.module.css";

const clients = [
  "/home/clients/jpmorgan.png",
  "/home/clients/yale.png",
  "/home/clients/ups.png",
  "/home/clients/gcom.png",
  "/home/clients/unified grocers.png",
  "/home/clients/ah.png",
  // Duplicate for seamless loop illusion
  "/home/clients/jpmorgan.png",
  "/home/clients/yale.png",
  "/home/clients/ups.png",
];

export default function ClientsCarousel() {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let scrollAmount = 0;
    const speed = 1; // px per tick
    const interval = setInterval(() => {
      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0; // reset to start for loop effect
        scrollAmount = 0;
      } else {
        scrollAmount += speed;
        slider.scrollLeft = scrollAmount;
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gray-100 py-10 mt-10">
      <h2 className="text-2xl font-semibold text-center text-[#8A1D2F] mb-6">
        Our Clients
      </h2>
      <div
        ref={sliderRef}
        className={styles.slider + " overflow-x-scroll whitespace-nowrap scroll-smooth no-scrollbar"}
      >
        {clients.map((src, i) => (
          <Image
            key={i}
            src={src}
            alt={`Client logo ${i}`}
            width={180}
            height={80}
            className="inline-block mx-6 object-contain"
          />
        ))}
      </div>
    </section>
  );
}
