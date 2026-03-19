import { useEffect, useState } from "react";

function Projects() {
  const [repos, setRepos] = useState([]);

  const repoNames = ["ExpenseTracker", "HostelControlSystem", "MCQGenerator"];

  useEffect(() => {
    Promise.all(
      repoNames.map((name) =>
        fetch(`https://api.github.com/repos/HarshalMakode/${name}`)
          .then((res) => res.json())
      )
    ).then((data) => {
      const valid = data.filter((repo) => !repo.message); // 🔥 FIX
      setRepos(valid);
    });
  }, []);

  return (
    <section id="projects" className="bg-white/5 py-24 px-8">
      <div className="max-w-[1100px] mx-auto">

        {/* Title */}
        <h2 className="text-center font-pokemon text-yellow-400 text-lg mb-12">
          PROJECTS
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-8">

          {repos.map((repo, index) => (
            <div
              key={repo.id}
              className="bg-[#003A70] border-[3px] border-white/10 rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.3)] transition-all hover:-translate-y-2 hover:border-yellow-400"
            >

              {/* Header */}
              <div
                className={`h-[120px] flex items-center justify-center text-[4rem] overflow-hidden ${
                  index === 0
                    ? "bg-gradient-to-br from-[#1a1a2e] to-[#16213e]"
                    : index === 1
                    ? "bg-gradient-to-br from-[#0d1b2a] to-[#1b263b]"
                    : "bg-gradient-to-br from-[#1a0533] to-[#2d1b69]"
                }`}
              >
                {index === 0 ? "🌐" : index === 1 ? "🤖" : "📱"}
              </div>

              {/* Body */}
              <div className="p-6">

                {/* ID */}
                <div className="font-pokemon text-[6px] text-white/30 mb-2">
                  PROJECT #{String(index + 1).padStart(3, "0")}
                </div>

                {/* Name */}
                <div className="font-pokemon text-[10px] text-yellow-400 mb-3 leading-5">
                  {repo.name ? repo.name.toUpperCase() : "PROJECT"}
                </div>

                {/* Desc */}
                <p className="text-[13px] text-white/65 leading-6 mb-5">
                  {repo.description || "No description available"}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-[6px] mb-5">
                  {repo.language && (
                    <span className="font-pokemon text-[6px] px-2 py-[2px] bg-yellow-400/15 text-yellow-400 border border-yellow-400/30 rounded">
                      {repo.language}
                    </span>
                  )}
                </div>

                {/* Link */}
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-pokemon text-[7px] text-yellow-400 flex items-center gap-2 transition-all hover:gap-3"
                >
                  VIEW PROJECT →
                </a>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;