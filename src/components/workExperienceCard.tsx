import React from 'react';
import { Card, CardContent, Typography, Grid, Avatar, Chip, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { BookmarkAddedOutlined, HomeOutlined } from '@mui/icons-material';

const StyledChip = styled(Chip)({
  color: '#8353E2',
  backgroundColor: '#F5F2FD',
  marginLeft: '8px',
});

const StyledTypography = styled(Typography)({
  color: '#00BDD6',
  cursor: 'pointer',
  marginLeft: '8px',
});

const StyledCard = styled(Card)({
  marginBottom: '16px',
  boxShadow: 'none',
  border: 'none',
});

interface WorkExperienceProps {
  role: string;
  company: string;
  duration: string;
  description: string;
  imageUrl: string;
  isWorking?: boolean;
}

const WorkExperienceCard: React.FC<WorkExperienceProps> = ({ role, company, duration, description, imageUrl, isWorking }) => {
  return (
    <StyledCard>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item>
            <Avatar src={imageUrl} sx={{ width: 60, height: 60 }} />
          </Grid>
          <Grid item xs>
            <Typography variant="h6" component="div" fontSize={'1rem'} fontWeight={'bold'}>
              {role} {isWorking && <StyledChip label="Working" size="small" />}
            </Typography>
            <Box display="flex" alignItems="center" style={{color:"#9095a0"}} fontSize="0.9rem">
              <BookmarkAddedOutlined fontSize="small" style={{ marginRight: '0.5rem', color : '#9095a0' }} />
              Fulltime
              <HomeOutlined fontSize="small" style={{ marginLeft: '2rem', marginRight: '0.5rem', color : '#9095a0' }} />
              {company}
              <DateRangeIcon fontSize="small" style={{ marginLeft: '2rem', marginRight: '0.5rem', color : '#9095a0' }} />
              {duration}
            </Box>
            <Box display="flex" alignItems="center" justifyContent={'space-between'} style={{ marginTop: '1rem' }}>
              <Typography variant="body2" style={{color:"#323842", fontSize:"0.8rem"}}>
                {description}
              </Typography>
              <StyledTypography variant="body2">
                See more
              </StyledTypography>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </StyledCard>
  );
};

export default WorkExperienceCard;
