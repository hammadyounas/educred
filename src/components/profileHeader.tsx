import React from 'react';
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  IconButton,
  Avatar,
  Grid,
  useMediaQuery,
  Theme,
} from '@mui/material';
import {
  MessageOutlined as MessageIcon,
  NotificationsOutlined as NotificationsIcon,
} from '@mui/icons-material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const StyledTab = styled(Tab)(({ theme }) => ({
  minWidth: 10,
  textTransform: 'capitalize',
  fontSize: '0.8rem',
    '&.Mui-selected': {
    color: '#00BDD6',
  },
}));

const ProfileHeader: React.FC = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);
  const matches = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#fff', color: '#000' }}>
      <Toolbar>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <img src="/logo.png" alt="Logo" style={{ marginRight: '20px', width: '20%' }} />
          </Grid>
          <Grid item xs>
            {matches ? (
              <Tabs value={selectedTab} onChange={handleChange} centered sx={{ textTransform: 'capitalize' }}>
                <StyledTab label="Home" />
                <StyledTab label="Credentials"  />
                <StyledTab label="All Jobs" />
                <StyledTab label="Companies" />
                <StyledTab label="People" />
                <StyledTab label="Career Advices" />
              </Tabs>
            ) : (
              <Tabs value={selectedTab} onChange={handleChange} sx={{ marginLeft: '-15rem', textTransform: 'capitalize' }}>
                <StyledTab label="Home" onClick={() => navigate('/profile')}/>
                <StyledTab label="Credentials" onClick={() => navigate('/credentials/create')}/>
                <StyledTab label="All Jobs" />
                <StyledTab label="Companies" />
                <StyledTab label="People" />
                <StyledTab label="Career Advices" />
              </Tabs>
            )}
          </Grid>
          <Grid item>
            <Grid container alignItems="center" spacing={1}>
              <Grid item>
                <IconButton>
                  <MessageIcon sx={{ color: '#c7cacf' }} />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton>
                  <NotificationsIcon sx={{ color: '#c7cacf' }} />
                </IconButton>
              </Grid>
              <Grid item>
                <Avatar alt="User" src="./settingsAvatar.png" onClick={() => navigate('/profile/create')}/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default ProfileHeader;
