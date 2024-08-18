import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Link } from 'react-router-dom';
import servicesData from '../../data/services.json'
import { Container } from '@mui/system';

/**
 * Services icons source ref: https://www.flaticon.com/free-icon/tow-truck_8940300?term=towing&page=1&position=17&origin=search&related_id=8940300
 * @returns 
 */
const OurServices = () => {
  return (
    <Container sx={{ textAlign: 'center', }}>
      <Box display={"block"} marginBottom={3}>
        <Typography variant="h3" component="h2" gutterBottom color={"#ff6600"}>
          Our Services
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Delivering top-notch services tailored to your needs. Trust us for reliable, high-quality assistance whenever you need it.
        </Typography>
      </Box>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {servicesData.map((service) => (
          <Grid item xs={12} sm={6} md={4} key={service.title}>
            <Card sx={{
              '&:hover': {
                boxShadow: '0px 4px 30px rgba(0, 0, 0, 0.2)',
                // backgroundColor: '#ff6600'
              }
            }}>
              <CardContent>
                <Link to={`${service.path}`} style={{ textDecoration: "none", color: "inherit" }}>
                  <img src={`/assets/icons/${service.icon}`} width={"40%"}></img>
                  <Typography variant="h5" component="h2" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {service.description}
                  </Typography>
                </Link>

              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>

  );
};

export default OurServices;
