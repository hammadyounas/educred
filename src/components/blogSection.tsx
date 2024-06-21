import React from 'react';
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, Typography, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import blogimageone from '../Assets/Images/blogimageone.png';
import blogimagetwo from '../Assets/Images/blogimagetwo.png';
import blogimagethree from '../Assets/Images/blogimagethree.png';

const BlogSection: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 3, position: 'relative' }}>
      <Grid container spacing={3} justifyContent="flex-start">
        {/* Blog Cards */}
        <Grid item xs={12} sx={{ position: 'relative', left: '25%' }}>
          <Grid container spacing={3}>
            {/* Card 1 */}
            <Grid item sx={{ width: 250, height: 300 }}>
              <Card sx={{ height: '100%' }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={blogimageone}
                    alt="Image 1"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="subtitle1">
                      Subtitle
                    </Typography>
                    <Typography variant="h6">
                      Blog title
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Description about the product: quis nostrud exercitation ullamco
                    </Typography>
                    <Box mt={2}>
                      <Button size="small" variant="contained" color="primary" sx={{ marginRight: 1 }}>
                        Label 1
                      </Button>
                      <Button size="small" variant="contained" color="secondary">
                        Label 2
                      </Button>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            {/* Card 2 */}
            <Grid item sx={{ width: 250, height: 300 }}>
              <Card sx={{ height: '100%' }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={blogimagetwo}
                    alt="Image 2"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="subtitle1">
                      Subtitle
                    </Typography>
                    <Typography variant="h6">
                      Blog title
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Description about the product: quis nostrud exercitation ullamco
                    </Typography>
                    <Box mt={2}>
                      <Button size="small" variant="contained" color="primary" sx={{ marginRight: 1 }}>
                        Label 1
                      </Button>
                      <Button size="small" variant="contained" color="secondary">
                        Label 2
                      </Button>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            {/* Card 3 */}
            <Grid item sx={{ width: 250, height: 300 }}>
              <Card sx={{ height: '100%' }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={blogimagethree}
                    alt="Image 3"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="subtitle1">
                      Subtitle
                    </Typography>
                    <Typography variant="h6">
                      Blog title
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Description about the product: quis nostrud exercitation ullamco
                    </Typography>
                    <Box mt={2}>
                      <Button size="small" variant="contained" color="primary" sx={{ marginRight: 1 }}>
                        Label 1
                      </Button>
                      <Button size="small" variant="contained" color="secondary">
                        Label 2
                      </Button>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Grid>

        {/* Blog Heading */}
        <Grid item xs={12} sx={{ position: 'absolute', width: '100%', top: '50px', left: 0, zIndex: -1 }}>
          <Box sx={{ backgroundColor: 'grey.100', padding: 3, textAlign: 'left', width: '70%', borderRadius: 2, marginLeft: 0 }}>
            <Typography variant="h4" gutterBottom>
              Blog
            </Typography>
            <Box sx={{ borderBottom: 1, borderColor: 'grey.300', mb: 2 }} />
            <Typography variant="body1" gutterBottom>
              Laborum dolore aute et incididunt commodo consectetur eiusmod magna.
            </Typography>
            <Button variant="text" color="primary">
              View more
            </Button>
            <Box mt={2} sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <IconButton color="primary">
                <ArrowBackIosIcon />
              </IconButton>
              <IconButton color="primary">
                <ArrowForwardIosIcon />
              </IconButton>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BlogSection;
