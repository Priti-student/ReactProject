import React from "react"
import "./index.css";
import { useState } from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}\n\n YOUR MESSAGE HAS BEEN SENT SUCCESSFULLY.`);
  };

  return (
    <div className="p-4 m-4">
    <h2 className="flex justify-center items-center text-white text-5xl mb-4 font-bold">Contact</h2>
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto p-10 bg-white border rounded-2xl ">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your Name"
        className="border p-2 rounded"
        required
      />

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Your Email"
        className="border p-2 rounded"
        required
      />

      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Your Message"
        className="border p-2 rounded h-32"
        required
      />

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Send Message
      </button>
    </form>
    </div>
  );
}

export function ContactIcons() {
  return (
    <div className="flex gap-6 justify-center mt-6 text-4xl pb-10 text-[var(--icon-color)]">
      <a href="https://www.linkedin.com/in/priti-ram?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="hover:text-blue-600 transition duration-300" />
      </a>
      <a href="https://www.instagram.com/pretty__priti____/profilecard/?igsh=NzNlaDVzemlpYmlj" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="hover:text-pink-500 transition duration-300" />
      </a>
      <a href="https://github.com/Priti-student" target="_blank" rel="noopener noreferrer">
        <FaGithub className="hover:text-gray-800 transition duration-300" />
      </a>
    </div>
  );
}
