import FadeIn from "./FadeIn";

const experiences = [
  {
    company: "Charlie Health",
    title: "Senior Application Security Engineer",
    period: "Jan 2025 -- Jun 2025",
    description:
      "Led application security efforts within a HIPAA-regulated SaaS platform handling sensitive healthcare data.",
    bullets: [
      "Designed and implemented an automated vulnerability management pipeline integrating GitHub Dependabot with Jira and reporting dashboards",
      "Developed Python scripts to aggregate open vulnerabilities across repositories and create prioritized remediation tickets based on SLA",
      "Conducted threat modeling and secure architecture reviews prior to release",
      "Performed static, dynamic, and dependency-based testing and translated findings into prioritized remediation plans",
      "Defined and documented organization-wide application security policies aligned with OWASP SAMM",
      "Partnered with engineering and DevOps teams to integrate security controls into CI/CD workflows",
    ],
  },
  {
    company: "Optiv",
    title: "Sr. Security Consultant (Threat Management)",
    period: "Jan 2017 -- Mar 2024",
    description:
      "Senior application security advisor for enterprise clients, including financial services and insurance organizations supporting high-volume transactional systems.",
    bullets: [
      "Designed and implemented a repeatable threat modeling process for a large auto insurance company to be executed by development teams",
      "Led large-scale application security engagements, including multi-application threat modeling and extensive code review projects involving millions of lines of code",
      "Conducted manual code reviews and application security assessments across web, mobile, API, and thick-client systems",
      "Evaluated payment processing systems, authentication workflows, and sensitive financial data handling architectures",
      "Provided structured remediation guidance and assisted clients in integrating automated security testing into development pipelines",
      "Participated in internal peer review processes to ensure technical accuracy and quality of security deliverables",
    ],
  },
  {
    company: "Denim Group (Now Coalfire)",
    title: "Application Development Consultant / Application Security Consultant",
    period: "Dec 2010 -- Oct 2016",
    description:
      "Application security assessments, code reviews, and secure development across web, API, and distributed systems.",
    bullets: [
      "Performed application security assessments and code reviews across web, mobile, API, and thick-client applications",
      "Contributed to secure SDLC execution for a financial monitoring and fraud prevention platform",
      "Developed and maintained automated regression test suites for enterprise web applications",
      "Supported production application maintenance, including troubleshooting and emergency issue resolution",
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
              <h3 className="text-xl font-semibold text-gray-900">
                University of Texas at San Antonio
              </h3>
              <p className="text-teal font-medium">B.S. Computer Science</p>
              <p className="text-sm text-gray-500 mt-1">Aug 2005 -- Dec 2010</p>
              <p className="mt-2 text-gray-600 text-sm">
                Concentrations in Software Engineering and Computer &amp;
                Information Security
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
