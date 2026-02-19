// ==============================
// SRL_Webpage/src/components/Footer.jsx
// ==============================
import { Linkedin } from "lucide-react";
import srlLogo from "/SRL Logo.svg";

function Footer() {
  return (
    <footer className="bg-[#f8e6c1] text-gray-800 w-full">
      {/* Main Footer Content */}
      <div className="w-full px-6 py-12">
        <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1 flex flex-col items-center">
            <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center mb-4 border-2 border-[#ffffff] drop-shadow-lg">
              <img src={srlLogo} alt="SRL Logo" className="w-28 h-28 object-contain" />
            </div>
            <p className="text-sm text-center max-w-xs text-gray-700 leading-relaxed">
              Inspiring students to innovate, collaborate, and make significant societal contributions through research excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#05877a]">Quick Links</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              <div>
                <a href="#top" className="text-sm text-gray-700 hover:text-[#05877a] transition duration-300 block">Home</a>
              </div>
              <div>
                <a href="#visionary-charter" className="text-sm text-gray-700 hover:text-[#05877a] transition duration-300 block">Visionary Charter</a>
              </div>
              <div>
                <a href="#activities" className="text-sm text-gray-700 hover:text-[#05877a] transition duration-300 block">Activities</a>
              </div>
              <div>
                <a href="#students-leaderboard" className="text-sm text-gray-700 hover:text-[#05877a] transition duration-300 block">Leaderboard</a>
              </div>
              <div>
                <a href="#srl-student-members" className="text-sm text-gray-700 hover:text-[#05877a] transition duration-300 block">SRL Members</a>
              </div>
              <div>
                <a href="#" className="text-sm text-gray-700 hover:text-[#05877a] transition duration-300 block">News</a>
              </div>
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#05877a]">Contact Us</h3>
            <address className="text-sm not-italic space-y-2 text-gray-700">
              <p className="font-semibold">Student Research Lab</p>
              <p>Kadi Sarva Vishwavidyalaya</p>
              <p>Gandhinagar, Gujarat, India</p>
              <p>
                <a href="tel:+917923244690" className="hover:text-[#05877a] transition duration-300">
                  Phone: 079-232-44690
                </a>
              </p>
              <p>
                <a href="mailto:mmpsrc.ksv@gmail.com" className="hover:text-[#05877a] transition duration-300">
                  Email: mmpsrc.ksv@gmail.com
                </a>
              </p>
            </address>
          </div>

          {/* Follow Us */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-[#05877a]">Follow Us</h3>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-3">
                <a 
                  href="https://www.linkedin.com/company/mmpsrpc" 
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-[#05877a] hover:text-[#046a61] transition duration-300"
                >
                  <Linkedin size={24} fill="currentColor" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/mmpsrpc" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-gray-700 hover:text-[#05877a] transition duration-300"
                >
                  @MMPSRPC
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-[#05877a]/30 text-center text-sm text-gray-700">
          <p>© {new Date().getFullYear()} Student Research Lab. All rights reserved.</p>
          <p className="mt-1 text-xs">Excellence Through Discipline</p>
        </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;