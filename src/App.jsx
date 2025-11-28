import { useState } from 'react'
import { AuthProvider } from './context/AuthContext'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Layout from './components/Layout'

import {createBrowserRouter,RouterProvider} from "react-router-dom";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
    ],
  },
]);

import './App.css'

function App() {
  
   return (
    <AuthProvider>
      <div className="min-h-screen bg-white">
         <RouterProvider router={router} />
      </div>
    </AuthProvider>
  );

}

export default App
