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
    <Box gap={5} display={"grid"} borderRadius={5}>
      <TextField
        sx={{ backgroundColor: "#fff" }}
        required
        label="Service Location"
        variant="outlined"
      />
      <TextField
        sx={{ backgroundColor: "#fff" }}
        required
        label="Mobile Number"
        variant="outlined"
      />
      <TextField
        sx={{ backgroundColor: "#fff" }}
        required
        label="Vehicle Registration Number"
        variant="outlined"
      />
    </Box>
  );

  return (
    <div style={{ margin: "25%", zIndex: -1 }}>
      <Card
        sx={{
          maxWidth: 1000,
          position: "absolute",
          right: 4,
          top: 100,
          backgroundColor: "#F5F5F5",
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
          <Button size="small" color="inherit">
            {value == 0 ? "Speak to Us" : "Explore Plans"}
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default ServiceForm;
