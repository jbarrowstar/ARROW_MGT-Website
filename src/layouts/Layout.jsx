import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <>
      <NavBar />
      
      {/* Main wrapper */}
      <main className="min-h-screen bg-gray-50 pt-0">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
