import * as React from "react";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Grid from "@mui/material/Grid";
import { Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import JourneySection from "./JourneySection";

const HERO_IMAGE_URL = "/gary-hero-founder-2026.png";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#4dd9f5",
    },
    secondary: {
      main: "#6ee7b7",
    },
    background: {
      default: "#070b10",
      paper: "#111820",
    },
    text: {
      primary: "#f7fbff",
      secondary: "#bdd0dc",
    },
  },
});

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div>
        <Grid container spacing={2}>
          <Grid item={true} xs={12} sm={12}>
            <Card
              align="center"
              className="hero-card"
              sx={{
                backgroundImage: `linear-gradient(180deg, rgba(7,11,16,0.12) 0%, rgba(7,11,16,0.22) 48%, rgba(7,11,16,0.88) 90%, #070b10 100%), linear-gradient(rgba(0,0,0,0.24), rgba(0,0,0,0.24)), url("${HERO_IMAGE_URL}")`,
                boxShadow: "none",
                borderRadius: 0,
                p: 2,
                height: isMobile ? window.innerHeight : 0.68 * window.innerHeight,
                backgroundPosition: isMobile ? "31% 0%" : "0% 0%",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100",
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    height: isMobile
                      ? 0.4 * window.innerHeight
                      : 0.2 * window.innerHeight,
                  }}
                />
                <Typography variant="h5" color="common.white">
                  Hello, I&apos;m
                </Typography>
                <Typography variant="h3" color="common.white">
                  Gary Nye
                </Typography>
                <br />
                <a style={{ textDecoration: "none" }} href="mailto:gary@garynye.com">
                  <Button variant="contained">Email Me</Button>
                </a>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <JourneySection />
        <Box sx={{ height: 300 }} />
      </div>
    </ThemeProvider>
  );
}

export default App;
