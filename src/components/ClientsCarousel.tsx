"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const clients = [
  "/home/clients/jpmorgan.png",
  "/home/clients/yale.png",
  "/home/clients/ups.png",
  "/home/clients/gcom.png",
  "/home/clients/unified-grocers.png",
  "/home/clients/ah.png",
  "/home/clients/vertex.png",
  "/home/clients/teva.png",
  "/home/clients/prudential.png",
  "/home/clients/v.png",
  "/home/clients/vns.png",
  "/home/clients/marriot.png",
  "/home/clients/nyc-gov.png",
  "/home/clients/ph.png",
  "/home/clients/barclays.png",
  "/home/clients/hm.png",
  "/home/clients/bcbs.png",
  "/home/clients/comcast.png",
  "/home/clients/frbny.png",
  "/home/clients/deloitte.png",
  "/home/clients/cme-group.png",
  "/home/clients/AIG.png",
  "/home/clients/Autobase.png",
];

export default function ClientsCarousel() {
  const primaryRef = useRef<HTMLDivElement>(null);
  const secondaryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure smooth infinite scroll by duplicating content
    if (primaryRef.current && secondaryRef.current) {
      secondaryRef.current.innerHTML = primaryRef.current.innerHTML;
    }
  }, []);

  return (
    <section className="bg-gray-50 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#8A1D2F] mb-12">
          Our Clients
        </h2>

        <div className="relative w-full">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10" />

          {/* Scroller Container */}
          <div className="marquee">
            <div className="marqueeGroup" ref={primaryRef}>
              {clients.map((src, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-[200px] h-[120px] mx-8 bg-white rounded-lg shadow-sm flex items-center justify-center hover:shadow-md transition-shadow duration-300 p-4"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={src}
                      alt={`Client logo ${i + 1}`}
                      fill
                      sizes="(max-width: 768px) 100px, 200px"
                      className="object-contain p-2"
                      priority={i < 4} // Load first 4 images immediately
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="marqueeGroup" ref={secondaryRef}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
