import React from "react";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

import { Box, Typography } from "@mui/material";
import "../../styles/FooterStyle.css";
const Footer = () => {
  return (
    <>
      <Box
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
      </Box>
    </>
  );
};

export default Footer;
