"use client";

import React from "react";
import Slider from "react-slick";
import { Box } from "@mui/material";

const Slideshow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <Box sx={{ width: "100%", maxWidth: "100%", margin: "0 auto" }}>
      <Slider {...settings}>
        <div>
          <img
            src="/slideshow/slides-1.webp"
            alt="Slide 1"
            style={{ width: "100%" }}
          />
        </div>
        <div>
          <img
            src="/slideshow/slides-2.webp"
            alt="Slide 2"
            style={{ width: "100%" }}
          />
        </div>
      </Slider>
    </Box>
  );
};

export default Slideshow;
