
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import logoImg from "../assets/finalLogo.png";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
    setMenuOpen(false);
  };

  return (
    <nav className="w-full bg-white shadow-md border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

        {/* LOGO */}
        <Link to="/" className="flex items-center" onClick={() => setMenuOpen(false)}>
          <img
            src={logoImg}
            className="h-20 w-auto object-contain sm:h-28" // bigger on mobile
            alt="Workora Logo"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          <Link to="/" className="text-[#0A2A43] text-lg font-medium relative group">
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#0A2A43] group-hover:w-full transition-all duration-300"></span>
          </Link>

          {user ? (
            <>
              <span className="font-semibold text-[#0A2A43] text-lg">
                Hi, {user.name}
              </span>
              <button
                onClick={handleLogout}
                className="px-5 py-2 rounded-lg border border-[#0A2A43] text-[#0A2A43] font-medium
                           hover:bg-[#0A2A43] hover:text-white transition duration-200"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-[#0A2A43] text-lg font-medium relative group"
              >
                Login
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#0A2A43] group-hover:w-full transition-all duration-300"></span>
              </Link>

              <Link
                to="/signup"
                className="px-6 py-2 rounded-lg bg-linear-to-r from-green-500 to-teal-500 
                           text-white font-medium shadow-md hover:shadow-lg hover:opacity-90 
                           transition duration-200"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-[#0A2A43] text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 py-4 flex flex-col space-y-4 shadow-lg">

          <Link
            to="/"
            className="text-lg text-[#0A2A43] font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

          {user ? (
            <>
              <span className="text-lg font-semibold text-[#0A2A43]">
                Hi, {user.name}
              </span>

              <button
                onClick={handleLogout}
                className="px-5 py-2 rounded-lg border border-[#0A2A43] text-[#0A2A43] 
                           font-medium hover:bg-[#0A2A43] hover:text-white transition duration-200"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-lg text-[#0A2A43] font-medium"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="px-6 py-2 rounded-lg bg-linear-to-r from-green-500 to-teal-500 
                           text-white font-medium shadow-md hover:shadow-lg"
                onClick={() => setMenuOpen(false)}
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
