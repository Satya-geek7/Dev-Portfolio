import React, { useState, useEffect, memo } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = ({ bg }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isNavup, setIsNavup] = useState(true);
  const name = "<theDev />";

  const links = [
    { to: "/home", label: "Home" },
    { to: "/about", label: "About", id: "about" },
    { to: "/projects", label: "Projects" },
    { to: "/recruitme", label: "As Recruiter!" },
  ];

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          setIsNavup(currentScrollY < lastScrollY);
          lastScrollY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      <div
        className={`${bg} hidden md:block fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out`}
      >
        <div
          className={`${
            isNavup
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          } transition-all duration-300`}
        >
          <nav className="text-white py-8 px-8 md:px-32 lg:px-64 flex items-center">
            <div className="lg:pl-10 text-[#a259ff] font-bold lg:text-[38px] md:text-[25px] hover:cursor-pointer">
              {name}
            </div>
            <ul className="ml-auto flex flex-row lg:gap-x-10 md:gap-x-4 gap-x-2 lg:mr-6">
              {links.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `relative inline-block px-2 text-white transition-colors
                     after:content-[''] after:absolute after:bottom-0 after:h-[2px]
                     after:bg-[#61f9d6] after:transition-all after:duration-300 ${
                       isActive
                         ? "after:left-0 after:w-full text-rose-400"
                         : "after:left-1/2 after:w-0 hover:after:left-0 hover:after:w-full"
                     }`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className={`${bg} md:hidden fixed top-0 left-0 w-full z-50`}>
        <nav className="text-white py-6 px-6 flex items-center justify-between">
          <div className="text-rose-500 font-bold text-xl">{name}</div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {isOpen && (
          <div className="text-white px-6 pb-6 pt-2">
            <ul className="flex flex-col space-y-4">
              {links.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `relative inline-block text-white transition-colors
                     after:content-[''] after:absolute after:bottom-0 after:h-[2px]
                     after:bg-rose-500 after:transition-all after:duration-300 ${
                       isActive
                         ? "after:left-0 after:w-full text-rose-400"
                         : "after:left-1/2 after:w-0 hover:after:left-0 hover:after:w-full"
                     }`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default memo(Navbar);
