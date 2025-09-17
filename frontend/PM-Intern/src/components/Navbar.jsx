import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react"; // make sure installed: npm install lucide-react

function Navbar() {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-xl font-bold text-teal-600 dark:text-teal-400">
          Smart Internship Allocator
        </h1>

        {/* Nav Links */}
        <ul className="flex space-x-8 text-lg font-medium text-gray-800 dark:text-gray-200">
          {["Dashboard", "Students", "Internships", "Allocations", "Reports", "Contact"].map(
            (item) => (
              <li key={item}>
                <NavLink
                  to={item === "Dashboard" ? "/" : `/${item.toLowerCase()}`}
                  className={({ isActive }) =>
                    `hover:text-teal-500 transition duration-300 ${
                      isActive ? "text-teal-500 font-semibold" : ""
                    }`
                  }
                >
                  {item}
                </NavLink>
              </li>
            )
          )}
        </ul>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-6 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-teal-500 hover:text-white transition"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

