import Image from "next/image";
import { motion } from "framer-motion";

interface InfoCardProps {
  title: string;
  image: string;
}

export default function InfoCard({ title, image }: InfoCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white shadow rounded-lg p-6 text-center"
    >
      <div className="relative w-full h-[200px] mb-4">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain"
          priority
        />
      </div>
      <h3 className="font-semibold text-gray-800 text-xl mb-3">{title}</h3>
      <button className="mt-2 px-6 py-2 bg-[#8A1D2F] text-white rounded-md hover:bg-[#a9253d] transition-colors duration-300">
        Learn More
      </button>
    </motion.div>
  );
}
