import React from 'react';
import { Container, Grid, Typography, Box, TextField, Button, Paper, Stack, MenuItem } from '@mui/material';
import { Phone, Email, Language, LocationOn } from '@mui/icons-material'
import states from '../../data/states.json'
import FAQ from '../common/FAQ'

const ContactForm = () => {
  return (
    <Box sx={{ bgcolor: '#f8f9fa', py: 8 }}>
      <Container>
        <Grid container spacing={4}>
          {/* Title at the Top */}
          <Grid item xs={12}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#ff6600', textAlign: 'center', }}>
                Contact us for any information
              </Typography>
              <Typography variant="body2" gutterBottom sx={{  textAlign: 'center', }}>
                If you have any questions about the services we provide, simply use the form below. We will try and respond to all of your queries within 24 hours.
              </Typography>
          </Grid>

          {/* Left Side - Contact Information */}
          <Grid item xs={12} md={4}>
            <Box mt={3}>
              <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
                <Phone sx={{ color: '#ff6600' }} />
                <Typography variant="body1">011-47090909</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
                <Email sx={{ color: '#ff6600' }} />
                <Typography variant="body1">care@roadassisthelpline.com</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
                <Language sx={{ color: '#ff6600' }} />
                <Typography variant="body1">roadassisthelpline.com</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={2}>
                <LocationOn sx={{ color: '#ff6600' }} />
                <Typography variant="body1">
                  X-1, Okhla Phase II, F Block, Pocket X, <br />
                  Okhla Industrial Estate, New Delhi, Delhi 110020
                </Typography>
              </Stack>
            </Box>
          </Grid>

          {/* Right Side - Contact Form */}
          <Grid item xs={12} md={8}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Grid container spacing={2} mt={2}>
                <Grid item xs={12} sm={6}>
                  <TextField label="Name" fullWidth required />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField label="Mobile Number" fullWidth required />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField label="Email Address" fullWidth required />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField label="State" fullWidth required select >
                  {states.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField label="City" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Address" fullWidth multiline rows={3} />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" color="primary" size="large" sx={{ mt: 2 }}>
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

const ContactUs = () => {
  return (
    <Box>
      <ContactForm />
      <FAQ />
    </Box>
  )
};

export default ContactUs;
