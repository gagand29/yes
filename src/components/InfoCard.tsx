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
      <Image
        src={image}
        alt={title}
        width={300}
        height={200}
        className="mx-auto mb-4 object-cover rounded-md"
      />
      <p className="font-semibold text-gray-800 mb-2">{title}</p>
      <button className="mt-2 px-4 py-2 text-sm bg-[#8A1D2F] text-white rounded hover:bg-[#a9253d] transition">
        Learn More
      </button>
    </motion.div>
  );
}
