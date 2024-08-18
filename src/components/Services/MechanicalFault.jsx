import React from 'react';
import { Box, Typography, Container, Paper, Button } from '@mui/material';
import { Link } from 'react-router-dom'

const MechanicalFaultService = () => {
  return (
    <Container maxWidth="100%" sx={{ mt: 4, marginBottom: '20px' }}>
      {/* Background Image with Overlay and Title */}
      <Box
        sx={{
          position: 'relative',
          height: '400px',
          backgroundImage: 'url(/assets/images/auto-repair.jpg)', // Replace with your image path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
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
            sx={{ textAlign: 'center', mb: 2 }}
          >
            Mechanical Fault Service
          </Typography>
          <Typography
            variant="body1"
            component="p"
            color="white"
            sx={{ textAlign: 'center' }}
          >
            Experiencing a mechanical fault while on the road can be daunting. Our Mechanical Fault Service is designed to get you back on track quickly and efficiently, minimizing any disruption to your journey.
          </Typography>
        </Box>
      </Box>

      {/* Detailed Content */}
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
          Understanding Mechanical Faults
        </Typography>
        <Typography variant="body1" component="p" sx={{ mb: 2 }}>
          Mechanical faults can occur unexpectedly and may involve issues with the engine, transmission, or other critical systems of your vehicle. These faults can lead to breakdowns and may require immediate attention.
        </Typography>
        
        <Typography variant="h6" component="h3" sx={{ mb: 1 }}>
          Common Causes of Mechanical Faults:
        </Typography>
        <ul>
          <li>Overheating due to coolant leaks or faulty thermostats</li>
          <li>Transmission issues such as slipping gears</li>
          <li>Engine misfires or stalling</li>
          <li>Brake system malfunctions</li>
          <li>Faulty alternator or battery issues</li>
        </ul>

        <Typography variant="h6" component="h3" sx={{ mb: 1, mt: 3 }}>
          Difficulty in Repairing Mechanical Faults:
        </Typography>
        <Typography variant="body1" component="p" sx={{ mb: 2 }}>
          Mechanical faults often require specialized tools and expertise to diagnose and repair. Finding a reliable service provider in such situations can be challenging, especially when you're stranded in an unfamiliar location.
        </Typography>

        <Typography variant="h6" component="h3" sx={{ mb: 1, mt: 3 }}>
          How We Can Help:
        </Typography>
        <Typography variant="body1" component="p" sx={{ mb: 2 }}>
          Our team of experienced mechanics is available round the clock to assist you with any mechanical faults. We respond quickly, ensuring that help reaches you in the shortest possible time. With our service, you can avoid the stress of finding a trustworthy mechanic when you need one most.
        </Typography>

        <Typography variant="h6" component="h3" sx={{ mb: 1, mt: 3 }}>
          Our Repair Process:
        </Typography>
        <Typography variant="body1" component="p" sx={{ mb: 2 }}>
          Upon arrival, our technicians will conduct a thorough inspection of your vehicle to identify the fault. We then proceed with the necessary repairs, whether it involves fixing the engine, transmission, or other systems. Our goal is to get you back on the road as quickly as possible, with most repairs being completed within an hour, depending on the severity of the issue.
        </Typography>

        <Typography variant="h6" component="h3" sx={{ mb: 1, mt: 3 }}>
          Experience and Reliability:
        </Typography>
        <Typography variant="body1" component="p" sx={{ mb: 2 }}>
          With years of experience in roadside assistance, we have successfully resolved numerous mechanical faults for our customers. Our commitment to quality and customer satisfaction ensures that you're in good hands, no matter the issue.
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

export default MechanicalFaultService;
