import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Grid from "@mui/material/Grid";
import { Card } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import CardContent from "@mui/material/CardContent";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import CssBaseline from "@mui/material/CssBaseline";

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0288d1', // Original blue
    },
    secondary: {
      main: '#388e3c', // Original green
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#29b6f6', // Lighter blue for dark mode
    },
    secondary: {
      main: '#66bb6a', // Lighter green for dark mode
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
      secondary: '#bbbbbb',
    }
  },
});

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

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
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <div>
        <Grid container spacing={2}>
          <Grid item={true} xs={12} sm={12}>
            <Card
            justifyContent="center"
            align="center"
            sx={{
              backgroundImage: darkMode 
                ? `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://res.cloudinary.com/assurily/image/upload/c_scale,w_1280/v1638896303/garynyedotcom/IMG_8491_i3o9cq.webp")`
                : `url("https://res.cloudinary.com/assurily/image/upload/c_scale,w_1280/v1638896303/garynyedotcom/IMG_8491_i3o9cq.webp")`,
              boxShadow: 1,
              borderRadius: 1,
              p: 2,
              height: isMobile ? window.innerHeight : 0.6 * window.innerHeight,
              backgroundPosition: "0% 0%",
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
              ></Box>
              <Typography variant="h5" color="common.white">
                Hello, I'm
              </Typography>
              <Typography variant="h3" color="common.white">
                Gary Nye
              </Typography>
              <br></br>
              <a
                style={{ textDecoration: "none" }}
                href="mailto:gary@garynye.com"
              >
                <Button variant="contained">Email Me</Button>
              </a>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 2 }}>
                {darkMode ? <Brightness4Icon sx={{ color: 'common.white' }} /> : <Brightness7Icon sx={{ color: 'common.white' }} />}
                <Switch checked={darkMode} onChange={handleThemeChange} sx={{ color: 'common.white' }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid
          container
          direction={"row"}
          justifyContent="center"
          item={true}
          xs={12}
          sm={12}
        >
          <Card
            sx={{
              boxShadow: 0,
              borderRadius: 0,
              p: 2,
              width: "100",
              backgroundColor: "transparent", // This should be fine
            }}
          >
            <Typography variant="h4" sx={{ color: 'text.primary' }}>
              <RemoveIcon sx={{ color: 'text.secondary' }} /> My journey <RemoveIcon sx={{ color: 'text.secondary' }} />
            </Typography>
          </Card>
        </Grid>

        <Grid item={true} xs={0} sm={2}></Grid>
        <Grid item={true} xs={12} sm={2}>
          <Card sx={{ margin: 2, maxWidth: 150, backgroundColor: "background.paper" }}>
            <CardMedia
              component="img"
              image="https://res.cloudinary.com/assurily/image/upload/v1670619243/garynyedotcom/bridgestone_qnwwcg.jpg"
              alt="Bridgestone"
            />
          </Card>
        </Grid>
        <Grid item={true} xs={12} sm={6}>
          <Typography variant="h5" color="primary.main">
            Bridgestone Americas
          </Typography>
          <Typography variant="h6" color="secondary.main">
            Executive Director of Mobility Solutions
          </Typography>
          <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
            Nashville, TN from 2018 to 2021
          </Typography>
          <br></br>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: 'text.secondary' }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Bridgestone Mobility Solutions is a business unit designed to
                leverage technology to make it easier to move people and goods
                between two points. I was responsible for identifying and
                bringing to market all non-tire new growth innovation for
                Bridgestone Americas to address the B2B market.
              </Typography>
            </AccordionSummary>
            <List dense>
              <ListItem>
                <ListItemIcon>
                  <ArrowCircleRightIcon sx={{ color: 'secondary.main' }} />
                </ListItemIcon>
                <ListItemText primary="Managed the Mileage Sales business unit with over 150 hourly and salaried employees in operations and sales across the US and Canada to maintain a 36% gross margin on a $55M P&L. " />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ArrowCircleRightIcon sx={{ color: 'secondary.main' }} />
                </ListItemIcon>
                <ListItemText primary="Developed strategic partnership & investment with reach24.net to digitize the dispatching process for emergency and planned events resulting in improved downtime from 2hr 40min to under 2hr in emergencies." />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ArrowCircleRightIcon sx={{ color: 'secondary.main' }} />
                </ListItemIcon>
                <ListItemText primary="Outsourced emergency response organization resulting in a single staffing model, a 15% improvement in operating budget, and reduction of 30 headcount." />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ArrowCircleRightIcon sx={{ color: 'secondary.main' }} />
                </ListItemIcon>
                <ListItemText primary="Deployed iTrack II, a mining telematics solution, across the US and Canada to close a completive gap in Bridgestone’s portfolio leading to the full acquisition of the company." />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ArrowCircleRightIcon sx={{ color: 'secondary.main' }} />
                </ListItemIcon>
                <ListItemText primary="Launched Bridgestone Intellitire Tire Pressure System to improve fleet uptime by up 46% through preemptive pressure loss detection and through linkage into reach24.net for emergency detection and service dispatching through a direct salesforce and reseller network. " />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ArrowCircleRightIcon sx={{ color: 'secondary.main' }} />
                </ListItemIcon>
                <ListItemText primary="Partnered with Amazon AWS digital innovation group to launch myuptimeauto.com, a freemium fleet maintenance service, to solve a small business owner (SBO) need around vehicle maintenance to improve SBO uptime and revenue for Bridgestone." />
              </ListItem>
            </List>
          </Accordion>
          <Typography variant="h6" color="secondary.main">
            Director & Operating Vice President for Bridgestone-Bandag
          </Typography>
          <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
            Nashville, TN from 2015 to 2018
          </Typography>
          <br></br>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: 'text.secondary' }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                P&L responsibility for the Bandag retread business representing
                $580M in revenue, field operations for franchise technical
                group, and emergency response operations.
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon sx={{ color: 'secondary.main' }} />
                  </ListItemIcon>
                  <ListItemText primary="Led field technical operations team in the US and Canada to improve franchise operations at dealer locations resulting in a 9% year over year improvement in audit results." />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon sx={{ color: 'secondary.main' }} />
                  </ListItemIcon>
                  <ListItemText primary="Developed Commercial tire distribution Strategy based on dealer segmentation to address consolidating marketplace trends and long-term declining share. Implementation resulted in creation of a six-dealer alliance and majority divestment of COO with an impact of $120M." />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon sx={{ color: 'secondary.main' }} />
                  </ListItemIcon>
                  <ListItemText primary="Developed turnaround strategy for Emergency Road Service group to address service degradation and turnover.  Implementation of strategy delivered simplified billing, improved turnover from 100% to 40% while reducing headcount by 18 and added $2M in incremental operating profit." />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon sx={{ color: 'secondary.main' }} />
                  </ListItemIcon>
                  <ListItemText primary="Launched Global Retread Management platform to be the global governing body for the Bandag brand resulting in global coordination on three initiatives: product innovation strategy, retread value proposition, and retread perception." />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon sx={{ color: 'secondary.main' }} />
                  </ListItemIcon>
                  <ListItemText primary="Focused resources and development efforts on new product 3D siping technology resulting in 30% increased wear performance vs. competition." />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item={true} xs={0} sm={2}></Grid>
        <Grid item={true} xs={0} sm={2}></Grid>
        <Grid item={true} xs={12} sm={2}>
          <Card sx={{ margin: 2, maxWidth: 150, backgroundColor: "background.paper" }}>
            <CardMedia
              component="img"
              image="https://res.cloudinary.com/assurily/image/upload/v1670619243/garynyedotcom/mars_xbhhth.jpg"
              alt="Mars Inc."
            />
          </Card>
        </Grid>
        <Grid item={true} xs={12} sm={6}>
          <Typography variant="h5" color="primary.main">
            Mars Incorporated
          </Typography>
          <Typography variant="h6" color="secondary.main">
            Senior Business Operations Team Leader
          </Typography>
          <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
            Nashville, TN from 2014 to 2015
          </Typography>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: 'text.secondary' }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                As a member of the Leadership team for Mars Petcare US' private
                label business, I also managed team of purchasing managers for
                all global dry ingredients for Mars Petcare ($1B annual spend).
                Additionally had responsibility for Supplier Quality and audit
                programs for the Nutro Company, a division of Mars Inc.
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon sx={{ color: 'secondary.main' }} />
                  </ListItemIcon>
                  <ListItemText primary="Led purchasing operational integration for Mars Petcare Pet Specialty, Petcare P&G, and Mars Petcare US divisions into Mars Petcare NA after Petcare P&G acquisition. Final organization design provided access to 55 associates vs. a prior of 11 for the Pet Specialty division and no disruption to business operations." />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon sx={{ color: 'secondary.main' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Developed and Launched a 6 step Supply Chain Operations Strategy for Mars Inc to standardize supplier operations and inbound material management. Result was a consistently repeatable process to maintain material supply to Mars manufacturing locations that gave clear visibility to leadership on the health of inbound operations.
"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon sx={{ color: 'secondary.main' }} />
                  </ListItemIcon>
                  <ListItemText primary="Implemented new procure to pay procedure and supplier owned inventory to address a business cash challenge. Results for Australian sourced Lamb drove a positive cash impact of $4M." />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
          <Typography variant="h6" color="secondary.main">
            Sr. Category Insights Manager
          </Typography>
          <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
            Nashville, TN from 2012 to 2014
          </Typography>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: 'text.secondary' }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                As a category insights researcher, I had complete responsibility
                for the Dry Dog category path to purchase, representing $2B in
                sales for Mars Petcare US. I designed and built a state of the
                art research facility to enhance my research and create aisle
                redesigns that were deployed to all of the customer account
                teams for execution.
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon sx={{ color: 'secondary.main' }} />
                  </ListItemIcon>
                  <ListItemText primary="Created Seaboard Lane Insights Center, an 18,000 sqft research facility, to address a speed to insights generation need at Mars Petcare NA in 6 months from concept to opening. Results enabled insights generation improvement from 18 to 6 months, research savings of $1.2M, and increased earnings of $12.2M." />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon sx={{ color: 'secondary.main' }} />
                  </ListItemIcon>
                  <ListItemText primary="Developed Wet Dog and Dog C&T aisle redesigns based on shopper insights and deployed to 9 priority accounts. Store test at Meijer achieved a 16% lift in category dollar sales, 34% lift on Cesar, and reversed decline of Pedigree vs. control stores." />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon sx={{ color: 'secondary.main' }} />
                  </ListItemIcon>
                  <ListItemText primary="Led IRI to Nielsen transition, coding, and training for Mars Petcare US Sales that delivered store level data and visibility to all categories and delivered $300k dollar savings." />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon sx={{ color: 'secondary.main' }} />
                  </ListItemIcon>
                  <ListItemText primary="Collaborated with Mars Petcare Canada to apply Shopper Based Design (SBD) approach for a total department redesign at Sobeys. Sobeys accepted concepts and MPC Canada now utilizes SBD." />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
          <Typography variant="h6" color="secondary.main">
            Trade Strategy Manager (Graduate Leadership Development Program)
          </Typography>
          <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>Nashville, TN - 2011</Typography>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: 'text.secondary' }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                In the Sales Operations team I had responsibility for
                implementing a new Price Card as well as refreshing the customer
                segmentation based on measurable criteria to properly allocate
                trade dollars across retailers.
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon sx={{ color: 'secondary.main' }} />
                  </ListItemIcon>
                  <ListItemText primary="Developed a new Trade allocation framework to deploy $255M in customer trade dollars to strategic accounts. Strategic accounts went from a 102 index of trade dollars to a 110 index, simplified the accrual process by 96% and improved start of year allocation from 65% to 93%." />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon sx={{ color: 'secondary.main' }} />
                  </ListItemIcon>
                  <ListItemText primary="Constructed new Price Card and deployed in Jan 2012 to address process gaps and align with internal strategies. Results were $2.3M in savings driven by truck weight increase of 3000 lbs, 7% improvement in  Case Pick and increased collaboration with customers through a proactive process." />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
          <Typography variant="h6" color="secondary.main">
            Logistics Manager (Graduate Leadership Development Program)
          </Typography>
          <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>Nashville, TN - 2010</Typography>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: 'text.secondary' }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                My first role out of Business School centered around the
                complete redesign and execution of the outbound distribution
                footprint for Mars Petcare US. I also had responsibility for all
                inbound transportation with totals exceeding $100M annual spend.
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon sx={{ color: 'secondary.main' }} />
                  </ListItemIcon>
                  <ListItemText primary="Developed inbound materials hub and spoke model. Study projected to improve inventory on essentials and slow-moving packaging by 18% and reduced miles by 14% for $1.8M in savings." />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon sx={{ color: 'secondary.main' }} />
                  </ListItemIcon>
                  <ListItemText primary="Executed a $15M emergency bid for a warehouse transition at West Jefferson, OH to address a financially unstable 3PL that resulted in $1.2M cash generation and maintained CSL." />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon sx={{ color: 'secondary.main' }} />
                  </ListItemIcon>
                  <ListItemText primary="Negotiated a build to suit lease for a $47M 1.3M SQFT RDC in Columbus, OH to consolidate two existing distribution centers.  Project resulted in $17M savings and reduced supply chain risk." />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item={true} xs={0} sm={2}></Grid>
        <Grid item={true} xs={0} sm={2}></Grid>
        <Grid item={true} xs={12} sm={2}>
          <Card sx={{ margin: 2, maxWidth: 150, backgroundColor: "background.paper" }}>
            <CardMedia
              component="img"
              image="https://res.cloudinary.com/assurily/image/upload/v1670619243/garynyedotcom/ford_thrxnb.jpg"
              alt="Ford"
            />
          </Card>
        </Grid>
        <Grid item={true} xs={12} sm={6}>
          <Typography variant="h5" color="primary.main">
            Ford Motor Company
          </Typography>
          <Typography variant="h6" color="secondary.main">
            Global Launch Strategy Engineer
          </Typography>
          <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
            Detroit, MI from 2006 to 2010
          </Typography>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: 'text.secondary' }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                After completion of the Ford College Graduate Program, I entered
                New Model Programs, a department that takes new model vehicles
                from the Virtual Prototype phase all the way through launch and
                into post-production. My role focused around global alignment of
                launch methods and regular monitoring of each new vehicle line
                in the launch process.
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon sx={{ color: 'secondary.main' }} />
                  </ListItemIcon>
                  <ListItemText primary="Designed and launched a global product reporting system in Europe, South America, and Asia-Pacific regions. This system standardized weekly status reports to the CEO on product launches for all countries and reduced workload redundancies by 75%." />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon sx={{ color: 'secondary.main' }} />
                  </ListItemIcon>
                  <ListItemText primary="Led a team of seven engineers to improve the Global Launch Quality Operating System and launched globally. Results were a more robust Quality Operating System and the implementation of a global solution that provides all product launch deliverables to associates." />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon sx={{ color: 'secondary.main' }} />
                  </ListItemIcon>
                  <ListItemText primary="Developed launch validation strategies to maintain quality and reduce risk with resourcing of three supplier plants impacting eight vehicle lines. Results were zero downtime for all final assembly plants and no quality degradation." />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
        
          <Typography variant="h6" color="secondary.main">
            Ford College Graduate Developmental Program
          </Typography>
          <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
            Detroit, MI from 2003 to 2006
          </Typography>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: 'text.secondary' }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                The Ford College Graduate Program is a multi-year rotational
                program designed to expose new engineers to all areas of the
                company from engineering, manufacturing, to finance.
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon sx={{ color: 'secondary.main' }} />
                  </ListItemIcon>
                  <ListItemText primary="Managed Piston & Rod sub assembly line at Romeo Engine Plant and developed process flow improvement with UAW that resulted in an efficiency increase of 8% and a labor reduction of 17%." />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon sx={{ color: 'secondary.main' }} />
                  </ListItemIcon>
                  <ListItemText primary="Analyzed and designed the resolution of exhaust body interaction on the 2007 SVT Mustang. Associated design resolution led to 100% improvement of the sound quality issue." />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowCircleRightIcon sx={{ color: 'secondary.main' }} />
                  </ListItemIcon>
                  <ListItemText primary="Developed Facilities, Tooling, and Labor cost study for the 2007 Lincoln Town Car Limousine. Interfaced with product development and manufacturing to identify cost study improvements that resulted in a budget of $2.4M vs. target of $3.5M." />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item={true} xs={0} sm={2}></Grid>
        <Grid item={true} xs={0} sm={2}></Grid>
        <Grid item={true} xs={12} sm={2}>
          <Card sx={{ margin: 2, maxWidth: 150, backgroundColor: "background.paper" }}>
            <CardMedia
              component="img"
              image="https://res.cloudinary.com/assurily/image/upload/v1670619243/garynyedotcom/ross_rqqijd.jpg"
              alt="UM"
            />
          </Card>
        </Grid>
        <Grid item={true} xs={12} sm={6}>
          <Typography variant="h5" color="primary.main">
            Univeristy of Michigan - Ross School of Business
          </Typography>
          <Typography variant="h6" color="secondary.main">
            Master of Business Administration - Strategy
          </Typography>
          <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
            Ann Arbor, MI from 2007 to 2009
          </Typography>

          <List dense>
            <ListItem>
              <ListItemIcon>
                <ArrowCircleRightIcon sx={{ color: 'secondary.main' }} />
              </ListItemIcon>
              <ListItemText primary="President of the DTE Clean Energy Prize Competition" />
            </ListItem>
          </List>
        </Grid>
        <Grid item={true} xs={0} sm={2}></Grid>
        <Grid item={true} xs={0} sm={2}></Grid>
        <Grid item={true} xs={12} sm={2}>
          <Card sx={{ margin: 2, maxWidth: 150, backgroundColor: "background.paper" }}>
            <CardMedia
              component="img"
              image="https://res.cloudinary.com/assurily/image/upload/v1670619242/garynyedotcom/mtu_kw7fyk.jpg"
              alt="MTU"
            />
          </Card>
        </Grid>
        <Grid item={true} xs={12} sm={6}>
          <Typography variant="h5" color="primary.main">
            Michigan Technological University
          </Typography>
          <Typography variant="h6" color="secondary.main">
            Bachelor of Science in Computer Engineering
          </Typography>
          <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
            Houghton, MI from 1999 to 2003
          </Typography>

          <List dense>
            <ListItem>
              <ListItemIcon>
                <ArrowCircleRightIcon sx={{ color: 'secondary.main' }} />
              </ListItemIcon>
              <ListItemText primary="Resident Assistant: 2001-2003" />
            </ListItem>
          </List>
        </Grid>
        <Grid item={true} xs={0} sm={2}></Grid>
      </Grid>
      <Box
        sx={{
          height: 300,
        }}
      ></Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
