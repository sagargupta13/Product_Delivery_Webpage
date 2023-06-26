import React from 'react'
import Layout from '../components/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Layout>
    <Box
    sx={{
     
      my:10,
      textAlign:'center',
      p:5,
      "& h4":{
        fontWeight:"bold",
        my:2,
        fontSize:"2rem"
      },
      "& p":{
        textAlign:'justify',
      },
      "@media (max-width:600px)":{
        mt:0,
        "& h4":{
          fontSize:"1.5rem"
        }
      },
      "@media(max-width: 320px)":{
        "& h4":{
          fontSize:"1.3rem"
        }
      }
    }}>
      <Typography variant='h4'>
      Lightyear is an all-in-one Electronics development platform for all kinds of business.
      </Typography>
      <p>Lightyear is not just about business, it’s about a purpose; A purpose to make a positive impact on the world. Lightyear was founded by two dreamers and doers, who are always fascinated by the intricacy and beauty of human endeavour in general and technology in particular. We specialize in development of Flexible Electronics or also known as FlexTech/Flex circuits/FPCs.</p>
      <br/>
      <p>
      We love to design, create and produce cutting edge products for people and businesses who believe in us. We can develop and deliver electronic systems for various substrates like PEEK, Silicon, Polymide, Metal foils etc. We strive to keep our work unique and smart, with room for a little magic.
      </p>
      <br/>
      <p>You can find us anywhere, and if the project is the right fit, we’d love to work with you or make new friends.</p>
    </Box>
    </Layout>
  )
}

export default About