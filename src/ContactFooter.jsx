import * as React from "react";

export default function ContactFooter() {
  return (
    <footer id="contact" className="contact-footer">
      <div>
        <p className="section-kicker">Contact</p>
        <h2>Have something interesting in mind?</h2>
      </div>
      <div className="contact-links">
        <a href="mailto:gary@garynye.com">gary@garynye.com</a>
        <a
          href="https://github.com/garynye"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
      <p className="footer-note">Gary Nye · Curious Ventures LLC</p>
    </footer>
  );
}
