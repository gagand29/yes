"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaSearch,
  FaChevronDown,
  FaThumbsUp,
  FaThumbsDown,
} from "react-icons/fa";

const faqCategories = [
  { id: "immigration-usa", label: "Immigration – USA" },
  { id: "employees-usa", label: "Employees – USA" },
  { id: "employees-india", label: "Employees – India" },
  { id: "interview", label: "Interview Questions" },
  { id: "finance", label: "YES Finance" },
];

const immigrationUSAData = {
  "Visa Types": {
    "H-1B Visa": {
      question: "What is an H-1B visa?",
      answer:
        "The H-1B is a temporary (nonimmigrant) visa category that allows employers to petition for highly educated foreign professionals to work in specialty occupations.",
    },
    "F-1 Visa": {
      question: "What is an F-1 student visa?",
      answer:
        "The F-1 visa is for international students attending an accredited US college or university or language training program.",
    },
    "L-1 Visa": {
      question: "What is an L-1 visa?",
      answer:
        "The L-1 visa is for intracompany transferees who are being transferred to a parent, branch, affiliate, or subsidiary of the current employer in the US.",
    },
    "Green Card": {
      question: "What is a Green Card?",
      answer:
        "A Green Card allows a foreign national to live and work permanently in the United States. It's officially known as a Permanent Resident Card.",
    },
  },
  Processes: {
    "H-1B Transfer": {
      question: "How does H-1B transfer work?",
      answer:
        "An H-1B transfer allows you to change employers while maintaining H-1B status. The new employer must file a new H-1B petition.",
    },
    "OPT/STEM Cap Gap": {
      question: "What is the OPT/STEM Cap Gap?",
      answer:
        "The Cap Gap extension allows F-1 students with pending or approved H-1B petitions to remain in the US during the gap between OPT end date and H-1B start date.",
    },
  },
  Glossary: {
    "Common Terms": {
      question: "What are some common immigration terms?",
      answer:
        "USCIS: U.S. Citizenship and Immigration Services\nPERM: Program Electronic Review Management\nLCA: Labor Condition Application",
    },
    "USCIS Forms": {
      question: "What are common USCIS forms?",
      answer:
        "I-129: Petition for Nonimmigrant Worker\nI-140: Immigrant Petition for Alien Worker\nI-485: Application to Register Permanent Residence",
    },
  },
};

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("immigration-usa");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const [expandedQuestions, setExpandedQuestions] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setExpandedSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  const toggleQuestion = (questionId: string) => {
    setExpandedQuestions((prev) =>
      prev.includes(questionId)
        ? prev.filter((q) => q !== questionId)
        : [...prev, questionId]
    );
  };

  const handleFeedback = (questionId: string, helpful: boolean) => {
    // TODO: Implement feedback functionality
    console.log(
      `Question ${questionId} was ${helpful ? "helpful" : "not helpful"}`
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-28 md:pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Disclaimer */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
          <p className="text-yellow-700">
            <strong>Disclaimer:</strong> YES Groups is not a legal advisor. For
            legal advice, consult a licensed attorney.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <input
            type="text"
            placeholder="Search FAQs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8A1D2F] focus:border-transparent"
          />
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        {/* Category Tabs */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8 overflow-x-auto">
              {faqCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                    activeCategory === category.id
                      ? "border-[#8A1D2F] text-[#8A1D2F]"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* FAQ Content */}
        <div className="space-y-6">
          {Object.entries(immigrationUSAData).map(([section, questions]) => (
            <motion.div
              key={section}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              {/* Section Header */}
              <button
                onClick={() => toggleSection(section)}
                className="w-full px-6 py-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {section}
                </h3>
                <FaChevronDown
                  className={`transform transition-transform ${
                    expandedSections.includes(section) ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Questions */}
              <AnimatePresence>
                {expandedSections.includes(section) && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="divide-y divide-gray-200">
                      {Object.entries(questions).map(
                        ([id, { question, answer }]) => (
                          <div key={id} className="px-6 py-4">
                            <button
                              onClick={() => toggleQuestion(id)}
                              className="w-full text-left flex justify-between items-center"
                            >
                              <h4 className="text-base font-medium text-gray-900">
                                {question}
                              </h4>
                              <FaChevronDown
                                className={`transform transition-transform ${
                                  expandedQuestions.includes(id)
                                    ? "rotate-180"
                                    : ""
                                }`}
                              />
                            </button>

                            <AnimatePresence>
                              {expandedQuestions.includes(id) && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <p className="mt-4 text-gray-600 whitespace-pre-line">
                                    {answer}
                                  </p>
                                  <div className="mt-4 flex items-center space-x-4">
                                    <button
                                      onClick={() => handleFeedback(id, true)}
                                      className="text-gray-400 hover:text-green-500"
                                    >
                                      <FaThumbsUp />
                                    </button>
                                    <button
                                      onClick={() => handleFeedback(id, false)}
                                      className="text-gray-400 hover:text-red-500"
                                    >
                                      <FaThumbsDown />
                                    </button>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        )
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
