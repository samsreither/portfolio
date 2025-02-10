import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects{" "}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
              <h3 className="text-xl font-bold mb-2">What to Wear</h3>
              <p className="text-gray-400 mb-4"> Users can add clothing items to their account. App recommends which items to wear based on current weather data in Boston. </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node.js", "Express","Google Cloud Server"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://samr.crabdance.com/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  {" "}
                  View Project{" "}
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
              <h3 className="text-xl font-bold mb-2">E-Commerce Site</h3>
              <p className="text-gray-400 mb-4"> E-com site for apple products. All users start with $5,000 to spend.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "TypeScript", "Node.js", "Express", "MongoDB"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/samsreither/ecom-site"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
              <h3 className="text-xl font-bold mb-2">News Explorer</h3>
              <p className="text-gray-400 mb-4"> Users can search for and save most recent news of the day, and create an account to save news to their profile. </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React","Javascript", "Node.js", "Express", "MongoDB"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://samsreither.github.io/news-explorer-frontend/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
              <h3 className="text-xl font-bold mb-2">King County House Sales Analysis</h3>
              <p className="text-gray-400 mb-4"> A dashboard analyzing various housing aspects of King County (Seattle) such as a heat map of house prices by color, as well as a chart showing the daily average house sales price.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "Tableau", "SQL"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://public.tableau.com/app/profile/sam.reither/viz/KingCountyHouseSales_17062194154160/KingCountyHouseSales"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  {" "}
                  View Project{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
