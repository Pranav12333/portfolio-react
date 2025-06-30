
// --- Navbar.tsx ---
import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-3 bg-[rgba(0,0,0,0.8)] backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center overflow-x-auto whitespace-nowrap">
        <div className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
          PRANAV
        </div>
        <ul className="hidden md:flex gap-6 text-white font-medium whitespace-nowrap">
          {["home", "about", "projects", "contact"].map((item) => (
            <li key={item}>
              <Link
                to={item}
                smooth={true}
                duration={500}
                className="hover:text-indigo-400 cursor-pointer relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gradient-to-r from-indigo-400 to-purple-500 after:transition-all hover:after:w-full"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
        <div
          className="md:hidden flex flex-col cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <span className="w-6 h-0.5 bg-white mb-1"></span>
          <span className="w-6 h-0.5 bg-white mb-1"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </div>
      </div>
      {open && (
        <ul className="md:hidden flex flex-col bg-black/90 text-white px-8 py-4 space-y-4">
          {["home", "about", "projects", "contact"].map((item) => (
            <li key={item}>
              <Link
                to={item}
                smooth={true}
                duration={500}
                onClick={() => setOpen(false)}
                className="block text-lg"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;