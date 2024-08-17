import React from 'react';
import { Box, Typography, Container, Paper, Button } from '@mui/material';
import { Link } from 'react-router-dom'

const FlatTyreService = () => {
  return (
    <Container maxWidth="100%" sx={{ marginBottom: '20px' }} >
      {/* Background Image with Overlay and Title */}
      <Box
        sx={{
          position: 'relative',
          height: '400px',
          backgroundImage: 'url(assets/flat-tyre-3.jpg)', // Replace with your image path
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
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
            Flat Tyre Service
          </Typography>
          <Typography
            variant="body1"
            component="p"
            color="white"
            sx={{ textAlign: 'left' }}
          >
            A flat tyre can happen at any time and can leave you stranded on the road. Our Flat Tyre Service is designed to get you back on your journey quickly and safely.
          </Typography>
        </Box>
      </Box>

      {/* Detailed Content */}
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
          Understanding Flat Tyres
        </Typography>
        <Typography variant="body1" component="p" sx={{ mb: 2 }}>
          Flat tyres are one of the most common issues drivers face. They can be caused by various factors, such as sharp objects on the road, worn-out tyres, or improper inflation. Being stranded with a flat tyre can be stressful and inconvenient, especially if you're in an unfamiliar area.
        </Typography>
        
        <Typography variant="h6" component="h3" sx={{ mb: 1 }}>
          Common Causes of Flat Tyres:
        </Typography>
        <ul>
          <li>Punctures from nails, glass, or other sharp objects</li>
          <li>Blowouts due to overinflation or underinflation</li>
          <li>Worn-out tread causing tyre failure</li>
          <li>Impact damage from hitting curbs or potholes</li>
          <li>Valve stem issues</li>
        </ul>

        <Typography variant="h6" component="h3" sx={{ mb: 1, mt: 3 }}>
          Difficulty in Repairing Flat Tyres:
        </Typography>
        <Typography variant="body1" component="p" sx={{ mb: 2 }}>
          Repairing a flat tyre requires specific tools and knowledge, especially if you're dealing with a blowout or sidewall damage. Finding a reliable service provider on the spot can be challenging, particularly in remote areas.
        </Typography>

        <Typography variant="h6" component="h3" sx={{ mb: 1, mt: 3 }}>
          How We Can Help:
        </Typography>
        <Typography variant="body1" component="p" sx={{ mb: 2 }}>
          Our Flat Tyre Service is available 24/7, ensuring that help is just a phone call away. Our technicians arrive quickly, equipped with all the necessary tools to either repair your tyre or replace it with a spare, getting you back on the road in no time.
        </Typography>

        <Typography variant="h6" component="h3" sx={{ mb: 1, mt: 3 }}>
          Our Repair Process:
        </Typography>
        <Typography variant="body1" component="p" sx={{ mb: 2 }}>
          Upon arrival, our technicians will assess the damage to your tyre. If it's a simple puncture, we'll repair it on the spot. For more severe damage, we'll replace the tyre with your spare. The entire process typically takes less than 30 minutes, ensuring minimal disruption to your day.
        </Typography>

        <Typography variant="h6" component="h3" sx={{ mb: 1, mt: 3 }}>
          Experience and Reliability:
        </Typography>
        <Typography variant="body1" component="p" sx={{ mb: 2 }}>
          With years of experience in roadside assistance, we have helped countless drivers with flat tyres. Our prompt and professional service ensures that you're never left stranded, no matter where you are.
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

export default FlatTyreService;
