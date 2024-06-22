import React, { useState } from 'react';
import { Tabs, Tab, Grid, Paper, Typography, Box } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import VerifiedIcon from '@mui/icons-material/Verified';
import WorkIcon from '@mui/icons-material/Work';
import { BookmarkAddOutlined, LanOutlined } from '@mui/icons-material';

const useStyles = {
  verified: {
    backgroundColor: '#F1F4FD',
    color: '#4069E5',
    padding: '4px 10px',
    borderRadius: '15px',
    display: 'flex',
    alignItems: 'center',
    marginLeft: '8px',
  },
  workExperience: {
    backgroundColor: '#F5F2FD',
    color: '#8353E2',
    padding: '4px 15px',
    borderRadius: '15px',
    display: 'flex',
    alignItems: 'center',
    marginLeft: '8px',
  },
  skillItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '14px',
    fontSize: '0.9rem'
  },
  icon: {
    color: '#00BDD6',
    marginRight: '8px',
    fontSize: '1.1rem'
  },
  tabsRoot: {
    minHeight: '48px',
  },
  tabRoot: {
    textTransform: 'none',
    minWidth: 0,
    minHeight: 0,
    padding: '0 16px',
    fontSize: '0.8rem',
    '&.Mui-selected': {
      fontSize: '14px',
      padding: '4px 20px',
      backgroundColor: '#00BDD6',
      color: '#FFFFFF',
      borderRadius: '15px',
    },
    // '&:hover': {
    //   color: '#00BDD6',
    // },
    // '&:focus': {
    //   color: '#00BDD6',
    // },
  },
};

const skills = [
  { name: 'Design Software', verified: true, workExperience: true },
  { name: 'Research', verified: true, workExperience: true },
  { name: 'User Experience', verified: true, workExperience: false },
  { name: 'User Interface Design', verified: true, workExperience: false },
];

const SkillCard: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <Paper elevation={0} style={{ padding: '16px', border: 'none', boxShadow: 'none' }}>
      <Typography variant="h6" style={{ fontWeight: 'bold', marginBottom: '1.5rem' }} gutterBottom>
        Skill
      </Typography>
      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        aria-label="skill tabs"
        TabIndicatorProps={{ style: { display: 'none' } }}
        sx={useStyles.tabsRoot}
      >
        <Tab label="All" sx={useStyles.tabRoot} />
        <Tab label="Industry Knowledge" sx={useStyles.tabRoot} />
        <Tab label="Tools & Technologies" sx={useStyles.tabRoot} />
      </Tabs>
      <Box mt={2}>
        <Grid container spacing={2}>
          {skills.map((skill, index) => (
            <Grid item xs={12} key={index} style={useStyles.skillItem}>
              <CheckCircleOutlineIcon style={useStyles.icon} />
              <Typography variant="body1">{skill.name}</Typography>
              {skill.verified && (
                <Box style={useStyles.verified}>
                  <BookmarkAddOutlined fontSize="small" />
                  <Typography variant="caption" style={{ marginLeft: '4px' }}>Verified</Typography>
                </Box>
              )}
              {skill.workExperience && (
                <Box style={useStyles.workExperience}>
                  <LanOutlined fontSize="small" />
                  <Typography variant="caption" style={{ marginLeft: '4px' }}>Work Experience</Typography>
                </Box>
              )}
            </Grid>
          ))}
        </Grid>
      </Box>
    </Paper>
  );
};

export default SkillCard;
