import { AppBar, InputBase, styled, Toolbar, Typography } from '@mui/material';
import React from 'react';
import PetsIcon from '@mui/icons-material/Pets';
const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const Search = styled('div')(({theme})=>({
backgroundColor: 'white', 
padding:' 0 1em',
borderRadius: theme.shape.borderRadius,
width: '40%'
}))
const Icons = styled('div')(({theme})=>({
backgroundColor: 'white', 
padding:'.5em',
}))
const Navbar = () => {
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }}>
          LAMA DEV
        </Typography>
        <PetsIcon sx={{ display: { xs: 'block', sm: 'none' } }}></PetsIcon>
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons></Icons>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
