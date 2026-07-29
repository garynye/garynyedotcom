import * as React from "react";

export default function HeroSection() {
  return (
    <>
      <section id="top" className="portfolio-hero" aria-labelledby="hero-heading">
        <div className="hero-portrait" aria-hidden="true">
          <img src="/gary-hero-founder-2026.png" alt="" />
        </div>
        <div className="hero-copy">
          <h1 id="hero-heading">Gary Nye</h1>
          <p className="hero-positioning">
            I build products and lead complex businesses.
          </p>
          <p className="hero-introduction">
            After two decades in global operations, I returned to hands-on
            engineering to create practical AI and software tools.
          </p>
          <div className="hero-links">
            <a href="#work">Explore my work</a>
            <a href="mailto:gary@garynye.com">Email me</a>
          </div>
        </div>
      </section>

      <section id="about" className="about-statement" aria-labelledby="about-heading">
        <p className="section-kicker">About</p>
        <h2 id="about-heading">
          I move between operating complex businesses and building useful things.
        </h2>
      </section>
    </>
  );
}
