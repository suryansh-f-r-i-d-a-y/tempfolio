import './App.css'
import Accordian from './Components/Accordian/Accordian'
import Navbar from './Components/Navbar/Navbar'

function App() {

  return (
    <>
      <Navbar />

      <div className='landing-section relative overflow-hidden bg-gray-50/5'>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

            {/* Left Column - Main Content */}
            <div className="lg:col-span-7 space-y-6">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full font-mono">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-emerald-400">$ status: available_for_work</span>
              </div>

              {/* Main Heading */}
              <div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
                  <span className="text-white font-mono">const</span>{' '}
                  <span className="text-purple-400">developer</span>
                  <span className="text-white"> = </span>
                  <span className="text-yellow-400">"</span>
                  <span className="text-green-400">Suryansh</span>
                  <span className="text-yellow-400">"</span>
                  <span className="text-gray-500">;</span>
                </h1>

                <p className="text-lg text-gray-400 max-w-xl mb-8">
                  <span className="text-gray-500 font-mono">// </span>
                  Full-stack engineer crafting elegant solutions, one commit at a time ⚡
                </p>

                <button className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 hover:scale-105 font-mono">
                  git commit -m "Let's collaborate"
                </button>
              </div>
            </div>

            {/* Right Column - Bento Grid */}
            <div className="lg:col-span-5 space-y-6">

              {/* Terminal-style Code Window */}
              <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300">
                {/* Terminal Header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-800/50 border-b border-gray-700/50">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-xs text-gray-400 font-mono ml-2">~/suryansh/portfolio</span>
                </div>
                {/* Code Content */}
                <div className="p-4 font-mono text-sm">
                  <div className="space-y-1">
                    <div>
                      <span className="text-purple-400">class</span>{' '}
                      <span className="text-yellow-300">Developer</span>{' '}
                      <span className="text-white">{'{'}</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-blue-400">constructor</span>
                      <span className="text-white">() {'{'}</span>
                    </div>
                    <div className="pl-8">
                      <span className="text-gray-400">this</span>
                      <span className="text-white">.name = </span>
                      <span className="text-green-400">'Suryansh'</span>
                      <span className="text-white">;</span>
                    </div>
                    <div className="pl-8">
                      <span className="text-gray-400">this</span>
                      <span className="text-white">.skills = [</span>
                      <span className="text-green-400">'React'</span>
                      <span className="text-white">, </span>
                      <span className="text-green-400">'Node'</span>
                      <span className="text-white">];</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-white">{'}'}</span>
                    </div>
                    <div>
                      <span className="text-white">{'}'}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Card */}
              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">📊</span>
                  <h3 className="text-lg font-bold text-white font-mono">stats.json</h3>
                </div>

                <div className="space-y-3 font-mono text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">"coffee_consumed":</span>
                    <span className="text-yellow-400">∞</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">"bugs_fixed":</span>
                    <span className="text-green-400">9999+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">"commits_today":</span>
                    <span className="text-blue-400">42</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">"favorite_editor":</span>
                    <span className="text-purple-400">"VSCode"</span>
                  </div>
                </div>
              </div>

              {/* Tech Stack Card */}
              <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 transition-all duration-300">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl">🛠️</span>
                  <p className="text-sm text-gray-400 font-mono">
                    // Tech stack I love working with
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <div className="px-3 py-1.5 bg-white/10 rounded-lg border border-white/10 font-mono text-sm">
                    <span className="text-blue-400">React</span>
                  </div>
                  <div className="px-3 py-1.5 bg-white/10 rounded-lg border border-white/10 font-mono text-sm">
                    <span className="text-green-400">Node.js</span>
                  </div>
                  <div className="px-3 py-1.5 bg-white/10 rounded-lg border border-white/10 font-mono text-sm">
                    <span className="text-emerald-400">MongoDB</span>
                  </div>
                  <div className="px-3 py-1.5 bg-white/10 rounded-lg border border-white/10 font-mono text-sm">
                    <span className="text-cyan-400">Tailwind</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                <a href="https://github.com/suryansh" target="_blank" rel="noopener noreferrer" className="flex-1 group relative overflow-hidden bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/20 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span className="text-sm font-mono text-white">GitHub</span>
                  </div>
                </a>
                <a href="https://linkedin.com/in/suryansh" target="_blank" rel="noopener noreferrer" className="flex-1 group relative overflow-hidden bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 rounded-xl p-4 hover:bg-blue-500/30 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    <span className="text-sm font-mono text-blue-400">LinkedIn</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Expertise Section - System Architecture */}
      <div className="py-20 px-6 max-w-7xl mx-auto" id="about">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-purple-400 font-mono">01.</span> <span className="text-white">System Architecture</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Frontend Module */}
          <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 transition-all group">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 group-hover:text-blue-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="text-xl font-mono text-white">Client_Side</h3>
            </div>
            <p className="text-gray-400 text-sm mb-4 font-mono">// Responsive & Interactive UI</p>
            <ul className="space-y-2 text-sm font-mono text-gray-300">
              <li className="flex items-center gap-2"><span className="text-green-400">✓</span> React.js / Next.js</li>
              <li className="flex items-center gap-2"><span className="text-green-400">✓</span> Tailwind CSS</li>
              <li className="flex items-center gap-2"><span className="text-green-400">✓</span> Framer Motion</li>
            </ul>
          </div>

          {/* Backend Module */}
          <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 transition-all group">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-green-500/10 rounded-lg text-green-400 group-hover:text-green-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
              </div>
              <h3 className="text-xl font-mono text-white">Server_Side</h3>
            </div>
            <p className="text-gray-400 text-sm mb-4 font-mono">// Scalable API & Logic</p>
            <ul className="space-y-2 text-sm font-mono text-gray-300">
              <li className="flex items-center gap-2"><span className="text-green-400">✓</span> Node.js / Express</li>
              <li className="flex items-center gap-2"><span className="text-green-400">✓</span> RESTful APIs</li>
              <li className="flex items-center gap-2"><span className="text-green-400">✓</span> Microservices</li>
            </ul>
          </div>

          {/* Database Module */}
          <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 transition-all group">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-yellow-500/10 rounded-lg text-yellow-400 group-hover:text-yellow-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
              </div>
              <h3 className="text-xl font-mono text-white">Data_Layer</h3>
            </div>
            <p className="text-gray-400 text-sm mb-4 font-mono">// Efficient Data Management</p>
            <ul className="space-y-2 text-sm font-mono text-gray-300">
              <li className="flex items-center gap-2"><span className="text-green-400">✓</span> MongoDB</li>
              <li className="flex items-center gap-2"><span className="text-green-400">✓</span> PostgreSQL</li>
              <li className="flex items-center gap-2"><span className="text-green-400">✓</span> Redis</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Skills Section - package.json */}
      <div className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-purple-400 font-mono">02.</span> <span className="text-white">package.json</span>
        </h2>

        <div className="bg-[#1e1e1e] rounded-xl overflow-hidden shadow-2xl border border-gray-800 font-mono text-sm md:text-base">
          <div className="flex items-center px-4 py-2 bg-[#252526] border-b border-gray-800">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="ml-4 text-gray-400 text-xs">package.json</span>
          </div>
          <div className="p-6 text-gray-300 overflow-x-auto">
            <pre>
              {`{
  "name": "suryansh-portfolio",
  "version": "1.0.0",
  "description": "Full Stack Developer",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "build": "webpack --mode production"
  },
  "dependencies": {
    "react": "^18.2.0",
    "next": "^13.4.0",
    "tailwindcss": "^3.3.0",
    "framer-motion": "^10.12.0",
    "three": "^0.150.0"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "eslint": "^8.38.0",
    "jest": "^29.5.0",
    "vite": "^4.3.0"
  },
  "peerDependencies": {
    "node": ">=16.0.0",
    "npm": ">=8.0.0"
  },
  "author": "Suryansh <suryansh.dev@example.com>",
  "license": "MIT"
}`}
            </pre>
          </div>
        </div>
      </div>


      <div>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-purple-400 font-mono">03.</span> <span className="text-white">Commit History</span>
          </h2>
          <p className="text-gray-400 mt-2 font-mono text-sm">git log --oneline</p>
        </div>
        <Accordian />
      </div>

      {/* Contact Section - API Endpoint */}
      <div className="py-20 px-6 max-w-4xl mx-auto" id="contact">
        <div className="bg-[#1e1e1e] rounded-xl overflow-hidden shadow-2xl border border-gray-800 font-mono">
          {/* Window Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#252526] border-b border-gray-800">
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-gray-800 rounded text-xs text-gray-400">
                <span className="text-green-400 font-bold">POST</span>
                <span>api/contact/send</span>
              </div>
            </div>
            <div className="text-xs text-gray-500">JSON</div>
          </div>

          {/* Code Area */}
          <div className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Request Body (Form) */}
              <div className="space-y-4">
                <div className="text-gray-500 text-sm mb-2">// Request Body</div>
                <div className="text-purple-400">{'{'}</div>

                <div className="pl-4 space-y-3">
                  <div className="flex flex-col">
                    <label className="text-blue-400 text-sm mb-1">"name":</label>
                    <input type="text" placeholder="John Doe" className="bg-gray-800/50 border border-gray-700 rounded px-3 py-2 text-green-300 focus:outline-none focus:border-purple-500 transition-colors text-sm" />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-blue-400 text-sm mb-1">"email":</label>
                    <input type="email" placeholder="john@example.com" className="bg-gray-800/50 border border-gray-700 rounded px-3 py-2 text-green-300 focus:outline-none focus:border-purple-500 transition-colors text-sm" />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-blue-400 text-sm mb-1">"message":</label>
                    <textarea rows="3" placeholder="Let's build something awesome..." className="bg-gray-800/50 border border-gray-700 rounded px-3 py-2 text-green-300 focus:outline-none focus:border-purple-500 transition-colors text-sm resize-none"></textarea>
                  </div>
                </div>

                <div className="text-purple-400">{'}'}</div>

                <button className="mt-4 w-full py-3 bg-purple-600 hover:bg-purple-700 text-white rounded font-medium transition-colors flex items-center justify-center gap-2 group">
                  <span>Send Request</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
              </div>

              {/* Response Preview */}
              <div className="hidden md:block border-l border-gray-800 pl-8">
                <div className="text-gray-500 text-sm mb-2">// Response Preview</div>
                <div className="text-sm space-y-1">
                  <div><span className="text-purple-400">HTTP/1.1</span> <span className="text-green-400">200 OK</span></div>
                  <div><span className="text-gray-500">Content-Type:</span> <span className="text-yellow-300">application/json</span></div>
                  <br />
                  <div className="text-purple-400">{'{'}</div>
                  <div className="pl-4">
                    <span className="text-blue-400">"success"</span>: <span className="text-yellow-300">true</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-blue-400">"message"</span>: <span className="text-green-300">"Message received! I'll get back to you soon."</span>
                  </div>
                  <div className="text-purple-400">{'}'}</div>
                </div>

                {/* Social Links as Comments */}
                <div className="mt-8 pt-8 border-t border-gray-800">
                  <div className="text-gray-500 text-sm mb-4">// Find me elsewhere</div>
                  <div className="flex gap-4">
                    <a href="https://github.com/suryansh" className="text-gray-400 hover:text-white transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                    </a>
                    <a href="https://linkedin.com/in/suryansh" className="text-gray-400 hover:text-blue-400 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                    </a>
                    <a href="https://twitter.com/suryansh" className="text-gray-400 hover:text-sky-400 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
