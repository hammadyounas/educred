import React from "react";
import Features from "../components/features";
import BlogSection from "../components/blogSection";
import {
  Button,
  Container,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import GetStarted from "../components/getStarted";
import AboutSection from "../components/aboutSection";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const Home = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg")); // Check for large screens using 'lg' breakpoint

  return (
    <>
      <Header />
      <Container
        maxWidth="xl"
        style={{
          padding: 0,
          position: "relative",
          width: "100%",
          maxHeight: "90vh", // Adjusted to full height
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
            src="/container190.png"
            alt="example 1"
            style={{ width: "20%", marginBottom: "30px" }}
          />
          <img src="/image230.png" alt="example 2" style={{ width: "60%" }} />
          <img src="/image233.png" alt="example 2" style={{ width: "30%" }} />
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
              src="/bigLogo.png"
              alt="Logo"
              style={{ height: isLargeScreen ? 150 : 100 }}
            />{" "}
            {/* Adjust logo height based on screen size */}
            <Box
              component="img"
              src="/empowerText.png"
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
            src="/image234.png"
            alt="example 4"
            style={{ width: "30%", marginBottom: "10px" }}
          />
          <img
            src="/container189.png"
            alt="example 7"
            style={{ width: "15%", marginBottom: "10px" }}
          />
          <img src="/image235.png" alt="example 6" style={{ width: "70%" }} />
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
            src="/image236.png"
            alt="example 5"
            style={{ width: "10%", display: "flex", justifyContent: "center" }}
          />
          <img src="/image237.png" alt="example 3" style={{ width: "10%" }} />
        </Box>
      </Container>

      {/* About Section  */}
      <AboutSection />

      {/* Features Section */}
      <Features />

      {/* Blog Section */}
      <BlogSection />

      <GetStarted />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
