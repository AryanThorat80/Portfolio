import React from 'react';
import smallGrid from '../assets/smallGrid.jpg';  // Correct relative path

const Hero = () => {
  return (
    <section
      className="text-center text-white py-24 bg-cover bg-center"
      style={{ backgroundImage: `url(${smallGrid})` }}  // Import and use the image path
      id="about"
    >
      <div className="bg-black bg-opacity-50 py-24">
        <h2 className="text-4xl font-bold"><span className='text-yellow-400'>Hello, </span>I'm Aryan Thorat</h2>
        <p className="mt-4 text-xl">A passionate Computer Engineering student.</p>
      </div>
    </section>
  );
};

export default Hero;
