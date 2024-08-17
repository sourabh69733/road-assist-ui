import React from 'react';
import { Box, Typography, Container, Paper, Button } from '@mui/material';
import { Link } from 'react-router-dom'

const FuelFillingService = () => {
  return (
    <Container maxWidth="100%" sx={{ marginBottom: '20px' }} >
      {/* Background Image with Overlay and Title */}
      <Box
        sx={{
          position: 'relative',
          height: '400px',
          backgroundImage: 'url(assets/fuel-filling.jpg)', // Replace with your image path
          backgroundSize: 'cover',
          backgroundPosition: '0 50%',
          borderRadius: '8px',
          mb: 4,
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.6)', // Black overlay
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            color="white"
            sx={{ textAlign: 'left', mb: 2 }}
          >
            Fuel Filling Service
          </Typography>
          <Typography
            variant="body1"
            component="p"
            color="white"
            sx={{ textAlign: 'left' }}
          >
            Running out of fuel can leave you stranded in the middle of nowhere. Our Fuel Filling Service is here to get you moving again quickly and efficiently.
          </Typography>
        </Box>
      </Box>

      {/* Detailed Content */}
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
          Understanding Fuel Filling Services
        </Typography>
        <Typography variant="body1" component="p" sx={{ mb: 2 }}>
          Running out of fuel is a frustrating and inconvenient experience, especially if you're far from the nearest gas station. This service is designed to bring fuel directly to your location, ensuring that you're back on the road without delay.
        </Typography>
        
        <Typography variant="h6" component="h3" sx={{ mb: 1 }}>
          Common Scenarios for Needing Fuel:
        </Typography>
        <ul>
          <li>Long drives through remote areas with no nearby fuel stations</li>
          <li>Unplanned trips where fuel consumption is underestimated</li>
          <li>Overlooked refueling due to a busy schedule</li>
          <li>Malfunctioning fuel gauges</li>
        </ul>

        <Typography variant="h6" component="h3" sx={{ mb: 1, mt: 3 }}>
          Difficulty in Finding Fuel:
        </Typography>
        <Typography variant="body1" component="p" sx={{ mb: 2 }}>
          Finding a fuel station nearby can be challenging, especially in unfamiliar or remote areas. The stress of being stuck without fuel is compounded by the difficulty in locating a nearby service station, which is why having a reliable fuel delivery service is crucial.
        </Typography>

        <Typography variant="h6" component="h3" sx={{ mb: 1, mt: 3 }}>
          How We Can Help:
        </Typography>
        <Typography variant="body1" component="p" sx={{ mb: 2 }}>
          Our Fuel Filling Service is available 24/7 to ensure you’re never stranded for long. Whether you’re on a busy highway or a remote road, our team will reach you promptly with the fuel you need to get back on track.
        </Typography>

        <Typography variant="h6" component="h3" sx={{ mb: 1, mt: 3 }}>
          Our Service Process:
        </Typography>
        <Typography variant="body1" component="p" sx={{ mb: 2 }}>
          Upon your request, our service team is dispatched immediately with a fuel supply. The entire process, from your call to the fuel being delivered and filled, usually takes less than 30 minutes. We ensure that the fuel is safely delivered and filled so you can continue your journey with peace of mind.
        </Typography>

        <Typography variant="h6" component="h3" sx={{ mb: 1, mt: 3 }}>
          Experience and Reliability:
        </Typography>
        <Typography variant="body1" component="p" sx={{ mb: 2 }}>
          With extensive experience in roadside assistance, our team is well-equipped to handle emergency fuel deliveries. We have a reputation for fast and reliable service, ensuring you’re never left stranded without help.
        </Typography>
        <Link
                    to="/plans"
                    style={{ textDecoration: "none", color: "inherit" }}
                >
                    <Box display="flex" justifyContent="center" sx={{ marginTop: "10px" }}>
                        <Button variant="contained"  >Become a member</Button>
                    </Box>
                </Link>
      </Paper>
    </Container>
  );
};

export default FuelFillingService;
