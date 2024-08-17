import React from 'react';
import { Box, Typography, Container, Paper, Button } from '@mui/material';
import { Link } from 'react-router-dom'

const KeyLockoutService = () => {
  return (
    <Container maxWidth="100%" sx={{ marginBottom: '20px' }} >
      {/* Background Image with Overlay and Title */}
      <Box
        sx={{
          position: 'relative',
          height: '400px',
          backgroundImage: 'url(assets/key-lockout-4.jpg)', // Replace with your image path
          backgroundSize: 'cover',
          backgroundPosition: '0 70%',
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
            Key Lockout Service
          </Typography>
          <Typography
            variant="body1"
            component="p"
            color="white"
            sx={{ textAlign: 'left' }}
          >
            Locked out of your car? Our Key Lockout Service is here to get you back inside your vehicle quickly and without damage.
          </Typography>
        </Box>
      </Box>

      {/* Detailed Content */}
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
          Understanding Key Lockout Services
        </Typography>
        <Typography variant="body1" component="p" sx={{ mb: 2 }}>
          Being locked out of your vehicle can be a stressful and inconvenient experience. Whether you accidentally left your keys inside the car or lost them, our Key Lockout Service is designed to assist you in regaining access to your vehicle without causing any damage.
        </Typography>
        
        <Typography variant="h6" component="h3" sx={{ mb: 1 }}>
          Common Scenarios for Key Lockouts:
        </Typography>
        <ul>
          <li>Forgetting keys inside the car and accidentally locking the door</li>
          <li>Losing car keys while out and about</li>
          <li>Keys breaking off in the lock due to wear and tear</li>
          <li>Malfunctioning key fob or electronic lock system</li>
        </ul>

        <Typography variant="h6" component="h3" sx={{ mb: 1, mt: 3 }}>
          Difficulty in Unlocking the Vehicle:
        </Typography>
        <Typography variant="body1" component="p" sx={{ mb: 2 }}>
          Unlocking a vehicle without the right tools or expertise can be extremely challenging and may lead to damage to the car's lock or door. Finding a reliable locksmith can also be difficult, especially in emergency situations.
        </Typography>

        <Typography variant="h6" component="h3" sx={{ mb: 1, mt: 3 }}>
          How We Can Help:
        </Typography>
        <Typography variant="body1" component="p" sx={{ mb: 2 }}>
          Our Key Lockout Service is available around the clock to assist you in regaining access to your vehicle. Our experienced technicians are equipped with the necessary tools and skills to unlock your car quickly and safely, without causing any damage.
        </Typography>

        <Typography variant="h6" component="h3" sx={{ mb: 1, mt: 3 }}>
          Our Service Process:
        </Typography>
        <Typography variant="body1" component="p" sx={{ mb: 2 }}>
          When you contact us for a lockout service, our team responds immediately. We arrive at your location, assess the situation, and use specialized tools to unlock your vehicle. The process is typically completed within 15-30 minutes, ensuring minimal disruption to your day.
        </Typography>

        <Typography variant="h6" component="h3" sx={{ mb: 1, mt: 3 }}>
          Experience and Reliability:
        </Typography>
        <Typography variant="body1" component="p" sx={{ mb: 2 }}>
          With years of experience in the field, our technicians have successfully handled countless lockout situations. We pride ourselves on our quick response time, professionalism, and ability to resolve lockouts without causing any damage to your vehicle.
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

export default KeyLockoutService;
