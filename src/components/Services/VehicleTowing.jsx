import React from 'react';
import { Box, Typography, Container, Paper, Button } from '@mui/material';
import { Link } from 'react-router-dom'

const VehicleTowingService = () => {
  return (
    <Container maxWidth="100%" sx={{ marginBottom: '20px' }} >
      {/* Background Image with Overlay and Title */}
      <Box
        sx={{
          position: 'relative',
          height: '400px',
          backgroundImage: 'url(/assets/images/vehicle-towing.jpg)', // Replace with your image path
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
            sx={{ textAlign: 'left', mb: 2 }}
          >
            Vehicle Towing Service
          </Typography>
          <Typography
            variant="body1"
            component="p"
            color="white"
            sx={{ textAlign: 'left' }}
          >
            Stuck on the road? Our Vehicle Towing Service is here to transport your car or bike safely to your desired location.
          </Typography>
        </Box>
      </Box>

      {/* Detailed Content */}
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
          Understanding Vehicle Towing Services
        </Typography>
        <Typography variant="body1" component="p" sx={{ mb: 2 }}>
          When your vehicle breaks down or you're involved in an accident, towing may be the only solution to get your car or bike to a safe location or repair shop. Our Vehicle Towing Service ensures that your vehicle is transported securely and efficiently.
        </Typography>
        
        <Typography variant="h6" component="h3" sx={{ mb: 1 }}>
          Common Reasons for Vehicle Towing:
        </Typography>
        <ul>
          <li>Vehicle breakdowns due to mechanical or electrical failures</li>
          <li>Accidents resulting in a non-drivable vehicle</li>
          <li>Running out of fuel in remote areas</li>
          <li>Flat tires with no spare available</li>
          <li>Transporting vehicles to different locations (e.g., moving or relocation)</li>
        </ul>

        <Typography variant="h6" component="h3" sx={{ mb: 1, mt: 3 }}>
          The Challenge of Towing a Vehicle:
        </Typography>
        <Typography variant="body1" component="p" sx={{ mb: 2 }}>
          Towing a vehicle without professional assistance can be risky and may lead to further damage. Finding a reliable towing service, especially during emergencies, can also be challenging.
        </Typography>

        <Typography variant="h6" component="h3" sx={{ mb: 1, mt: 3 }}>
          How We Can Help:
        </Typography>
        <Typography variant="body1" component="p" sx={{ mb: 2 }}>
          Our Vehicle Towing Service is available 24/7 to assist you in transporting your vehicle safely. Our skilled operators use modern equipment to ensure your vehicle is towed without damage, whether it’s a short distance or a long haul.
        </Typography>

        <Typography variant="h6" component="h3" sx={{ mb: 1, mt: 3 }}>
          Our Service Process:
        </Typography>
        <Typography variant="body1" component="p" sx={{ mb: 2 }}>
          Once you contact us for towing, we dispatch a tow truck to your location immediately. Our team carefully loads your vehicle onto the tow truck, secures it, and transports it to your preferred destination. Depending on the distance and situation, the process is completed in a timely manner to minimize any inconvenience.
        </Typography>

        <Typography variant="h6" component="h3" sx={{ mb: 1, mt: 3 }}>
          Experience and Reliability:
        </Typography>
        <Typography variant="body1" component="p" sx={{ mb: 2 }}>
          With years of experience in the towing industry, our operators are trained to handle various towing scenarios. We prioritize safety, efficiency, and customer satisfaction, ensuring your vehicle is in good hands.
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

export default VehicleTowingService;
