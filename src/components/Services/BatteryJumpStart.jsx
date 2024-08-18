import React from 'react';
import { Box, Typography, Paper, Container, Button } from '@mui/material';
import { Link } from 'react-router-dom'

const BatteryJumpstartService = () => {
    return (
        <Container maxWidth="100%" sx={{ marginBottom: '20px' }} >
            {/* Image with Title Overlay */}
            <Box
                sx={{
                    position: 'relative',
                    height: '300px',
                    backgroundImage: 'url(/assets/images/jump_start1.jpg)',
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
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Typography
                        variant="h3"
                        component="h1"
                        color="#fff"
                        textAlign="center"
                        sx={{
                            padding: '0 20px',
                        }}
                    >
                        Battery Jumpstart Services
                    </Typography>
                </Box>
            </Box>

            {/* Content Section */}
            <Paper elevation={3} sx={{ p: 4 }}>
                {/* Summary */}
                <Typography variant="h6" component="h2" gutterBottom>
                    Quick Relief When Your Car Won't Start
                </Typography>
                <Typography paragraph>
                    Battery Jumpstart Services are essential for getting your car back on the road when a drained or dead battery leaves you stranded. Whether you’re in your driveway or stuck in a remote location, our service ensures you don’t have to wait long to get moving again.
                </Typography>

                {/* Causes and Frequency */}
                <Typography variant="h6" component="h2" gutterBottom>
                    Common Causes and Frequency
                </Typography>
                <Typography component="ul">
                    <li>Extreme Weather Conditions: Both scorching summers and freezing winters can drain your battery faster.</li>
                    <li>Infrequent Vehicle Use: If you don’t drive your car regularly, the battery may lose its charge.</li>
                    <li>Leaving Lights or Accessories On: Forgetting to turn off your headlights or other electronics can quickly deplete the battery.</li>
                    <li>Aging Battery: Most car batteries last 3-5 years; older batteries are more likely to fail unexpectedly.</li>
                </Typography>

                {/* Difficulty of Repair */}
                <Typography variant="h6" component="h2" gutterBottom>
                    Difficulty of Repair
                </Typography>
                <Typography paragraph>
                    Finding someone to help with a battery jumpstart can be challenging, especially in remote areas or late at night. While a jumpstart might seem straightforward, modern vehicles have complex electrical systems, and an improper jumpstart could lead to expensive damage.
                </Typography>

                {/* Our Expertise and Ease of Service */}
                <Typography variant="h6" component="h2" gutterBottom>
                    Our Expertise and Ease of Service
                </Typography>
                <Typography paragraph>
                    When you choose our Battery Jumpstart Services, you’re opting for a solution that’s not just quick but also professional. Our team is trained to handle all types of vehicles and battery systems, ensuring that your car is back up and running without any risk to its sensitive electronics. We prioritize speed and efficiency, getting to your location as quickly as possible.
                </Typography>

                {/* How We Get the Job Done */}
                <Typography variant="h6" component="h2" gutterBottom>
                    How We Get the Job Done
                </Typography>
                <Typography paragraph>
                    Once you contact us, here’s what you can expect:
                </Typography>
                <Typography component="ul">
                    <li>Rapid Response: Our team is dispatched immediately to your location, with an average arrival time of just 30-45 minutes.</li>
                    <li>Professional Assessment: Upon arrival, we first diagnose the issue to confirm that the battery is the root cause of the problem.</li>
                    <li>Safe and Efficient Jumpstart: Using state-of-the-art equipment, we perform the jumpstart safely, ensuring your vehicle’s electrical system is protected.</li>
                    <li>Completion Time: The entire process, from diagnosis to jumpstart, typically takes under 20 minutes.</li>
                    <li>Expert Advice: After the service, we provide recommendations on battery maintenance or replacement, if necessary, to prevent future issues.</li>
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

export default BatteryJumpstartService;
