import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import socialIconsData from "../../data/social.json";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";
import { List, ListItem, ListItemText } from "@mui/material";
import { Phone, Email, LocationOn, AccessTime } from "@mui/icons-material";

const servicesData = {
  label: "Services",
  items: [
    {
      key: "tyre_1",
      label: `Tyre punture`,
      linkTo: "/",
    },
    {
      key: "key_lock_2",
      label: `Key lock`,
      link: "/contact",
    },
    {
      key: "about_us_3",
      label: `About Us`,
      link: "/about",
    },
    {
      key: "privacy_4",
      label: `Privacy Policy`,
      link: "/privacy",
    },
    {
      key: "terms_5",
      label: `Terms and Conditions`,
      link: "/terms",
    },
  ],
};

const SUPPORT = [
  {
    key: "faq_1",
    label: `FAQ's`,
    linkTo: "/",
  },
  {
    key: "contact_2",
    label: `Contact`,
    linkTo: "/contact",
  },
  {
    key: "about_us_3",
    label: `About Us`,
    linkTo: "/about",
  },
  {
    key: "privacy_4",
    label: `Privacy Policy`,
    linkTo: "/privacy",
  },
  {
    key: "terms_5",
    label: `Terms and Conditions`,
    linkTo: "/terms",
  },
];

const SERVICES = [
  "Battery Jumpstart Services",
  "Mechanical Fault Services",
  "Flat Tyre Services",
  "Fuel Filling Services",
  "Key Lockout Services",
  "Car & Bike Towing Services",
  "Body-Repair",
  "Brake-Repair",
  "Car AC Repair",
  "Engine Diagnostic",
];

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#f0f0f0",
        py: 6,
        display: "grid",
        gridTemplateRows: "1fr auto",
        position: "relative",
        maxHeight: "100vh",
      }}
    >
      <Container maxWidth="100%">
        <Grid container spacing={8}>
          {/* Image Column */}
          <Grid item xs={6} md={3}>
            <img src="/assets/logo/road-assit.png" width={"100%"} />
            <Typography variant="body2" align="left">
              At Road Assist, we are dedicated to providing exceptional roadside
              assistance services in Jaipur, Rajasthan
            </Typography>
            <Box gap={1} display={"flex"} sx={{ margin: "5px" }}>
              {socialIconsData.map((iconObj, index) => {
                return (
                  <div key={"social-icon-" + index}>
                    <a href={iconObj.link} target="_blank">
                      <img src={`/assets/icons/${iconObj.image}`}></img>
                    </a>
                  </div>
                );
              })}
            </Box>
          </Grid>

          {/* Support Column */}
          <Grid item xs={6} md={3}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontWeight: "bold", color: "#FF6600" }}
            >
              Support
            </Typography>
            <List>
              {SUPPORT.map((item, index) => (
                <Link
                  key={index}
                  to={`${item["linkTo"]}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <ListItem disablePadding>
                    <ListItemText primary={item.label} />
                  </ListItem>
                </Link>
              ))}
            </List>
          </Grid>

          {/* Our Services Column */}
          <Grid item xs={6} md={3}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontWeight: "bold", color: "#FF6600" }}
            >
              Our Services
            </Typography>
            <List>
              {SERVICES.map((text, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Grid>

          {/* Contact Column */}
          <Grid item xs={6} md={3}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontWeight: "bold", color: "#FF6600" }}
            >
              Contact
            </Typography>
            <List>
              <ListItem>
                <AccessTime sx={{ mr: 2 }} />
                <ListItemText primary="24 Hours" />
              </ListItem>
              <ListItem>
                <Phone sx={{ mr: 2 }} />
                <ListItemText primary="+918946834451, +919929889500" />
              </ListItem>
              <ListItem>
                <Email sx={{ mr: 2 }} />
                <ListItemText primary="roadassist1789@gmail.com" />
              </ListItem>
              <ListItem>
                <LocationOn sx={{ mr: 2 }} />
                <ListItemText
                  primary="Plot No 7, First Floor, Gangotri Nagar,
                  Gopalpura Bypaas, Jaipur - 302018"
                />
              </ListItem>
              <ListItem>
                <Phone sx={{ mr: 2 }} />
                <ListItemText primary="Ph, No - 0141-3657745" />
              </ListItem>
            </List>
          </Grid>
        </Grid>
        <Divider width="100%" />
        <Box>
        <Typography marginTop={"20px"} variant="body2" align="center" color="textSecondary">
          {"Copyright © "}
          {new Date().getFullYear()}
          {" ROADASSIST HELPLINE LLP. All Rights Reserved."}
        </Typography>
        </Box>
        
      </Container>
    </Box>
  );
};

export default Footer;
