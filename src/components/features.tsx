import React from 'react';
import { Grid, Card, CardContent, Typography, Link, Box } from '@mui/material';
import request from '../Assets/Images/request.png';
import credentials from '../Assets/Images/credentials.png';
import jobs from '../Assets/Images/jobs.png';
import verfication from '../Assets/Images/verification.png';

const Features = () => {
  return (
    <>
    <Box sx={{ padding: { xs: '2rem', lg: '4rem' } }}>
      <Typography variant="h3" component="div" align="center" gutterBottom sx={{ fontWeight: 'bold', paddingBottom: '1rem' }}>
        Features
      </Typography>
      <Grid container spacing={3} justifyContent="center" alignItems="stretch">
        <Grid item xs={12} sm={4} md={4}>
          <Card style={{ backgroundColor: '#E0E7FF', height: '200px' }}>
            <CardContent style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', height: '100%' }}>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', paddingBottom: '1rem' }}>
                  Request Transcripts
                <Typography variant="body2" color="text.secondary" sx={{ paddingTop: '1rem' }}>
                  Easily request your academic transcripts from institutions and have them verified.
                </Typography>
                </Typography>
              <Link href="#" underline="always" style={{ alignSelf: 'flex-start', fontSize: '0.8rem', paddingTop: '1rem'  }}>
                Try now
              </Link>
              </div>
              <img src={request} alt="Image 5" style={{ width: '20%', display: 'flex', justifyContent: 'flex-end', alignSelf: 'flex-end' }} />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={8} md={8}>
          <Card style={{ backgroundColor: '#A7F3D0', height: '200px' }}>
            <CardContent style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', height: '100%' }}>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                  Generate Credentials
                <Typography variant="body2" color="text.secondary" sx={{ paddingTop: '1rem' }}>
                  Use our advanced NLP models to generate skill-based digital credentials from your transcripts.
                </Typography>
                </Typography>
              <Link href="#" underline="always" style={{ alignSelf: 'flex-start', fontSize: '0.8rem', paddingTop: '1rem' }}>
                Try now
              </Link>
              </div>
              
        {/* Right side image */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src={credentials} alt="Jobs Image" style={{ width: '90%', maxWidth: '150px' }} />
            </div>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <Card style={{ backgroundColor: '#FED7D7', height: '200px' }}>
          <CardContent style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', height: '100%' }}>
            {/* Left side content */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                Apply for Jobs
              <Typography variant="body2" color="text.secondary" sx={{paddingTop: '1rem' }}>
                Attach your verified credentials to job applications and showcase your skills to potential employers.
              </Typography>
              </Typography>
              <Link href="#" underline="always" style={{ alignSelf: 'flex-start', fontSize: '0.8rem', paddingTop: '1rem' }}>
                Try now
              </Link>
            </div>

            {/* Right side image */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src={jobs} alt="Jobs Image" style={{ width: '90%', maxWidth: '150px' }} />
            </div>
          </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <Card style={{ backgroundColor: '#E9D8FD', height: '200px' }}>
            <CardContent style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', height: '100%' }}>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', paddingBottom: '1rem' }}>
                  Credential Verification
                <Typography variant="body2" color="text.secondary" sx={{ paddingTop: '1rem' }}>
                  Employers can securely verify your credentials using blockchain technology.
                </Typography>
                </Typography>
              <Link href="#" underline="always" style={{  display: 'flex', justifyContent: 'flex-end', alignSelf: 'flex-start', fontSize: '0.8rem', paddingTop: '1rem' }}>
                Try now
              </Link>
              </div>
              <img src={verfication} alt="Image 5" style={{ width: '20%', display: 'flex', justifyContent: 'flex-end', alignSelf: 'flex-end' }} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
    </>
  );
};

export default Features;
