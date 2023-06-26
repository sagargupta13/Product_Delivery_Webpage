import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "../styles/ImageSliderStyles.css";

const ImageSlider = () => {
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

  return (
    <Carousel
      showArrows={true}
      dots={true}
      slideNumber={false}
      showThumbs={false}
      autoPlay={true}
      interval={3000}
      infiniteLoop={true}
    >
      {images.map((image, index) => (
        <div key={index} className="carousel-slide">
          
          <img src={image.src} alt={`Image ${index + 1}`} />
          <div className="carousel-caption">
            <h2>{image.caption}</h2>
            <p>{image.description}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default ImageSlider;
