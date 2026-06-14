import FadeIn from "./FadeIn";

const experiences = [
  {
    company: "Charlie Health",
    title: "Senior Application Security Engineer",
    period: "Jan 2025 -- Jun 2025",
    description:
      "Built AppSec program foundation from scratch in a HIPAA-regulated SaaS environment.",
  },
  {
    company: "Optiv",
    title: "Senior Security Consultant",
    period: "2017 -- 2024",
    description:
      "Led enterprise AppSec engagements across financial services, healthcare, retail, and regulated industries.",
  },
  {
    company: "Denim Group / Coalfire",
    title: "Application Security Consultant",
    period: "2010 -- 2016",
    description:
      "Manual security assessments, code reviews, client-facing consulting.",
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
