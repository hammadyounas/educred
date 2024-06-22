// Footer.tsx

import React from 'react';
import { Box, Grid, Typography, Button, TextField, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { Twitter, Facebook, LinkedIn, YouTube } from '@mui/icons-material';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer: React.FC = () => {
    const [language, setLanguage] = React.useState('English');

    // const handleLanguageChange = (event: SelectChangeEvent) => {
    // setLanguage(event.target.value);
  return (
    <Box sx={{ backgroundColor: '#171A1F', color: 'white', py: 4 }}>
      <Grid container spacing={2} justifyContent="space-between">
        <Grid item xs={12} md={3}>
          <Box sx={{ textAlign: 'center' }}>
            <img src="/path-to-logo.png" alt="EduCred" style={{ width: '150px' }} />
            <Typography variant="subtitle1">VERIFY YOUR SKILLS</Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={2}>
          <Typography variant="h6">Product</Typography>
          <Typography>Credential Center</Typography>
          <Typography>All Jobs</Typography>
          <Typography>Companies</Typography>
          <Typography>Candidates</Typography>
        </Grid>

        <Grid item xs={12} md={2}>
          <Typography variant="h6">Resources</Typography>
          <Typography>Blog</Typography>
          <Typography>User guides</Typography>
          <Typography>Webinars</Typography>
        </Grid>

        <Grid item xs={12} md={2}>
          <Typography variant="h6">Company</Typography>
          <Typography>About</Typography>
          <Typography>Join us</Typography>
        </Grid>

        <Grid item xs={12} md={3}>
          <Typography variant="h6" sx={{ color: '#00BDD6' }}>Subscribe to our newsletter</Typography>
          <Typography>For product announcements and exclusive insights</Typography>
          <Box sx={{ display: 'flex', mt: 1 }}>
            <TextField
              variant="outlined"
              placeholder="Input your email"
              size="small"
              sx={{ backgroundColor: 'white', borderRadius: '4px 0 0 4px', flexGrow: 1 }}
            />
            <Button
              variant="contained"
              sx={{ backgroundColor: '#00BDD6', borderRadius: '0 4px 4px 0' }}
            >
              Subscribe
            </Button>
          </Box>
        </Grid>

        <Grid item xs={12}>
        <Box sx={{ backgroundColor: '#171A1F', color: '#FFFFFF', py: 2 }}>
            <Grid container alignItems="center" justifyContent="space-between">
                <Grid item xs={12} md={6} lg={4}>
                <Select
                    value={language}
                    // onChange={handleLanguageChange}
                    variant="outlined"
                    fullWidth
                    sx={{
                    maxWidth: '120px',
                    ml: 3,
                    backgroundColor: '#1D1D1D',
                    color: '#FFFFFF',
                    '.MuiSelect-icon': {
                        color: '#FFFFFF',
                    },
                    }}
                >
                    <MenuItem value="English">English</MenuItem>
                    <MenuItem value="Spanish">Spanish</MenuItem>
                    <MenuItem value="French">French</MenuItem>
                    {/* Add more languages as needed */}
                </Select>
                </Grid>
                <Grid item xs={12} md={6} lg={4} container justifyContent="center">
                <Typography align="center">© 2024 EduCred, Inc. · Privacy · Terms · Sitemap</Typography>
                </Grid>
                <Grid item xs={12} lg={4} container justifyContent="flex-end">
                <TwitterIcon sx={{ color: '#FFFFFF', mx: 1 }} />
                <FacebookIcon sx={{ color: '#FFFFFF', mx: 1 }} />
                <LinkedInIcon sx={{ color: '#FFFFFF', mx: 1 }} />
                <YouTubeIcon sx={{ color: '#FFFFFF', mx: 1 }} />
                </Grid>
            </Grid>
            </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;