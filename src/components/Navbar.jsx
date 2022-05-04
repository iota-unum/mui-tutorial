import { AppBar, styled, Toolbar, Typography } from '@mui/material';
import React from 'react';
import PetsIcon from '@mui/icons-material/Pets';
const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});
const Navbar = () => {
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }}>
          LAMA DEV
        </Typography>
        <PetsIcon sx={{ display: { xs: 'block', sm: 'none' } }}></PetsIcon>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
