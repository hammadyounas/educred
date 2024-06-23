import React from "react";
import Header from "../components/common/Header";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import {
  Add,
  ArrowDownward,
  ArrowForward,
  Delete,
  DoneAllOutlined,
  DonutLargeOutlined,
  FilterList,
  FolderCopyOutlined,
  ListAltOutlined,
  PeopleAltOutlined,
  RepeatOnOutlined,
} from "@mui/icons-material";
import CustomTextField from "../components/common/Input";

const createData = (
  id: string,
  credential: string,
  requester: string,
  channel: string,
  group: string,
  status: string,
  date: string
) => {
  return { id, credential, requester, channel, group, status, date };
};

const rows = [
  createData(
    "#1147",
    "Master Desgree Transcripts",
    "NYU",
    "Web form",
    "CWRU",
    "Sent",
    "Jul 21"
  ),
  createData(
    "#1147",
    "Bachaler Degree Transcripss",
    "NYU",
    "Web form",
    "CWRU",
    "Sent",
    "Jul 21"
  ),
  createData(
    "#1129",
    "Python",
    "Goodyear.llc",
    "Job Application",
    "CWRU",
    "Pending",
    "Jul 21"
  ),
  createData(
    "#1129",
    "Database Management",
    "Goodyear.llc",
    "Job Application",
    "CWRU",
    "Sent",
    "Jul 21"
  ),
  createData(
    "#1129",
    "Full Stack Development",
    "Goodyear.llc",
    "Job Application",
    "CWRU",
    "--",
    "Jul 21"
  ),
];

