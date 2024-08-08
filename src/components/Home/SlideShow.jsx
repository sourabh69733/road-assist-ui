import React, { useState } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';

const slides = [
  {
    text: 'Emergency Car Services Are Just a Call Away',
    description: 'Vehicle emergencies can happen unexpectedly. Crossroads Helpline understands this urgency and offers fast car services for emergencies by phone.',
    image: '/assets/slide1.jpg',
  },
  {
    text: 'Another Slide Title',
    description: 'Some other description for the second slide.',
    image: '/assets/slide1.jpg',
  },
  {
    text: 'Third Slide Title',
    description: 'Description for the third slide.',
    image: '/assets/slide1.jpg',
  },
];

const Slide = ({ text, description, image }) => (
  <Container>
    <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center" gap={2}>
      <Box flex="1">
        <Typography variant="h3" color="primary">{text}</Typography>
        <Typography variant="body1">{description}</Typography>
      </Box>
      <Box flex="1">
        <img src={image} alt={text} style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
      </Box>
    </Box>
  </Container>
);

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <Box>
      <Slide {...slides[currentSlide]} />
      <Box position="absolute" bottom={16} left="50%" display="flex" justifyContent="space-between" width="100%" maxWidth="600px" transform="translateX(-50%)">
        <Button variant="contained" color="primary" onClick={handlePrev}>Previous</Button>
        <Button variant="contained" color="primary" onClick={handleNext}>Next</Button>
      </Box>
    </Box>
  );
};

export default Slideshow;
