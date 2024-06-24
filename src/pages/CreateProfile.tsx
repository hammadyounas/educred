import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Header from "../components/common/Header";
import { Save } from "@mui/icons-material";
import GeneralInformation from "../components/pages/CreateProfile/GeneralInformation";
import About from "../components/pages/CreateProfile/About";
import WorkingExperience from "../components/pages/CreateProfile/WorkingExperience";
import Skills from "../components/pages/CreateProfile/Skills";
import Education from "../components/pages/CreateProfile/Education";
import { useNavigate } from "react-router-dom";
import ProfileHeader from "../components/profileHeader";

const CreateProfile = () => {
  const navigate = useNavigate();
  return (
    <>
      <ProfileHeader />
      <Container>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          my={4}
        >
          <Typography
            variant="h4"
            component="h1"
            sx={{
              mb: 0,
              fontFamily: "Inter",
              fontWeight: "700",
              lineHeight: "56px",
              fontSize: { xs: "30px", md: "40px" },
            }}
          >
            Edit profile
          </Typography>
          <Box>
            <Button
              variant="outlined"
              style={{
                borderRadius: "8px",
                fontFamily: "Inter",
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "22px",
                color: "#9095A0",
                textTransform: "capitalize",
                marginRight: "16px",
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              startIcon={<Save />}
              style={{
                backgroundColor: "#00BDD6",
                borderRadius: "8px",
                fontFamily: "Inter",
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "22px",
                color: "#FFFFFF",
                textTransform: "capitalize",
              }}
            >
              Save
            </Button>
          </Box>
        </Box>
        <Grid container>
          <Grid item xs={12} md={2}>
            <Box display="flex" flexDirection="column">
              <Typography
                variant="h4"
                component="h1"
                sx={{
                  mb: 1,
                  fontFamily: "Inter",
                  fontWeight: "700",
                  lineHeight: "22px",
                  fontSize: { xs: "14px" },
                  backgroundColor: "#C8F9FF",
                  padding: "12px",
                }}
              >
                General Information
              </Typography>
              <Typography
                variant="h4"
                component="h1"
                sx={{
                  mb: 1,
                  fontFamily: "Inter",
                  fontWeight: "400",
                  lineHeight: "22px",
                  fontSize: { xs: "14px" },
                  backgroundColor: "transparent",
                  padding: "12px",
                }}
              >
                About
              </Typography>
              <Typography
                variant="h4"
                component="h1"
                sx={{
                  mb: 1,
                  fontFamily: "Inter",
                  fontWeight: "400",
                  lineHeight: "22px",
                  fontSize: { xs: "14px" },
                  backgroundColor: "transparent",
                  padding: "12px",
                }}
              >
                Working Experiences
              </Typography>
              <Typography
                variant="h4"
                component="h1"
                sx={{
                  mb: 1,
                  fontFamily: "Inter",
                  fontWeight: "400",
                  lineHeight: "22px",
                  fontSize: { xs: "14px" },
                  backgroundColor: "transparent",
                  padding: "12px",
                }}
                onClick = {() => (navigate('/credentials/create'))}
              >
                Credential Skills
              </Typography>
              <Typography
                variant="h4"
                component="h1"
                sx={{
                  mb: 1,
                  fontFamily: "Inter",
                  fontWeight: "400",
                  lineHeight: "22px",
                  fontSize: { xs: "14px" },
                  backgroundColor: "transparent",
                  padding: "12px",
                }}
              >
                Education
              </Typography>
            </Box>
            <Box
              component="div"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              alignItems="center"
              height="360px"
              style={{
                backgroundColor: "#F5F2FD",
                padding: "20px",
                borderRadius: "8px",
                marginTop: "20px",
              }}
            >
              <img width={130} src="/createProfile.png" alt="create profile" />
              <Box display="flex" flexDirection="column" alignItems="center">
                <Typography
                  variant="h4"
                  component="h1"
                  sx={{
                    mb: 0,
                    fontFamily: "Inter",
                    fontWeight: "500",
                    lineHeight: "26px",
                    fontSize: { xs: "16px" },
                    textAlign: "center",
                    color: "#8353E2",
                  }}
                >
                  Tips to build an outstanding profile
                </Typography>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#8353E2",
                    borderRadius: "8px",
                    fontFamily: "Inter",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "22px",
                    color: "#FFFFFF",
                    textTransform: "capitalize",
                    marginTop: "15px",
                  }}
                >
                  Learn more
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={10}
            sx={{
              paddingLeft: { xs: 0, md: "48px" },
              marginTop: { xs: "16px", md: "0px" },
            }}
          >
            <GeneralInformation />
            <About />
            <WorkingExperience />
            <Skills />
            <Education />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default CreateProfile;
