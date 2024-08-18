import React from "react";
import { Box } from "@mui/material";
import Slideshow from "./SlideShow";
import ServiceForm from "./ServiceForm";
import { styled } from "@mui/system";
import Services from "./Services";
import FAQ from '../common/FAQ'
import ServiceStatisficationStats from './ServiceStatisficationStats'

const Background = styled(Box)({
  backgroundImage: "url(/assets/images/background2.png)",
  backgroundSize: "cover",
  backgroundPosition: "fit",
  height: "90vh",
  display: "flex",
  justifyContent: "start",
  position: "relative",
  left: 0,
  right: 0,
});

const Home = () => {
  return (
    <Box>
      <Background>
        <Slideshow />
        <ServiceForm />
      </Background>
      <Box>
        <ServiceStatisficationStats />
      </Box>
      <Box sx={{ marginTop: '5px', marginBottom: '20px', backgroundColor: '#f5f3f3' }}>
        <Services />
      </Box>

      <FAQ />
    </Box>
  );
};
export default Home;
