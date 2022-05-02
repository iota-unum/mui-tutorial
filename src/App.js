import { Button, Container, Paper, Stack } from '@mui/material';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Container>
        <Paper sx={{padding:'4em', }} >
          <Stack spacing={2}>
            <input fullWidth placeholder='First Name' />
            <input fullWidth placeholder='First Name' />
            <input fullWidth placeholder='First Name' />
            <input fullWidth placeholder='First Name' />
          </Stack>
        </Paper>


      </Container>
        <Stack direction='row' spacing={2} justifyContent='center' mt={3}> 
        
        <Button variant='contained' borderRadius='50%' > Submit </Button>
        <Button variant='contained' color='secondary' > Submit </Button>
    
        </Stack>

      <h1>MUI Playground</h1>
    </div>
  );
}

export default App;