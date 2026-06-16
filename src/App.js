import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans">
      
      {/* Navbar */}
      <nav className="p-6 flex justify-between items-center max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold text-blue-500">Portfolio</h1>
        <div className="space-x-6 text-gray-400">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="py-20 text-center px-4">
        <h1 className="text-6xl font-extrabold mb-4">I'm a <span className="text-blue-500">Full Stack Developer</span></h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Passionate 3rd-year Engineering student building scalable web applications with MERN Stack.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-4xl mx-auto py-10 px-4">
        <h2 className="text-3xl font-semibold mb-8 border-l-4 border-blue-500 pl-4">Projects</h2>
        
        {/* Foodverse Project Card */}
        <div className="bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-800 hover:border-blue-500 transition-all duration-300">
          <h3 className="text-2xl font-bold mb-2">Foodverse</h3>
          <p className="text-gray-400 mb-6">
            A complete MERN stack food delivery application. Features include secure user 
            authentication, cart management, and seamless database integration with MongoDB.
          </p>
          <div className="flex space-x-4">
            <a 
              href="https://github.com/your-username/foodverse" 
              target="_blank" 
              rel="noreferrer" 
              className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-medium transition"
            >
              GitHub Repo
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noreferrer" 
              className="border border-gray-600 hover:border-white px-6 py-2 rounded-lg transition"
            >
              Live Demo
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-10 text-center text-gray-500">
        <p>© 2026 Developed by You. Built with React & Tailwind.</p>
        <div className="mt-4 space-x-4">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-400">LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
        </div>
      </footer>
      
    </div>
  );
}

export default App;