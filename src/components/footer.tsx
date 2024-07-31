import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-500 to-purple-500 py-4 shadow-lg">
      <div className="container mx-auto text-center px-4">
        <p className="text-gray-900 dark:text-white text-sm">
          &copy; {new Date().getFullYear()} My Blog. All rights reserved.
        </p>
        <nav className="mt-4">
          <ul className="flex justify-center space-x-6">
            <li>
              <a
                href="#"
                className="text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
