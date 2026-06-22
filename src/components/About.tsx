import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section id="about" className="py-24 bg-ice">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-3xl font-bold text-teal">About</h2>
          <div className="mt-2 w-12 h-1 bg-seafoam rounded-full" />
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mt-8 text-lg leading-relaxed">
            Application security engineer with 13+ years of experience spanning
            consulting and in-house roles. I specialize in manual security
            assessments and code reviews, threat modeling, SAST/DAST/SCA tooling,
            and developer enablement -- helping engineering teams build security
            into their workflows rather than bolting it on after the fact.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-6 text-lg leading-relaxed">
            My approach centers on reducing friction between security and
            development. I have built AppSec programs from the ground up, led
            hundreds of penetration tests and code reviews for Fortune 500
            clients, and designed secure SDLC processes that engineering teams
            actually adopt. Whether embedded full-time or engaged for a targeted
            assessment, I deliver findings that are actionable -- not just a
            list of CVEs.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
