import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import logoImg from "../assets/finalLogo.png";
import {Link} from "react-router-dom"
export default function Footer() {
  return (
    <footer className="bg-[#DFFFE2] text-[#0A1A2F] pt-10"> 
      {/* LIGHT GREEN BACKGROUND (#DFFFE2) */}

      

      {/* FOOTER CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* LOGO SECTION */}
        <div>
           <Link to="/" className="flex items-center">
          <img
            src={logoImg}
            className="h-28 w-auto p-0 object-contain drop-shadow-[0_0_8px_rgba(10,50,120,0.25)]"
            alt="Workora Logo"
          />
        </Link>

          <p className="text-gray-700 mt-4">
            Your trusted platform for connecting clients and freelancers globally.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex space-x-4 mt-5">
            <a href="#" className="p-2 bg-[#0A1A2F] text-white hover:bg-green-600 rounded-full transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="p-2 bg-[#0A1A2F] text-white hover:bg-green-600 rounded-full transition">
              <Instagram size={20} />
            </a>
            <a href="#" className="p-2 bg-[#0A1A2F] text-white hover:bg-green-600 rounded-full transition">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-bold text-[#0A2A43]">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-gray-800">
            <li className="hover:text-green-600 cursor-pointer">Home</li>
            <li className="hover:text-green-600 cursor-pointer">About</li>
            <li className="hover:text-green-600 cursor-pointer">Services</li>
            <li className="hover:text-green-600 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h3 className="text-lg font-bold text-[#0A2A43]">Support</h3>
          <ul className="mt-4 space-y-2 text-gray-800">
            <li className="hover:text-green-600 cursor-pointer">Help Center</li>
            <li className="hover:text-green-600 cursor-pointer">Terms & Policies</li>
            <li className="hover:text-green-600 cursor-pointer">FAQ</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-bold text-[#0A2A43]">Contact Us</h3>

          <div className="mt-4 space-y-3 text-gray-800">
            <p className="flex items-center gap-2">
              <Mail size={18} className="text-[#0A2A43]" /> support@workora.com
            </p>
            <p className="flex items-center gap-2">
              <Phone size={18} className="text-[#0A2A43]" /> +91*********
            </p>
            <p className="flex items-center gap-2">
              <MapPin size={18} className="text-[#0A2A43]" /> Bhopal, India
            </p>
          </div>
        </div>
      </div>

      {/* COPYRIGHT BAR */}
      <div className="text-center text-gray-700 py-4 border-t border-gray-400">
        © 2025 Workora. All Rights Reserved.
      </div>
    </footer>
  );
}
