import FadeIn from "./FadeIn";

const projects = [
  {
    name: "IdleHunt",
    url: "https://idlehunt.app",
    description:
      "AI-powered job search app that scrapes 10+ job boards, scores roles against your resume using NLP, and generates tailored cover letters. Handles the grind so you can focus on prep and interviews.",
    tag: "Live",
    tech: ["React Native", "Python", "OpenAI", "PostgreSQL"],
  },
  {
    name: "BountyBrain",
    url: null,
    description:
      "Recon and workflow dashboard for bug bounty hunting. Integrates with HackerOne, automates subdomain enumeration and port scanning, and tracks findings across programs.",
    tag: "Tool",
    tech: ["Next.js", "Go", "Docker", "Nuclei"],
  },
  {
    name: "BrewBeat",
    url: null,
    description:
      "Indie rhythm typing game where you type lyrics to the beat. Built as a creative side project to learn game dev with Godot 4 and GDScript.",
    tag: "In Progress",
    tech: ["Godot 4", "GDScript", "Aseprite"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-ice">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-3xl font-bold text-teal">Projects</h2>
          <div className="mt-2 w-12 h-1 bg-seafoam rounded-full" />
        </FadeIn>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {projects.map((project, i) => (
            <FadeIn key={project.name} delay={i * 0.1}>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-seafoam/20 hover:shadow-md transition-shadow h-full flex flex-col">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {project.name}
                  </h3>
                  <span className="shrink-0 text-xs font-medium px-2.5 py-1 rounded-full bg-coral-light text-gray-700">
                    {project.tag}
                  </span>
                </div>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal hover:text-teal/70 text-sm mt-1 transition-colors"
                  >
                    {project.url.replace("https://", "")}
                  </a>
                )}
                <p className="mt-3 text-gray-600 flex-1">
                  {project.description}
                </p>
                {project.tech && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-1 rounded bg-ice text-teal font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
