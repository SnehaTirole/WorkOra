import React from "react";
import { useAuth } from "../context/AuthContext";
import ProjectCards from "../components/ProjectsCard";
import Footer from "../components/Footer";


export default function Home({ setCurrentPage }) {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-white">
     

      {/* Main */}
      <section className="w-full bg-linear-to-br from-green-50 to-green-100/60 border-b border-gray-200 rounded-b-3xl">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">

          <h1 className="text-4xl md:text-6xl font-extrabold text-[#0A2A43] max-w-3xl leading-tight">
            Work smarter.  
            <span className="block text-green-700 mt-1">
              Connect with talent that delivers.
            </span>
          </h1>

          <p className="mt-6 text-gray-700 text-lg max-w-2xl">
            A clean, efficient freelance platform to hire top professionals or find
            meaningful projects — built with simplicity and trust.
          </p>

          <div className="mt-8 flex gap-4">
            <button
              onClick={() =>
                setCurrentPage(user?.role === "client" ? "home" : "signup")
              }
              className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition font-medium"
            >
              Hire Talent
            </button>

            <button
              onClick={() =>
                setCurrentPage(user?.role === "freelancer" ? "home" : "signup")
              }
              className="px-6 py-3 bg-white border border-gray-300 text-gray-800 rounded-lg hover:bg-gray-50 transition font-medium"
            >
              Find Work
            </button>
          </div>

        </div>
      </section>

      {/* ProjectCards */}
      <div>
         <h1 className="text-3xl font-bold p-6">Recommended Projects for You</h1>
      <ProjectCards />
      </div>
      
      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6">
        <div className="p-6 border-l-4 border-green-600">
          <h3 className="text-2xl font-bold">For Clients</h3>
          <p className="text-gray-600 mt-2">Find and hire top freelancers to finish your projects on time and on budget.</p>
        </div>
        <div className="p-6 border-l-4 border-green-600">
          <h3 className="text-2xl font-bold">For Freelancers</h3>
          <p className="text-gray-600 mt-2">Find work you love and build a career on your own terms.</p>
        </div>
        <div className="p-6 border-l-4 border-green-600">
          <h3 className="text-2xl font-bold">Why WorkOra</h3>
          <p className="text-gray-600 mt-2">We help businesses and freelancers connect and grow together.</p>
        </div>
      </section>

      <Footer/>
    </div>
  );
}
