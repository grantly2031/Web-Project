"use client";

import { useState } from "react";

const HeroSection = () => (
  <section className="h-screen bg-gradient-to-b from-blue-700 to-indigo-900 text-white flex flex-col justify-center items-center">
    <h1 className="text-6xl font-bold">Welcome to My Portfolio</h1>
    <p className="text-lg mt-4">Exploring my skills, projects, and journey</p>
    <button className="mt-8 px-6 py-3 bg-purple-600 rounded-full shadow-lg hover:bg-purple-700">
      Learn More
    </button>
  </section>
);

const AboutSection = () => (
  <section id="about" className="py-20 bg-gray-100 text-gray-800">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-4xl font-bold">About Me</h2>
      <p className="mt-4">
        I am a passionate developer, driven by creativity and problem-solving.
      </p>
    </div>
  </section>
);

const PortfolioSection = () => (
  <section id="portfolio" className="py-20 bg-white text-gray-800">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-4xl font-bold">My Portfolio</h2>
      <p className="mt-4">Here are some of my best projects:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="bg-gray-200 p-4 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <h3 className="font-bold">Project {index + 1}</h3>
            <p className="text-sm mt-2">Description of the project goes here.</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-gray-800 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold">Contact Me</h2>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded-lg bg-gray-700 border-none text-white"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full px-4 py-2 rounded-lg bg-gray-700 border-none text-white"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full px-4 py-2 rounded-lg bg-gray-700 border-none text-white"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 rounded-lg shadow-md hover:bg-blue-700"
