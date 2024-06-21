import React from "react";
import {
  Container,
  Box,
  Button,
  Typography,
  IconButton,
  Grid,
  CircularProgress,
} from "@mui/material";
import {
  Visibility,
  VisibilityOff,
  MailOutline,
  LockOutlined,
} from "@mui/icons-material";
import { useState } from "react";
import onboarding from "../assets/images/signup-banner.png";
import CustomTextField from "../components/common/Input";
import { Link, useNavigate } from "react-router-dom";

const SignUpWithEmail: React.FC = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const passwordRegex =
    /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])[a-zA-Z0-9!@#$%^&*()_+]{8,}$/;

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    setErrors({ email: "", password: "" });
    if (!email) {
      setErrors((prev) => {
        return { ...prev, email: "Email is required" };
      });
    }
    if (!password) {
      setErrors((prev) => {
        return { ...prev, password: "Password is required" };
      });
    }
    if (!passwordRegex.test(password) || !email || !password) {
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/login/email");
    }, 1500);
  };

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
            minHeight: "650px",
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
            Let's Get Started 🚀
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
            Sign up your account
          </Typography>
          {loading ? (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
              }}
            >
              <CircularProgress />
              <Typography
                sx={{
                  color: "#171A1F",
                  fontFamily: "Inter",
                  fontWeight: "400",
                  lineHeight: "22px",
                  fontSize: { xs: "14px" },
                  margin: "10px 0",
                }}
                variant="subtitle1"
              >
                Just one second...
              </Typography>
            </Box>
          ) : (
            <>
              <CustomTextField
                type="text"
                placeholder="What is your e-mail?"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                startIcon={
                  <MailOutline
                    sx={{
                      color: errors.email && !email ? "#DE3B40" : "#171A1F",
                    }}
                  />
                }
                error={
                  isSubmitted && errors.email && !email ? (
                    <Typography
                      sx={{
                        color: "#C12126",
                        fontFamily: "Inter",
                        fontWeight: "400",
                        lineHeight: "22px",
                        fontSize: { xs: "14px" },
                      }}
                      variant="subtitle1"
                    >
                      {errors.email}
                    </Typography>
                  ) : null
                }
              />
              <CustomTextField
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                startIcon={
                  <LockOutlined
                    sx={{
                      color:
                        (isSubmitted && !password && errors.password) ||
                        (isSubmitted &&
                          password &&
                          !passwordRegex.test(password))
                          ? "#DE3B40"
                          : "#171A1F",
                    }}
                  />
                }
                endIcon={
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {!showPassword ? (
                      <VisibilityOff
                        sx={{
                          color:
                            (isSubmitted && !password && errors.password) ||
                            (isSubmitted &&
                              password &&
                              !passwordRegex.test(password))
                              ? "#DE3B40"
                              : "#171A1F",
                        }}
                      />
                    ) : (
                      <Visibility
                        sx={{
                          color:
                            (isSubmitted && !password && errors.password) ||
                            (isSubmitted &&
                              password &&
                              !passwordRegex.test(password))
                              ? "#DE3B40"
                              : "#171A1F",
                        }}
                      />
                    )}
                  </IconButton>
                }
                error={
                  isSubmitted && !password && errors.password ? (
                    <Typography
                      sx={{
                        color: "#C12126",
                        fontFamily: "Inter",
                        fontWeight: "400",
                        lineHeight: "22px",
                        fontSize: { xs: "14px" },
                      }}
                      variant="subtitle1"
                    >
                      {errors.password}
                    </Typography>
                  ) : isSubmitted &&
                    password &&
                    !passwordRegex.test(password) ? (
                    <Typography
                      sx={{
                        color: "#9095A0",
                        fontFamily: "Inter",
                        fontWeight: "400",
                        lineHeight: "22px",
                        fontSize: { xs: "14px" },
                        margin: "10px 0",
                      }}
                      variant="subtitle1"
                    >
                      <span
                        style={{
                          color: "#C12126",
                          fontWeight: "700",
                          borderTop: "3px solid",
                        }}
                      >
                        Your password is weak.
                      </span>{" "}
                      Please choose a password that is at least{" "}
                      <span style={{ color: "#171A1F", fontWeight: "700" }}>
                        8 characters long (letters, numbers, and symbols)
                      </span>{" "}
                      to make it more secure.
                    </Typography>
                  ) : null
                }
                success={
                  isSubmitted &&
                  password &&
                  passwordRegex.test(password) && (
                    <Typography
                      sx={{
                        color: "#117B34",
                        fontFamily: "Inter",
                        fontWeight: "700",
                        lineHeight: "22px",
                        fontSize: { xs: "14px" },
                        margin: "10px 0",
                        borderTop: "3px solid",
                      }}
                      variant="subtitle1"
                    >
                      Great job! Your password is strong.
                    </Typography>
                  )
                }
              />
              <Button
                // type="submit"
                fullWidth
                onClick={() => handleSubmit()}
                variant="contained"
                color="primary"
                sx={{
                  fontFamily: "Inter",
                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: "26px",
                  mt: 3,
                  mb: 2,
                  backgroundColor: "#00BDD6",
                  "&:hover": { backgroundColor: "#009FB2" },
                  textTransform: "capitalize",
                  borderRadius: "8px",
                }}
              >
                Continue
              </Button>
              <Box mt={2} textAlign="center">
                <Typography
                  sx={{
                    color: "#9095A0",
                    fontFamily: "Inter",
                    fontWeight: "400",
                    lineHeight: "22px",
                    fontSize: { xs: "14px" },
                  }}
                  variant="subtitle1"
                >
                  By continuing you agree to our
                </Typography>
                <Typography
                  sx={{
                    color: "#9095A0",
                    mb: 3,
                    fontFamily: "Inter",
                    fontWeight: "400",
                    lineHeight: "22px",
                    fontSize: { xs: "14px" },
                  }}
                  variant="subtitle1"
                  gutterBottom
                >
                  <Link
                    to={"/"}
                    style={{
                      fontWeight: "bold",
                      color: "#171A1F",
                      textDecoration: "none",
                    }}
                  >
                    Terms & Conditions
                  </Link>{" "}
                  and{" "}
                  <Link
                    to={"/"}
                    style={{
                      fontWeight: "bold",
                      color: "#171A1F",
                      textDecoration: "none",
                    }}
                  >
                    Privacy Policy
                  </Link>
                </Typography>
              </Box>
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
                  Already have an account?{" "}
                  <Link
                    to={"/login"}
                    style={{
                      fontWeight: "bold",
                      color: "#00BDD6",
                      textDecoration: "none",
                    }}
                  >
                    Log in
                  </Link>
                </Typography>
              </Box>
            </>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default SignUpWithEmail;
