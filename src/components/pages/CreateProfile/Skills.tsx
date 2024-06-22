import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Skills = () => {
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
            SkillS
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
            5 skills
          </Typography>
        </AccordionSummary>
        <AccordionDetails></AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Skills;
