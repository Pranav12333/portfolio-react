import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Toggle open/close
  const handleToggle = (forceState?: boolean) => {
    setIsOpen((prev) => {
      const newState = typeof forceState === "boolean" ? forceState : !prev;
      console.log("handleToggle called. Previous state:", prev, "New state:", newState);
      return newState;
    });
  };

  // Close when clicked outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        console.log("Clicked outside the menu. Closing navbar.");
        handleToggle(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      console.log("Navbar is open. Outside click listener added.");
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      console.log("Cleanup: Outside click listener removed.");
    };
  }, [isOpen]);

  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-3 bg-[rgba(0,0,0,0.8)] backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
          PRANAV
        </div>

        <ul className="hidden md:flex gap-6 text-white font-medium">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* HAMBURGER + MOBILE MENU WRAPPED TOGETHER */}
        <div ref={menuRef} className="md:hidden flex flex-col items-end">
          {/* Hamburger Icon */}
          <div
            className="z-50 cursor-pointer w-8 h-8 relative"
            onClick={() => {
              console.log("Hamburger clicked.");
              setIsOpen((prev) => {
                console.log("handleToggle: prev =", prev, "new =", !prev);
                return !prev;
              });
            }}
          >
            <span
              className={`absolute h-0.5 w-full bg-white left-0 transform transition duration-300 ease-in-out ${
                isOpen ? "rotate-45 top-3.5" : "top-2"
              }`}
            ></span>
            <span
              className={`absolute h-0.5 w-full bg-white left-0 transition-all duration-300 ease-in-out ${
                isOpen ? "opacity-0" : "top-4"
              }`}
            ></span>
            <span
              className={`absolute h-0.5 w-full bg-white left-0 transform transition duration-300 ease-in-out ${
                isOpen ? "-rotate-45 top-3.5" : "top-6"
              }`}
            ></span>
          </div>

          {/* Mobile menu */}
          <div
            className={`transition-all duration-300 transform origin-top overflow-hidden ${
              isOpen
                ? "max-h-[500px] opacity-100 scale-100"
                : "max-h-0 opacity-0 scale-95 pointer-events-none"
            }`}
          >
            <ul className="flex flex-col bg-black/90 text-white px-8 py-4 space-y-4">
              <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
              <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
              <li><Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
              <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>

  );
};

export default Navbar;
