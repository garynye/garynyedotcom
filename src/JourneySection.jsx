import * as React from "react";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import SvgIcon from "@mui/material/SvgIcon";
import Typography from "@mui/material/Typography";
import { journeyEntries } from "./journeyData";

function ExpandMoreIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="m7.41 8.59 4.59 4.58 4.59-4.58L18 10l-6 6-6-6 1.41-1.41Z" />
    </SvgIcon>
  );
}

function RemoveIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M19 13H5v-2h14v2Z" />
    </SvgIcon>
  );
}

function JourneyLogo({ entry }) {
  const logo = (
    <Card className="journey-logo-card">
      <CardMedia component="img" image={entry.logo} alt={entry.logoAlt} />
    </Card>
  );

  if (!entry.href) {
    return logo;
  }

  return (
    <Box
      component="a"
      href={entry.href}
      target="_blank"
      rel="noopener noreferrer"
      sx={{ display: "block", textDecoration: "none" }}
    >
      {logo}
    </Box>
  );
}

function RoleHighlights({ highlights }) {
  if (!highlights?.length) {
    return null;
  }

  return (
    <List dense className="journey-highlight-list">
      {highlights.map((highlight) => (
        <ListItem key={highlight} className="journey-highlight-item">
          <ListItemText primary={highlight} />
        </ListItem>
      ))}
    </List>
  );
}

function JourneyAccordion({ detailsId, headerId, summary, highlights }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Box className={`journey-accordion${isExpanded ? " journey-accordion--expanded" : ""}`}>
      <Box
        component="button"
        type="button"
        className="journey-accordion-summary"
        aria-expanded={isExpanded}
        aria-controls={detailsId}
        id={headerId}
        onClick={() => setIsExpanded((current) => !current)}
      >
        <Typography variant="body2" className="journey-summary-copy">
          {summary}
        </Typography>
        <ExpandMoreIcon aria-hidden="true" className="journey-accordion-icon" />
      </Box>
      <Box
        id={detailsId}
        role="region"
        aria-labelledby={headerId}
        aria-hidden={!isExpanded}
        className="journey-accordion-details-shell"
      >
        <Box
          className="journey-accordion-details"
        >
          <RoleHighlights highlights={highlights} />
        </Box>
      </Box>
    </Box>
  );
}

function RoleDetails({ entry, role, roleIndex }) {
  const roleId = `${entry.company}-${role.title}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  if (role.summary) {
    return (
      <Box className="journey-shimmer-shell">
        <Box aria-hidden="true" className="journey-shimmer-spinner" />
        <JourneyAccordion
          detailsId={`${roleId}-content`}
          headerId={`${roleId}-header`}
          summary={role.summary}
          highlights={role.highlights}
        />
      </Box>
    );
  }

  return roleIndex === 0 ? (
    <RoleHighlights highlights={role.highlights} />
  ) : null;
}

function JourneyRole({ entry, role, roleIndex }) {
  return (
    <Box className="journey-role">
      <Typography variant="h6" className="journey-role-title">
        {role.title}
      </Typography>
      <Typography variant="subtitle2" className="journey-role-meta">
        {role.meta}
      </Typography>
      <RoleDetails entry={entry} role={role} roleIndex={roleIndex} />
    </Box>
  );
}

function JourneyEntry({ entry }) {
  const companyName = (
    <Typography variant="h5" component="span" className="journey-company-name">
      {entry.company}
    </Typography>
  );

  return (
    <Box className="journey-entry">
      <Box className="journey-logo-slot journey-logo-slot--desktop">
        <JourneyLogo entry={entry} />
      </Box>
      <Box className="journey-rail" aria-hidden="true">
        <span className="journey-node" />
      </Box>
      <Box className="journey-content">
        <Box className="journey-company-row">
          <Box className="journey-logo-slot journey-logo-slot--mobile">
            <JourneyLogo entry={entry} />
          </Box>
          {entry.href ? (
            <Box
              component="a"
              href={entry.href}
              target="_blank"
              rel="noopener noreferrer"
              className="journey-company-link"
            >
              {companyName}
            </Box>
          ) : (
            companyName
          )}
        </Box>
        {entry.roles.map((role, roleIndex) => (
          <JourneyRole
            key={`${entry.company}-${role.title}`}
            entry={entry}
            role={role}
            roleIndex={roleIndex}
          />
        ))}
      </Box>
    </Box>
  );
}

export default function JourneySection() {
  useEffect(() => {
    if (!window.matchMedia("(max-width: 640px)").matches || !("IntersectionObserver" in window)) {
      return undefined;
    }

    const panels = Array.from(document.querySelectorAll(".journey-shimmer-shell"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("journey-shimmer-shell--center-active", entry.isIntersecting);
        });
      },
      {
        root: null,
        rootMargin: "-42% 0px -42% 0px",
        threshold: 0,
      }
    );

    panels.forEach((panel) => observer.observe(panel));

    return () => {
      panels.forEach((panel) => panel.classList.remove("journey-shimmer-shell--center-active"));
      observer.disconnect();
    };
  }, []);

  return (
    <Box component="section" className="journey-section" aria-labelledby="journey-heading">
      <Box className="journey-heading-wrap">
        <Typography variant="h4" component="h2" id="journey-heading" className="journey-heading">
          <RemoveIcon aria-hidden="true" /> My journey <RemoveIcon aria-hidden="true" />
        </Typography>
      </Box>
      <Box className="journey-timeline">
        {journeyEntries.map((entry) => (
          <JourneyEntry key={entry.company} entry={entry} />
        ))}
      </Box>
    </Box>
  );
}
