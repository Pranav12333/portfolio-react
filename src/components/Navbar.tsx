import { useState } from "react";
import { Link } from "react-router-dom"; // ✅ Use from react-router-dom now

const Navbar = () => {
  const [open, setOpen] = useState(false);

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

        <div className="md:hidden flex flex-col cursor-pointer" onClick={() => setOpen(!open)}>
          <span className="w-6 h-0.5 bg-white mb-1"></span>
          <span className="w-6 h-0.5 bg-white mb-1"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </div>
      </div>

      {open && (
        <ul className="md:hidden flex flex-col bg-black/90 text-white px-8 py-4 space-y-4">
          <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setOpen(false)}>About</Link></li>
          <li><Link to="/projects" onClick={() => setOpen(false)}>Projects</Link></li>
          <li><Link to="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
