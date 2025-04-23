"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface Activity {
  id: string;
  title: string;
  location: string;
  description: string;
  image: string;
}

interface ActivitiesAccordionProps {
  activities: Activity[];
}

export function ActivitiesAccordion({ activities }: ActivitiesAccordionProps) {
  const [activeId, setActiveId] = useState<string | null>(
    activities[0]?.id || null
  );

  const toggleActivity = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div
          key={activity.id}
          className="bg-white rounded-lg shadow-sm border border-gray-200"
        >
          <button
            onClick={() => toggleActivity(activity.id)}
            className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-[#8A1D2F] focus:ring-offset-2 rounded-lg"
            aria-expanded={activeId === activity.id}
          >
            <span className="text-lg font-medium text-gray-900">
              {activity.title}
            </span>
            <motion.span
              animate={{ rotate: activeId === activity.id ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDownIcon className="h-5 w-5 text-gray-500" />
            </motion.span>
          </button>

          <AnimatePresence>
            {activeId === activity.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4">
                  <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={activity.image}
                      alt={activity.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-[#8A1D2F] font-medium mb-2">
                    Location: {activity.location}
                  </p>
                  <p className="text-gray-700">{activity.description}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
