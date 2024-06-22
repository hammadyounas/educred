// AboutCard.tsx
import React from 'react';
import { Box, Grid, Typography, Chip, Stack } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';

const AboutCard: React.FC = () => {
  return (
    <Box sx={{ padding: 2, border: '1px solid #e0e0e0', borderRadius: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
              About
            </Typography>
            <Chip
              icon={<WorkIcon sx={{ color: '#8353E2' }} />}
              label="Open to work"
              sx={{ backgroundColor: '#F5F2FD', color: '#8353E2' }}
            />
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            Introduction
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutCard;
