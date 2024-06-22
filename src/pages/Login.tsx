import React from "react";
import { Container, Box, Button, Typography, Grid } from "@mui/material";
import onboarding from '../assets/images/signupBanner.png';
import EmailIcon from "@mui/icons-material/Email";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import AppleIcon from "@mui/icons-material/Apple";
import { SvgIcon } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const AppleOutlinedIcon = () => (
  <SvgIcon>
    <AppleIcon
      style={{ color: "transparent", stroke: "#171A1F", strokeWidth: 1 }}
    />
  </SvgIcon>
);

const Login: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Grid
        container
        alignItems="center"
        style={{ minHeight: "100vh", marginTop: "20px" }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          <img src={onboarding} alt="EduCred Logo" />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          boxShadow={1}
          padding={5}
          borderRadius={"8px"}
          sx={{
            minHeight: "550px",
            display: "flex",
            flexDirection: "column",
            marginTop: { xs: "20px", md: "0px" },
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            sx={{
              mb: 0,
              fontFamily: "Epilogue",
              fontWeight: "700",
              lineHeight: "48px",
              fontSize: { xs: "32px" },
            }}
          >
            Welcome back 👋
          </Typography>
          <Typography
            sx={{
              color: "text.disabled",
              mb: 3,
              fontFamily: "Epilogue",
              fontWeight: "400",
              lineHeight: "30px",
              fontSize: { xs: "20px" },
            }}
            variant="subtitle1"
            gutterBottom
          >
            Log in your account
          </Typography>
          <Button
            variant="contained"
            startIcon={<EmailIcon />}
            style={{
              margin: "10px 0",
              width: "100%",
              backgroundColor: "#00BDD6",
              borderRadius: "8px",
              fontFamily: "Inter",
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "26px",
              color: "#FFFFFF",
              textTransform: "capitalize",
            }}
            onClick={() => navigate("/login/email")}
          >
            Log in with Email
          </Button>
          <Button
            variant="outlined"
            startIcon={<GoogleIcon style={{ color: "#DB4437" }} />}
            style={{
              margin: "10px 0",
              width: "100%",
              borderColor: "#DB4437",
              color: "#DB4437",
              borderRadius: "8px",
              fontFamily: "Inter",
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "26px",
              textTransform: "capitalize",
            }}
          >
            Log in with Google
          </Button>
          <Button
            variant="outlined"
            startIcon={<FacebookIcon style={{ color: "#4267B2" }} />}
            style={{
              margin: "10px 0",
              width: "100%",
              borderColor: "#4267B2",
              color: "#4267B2",
              borderRadius: "8px",
              fontFamily: "Inter",
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "26px",
              textTransform: "capitalize",
            }}
          >
            Log in with Facebook
          </Button>
          <Button
            variant="outlined"
            startIcon={<AppleOutlinedIcon />}
            style={{
              margin: "10px 0",
              width: "100%",
              borderColor: "#171A1F",
              color: "#171A1F",
              borderRadius: "8px",
              fontFamily: "Inter",
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "26px",
              textTransform: "capitalize",
            }}
          >
            Log in with Apple
          </Button>
          <Box
            component={"div"}
            style={{
              flex: 1,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                color: "#171A1F",
                fontFamily: "Inter",
                fontWeight: "400",
                lineHeight: "22px",
                fontSize: { xs: "14px" },
                textAlign: "center",
              }}
              variant="subtitle1"
            >
              Don't have an account?{" "}
              <Link
                to={"/signup"}
                style={{
                  fontWeight: "bold",
                  color: "#00BDD6",
                  textDecoration: "none",
                }}
              >
                Sign up
              </Link>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
