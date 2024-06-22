import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CustomTextField from "../../common/Input";

const GeneralInformation = () => {
  return (
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
          General information
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
          100% completed
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography
          variant="h4"
          component="h1"
          sx={{
            mb: 0,
            fontFamily: "Inter",
            fontWeight: "700",
            lineHeight: "22px",
            fontSize: { xs: "14px" },
            color: "#171A1F",
          }}
        >
          Avatar
        </Typography>
        <Box display="flex" alignItems="center" my={2}>
          <img src="/avatar.png" alt="avatar" />
          <Button
            variant="contained"
            style={{
              backgroundColor: "#C8F9FF",
              fontFamily: "Inter",
              fontWeight: "400",
              fontSize: "12px",
              lineHeight: "20px",
              color: "#006D7C",
              textTransform: "capitalize",
              margin: "0 20px",
            }}
          >
            Change
          </Button>
          <Button
            variant="text"
            style={{
              backgroundColor: "transparent",
              fontFamily: "Inter",
              fontWeight: "400",
              fontSize: "12px",
              lineHeight: "20px",
              color: "#9095A0",
              textTransform: "capitalize",
            }}
          >
            Remove
          </Button>
        </Box>
        <Box display="flex" justifyContent="space-between">
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
              Name
            </Typography>
            <CustomTextField type="text" placeholder="What is your name" />
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
              Title
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
              <MenuItem value={10}>Professional title</MenuItem>
            </Select>
          </Box>
        </Box>
        <Box my={3}>
          <Typography
            variant="h4"
            component="h1"
            sx={{
              mb: 0,
              fontFamily: "Inter",
              fontWeight: "700",
              lineHeight: "22px",
              fontSize: { xs: "14px" },
              color: "#171A1F",
            }}
          >
            Professional Skills
          </Typography>
          <Box my={1} display="flex">
            <Button
              variant="contained"
              endIcon={<span style={{ fontSize: "12px" }}>X</span>}
              style={{
                backgroundColor: "#00BDD6",
                borderRadius: "8px",
                fontFamily: "Inter",
                fontWeight: "400",
                fontSize: "12px",
                lineHeight: "20px",
                color: "#FFFFFF",
                textTransform: "capitalize",
                marginRight: "10px",
              }}
            >
              UX Research
            </Button>
            <Button
              variant="contained"
              endIcon={<span style={{ fontSize: "12px" }}>X</span>}
              style={{
                backgroundColor: "#00BDD6",
                borderRadius: "8px",
                fontFamily: "Inter",
                fontWeight: "400",
                fontSize: "12px",
                lineHeight: "20px",
                color: "#FFFFFF",
                textTransform: "capitalize",
                marginRight: "10px",
              }}
            >
              UI Design
            </Button>
            <Button
              variant="contained"
              endIcon={<span style={{ fontSize: "12px" }}>X</span>}
              style={{
                backgroundColor: "#00BDD6",
                borderRadius: "8px",
                fontFamily: "Inter",
                fontWeight: "400",
                fontSize: "12px",
                lineHeight: "20px",
                color: "#FFFFFF",
                textTransform: "capitalize",
                marginRight: "10px",
              }}
            >
              Web Design
            </Button>
            <Button
              startIcon={<span style={{ fontSize: "12px" }}>+</span>}
              variant="text"
              style={{
                backgroundColor: "transparent",
                fontFamily: "Inter",
                fontWeight: "400",
                fontSize: "12px",
                lineHeight: "20px",
                color: "#00BDD6",
                textTransform: "capitalize",
              }}
            >
              Add
            </Button>
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
          <Typography
            variant="h4"
            component="h1"
            sx={{
              mb: 2,
              fontFamily: "Inter",
              fontWeight: "400",
              lineHeight: "20px",
              fontSize: { xs: "12px" },
              color: "#8353E2",
              backgroundColor: "#F5F2FD",
              textAlign: "center",
              padding: "4px",
              marginY: "20px",
              borderRadius: "4px",
            }}
          >
            This is how talent figures out what you need and why you're great to
            work with
          </Typography>
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
      </AccordionDetails>
    </Accordion>
  );
};

export default GeneralInformation;
