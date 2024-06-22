import React from "react";
import Features from "../components/features";
import BlogSection from "../components/blogSection";
import logo from "../assets/images/logoOne.png";
import textImage from "../assets/images/EmpowerText.png";
import {
  Button,
  Container,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import image1 from "../assets/images/Image 230.png";
import image2 from "../assets/images/Image 233.png";
import image3 from "../assets/images/Image 234.png";
import image4 from "../assets/images/Image 235.png";
import image5 from "../assets/images/Image 236.png";
import image6 from "../assets/images/Image 237.png";
import image7 from "../assets/images/Container 189.png";
import image8 from "../assets/images/Container 190.png";
import GetStarted from "../components/getStarted";
import AboutSection from "../components/aboutSection";
import Header from "../components/common/Header";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg")); // Check for large screens using 'lg' breakpoint
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Container
        maxWidth="xl"
        style={{
          padding: 0,
          position: "relative",
          width: "100%",
          minHeight: "9s0vh", // Adjusted to full height
          backgroundColor: "#99f3ff",
          display: "grid",
          gridTemplateColumns: isLargeScreen ? "repeat(3, 1fr)" : "1fr", // Adjust grid columns based on screen size
          gridTemplateRows: "auto 1fr auto",
          gap: "10px",
        }}
      >
        {/* Left Column Images */}
        <Box
          style={{
            gridRow: isLargeScreen ? "1 / span 3" : "auto", // Span all rows on large screens, otherwise auto
            gridColumn: "1 / span 1",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <img
            src={image8}
            alt="Image 1"
            style={{ width: "20%", marginBottom: "30px" }}
          />
          <img src={image1} alt="Image 2" style={{ width: "60%" }} />
          <img src={image2} alt="Image 2" style={{ width: "30%" }} />
        </Box>

        {/* Center Content */}
        <Box
          style={{
            gridRow: isLargeScreen ? "1 / span 3" : "auto", // Span all rows on large screens, otherwise auto
            gridColumn: "2 / span 1",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ paddingTop: 5 }}>
            <img
              src={logo}
              alt="Logo"
              style={{ height: isLargeScreen ? 150 : 100 }}
            />{" "}
            {/* Adjust logo height based on screen size */}
            <Box
              component="img"
              src={textImage}
              alt="Text"
              sx={{ width: "100%", marginTop: "2" }}
            />
          </Box>
          <Box sx={{ marginTop: 3 }}>
            <Button
              variant="contained"
              sx={{
                color: "#00BDD6",
                bgcolor: "white",
                textTransform: "capitalize",
                borderRadius: 23,
                paddingX: { lg: 8, xs: 4 },
                "&:hover": {
                  bgcolor: "#00BDD6",
                  color: "white", // Change background color to white on hover
                },
              }}
            >
              Signup
            </Button>
          </Box>
        </Box>

        {/* Right Column Images */}
        <Box
          style={{
            gridRow: isLargeScreen ? "1 / span 3" : "auto", // Span all rows on large screens, otherwise auto
            gridColumn: "3 / span 1",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <img
            src={image4}
            alt="Image 4"
            style={{ width: "30%", marginBottom: "10px" }}
          />
          <img
            src={image7}
            alt="Image 7"
            style={{ width: "15%", marginBottom: "10px" }}
          />
          <img src={image6} alt="Image 6" style={{ width: "70%" }} />
        </Box>

        {/* Bottom Images */}
        <Box
          style={{
            gridRow: "3 / span 1",
            gridColumn: "1 / span 3",
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
          }}
        >
          <img
            src={image5}
            alt="Image 5"
            style={{ width: "10%", display: "flex", justifyContent: "center" }}
          />
          <img src={image3} alt="Image 3" style={{ width: "10%" }} />
        </Box>
      </Container>

      {/* About Section  */}
      <AboutSection />

      {/* Features Section */}
      <Features />

      {/* Blog Section */}
      <BlogSection />

      <GetStarted />
    </>
  );
};

export default Home;
