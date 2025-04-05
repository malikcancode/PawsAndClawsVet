import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="h-[4rem] bg-[#f07167] flex items-center">
      <div className="container mx-auto flex justify-between items-center px-4 w-full">
        <div className="flex items-center h-full mt-1">
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            <img src="/animal.png" alt="Logo" className="h-12 w-auto" />
          </NavLink>
        </div>

        <nav className="hidden md:flex space-x-6">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `text-gray-100 font-medium ${
                  isActive ? "border-b-2 border-white" : "hover:text-gray-300"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <button
          className="md:hidden text-gray-100 text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <nav className="flex flex-col space-y-6 text-center">
            {menuItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className="text-white text-2xl font-medium hover:text-[#f07167] transition"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
