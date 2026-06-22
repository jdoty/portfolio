import FadeIn from "./FadeIn";

const categories = [
  {
    name: "Assessment",
    skills: [
      "Web App Penetration Testing",
      "API Security Testing",
      "Source Code Review",
      "Threat Modeling",
      "Mobile App Security",
      "Cloud Configuration Review",
    ],
  },
  {
    name: "Tooling",
    skills: [
      "Burp Suite Pro",
      "Semgrep / CodeQL",
      "Snyk / Dependabot",
      "OWASP ZAP",
      "Nuclei",
      "GitLeaks / TruffleHog",
    ],
  },
  {
    name: "Engineering",
    skills: [
      "Python",
      "TypeScript / Node.js",
      "Go",
      "React / Next.js",
      "AWS / GCP",
      "Docker / Kubernetes",
    ],
  },
  {
    name: "Program Building",
    skills: [
      "Secure SDLC Design",
      "CI/CD Pipeline Security",
      "Developer Training",
      "Security Champions Programs",
      "Vulnerability Management",
      "Compliance (HIPAA, PCI, SOC 2)",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-ice">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-3xl font-bold text-teal">Skills</h2>
          <div className="mt-2 w-12 h-1 bg-seafoam rounded-full" />
        </FadeIn>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {categories.map((cat, i) => (
            <FadeIn key={cat.name} delay={i * 0.1}>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-seafoam/20">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {cat.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm px-3 py-1.5 rounded-full bg-ice text-gray-700 border border-seafoam/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
