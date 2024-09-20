import React from 'react';

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="mb-4">We'd love to hear from you. Get in touch with us using the information below:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Email: contact@example.com</li>
          <li>Phone: (123) 456-7890</li>
          <li>Address: 123 Web Dev Street, Techville, TX 12345</li>
        </ul>
        <p>
          Alternatively, you can fill out our contact form (coming soon) and we'll get back to you as soon as possible.
        </p>
      </div>
    </div>
  );
}