import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import {
  AppBar,
  Typography,
  Box,
  Toolbar,
  IconButton,
  Drawer,
  Divider,
  InputBase,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import "../../styles/HeaderStyles.css";
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  // handle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  // function to open drawer menu
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"rgb(170, 51, 106)"}
        variant="h6"
        component={"div"}
        sx={{
          flexGrow: 1,
          my: 2,
          backgroundColor: "white",
          fontWeight: "bold",
        }}
      >
        LIGHTYEAR
      </Typography>
      <Divider />

      <ul className="mobile-navigation">
        <li>
          <Link to={"/"}>HOME</Link>
        </li>
        <Divider />
        <li>
          <Link to={"/about"}>ABOUT</Link>
        </li>
        <Divider />
        <li>
          <Link to={"/contact"}>CONTACT</Link>
        </li>
        <Divider />
        <li>
          <Link to={"/services"}>SERVICES</Link>
        </li>
        <Divider />
        <li>
          <Link to={"/products"}>PRODUCTS</Link>
        </li>
        <Divider />
        <li>
          <Link to={"/blogs"}>BLOGS</Link>
        </li>
        <Divider />
      </ul>
    </Box>
  );

  //   function for search bar
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "black",
    fontWeight: "bold",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "grey" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: "none" } }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={"rgb(170, 51, 106)"}
              variant="h6"
              component={"div"}
              sx={{
                flexGrow: 1,
                fontWeight: "bold",
                display: { xs: "none", sm: "block" },
              }}
            >
              LIGHTYEAR
            </Typography>

            <Box sx={{ "@media (max-width:900px)":{
        display:'none'
      } }}>
              <ul className="navigation-menu">
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
            <Search>
              <SearchIconWrapper>
                <SearchIcon sx={{ color: "black" }} />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="SEARCH"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Toolbar>
        </AppBar>
        <Box component={"nav"}>
          <Drawer
            variant="temporay"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
                "@media (max-width:900px)":{
                    display:'block'},
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Toolbar />
      </Box>
    </>
  );
};

export default Header;
