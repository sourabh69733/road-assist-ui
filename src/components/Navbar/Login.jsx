import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  TextField,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  card: {
    maxWidth: "100%",
    margin: "10px",
    borderRadius: 12,
    boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.6)",
  },
  price: {
    fontWeight: "bold",
    color: "#2074b7",
  },
  cardHeader: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  },
  button: {
    width: "100%",
    marginTop: "1.5rem",
  },
  viewDetailsButton: {
    marginBottom: "0.5rem",
  },
  image: {
    width: "100%",
    height: "auto",
    marginBottom: "1rem",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  details: {
    marginBottom: "1rem",
  },
  dialogTitle: {
    backgroundColor: "#28a745",
    color: "#fff",
  },
});

function Login({ open, onClose }) {
  const classes = useStyles();

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md"  >
      <DialogTitle className={classes.dialogTitle}>
        Login
      </DialogTitle>
      <DialogContent>
        <Typography marginBottom={"10px"} marginTop={"10px"}>
            Mobile Number (+91)
        </Typography>

        <Box display={"grid"} alignItems={"center"} justifyContent={"center"} >
        <TextField
            sx={{ juti: 'center',  backgroundColor: "white", width: '300px', boxShadow: '0px 0px 1px 0px', borderRadius: '10px' }}
            InputProps={{ disableUnderline: true, datatype: 'number' }}
            required
            variant="filled"
            color="primary"
            label="Mobile number"
        />
        <Button variant="contained" textAlign={'center'} sx={{ width: '50%', left: '25%', marginTop: '15px', textAlign: 'center', justifyContent: 'center' }}>
            Submit
        </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default Login