import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SvgIcon from "@mui/material/SvgIcon";
import Typography from "@mui/material/Typography";
import { journeyEntries } from "./journeyData";

function ArrowCircleRightIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm1-13-1.41 1.41L14.17 11H7v2h7.17l-2.58 2.59L13 17l5-5-5-5Z" />
    </SvgIcon>
  );
}

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
          <ListItemIcon className="journey-highlight-icon">
            <ArrowCircleRightIcon />
          </ListItemIcon>
          <ListItemText primary={highlight} />
        </ListItem>
      ))}
    </List>
  );
}

function RoleDetails({ entry, role, roleIndex }) {
  const roleId = `${entry.company}-${role.title}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  if (role.summary) {
    return (
      <Accordion disableGutters className="journey-accordion lighting-border">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${roleId}-content`}
          id={`${roleId}-header`}
        >
          <Typography variant="body2" className="journey-summary-copy">
            {role.summary}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <RoleHighlights highlights={role.highlights} />
        </AccordionDetails>
      </Accordion>
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
    <Typography variant="h5" component="span" className="journey-company-name lighting-border">
      {entry.company}
    </Typography>
  );

  return (
    <Box className="journey-entry">
      <Box className="journey-rail" aria-hidden="true">
        <span className="journey-node" />
      </Box>
      <Box className="journey-logo-slot">
        <JourneyLogo entry={entry} />
      </Box>
      <Box className="journey-content">
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
