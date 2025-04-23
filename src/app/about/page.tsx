"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-28 md:pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#8A1D2F] mb-12 text-center">
            About YES Groups
          </h1>
        </motion.div>

        {/* Intro Section */}
        <motion.div
          className="flex flex-col md:flex-row items-center gap-12 mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="md:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/home/about/about-main.png"
                alt="About YES Groups"
                width={600}
                height={450}
                className="object-cover w-full transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-700 text-lg leading-relaxed">
              YES Groups, a brainchild of <strong>Mr. Deepak Budaguppe</strong>, was started in
              1998 with the intention of serving society and making it better in
              all aspects. It was formed with the help of his close associates
              like Mr. Deepak M. and Mr. Jagadeesh G.N., and officially
              inaugurated by Mr. Raja Shekara Koti, Editor of "Andolana Daily",
              with a sapling plantation at Jayanagar Government Hospital,
              Mysore.
            </p>
          </div>
        </motion.div>

        {/* Timeline Cards */}
        <div className="mb-20">
          <motion.h2
            className="text-3xl font-bold text-center text-gray-900 mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our Journey
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "YES Printers",
                year: "1999",
                description:
                  "Empowering the unemployed through print services since 1999 — a self-sustaining unit to support YES Trust's vision.",
              },
              {
                title: "YES HardSoft Solutions",
                year: "2001 – Present",
                description:
                  "Founded in 2001 in India and expanded to the USA in 2006, YES HardSoft Solutions delivers global software development, IT consulting, and hardware solutions to empower businesses across continents.",
              },
              {
                title: "YES Finance",
                year: "2006",
                description:
                  "Established in 2006 to offer micro-finance to the underserved and financial assistance to businesses across India.",
              },
              {
                title: "YES Auto Needs",
                year: "2017",
                description:
                  "Established in 2006 to offer micro-finance to the underserved and financial assistance to businesses across India.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-white border-l-4 border-[#8A1D2F] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <h3 className="text-xl font-bold text-[#8A1D2F] flex items-center gap-2">
                  {item.title}
                  <span className="text-sm text-gray-500 font-medium bg-gray-100 px-2 py-1 rounded">
                    {item.year}
                  </span>
                </h3>
                <p className="text-gray-700 mt-3 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Emblem & Motto */}
        <motion.div
          className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-64 h-64 mb-10">
            <Image
              src="/home/about/emblem.png"
              alt="YES Emblem"
              fill
              className="rounded-full object-contain transform hover:scale-105 transition-transform duration-500 shadow-2xl"
              priority
            />
          </div>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-[#8A1D2F] mb-6">
              YES Emblem and Theme
            </h2>
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              The emblem shows a clock at 10:10 with the message "Be Positive" —
              a symbol of time, action, and optimism.
            </p>
            <p className="italic text-[#8A1D2F] text-2xl font-semibold px-6 py-4 border-t border-b border-gray-200">
              "Do something, lead, follow, or get out of the way"
            </p>
          </div>
        </motion.div>

        {/* Philosophy Section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center text-[#8A1D2F] mb-12">
            Our Motive
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Youth",
                desc: "Focused on high-quality services and youth empowerment through opportunity.",
              },
              {
                title: "Effort",
                desc: "Continuous improvement and strong work ethic drive our delivery.",
              },
              {
                title: "Society",
                desc: "Transparency, fairness, and service to society guide our mission.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <h3 className="text-2xl font-bold text-[#8A1D2F] mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
