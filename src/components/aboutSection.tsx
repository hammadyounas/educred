import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import WifiIcon from '@mui/icons-material/Wifi';
import ShareIcon from '@mui/icons-material/Share';
import { useNavigate } from "react-router-dom";

export default function AboutSection() {

  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: { xs: '2rem', lg: '4rem' }, paddingX: { xs: '2rem', lg: '4rem' }}}>
      <Grid container spacing={3}>
        {/* Left Side: Text Content */}
        <Grid item xs={12} md={5}>
          <Box sx={{ padding: '20px', position: 'relative' }}>
            <Typography variant="body1" component="div" gutterBottom sx={{ fontSize: { lg: '0.8rem', xs: '0.6rem' } }}>
              Dolore dolore voluptate aliqua ut mi
            </Typography>
            <Typography variant="h3" component="div" gutterBottom sx={{ fontWeight: 'bold' }}>
              About Us
            </Typography>
            <img src="/about.png" alt="About Us" style={{ maxWidth: '40%', height: 'auto' }} />
            <Typography variant="body1" paragraph sx={{ color: '#323842', fontSize: { lg: '1rem', xs: '0.8rem', paddingTop: '1rem' } }}>
              At EduCred, we believe in the power of verified credentials to unlock your future potential. Our mission is to create a secure, reliable, and user-friendly platform that bridges the gap between education and employment. With EduCred, students can seamlessly request their transcripts, have them verified by institutions, and generate verifiable digital credentials using advanced natural language processing and blockchain technology.
            </Typography>
            <Button variant="outlined" sx={{ color: '#00BDD6', bgcolor: 'white', textTransform: 'capitalize', borderRadius: 23, paddingX: { lg: 8, xs: 4 }, marginTop: 3, cursor: 'pointer' }}
            onClick={() => navigate("/signup")}>
              Signup
            </Button>
          </Box>
        </Grid>

        {/* Right Side: Image */}
        <Grid item xs={12} md={7}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', position: 'relative' }}>
            <img
              src='/aboutImage.png'
              alt="About Us"
              style={{
                width: '50%', // Default width
                height: 'auto', // Maintain aspect ratio
                maxWidth: '100%',
              }}
            />

            {/* educred list */}
            <Box sx={{ position: 'absolute', display: {sm: 'block', xs: 'none'}, top: '40%', left: '10%', textAlign: 'center', backgroundColor: 'white', width: {md: '20%', xs: '30%'}, paddingY: '15px', borderRadius: '10px',  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
              <img
                src='/eduCredText.png'
                alt="About Us"
                style={{
                  width: '50%', // Adjusted width for responsiveness
                  height: 'auto', // Maintain aspect ratio
                }}
              />
              <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '1rem', padding: '0.5rem' }}>
                <Button sx={{ display: 'flex', justifyContent: 'start', flexDirection: 'row', paddingY: '0.5rem', bgcolor: '#ebfdff', borderRadius: '5px' , marginBottom: '5px', cursor: 'pointer' }}>
                  <WifiIcon fontSize="small" sx={{ color: '#00bdd6',  paddingLeft: "5px" }} />
                  <Typography variant="body1" sx={{ paddingLeft: "12px", color: '#00bdd6', fontSize: '0.8rem' , textTransform: 'capitalize'}}>Verify</Typography>
                </Button>
                <Button sx={{ display: 'flex', flexDirection: 'row',  justifyContent: 'start', paddingY: '0.5rem', bgcolor: '#fef9ee', borderRadius: '5px' , marginBottom: '5px' , cursor: 'pointer' }}>
                  <img src='/connectIcon.png' alt='connect icon' style={{ color: '#98690c',  paddingLeft: "5px", }} />
                  <Typography variant="body1" sx={{ paddingLeft: "12px", color: '#98690c', fontSize: '0.8rem' , textTransform: 'capitalize'}}>Connect</Typography>
                </Button>
                <Button sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'start',  paddingY: '0.5rem' , bgcolor: '#f5f2fd', borderRadius: '5px', cursor: 'pointer'}}>
                  <ShareIcon fontSize="small" sx={{ color: '#8353e2',  paddingLeft: "5px" }} />
                  <Typography variant="body1" sx={{ paddingLeft: "12px", color: '#8353e2', fontSize: '0.8rem', textTransform: 'capitalize' }}>Share</Typography>
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
