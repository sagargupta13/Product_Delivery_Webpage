import React from "react";

import {
  Typography,
  Box,
  TableContainer,
  Table,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import EmailIcon from '@mui/icons-material/Email';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import Layout from "../components/Layout";

const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my: 8, mx: 8, "& h4": { fontWeight: "bold", mb: 2 } }}>
        <Typography variant="h4"> Lorem, ipsum dolor. </Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          cupiditate dolore recusandae sed, sit nobis et molestiae deserunt ea
          laudantium velit doloribus neque laboriosam sapiente voluptatibus
          error? Accusamus tempore omnis architecto vel earum porro nisi amet
          nostrum ex alias incidunt exercitationem quas ab qui at, nulla sint,
          quis facere doloribus natus voluptas blanditiis officiis quibusdam!
          Minus quos nulla nisi aspernatur sint reiciendis quae, velit dolorem
          cum sit accusamus debitis autem dolorum hic enim ea recusandae
          consectetur? Corrupti corporis aut quasi minima in quod. Corrupti,
          fuga praesentium voluptatibus quo, velit deserunt cum debitis
          repellendus iste, animi libero quibusdam sed officia rerum!
        </p>
      </Box>
      <Box>
        <TableContainer component={Paper}>
          <Table aria-aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell>Contact Details</TableCell>
              </TableRow>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <SupportAgentIcon sx={{fontSize:"50px"}}/> 915689524565 (toll free)
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <EmailIcon sx={{fontSize:"50px"}}/>
                     915689524565 (toll free)
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <PermPhoneMsgIcon sx={{fontSize:"50px"}}/> 915689524565 (toll free)
                  </TableCell>
                </TableRow>
              </TableBody>
            </TableHead>
          </Table>
        </TableContainer>
      </Box>
      </Layout>
  );
};

export default Contact;
