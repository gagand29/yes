"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    title: "Auto Parts",
    description:
      "Quality automotive parts and accessories for all your vehicle needs",
    image: "/home/categories/auto1.png",
    link: "/services/auto-parts",
  },
  {
    title: "Business Consulting",
    description: "Strategic guidance and solutions for business growth",
    image: "/home/categories/consulting.png",
    link: "/services/consulting",
  },
  {
    title: "Study in USA",
    description: "Your pathway to education opportunities in the United States",
    image: "/home/categories/study-usa.png",
    link: "/services/study-usa",
  },
  {
    title: "Financial Services",
    description: "Flexible loan solutions and financial assistance",
    image: "/home/categories/finance1.png",
    link: "/services/loans",
  },
  {
    title: "YES Trust",
    description: "Making a difference through charitable initiatives",
    image: "/home/categories/charity.png",
    link: "/services/charity",
  },
];

export default function BusinessCategories() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-[#8A1D2F] mb-6 text-center">
        Explore Our Ventures
      </h2>
      <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
        Discover our diverse range of businesses and initiatives designed to
        serve various needs
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="group relative overflow-hidden rounded-xl bg-white shadow-lg"
          >
            <Link href={category.link}>
              <div className="aspect-[16/9] relative overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <motion.h3
                  className="text-2xl font-bold mb-2"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  {category.title}
                </motion.h3>
                <motion.p
                  className="text-sm text-gray-100"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  {category.description}
                </motion.p>
              </div>

              <motion.div
                className="absolute top-4 right-4 bg-[#8A1D2F] text-white px-3 py-1 rounded-full text-sm opacity-0 group-hover:opacity-100"
                initial={{ x: 20 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.3 }}
              >
                Explore →
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
