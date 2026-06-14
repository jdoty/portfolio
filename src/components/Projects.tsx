import FadeIn from "./FadeIn";

const projects = [
  {
    name: "IdleHunt",
    url: "https://idlehunt.app",
    description:
      "AI-powered job search app. Scrapes 10+ job boards, scores roles against your resume, generates tailored cover letters. iOS and Android.",
    tag: "Live",
  },
  {
    name: "BountyBrain",
    url: null,
    description:
      "Bug bounty recon dashboard with HackerOne integration and asset discovery tooling.",
    tag: "Tool",
  },
  {
    name: "BrewBeat",
    url: null,
    description:
      "Indie rhythm typing game built in Godot 4. Currently in development.",
    tag: "In Progress",
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
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
