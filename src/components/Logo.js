import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { pink } from '@mui/material/colors';
import { FaAirbnb } from "react-icons/fa";
import { flexCenter } from 'themes/commonStyle';

const Logo = () => {
  return (
    <Box sx= {flexCenter}>
        <FaAirbnb size={40} color={"#E91E63"}/>
        <Typography sx={{
            ml: 1,
            color: theme => theme.palette.secondary.main,
            fontSize: '20px',
            fontWeight: 'bold',
            textTransform: 'none',
        }} 
        component="h3">
            airbnb
        </Typography>
    </Box>
  )
}

export default Logo