import React from "react";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

import { Box, Divider, Grid, Typography } from "@mui/material";
import "../../styles/FooterStyle.css";
const Footer = () => {
  return (
    <>
      {/* <Box
        sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: 2 }}
      >
        <Box sx={{my:1,"& svg":{
            fontSize:'40px',
            cursor:'pointer',
            mr:2,
        },
        "& svg:hover":{
            color:"goldenrod",
            transform:"translateY(5px)",
            transition:'all 400ms'
        },
        }}>
          <InstagramIcon />
          <TwitterIcon />
          <GitHubIcon />
          <YouTubeIcon />
        </Box>
        <Typography
          variant="h5"
          sx={{
            "@media(max-width:600px)": {
              fontSize: "1rem",
            },
          }}
        >
          {" "}
          All Rights Reserved &copy; Sagar Gupta{" "}
        </Typography>
        <ul className="footer-navigation">
        <li>
          <Link to={"/"}>HOME</Link>
        </li>
        <li>
          <Link to={"/about"}>ABOUT</Link>
        </li>
        <li>
          <Link to={"/contact"}>CONTACT</Link>
        </li>
        <li>
          <Link to={"/services"}>SERVICES</Link>
        </li>
        <li>
          <Link to={"/products"}>PRODUCTS</Link>
        </li>
        <li>
          <Link to={"/blogs"}>BLOGS</Link>
        </li>
      </ul>
      </Box> */}
      <Box >
<Grid container spacing={3}  sx={{bgcolor: "black",padding:'0px 20px',color:'white'}} >
  <Grid item xs={12} sm={6} md={6}>
    <Typography>
      <h4 className="footer_heading">LIGHT YEAR</h4>
      <Divider style={{backgroundColor:'rgb(170, 51, 106)'}}></Divider>
      <p className="footer_content">Lightyear is an all-in-one Electronics development platform for all kinds of business. Lightyear is not just about business, it's about a purpose; A purpose to make a positive impact on the world. Lightyear was founded by two dreamers and doers, who are always fascinated by the intricacy and beauty of human endeavour in general and technology in particular. We specialize in development of Flexible Electronics or also known as FlexTech/Flex circuits/FPCs.</p>
      </Typography>
  </Grid>
  <Grid item xs={12} sm={3} md={3}>
    <Typography>
      <h4 className="footer_heading">USEFUL LINKS</h4>
    <Divider style={{backgroundColor:'rgb(170, 51, 106)'}}></Divider>
      <p className="footer_content">
      <ul className="footer-navigation">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About Us</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
        </ul>
      </p>
      </Typography>
  </Grid>
  <Grid item xs={12} sm={3} md={3}>
    <Typography>
     <h4 className="footer_heading">CONTACT US</h4>
     <Divider style={{backgroundColor:'rgb(170, 51, 106)'}}></Divider>
     <p className="footer_content">1907, Rupeenagar,<br/>
Talawade, Pune: 411062<br/>
Phone: +91-8237346377<br/>
Email: sales.lightyear@gmail.com</p>
<Box
        sx={{ textAlign: "left", color: "white", pt: 2 }}
      >
        <Box sx={{my:1,"& svg":{
            fontSize:'35px',
            cursor:'pointer',
            mr:2,
        },
        "& svg:hover":{
            color:"goldenrod",
            transform:"translateY(5px)",
            transition:'all 400ms'
        },
        }}>
          <InstagramIcon />
          <TwitterIcon />
          <GitHubIcon />
          <YouTubeIcon />
        </Box>
        </Box>
      </Typography>
  </Grid>
</Grid>
</Box>

    </>
  );
};

export default Footer;
