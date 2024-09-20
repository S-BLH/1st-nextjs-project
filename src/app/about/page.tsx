import React from 'react';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="mb-4">
          We are a passionate team dedicated to creating amazing web experiences. Our mission is to deliver high-quality, innovative solutions to our clients.
        </p>
        <p className="mb-4">
          Founded in 2024, our company has grown from a small startup to a leader in web development. We specialize in creating responsive, user-friendly websites and applications using cutting-edge technologies like Next.js and React.
        </p>
        <p>
          Our team consists of experienced developers, designers, and project managers who work together to bring your vision to life.
        </p>
      </div>
    </div>
  );
}