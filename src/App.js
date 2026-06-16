import React from 'react';

function App() {
  const projects = [
    {
      title: "Foodverse",
      desc: "A complete MERN stack food delivery application. Features include secure user authentication, cart management, and seamless database integration with MongoDB.",
      github: "https://github.com/your-username/foodverse",
      demo: "#"
    },
    {
      title: "Legal-Eyes",
      desc: "AI-powered tool using Gemini API to analyze legal documents and identify problematic clauses.",
      github: "https://github.com/your-username/legal-eyes",
      demo: "#"
    }
  ];

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

      {/* Hero / About Section */}
      <section id="about" className="py-16 text-center px-4">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          I am a 3rd-year B.Tech CSE student specializing in AI. 
          Passionate about solving complex problems (100+ LeetCode) 
          and building scalable full-stack applications with MERN.
        </p>
      </section>

      {/* Skills Section */}
      <section className="py-10 max-w-4xl mx-auto text-center px-4">
        <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {["C++", "JavaScript", "React", "Node.js", "MongoDB", "Tailwind CSS", "Git"].map(skill => (
            <span key={skill} className="px-4 py-2 bg-blue-900/30 text-blue-400 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-4xl mx-auto py-10 px-4">
        <h2 className="text-3xl font-semibold mb-8 border-l-4 border-blue-500 pl-4">Projects</h2>
        <div className="grid gap-6">
          {projects.map((p, index) => (
            <div key={index} className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-blue-500 transition">
              <h3 className="text-2xl font-bold mb-2">{p.title}</h3>
              <p className="text-gray-400 mb-6">{p.desc}</p>
              <div className="flex space-x-4">
                <a href={p.github} target="_blank" rel="noreferrer" className="text-blue-400 font-semibold hover:underline">GitHub Repo</a>
                <a href={p.demo} target="_blank" rel="noreferrer" className="text-gray-400 font-semibold hover:underline">Live Demo</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-10 text-center text-gray-500">
        <p>© 2026 Developed by Somesh. Built with React & Tailwind.</p>
        <div className="mt-4 space-x-4">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-400">LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
        </div>
      </footer>
      
    </div>
  );
}

export default App;