'use client';

import { useState, useEffect } from 'react';
import { Github, Twitter, ExternalLink, Linkedin, Mail } from 'lucide-react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [typewriterText, setTypewriterText] = useState('');
  const fullText = 'Software Developer';

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/dishajadav12",
      color: "hover:text-gray-300",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/diishaa12_",
      color: "hover:text-blue-400",
    },
    {
      icon: ExternalLink,
      label: "Portfolio",
      href: "https://dishaa-jadav-portfolio.vercel.app/",
      color: "hover:text-purple-400",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:dishajadav12402@gmail.com",
      color: "hover:text-green-400",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/bg.png')`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-end min-h-screen px-4 sm:px-6 lg:px-8 pb-6">
        <div className="max-w-4xl w-full text-left lg:text-center space-y-1 lg:space-y-3">
          {/* Main Heading */}
          <div
            className={`transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-1 ">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Disha Jadav
              </span>
            </h1>
            <div className="flex items-center justify-center w-full">
              <p className="text-xl sm:text-2xl lg:text-3xl text-gray-200 font-light text-left lg:text-center w-full">
                Software Developer | Designer
              </p>
            </div>
          </div>

          {/* Description */}
          <div
            className={`transition-all duration-1000 ease-out delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-xs sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Debugging life with code in one hand and pizza in the other.
            </p>
          </div>

          {/* Social Links */}
          <div
            className={`transition-all duration-1000 ease-out pt-4 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex justify-center space-x-6 mb-6">
              {socialLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative p-4 rounded-full backdrop-blur-sm bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300 ${link.color}`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <link.icon className="w-6 h-6 text-white transition-colors duration-300" />
                  <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* LinkedIn Connect Button */}
          <div
            className={`w-full transition-all duration-1000 ease-out delay-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <a
              href="https://www.linkedin.com/in/disha-jadav-606484209/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex justify-center items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 group"
            >
              <Linkedin className="w-5 h-5 transition-transform duration-300" />
              <span className="text-lg pt-1 font-medium">Connect Now</span>
            </a>
            <p className="text-xs text-white pt-4 text-center">
              Let’s link up where professionals pretend to be serious!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
