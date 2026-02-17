import { Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#faf1d5] text-gray-900">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Logo & Tagline Section */}
          <div className="flex flex-col items-start">
            <div className="mb-4">
              <img 
                src="/SRL Logo.svg" 
                alt="SRL Logo" 
                className="w-32 h-32 bg-white rounded-full p-4"
              />
            </div>
            <p className="text-gray-800 text-sm leading-relaxed">
              Inspiring students to innovate, collaborate, and make significant societal contributions through research excellence, since 2025
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-900">Quick Links</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              <a href="#top" className="text-gray-700 hover:text-[#05877a] transition-colors text-sm">
                Home
              </a>
              <a href="#visionary-charter" className="text-gray-700 hover:text-[#05877a] transition-colors text-sm">
                About Us
              </a>
              <a href="#activities" className="text-gray-700 hover:text-[#05877a] transition-colors text-sm">
                Hackathons
              </a>
              <a href="#activities" className="text-gray-700 hover:text-[#05877a] transition-colors text-sm">
                Projects
              </a>
              <a href="#activities" className="text-gray-700 hover:text-[#05877a] transition-colors text-sm">
                Events
              </a>
              <a href="#head-srl" className="text-gray-700 hover:text-[#05877a] transition-colors text-sm">
                Coordinators
              </a>
              <a href="#achievements" className="text-gray-700 hover:text-[#05877a] transition-colors text-sm">
                Achievements
              </a>
              <a href="#activities" className="text-gray-700 hover:text-[#05877a] transition-colors text-sm">
                Gallery
              </a>
              <a href="#contact-us" className="text-gray-700 hover:text-[#05877a] transition-colors text-sm">
                Contact Us
              </a>
              <a href="#activities" className="text-gray-700 hover:text-[#05877a] transition-colors text-sm">
                News
              </a>
            </div>
          </div>

          {/* Contact Us Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-900">Contact Us</h3>
            <div className="space-y-4 text-sm">
              <p className="text-gray-800 leading-relaxed">
                M. M. Patel Students Research Project Cell<br />
                KSV University, Gandhinagar, Gujarat, India
              </p>
              <p className="text-gray-800">
                Phone: 079-232-44690
              </p>
              <p className="text-gray-800">
                Email: mmpsrc.ksv@gmail.com
              </p>
            </div>
          </div>

          {/* Follow Us Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-900">Follow Us</h3>
            <div className="flex items-center gap-3">
              <a 
                href="https://www.linkedin.com/company/mmpsrpc" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-[#05877a] transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/company/mmpsrpc" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-[#05877a] transition-colors text-sm"
              >
                @mmpsrpc
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}