import React from 'react';

import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import { pink } from '@mui/material/colors';
import { IoSearchCircleSharp } from 'react-icons/io5';

const choices = [
    {id: 1, text: 'Anywhere'},
    {id: 2, text: 'Any week'},
    {id: 3, text: 'Add guests', withIcon: true },
];

const LocationSearch = () => {
  return (
    <Paper sx = {{
        borderRadius: 20,
        ml: 15,
    }} elevation = {3} >
        <Stack sx={{
            borderRadius: 20,
            pl: 2,
        }} divider = { <Divider orientation= "vertical" flexItem />}>
            {
                choices.map(choice => {
                    return (
                        <Button key={choice.id}>
                            <Typography sx={{
                                color: theme => theme.palette.text.primary,
                                fontWeight: 'bold',
                            }}>
                                {choice.text}
                            </Typography>
                            {
                                choice.withIcon && (
                                    <Box sx={{
                                        ml:1,
                                        mt: 1,
                                        mr: 1
                                    }}>
                                        <IoSearchCircleSharp color = {"#E91E63"} size= {"32px"} />
                                    </Box>
                                )
                            }
                        </Button>
                    );
                })
            }
        </Stack>
    </Paper>
  );
};

export default LocationSearch;