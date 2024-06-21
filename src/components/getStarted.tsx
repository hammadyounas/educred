import { Container, Box, Typography, Button } from '@mui/material';
import React from 'react';

export default function GetStarted() {
  return (
    <Container>
      <Box
        sx={{
          width: '100%',
          margin: 'auto',
          backgroundColor: '#00bdd6',
          padding: 5,
          marginTop: 10,
          borderRadius: 5,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom sx={{ color: 'white', textAlign: 'center', fontSize: {lg: '3rem', xs:'1.5rem'} }}>
          Getting started
        </Typography>
        <Box sx={{ marginTop: 3 }}>
          <Button
            variant="contained"
            sx={{
              color: 'white',
              bgcolor: '#8353E2',
              textTransform: 'capitalize',
              borderRadius: 23,
              paddingX: { lg: 8, xs: 4 },
            }}
          >
            Signup
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
