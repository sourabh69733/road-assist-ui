import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia'; // For potential images

const OurServices = () => {
  const services = [
    {
      title: 'Tyre Puncture',
      description: 'Flat tires can really put a damper on your day, but don\'t worry-we\'re here to help. Our speedy tire puncture service has got you covered.',
      icon: 'local_gas_station' // Replace with actual icon
    },
    {
      title: 'Fuel Delivery',
      description: 'Whether you\'re running low on fuel or stuck, don\'t stress! Our on-site car refueling service is here to save the day.',
      icon: 'directions_car' // Replace with actual icon
    },
    // ... other services
  ];

  return (
    <Box sx={{ textAlign: 'center', padding: 2 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Our Services
      </Typography>
      <Typography variant="body1" color="textSecondary" component="p">
        Delivering top-notch services tailored to your needs. Trust us for reliable, high-quality assistance whenever you need it.
      </Typography>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {services.map((service) => (
          <Grid item xs={12} sm={6} md={4} key={service.title}>
            <Card sx={{
                '&:hover': {
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)'
                }
            }}>
              <CardContent>
                {/* Replace with actual icon component */}
                <i className="material-icons">{service.icon}</i>
                <Typography variant="h5" component="h2" gutterBottom>
                  {service.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OurServices;
