import React from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-524px)]">
        <Outlet />
      </div>
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
