import React from 'react';
import { Box, Card, CardContent, Grid, Typography, Avatar, Chip } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const EducationCard: React.FC = () => {
  return (
    <Card sx={{ margin: 'auto', mt: 5, border: '1px solid #E0E0E0', borderRadius: 2 }}>
      <CardContent>
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', mb: 2 }}>
          Education
        </Typography>
        <Grid container alignItems="center" spacing={2}>
          <Grid item>
            <Avatar sx={{ bgcolor: '#F1F4FD', width: 56, height: 56 }}>
              <SchoolIcon sx={{ color: '#4069E5' }} />
            </Avatar>
          </Grid>
          <Grid item xs>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="h6" component="div">
                Case Western Reserve University
              </Typography>
              <Chip
                icon={<CheckCircleIcon sx={{ color: '#4069E5' }} />}
                label="Verified"
                sx={{ bgcolor: '#F1F4FD', color: '#4069E5', ml: 1, height: 'auto' }}
              />
            </Box>
            <Typography sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
              <SchoolIcon sx={{ color: '#4069E5', mr: 1 }} /> Master Degree in Computer Science
            </Typography>
            <Typography sx={{ display: 'flex', alignItems: 'center', mt: 1, color: 'text.secondary' }}>
              <CalendarTodayIcon sx={{ mr: 1 }} /> 2021-2024
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default EducationCard;
