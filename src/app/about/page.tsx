// src/app/about/page.tsx
import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-indigo-900">About Us</h1>
      
      <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-indigo-800">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            We are a passionate team dedicated to creating amazing web experiences. Our mission is to deliver high-quality, innovative solutions to our clients, pushing the boundaries of what's possible on the web.
          </p>
          <p className="text-gray-700">
            Founded in 2024, our company has grown from a small startup to a leader in web development. We specialize in creating responsive, user-friendly websites and applications using cutting-edge technologies like Next.js and React.
          </p>
        </div>
        <div className="relative h-64 md:h-auto">
          <Image
            src="/team-photo.jpg" 
            alt="Our team"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
      
      <div className="bg-indigo-100 p-8 rounded-lg shadow-md mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-800">Our Expertise</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Responsive Web Design</li>
          <li>Single Page Applications</li>
          <li>E-commerce Solutions</li>
          <li>Custom Web Development</li>
          <li>Performance Optimization</li>
        </ul>
      </div>
      
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-indigo-800">Our Team</h2>
        <p className="text-gray-700 mb-4">
          Our team consists of experienced developers, designers, and project managers who work together to bring your vision to life. With a diverse set of skills and backgrounds, we approach each project with creativity and technical excellence.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Sumita Balouch', 'Niayesh Balouch', 'Adnan Balouch', 'Hamza Balouch'].map((name, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow text-center">
              <div className="w-24 h-24 mx-auto bg-gray-300 rounded-full mb-3"></div>
              <p className="font-semibold text-indigo-800">{name}</p>
              <p className="text-sm text-gray-600">Team Member</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}