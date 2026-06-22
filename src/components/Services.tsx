import FadeIn from "./FadeIn";

const services = [
  {
    title: "Application Penetration Testing",
    description:
      "Comprehensive manual testing of web applications, APIs, and mobile apps. I go beyond automated scanners to find the business logic flaws, authentication bypasses, and injection vectors that tools miss.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: "Secure Code Review",
    description:
      "Manual source code analysis focused on critical security flaws. I review authentication flows, authorization logic, data handling, and cryptographic implementations across your codebase.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "AppSec Program Design",
    description:
      "Build or mature your application security program. I design secure SDLC processes, select and integrate tooling, establish vulnerability management workflows, and train your developers.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    ),
  },
  {
    title: "Threat Modeling",
    description:
      "Structured analysis of your application architecture to identify security risks before code is written. I work with your engineering team to prioritize threats and define mitigations.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-3xl font-bold text-teal">Services</h2>
          <div className="mt-2 w-12 h-1 bg-seafoam rounded-full" />
          <p className="mt-4 text-lg text-gray-600 max-w-2xl">
            Available for freelance engagements, fractional AppSec roles, and
            short-term consulting. Whether you need a one-time assessment or
            ongoing security support, I can help.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.1}>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-seafoam/20 hover:shadow-md transition-shadow h-full">
                <div className="w-12 h-12 rounded-lg bg-ice flex items-center justify-center text-teal mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-12 text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-coral text-gray-900 rounded-lg hover:bg-coral/80 transition-colors font-medium"
            >
              Discuss Your Project
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
