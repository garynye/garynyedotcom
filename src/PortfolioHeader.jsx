import * as React from "react";
import { useEffect, useState } from "react";
import { navigationItems } from "./portfolioData";

function NavigationLinks({ onNavigate }) {
  return navigationItems.map((item) => (
    <a key={item.href} href={item.href} onClick={onNavigate}>
      {item.label}
    </a>
  ));
}

export default function PortfolioHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  return (
    <header className="portfolio-header">
      <a className="portfolio-wordmark" href="#top" aria-label="Gary Nye home">
        Gary Nye
      </a>

      <nav className="desktop-navigation" aria-label="Primary navigation">
        <NavigationLinks />
      </nav>

      <button
        className="mobile-menu-button"
        type="button"
        aria-expanded={isMenuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsMenuOpen((current) => !current)}
      >
        {isMenuOpen ? "Close" : "Menu"}
      </button>

      {isMenuOpen ? (
        <nav
          id="mobile-navigation"
          className="mobile-navigation"
          aria-label="Mobile navigation"
        >
          <NavigationLinks onNavigate={() => setIsMenuOpen(false)} />
        </nav>
      ) : null}
    </header>
  );
}
