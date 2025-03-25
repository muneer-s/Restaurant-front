import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-black text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My App</h1>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6">
        <li>
            <Link to="/" className="hover:text-blue-400">Home</Link>
          </li>
          <li>
            <Link to="/viewlist" className="hover:text-blue-400">View List</Link>
          </li>
          <li>
            <Link to="/createlist" className="hover:text-blue-400">Create List</Link>
          </li>
        </ul>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button
            id="menu-btn"
            className="focus:outline-none text-white text-xl"
            onClick={() => {
              const menu = document.getElementById("mobile-menu");
              if (menu) {
                menu.classList.toggle("hidden");
              }
            }}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div id="mobile-menu" className="hidden md:hidden mt-2 bg-gray-800 p-4">
        <ul className="space-y-2 text-center">
          <li>
            <Link to="/" className="block hover:text-blue-400">Home</Link>
          </li>
          <li>
            <Link to="/viewlist" className="block hover:text-blue-400">View List</Link>
          </li>
          <li>
            <Link to="/createlist" className="block hover:text-blue-400">Create List</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
