import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import Home from './pages/LandingPage/Home';

const App: React.FC = () => {
  return (
    <div>
      <Home />
      {/* <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Educred
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar> */}
      <Container>
        {/* <Typography variant="h4" component="h1" gutterBottom>
          Welcome to My React App
        </Typography> */}
      </Container>
    </div>
  );
};

export default App;