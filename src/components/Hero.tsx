export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h1 className="animate-fade-up text-5xl md:text-6xl font-bold text-teal tracking-tight">
          Jason Doty
        </h1>

        <p
          className="animate-fade-up mt-4 text-xl md:text-2xl text-gray-500 font-light"
          style={{ animationDelay: "0.15s" }}
        >
          Senior Application Security Engineer
        </p>

        <p
          className="animate-fade-up mt-6 text-lg text-gray-600 max-w-xl mx-auto"
          style={{ animationDelay: "0.3s" }}
        >
          Building secure software and enabling development teams to ship with
          confidence.
        </p>

        <div
          className="animate-fade-up mt-8 flex flex-col sm:flex-row justify-center gap-4"
          style={{ animationDelay: "0.45s" }}
        >
          <a
            href="https://linkedin.com/in/jason-doty-appsec/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-teal text-white rounded-lg hover:bg-teal/90 transition-colors font-medium"
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
    </section>
  );
}
