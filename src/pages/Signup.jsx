
import React, { useState } from "react";
import { CheckCircle } from "lucide-react";
import axios from "axios";
import FormFields from "./FormFields";
import {useNavigate,Link } from "react-router-dom";

const API_URL =import.meta.env.API_URL_SIGNUP ;
export default function Signup() {
  const navigate = useNavigate();//
  
  

  const [role, setRole] = useState();
  const [step, setStep] = useState("role");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    country: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // FIXED: No re-render glitch
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole);
  };

  const handleProceedToForm = () => {
    if (role) setStep("form");
  };

  // Backend Submit
  
 const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      setLoading(true);

      const name = `${formData.firstName} ${formData.lastName}`;

      await axios.post(API_URL, {
        role,
        name,
        email: formData.email,
        password: formData.password,
        country: formData.country,
      });

      alert("Signup successful!");
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-4xl mx-auto">

        

        {/* STEP 1: Role */}
        {step === "role" && (
          <>
            <h1 className="text-4xl font-bold text-center mb-8">
              Join as a client or freelancer
            </h1>

            <div className="flex justify-center gap-8">

              {/* CLIENT */}
              <div
                onClick={() => handleRoleSelect("client")}
                className={`p-8 w-80 rounded-xl border-2 cursor-pointer text-center transition 
                  ${role === "client" ? "border-green-600 bg-green-50" : "border-gray-300"}`}
              >
                <h2 className="text-xl font-semibold mb-2">
                  I'm a client, hiring for a project
                </h2>
                <div
                  className={`mt-4 w-5 h-5 border rounded-full mx-auto flex items-center justify-center
                    ${role === "client" ? "bg-green-600 border-green-600" : "border-gray-400"}`}
                >
                  {role === "client" && (
                    <CheckCircle className="w-3 h-3 text-white" />
                  )}
                </div>
              </div>

              {/* FREELELANCER */}
              <div
                onClick={() => handleRoleSelect("freelancer")}
                className={`p-8 w-80 rounded-xl border-2 cursor-pointer text-center transition 
                  ${role === "freelancer" ? "border-green-600 bg-green-50" : "border-gray-300"}`}
              >
                <h2 className="text-xl font-semibold mb-2">
                  I'm a freelancer, looking for work
                </h2>
                <div
                  className={`mt-4 w-5 h-5 border rounded-full mx-auto flex items-center justify-center
                    ${role === "freelancer" ? "bg-green-600 border-green-600" : "border-gray-400"}`}
                >
                  {role === "freelancer" && (
                    <CheckCircle className="w-3 h-3 text-white" />
                  )}
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <button
                onClick={handleProceedToForm}
                disabled={!role}
                className={`px-12 py-3 font-semibold rounded-lg transition
                  ${role ? "bg-green-600 text-white" : "bg-gray-300 text-gray-500"}`}
              >
                {/* {role === "client" ? "Join as a Client" : "Join as a Freelancer"} */}
                {role ? `Join as a ${role === "client" ? "Client" : "Freelancer"}` : "Create Account"}
              </button>
            </div>
          </>
        )}

        {/* STEP 2: Form */}
        {step === "form" && (
          <div className="max-w-md mx-auto">
            <h1 className="text-4xl font-bold text-center mb-2">
              {role === "client"
                ? "Sign up to hire talent"
                : "Sign up to find work you love"}
            </h1>

            <p className="text-center text-gray-600 mb-6">
              {role === "client"
                ? "Start building your team."
                : "Join the world's work marketplace."}
            </p>

            <FormFields
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              error={error}
              loading={loading}
              role={role}
            />
          </div>
        )}

        <header className="w-full flex justify-center py-2.5 mb-12">
         
          <p className="text-gray-600 text-center ">
            Already have an account?
            <button
             
              className="text-green-600 font-medium ml-1"
            >
             <Link to="/login">Log In</Link>
            </button>
          </p>
        </header>
      </div>
    </div>
  );
}
