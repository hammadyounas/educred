import React from 'react';
import { Grid, Box, Typography, Card, CardContent } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import LockIcon from '@mui/icons-material/Lock';

const data = [
  { week: 'w1', views: 3 },
  { week: 'w2', views: 4 },
  { week: 'w3', views: 2 },
  { week: 'w4', views: 3 }
];

const AnalyticsCard: React.FC<{ title: string, value: number, description: string, Icon: React.ReactNode }> = ({ title, value, description, Icon }) => (
  <Card sx={{ height: '100%' }}>
    <CardContent>
      <Grid container alignItems="center" justifyContent="center" style={{ height: '100%' }}>
        <Grid item xs={2}>
          {Icon}
        </Grid>
        <Grid item xs={10}>
          <Typography variant="h6">{value}</Typography>
          <Typography variant="body2">{title}</Typography>
          <Typography variant="body2" color="textSecondary">{description}</Typography>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

const Analytics: React.FC = () => {
  return (
    <Box p={3}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography variant="h5" gutterBottom fontWeight={'bold'}>
            Analytics this month
          </Typography>
        </Grid>
        <Grid item>
          <Grid container alignItems="center">
            <LockIcon fontSize="small" style={{color: '#9095a0'}} />
            <Typography variant="body2" style={{ marginLeft: 4 , color: '#9095a0'}}>
              Private to you
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={3} style= {{ marginTop: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ height: '100%',  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <CardContent>
              <Typography variant="h6" fontWeight={'bold'} fontSize="1rem" paddingBottom={'10px'}>Profile views</Typography>
              <ResponsiveContainer width="100%" height={100}>
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="week" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="views" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* viewers */}
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ height: '100%', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <CardContent>
              <Grid container alignItems="center" spacing={1}>
                <Grid item xs={12}>
                  <img src="./viewers.png" alt="Analytics Icon" width="30" />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6" fontWeight={'bold'} fontSize={'1rem'}>200 viewers</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2" color="textSecondary">Amet eiusmod</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

      {/* impressions */}
      <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ height: '100%', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <CardContent>
              <Grid container alignItems="center" spacing={1}>
                <Grid item xs={12}>
                  <img src="./impressions.png" alt="Analytics Icon" width="30" />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6" fontWeight={'bold'} fontSize={'1rem'}>100 Impressions</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2" color="textSecondary">Amet eiusmod</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Searches */}
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ height: '100%', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <CardContent>
              <Grid container alignItems="center" spacing={1}>
                <Grid item xs={12}>
                  <img src="./searches.png" alt="Analytics Icon" width="30" />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6" fontWeight={'bold'} fontSize={'1rem'}>70 Searches</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2" color="textSecondary">Amet eiusmod</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Analytics;
