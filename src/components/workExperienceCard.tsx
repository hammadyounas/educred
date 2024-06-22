import React from 'react';
import { Card, CardContent, Typography, Grid, Avatar, Chip, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import WorkIcon from '@mui/icons-material/Work';
import BusinessIcon from '@mui/icons-material/Business';
import DateRangeIcon from '@mui/icons-material/DateRange';

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
            <Typography variant="h6" component="div">
              {role} {isWorking && <StyledChip label="Working" size="small" />}
            </Typography>
            <Box display="flex" alignItems="center" color="textSecondary">
              <WorkIcon fontSize="small" sx={{ marginRight: 1 }} />
              Fulltime
              <BusinessIcon fontSize="small" sx={{ marginLeft: 2, marginRight: 1 }} />
              {company}
              <DateRangeIcon fontSize="small" sx={{ marginLeft: 2, marginRight: 1 }} />
              {duration}
            </Box>
            <Box display="flex" alignItems="center">
              <Typography variant="body2" color="textSecondary">
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
