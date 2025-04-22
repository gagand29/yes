// src/components/Footer.tsx
export default function Footer() {
    return (
      <footer className="bg-[#8A1D2F] text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 text-center md:text-left">
          <div>
            <h3 className="text-lg font-semibold">YES HardSoft Solutions, Inc</h3>
            <p className="text-sm mt-1">A unit of YES Groups</p>
            <p className="text-xs mt-2">© {new Date().getFullYear()} All Rights Reserved</p>
          </div>
          <div>
            <h4 className="text-sm font-medium mb-2">Links</h4>
            <ul className="text-sm space-y-1">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/services" className="hover:underline">Services</a></li>
              <li><a href="/about" className="hover:underline">About</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
  