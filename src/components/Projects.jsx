import React from 'react';
import smallGrid from '../assets/smallGrid.jpg';

const Projects = () => {
  return (
    <section
      className="text-center text-white py-24 bg-cover bg-center"
      style={{ backgroundImage: `url(${smallGrid})` }}  // Import and use the image path
      id="about"
    >
    <section id="projects" className="py-16 bg-gray-50">
      <h3 className="text-3xl font-semibold text-center text-gray-700">Projects</h3>
      <div className="max-w-6xl mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Project 1 */}
        <div className="border p-6 rounded-lg shadow-md bg-white">
          <h4 className="text-xl font-semibold text-indigo-600">Weather API App</h4>
          <p className="mt-4 text-gray-600">A weather application built using HTML, CSS, and JavaScript that fetches live weather data from OpenWeatherMap API.</p>
        </div>
        {/* Project 2 */}
        <div className="border p-6 rounded-lg shadow-md bg-white">
          <h4 className="text-xl font-semibold text-indigo-600">NewsFeed</h4>
          <p className="mt-4 text-gray-600">A news aggregator app built with React and Tailwind CSS, integrating News API for real-time news updates.</p>
        </div>
      </div>
    </section>
    </section>
  );
};

export default Projects;
