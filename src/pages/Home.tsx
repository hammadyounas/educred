import React from "react";
import Features from "../components/features";
import BlogSection from "../components/blogSection";
import logo from '../Assets/Images/logo1.png'
import textImage from '../Assets/Images/EmpowerText.png'
import { Button, Container, Box, Typography } from "@mui/material";
import image1 from '../Assets/Images/Image 230.png'
import image2 from '../Assets/Images/Image 233.png'
import image3 from '../Assets/Images/Image 234.png'
import image4 from '../Assets/Images/Image 235.png'
import image5 from '../Assets/Images/Image 236.png'
import image6 from '../Assets/Images/Image 237.png'
import image7 from '../Assets/Images/Container 189.png'
import image8 from '../Assets/Images/Container 190.png'


const Home = () => {
  return (
    <>
 <Container
        maxWidth="xl"
        style={{
          padding: 0,
          position: 'relative',
          width: '100%',
          height: '90vh',
          backgroundColor: '#99f3ff',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'auto 1fr auto',
          gap: '10px',
        }}
      >
        {/* Left Column Images */}
        <Box
          style={{
            gridRow: '1 / span 3',
            gridColumn: '1 / span 1',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <img src={image8} alt="Image 1" style={{ width: '20%', marginBottom: '30px' }} />
          <img src={image1} alt="Image 2" style={{ width: '60%' }} />
          <img src={image2} alt="Image 2" style={{ width: '30%' }} />
        </Box>

        {/* Center Content */}
        <Box
          style={{
            gridRow: '1 / span 3',
            gridColumn: '2 / span 1',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box sx={{ paddingTop: 5 }}>
            <img src={logo} alt="Logo" style={{ height: 150 }} />
            <img src={textImage} alt="Text" style={{ marginTop: 30 }} />
          </Box>
          <Box sx={{ marginTop: 3 }}>
            <Button variant="contained" sx={{ color: '#00BDD6', bgcolor: 'white', textTransform: 'capitalize', borderRadius: 23, paddingX: 8 }}>
              Signup
            </Button>
          </Box>
        </Box>

        {/* Right Column Images */}
        <Box
          style={{
            gridRow: '1 / span 3',
            gridColumn: '3 / span 1',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <img src={image4} alt="Image 4" style={{ width: '30%', marginBottom: '10px' }} />
          <img src={image7} alt="Image 7" style={{ width: '15%', marginBottom: '10px' }} />
          <img src={image6} alt="Image 6" style={{ width: '70%' }} />
        </Box>

        {/* Bottom Images */}
        <Box
          style={{
            gridRow: '3 / span 1',
            gridColumn: '1 / span 3',
            display: 'flex',
            justifyContent: 'space-between',
            gap: '10px',
          }}
        >
          <img src={image5} alt="Image 5" style={{ width: '10%', display: 'flex', justifyContent: 'center' }} />
          <img src={image3} alt="Image 3" style={{ width: '10%' }} />
        </Box>
      </Container>
      
    <div>
      <Features />
      <BlogSection />
    </div>
    </>
  );
};

export default Home;
