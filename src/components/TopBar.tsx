"use client";

import { FaPhone, FaEnvelope, FaDownload } from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="hidden md:block fixed top-0 left-0 right-0 z-40 bg-[#8A1D2F] text-white h-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Left side - Download Guide */}
          <div className="flex items-center">
            <a
              href="#"
              className="flex items-center text-sm hover:text-gray-200 transition-colors"
            >
              <FaDownload className="h-3 w-3 mr-2" />
              Download free guide
            </a>
          </div>

          {/* Right side - Contact Info */}
          <div className="flex items-center space-x-6">
            <a
              href="tel:+16096320397"
              className="flex items-center text-sm hover:text-gray-200 transition-colors"
            >
              <FaPhone className="h-3 w-3 mr-2" />
              (001)-609-632-0397
            </a>
            <a
              href="mailto:info@yesgroups.net"
              className="flex items-center text-sm hover:text-gray-200 transition-colors"
            >
              <FaEnvelope className="h-3 w-3 mr-2" />
              info@yesgroups.net
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
