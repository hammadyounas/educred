import React from 'react';
import { Box, Card, CardContent, Grid, Typography, Avatar, Chip, Container } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { BookmarkAddOutlined, SchoolOutlined } from '@mui/icons-material';

const EducationCard: React.FC = () => {
  return (
    <Card sx={{ margin: 'auto', mt: 5, border: '1px solid #E0E0E0', borderRadius: 2 }}>
      <Container >
      <CardContent>
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', mb: 2 }}>
          Education
        </Typography>
        <Grid container alignItems="center" spacing={2}>
          <Grid item>
            <Avatar sx={{ bgcolor: '#fff', width: 56, height: 56 }}>
              <img src="./education.png" alt="Case Western Reserve University" style={{ maxWidth: '100%', height: 'auto' }} />
            </Avatar>
          </Grid>
          <Grid item xs>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="h6" component="div" fontSize={'1rem'} fontWeight={'bold'}>
                Case Western Reserve University
              </Typography>
              <Chip
                icon={<BookmarkAddOutlined style={{ color: '#4069E5' }} />}
                label="Verified"
                sx={{ backgroundColor: '#F1F4FD',
                  color: '#4069E5',
                  padding: '3px 8px',
                  borderRadius: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  marginLeft: '10px', }}
              />
            </Box>
            <Typography sx={{ display: 'flex', alignItems: 'center', mt: 1, fontSize: '0.9rem' , color: '#9590a0' }}>
              <SchoolOutlined sx={{ color: '#9590a0', mr: 1, fontSize: '1.1rem' }} /> Master Degree in Computer Science
            </Typography>
            <Typography sx={{ display: 'flex', alignItems: 'center', mt: 1, color: '#9590a0', fontSize: '0.8rem' }}>
              <CalendarTodayIcon sx={{ mr: 1 , fontSize: '0.9rem' , color: '#9590a0'}} /> 2021-2024
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Container>
    </Card>
  );
};

export default EducationCard;
