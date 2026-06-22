import FadeIn from "./FadeIn";

const categories = [
  {
    name: "Assessment",
    skills: [
      "Web App Penetration Testing",
      "API Security Testing",
      "Manual Code Review",
      "Threat Modeling (STRIDE)",
      "Mobile App Security",
      "Business Logic Analysis",
    ],
  },
  {
    name: "Tooling",
    skills: [
      "Burp Suite Pro",
      "Fortify / Checkmarx",
      "Dependabot / GitHub Advanced Security",
      "OWASP ZAP",
      "Nessus",
      "Frida / IDA Pro",
    ],
  },
  {
    name: "Engineering",
    skills: [
      "Python",
      "JavaScript / TypeScript",
      "Java / C# / .NET",
      "React / Next.js",
      "Jira Automation",
      "Google Sheets API",
    ],
  },
  {
    name: "Program Building",
    skills: [
      "Secure SDLC Design",
      "CI/CD Security Integration",
      "Vulnerability Management Pipelines",
      "OWASP SAMM / ASVS",
      "Developer Enablement",
      "Compliance (HIPAA, PCI)",
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
