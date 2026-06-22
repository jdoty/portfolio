import FadeIn from "./FadeIn";

const experiences = [
  {
    company: "Charlie Health",
    title: "Senior Application Security Engineer",
    period: "Jan 2025 -- Jun 2025",
    description:
      "Built AppSec program foundation from scratch in a HIPAA-regulated SaaS environment.",
    bullets: [
      "Stood up SAST, SCA, and secrets-detection pipelines across 30+ microservices in the first 60 days",
      "Designed and implemented a secure code review process integrated into GitHub PR workflows",
      "Led threat modeling sessions for critical patient-facing features under HIPAA constraints",
      "Created developer security training program tailored to React/Node.js stack",
    ],
  },
  {
    company: "Optiv",
    title: "Senior Security Consultant",
    period: "2017 -- 2024",
    description:
      "Led enterprise AppSec engagements across financial services, healthcare, retail, and regulated industries.",
    bullets: [
      "Performed 200+ web application penetration tests and source code reviews for Fortune 500 clients",
      "Designed and delivered secure SDLC programs for organizations with 500+ developers",
      "Identified critical authentication bypass and injection vulnerabilities in banking platforms",
      "Mentored junior consultants and developed internal assessment methodology documentation",
      "Specialized in OAuth/OIDC, API security, and cloud-native application architectures",
    ],
  },
  {
    company: "Denim Group / Coalfire",
    title: "Application Security Consultant",
    period: "2010 -- 2016",
    description:
      "Manual security assessments, code reviews, and client-facing consulting for defense and commercial clients.",
    bullets: [
      "Conducted manual code reviews in Java, C#, Python, and PHP for government and enterprise clients",
      "Built custom fuzzing and automation tooling to improve assessment coverage and efficiency",
      "Performed network and application penetration testing for PCI-DSS and FedRAMP compliance",
      "Authored detailed remediation guidance and presented findings to executive stakeholders",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-3xl font-bold text-teal">Experience</h2>
          <div className="mt-2 w-12 h-1 bg-seafoam rounded-full" />
        </FadeIn>

        <div className="mt-12 relative">
          <div className="absolute left-[7px] top-2 bottom-0 w-0.5 bg-seafoam/40" />

          {experiences.map((exp, i) => (
            <FadeIn key={exp.company} delay={i * 0.1}>
              <div className="relative pl-10 pb-12 last:pb-0">
                <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full bg-teal border-[3px] border-white ring-2 ring-seafoam/40" />
                <h3 className="text-xl font-semibold text-gray-900">
                  {exp.company}
                </h3>
                <p className="text-teal font-medium">{exp.title}</p>
                <p className="text-sm text-gray-500 mt-1">{exp.period}</p>
                <p className="mt-2 text-gray-600">{exp.description}</p>
                {exp.bullets && (
                  <ul className="mt-3 space-y-2">
                    {exp.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="text-gray-600 text-sm pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.55rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-seafoam"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </FadeIn>
          ))}

          <FadeIn delay={0.3}>
            <div className="relative pl-10">
              <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full bg-coral border-[3px] border-white ring-2 ring-seafoam/40" />
              <h3 className="text-xl font-semibold text-gray-900">UTSA</h3>
              <p className="text-teal font-medium">B.S. Computer Science</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
