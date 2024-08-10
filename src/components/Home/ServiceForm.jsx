import React, { useState } from "react";
import { Box, Button, Tabs, Tab, TextField, CardActions } from "@mui/material";
import Card from "@mui/material/Card";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const ServiceForm = () => {
  const [open, setOpen] = useState(true);
  const [value, setValue] = useState(0);

  const registrationRegex = "^[A-Z]{2}[ -][0-9]{1,2}(?: [A-Z])?(?: [A-Z]*)? [0-9]{4}$"

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const RequestForm = () => (
    <Box gap={5} display={"grid"} borderRadius={50} >
      <TextField
        sx={{ backgroundColor: "#fff", boxShadow: '0px 0px 1px 0px', borderRadius: '10px' }}
        InputProps={{ disableUnderline: true }}
        required
        variant="filled"
        color="primary"
        label="Service Location"
      />
      <TextField
        sx={{ backgroundColor: "#fff", boxShadow: '0px 0px 1px 0px', borderRadius: '10px' }}
        InputProps={{ disableUnderline: true }}
        required
        variant="filled"
        color="primary"
        label="Mobile Number"
      />
      <TextField
        sx={{ backgroundColor: "#fff", boxShadow: '0px 0px 1px 0px', borderRadius: '10px' }}
        InputProps={{ disableUnderline: true }}
        required
        variant="filled"
        color="primary"
        label="Vehicle Registration Number"
        
      />
    </Box>
  );

  return (
    <div style={{ margin: "25%", zIndex: -1 }}>
      <Card
        sx={{
          top: "5%",
          position: "absolute",
          right: 4,
          backgroundColor: "#f68236",
          boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;',
          maxHeight: 600,
          width: 400,
        }}
      >
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            sx={{ backgroundColor: "#fff", color: "#333333" }}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Service Request" />
            <Tab label="Become Member" />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <RequestForm />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <RequestForm />
        </CustomTabPanel>
        <CardActions
          sx={{
            backgroundColor: "#fff",
            color: "#007BFF",
            justifyContent: "center",
          }}
        >
          <Button  fullWidth size="medium" color="inherit" sx={{ justifyContent: 'center' }}>
            {value == 0 ? "Speak to Us" : "Explore Plans"}
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default ServiceForm;
