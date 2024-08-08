import React from "react";
import { Box } from "@mui/material";
import Slideshow from "./SlideShow";
import { styled } from "@mui/system";
import ServiceForm from "./ServiceForm";

const Background = styled(Box)({
  backgroundImage: "url(/assets/background.png)",
  backgroundSize: "cover",
  // backgroundPosition: "fit",
  height: "90vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
  position: "fixed",
  left: 0,
  right: 0,
});

const Home = () => {
  return (
    <Background>
      <Slideshow />
      <ServiceForm />
    </Background>
  );
};
export default Home;
