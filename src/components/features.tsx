import React from "react";
import { Grid, Card, CardContent, Typography, Link, Box } from "@mui/material";

const Features = () => {
  return (
    <>
      <Box sx={{ padding: { xs: "2rem", lg: "4rem" } }}>
        <Typography
          variant="h3"
          component="div"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", paddingBottom: "1rem", color: '#323842' }}
        >
          Features
        </Typography>
        <Grid
          container
          spacing={3}
          justifyContent="center"
          alignItems="stretch"
        >
          <Grid item xs={12} sm={4} md={4}>
            <Card style={{ backgroundColor: "#c5d1f7", height: "200px" }}>
              <CardContent
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{ fontWeight: "bold", paddingBottom: "1rem", color: '#323842' }}
                  >
                    Request Transcripts
                    <Typography
                      variant="body2"
                      color = '#323842'
                      sx={{ paddingTop: "1rem" }}
                    >
                      Easily request your academic transcripts from institutions
                      and have them verified.
                    </Typography>
                  </Typography>
                  <Link
                    href="#"
                    underline="always"
                    style={{
                      alignSelf: "flex-start",
                      fontSize: "0.8rem",
                      paddingTop: "1rem",
                    }}
                  >
                    Try now
                  </Link>
                </div>
                <img
                  src="/request.png"
                  alt="example 5"
                  style={{
                    width: "20%",
                    display: "flex",
                    justifyContent: "flex-end",
                    alignSelf: "flex-end",
                  }}
                />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={8} md={8}>
            <Card style={{ backgroundColor: "#a6f5ff", height: "200px" }}>
              <CardContent
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{ fontWeight: "bold", color: '#323842' }}
                  >
                    Generate Credentials
                    <Typography
                      variant="body2"
                      color = '#323842'
                      sx={{ paddingTop: "1rem" }}
                    >
                      Use our advanced NLP models to generate skill-based
                      digital credentials from your transcripts.
                    </Typography>
                  </Typography>
                  <Link
                    href="#"
                    underline="always"
                    style={{
                      alignSelf: "flex-start",
                      fontSize: "0.8rem",
                      paddingTop: "1rem",
                    }}
                  >
                    Try now
                  </Link>
                </div>

                {/* Right side image */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src="/credentials.png"
                    alt="Jobs"
                    style={{ width: "90%", maxWidth: "150px" }}
                  />
                </div>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Card style={{ backgroundColor: "#f5cbcb", height: "200px" }}>
              <CardContent
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  height: "100%",
                }}
              >
                {/* Left side content */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{ fontWeight: "bold", color: '#323842' }}
                  >
                    Apply for Jobs
                    <Typography
                      variant="body2"
                      color = '#323842'
                      sx={{ paddingTop: "1rem" }}
                    >
                      Attach your verified credentials to job applications and
                      showcase your skills to potential employers.
                    </Typography>
                  </Typography>
                  <Link
                    href="#"
                    underline="always"
                    style={{
                      alignSelf: "flex-start",
                      fontSize: "0.8rem",
                      paddingTop: "1rem",
                    }}
                  >
                    Try now
                  </Link>
                </div>

                {/* Right side image */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src="/jobs.png"
                    alt="Jobs"
                    style={{ width: "90%", maxWidth: "150px" }}
                  />
                </div>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Card style={{ backgroundColor: "#f5f2fd", height: "200px" }}>
              <CardContent
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{ fontWeight: "bold", paddingBottom: "1rem", color: '#323842' }}
                  >
                    Credential Verification
                    <Typography
                      variant="body2"
                      color = '#323842'
                      sx={{ paddingTop: "1rem" }}
                    >
                      Employers can securely verify your credentials using
                      blockchain technology.
                    </Typography>
                  </Typography>
                  <Link
                    href="#"
                    underline="always"
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignSelf: "flex-start",
                      fontSize: "0.8rem",
                      paddingTop: "1rem",
                    }}
                  >
                    Try now
                  </Link>
                </div>
                <img
                  src="/verification.png"
                  alt="example 5"
                  style={{
                    width: "20%",
                    display: "flex",
                    justifyContent: "flex-end",
                    alignSelf: "flex-end",
                  }}
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Features;
