export default function Resume() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-slate-900 to-black p-8">
      <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-purple-500/20">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-8 rounded-t-2xl">
          <h1 className="text-4xl font-bold text-white mb-2">Bradyn Blackburn</h1>
          <div className="text-purple-100 space-y-1">
            <p>📧 bradyn.blackburn@email.com</p>
            <p>📱 (555) 123-4567</p>
            <p>📍 Elmore County, Alabama</p>
          </div>
        </div>

        <div className="p-8 space-y-8">
          {/* Summary */}
          <section>
            <h2 className="text-2xl font-bold text-purple-300 mb-4 border-b border-purple-500/30 pb-2">Summary</h2>
            <p className="text-gray-300 leading-relaxed">
              Passionate middle school student with a strong interest in programming and game development. Experienced
              in multiple programming languages and game engines, with a focus on creating games and useful scripts.
              Active in school activities and always eager to learn new technologies.
            </p>
          </section>

          {/* Technical Skills */}
          <section>
            <h2 className="text-2xl font-bold text-purple-300 mb-4 border-b border-purple-500/30 pb-2">
              Technical Skills
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-semibold text-purple-200 mb-2">Programming Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {["HTML", "Python", "C#", "JavaScript", "TypeScript", "Ruby"].map((skill) => (
                    <span
                      key={skill}
                      className="bg-purple-600/30 text-purple-100 px-3 py-1 rounded-full text-sm border border-purple-500/40"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-purple-200 mb-2">Other Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {["Unity Engine", "Game Development", "Troubleshooting", "Script Writing"].map((skill) => (
                    <span
                      key={skill}
                      className="bg-slate-600/50 text-slate-200 px-3 py-1 rounded-full text-sm border border-slate-500/40"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-2xl font-bold text-purple-300 mb-4 border-b border-purple-500/30 pb-2">Education</h2>
            <div className="bg-slate-700/50 p-4 rounded-lg border border-slate-600/50">
              <h3 className="text-lg font-semibold text-white">Elmore County Middle School</h3>
              <p className="text-gray-300">Current Student</p>
              <p className="text-gray-400 text-sm">Elmore County, Alabama</p>
            </div>
          </section>

          {/* Activities */}
          <section>
            <h2 className="text-2xl font-bold text-purple-300 mb-4 border-b border-purple-500/30 pb-2">Activities</h2>
            <div className="bg-slate-700/50 p-4 rounded-lg border border-slate-600/50">
              <h3 className="text-lg font-semibold text-white">Marching Band Member</h3>
              <p className="text-gray-300">Elmore County Middle School</p>
              <p className="text-gray-400 text-sm">1 year 4 months experience</p>
              <p className="text-gray-300 text-sm mt-2">
                Active participant in school marching band, demonstrating commitment, teamwork, and musical skills.
              </p>
            </div>
          </section>

          {/* Projects & Experience */}
          <section>
            <h2 className="text-2xl font-bold text-purple-300 mb-4 border-b border-purple-500/30 pb-2">
              Projects & Experience
            </h2>
            <div className="space-y-4">
              <div className="bg-slate-700/50 p-4 rounded-lg border border-slate-600/50">
                <h3 className="text-lg font-semibold text-white">Game Development</h3>
                <p className="text-gray-300 text-sm mb-2">Personal Projects</p>
                <p className="text-gray-300">
                  Develop games using Unity Engine as a hobby, focusing on gameplay mechanics and user experience.
                </p>
              </div>
              <div className="bg-slate-700/50 p-4 rounded-lg border border-slate-600/50">
                <h3 className="text-lg font-semibold text-white">Script Development</h3>
                <p className="text-gray-300 text-sm mb-2">Personal Projects</p>
                <p className="text-gray-300">
                  Create useful scripts and programs for fun, exploring different programming languages and solving
                  various problems.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
