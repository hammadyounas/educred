import React from "react";
import {
  Box,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
  Button,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Avatar,
  IconButton,
  Divider,
  InputBase,
  Tabs,
  Tab,
} from "@mui/material";
import { Edit, ContentCopy } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { styled } from "@mui/system";
import ProfileHeader from "./profileHeader";

// Define a custom theme to override checkbox checked color
const theme = createTheme({
  components: {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          "&.Mui-checked": {
            color: "#00BDD6",
          },
        },
      },
    },
  },
});

// Custom styled Tab to handle bold styling for the selected tab
const StyledTab = styled(Tab)(({ theme: any }) => ({
  fontWeight: theme.typography.fontWeightRegular,
  textTransform: "capitalize", fontSize: "0.8rem",
  "&.Mui-selected": {
    fontWeight: theme.typography.fontWeightBold,
    color: "#00BDD6",
    }
}));

const professions = [
  "Software Engineer",
  "Data Scientist",
  "Product Manager",
  "Designer",
];

const locations = ["San Francisco, CA", "New York, NY", "Austin, TX", "Remote"];

const SettingsPage: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  // const StyledTab = (props: any) => (
  //   <Tab {...props} sx={{ textTransform: "capitalize", fontSize: "0.8rem" }} />
  // );

  return (
    <>
      <ProfileHeader />
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg">
          <Box my={4}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              flexDirection={{ xs: "column", md: "row" }} // Flex direction changes on small screens
              textAlign={{ xs: "center", md: "left" }} // Text alignment changes on small screens
              mb={3}
              sx={{
                overflowX: "auto", // Allow horizontal scrolling on small screens if needed
                flexWrap: "wrap", // Wrap tabs into the next row if they overflow
              }}
            >
              <Box mb={{ sx: 2, md: 0 }}>
                <Typography variant="body2" color="textSecondary">
                  Home / Settings
                </Typography>
                <Typography
                  variant="h4"
                  component="h1"
                  gutterBottom
                  sx={{ fontWeight: "bold" }}
                >
                  Settings
                </Typography>
              </Box>
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                sx={{
                  width: { xs: "100%", md: "auto" }, // Full width on extra-small screens
                  "& .MuiTabs-flexContainer": {
                    flexWrap: "nowrap", // Prevent wrapping of tabs to maintain horizontal scroll
                  },
                }}
              >
                <StyledTab label="General" />
                <StyledTab label="Credentials" />
                <StyledTab label="Jobs" />
                <StyledTab label="Notifications" />
                <StyledTab label="Language and Region" />
                <StyledTab label="Security" />
              </Tabs>
            </Box>

            {/* profile card */}
            <Grid container spacing={4} sx={{ marginTop: 2 }}>
              <Grid item xs={12} md={4}>
                <Paper elevation={3} sx={{ padding: 2 }}>
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                  >
                    <div
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      <Avatar
                        src="./settingsAvatar.png"
                        sx={{ width: 150, height: 150 }}
                      />
                      <IconButton
                        color="primary"
                        component="span"
                        sx={{
                          position: "absolute",
                          bottom: 0,
                          right: -20,
                          bgcolor: "#00BDD6",
                          borderRadius: "50%",
                          border: "5px solid white",
                          padding: 1,
                          "&:hover": {
                            bgcolor: "#00ACC1",
                          },
                        }}
                      >
                        <Edit sx={{ color: "white" }} />
                      </IconButton>
                    </div>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "bold", color: "#00BDD6" }}
                    >
                      Jay Rutherford
                    </Typography>
                    <Typography variant="subtitle1">
                      Professional title
                    </Typography>
                    <Typography
                      variant="body2"
                      textAlign={"center"}
                      sx={{ color: "#9095a0", marginTop: 1 }}
                    >
                      Computer Science master student graduated from Case
                      Western Reserve University
                    </Typography>
                    <Divider sx={{ my: 2, width: "100%" }} />
                    <Box mt={2} p={1} bgcolor="#ffffff" width="100%">
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: "bold", marginLeft: "5px" }}
                      >
                        Profile link
                      </Typography>
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        sx={{ backgroundColor: "#f3f4f6", marginTop: 1 }}
                      >
                        <InputBase
                          value="https://www.educred.com"
                          readOnly
                          sx={{ flex: 1, paddingX: 1 }}
                        />
                        <IconButton sx={{color:"#4e5055"}} component="span">
                          <ContentCopy />
                        </IconButton>
                      </Box>
                    </Box>
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={12} md={8}>
                <Paper elevation={3} sx={{ padding: 2 }}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: "bold", fontSize: "32px" }}
                  >
                    Profile
                  </Typography>
                  <Box component="form" noValidate autoComplete="off">
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <Typography
                          variant="body1"
                          sx={{
                            fontWeight: "bold",
                            fontSize: "0.8rem",
                            color: "#424955",
                          }}
                        >
                          Full name
                        </Typography>
                        <TextField
                          fullWidth
                          margin="normal"
                          placeholder="Your full name"
                          variant="outlined"
                          size="small"
                          InputProps={{ style: { fontSize: "0.8rem" } }}
                          sx={{
                            bgcolor: "#F3F4F6",
                            "& .MuiInputBase-input": { color: "black" },
                            fontWeight: "bold",
                            marginTop: "1px",
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography
                          variant="body1"
                          sx={{
                            fontWeight: "bold",
                            fontSize: "0.8rem",
                            color: "#424955",
                          }}
                        >
                          Your Username
                        </Typography>
                        <TextField
                          fullWidth
                          margin="normal"
                          placeholder="Username"
                          variant="outlined"
                          size="small"
                          InputProps={{ style: { fontSize: "0.8rem" } }}
                          sx={{
                            bgcolor: "#F3F4F6",
                            "& .MuiInputBase-input": { color: "black" },
                            fontWeight: "bold",
                            marginTop: "1px",
                          }}
                        />
                      </Grid>
                    </Grid>
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: "bold",
                        fontSize: "0.8rem",
                        color: "#424955",
                        marginTop: "5px",
                      }}
                    >
                      Profession
                    </Typography>
                    <TextField
                      fullWidth
                      margin="normal"
                      select
                      placeholder="Select your title"
                      variant="outlined"
                      size="small"
                      InputProps={{ style: { fontSize: "0.8rem" } }}
                      sx={{
                        bgcolor: "#F3F4F6",
                        "& .MuiInputBase-input": { color: "black" },
                        fontWeight: "bold",
                        marginTop: "1px",
                      }}
                    >
                      {professions.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </TextField>

                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: "bold",
                        fontSize: "0.8rem",
                        color: "#424955",
                        marginTop: "5px",
                      }}
                    >
                      Location
                    </Typography>
                    <TextField
                      fullWidth
                      margin="normal"
                      select
                      placeholder="Select your location"
                      variant="outlined"
                      size="small"
                      InputProps={{ style: { fontSize: "0.8rem" } }}
                      sx={{
                        bgcolor: "#F3F4F6",
                        "& .MuiInputBase-input": { color: "black" },
                        fontWeight: "bold",
                        marginTop: "1px",
                      }}
                    >
                      {locations.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </TextField>

                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: "bold",
                        fontSize: "0.8rem",
                        color: "#424955",
                        marginTop: "5px",
                      }}
                    >
                      Bio
                    </Typography>
                    <TextField
                      fullWidth
                      margin="normal"
                      placeholder="Input Text"
                      multiline
                      rows={4}
                      variant="outlined"
                      size="small"
                      InputProps={{ style: { fontSize: "0.8rem" } }}
                      sx={{
                        bgcolor: "#F3F4F6",
                        "& .MuiInputBase-input": { color: "black" },
                        fontWeight: "bold",
                        marginTop: "1px",
                      }}
                    />
                    <Divider sx={{ my: 2 }} />
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{ fontWeight: "bold", fontSize: "32px" }}
                    >
                      Account
                    </Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <Typography
                          variant="body1"
                          sx={{
                            fontWeight: "bold",
                            fontSize: "0.8rem",
                            color: "#424955",
                            marginTop: "5px",
                          }}
                        >
                          Email
                        </Typography>
                        <TextField
                          fullWidth
                          margin="normal"
                          placeholder="example.email@gmail.com"
                          type="email"
                          variant="outlined"
                          size="small"
                          InputProps={{ style: { fontSize: "0.8rem" } }}
                          sx={{
                            bgcolor: "#F3F4F6",
                            "& .MuiInputBase-input": { color: "black" },
                            fontWeight: "bold",
                            marginTop: "1px",
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography
                          variant="body1"
                          sx={{
                            fontWeight: "bold",
                            fontSize: "0.8rem",
                            color: "#424955",
                            marginTop: "5px",
                          }}
                        >
                          Password
                        </Typography>
                        <TextField
                          fullWidth
                          margin="normal"
                          placeholder="******"
                          type="password"
                          variant="outlined"
                          size="small"
                          InputProps={{ style: { fontSize: "0.8rem" } }}
                          sx={{
                            bgcolor: "#F3F4F6",
                            "& .MuiInputBase-input": { color: "black" },
                            fontWeight: "bold",
                            marginTop: "1px",
                          }}
                        />
                      </Grid>
                    </Grid>
                    <Divider sx={{ my: 2 }} />
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{ fontWeight: "bold", fontSize: "32px" }}
                    >
                      Preferences
                    </Typography>
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label={
                        <Box sx={{ fontWeight: "bold", fontSize: "0.8rem" }}>
                          Receive monthly product updates
                          <Typography
                            variant="caption"
                            display="block"
                            sx={{
                              color: "#9095a0",
                              fontSize: "0.8rem",
                              fontWeight: "normal",
                            }}
                          >
                            Quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequa
                          </Typography>
                        </Box>
                      }
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label={
                        <Box
                          sx={{
                            fontWeight: "bold",
                            fontSize: "0.8rem",
                            marginTop: "10px",
                          }}
                        >
                          See info about people who view my profile
                          <Typography
                            variant="caption"
                            display="block"
                            sx={{
                              color: "#9095a0",
                              fontSize: "0.8rem",
                              fontWeight: "normal",
                            }}
                          >
                            Quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequa
                          </Typography>
                        </Box>
                      }
                    />
                    <Box mt={2} display="flex" justifyContent="flex-end">
                      <Button
                        variant="contained"
                        sx={{ bgcolor: "#00BDD6", color: "white" }}
                      >
                        Save information
                      </Button>
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default SettingsPage;
