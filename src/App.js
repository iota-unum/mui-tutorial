import { Button, Container, Paper, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import './App.css';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import Rightbar from './components/Rightbar';
import Sidebar from './components/Sidebar';
import MyButton from './styles/MyButton';

function App() {
  return (
    <div className='App'>
      <Box>
      <Navbar></Navbar>
        <Stack direction='row' spacing={2} justifyContent='space-between'>

      <Sidebar></Sidebar>
      <Feed></Feed>
      <Rightbar></Rightbar>
        </Stack>


      </Box>
    </div>
  );
}

export default App;
