import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const About = () => {
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
            About
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
            Open to work
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
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
          <Box display="flex" justifyContent="space-between">
            <FormControlLabel
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
                  Open to work
                </Typography>
              }
            />
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
    </Box>
  );
};

export default About;
