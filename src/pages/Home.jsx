import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { Link } from "react-router-dom";
import Banner_img from "../images/jcb_header_img3.jpg";

import "../styles/HomeStyles.css";
import Layout from "../components/Layout";
import ImageCarousel from "../components/ImageCarousel";
import { Box, Button, Container, Typography } from "@mui/material";
import HomeCard from "../components/HomeCards";
import CardContainer from "../components/CardContainer";



const Home = () => {
  return (
    <Layout>
      <div>
        <ImageCarousel />
      </div>
      <Box sx={{p:'20px 20px'}}>
        <Typography className="typo_1">
          <h3>403E WHEEL LOADER</h3>
          <h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            dolorum quisquam libero, .
          </h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            voluptatem assumenda quisquam itaque consectetur laudantium,
            deleniti nulla tenetur obcaecati quo consequatur incidunt autem
            earum adipisci sed. Id tempora quia eum vero dolorum modi veritatis?
            Nobis esse fuga ullam, doloremque dolorem rerum odio eveniet animi.
            Asperiores nihil reiciendis repudiandae vero repellendus!
          </p>
          <Link to={"/about"} >
        <Button  variant="contained" endIcon={<ArrowForwardIosIcon sx={{height:'15px'}}/>} sx={{borderRadius:'26px', backgroundColor:'black',height:'55px',p:'5px 35px',fontWeight:'bold',marginBottom:'30px'}}>
          BROCHURE DOWNLOAD
        </Button>
        </Link>
        </Typography>
        </Box>
        <Box  sx={{width:'100%',
    backgroundColor:'lightgrey',
    
    
  }}>
       <Typography variant="h5" sx={{padding:'20px 20px',fontFamily:" 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"}}> Product Specifications</Typography>
        <Box 
        sx={{width:'100%',
    display: 'grid',
    gap: 2,
    gridTemplateColumns: 'repeat(2, 1fr)',backgroundColor:'lightgrey',padding:'20px 20px',
   
  }}
> 
   <Typography className="product_specs">
    <p>Payload</p>
    <h4> 640 kg</h4>
   </Typography>
   <Typography className="product_specs">
    <p>Shovel Capacity</p>
    <h4> 0.5 m^3</h4>
   </Typography>
   <Typography className="product_specs">
    <p>Max. Engine Power</p>
    <h4> 20 kW</h4>
   </Typography>
   <Typography className="product_specs">
    <p>Full Turn Tipping Load</p>
    <h4> 1,237 kg</h4>
   </Typography>
   <Typography className="product_specs">
    <p>Operating Weight</p>
    <h4> 2,729 kg</h4>
   </Typography>
   <Typography className="product_specs">
    <p>Power Type</p>
    <h4>Electric</h4>
   </Typography>
    </Box>
    </Box>
    <br/>
    <br/>
    {/* <HomeCard/> */}
    <br/>
    <br/>
    <CardContainer/>
    
    
      
      {/* <div className="home" style={{backgroundImage:`url(${Banner_img})`}}>
      
        <div className="headerContainer">
          <h1>Lorem, ipsum.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur 
      
          </p>
          <Link to={"/products"} >
           
            <button>
              Order Now
            </button>
            
          </Link>
        </div>
      </div> */}
    </Layout>
  );
};

export default Home;
