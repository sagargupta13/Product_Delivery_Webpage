import React, { useState, useEffect } from "react";
import { Box, Slide, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import img1 from "../images/jcb_1.jpg";
import Banner_img from "../images/jcb_header_img3.jpg";
import Banner_img1 from "../images/1672988441.jpg"

import "../styles/CarouselStyles.css";
const images = [
  {
    src: 'https://img.freepik.com/free-photo/circuit-board-close-up-with-different-components_23-2149174327.jpg?w=996&t=st=1687632338~exp=1687632938~hmac=7bc344ee129d9210a1c79d5e7849056f6f36c07f22c99e338e3de47d43d7c83b',
    caption: 'Image 1',
    description: 'This is the description for Image 1.',
  },
  {
    src: 'https://img.freepik.com/free-photo/circuit-board-electronic-computer-hardware-technology-motherboard-digital-chip_627829-10700.jpg?w=996&t=st=1687635738~exp=1687636338~hmac=08d324b44b4f16f81c2217676318ffe425e718ea00707f4e24cb515036a24f30',
    caption: 'Image 2',
    description: 'This is the description for Image 2.',
  },
  {
    src: 'https://img.freepik.com/free-photo/complexity-computer-equipment-manufacturing-industry-generated-by-ai_188544-37309.jpg?t=st=1687635794~exp=1687636394~hmac=7c579a7a9ebc8a55310f6b8a4c840c41b1c007f9b8dbc72012eaaacd0a29652b&w=1060',
    caption: 'Image 3',
    description: 'This is the description for Image 3.',
  },
  {
    src: 'https://img.freepik.com/free-photo/futuristic-robotic-arm-controls-machinery-factory-generated-by-ai_188544-37299.jpg?t=st=1687635873~exp=1687636473~hmac=f9872891d88146f540eb6baf206809e018a398d2c48061f1981cd355444a34a9&w=1060',
    caption: 'Image 4',
    description: 'This is the description for Image 4.',
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
              src={image.src}
              alt={`Image ${index + 1}`}
              style={{ height: "70vh", width: "100%" }}
            />

            <Typography
              variant="h5"
              
           className="caption_box" >
              <div className="Caption_Container">
                <h1>{image.caption}</h1>
                <p> {image.description} </p>
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
