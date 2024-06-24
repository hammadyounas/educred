import React from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  IconButton,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import blogimageone from "../assets/images/blogimageone.png";
// import blogimagetwo from "../assets/images/blogimagetwo.png";
// import blogimagethree from "../assets/images/blogimagethree.png";
import styled from "@emotion/styled";

const StyledIconButtonLeft = styled(IconButton)(({ theme }) => ({
  borderRadius: "50%", // Make the button round
  border: `1px solid #bcc1ca`, // Add a border with primary color
  width: "36px", // Adjust width to make sure it's large enough for the icon
  height: "36px", // Adjust height to make sure it's large enough for the icon
  padding: "8px", // Increase padding to center the icon
  // "&:hover": {
  //   backgroundColor: "transparent", // Remove background color on hover
  // },
  position: 'relative'
}));

const StyledIconButtonRight = styled(IconButton)(({ theme }) => ({
  borderRadius: "50%", // Make the button round
  border: `1px solid #0095a9`, // Add a border with primary color
  width: "36px", // Adjust width to make sure it's large enough for the icon
  height: "36px", // Adjust height to make sure it's large enough for the icon
  padding: "8px", // Increase padding to center the icon
  // "&:hover": {
  //   backgroundColor: "transparent", // Remove background color on hover
  // },
  position: 'relative'
}));

const BlogSection: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: "grey.100", paddingY: 7 }}>
      <Box sx={{ flexGrow: 1, position: "relative", width: "100%" }}>
        <Grid container justifyContent="flex-start">
          {/* Blog Heading Section */}
          <Grid item xs={12} sm={12} md={8} lg={4}>
            <Box sx={{ padding: 3, textAlign: "left", height: "100%" }}>
              <Typography variant="h4" gutterBottom>
                Blog
              </Typography>
              <Box sx={{ borderBottom: 1, borderColor: "grey.300", mb: 2 }} />
              <Typography variant="body1" gutterBottom>
                Laborum dolore aute et incididunt commodo consectetur eiusmod
                magna.
              </Typography>
              <Button
                variant="text"
                color="primary"
                sx={{ marginLeft: "0", fontSize: "0.8rem", paddingTop: "1rem" }}
              >
                View more
              </Button>
              <Box
                mt={2}
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "center",
                }}
              >
                {/* left arrow */}
                <StyledIconButtonLeft color="primary">
                  <ArrowBackIosIcon fontSize="small"
                    sx={{ color: "#bcc1ca", position: 'absolute', left: '30%', top: '50%', transform: 'translateY(-50%)', }}
                  />
                </StyledIconButtonLeft>

                {/* right arrow */}
                <StyledIconButtonRight color="primary" sx={{ marginLeft: '10px' }} >
                  <ArrowForwardIosIcon fontSize="small" style={{ position: 'absolute', left: '20%', top: '50%', transform: 'translateY(-50%)', }} />
                </StyledIconButtonRight>
              </Box>
            </Box>
          </Grid>

          {/* Blog Cards Section */}
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={8}
            sx={{ paddingX: { lg: "3rem", xs: "2rem" } }}
          >
            <Grid container spacing={3}>
              {/* Card 1 */}
              <Grid item xs={12} sm={6} md={4} sx={{}}>
                <Card sx={{ height: "100%", borderRadius: "1rem" }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="/blogimageone.png"
                      alt="Image 1"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        sx={{ color: "grey.600" }}
                      >
                        Subtitle
                      </Typography>
                      <Typography variant="h6">Blog title</Typography>
                      <Typography
                        variant="body2"
                        color="black"
                        sx={{ fontSize: "0.8rem" }}
                      >
                        Description about the product: quis nostrud exercitation
                        ullamco
                      </Typography>
                      <Box mt={2}>
                        <Button
                          size="small"
                          variant="contained"
                          sx={{
                            marginRight: 1,
                            backgroundColor: "#ebfdff",
                            color: "#00bdd6",
                            textTransform: "capitalize",
                            "&:hover": {
                              bgcolor: "#00BDD6",
                              color: "white", // Change background color to white on hover
                            },
                          }}
                        >
                          Label 1
                        </Button>
                        <Button
                          size="small"
                          variant="contained"
                          sx={{
                            backgroundColor: "#f6f2fd",
                            color: "#8353e2",
                            textTransform: "capitalize",
                            "&:hover": {
                              bgcolor: "#00BDD6",
                              color: "white", // Change background color to white on hover
                            },
                          }}
                        >
                          Label 2
                        </Button>
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              {/* Card 2 */}
              <Grid item xs={12} sm={6} md={4} sx={{}}>
                <Card sx={{ height: "100%", borderRadius: "1rem" }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="/blogimagetwo.png"
                      alt="Image 1"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        sx={{ color: "grey.600" }}
                      >
                        Subtitle
                      </Typography>
                      <Typography variant="h6">Blog title</Typography>
                      <Typography
                        variant="body2"
                        color="black"
                        sx={{ fontSize: "0.8rem" }}
                      >
                        Description about the product: quis nostrud exercitation
                        ullamco
                      </Typography>
                      <Box mt={2}>
                        <Button
                          size="small"
                          variant="contained"
                          sx={{
                            marginRight: 1,
                            backgroundColor: "#ebfdff",
                            color: "#00bdd6",
                            textTransform: "capitalize",
                            "&:hover": {
                              bgcolor: "#00BDD6",
                              color: "white", // Change background color to white on hover
                            },
                          }}
                        >
                          Label 1
                        </Button>
                        <Button
                          size="small"
                          variant="contained"
                          sx={{
                            backgroundColor: "#f6f2fd",
                            color: "#8353e2",
                            textTransform: "capitalize",
                            "&:hover": {
                              bgcolor: "#00BDD6",
                              color: "white", // Change background color to white on hover
                            },
                          }}
                        >
                          Label 2
                        </Button>
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              {/* Card 3 */}
              <Grid item xs={12} sm={6} md={4} sx={{}}>
                <Card sx={{ height: "100%", borderRadius: "1rem" }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="/blogimagethree.png"
                      alt="Image 1"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        sx={{ color: "grey.600" }}
                      >
                        Subtitle
                      </Typography>
                      <Typography variant="h6">Blog title</Typography>
                      <Typography
                        variant="body2"
                        color="black"
                        sx={{ fontSize: "0.8rem" }}
                      >
                        Description about the product: quis nostrud exercitation
                        ullamco
                      </Typography>
                      <Box mt={2}>
                        <Button
                          size="small"
                          variant="contained"
                          sx={{
                            marginRight: 1,
                            backgroundColor: "#ebfdff",
                            color: "#00bdd6",
                            textTransform: "capitalize",
                            "&:hover": {
                              bgcolor: "#00BDD6",
                              color: "white", // Change background color to white on hover
                            },
                          }}
                        >
                          Label 1
                        </Button>
                        <Button
                          size="small"
                          variant="contained"
                          sx={{
                            backgroundColor: "#f6f2fd",
                            color: "#8353e2",
                            textTransform: "capitalize",
                            "&:hover": {
                              bgcolor: "#00BDD6",
                              color: "white", // Change background color to white on hover
                            },
                          }}
                        >
                          Label 2
                        </Button>
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default BlogSection;
