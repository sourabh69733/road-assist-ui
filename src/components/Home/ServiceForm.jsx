import React, { useState } from "react";
import { Box, Button, TextField, CardActions, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import { useNavigate } from 'react-router-dom'

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
  const history = useNavigate()

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
    <div >
      <Card
        sx={{
          marginLeft: '20px',
          top: '10%',
          position: "relative",
          right: 4,
          boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;',
          maxHeight: 600,
          width: 400,
        }}
      >
        <Box justifyContent={"center"} margin={"10px"} display={'flex'} gap={3}>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <RequestForm />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <RequestForm />
        </CustomTabPanel>
        <CardActions
          sx={{
            justifyContent: "center",
            margin: '10px',
            gap: '10px'
          }}
        >
          {/* <Box >
          <Button color="success"  onClick={() => setValue(0)} variant="contained">
          Request a S1234567890ervice
          </Button>
          </Box> */}
          <Box>
          <Button color="success" onClick={() => history('/plans')} variant="contained">
          Become a Member
          </Button>
          </Box>
        </CardActions>
        <Box textAlign={'center'} marginBottom={'20px'}>
          <Typography fontWeight={'bold'}>
            Call us for support
          </Typography>
          <Typography fontWeight={''}>
            +91 1234567890
          </Typography>
        </Box>
      </Card>
    </div>
  );
};

export default ServiceForm;
