import React from 'react';

function App() {
  const projects = [
    {
      title: "Foodverse",
      desc: "A complete MERN stack food delivery application. Features include secure user authentication (Passport.js), cart management, and seamless database integration with MongoDB.",
      github: "https://github.com/somesh-pandey12/FoodVerse-MERN-App",
      demo: "#" // Jab live link ho, tab "#" hata kar link daal dena
    }
  ];

  const achievements = [
    {
      title: "LeetCode Milestone",
      detail: "Solved over 100+ Data Structures and Algorithms (DSA) problems using C++, focusing on arrays, searching, and algorithmic optimization.",
      metric: "100+ Problems"
    },
    {
      title: "Version Control & Collaboration",
      detail: "Experienced in managing repository branches, clean commit workflows, and effectively resolving merge conflicts within project teams.",
      metric: "Git & GitHub"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans selection:bg-blue-500 selection:text-white">
      
      {/* Navbar */}
      <nav className="p-6 flex justify-between items-center max-w-5xl mx-auto sticky top-0 bg-gray-950/80 backdrop-blur-md z-50">
        <h1 className="text-2xl font-bold text-blue-500 tracking-wider">SOMESH</h1>
        <div className="space-x-6 text-gray-400 font-medium">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#achievements" className="hover:text-white transition">Achievements</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>
      </nav>

      {/* Hero / About Section */}
      <section id="about" className="py-20 text-center px-4 max-w-3xl mx-auto">
        <p className="text-blue-500 font-semibold uppercase tracking-widest text-sm mb-3">Welcome to my portfolio</p>
        <h2 className="text-5xl font-extrabold mb-6 leading-tight">
          Building Scalable Web Apps & Exploring <span className="text-blue-500">AI Solutions</span>
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          I am a 3rd-year B.Tech CSE student specializing in Artificial Intelligence. 
          Passionate about Full Stack Web Development (MERN Stack) and building clean, 
          user-focused digital experiences.
        </p>
      </section>

      {/* Skills Section */}
      <section className="py-8 max-w-4xl mx-auto text-center px-4 border-t border-gray-900">
        <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">Technical Tools & Frameworks</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {["C++", "JavaScript", "React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Git & GitHub"].map(skill => (
            <span key={skill} className="px-4 py-2 bg-gray-900 border border-gray-800 text-blue-400 rounded-xl font-medium text-sm">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-blue-500 pl-4">Featured Projects</h2>
        <div className="grid gap-6">
          {projects.map((p, index) => (
            <div key={index} className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 shadow-lg">
              <h3 className="text-2xl font-bold mb-3 text-white">{p.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">{p.desc}</p>
              <div className="flex space-x-4">
                <a href={p.github} target="_blank" rel="noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition">
                  GitHub Repo
                </a>
                {p.demo !== "#" && (
                  <a href={p.demo} target="_blank" rel="noreferrer" className="border border-gray-700 hover:border-gray-500 text-gray-300 px-5 py-2.5 rounded-xl text-sm font-semibold transition">
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements & Coding Profiles Section */}
      <section id="achievements" className="max-w-4xl mx-auto py-16 px-4 border-t border-gray-900">
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-blue-500 pl-4">Problem Solving & Coding Metrics</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((ach, index) => (
            <div key={index} className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-blue-500 bg-blue-500/10 px-3 py-1 rounded-full uppercase tracking-wider">{ach.metric}</span>
                <h3 className="text-xl font-bold mt-3 mb-2 text-white">{ach.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{ach.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-4xl mx-auto py-20 px-4 text-center border-t border-gray-900">
        <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
        <p className="text-gray-400 max-w-lg mx-auto mb-8">
          I am actively looking for internship opportunities and software engineering roles. 
          If you have a question or just want to say hi, feel free to drop a mail!
        </p>
        <a 
          href="mailto:somesh.email@example.com" // Yahan apna asli email daal dein
          className="bg-white text-gray-950 hover:bg-gray-200 px-8 py-3.5 rounded-xl font-bold transition shadow-lg inline-block"
        >
          Say Hello 👋
        </a>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-gray-600 border-t border-gray-900 max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 gap-4">
        <p className="text-sm">© 2026 Somesh. All rights reserved.</p>
        <div className="space-x-6 text-sm font-medium">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">LinkedIn</a>
          <a href="https://github.com/somesh-pandey12" target="_blank" rel="noreferrer" className="hover:text-white transition">GitHub</a>
        </div>
      </footer>
      
    </div>
  );
}

export default App;