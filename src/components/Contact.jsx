import React from 'react';
import smallGrid from '../assets/smallGrid.jpg';

const Contact = () => {
  return (
    <section
      className="text-center text-white py-24 bg-cover bg-center"
      style={{ backgroundImage: `url(${smallGrid})` }}  // Import and use the image path
      id="about"
    >
    <section id="contact" className="py-16 bg-white text-center">
      <h3 className="text-3xl font-semibold text-gray-700">Contact</h3>
      <p className="mt-4 text-xl text-gray-600">Feel free to reach out!</p>
      <p className="mt-4 text-gray-600">Email: thorataryan0@gmail.com</p>
      <p className="mt-2 text-gray-600">Phone: +91-8208939984</p>
    </section>
    </section>
  );
};

export default Contact;
