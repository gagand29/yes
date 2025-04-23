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
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#8A1D2F] mb-12">
          Our Clients
        </h2>

        <div className="relative overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-gray-50 via-gray-50/80 to-transparent z-10" />

          {/* Infinite Scroll Container */}
          <div className="infinite-scroll-container">
            <div className="infinite-scroll-content">
              {[...Array(2)].map((_, index) => (
                <div key={index} className="flex space-x-16 items-center">
                  {clients.map((src, i) => (
                    <div
                      key={`${index}-${i}`}
                      className="flex-shrink-0 w-[180px] h-[100px] bg-white rounded-lg shadow-sm flex items-center justify-center hover:shadow-md transition-shadow duration-300 p-4"
                    >
                      <div className="relative w-full h-full">
                        <Image
                          src={src}
                          alt={`Client logo ${i + 1}`}
                          fill
                          sizes="180px"
                          className="object-contain p-2"
                          priority={i < 8}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .infinite-scroll-container {
          width: 100%;
          overflow: hidden;
          position: relative;
          padding: 1rem 0;
        }

        .infinite-scroll-content {
          display: flex;
          animation: scroll 80s linear infinite;
          width: max-content;
        }

        .infinite-scroll-content:hover {
          animation-play-state: paused;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* For reduced motion preferences */
        @media (prefers-reduced-motion: reduce) {
          .infinite-scroll-content {
            animation: none;
            transform: translateX(0);
          }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .infinite-scroll-content {
            animation-duration: 40s;
          }
        }
      `}</style>
    </section>
  );
}
