import React, { useState } from "react"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"
import BuildIcon from "@mui/icons-material/BuildOutlined"
import AccountCircle from "@mui/icons-material/AccountCircle"
import PhoneIcon from "@mui/icons-material/Phone"
import { makeStyles } from "@mui/styles"

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
}))

const Navbar = () => {
  const classes = useStyles()
  const [anchorElServices, setAnchorElServices] = useState(null)
  const [anchorElPlans, setAnchorElPlans] = useState(null)

  const handleServicesMenu = (event) => {
    setAnchorElServices(event.currentTarget)
  }

  const handlePlansMenu = (event) => {
    setAnchorElPlans(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorElServices(null)
    setAnchorElPlans(null)
  }

  return (
    <AppBar>
      <Toolbar className={classes.appBar}>
        <Typography variant="h6" component="div" className={classes.title}>
          <img
            src="/assets/road-assit-logo.png"
            alt="Logo"
            className={classes.logo}
          />
          ROADASSIST
        </Typography>
        <Button className={classes.button} startIcon={<HomeOutlinedIcon />}>
          <Typography component="div" className={classes.button}>
            Home
          </Typography>
        </Button>
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
          <MenuItem onClick={handleClose}>Service 1</MenuItem>
          <MenuItem onClick={handleClose}>Service 2</MenuItem>
        </Menu>
        <Button
          className={classes.button}
          startIcon={<AccountCircle />}
          onClick={handlePlansMenu}
        >
          <Typography component="div" className={classes.button}>
            Plans
          </Typography>
        </Button>
        <Menu
          anchorEl={anchorElPlans}
          open={Boolean(anchorElPlans)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Plan 1</MenuItem>
          <MenuItem onClick={handleClose}>Plan 2</MenuItem>
        </Menu>
        <Button className={classes.button} startIcon={<PhoneIcon />}>
          <Typography component="div" className={classes.button}>
            Contact
          </Typography>
        </Button>

        <IconButton
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="inherit"
          className={classes.menuButton}
        >
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
