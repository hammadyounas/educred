// AboutCard.tsx
import React from 'react';
import { Box, Grid, Typography, Chip, Stack, Container } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import { useNavigate } from "react-router-dom";

const AboutCard: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ padding: 2, border: '1px solid #e0e0e0', borderRadius: 2, height: '150px', cursor: 'pointer' }}
    onClick = {() => (navigate('/profile/create'))}>
      <Container >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Stack direction="row" alignItems="center" spacing={1} sx={{}}>
            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', paddingRight: '20px' }}>
              About
            </Typography>
            <Chip
              icon={<WorkIcon style={{ color: '#8353E2', fontSize :'1rem' }} />}
              label="Open to work"
              sx={{ backgroundColor: '#F5F2FD', color: '#8353E2', paddingLeft: '10px', paddingRight: '10px' }}
            />
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            Introduction
          </Typography>
        </Grid>
      </Grid>
      </Container>
    </Box>
  );
};

export default AboutCard;
