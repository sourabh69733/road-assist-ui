import React from "react";
import { Box, Typography, Container, Button, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { pricingOptions, planDetails } from "../../data/plans.json";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";

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

function PlanDetailsModal({ open, onClose, planName, planId }) {
  const classes = useStyles();
  const details = planDetails[planId] || [];

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle className={classes.dialogTitle}>
        {planName} Details
      </DialogTitle>
      <DialogContent>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Feature</strong>
              </TableCell>
              <TableCell>
                <strong>{planName}</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {details.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.feature}</TableCell>
                <TableCell>{item.detail}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </DialogContent>
    </Dialog>
  );
}

function PricingCard({
  title,
  price,
  duration,
  vehiclesCovered,
  services,
  id: planId,
}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const history = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card className={classes.card}>
        <CardContent sx={{ zoom: 0.9 }}>
          <Typography
            variant="h5"
            className={classes.cardHeader}
            align="center"
          >
            {title}
          </Typography>
          <Typography variant="h4" className={classes.price} align="center">
            ₹ {price}
          </Typography>
          <img
            src={"/assets/images/sample-plan-card.png"}
            alt={title}
            className={classes.image}
          />

          <Divider />
          <Box className={classes.details}>
            <Typography
              fontWeight={"bold"}
              margin={"15px"}
              variant="body1"
              align="center"
            >
              Duration: {duration} Year{duration > 1 ? "s" : ""}
            </Typography>
            <Typography
              fontWeight={"bold"}
              margin={"15px"}
              variant="body1"
              align="center"
            >
              Vehicles Covered: {vehiclesCovered}
            </Typography>
            <Typography
              fontWeight={"bold"}
              margin={"15px"}
              variant="body1"
              align="center"
            >
              No. of Services: {services}
            </Typography>
          </Box>
          <Box display={"grid"} gap={3} justifyContent={"center"}>
            <Button
              variant="outlined"
              color="primary"
              className={`${classes.button} ${classes.viewDetailsButton}`}
              onClick={handleClickOpen}
            >
              View Details
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => history(`/checkout?planId=${planId}`)}
              className={classes.button}
            >
              Buy Now
            </Button>
          </Box>
        </CardContent>
      </Card>
      <PlanDetailsModal
        open={open}
        onClose={handleClose}
        planName={title}
        planId={planId}
      />
    </>
  );
}

const BatteryJumpstartService = () => {
  return (
    <Container maxWidth="100%" sx={{ width: "100%", marginBottom: "20px" }}>
      <Box
        sx={{
          position: "relative",
          height: "300px",
          backgroundImage: "url(/assets/images/jump_start1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "8px",
          mb: 4,
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            color="#fff"
            textAlign="center"
            sx={{
              padding: "0 20px",
            }}
          >
            Discover the Ideal Roadside Assistance Plan for Your Journey
          </Typography>
        </Box>
      </Box>
      <Grid container spacing={4} justifyContent="center">
        {pricingOptions.map((option, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <PricingCard {...option} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BatteryJumpstartService;
