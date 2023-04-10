import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <nav className="bg-background font-primary">
      <div className="flex justify-between items-center container mx-auto px-4 py-5">
        <div>
          <Link to="/">
            <h1 className="text-3xl font-extrabold">Profession Hunt</h1>
          </Link>
        </div>
        <div className="hidden lg:flex justify-between items-center">
          <ul className="flex justify-between items-center gap-4 text-base font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/statistics"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Statistics
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/apply"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Apply Jobs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
        <button className="btn hidden px-[25px] py-[15px] lg:block">
          Start Applying
        </button>
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center"
          >
            {!isOpen ? (
              <XMarkIcon className="w-9 h-9 text-primary" />
            ) : (
              <Bars3Icon className="w-9 h-9 text-primary" />
            )}
          </button>
          {!isOpen && (
            <>
              <ul
                onClick={() => setIsOpen()}
                className="absolute  top-[76px] left-0 right-0 w-full px-5 py-5 z-10 bg-white"
              >
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/statistics"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Statistics
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/apply"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Apply Jobs
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/blog"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Blog
                  </NavLink>
                </li>
                <button className="btn-sml px-6 py-2 mt-2">
                  Start Applying
                </button>
              </ul>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
