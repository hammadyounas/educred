import React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  Container,
  Grid,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  Typography,
} from "@mui/material";
import {
  Add,
  Edit,
  PhoneOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import ProfileHeader from "../components/profileHeader";

const createData = (
  id: string,
  skill: string,
  channel: string,
  group: string,
  status: string,
  date: string
) => {
  return { id, skill, channel, group, status, date };
};

const rows = [
  createData(
    "#1139",
    "Software Engineer",
    "Transcripts",
    "CWRU",
    "New",
    "Jul 21"
  ),
  createData(
    "#1104",
    "Data Privacy Algorithms",
    "Transcripts",
    "CWRU",
    "Reviewing",
    "Jul 21"
  ),
  createData(
    "#996",
    "Database Management",
    "Transcripts",
    "CWRU",
    "Verified",
    "Apr 07"
  ),
  createData(
    "#996",
    "Game Development",
    "Transcripts",
    "CWRU",
    "Verified",
    "Feb 22"
  ),
  createData("#996", "Python", "Transcripts", "CWRU", "Verified", "Oct 21"),
  createData("#996", "SQL", "Transcripts", "CWRU", "Verified", "Oct 21"),
];

const Credentials = () => {
  const [value, setValue] = React.useState("one");
  const navigate = useNavigate();

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <>
      <ProfileHeader />
      <Container maxWidth="xl">
        <Grid container my={8} spacing={2}>
          <Grid item xs={12} lg={4}>
            <Box
              display="flex"
              flexDirection="column"
              boxShadow={1}
              px={2}
              py={4}
            >
              <Box display="flex" alignItems="center">
                <img src="/avatar.png" alt="profile" />
                <Typography
                  variant="h4"
                  component="h1"
                  sx={{
                    mb: 0,
                    fontFamily: "Epilogue",
                    fontWeight: "400",
                    lineHeight: "36px",
                    fontSize: { xs: "20px", md: "24px" },
                    marginLeft: "16px",
                  }}
                >
                  Jay Rutherford
                </Typography>
              </Box>
              <Box>
                <ButtonGroup
                  variant="contained"
                  aria-label="Basic button group"
                  style={{ margin: "16px 0" }}
                >
                  <Button
                    style={{ color: "#00BDD6", border: "1px solid #00BDD6" }}
                    variant="outlined"
                    startIcon={<Edit />}
                    onClick={() => navigate('/profile/create')}
                  >
                    Edit Profile
                  </Button>
                  <Button
                    style={{
                      backgroundColor: "#00BDD6",
                      border: "1px solid #00BDD6",
                    }}
                    onClick={() => navigate('/credentials/list')}
                    startIcon={<Add />}
                  >
                    New Credentials
                  </Button>
                </ButtonGroup>
              </Box>
              <Box
                borderTop={1}
                borderBottom={1}
                borderColor={"#DEE1E6"}
                py={3}
              >
                <Box display="flex">
                  <Typography
                    variant="h4"
                    component="h1"
                    sx={{
                      mb: 0,
                      fontFamily: "Inter",
                      fontWeight: "500",
                      lineHeight: "22px",
                      fontSize: { xs: "14px" },
                      color:'#bfc3c8' 
                    }}
                  >
                    @
                  </Typography>
                  <Typography
                    variant="h4"
                    component="h1"
                    sx={{
                      mb: 0,
                      fontFamily: "Inter",
                      fontWeight: "500",
                      lineHeight: "22px",
                      fontSize: { xs: "14px" },
                      marginLeft: "16px",
                    }}
                  >
                    johnh88@educred.com
                  </Typography>
                </Box>
                <Box display="flex" my={2}>
                  <PhoneOutlined style={{ fontSize: "14px", color:'#bfc3c8' }} />
                  <Typography
                    variant="h4"
                    component="h1"
                    sx={{
                      mb: 0,
                      fontFamily: "Inter",
                      fontWeight: "500",
                      lineHeight: "22px",
                      fontSize: { xs: "14px" },
                      marginLeft: "16px",
                    }}
                  >
                    (719) 810-9073
                  </Typography>
                </Box>
                <Box display="flex">
                  <img src='/addressIcon.png' alt='Address' style={{ fontSize: "14px" }} />
                  <Typography
                    variant="h4"
                    component="h1"
                    sx={{
                      mb: 0,
                      fontFamily: "Inter",
                      fontWeight: "500",
                      lineHeight: "22px",
                      fontSize: { xs: "14px" },
                      marginLeft: "16px",
                    }}
                  >
                    Case Western Reserve University
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" flexDirection="column">
                <Typography
                  variant="h4"
                  component="h1"
                  sx={{
                    mb: 0,
                    fontFamily: "Epilogue",
                    fontWeight: "400",
                    lineHeight: "22px",
                    fontSize: { xs: "14px" },
                    color: "#323842",
                    marginBottom: "16px",
                  }}
                >
                  Request HISTORY
                </Typography>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  border={2}
                  borderColor={"#DEE1E6"}
                  padding={1}
                  borderRadius={1}
                >
                  <Box display="flex" alignItems="center">
                    <img
                    src='/skillIcon.png' alt='skill icon'
                      style={{
                        background: "#F1F4FD",
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        padding: "10px",
                      }}
                    />
                    <Box display="flex" flexDirection="column" ml={2} onClick={() => navigate('/credentials/list')} style={{cursor: 'pointer'}}>
                      <Typography
                        variant="h4"
                        component="h1"
                        sx={{
                          mb: 0,
                          fontFamily: "Inter",
                          fontWeight: "500",
                          lineHeight: "22px",
                          fontSize: { xs: "14px" },
                          color: "#323842",
                          cursor: 'pointer'
                        }}
                        
                      >
                        Data Science Skills
                      </Typography>
                      <Typography
                        variant="h4"
                        component="h1"
                        sx={{
                          mb: 0,
                          fontFamily: "Inter",
                          fontWeight: "400",
                          lineHeight: "20px",
                          fontSize: { xs: "12px" },
                          color: "#9095A0",
                        }}
                      >
                        IRequest date: May 29, 2022
                      </Typography>
                    </Box>
                  </Box>
                  <Button
                    style={{
                      borderRadius: "20px",
                      backgroundColor: "#EBFDFF",
                      color: "#00BDD6",
                      textTransform: "capitalize",
                    }}
                  >
                    · Pending ·
                  </Button>
                </Box>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  border={2}
                  borderColor={"#DEE1E6"}
                  padding={1}
                  borderRadius={1}
                  mt={1}
                >
                  <Box display="flex" alignItems="center">
                    <img src='/transcriptIcon.png' alt='transcript icon'
                      style={{
                        background: "#FDF2F2",
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        padding: "10px",
                      }}
                    />
                    <Box display="flex" flexDirection="column" ml={2} onClick={() => navigate('/credentials/list')} style={{cursor: 'pointer'}}>
                      <Typography
                        variant="h4"
                        component="h1"
                        sx={{
                          mb: 0,
                          fontFamily: "Inter",
                          fontWeight: "500",
                          lineHeight: "22px",
                          fontSize: { xs: "14px" },
                          color: "#323842",
                          cursor: 'pointer'
                        }}
                      >
                        Master Degree Transcripts
                      </Typography>
                      <Typography
                        variant="h4"
                        component="h1"
                        sx={{
                          mb: 0,
                          fontFamily: "Inter",
                          fontWeight: "400",
                          lineHeight: "20px",
                          fontSize: { xs: "12px" },
                          color: "#9095A0",
                        }}
                      >
                        Request date: Feb 13, 2022
                      </Typography>
                    </Box>
                  </Box>
                  <Button
                    style={{
                      borderRadius: "20px",
                      backgroundColor: "#EEFDF3",
                      color: "#117B34",
                      textTransform: "capitalize",
                    }}
                  >
                    · Success ·
                  </Button>
                </Box>
              </Box>
              <Button
                style={{
                  alignSelf: "flex-end",
                  marginTop: "16px",
                  fontFamily: "Inter",
                  fontWeight: "400",
                  fontSize: "14px",
                  color: "#379AE6",
                  textTransform: "capitalize",
                }}
                variant="text"
                onClick={() => navigate('/credentials/list')}
              >
                See all
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} lg={8}>
            <Box
              my={3}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Tabs
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
                sx={{
                  "& .MuiTabs-indicator": {
                    backgroundColor: "#171A1F", // Custom indicator color for selected tab
                  },
                  "& .MuiTab-root": {
                    textTransform: "capitalize", // Capitalize text
                    fontFamily: "Inter", // Set font family
                    fontWeight: "400", // Set font weight
                    fontSize: "14px", // Set font size
                    color: "#565E6C", // Default text color for not selected
                    "&.Mui-selected": {
                      color: "#171A1F", // Text color for selected tab
                      fontWeight: "700",
                    },
                  },
                }}
              >
                <Tab value="one" label="Transcripts" />
                <Tab value="two" label="Skills Credentials (12)" />
                <Tab  onClick={() => navigate("/credentials/list")} value="three" label="Pending Credentials" />
              </Tabs>
              <img src='/filter.png' alt="filter" style={{ cursor: 'pointer', padding: '10px', backgroundColor: '#eaecef', borderRadius: '5px'}} />
              {/* <FilterAltOutlined /> */}
            </Box>
            <TableContainer>
              <Table aria-label="custom table">
                <TableHead>
                  <TableRow>
                    <TableCell padding="checkbox">
                      <Checkbox />
                    </TableCell>
                    <TableCell
                      sx={{
                        fontFamily: "Epilogue",
                        fontWeight: "600",
                        fontSize: "14px",
                        color: "#171A1F",
                      }}
                    >
                      ID
                    </TableCell>
                    <TableCell
                      sx={{
                        fontFamily: "Epilogue",
                        fontWeight: "600",
                        fontSize: "14px",
                        color: "#171A1F",
                      }}
                    >
                      Skill Credentials
                    </TableCell>
                    <TableCell
                      sx={{
                        fontFamily: "Epilogue",
                        fontWeight: "600",
                        fontSize: "14px",
                        color: "#171A1F",
                      }}
                    >
                      Channel
                    </TableCell>
                    <TableCell
                      sx={{
                        fontFamily: "Epilogue",
                        fontWeight: "600",
                        fontSize: "14px",
                        color: "#171A1F",
                      }}
                    >
                      Group
                    </TableCell>
                    <TableCell
                      sx={{
                        fontFamily: "Epilogue",
                        fontWeight: "600",
                        fontSize: "14px",
                        color: "#171A1F",
                      }}
                    >
                      Status
                    </TableCell>
                    <TableCell
                      sx={{
                        fontFamily: "Epilogue",
                        fontWeight: "600",
                        fontSize: "14px",
                        color: "#171A1F",
                      }}
                    >
                      Date
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell padding="checkbox">
                        <Checkbox />
                      </TableCell>
                      <TableCell
                        sx={{
                          fontFamily: "Inter",
                          fontWeight: "400",
                          fontSize: "14px",
                          color: "#171A1F",
                        }}
                        component="th"
                        scope="row"
                      >
                        <Button
                          style={{
                            borderRadius: "20px",
                            backgroundColor:
                              row.status === "New"
                                ? "#DE3B40"
                                : row.status === "Reviewing"
                                ? "#EFB034"
                                : "#1DD75B",
                            color:
                              row.status === "New"
                                ? "#FFFFFF"
                                : row.status === "Reviewing"
                                ? "#5D4108"
                                : "#0A4D20",
                            textTransform: "capitalize",
                            marginRight: "8px",
                            fontFamily: "Inter",
                            fontWeight: "400",
                            fontSize: "11px",
                          }}
                        >
                          {row.status === "New"
                            ? "Open"
                            : row.status === "Reviewing"
                            ? "Pend"
                            : "Verified"}
                        </Button>
                        {row.id}
                      </TableCell>
                      <TableCell
                        sx={{
                          fontFamily: "Epilogue",
                          fontWeight: "600",
                          fontSize: "14px",
                          color: "#171A1F",
                        }}
                      >
                        {row.skill}
                      </TableCell>
                      <TableCell
                        sx={{
                          fontFamily: "Inter",
                          fontWeight: "400",
                          fontSize: "14px",
                          color: "#171A1F",
                        }}
                      >
                        {row.channel}
                      </TableCell>
                      <TableCell
                        sx={{
                          fontFamily: "Inter",
                          fontWeight: "400",
                          fontSize: "14px",
                          color: "#171A1F",
                        }}
                      >
                        {row.group}
                      </TableCell>
                      <TableCell
                        sx={{
                          fontFamily: "Inter",
                          fontWeight: "400",
                          fontSize: "14px",
                          color: "#171A1F",
                        }}
                      >
                        {row.status}
                      </TableCell>
                      <TableCell
                        sx={{
                          fontFamily: "Inter",
                          fontWeight: "400",
                          fontSize: "14px",
                          color: "#171A1F",
                        }}
                      >
                        {row.date}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Credentials;
