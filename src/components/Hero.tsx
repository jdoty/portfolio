export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-teal-dark overflow-hidden">
      <div className="absolute inset-0 hero-grid" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-seafoam/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />

      <div className="relative max-w-5xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="max-w-2xl">
          <p
            className="animate-fade-up text-seafoam font-medium tracking-wider uppercase text-sm"
          >
            Application Security
          </p>

          <h1 className="animate-fade-up mt-4 text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1]"
            style={{ animationDelay: "0.1s" }}
          >
            Jason Doty
          </h1>

          <p
            className="animate-fade-up mt-4 text-xl md:text-2xl text-seafoam font-light"
            style={{ animationDelay: "0.2s" }}
          >
            Senior Application Security Engineer
          </p>

          <p
            className="animate-fade-up mt-6 text-lg text-white/70 max-w-lg"
            style={{ animationDelay: "0.3s" }}
          >
            13+ years securing applications for Fortune 500 companies, startups,
            and everything in between. I find the vulnerabilities scanners miss
            and build the programs that prevent them.
          </p>

          <div
            className="animate-fade-up mt-10 flex flex-col sm:flex-row gap-4"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="https://linkedin.com/in/jason-doty-appsec/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-teal-dark rounded-lg hover:bg-white/90 transition-colors font-medium"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
            <a
              href="mailto:jasondoty87@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-coral text-gray-900 rounded-lg hover:bg-coral/80 transition-colors font-medium"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Email Me
            </a>
          </div>
        </div>
      </div>

      <svg
        className="absolute bottom-0 left-0 right-0 text-ice"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path fill="currentColor" d="M0,60 L0,20 Q720,0 1440,20 L1440,60 Z" />
      </svg>
    </section>
  );
}
