import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import contentEn from "./../../languages/language-en.json";
import contentEs from "./../../languages/language-es.json";

const TechnologiesSectionComponent = ({ darkMode, language }) => {
  const urlImage =
    "https://juanegomez-bucket.s3.us-west-2.amazonaws.com/portfolio/images/";

  const technologies = [
    {
      name: "JavaScript",
      image: `${urlImage}${darkMode ? "js_light.png" : "js_dark.png"}`,
    },
    {
      name: "Angular",
      image: `${urlImage}${
        darkMode ? "angularjs_light.png" : "angularjs_dark.png"
      }`,
    },
    {
      name: "Python",
      image: `${urlImage}${darkMode ? "python_light.png" : "python_dark.png"}`,
    },
    {
      name: "MongoDB",
      image: `${urlImage}${
        darkMode ? "mongodb_light.png" : "mongodb_dark.png"
      }`,
    },
    {
      name: "Laravel",
      image: `${urlImage}${
        darkMode ? "laravel_light.png" : "laravel_dark.png"
      }`,
    },
    {
      name: "Git",
      image: `${urlImage}${darkMode ? "git_light.png" : "git_dark.png"}`,
    },
    {
      name: "Node.js",
      image: `${urlImage}${darkMode ? "node_light.png" : "node_dark.png"}`,
    },
    {
      name: "React",
      image: `${urlImage}${darkMode ? "react_light.png" : "react_dark.png"}`,
    },
    {
      name: "MySQL",
      image: `${urlImage}${darkMode ? "mysql_white.png" : "mysql_dark.png"}`,
    },
    {
      name: "Docker",
      image: `${urlImage}${darkMode ? "docker_light.png" : "docker_dark.png"}`,
    },
    {
      name: "PHP",
      image: `${urlImage}${darkMode ? "php_light.png" : "php_dark.png"}`,
    },
    {
      name: "AWS",
      image: `${urlImage}${darkMode ? "aws_light.png" : "aws_dark.png"}`,
    },
  ];

  const technologyStyles = {
    width: "80px",
    height: "80px",
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.1)",
    },
  };

  const mongodbStyles = {
    width: "40px",
    height: "80px",
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.1)",
    },
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
            <Box
              component="img"
              src={tech.image}
              alt={tech.name}
              sx={tech.name === "MongoDB" ? mongodbStyles : technologyStyles}
            />
            <Typography variant="body1">{tech.name}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TechnologiesSectionComponent;
