import React from 'react';
import WorkExperienceCard from './workExperienceCard';
import { Container, Grid, Typography } from '@mui/material';

const WorkExperience: React.FC = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Working Experience
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <WorkExperienceCard
            role="Senior UX UI Designer"
            company="Bytedance"
            duration="Jan 2021 - Present · 1 yr 7 mos"
            description="Lorem ipsum dolor sit amet, consectetur elit. Diam, pellentesque dignissim eu vivamus donec erat."
            imageUrl="https://via.placeholder.com/60"
            isWorking={true}
          />
        </Grid>
        <Grid item xs={12}>
          <WorkExperienceCard
            role="Junior UX UI Designer"
            company="ConocoPhillips"
            duration="Aug 2018 - Nov 2020 · 2 yrs 4 mos"
            description="Lorem ipsum dolor sit amet, consectetur elit. Diam, pellentesque dignissim eu vivamus donec erat."
            imageUrl="https://via.placeholder.com/60"
          />
        </Grid>
        <Grid item xs={12}>
          <WorkExperienceCard
            role="UX UI Designer"
            company="Brex"
            duration="Jun 2017 - May 2018 · 1 yr"
            description="Lorem ipsum dolor sit amet, consectetur elit. Diam, pellentesque dignissim eu vivamus donec erat."
            imageUrl="https://via.placeholder.com/60"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default WorkExperience;
