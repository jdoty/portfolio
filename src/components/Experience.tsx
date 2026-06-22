import FadeIn from "./FadeIn";

const experiences = [
  {
    company: "Charlie Health",
    title: "Senior Application Security Engineer",
    period: "Jan 2025 -- Jun 2025",
    description:
      "Embedded application security into a HIPAA-regulated SaaS development lifecycle supporting sensitive healthcare data.",
    bullets: [
      "Conducted threat modeling and architecture reviews prior to feature release to proactively identify systemic risk",
      "Integrated static, dynamic, and dependency scanning into CI/CD workflows",
      "Built Python-based automation to aggregate and normalize vulnerability data across repositories, enabling prioritized remediation and improved engineering visibility",
      "Partnered with engineering teams to contextualize findings and prioritize remediation based on exploitability and business impact",
      "Defined and documented security processes aligned with industry frameworks to improve organizational maturity",
    ],
  },
  {
    company: "Optiv",
    title: "Sr. Security Consultant (Threat Management)",
    period: "Jan 2017 -- Mar 2024",
    description:
      "Senior application security consultant on enterprise engagements across financial services and insurance organizations supporting high-volume transactional systems.",
    bullets: [
      "Led threat modeling and extensive manual code review engagements involving millions of lines of code",
      "Performed authenticated and unauthenticated testing of web, API, mobile, and thick-client applications",
      "Evaluated payment processing systems, authentication workflows, and sensitive financial data handling architectures",
      "Translated technical findings into executive-ready reports with risk-based remediation strategies",
      "Contributed to improving client security processes by integrating risk assessment outcomes into development workflows",
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
      "Supported production application maintenance and troubleshooting for high-visibility client systems",
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
