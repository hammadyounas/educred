import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';

const App: React.FC = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My React App
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to My React App
        </Typography>
      </Container>
    </div>
  );
};

export default App;