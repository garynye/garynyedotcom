import * as React from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ContactFooter from "./ContactFooter";
import HeroSection from "./HeroSection";
import JourneySection from "./JourneySection";
import PortfolioHeader from "./PortfolioHeader";
import SelectedWorkSection from "./SelectedWorkSection";
import StudioSection from "./StudioSection";
import "./portfolio.css";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#58c8d8",
    },
    secondary: {
      main: "#c79a4a",
    },
    background: {
      default: "#070b10",
      paper: "#0e151d",
    },
    text: {
      primary: "#f2efe8",
      secondary: "#aebcc5",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Segoe UI", sans-serif',
  },
});

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <PortfolioHeader />
      <main id="main-content">
        <HeroSection />
        <StudioSection />
        <SelectedWorkSection />
        <JourneySection />
      </main>
      <ContactFooter />
    </ThemeProvider>
  );
}
