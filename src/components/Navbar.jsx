import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black p-4 text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-semibold text-yellow-400">PORTFOLIO</h1>
        <ul className="flex space-x-6">
          <li><a href="#about" className="hover:text-indigo-200">About</a></li>
          <li><a href="#skills" className="hover:text-indigo-200">Skills</a></li>
          <li><a href="#projects" className="hover:text-indigo-200">Projects</a></li>
          <li><a href="#contact" className="hover:text-indigo-200">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
