import React from 'react';
import smallGrid from '../assets/smallGrid.jpg';

const Skills = () => {
  return (
    <section
      className="text-center text-white py-24 bg-cover bg-center"
      style={{ backgroundImage: `url(${smallGrid})` }}  // Import and use the image path
      id="about"
    >
    <section id="skills" className="bg-black bg-opacity-50  py-16 text-center">
      <h3 className="text-3xl font-semibold ">Skills</h3>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="border p-6 rounded-lg shadow-md ">
          <h4 className="text-xl font-semibold text-indigo-600">Languages</h4>
          <ul className="mt-4 ">
            <li>C++, JavaScript, SQL, Python</li>
          </ul>
        </div>
        <div className="border p-6 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold text-indigo-600">Technologies</h4>
          <ul className="mt-4 ">
            <li>React, Node.js, Express.js, MongoDB</li>
            <li>HTML5, CSS3, Tailwind CSS</li>
          </ul>
        </div>
        <div className="border p-6 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold text-indigo-600">Tools</h4>
          <ul className="mt-4 ">
            <li>VS Code</li>
          </ul>
        </div>
      </div>
    </section>
    </section>
  );
};

export default Skills;
