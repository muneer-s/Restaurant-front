import { Link } from "react-router-dom";
import l4 from "../../public/assets/l-4.png"
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-black text-white py-4 px-6 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src={l4}
              alt="Website Logo"
              className="w-40 h-12 object-contain"
            />
          </Link>
        </div>

        {/* Navigation Links - Desktop */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link 
              to="/" 
              className="font-medium hover:text-yellow-500 transition-colors duration-300 relative group py-2"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link 
              to="/viewlist" 
              className="font-medium hover:text-yellow-500 transition-colors duration-300 relative group py-2"
            >
              View List
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link 
              to="/createlist" 
              className="font-medium hover:text-yellow-500 transition-colors duration-300 relative group py-2"
            >
              Create List
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            id="menu-btn"
            className="focus:outline-none text-white p-2 rounded-lg hover:bg-gray-800 transition-colors duration-300"
            onClick={() => {
              toggleMobileMenu();
              const menu = document.getElementById("mobile-menu");
              if (menu) {
                menu.classList.toggle("hidden");
              }
            }}
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div 
        id="mobile-menu" 
        className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden mt-4 bg-gray-800 rounded-lg shadow-xl mx-4 overflow-hidden transition-all duration-300`}
      >
        <ul className="py-2">
          <li>
            <Link 
              to="/" 
              className="block px-6 py-3 hover:bg-gray-700 hover:text-yellow-500 transition-colors duration-300"
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/viewlist" 
              className="block px-6 py-3 hover:bg-gray-700 hover:text-yellow-500 transition-colors duration-300"
              onClick={toggleMobileMenu}
            >
              View List
            </Link>
          </li>
          <li>
            <Link 
              to="/createlist" 
              className="block px-6 py-3 hover:bg-gray-700 hover:text-yellow-500 transition-colors duration-300"
              onClick={toggleMobileMenu}
            >
              Create List
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;