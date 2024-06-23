import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CustomTextField from "../../common/Input";
import { Add, Delete } from "@mui/icons-material";

const WorkingExperience = () => {
  return (
    <Box mt={3}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography
            variant="h4"
            component="h1"
            sx={{
              mb: 0,
              fontFamily: "Inter",
              fontWeight: "700",
              lineHeight: "28px",
              fontSize: { xs: "16px", md: "18px" },
              textTransform: "uppercase",
              marginRight: "16px",
            }}
          >
            Working Experience
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
              backgroundColor: "#F5F2FD",
              color: "#8353E2",
              // verticalAlign:"middle",
              padding: "4px",
              barderRadius: "8px",
              textAlign: "center",
            }}
          >
            1 company
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={3}
          >
            <Typography
              variant="h4"
              component="h1"
              sx={{
                mb: 0,
                fontFamily: "Inter",
                fontWeight: "700",
                lineHeight: "26px",
                fontSize: { xs: "16px" },
                color: "#00BDD6",
              }}
            >
              1st working experience
            </Typography>
            <Delete />
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Box width="48%">
              <Typography
                variant="h4"
                component="h1"
                sx={{
                  mb: 1.5,
                  fontFamily: "Inter",
                  fontWeight: "700",
                  lineHeight: "22px",
                  fontSize: { xs: "14px" },
                  color: "#424955",
                }}
              >
                Company name
              </Typography>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                fullWidth
                variant="filled"
                sx={{
                  backgroundColor: "#F3F4F6", // Change background color here
                  borderRadius: "8px", // Add border radius here
                  "& .MuiFilledInput-underline:before": {
                    borderBottom: "none", // Remove underline before focus
                  },
                  "& .MuiFilledInput-underline:after": {
                    borderBottom: "none", // Remove underline after focus
                  },
                  "& .MuiFilledInput-root": {
                    backgroundColor: "#F3F4F6", // Ensure the input itself has the same background color
                    borderRadius: "8px",
                  },
                }}
              >
                <MenuItem value={10}>Company name</MenuItem>
              </Select>
            </Box>
            <Box width="48%">
              <Typography
                variant="h4"
                component="h1"
                sx={{
                  mb: 1.5,
                  fontFamily: "Inter",
                  fontWeight: "700",
                  lineHeight: "22px",
                  fontSize: { xs: "14px" },
                  color: "#424955",
                }}
              >
                Employment type
              </Typography>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                fullWidth
                variant="filled"
                sx={{
                  backgroundColor: "#F3F4F6", // Change background color here
                  borderRadius: "8px", // Add border radius here
                  "& .MuiFilledInput-underline:before": {
                    borderBottom: "none", // Remove underline before focus
                  },
                  "& .MuiFilledInput-underline:after": {
                    borderBottom: "none", // Remove underline after focus
                  },
                  "& .MuiFilledInput-root": {
                    backgroundColor: "#F3F4F6", // Ensure the input itself has the same background color
                    borderRadius: "8px",
                  },
                }}
              >
                <MenuItem value={10}>Employment type</MenuItem>
              </Select>
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            my={3}
          >
            <Box width="48%">
              <Typography
                variant="h4"
                component="h1"
                sx={{
                  mb: 0,
                  fontFamily: "Inter",
                  fontWeight: "700",
                  lineHeight: "22px",
                  fontSize: { xs: "14px" },
                  color: "#424955",
                }}
              >
                Title
              </Typography>
              <CustomTextField type="text" placeholder="Job Title" />
            </Box>
            <Box width="48%">
              <FormControlLabel
                style={{ marginTop: "16px" }}
                control={
                  <Checkbox
                    value="remember"
                    color="primary"
                    sx={{
                      color: "#171A1F",
                      "&.Mui-checked": {
                        color: "#0095a9",
                      },
                    }}
                  />
                }
                label={
                  <Typography
                    sx={{
                      fontFamily: "Inter",
                      fontWeight: "400",
                      fontSize: "14px",
                      lineHeight: "22px",
                      color: "#171A1F",
                    }}
                  >
                    I am currently working in this role
                  </Typography>
                }
              />
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            my={3}
          >
            <Box width="48%">
              <Typography
                variant="h4"
                component="h1"
                sx={{
                  mb: 0,
                  fontFamily: "Inter",
                  fontWeight: "700",
                  lineHeight: "22px",
                  fontSize: { xs: "14px" },
                  color: "#424955",
                }}
              >
                Start date
              </Typography>
              <CustomTextField type="text" placeholder="Start date" />
            </Box>
            <Box width="48%">
              <Typography
                variant="h4"
                component="h1"
                sx={{
                  mb: 0,
                  fontFamily: "Inter",
                  fontWeight: "700",
                  lineHeight: "22px",
                  fontSize: { xs: "14px" },
                  color: "#424955",
                }}
              >
                End date
              </Typography>
              <CustomTextField type="text" placeholder="End date" />
            </Box>
          </Box>
          <Box my={4}>
            <Typography
              variant="h4"
              component="h1"
              sx={{
                mb: 2,
                fontFamily: "Inter",
                fontWeight: "700",
                lineHeight: "22px",
                fontSize: { xs: "14px" },
                color: "#424955",
              }}
            >
              Description
            </Typography>
            <TextField
              multiline
              minRows={4}
              variant="filled"
              fullWidth
              InputProps={{
                sx: {
                  backgroundColor: "#F3F4F6", // Background color red
                  color: "#323842", // Text color white
                  "& .MuiInputBase-input": {
                    resize: "both", // Make the textarea resizable
                  },
                  "&:before, &:after": {
                    borderBottom: "none", // Remove underline before and after focus
                  },
                },
              }}
            />
          </Box>
          <Box display="flex" justifyContent="flex-end">
            <Button
              variant="text"
              endIcon={<ExpandMoreIcon />}
              style={{
                backgroundColor: "transparent",
                fontFamily: "Inter",
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "22px",
                color: "#00BDD6",
                textTransform: "capitalize",
                alignSelf: "center",
              }}
            >
              More options
            </Button>
          </Box>
          <Divider style={{ margin: "16px" }} />
          <Box display="flex" justifyContent="flex-end" my={4}>
            <Button
              variant="contained"
              startIcon={<Add />}
              style={{
                backgroundColor: "#00BDD6",
                fontFamily: "Inter",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "26px",
                color: "#FFFFFF",
                textTransform: "capitalize",
              }}
            >
              Add job
            </Button>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default WorkingExperience;
