import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import BuildIcon from "@mui/icons-material/BuildOutlined";
import AccountCircle from "@mui/icons-material/AccountCircle";
import PhoneIcon from "@mui/icons-material/Phone";
import { makeStyles } from "@mui/styles";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  appBar: {
    boxShadow: "none",
    backgroundColor: "#fff",
    position: "absolute",
  },
  title: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    color: "#FF6600",
  },
  logo: {
    height: "40px",
    marginRight: "10px",
  },
  button: {
    color: "#000",
  },
  menuButton: {
    color: "#FF6600",
  },
  link: {
    alignItems: "inherit",
    display: "inherit",
    textDecoration: "none",
    color: "inherit",
  },
}));

const SERVICES = [
  "Tyre Puncture",
  "Fuel Delivery",
  "Towing",
  "Key Lockout",
  "Battery Jump Start",
  "Instant Car Repair",
];

const Navbar = () => {
  const classes = useStyles();
  const [anchorElServices, setAnchorElServices] = useState(null);

  const handleServicesMenu = (event) => {
    setAnchorElServices(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElServices(null);
  };

  return (
    <AppBar>
      <Toolbar className={classes.appBar}>
        <Typography variant="h6" component="div" className={classes.title}>
          <Link to="/" className={classes.link}>
            <img
              src="/assets/road-assit-logo.png"
              alt="Logo"
              className={classes.logo}
            />
            ROADASSIST
          </Link>
        </Typography>
        <Link to="/" className={classes.link}>
          <Button className={classes.button} startIcon={<HomeOutlinedIcon />}>
            <Typography component="div" className={classes.button}>
              Home
            </Typography>
          </Button>
        </Link>

        <Button
          className={classes.button}
          startIcon={<BuildIcon />}
          onClick={handleServicesMenu}
        >
          <Typography component="div" className={classes.button}>
            Services
          </Typography>
        </Button>
        <Menu
          anchorEl={anchorElServices}
          open={Boolean(anchorElServices)}
          onClose={handleClose}
        >
          {SERVICES.map((service, index) => {
            return (
              <Link key={index} to={`${service}`} className={classes.link}>
                <MenuItem>
                  <ListItemIcon>
                    <HomeOutlinedIcon className={classes.menuButton} />
                  </ListItemIcon>
                  <ListItemText primary={service} />
                </MenuItem>
              </Link>
            );
          })}
        </Menu>

        <Link to="/plans" className={classes.link}>
          <Button className={classes.button} startIcon={<BuildIcon />}>
            <Typography component="div" className={classes.button}>
              Plans
            </Typography>
          </Button>
        </Link>
        <Link to="/contact" className={classes.link}>
          <Button className={classes.button} startIcon={<PhoneIcon />}>
            <Typography component="div" className={classes.button}>
              Contact
            </Typography>
          </Button>
        </Link>

        <Link to="/about" className={classes.link}>
          <Button className={classes.button} startIcon={<InfoOutlinedIcon />}>
            <Typography component="div" className={classes.button}>
              About
            </Typography>
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
