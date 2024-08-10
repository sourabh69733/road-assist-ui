import React, { useState } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import slides from './slides.json'

const DashedLines = ({ currentSlide, setCurrentSlide }) => {
  const lineStyle = (isActive) => ({
    height: '4px',
    width: '30px',
    backgroundColor: isActive ? '#1976d2' : '#ffffff', // Change active color here
    marginRight: '8px',
    borderRadius: '2px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.2s ease', // Smooth transition
    padding: '6px', // Increase the clickable area
    boxSizing: 'border-box',
    '&:hover': {
      transform: 'scale(1.1)', // Slightly enlarge on hover
      backgroundColor: isActive ? '#1976d2' : '#e4813e', // Change color on hover
    },
  });

  const handleClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <Box position={"fixed"} top="80%" left={"20%"} display="flex" alignItems="center">
      {slides.map((_, index) => (
        <Box
          key={index}
          sx={lineStyle(currentSlide === index)}
          onClick={() => handleClick(index)}
        ></Box>
      ))}
    </Box>
  );
};

// width / height = 1.78
const Slide = ({ text, description, image }) => {
  const imageheight = 450
  return (
    <Container>
      <Box sx={{ maxWidth: '65%' }} display="flex" top={'5%'} position={'absolute'} flexDirection="row" alignItems="center" justifyContent="center" gap={2}>
        <Box flex="1">
          <Typography variant="h3" color="primary">{text}</Typography>
          <Typography variant="body1">{description}</Typography>
        </Box>
        <Box flex="1">
        
          <img src={image} alt={text} style={{ maxWidth: '100%', width: `${imageheight * 1.78}px`, height: `${imageheight}px`, borderRadius: '8px' }} />
        </Box>
      </Box>
    </Container>
  )
}

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);


  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <Box sx={{ maxWidth: '200px'}}>
      <Slide {...slides[currentSlide]} />
      <DashedLines currentSlide={currentSlide} setCurrentSlide={setCurrentSlide}/>
    </Box>
  );
};

export default Slideshow;
