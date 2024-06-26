// ProfileCard.tsx
import React from 'react';
import { Avatar, Button, Chip, Grid, Typography, Box, InputBase, IconButton, Divider } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ContentCopy } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00bcd4',
    },
  },
  typography: {
    h6: {
      fontWeight: 700,
    },
  },
});

const ProfileCard: React.FC = () => {

  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: '100%',
          maxWidth: 360,
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: 3,
          overflow: 'hidden',
          position: 'relative',
          cursor: 'pointer',
        }}
        onClick = {() => (navigate('/profile/create'))}
      >
        <Box
          sx={{
            width: '100%',
            height: 120,
            backgroundImage: 'url("./profileCardBg.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Avatar
          alt="Jay Rutherford"
          src="./settingsAvatar.png"
          sx={{
            width: 120,
            height: 120,
            position: 'absolute',
            top: 60,
            left: '50%',
            transform: 'translateX(-50%)',
            border: '2px solid white',
          }}
        />
        <Box sx={{ mt: 8, mb: 6, textAlign: 'center', px: 2 }}>
        <Typography
                      variant="h6"
                      sx={{ fontWeight: "bold", color: "#00BDD6", cursor: 'pointer' }}
                      onClick = {() => (navigate('/settings'))}
                    >
                      Jay Rutherford
                    </Typography>
          <Typography variant="subtitle1">
                      Software Engineer
                    </Typography>
          <Typography
                      variant="body2"
                      textAlign={"center"}
                      sx={{ color: "#9095a0", marginTop: 1, cursor: 'pointer' }}
                      onClick = {() => (navigate('/settings'))}
                    >
                      Computer Science master student graduated from Case
                      Western Reserve University
                    </Typography>
          <Grid container spacing={1} justifyContent="center">
            <Grid item>
              <Chip label="Full Stack Development"  />
            </Grid>
            <Grid item>
              <Chip label="Web Design" />
            </Grid>
          </Grid>
          <Divider sx={{ my: 2 }} />
          <Box mt={2} p={1} bgcolor="#ffffff" width="100%">
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: "bold", marginLeft: "5px" }}
                      >
                        Profile link
                      </Typography>
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        sx={{ backgroundColor: "#f3f4f6", marginTop: 1 }}
                      >
                        <InputBase
                          value="https://www.educred.com"
                          readOnly
                          sx={{ flex: 1, paddingX: 1 }}
                        />
                        <IconButton sx={{color:"#4e5055"}} component="span">
                          <ContentCopy />
                        </IconButton>
                      </Box>
                    </Box>
          <Typography variant="body2" sx={{ fontWeight: 'bold', textAlign: 'left', paddingLeft: '5px', paddingTop: '10px' }}>
            Connect
          </Typography>
          <Grid container spacing={1} sx={{ mt: 1, marginLeft: '10px' }}>
          <Grid item sx={{ position: 'relative' }}>
        <Avatar src="./profileOne.png" sx={{ position: 'absolute', left: 0 }} />
        <Avatar src="./profileTwo.png" sx={{ position: 'absolute', left: '25px' }} />
        <Avatar src="./profileThree.png" sx={{ position: 'absolute', left: '50px' }} />
        <Avatar src="./profileFour.png" sx={{ position: 'absolute', left: '75px' }} />
        <Avatar sx={{ position: 'absolute', left: '100px' }}>
          <Typography variant="body2" style={{color: 'white'}}>50+</Typography>
        </Avatar>
      </Grid>
    </Grid>
          <Button
            variant="contained"
            startIcon={<EditOutlinedIcon />}
            sx={{ mt: 8, width: '100%', color: 'white', textTransform: 'capitalize' }}
            onClick = {() => (navigate('/profile/create'))}
          >
            Edit profile
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default ProfileCard;
