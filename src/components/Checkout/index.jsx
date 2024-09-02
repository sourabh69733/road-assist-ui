import React from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  Divider,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Box,
} from "@mui/material";
import { useLocation } from 'react-router-dom'
import { pricingOptions } from '../../data/plans.json'

export default function CheckoutPage() {
  const { search } = useLocation()

  const query = new URLSearchParams(search);

  const planId = query.get('planId') || 'gold-plan'

  console.log('planId', query, search,  planId)

  const plan = pricingOptions.find((item) => item.id == planId)

  const { title, id, price, duration, services, vehiclesCovered } = plan

  const gst = Math.round(price * 0.18)

  return (
    // <Container maxWidth="100%" sx={{ mt: 5 }}>
    <Paper
      elevation={3}
      sx={{
        p: 3,
        backgroundColor: "#f9f9f9",
        width: "100%",
        minHeight: "100vh", // Ensures the paper covers the full height of the viewport
        boxSizing: "border-box",
      }}
    >
      <Grid container spacing={3}>
        {/* Order Summary Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Your Order
          </Typography>
          <Paper elevation={2} sx={{ p: 2, mb: 2, backgroundColor: "#ffffff" }}>
            <Grid container alignItems="center" spacing={2}>
              <Grid item>
                <img
                  src={'/assets/images/sample-plan-card.png'}
                  alt="Gold Pan India"
                  style={{ width: "150px", height: "auto" }}
                />
              </Grid>
              <Grid item xs>
                <Typography variant="h6" align="right">
                  {title}
                </Typography>
                <Typography variant="body2" align="right">
                  Service: {services}<br />
                  Validity: {duration} {duration > 1 ? 'Years' : 'Year'}
                </Typography>
                <Typography variant="h5" color="primary" align="right">
                  ₹ {price}
                </Typography>
              </Grid>
            </Grid>
          </Paper>

          {/* Price Summary Section */}
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="body2">Subtotal</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" align="right">
                ₹ {price}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2">Promo Discount</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" align="right">
                ₹0
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2">GST 18% :</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" align="right">
                ₹ {gst}
              </Typography>
            </Grid>
          </Grid>
          <Divider sx={{ my: 2 }} />
          <Grid item xs={6}>
            <Typography variant="h6">Total</Typography>
          </Grid>
          <Grid item xs={20}>
            <Typography variant="h6" align="right">
              ₹ { price + gst }
            </Typography>
          </Grid>
        </Grid>

        {/* Checkout Form Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Checkout Details
          </Typography>
          <Box component="form" sx={{ backgroundColor: "#ffffff", p: 2 }}>
            <TextField
              fullWidth
              label="Mobile Number"
              variant="outlined"
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Email Address"
              variant="outlined"
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Customer Name"
              variant="outlined"
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Billing Address"
              variant="outlined"
              margin="normal"
              required
            />
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="State"
                  variant="outlined"
                  margin="normal"
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="City"
                  variant="outlined"
                  margin="normal"
                  required
                />
              </Grid>
            </Grid>
            <TextField
              fullWidth
              label="Vehicle Reg No."
              variant="outlined"
              margin="normal"
              required
            />
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <FormControl fullWidth margin="normal">
                  <InputLabel>Select Brand</InputLabel>
                  <Select variant="outlined" required>
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Brand 1</MenuItem>
                    <MenuItem value={20}>Brand 2</MenuItem>
                    <MenuItem value={30}>Brand 3</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth margin="normal">
                  <InputLabel>Select Model</InputLabel>
                  <Select variant="outlined" required>
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Model 1</MenuItem>
                    <MenuItem value={20}>Model 2</MenuItem>
                    <MenuItem value={30}>Model 3</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              sx={{ mt: 2, backgroundColor: "#28a745" }}
            >
              Pay ₹1999
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Paper>
    // </Container>
  );
}
