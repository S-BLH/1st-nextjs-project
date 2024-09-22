// src/app/contact/page.tsx
import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-indigo-900">Contact Us</h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-800">Get in Touch</h2>
          <p className="mb-6 text-gray-700">We&apos;d love to hear from you. Reach out to us using the information below:</p>
          
          <ul className="space-y-4 mb-6">
            <li className="flex items-center text-gray-700">
              <FaEnvelope className="mr-3 text-indigo-600" />
              <span>sumitabalouch@gmail.com</span>
            </li>
            <li className="flex items-center text-gray-700">
              <FaPhone className="mr-3 text-indigo-600" />
              <span>(+93) 782471834</span>
            </li>
            <li className="flex items-center text-gray-700">
              <FaMapMarkerAlt className="mr-3 text-indigo-600" />
              <span>3rd District, Kabul, Afghanistan</span>
            </li>
          </ul>
          
          <p className="text-gray-700">
            We&apos;re available Saturday to Thursday, 9am to 5pm.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-800">Send Us a Message</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
              <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" required></textarea>
            </div>
            <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}
