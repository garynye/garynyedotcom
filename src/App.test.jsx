import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App.jsx";

beforeAll(() => {
  window.matchMedia =
    window.matchMedia ||
    function matchMedia() {
      return {
        matches: false,
        addListener() {},
        removeListener() {},
      };
    };
});

test("uses dark mode without rendering a theme switch", () => {
  render(<App />);

  expect(screen.queryByRole("switch")).toBeNull();
  expect(getComputedStyle(document.body).backgroundColor).toBe("rgb(7, 11, 16)");
});

test("renders the new personal positioning without the discarded tagline", () => {
  render(<App />);

  expect(screen.getByRole("heading", { name: "Gary Nye", level: 1 })).toBeTruthy();
  expect(
    screen.getByText("I build products and lead complex businesses.")
  ).toBeTruthy();
  expect(
    screen.getByText(/After two decades in global operations/i)
  ).toBeTruthy();
  expect(document.getElementById("about")?.className).toContain(
    "hero-introduction"
  );
  expect(document.querySelector(".about-statement")).toBeNull();
  expect(screen.queryByText(/Builder\. Operator\. Founder\./i)).toBeNull();
});

test("exposes the same navigation destinations and closes the mobile menu", async () => {
  const user = userEvent.setup();
  render(<App />);

  const desktopNavigation = screen.getByRole("navigation", {
    name: "Primary navigation",
  });
  const expectedDestinations = {
    Work: "#work",
    Studio: "#studio",
    Journey: "#journey",
    About: "#about",
    Contact: "#contact",
  };

  Object.entries(expectedDestinations).forEach(([label, href]) => {
    expect(
      within(desktopNavigation).getByRole("link", { name: label }).getAttribute("href")
    ).toBe(href);
  });

  const menuButton = screen.getByRole("button", { name: "Menu" });
  expect(menuButton.getAttribute("aria-expanded")).toBe("false");

  await user.click(menuButton);

  const mobileNavigation = screen.getByRole("navigation", {
    name: "Mobile navigation",
  });
  expect(screen.getByRole("button", { name: "Close" }).getAttribute("aria-expanded")).toBe(
    "true"
  );
  Object.keys(expectedDestinations).forEach((label) => {
    expect(within(mobileNavigation).getByRole("link", { name: label })).toBeTruthy();
  });

  await user.click(within(mobileNavigation).getByRole("link", { name: "Studio" }));

  expect(screen.queryByRole("navigation", { name: "Mobile navigation" })).toBeNull();
  expect(screen.getByRole("button", { name: "Menu" }).getAttribute("aria-expanded")).toBe(
    "false"
  );
});

test("renders Curious Ventures LLC and its three products with honest maturity labels", () => {
  render(<App />);

  const studio = document.getElementById("studio");
  expect(studio).toBeTruthy();
  expect(
    within(studio).getByRole("heading", { name: "Curious Ventures LLC" })
  ).toBeTruthy();
  expect(within(studio).getByText("Founder & Managing Member")).toBeTruthy();
  expect(within(studio).getByRole("heading", { name: "HearClara" })).toBeTruthy();
  expect(within(studio).getByRole("heading", { name: "Rosie" })).toBeTruthy();
  expect(within(studio).getByRole("heading", { name: "AppSpec Studio" })).toBeTruthy();
  expect(within(studio).getByText("Live")).toBeTruthy();
  expect(within(studio).getAllByText("In development")).toHaveLength(2);

  within(studio)
    .getAllByRole("link", { name: /HearClara/i })
    .forEach((link) => {
      expect(link.getAttribute("href")).toBe("https://hearclara.com");
      expect(link.getAttribute("target")).toBe("_blank");
      expect(link.getAttribute("rel")).toBe("noopener noreferrer");
    });
});

test("uses the real Rosie icon and the generated AppSpec artwork", () => {
  render(<App />);

  const rosie = screen.getByRole("img", { name: "Rosie application icon" });
  const appSpec = screen.getByRole("img", {
    name: /Layered specification sheets and interface blueprints/i,
  });
  const whisper = screen.getByRole("img", {
    name: "Windows Whisper Client application icon",
  });
  const icelandWalk = screen.getByRole("img", {
    name: /Reykjavík street featured in the IcelandWalk/i,
  });
  const houseChase = screen.getByRole("img", {
    name: /isometric house interior illustrating the playful chase concept/i,
  });

  expect(rosie.getAttribute("src")).toBe("/rosie-icon.png");
  expect(appSpec.getAttribute("src")).toBe("/appspec-studio-graphic.png");
  expect(whisper.getAttribute("src")).toBe("/windows-whisper-icon.png");
  expect(icelandWalk.getAttribute("src")).toBe("/icelandwalk-graphic.webp");
  expect(houseChase.getAttribute("src")).toBe("/house-chase-graphic.png");
});

test("describes House Chase without identifying the child", () => {
  render(<App />);

  expect(
    screen.getByText(
      "A game imagined and designed by a young child, then brought to life through collaborative coding."
    )
  ).toBeTruthy();
  expect(document.body.textContent).not.toMatch(/\bMax\b/i);
});

test("never links to private household services", () => {
  render(<App />);

  const privateTokens = [
    "whisper",
    "plex",
    "radar",
    "sonar",
    "sab",
    "cbd",
    "crocaro",
  ];
  const hrefs = screen
    .getAllByRole("link")
    .map((link) => (link.getAttribute("href") || "").toLowerCase());

  privateTokens.forEach((token) => {
    expect(hrefs.some((href) => href.includes(token))).toBe(false);
  });
});

test("keeps the Curious Ventures entry and corporate journey accordions working", async () => {
  const user = userEvent.setup();
  render(<App />);

  const journey = screen.getByRole("region", { name: "Career journey" });
  expect(within(journey).getByText("Curious Ventures LLC")).toBeTruthy();
  expect(within(journey).getByText("Founder & Managing Member")).toBeTruthy();
  expect(within(journey).getByText("Current")).toBeTruthy();
  expect(within(journey).getByText("Thermo Fisher Scientific")).toBeTruthy();

  const summary = within(journey).getByRole("button", {
    name: /Building practical, thoughtfully engineered software/i,
  });
  const details = document.getElementById(summary.getAttribute("aria-controls"));

  expect(summary.getAttribute("aria-expanded")).toBe("false");
  expect(details.getAttribute("aria-hidden")).toBe("true");

  await user.click(summary);

  expect(
    within(journey).getByText(/HearClara: an audio-first language acquisition platform/i)
  ).toBeTruthy();
  expect(summary.getAttribute("aria-expanded")).toBe("true");
  expect(details.getAttribute("aria-hidden")).toBe("false");

  await user.click(summary);

  expect(summary.getAttribute("aria-expanded")).toBe("false");
  expect(details.getAttribute("aria-hidden")).toBe("true");
});
