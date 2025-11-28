import React from "react";
import { Clock, Briefcase, IndianRupee } from "lucide-react";

export default function ProjectCards() {
  const projects = [
    {
      title: "Wireless & Mobile Computing – Lab File",
      posted: "2 hours ago",
      price: "₹200",
      level: "Student Level",
      hours: "1–3 hrs task",
    },
    {
      title: "Machine Learning – Assignment Completion",
      posted: "5 hours ago",
      price: "₹500",
      level: "Intermediate",
      hours: "3–5 hrs task",
    },
    {
      title: "DBMS SQL Queries – College Assignment",
      posted: "1 hour ago",
      price: "₹250",
      level: "Entry Level",
      hours: "1–2 hrs",
    },
    {
      title: "Computer Networks – Semester Notes",
      posted: "3 hours ago",
      price: "₹350",
      level: "Intermediate",
      hours: "2–4 hrs",
    },
    {
      title: "Data Structures (C++) – Coding Questions",
      posted: "6 hours ago",
      price: "₹700",
      level: "Advanced",
      hours: "4–6 hrs",
    },
    {
      title: "Web Development – Portfolio Setup",
      posted: "8 hours ago",
      price: "₹600",
      level: "Intermediate",
      hours: "2–3 hrs",
    },
  ];

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((job, idx) => (
        <div
          key={idx}
          className="
            bg-gray-50 
            border border-gray-200 
            rounded-xl 
            p-5 
            transition 
            hover:shadow-lg 
            hover:bg-gray-100 
            hover:-translate-y-1 
            duration-200
          "
        >
          {/* Title */}
          <h2 className="text-lg font-semibold text-[#0A2A43] leading-snug">
            {job.title}
          </h2>

          {/* Posted time */}
          <p className="text-sm text-gray-500 mt-1">
            Posted {job.posted}
          </p>

          {/* Info row */}
          <div className="flex items-center mt-4 text-sm text-gray-700 gap-6">
            <div className="flex items-center gap-1">
              <Clock size={16} className="text-green-600" />
              {job.hours}
            </div>

            <div className="flex items-center gap-1">
              <Briefcase size={16} className="text-blue-700" />
              {job.level}
            </div>

            <div className="flex items-center gap-1">
              <IndianRupee size={16} className="text-green-600" />
              {job.price}
            </div>
          </div>

          {/* Button */}
          <button className="
            mt-5 
            bg-green-600 
            text-white 
            px-4 
            py-2 
            rounded-lg 
            text-sm 
            hover:bg-green-700 
            transition
          ">
            View Details
          </button>
        </div>
      ))}
    </div>
  );
}
