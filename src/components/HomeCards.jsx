import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import img1 from "../images/jcb_1.jpg";
import Banner_img from "../images/jcb_header_img3.jpg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from 'react-router-dom';

export default function HomeCard() {
  return (
    <Card sx={{ maxWidth: "100%"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="220"
          image={img1}
          alt="gcb"
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link to={"/products"} >
      <Button  variant="outlined" endIcon={<ArrowForwardIosIcon sx={{height:'15px'}}/>} sx={{borderRadius:'26px',height:'50px',p:'5px 35px',fontWeight:'bold',marginBottom:'30px',color:'black',borderColor:'black'}}>
          VIEW MACHINES
        </Button>
        </Link>
      </CardActions>
    </Card>
  );
}



