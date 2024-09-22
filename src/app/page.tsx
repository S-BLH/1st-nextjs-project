// src/app/page.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaLaptopCode, FaMobileAlt, FaUserFriends } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 text-indigo-900">Welcome to Our Website</h1>
        <p className="text-xl text-gray-600 mb-8">
          We create amazing web experiences using cutting-edge technologies.
        </p>
        <Link href="/contact" className="bg-indigo-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-colors duration-300">
          Get Started
        </Link>
      </section>

      <section className="mb-16">
        <div className="bg-white p-8 rounded-lg shadow-lg relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4 text-indigo-900">About Our Services</h2>
            <p className="text-gray-600 mb-6">
              We specialize in creating responsive, user-friendly websites and applications using Next.js and React. Our team of experts is dedicated to delivering high-quality solutions tailored to your needs.
            </p>
            <Link href="/about" className="text-indigo-600 font-semibold hover:text-indigo-800 transition-colors duration-300">
              Learn More About Us →
            </Link>
          </div>
          <div className="absolute right-0 bottom-0 w-1/3 h-1/2 opacity-10">
            <Image
              src="/abstract-shape.svg" // Add this SVG to your public folder
              alt="Abstract shape"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8 text-center text-indigo-900">Our Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
            <FaLaptopCode className="text-5xl text-indigo-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
            <p className="text-gray-600">We create websites that look great on all devices, from mobile to desktop.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
            <FaMobileAlt className="text-5xl text-indigo-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Modern Technologies</h3>
            <p className="text-gray-600">We use the latest web technologies to ensure your site is fast, secure, and scalable.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
            <FaUserFriends className="text-5xl text-indigo-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">User-Centric Approach</h3>
            <p className="text-gray-600">Our designs focus on providing the best possible user experience for your visitors.</p>
          </div>
        </div>
      </section>
    </div>
  );
}