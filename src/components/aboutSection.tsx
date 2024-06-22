import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material'; // Importing Box and Grid from MUI for layout
import about from '../assets/images/about.png';
import aboutImage from '../assets/images/aboutImage.png'

export default function AboutSection() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: { xs: '2rem', lg: '4rem' }, paddingX: { xs: '2rem', lg: '4rem' } }}>
      <Grid container spacing={3}>
        {/* Left Side: Text Content */}
        <Grid item xs={12} md={5}>
          <Box sx={{ padding: '20px' }}>
            <Typography variant="body1" component="div" gutterBottom sx={{fontSize: { lg: '0.8rem', xs: '0.6rem' } }}>
            Dolore dolore voluptate aliqua ut mi
            </Typography>
            <Typography variant="h3" component="div" gutterBottom sx={{ fontWeight: 'bold' }}>
              About Us
            </Typography>
              <img src={about} alt="About Us Image" style={{ maxWidth: '40%', height: 'auto' }} />
            <Typography variant="body1" paragraph sx={{color: '#323842', fontSize: { lg: '1rem', xs: '0.8rem', paddingTop: '1rem' } }}>
            At EduCred, we believe in the power of verified credentials to unlock your future potential. Our mission is to create a secure, reliable, and user-friendly platform that bridges the gap between education and employment. With EduCred, students can seamlessly request their transcripts, have them verified by institutions, and generate verifiable digital credentials using advanced natural language processing and blockchain technology.
            </Typography>
            <Button variant="outlined" sx={{ color: '#00BDD6', bgcolor: 'white', textTransform: 'capitalize', borderRadius: 23, paddingX: {lg: 8, xs: 4}, marginTop: 3 }}>
              Signup
            </Button>
          </Box>

        </Grid>
        {/* Right Side: Image */}
        <Grid item xs={12} md={7}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={aboutImage} alt="About Us Image" style={{ width: '50%', height: 'auto' }} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
