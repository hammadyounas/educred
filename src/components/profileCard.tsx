// ProfileCard.tsx
import React from 'react';
import { Avatar, Button, Chip, Grid, Typography, Link, Box, InputBase, IconButton, Paper, Divider } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
  const handleCopyLink = () => {
    navigator.clipboard.writeText('https://www.eudcred.com');
  };

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
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: 120,
            backgroundImage: 'url("https://via.placeholder.com/360x120")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Avatar
          alt="Jay Rutherford"
          src="https://via.placeholder.com/150"
          sx={{
            width: 100,
            height: 100,
            position: 'absolute',
            top: 60,
            left: '50%',
            transform: 'translateX(-50%)',
            border: '2px solid white',
          }}
        />
        <Box sx={{ mt: 8, mb: 6, textAlign: 'center', px: 2 }}>
          <Typography variant="h6" component="div">
            Jay Rutherford
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Software Engineer
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ my: 1 }}>
            Computer Science master student graduated from Case Western Reserve University
          </Typography>
          <Grid container spacing={1} justifyContent="center">
            <Grid item>
              <Chip label="Full Stack Development" />
            </Grid>
            <Grid item>
              <Chip label="Web Design" />
            </Grid>
          </Grid>
          <Divider sx={{ my: 2 }} />
          <Typography variant="body2" sx={{ fontWeight: 'bold', textAlign: 'left' }}>
            Profile link
          </Typography>
          <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', mt: 1, mb: 2 }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              value="https://www.eudcred.com"
              readOnly
            />
            <IconButton color="primary" sx={{ p: '10px' }} onClick={handleCopyLink}>
              <ContentCopyIcon />
            </IconButton>
          </Paper>
          <Typography variant="body2" sx={{ fontWeight: 'bold', textAlign: 'left' }}>
            Connect
          </Typography>
          <Grid container spacing={1} justifyContent="center" sx={{ mt: 1 }}>
            <Grid item>
              <Avatar src="https://via.placeholder.com/50" />
            </Grid>
            <Grid item>
              <Avatar src="https://via.placeholder.com/50" />
            </Grid>
            <Grid item>
              <Avatar src="https://via.placeholder.com/50" />
            </Grid>
            <Grid item>
              <Avatar src="https://via.placeholder.com/50" />
            </Grid>
            <Grid item>
              <Avatar>
                <Typography variant="body2">+50</Typography>
              </Avatar>
            </Grid>
          </Grid>
          <Button
            variant="contained"
            startIcon={<EditIcon />}
            sx={{ mt: 2, width: '100%' }}
          >
            Edit profile
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default ProfileCard;
