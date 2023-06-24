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
      p:2,
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
        Lorem ipsum dolor sit.
      </Typography>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quam, ipsam doloremque expedita temporibus suscipit ad natus quis. Repudiandae voluptatum fugit iste ipsam est ab! Dignissimos atque animi quibusdam esse asperiores, inventore voluptatibus dolores ad perferendis natus quidem fugit deleniti porro minus voluptates ut nihil! Dolorum libero eos esse atque porro, fuga maiores necessitatibus impedit odio veniam dignissimos debitis aliquam magnam incidunt harum, odit, expedita assumenda deleniti nulla officia! Incidunt saepe et, quam autem excepturi corporis! Corrupti, harum amet? Vel quibusdam odit ipsum necessitatibus doloribus. Iste nostrum et quod? Beatae optio nihil soluta? Veniam asperiores laborum, vel qui in ea.</p>
      <br/>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum necessitatibus impedit veritatis provident ipsa voluptatem! Impedit, distinctio sunt repellat fugiat nostrum inventore blanditiis voluptatibus! Quae repellat saepe, iure voluptate qui officiis et dolores expedita excepturi tempore nemo provident voluptates cupiditate? Commodi laudantium dignissimos tempore sequi praesentium quas est asperiores voluptatem facere? Doloribus corporis accusamus necessitatibus, perspiciatis ipsa error suscipit nostrum nam eum sed ducimus maxime eaque in quaerat illo cumque dolorum pariatur animi. Corrupti provident id iusto vero veritatis voluptas numquam officiis natus, consequuntur minus voluptates hic non deleniti dolores dolorum itaque earum dolor quod commodi ab. Totam, velit alias?
      </p>
    </Box>
    </Layout>
  )
}

export default About