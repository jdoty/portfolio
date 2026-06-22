"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`From: ${name} (${email})\n\n${message}`);
    window.location.href = `mailto:jasondoty87@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="py-24">
      <div className="max-w-xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-3xl font-bold text-teal">Contact</h2>
          <div className="mt-2 w-12 h-1 bg-seafoam rounded-full" />
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mt-6 text-gray-600">
            Looking for a security assessment, fractional AppSec support, or a
            full-time hire? I would love to hear about your project. Drop me a
            message and I will get back to you within 24 hours.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
            <a
              href="mailto:jasondoty87@gmail.com"
              className="text-teal hover:text-teal/70 transition-colors"
            >
              jasondoty87@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/jason-doty-appsec/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal hover:text-teal/70 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/jdoty"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal hover:text-teal/70 transition-colors"
            >
              GitHub
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label
                htmlFor="contact-name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="contact-name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-colors"
              />
            </div>
            <div>
              <label
                htmlFor="contact-email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="contact-email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-colors"
              />
            </div>
            <div>
              <label
                htmlFor="contact-message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-teal text-white rounded-lg hover:bg-teal/90 transition-colors font-medium"
            >
              Send Message
            </button>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
