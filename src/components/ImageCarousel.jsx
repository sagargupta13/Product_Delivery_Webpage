import React, { useState, useEffect } from "react";
import { Box, Slide, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import img1 from "../images/jcb_1.jpg";
import Banner_img from "../images/jcb_header_img3.jpg";
import Banner_img1 from "../images/1672988441.jpg"

import "../styles/CarouselStyles.css";
const images = [
  {
    src: "../images/jcb_header_img2.jpg",
    caption: " AWARD WINNING ENGINE-TECHNOLOGY",
  },
  {
    src: "../images/jcb_header_img2.jpg",
    caption: "AWARD-WINNING POTHOLE PRO",
  },
  {
    src: "../images/jcb_1.jpg",
    caption: "THE NEW JCB 403-E ELECTRIC WHEEL LOADER",
  },
  {
    src: "../images/jcb_2.jpg",
    caption: "SUSTAIABLE SOLUTIONS",
  },
];

const ImageCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ width: "100%", height: "70vh", position: "relative" }}>
      {images.map((image, index) => (
        <Slide
          key={index}
          direction={index === activeIndex ? "left" : "right"}
          in={index === activeIndex}
          mountOnEnter
          unmountOnExit
          timeout={1000}
          style={{ position: "absolute" }}
        >
          <Box className="img_carousel">
            <img
              src={Banner_img1}
              alt={`Image ${index + 1}`}
              style={{ height: "70vh", width: "100%" }}
            />

            <Typography
              variant="h5"
              
           className="caption_box" >
              <div className="Caption_Container">
                <h1>{image.caption}</h1>
                <p>Lorem ipsum dolor </p>
                {/* <Link to={"/menu"}>
                  <button>Order Now</button>
                </Link> */}
              </div>
            </Typography>
          </Box>
        </Slide>
      ))}
    </Box>
  );
};

export default ImageCarousel;
