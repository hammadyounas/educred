import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  MenuItem, Select, IconButton
} from "@mui/material";
import { EmailOutlined } from "@mui/icons-material";
import { Facebook, Twitter, LinkedIn, YouTube } from '@mui/icons-material';

const footerStyle = {
  marginTop: "3rem",
  backgroundColor: "#fafafb",
  color: "#fff",
  padding: "20px 0",
  //   borderTop: '1px solid #ddd',
};

const logoStyle = {
  width: "50%", // Adjust as needed
  height: "auto",
};

const menuItemStyle = {
  cursor: "pointer",
  color: "black",
  fontSize: "0.8rem",
  "&:hover": {
    color: "#00bdd6", // Example hover color
  },
};

export default function Footer() {
  return (
    <Box style={footerStyle}>
      <Container maxWidth="lg">

        {/* newsletter */}
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          spacing={2}
          style={{ marginTop: "20px" }}
        >
          <Grid item xs={12} md={12}>
            <Typography
              variant="h6"
              style={{
                color: "black",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Subscribe to Newsletter
            </Typography>
          </Grid>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={2}
            style={{ marginBottom: "20px", marginTop: "10px" }}
          >
            <Grid item xs={11} sm={7} md={5}>
              <Box
                display="flex"
                sx={{
                  borderRadius: "25px",
                  backgroundColor: "#eaecef",
                  padding: "",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                {/* <EmailOutlined sx={{ marginRight: '8px', color: '#333' }} /> */}
                <TextField
                  id="outlined-basic"
                  // label="Input your email"
                  placeholder="Input your email"
                  variant="outlined"
                  fullWidth
                  size="small"
                  InputProps={{
                    style: {
                      fontSize: "0.8rem",
                      borderRadius: "25px", // Hide default border
                      paddingTop: "2px",
                      paddingBottom: "2px",
                      paddingLeft: "10px",
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
                  }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    height: "100%",
                    borderEndEndRadius: "20px",
                    borderTopRightRadius: "20px",
                    marginLeft: "-1px",
                    position: "absolute",
                    right: "0",
                    textTransform: "capitalize",
                  }}
                >
                  Subscribe
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        {/* log and menu items */}
        <Grid container alignItems="center" justifyContent="space-between">
          {/* Left side: Logo */}
          <Grid item xs={12} md={3}>
            <img src="/logo.png" alt="Logo" style={logoStyle} />
          </Grid>

          {/* Center: Menu items */}
          <Grid item xs={12} md={6}>
            <Grid container justifyContent="center" spacing={2}>
              <Grid item>
                <Typography variant="body1" style={menuItemStyle}>
                  About Us
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" style={menuItemStyle}>
                  Features
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" style={menuItemStyle}>
                  Contact Us
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" style={menuItemStyle}>
                  FAQs
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          {/* Right side: Additional links or social icons */}
          <Grid item xs={12} md={3}>
            {/* Add any additional content here */}
          </Grid>
        </Grid>

        {/* copyright */}
        <Grid container alignItems="center" justifyContent="space-between" px={4} style={{marginTop: '20px'}}>
        {/* Left side: Language dropdown and copyright text */}
        <Grid item xs={12} md={4} container alignItems="center" spacing={2}>
          {/* Language dropdown */}
          <Grid item>
            <Select
              value={'en'} // Default value for English
              variant="outlined"
              sx={{ color: 'black' }}
              style={{paddingLeft: '10px', paddingRight: '10px', borderRadius: '10px', fontSize: '0.8rem'}}
            >
              <MenuItem value={'en'}>English</MenuItem>
              {/* Add other language options as needed */}
            </Select>
          </Grid>

          {/* Copyright text */}
      </Grid>
      <Grid item xs={12} md={4} container alignItems="center" justifyContent="space-between" spacing={2}>
        <Typography variant="body2" sx={{ color: 'black' }}>
          © 2022 EduCred, Inc.
        </Typography>
        <Typography variant="body2" sx={{ color: 'black' }}>
          Privacy
        </Typography>
        <Typography variant="body2" sx={{ color: 'black' }}>
          Terms
        </Typography>
        <Typography variant="body2" sx={{ color: 'black' }}>
          Sitemap
        </Typography>
      </Grid>



        {/* Right side: Social media icons */}
        <Grid item xs={12} md={4} container justifyContent="flex-end" spacing={2}>
          <Grid item>
            <IconButton sx = {{color: "#e82e2e"}}>
              <YouTube />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton sx = {{color: "#2148a5"}}>
              <LinkedIn />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton sx = {{color: "#2e6fe8"}}>
              <Facebook />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton sx = {{color: "#2ebae8"}}>
              <Twitter />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      </Container>
    </Box>
  );
}
