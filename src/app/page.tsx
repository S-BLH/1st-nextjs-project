// src/app/page.tsx
import React from 'react';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to Our Website</h1>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <p className="mb-4">
          This is the home page of our Next.js website. We're excited to share our content with you!
        </p>
        <p>
          Explore our site to learn more about our services and how we can help you create amazing web experiences.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-2">Responsive Design</h2>
          <p>We create websites that look great on all devices, from mobile to desktop.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-2">Modern Technologies</h2>
          <p>We use the latest web technologies to ensure your site is fast, secure, and scalable.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-2">User-Centric Approach</h2>
          <p>Our designs focus on providing the best possible user experience for your visitors.</p>
        </div>
      </div>
    </div>
  );
}