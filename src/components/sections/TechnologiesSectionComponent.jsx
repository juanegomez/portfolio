import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import contentEn from "./../../languages/language-en.json";
import contentEs from "./../../languages/language-es.json";

const TechnologiesSectionComponent = ({ darkMode, language }) => {
  const technologies = [
    {
      name: "JavaScript",
      image: `./../../../public/${darkMode ? "js_light.png" : "js_dark.png"}`,
    },
    {
      name: "Angular",
      image: `./../../../public/${
        darkMode ? "angularjs_light.png" : "angularjs_dark.png"
      }`,
    },
    {
      name: "Python",
      image: `./../../../public/${
        darkMode ? "python_light.png" : "python_dark.png"
      }`,
    },
    {
      name: "MongoDB",
      image: `./../../../public/${
        darkMode ? "mongodb_light.png" : "mongodb_dark.png"
      }`,
    },
    {
      name: "Laravel",
      image: `./../../../public/${
        darkMode ? "laravel_light.png" : "laravel_dark.png"
      }`,
    },
    {
      name: "Git",
      image: `./../../../public/${darkMode ? "git_light.png" : "git_dark.png"}`,
    },
    {
      name: "Node.js",
      image: `./../../../public/${
        darkMode ? "node_light.png" : "node_dark.png"
      }`,
    },
    {
      name: "React",
      image: `./../../../public/${
        darkMode ? "react_light.png" : "react_dark.png"
      }`,
    },
    {
      name: "MySQL",
      image: `./../../../public/${
        darkMode ? "mysql_white.png" : "mysql_dark.png"
      }`,
    },
    {
      name: "Docker",
      image: `./../../../public/${
        darkMode ? "docker_light.png" : "docker_dark.png"
      }`,
    },
    {
      name: "PHP",
      image: `./../../../public/${darkMode ? "php_light.png" : "php_dark.png"}`,
    },
    {
      name: "AWS",
      image: `./../../../public/${darkMode ? "aws_light.png" : "aws_dark.png"}`,
    },
  ];

  const technologyStyles = {
    width: "80px",
    height: "80px",
  };

  const sectionTitle =
    language === "es" ? contentEs.technologies : contentEn.technologies;

  return (
    <Box padding={4}>
      <Typography
        variant="h4"
        component="h2"
        sx={{ fontWeight: "bold", marginBottom: "50px" }}
        gutterBottom
      >
        {sectionTitle}
      </Typography>

      <Grid container spacing={4}>
        {technologies.map((tech, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            key={index}
            textAlign="center"
            sx={{ marginBottom: "50px" }}
          >
            <img
              src={tech.image}
              alt={tech.name}
              style={
                tech.name === "MongoDB"
                  ? { width: "40px", height: "80px" }
                  : technologyStyles
              }
            />
            <Typography variant="body1">{tech.name}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TechnologiesSectionComponent;
