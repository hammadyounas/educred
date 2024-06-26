import React from 'react';
import { Grid, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Theme } from '@mui/material/styles';
import ProfileCard from './profileCard';
import Analytics from './analytics';
import AboutCard from './aboutCard';
import SkillCard from './skillCard';
import EducationCard from './educationCard';
import WorkExperience from './workExperience';
import JobCard from './jobCard';
import ProfileFooter from './profileFooter';

const ProfileContainer = styled(Box)(({ theme }: { theme: Theme }) => ({
  padding: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1),
  },
}));

const AnalyticsBox = styled(Box)(({ theme }: { theme: Theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
  marginBottom: theme.spacing(3),
}));

const SkillBox = styled(Box)(({ theme }: { theme: Theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
  marginBottom: theme.spacing(3),
}));

const ExperienceBox = styled(Box)(({ theme }: { theme: Theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
  marginBottom: theme.spacing(3),
}));

const ProfilePage: React.FC = () => {
  return (
    <>
    <ProfileContainer>
      <Grid container spacing={3} sx={{paddingLeft: {md:'2rem'}, paddingRight: {md:'2rem'}, paddingTop: '2rem'}}>
        <Grid item xs={12} md={3}>
            <ProfileCard/>
            <Grid sx={{mt:6}}>
                <JobCard/>
            </Grid>
        </Grid>
        <Grid item xs={12} md={9}>
          <AnalyticsBox>
            <Analytics/>
          </AnalyticsBox>
          <Box mb={3}>
            <AboutCard/>
          </Box>
          <SkillBox>
            <SkillCard/>
          </SkillBox>
          <Box mb={3}>
            <EducationCard/>
          </Box>
          <ExperienceBox>
            <WorkExperience/>
          </ExperienceBox>
        </Grid>
      </Grid>
    </ProfileContainer>
    <ProfileFooter/>
    </>
  );
};

export default ProfilePage;
