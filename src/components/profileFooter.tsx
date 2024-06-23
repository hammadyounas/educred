// Footer.tsx

import React from 'react';
import { Box, Grid, Typography, Button, TextField, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { Twitter, Facebook, LinkedIn, YouTube, EmailOutlined } from '@mui/icons-material';
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
      <Grid container spacing={2} justifyContent="space-around">
        <Grid item xs={12} md={3}>
          <Box sx={{ textAlign: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
            <img src="./logo.png" alt="EduCred" style={{ width: '150px' }} />
            <Typography variant="subtitle1" style={{color: '#838485', fontSize: '0.7rem'}}>VERIFY YOUR SKILLS</Typography>
          </Box>
        </Grid>

        <Grid item xs={6} sm={3} md={2} sx={{ textAlign: { xs: 'center', sm: 'left' }, color: '#dee1e6', fontSize: '0.8rem' }}>
          <Typography variant="h6" style={{ color: '#dee1e6', fontSize: '1rem', fontWeight: 'bold', marginBottom: '20px' }}>Product</Typography>
          <Typography fontSize={'0.8rem'} marginBottom={"5px"}>Credential Center</Typography>
          <Typography fontSize={'0.8rem'} marginBottom={"5px"}>All Jobs</Typography>
          <Typography fontSize={'0.8rem'} marginBottom={"5px"}>Companies</Typography>
          <Typography fontSize={'0.8rem'} marginBottom={"5px"}>Candidates</Typography>
        </Grid>

        <Grid item xs={6} sm={3} md={2} sx={{ textAlign: { xs: 'center', sm: 'left' }, color: '#dee1e6', fontSize: '0.8rem' }}>
          <Typography variant="h6" style={{ color: '#dee1e6', fontSize: '1rem', fontWeight: 'bold', marginBottom: '20px' }}>Resources</Typography>
          <Typography fontSize={'0.8rem'} marginBottom={"5px"}>Blog</Typography>
          <Typography fontSize={'0.8rem'} marginBottom={"5px"}>User guides</Typography>
          <Typography fontSize={'0.8rem'} marginBottom={"5px"}>Webinars</Typography>
        </Grid>

        <Grid item xs={12} sm={3} md={2} sx={{ textAlign: { xs: 'center', sm: 'left' }, color: '#dee1e6', fontSize: '0.8rem' }}>
          <Typography variant="h6" style={{ color: '#dee1e6', fontSize: '1rem', fontWeight: 'bold', marginBottom: '20px' }}>Company</Typography>
          <Typography fontSize={'0.8rem'} marginBottom={"5px"}>About</Typography>
          <Typography fontSize={'0.8rem'} marginBottom={"5px"}>Join us</Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={3}>
          <Box sx={{ textAlign: 'center', alignItems: 'flex-start', display: 'flex', flexDirection: 'column' , marginLeft: {md: '0px', sm: '2rem', xs:'0.5rem'}  }}>
          <Typography variant="h6" sx={{ color: '#00BDD6' }}>Subscribe to our newsletter</Typography>
          <Typography fontSize={'0.8rem'}>For product announcements and exclusive insights</Typography>
          <Box sx={{ display: 'flex', mt: 1 }}>
          <TextField
        variant="outlined"
        placeholder="Input your email"
        size="small"
        InputProps={{
          sx: {
            color: 'white',
            borderRadius: '4px 0 0 4px',
            fontSize: '0.8rem',
          },
          startAdornment: (
            <Box
              component="span"
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#666",
              }}
            >
              <EmailOutlined sx={{ marginRight: "4px" }} />
            </Box>
          ),
          disableUnderline: true // Optional: Removes the default underline
        }}
        sx={{
          backgroundColor: '#1d1d1d',
          color: 'white',
          borderRadius: '4px 0 0 4px',
          flexGrow: 1
        }}
      />
            <Button
              variant="contained"
              sx={{ backgroundColor: '#00BDD6', borderRadius: '0 4px 4px 0', textTransform: 'capitalize' }}
            >
              Subscribe
            </Button>
          </Box>
          </Box>
        </Grid>

        <Grid item xs={12}>
        <Box sx={{ backgroundColor: '#171A1F', color: '#FFFFFF', py: 2 }}>
            <Grid container alignItems="center" justifyContent="space-around">
                <Grid item xs={12} md={6} lg={4}>
                <Select
                    value={language}
                    // onChange={handleLanguageChange}
                    variant="outlined"
                    fullWidth
                    sx={{
                    maxWidth: '150px',
                    ml: 3,
                    backgroundColor: '#1D1D1D',
                    paddingLeft: '1rem',
                    paddingRight: '1rem',
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
                <Grid item xs={12} md={6} lg={3} container justifyContent="space-around">
                <Typography align="center" fontSize={'0.9rem'} style={{color: '#dee1e6'}}>© 2024 EduCred, Inc.</Typography>
                <Typography variant="body2" sx={{ color: '#dee1e6' }}>
          Privacy
        </Typography>
        <Typography variant="body2" sx={{ color: '#dee1e6' }}>
          Terms
        </Typography>
        <Typography variant="body2" sx={{ color: '#dee1e6' }}>
          Sitemap
        </Typography>
                </Grid>
                <Grid item xs={12} lg={4} container justifyContent="flex-end">
                <TwitterIcon sx={{ color: '#2ebae8', mx: 1 }} />
                <FacebookIcon sx={{ color: '#2e6fe8', mx: 1 }} />
                <LinkedInIcon sx={{ color: '#2148a5', mx: 1 }} />
                <YouTubeIcon sx={{ color: '#e82e2e', mx: 1 }} />
                </Grid>
            </Grid>
            </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;