const CredentialsList = () => {
  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <Grid container my={8} spacing={2}>
          <Grid item xs={12} lg={4}>
            <Box
              component={"div"}
              display="flex"
              flexDirection="column"
              px={2}
              py={4}
              bgcolor="#F8F9FA"
              minHeight="100vh"
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography
                  variant="h4"
                  component="h1"
                  sx={{
                    mb: 0,
                    fontFamily: "Epilogue",
                    fontWeight: "600",
                    lineHeight: "30px",
                    fontSize: { xs: "20px" },
                    color: "#171A1F",
                  }}
                >
                  Views
                </Typography>
                <ListAltOutlined />
              </Box>
              <Divider style={{ margin: "16px 0" }} />
              <Box display="flex" flexDirection="column" my={2}>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  bgcolor="#A6F5FF"
                  padding={1}
                  borderRadius={1}
                >
                  <Box display="flex" alignItems="center">
                    <FolderCopyOutlined />
                    <Typography
                      variant="h4"
                      component="h1"
                      sx={{
                        mb: 0,
                        fontFamily: "Inter",
                        fontWeight: "700",
                        lineHeight: "22px",
                        fontSize: { xs: "14px" },
                        color: "#006D7C",
                        marginLeft: "8px",
                      }}
                    >
                      Credential List
                    </Typography>
                  </Box>
                  <Typography
                    variant="h4"
                    component="h1"
                    sx={{
                      mb: 0,
                      fontFamily: "Inter",
                      fontWeight: "700",
                      lineHeight: "22px",
                      fontSize: { xs: "14px" },
                      color: "#006D7C",
                    }}
                  >
                    5
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  padding={1}
                  borderRadius={1}
                  mt={2}
                >
                  <Box display="flex" alignItems="center">
                    <PeopleAltOutlined />
                    <Typography
                      variant="h4"
                      component="h1"
                      sx={{
                        mb: 0,
                        fontFamily: "Inter",
                        fontWeight: "400",
                        lineHeight: "22px",
                        fontSize: { xs: "14px" },
                        color: "#565E6C",
                        marginLeft: "8px",
                      }}
                    >
                      Group tickets
                    </Typography>
                  </Box>
                  <Typography
                    variant="h4"
                    component="h1"
                    sx={{
                      mb: 0,
                      fontFamily: "Inter",
                      fontWeight: "400",
                      lineHeight: "22px",
                      fontSize: { xs: "14px" },
                      color: "#565E6C",
                    }}
                  >
                    29
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  padding={1}
                  borderRadius={1}
                  mt={2}
                >
                  <Box display="flex" alignItems="center">
                    <RepeatOnOutlined />
                    <Typography
                      variant="h4"
                      component="h1"
                      sx={{
                        mb: 0,
                        fontFamily: "Inter",
                        fontWeight: "400",
                        lineHeight: "22px",
                        fontSize: { xs: "14px" },
                        color: "#565E6C",
                        marginLeft: "8px",
                      }}
                    >
                      Unassigned Credentials
                    </Typography>
                  </Box>
                  <Typography
                    variant="h4"
                    component="h1"
                    sx={{
                      mb: 0,
                      fontFamily: "Inter",
                      fontWeight: "400",
                      lineHeight: "22px",
                      fontSize: { xs: "14px" },
                      color: "#565E6C",
                    }}
                  >
                    3
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  padding={1}
                  borderRadius={1}
                  mt={2}
                >
                  <Box display="flex" alignItems="center">
                    <DonutLargeOutlined />
                    <Typography
                      variant="h4"
                      component="h1"
                      sx={{
                        mb: 0,
                        fontFamily: "Inter",
                        fontWeight: "400",
                        lineHeight: "22px",
                        fontSize: { xs: "14px" },
                        color: "#565E6C",
                        marginLeft: "8px",
                      }}
                    >
                      Pending Credentials
                    </Typography>
                  </Box>
                  <Typography
                    variant="h4"
                    component="h1"
                    sx={{
                      mb: 0,
                      fontFamily: "Inter",
                      fontWeight: "400",
                      lineHeight: "22px",
                      fontSize: { xs: "14px" },
                      color: "#565E6C",
                    }}
                  >
                    2
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  padding={1}
                  borderRadius={1}
                  mt={2}
                >
                  <Box display="flex" alignItems="center">
                    <DoneAllOutlined />
                    <Typography
                      variant="h4"
                      component="h1"
                      sx={{
                        mb: 0,
                        fontFamily: "Inter",
                        fontWeight: "400",
                        lineHeight: "22px",
                        fontSize: { xs: "14px" },
                        color: "#565E6C",
                        marginLeft: "8px",
                      }}
                    >
                      Verified Credentials
                    </Typography>
                  </Box>
                  <Typography
                    variant="h4"
                    component="h1"
                    sx={{
                      mb: 0,
                      fontFamily: "Inter",
                      fontWeight: "400",
                      lineHeight: "22px",
                      fontSize: { xs: "14px" },
                      color: "#565E6C",
                    }}
                  >
                    386
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  padding={1}
                  borderRadius={1}
                  mt={2}
                >
                  <Box display="flex" alignItems="center">
                    <Delete />
                    <Typography
                      variant="h4"
                      component="h1"
                      sx={{
                        mb: 0,
                        fontFamily: "Inter",
                        fontWeight: "400",
                        lineHeight: "22px",
                        fontSize: { xs: "14px" },
                        color: "#565E6C",
                        marginLeft: "8px",
                      }}
                    >
                      Expired Credentials
                    </Typography>
                  </Box>
                  <Typography
                    variant="h4"
                    component="h1"
                    sx={{
                      mb: 0,
                      fontFamily: "Inter",
                      fontWeight: "400",
                      lineHeight: "22px",
                      fontSize: { xs: "14px" },
                      color: "#565E6C",
                    }}
                  >
                    71
                  </Typography>
                </Box>
              </Box>
              <Button
                endIcon={<ArrowForward />}
                style={{
                  alignSelf: "flex-start",
                  marginTop: "16px",
                  fontFamily: "Inter",
                  fontWeight: "400",
                  fontSize: "14px",
                  color: "#8353E2",
                  textTransform: "capitalize",
                }}
                variant="text"
              >
                Manage views
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} lg={8}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mt={8}
            >
              <Typography
                variant="h4"
                component="h1"
                sx={{
                  mb: 0,
                  fontFamily: "Epilogue",
                  fontWeight: "700",
                  lineHeight: "42px",
                  fontSize: { xs: "28px" },
                  color: "#171A1F",
                }}
              >
                Credentials
              </Typography>
              <Button
                style={{
                  backgroundColor: "#00BDD6",
                  border: "1px solid #00BDD6",
                  color: "#fff",
                }}
                startIcon={<Add />}
              >
                CREATE NEW
              </Button>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              my={2}
              sx={{ flexDirection: { xs: "column", sm: "row" } }}
            >
              <Box width={250}>
                <CustomTextField placeholder="Search" />
              </Box>
              <Button
                style={{
                  backgroundColor: "#EAECEF",
                  color: "#171A1F",
                  fontFamily: "Inter",
                  fontWeight: "400",
                  fontSize: "14px",
                  textTransform: "capitalize",
                  padding: "16px",
                }}
                startIcon={<FilterList />}
                endIcon={<ArrowDownward />}
              >
                Sort: Last updated
              </Button>
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
                      Credentials Name
                    </TableCell>
                    <TableCell
                      sx={{
                        fontFamily: "Epilogue",
                        fontWeight: "600",
                        fontSize: "14px",
                        color: "#171A1F",
                      }}
                    >
                      Resquester
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
                              row.status === "Sent"
                                ? "#379AE6"
                                : row.status === "Pending"
                                ? "#EFB034"
                                : "#1DD75B",
                            color:
                              row.status === "Sent"
                                ? "#FFFFFF"
                                : row.status === "Pending"
                                ? "#5D4108"
                                : "#0A4D20",
                            textTransform: "capitalize",
                            marginRight: "8px",
                            fontFamily: "Inter",
                            fontWeight: "400",
                            fontSize: "11px",
                          }}
                        >
                          {row.status === "Sent"
                            ? "New"
                            : row.status === "Pending"
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
                        {row.credential}
                      </TableCell>
                      <TableCell
                        sx={{
                          fontFamily: "Inter",
                          fontWeight: "400",
                          fontSize: "14px",
                          color: "#171A1F",
                        }}
                      >
                        {row.requester}
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

export default CredentialsList;
