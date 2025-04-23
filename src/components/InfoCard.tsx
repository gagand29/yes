"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

interface InfoCardProps {
  title: string;
  image: string;
  delay?: number;
}

export default function InfoCard({ title, image, delay = 0 }: InfoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group relative bg-white rounded-2xl shadow-lg overflow-hidden"
    >
      <Link href={`/services/${title.toLowerCase().replace(/\s+/g, "-")}`}>
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#8A1D2F]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="p-6 relative">
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: delay + 0.2 }}
            className="flex items-center justify-between"
          >
            <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#8A1D2F] transition-colors">
              {title}
            </h3>
            <motion.span
              className="text-[#8A1D2F] opacity-0 group-hover:opacity-100 transition-opacity"
              initial={{ x: -10 }}
              whileInView={{ x: 0 }}
            >
              →
            </motion.span>
          </motion.div>

          <motion.div
            className="mt-4 space-y-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: delay + 0.3 }}
          >
            <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8A1D2F]" />
              <span className="text-sm text-gray-600">Expert Solutions</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8A1D2F]" />
              <span className="text-sm text-gray-600">24/7 Support</span>
            </div>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-6 w-full bg-gray-50 text-[#8A1D2F] py-2 rounded-lg font-medium 
                     group-hover:bg-[#8A1D2F] group-hover:text-white transition-all duration-300"
          >
            Learn More
          </motion.button>
        </div>
      </Link>
    </motion.div>
  );
}
