"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// Activity data with images and descriptions
const activities = [
  {
    id: 1,
    title: "Planting at Jayanagar Health Center",
    location: "Jayanagar, Mysore",
    description:
      "Tree planting initiative to create green spaces around healthcare facilities, promoting environmental wellness alongside physical health.",
    image: "/trust/planting.jpg",
  },
  {
    id: 2,
    title: "Blood Donation Camp",
    location: "T.K Layout, Mysore",
    description:
      "Regular blood donation camps organized in partnership with local hospitals to maintain adequate blood supply for emergencies.",
    image: "/trust/blood-donation.jpg",
  },
  {
    id: 3,
    title: "Education Support Program",
    location: "Various Schools, Mysore",
    description:
      "Providing educational materials and support to underprivileged students to ensure continuous learning opportunities.",
    image: "/trust/education.jpg",
  },
];

const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

export default function TrustPage() {
  const [expandedActivity, setExpandedActivity] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bloodGroup: "",
    country: "",
    state: "",
    city: "",
    healthNotes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#8A1D2F] text-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">YES Trust</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            A 80-G Registered Trust
          </p>
          <p className="text-xl text-gray-200 max-w-2xl">
            Since 2004, YES Trust has been at the forefront of community
            service, working tirelessly to create positive change through
            various social initiatives. Our journey began with a simple mission:
            to give back to society and make a meaningful difference in people's
            lives.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Navigation */}
          <div className="md:w-64 flex-shrink-0">
            <nav className="space-y-2">
              <Link
                href="#blood-donation"
                className="block w-full px-6 py-3 text-left text-white bg-[#8A1D2F] rounded-md font-medium"
              >
                Blood Donation
              </Link>
              <Link
                href="#activities"
                className="block w-full px-6 py-3 text-left text-gray-700 hover:bg-gray-100 rounded-md font-medium"
              >
                Activities
              </Link>
              <Link
                href="#donations"
                className="block w-full px-6 py-3 text-left text-gray-700 hover:bg-gray-100 rounded-md font-medium"
              >
                Donations
              </Link>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="prose max-w-none">
              {/* Blood Donation Form */}
              <section id="blood-donation" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Register to Donate Blood
                </h2>
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#8A1D2F] focus:border-[#8A1D2F]"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#8A1D2F] focus:border-[#8A1D2F]"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#8A1D2F] focus:border-[#8A1D2F]"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="bloodGroup"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Blood Group
                        </label>
                        <select
                          id="bloodGroup"
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#8A1D2F] focus:border-[#8A1D2F]"
                          value={formData.bloodGroup}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              bloodGroup: e.target.value,
                            })
                          }
                        >
                          <option value="">Select Blood Group</option>
                          {bloodGroups.map((group) => (
                            <option key={group} value={group}>
                              {group}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="country"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Country
                        </label>
                        <input
                          type="text"
                          id="country"
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#8A1D2F] focus:border-[#8A1D2F]"
                          value={formData.country}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              country: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="state"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          State
                        </label>
                        <input
                          type="text"
                          id="state"
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#8A1D2F] focus:border-[#8A1D2F]"
                          value={formData.state}
                          onChange={(e) =>
                            setFormData({ ...formData, state: e.target.value })
                          }
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="city"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          City
                        </label>
                        <input
                          type="text"
                          id="city"
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#8A1D2F] focus:border-[#8A1D2F]"
                          value={formData.city}
                          onChange={(e) =>
                            setFormData({ ...formData, city: e.target.value })
                          }
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label
                          htmlFor="healthNotes"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Health Notes (Optional)
                        </label>
                        <textarea
                          id="healthNotes"
                          rows={4}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#8A1D2F] focus:border-[#8A1D2F]"
                          value={formData.healthNotes}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              healthNotes: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <button
                        type="submit"
                        className="px-8 py-3 bg-[#8A1D2F] text-white rounded-md font-semibold hover:bg-[#6A152F] transition-colors"
                      >
                        Register as Donor
                      </button>
                      <p className="mt-4 text-gray-600 text-center">
                        In emergencies, reach out to Mr. Jagadeesh at{" "}
                        <a
                          href="tel:94480-37603"
                          className="text-[#8A1D2F] font-semibold"
                        >
                          94480-37603
                        </a>
                      </p>
                    </div>
                  </form>
                </div>
              </section>

              {/* Activities Section */}
              <section id="activities" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Activities of YES Trust
                </h2>
                <div className="space-y-4">
                  {activities.map((activity) => (
                    <div
                      key={activity.id}
                      className="bg-white rounded-lg shadow-sm overflow-hidden"
                    >
                      <button
                        onClick={() =>
                          setExpandedActivity(
                            expandedActivity === activity.id
                              ? null
                              : activity.id
                          )
                        }
                        className="w-full px-6 py-4 flex items-center justify-between text-left"
                      >
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">
                            {activity.title}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {activity.location}
                          </p>
                        </div>
                        {expandedActivity === activity.id ? (
                          <FaChevronUp className="w-5 h-5 text-gray-500" />
                        ) : (
                          <FaChevronDown className="w-5 h-5 text-gray-500" />
                        )}
                      </button>
                      <AnimatePresence>
                        {expandedActivity === activity.id && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-4">
                              <div className="relative h-48 md:h-64 mb-4 rounded-lg overflow-hidden">
                                <Image
                                  src={activity.image}
                                  alt={activity.title}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <p className="text-gray-600">
                                {activity.description}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </section>

              {/* Donation Information */}
              <section id="donations" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Donations to YES Trust
                </h2>
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <blockquote className="border-l-4 border-[#8A1D2F] pl-4 mb-6">
                    <p className="text-lg text-gray-700">
                      YES Trust is registered under section 80G of the Income
                      Tax Act. All donations to YES Trust are eligible for 50%
                      tax deduction under section 80G.
                    </p>
                  </blockquote>
                  <p className="text-gray-600 mb-6">
                    Your contribution helps us continue our mission of serving
                    the community and creating positive impact through our
                    various initiatives.
                  </p>
                  <div className="bg-gray-50 rounded p-4 text-center">
                    <p className="text-xl text-gray-800 mb-2">
                      We welcome donations from philanthropists.
                    </p>
                    <p className="text-gray-600">
                      Your donation can be by Check/DD in the name of YES Trust.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
