import React from 'react';
import { Card, CardContent, Grid, Typography, Button, Box } from '@mui/material';
// import Image from 'next/image';

// Replace with the correct path to the uploaded image
// const imageSrc = '/mnt/data/Screenshot 2024-06-22 at 6.56.31 PM.png';

const JobCard: React.FC = () => {
  return (
    <Grid >
      <Grid item>
        <Card sx={{ 
          backgroundColor: '#F5F2FD', 
          borderRadius: '8px', 
          textAlign: 'center', 
          padding: '20px', 
          width: '100%', 
          maxWidth: 360 
        }}>
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
              <img src='/jobCard.png' alt="Job search" width={200} height={200} style={{ maxWidth: '100%', height: 'auto' }} />
            </Box>
            <Typography variant="h6" sx={{ color: '#8353E2', fontWeight: 500, marginBottom: '20px', marginTop: '30px' }}>
              Looking for new job?
            </Typography>
            <Button 
              variant="contained" 
              sx={{ 
                backgroundColor: '#8353E2', 
                color: '#fff', 
                fontSize: '0.8rem',
                paddingLeft: '30px',
                paddingRight: '30px',
                textTransform: 'capitalize',
                '&:hover': { backgroundColor: '#6f3acb' } 
              }}
            >
              Start browsing
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default JobCard;
