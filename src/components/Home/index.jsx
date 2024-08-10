import React from "react";
import { Box } from "@mui/material";
import Slideshow from "./SlideShow";
import ServiceForm from "./ServiceForm";
import { styled } from "@mui/system";
import Services from "./Services";

const Background = styled(Box)({
  backgroundImage: "url(/assets/background2.png)",
  backgroundSize: "cover",
  backgroundPosition: "fit",
  height: "90vh",
  display: "flex",
  // alignItems: "center",
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
      <Services />
    </Box>
  );
};
export default Home;
