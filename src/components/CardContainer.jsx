import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Cardimg1 from "../images/pcbimg5.jpg";
import Cardimg2 from "../images/pcimg3.jpg";
import Cardimg3 from "../images/pcbimg1.jpg";
import Cardimg4 from "../images/pcbimg4.jpg";

// import { styled, alpha } from "@mui/material/styles";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   card: {
//     display: 'flex',
//     flexDirection: 'column',
//     [theme.breakpoints.up('sm')]: {
//       flexDirection: 'row',
//       alignItems: 'center',
//     },
//   },
//   media: {
//     height: 140,
//     [theme.breakpoints.up('sm')]: {
//       width: 140,
//       height: 'auto',
//     },
//   },
// }));

// const CardContainer = () => {
// //   const classes = useStyles();
// let createdTheme = createTheme(useStyles as ThemeOptions);
// createdTheme = responsiveFontSizes(createdTheme)

//   return (
//     <ThemeProvider theme={createdTheme}>
//     <div className={classes.root}>
//       <Grid container spacing={2}>
//         <Grid item xs={12} sm={6} md={3}>
//           <Card className={classes.card}>
//             <CardMedia
//               className={classes.media}
//               image={Cardimg1}
//               title="Card Media"
//             />
//             <CardContent>
//               <p>Card Content</p>
//             </CardContent>
//           </Card>
//         </Grid>
//         <Grid item xs={12} sm={6} md={3}>
//           <Card className={classes.card}>
//             <CardMedia
//               className={classes.media}
//               image={Cardimg2}
//               title="Card Media"
//             />
//             <CardContent>
//               <p>Card Content</p>
//             </CardContent>
//           </Card>
//         </Grid>
//         <Grid item xs={12} sm={6} md={3}>
//           <Card className={classes.card}>
//             <CardMedia
//               className={classes.media}
//               image={Cardimg3}
//               title="Card Media"
//             />
//             <CardContent>
//               <p>Card Content</p>
//             </CardContent>
//           </Card>
//         </Grid>
//         <Grid item xs={12} sm={6} md={3}>
//           <Card className={classes.card}>
//             <CardMedia
//               className={classes.media}
//               image={Cardimg4}
//               title="Card Media"
//             />
//             <CardContent>
//               <p>Card Content</p>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>
//     </div>
//     </ThemeProvider>
//   );
// };

// export default CardContainer;

const styles = {
  root: {
    flexGrow: 1,
    marginBottom:40,
  },
  card: {
    display: "flex",
    flexDirection: "column",
  },
  media: {
    height: 220,
  },
};

const CardContainer = () => {
  return (
    <div style={styles.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Card style={styles.card}>
            <CardActionArea>
              <CardMedia
                style={styles.media}
                image={Cardimg1}
                title="Card Media"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to={"/products"}>
                <Button
                  variant="outlined"
                  endIcon={<ArrowForwardIosIcon sx={{ height: "15px" }} />}
                  sx={{
                    borderRadius: "26px",
                    height: "50px",
                    p: "5px 35px",
                    fontWeight: "bold",
                    marginBottom: "30px",
                    color: "black",
                    borderColor: "black",
                  }}
                >
                  VIEW PRODUCTS
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card style={styles.card}>
            <CardActionArea>
              <CardMedia
                style={styles.media}
                image={Cardimg2}
                title="Card Media"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to={"/products"}>
                <Button
                  variant="outlined"
                  endIcon={<ArrowForwardIosIcon sx={{ height: "15px" }} />}
                  sx={{
                    borderRadius: "26px",
                    height: "50px",
                    p: "5px 35px",
                    fontWeight: "bold",
                    marginBottom: "30px",
                    color: "black",
                    borderColor: "black",
                  }}
                >
                VIEW PRODUCTS
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card style={styles.card}>
            <CardActionArea>
              <CardMedia
                style={styles.media}
                image={Cardimg3}
                title="Card Media"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to={"/products"}>
                <Button
                  variant="outlined"
                  endIcon={<ArrowForwardIosIcon sx={{ height: "15px" }} />}
                  sx={{
                    borderRadius: "26px",
                    height: "50px",
                    p: "5px 35px",
                    fontWeight: "bold",
                    marginBottom: "30px",
                    color: "black",
                    borderColor: "black",
                  }}
                >
                  VIEW PRODUCTS
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card style={styles.card}>
            <CardActionArea>
              <CardMedia
                style={styles.media}
                image={Cardimg4}
                title="Card Media"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to={"/products"}>
                <Button
                  variant="outlined"
                  endIcon={<ArrowForwardIosIcon sx={{ height: "15px" }} />}
                  sx={{
                    borderRadius: "26px",
                    height: "50px",
                    p: "5px 35px",
                    fontWeight: "bold",
                    marginBottom: "30px",
                    color: "black",
                    borderColor: "black",
                  }}
                >
                  VIEW PRODUCTS
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default CardContainer;
