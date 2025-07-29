import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaCheck,
  FaExclamationTriangle,
} from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: "", message: "" });

    try {
      // Replace these with your EmailJS credentials
      const result = await emailjs.sendForm(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        form.current,
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS public key
      );

      if (result.text === "OK") {
        setStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message:
          "Failed to send message. Please try again or contact me directly.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: FaPhone,
      label: "Phone",
      value: "+91 75100 65645",
      href: "tel:+917510065645",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: FaEnvelope,
      label: "Email",
      value: "dev.ayushkumar.in@gmail.com",
      href: "mailto:dev.ayushkumar.in@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: "Amrita Vishwa Vidyapeetham, Coimbatore, Tamil Nadu",
      href: "https://maps.google.com/?q=Amrita+Vishwa+Vidyapeetham+Coimbatore",
      color: "from-red-500 to-pink-500",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-20 sm:py-24 md:py-32 px-4 sm:px-6 md:px-[7vw] lg:px-[12vw] xl:px-[20vw] font-sans"
    >
      <div className="relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="relative inline-block">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-blue-200 mb-4 tracking-tight">
              CONTACT ME
            </h1>
          </div>

          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-purple-400"></div>
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 animate-pulse"></div>
            <div className="h-px w-32 bg-gradient-to-r from-purple-400 to-blue-400"></div>
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse delay-300"></div>
            <div className="h-px w-16 bg-gradient-to-r from-blue-400 to-transparent"></div>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto px-4">
            Let's connect and discuss opportunities, collaborations, or just
            have a great conversation
            <br className="hidden sm:block" />
            I'm always excited to work on innovative projects and meet new
            people
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="h-full">
              <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-8 overflow-hidden h-full flex flex-col">
                <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-purple-500/5 to-transparent"></div>
                <div className="relative flex-1 flex flex-col">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center justify-center">
                      Get In Touch
                    </h2>
                  </div>

                  <div className="space-y-6 flex-1">
                    {contactInfo.map((info, index) => (
                      <a
                        key={index}
                        href={info.href}
                        target={
                          info.href.startsWith("http") ? "_blank" : "_self"
                        }
                        rel={
                          info.href.startsWith("http")
                            ? "noopener noreferrer"
                            : ""
                        }
                        className="group flex items-start space-x-4 p-4 rounded-xl bg-gray-800/30 hover:bg-gray-700/40 border border-gray-600/20 hover:border-purple-500/30 transition-all duration-300"
                      >
                        <div
                          className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br ${info.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                        >
                          <info.icon className="text-white text-lg" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-400 mb-1">
                            {info.label}
                          </p>
                          <p className="text-white group-hover:text-purple-300 transition-colors duration-300 text-sm sm:text-base break-words">
                            {info.value}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="mt-8 pt-8 border-t border-gray-700/50">
                    <h3 className="text-lg font-semibold text-white mb-4 text-center">
                      Connect With Me
                    </h3>
                    <div className="flex justify-center space-x-4">
                      <a
                        href="https://github.com/ay05h"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group w-12 h-12 bg-gray-800/50 hover:bg-gray-700/60 rounded-lg flex items-center justify-center border border-gray-600/30 hover:border-purple-500/40 transition-all duration-300"
                      >
                        <FaGithub className="text-gray-300 group-hover:text-white text-xl transition-colors duration-300" />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/ayush-kumar-rai-ay05h"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group w-12 h-12 bg-gray-800/50 hover:bg-gray-700/60 rounded-lg flex items-center justify-center border border-gray-600/30 hover:border-blue-500/40 transition-all duration-300"
                      >
                        <FaLinkedin className="text-gray-300 group-hover:text-blue-400 text-xl transition-colors duration-300" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="h-full">
              <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-8 overflow-hidden h-full flex flex-col">
                <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-purple-500/5 to-transparent"></div>

                <div className="relative flex-1 flex flex-col">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center justify-center">
                      Send Message
                    </h2>
                  </div>

                  <form
                    ref={form}
                    onSubmit={handleSubmit}
                    className="space-y-6 flex-1 flex flex-col"
                  >
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                        placeholder="Enter your email address"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div className="flex-1">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full h-full min-h-[120px] px-4 py-3 bg-gray-800/50 border border-gray-600/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                        placeholder="Tell me about your project, idea, or just say hello!"
                      ></textarea>
                    </div>

                    {status.message && (
                      <div
                        className={`p-4 rounded-lg border flex items-center space-x-3 ${
                          status.type === "success"
                            ? "bg-green-900/20 border-green-500/30 text-green-300"
                            : "bg-red-900/20 border-red-500/30 text-red-300"
                        }`}
                      >
                        {status.type === "success" ? (
                          <FaCheck className="text-green-400 flex-shrink-0" />
                        ) : (
                          <FaExclamationTriangle className="text-red-400 flex-shrink-0" />
                        )}
                        <span className="text-sm font-medium">
                          {status.message}
                        </span>
                      </div>
                    )}

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-purple-500/25 disabled:cursor-not-allowed group"
                      >
                        {isLoading ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <FaPaperPlane className="group-hover:translate-x-1 transition-transform duration-300" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
