import React from 'react';
import { Container, Box, Typography, Grid, Paper } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import PersonIcon from '@mui/icons-material/Person';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const ServiceStatisficationStats = () => {
  const stats = [
    { icon: <ThumbUpIcon fontSize="large" />, value: '2500+', label: 'Car Emergency Service Provided' },
    { icon: <PersonIcon fontSize="large" />, value: '95%', label: 'Customer Satisfaction' },
    { icon: <DirectionsCarIcon fontSize="large" />, value: '99%', label: 'Car & Bike Breakdown Assist' },
    { icon: <AccessTimeIcon fontSize="large" />, value: '96%', label: 'On-Time Service' },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 6, mb: 6 }}>
      <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#ff6600' }}>
      Satisfaction Guaranteed
      </Typography>
      <Typography variant="body1" component="p" align="center" sx={{ mb: 4 }}>
        Our promise of quality service ensures your peace of mind. Trust us for reliable solutions tailored to your needs.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper elevation={3} sx={{ padding: 3, textAlign: 'center', borderRadius: '5%', backgroundColor: '#e8f5e9' }}>
              <Box sx={{ color: 'green', mb: 1 }}>
                {stat.icon}
              </Box>
              <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold' }}>
                {stat.value}
              </Typography>
              <Typography variant="body2" component="p">
                {stat.label}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ServiceStatisficationStats;
