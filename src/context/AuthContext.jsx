import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
const API_URL_SIGNUP =import.meta.env.API_URL_SIGNUP ;
const API_URL_LOGIN=import.meta.env.API_URL_SIGNUP ;
const AuthContext = createContext();

// GLOBAL AXIOS SETUP
// Automatically attach JWT
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  // Load user from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  // ---------------------------
  //  LOGIN FUNCTION
  // ---------------------------
  const login = async (email, password) => {
    setLoading(true);

    try {
      const res = await axios.post(API_URL_LOGIN, {
        email,
        password,
      });

      const loggedUser = res.data.user;
      const token = res.data.token;

      setUser(loggedUser);

      localStorage.setItem("user", JSON.stringify(loggedUser));
      localStorage.setItem("token", token);

      return loggedUser;
    } catch (err) {
      throw new Error(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  // ---------------------------
  //  SIGNUP FUNCTION
  
  const signup = async (role, firstName, lastName, email, password, country) => {
  const name = `${firstName} ${lastName}`;
  const res = await axios.post(API_URL_SIGNUP, {
    role,
    name,
    email,
    password,
    country
  });

  localStorage.setItem("token", res.data.token);
  localStorage.setItem("user", JSON.stringify(res.data.user));

  return res.data.user;
};


  // ---------------------------
  //  LOGOUT
  // ---------------------------
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

