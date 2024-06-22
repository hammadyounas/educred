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
  <Card>
    <CardContent>
      <Grid container alignItems="center">
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
          <Typography variant="h5" gutterBottom>
            Analytics this month
          </Typography>
        </Grid>
        <Grid item>
          <Grid container alignItems="center">
            <LockIcon fontSize="small" />
            <Typography variant="body2" style={{ marginLeft: 4 }}>
              Private to you
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Profile views</Typography>
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
        <Grid item xs={12} sm={6} md={3}>
          <AnalyticsCard
            title="200 viewers"
            value={200}
            description="Amet eiusmod"
            Icon={<span role="img" aria-label="viewers">👥</span>}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <AnalyticsCard
            title="100 Impressions"
            value={100}
            description="Amet eiusmod"
            Icon={<span role="img" aria-label="impressions">⭐</span>}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <AnalyticsCard
            title="70 Searches"
            value={70}
            description="Amet eiusmod"
            Icon={<span role="img" aria-label="searches">🔍</span>}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Analytics;
