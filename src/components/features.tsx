import React from 'react';
import { Grid, Card, CardContent, Typography, Link, Box } from '@mui/material';
import BlogSection from '../components/blogSection';

const Features = () => {
  return (
    <>
    <Box sx={{ padding: { xs: '2rem', lg: '4rem' } }}>
      <Typography variant="h3" component="div" align="center" gutterBottom>
        Features
      </Typography>
      <Grid container spacing={3} justifyContent="center" alignItems="stretch">
        <Grid item xs={12} sm={4} md={4}>
          <Card style={{ backgroundColor: '#E0E7FF', height: '200px' }}>
            <CardContent style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
              <div>
                <Typography variant="h5" component="div">
                  Request Transcripts
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Easily request your academic transcripts from institutions and have them verified.
                </Typography>
              </div>
              <Link href="#" underline="always" style={{ alignSelf: 'flex-start' }}>
                Try now
              </Link>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={8} md={8}>
          <Card style={{ backgroundColor: '#A7F3D0', height: '200px' }}>
            <CardContent style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
              <div>
                <Typography variant="h5" component="div">
                  Generate Credentials
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Use our advanced NLP models to generate skill-based digital credentials from your transcripts.
                </Typography>
              </div>
              <Link href="#" underline="always" style={{ alignSelf: 'flex-start' }}>
                Try now
              </Link>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <Card style={{ backgroundColor: '#FED7D7', height: '200px' }}>
            <CardContent style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
              <div>
                <Typography variant="h5" component="div">
                  Apply for Jobs
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Attach your verified credentials to job applications and showcase your skills to potential employers.
                </Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <Card style={{ backgroundColor: '#E9D8FD', height: '200px' }}>
            <CardContent style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
              <div>
                <Typography variant="h5" component="div">
                  Credential Verification
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Employers can securely verify your credentials using blockchain technology.
                </Typography>
              </div>
              <Link href="#" underline="always" style={{ alignSelf: 'flex-start' }}>
                Try now
              </Link>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
    </>
  );
};

export default Features;
