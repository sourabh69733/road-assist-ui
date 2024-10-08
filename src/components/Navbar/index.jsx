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
import PhoneIcon from "@mui/icons-material/Phone";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { makeStyles } from "@mui/styles";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import { Drawer, List, ListItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import servicesData from "../../data/services.json";
import Box from "@mui/material/Box";
import Login from "./Login";

const useStyles = makeStyles(() => ({
  appBar: {
    boxShadow: "none",
    backgroundColor: "#fff",
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
  drawerList: {
    width: 250,
  },
}));

const LoginIcon = () => {
  return (
    <>
      <img src="/assets/icons/user-login.png" width={"24px"} height={"24px"} />
    </>
  );
};

const PlanIcon = () => {
  return (
    <img width={"24px"} height={"24px"} src="assets/icons/plans_icon.png" />
  );
};

const Navbar = () => {
  const classes = useStyles();
  const [anchorElServices, setAnchorElServices] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [isLoginOpen, setIsLoginOpen] = React.useState(false);

  const handleServicesMenu = (event) => {
    setAnchorElServices(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElServices(null);
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const drawer = (
    <div className={classes.drawerList}>
      <List>
        <ListItem component={Link} to="/" onClick={toggleDrawer(false)}>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem onClick={handleServicesMenu}>
          <ListItemText primary="Services" />
        </ListItem>
        <ListItem component={Link} to="/plans" onClick={toggleDrawer(false)}>
          <ListItemText primary="Plans" />
        </ListItem>
        <ListItem component={Link} to="/contact" onClick={toggleDrawer(false)}>
          <ListItemText primary="Contact" />
        </ListItem>
        <ListItem component={Link} to="/about" onClick={toggleDrawer(false)}>
          <ListItemText primary="About" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <>
      <AppBar position="relative" sx={{ boxShadow: "none" }}>
        <Toolbar className={classes.appBar}>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="black"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
              >
                {drawer}
              </Drawer>
            </>
          ) : (
            <>
              <Typography
                variant="h6"
                component="div"
                className={classes.title}
              >
                <Link to="/" className={classes.link}>
                  <img
                    src="/assets/logo/road-assit.png"
                    alt="Logo"
                    className={classes.logo}
                  />
                  ROADASSIST
                </Link>
              </Typography>

              <Box display={"flex"} gap={3}>
                <Link to="/" className={classes.link}>
                  <Button
                    className={classes.button}
                    startIcon={<HomeOutlinedIcon />}
                  >
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
                  {servicesData.map((service, index) => (
                    <Link
                      key={index}
                      to={`/${service.path}`}
                      className={classes.link}
                    >
                      <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                          <HomeOutlinedIcon className={classes.menuButton} />
                        </ListItemIcon>
                        <ListItemText primary={service.title} />
                      </MenuItem>
                    </Link>
                  ))}
                </Menu>

                <Link to="/plans" className={classes.link}>
                  <Button className={classes.button} startIcon={<PlanIcon />}>
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
              </Box>
              <Box marginLeft={"20px"} marginRight={"10px"}>
                <Button
                  variant="contained"
                  startIcon={<LoginIcon />}
                  onClick={() => setIsLoginOpen(!isLoginOpen)}
                >
                  Login
                </Button>
              </Box>
            </>
          )}
        </Toolbar>
        <Login open={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      </AppBar>
    </>
  );
};

export default Navbar;
