import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Grid,
  Box,
} from "@mui/material";
import contentEn from "./../../languages/language-en.json";
import contentEs from "./../../languages/language-es.json";
import LanguageIcon from "@mui/icons-material/Language";

const ProjectsSectionComponent = ({ language }) => {
  const projects = [
    {
      id: 1,
      title: "USA Supply Source",
      image: "./../../../public/cornercloud.png",
      isActive: true,
      link: "https://thecornercloud.com/index.php/login",
      descriptionEn: (
        <>
          Web application that sells security products, tools, home improvement
          items, and electronics. <br />
          <br />
          <strong>Technologies:</strong> Laravel, Lumen, Bonfire, Eloquent,
          MySQL, MongoDB, Angular, and AWS.
        </>
      ),
      descriptionEs: (
        <>
          Aplicación web que vende productos de seguridad, herramientas, mejoras
          para el hogar y electrónica. <br />
          <br />
          <strong>Tecnologías:</strong> Laravel, Lumen, Bonfire, Eloquent,
          MySQL, MongoDB, Angular y AWS.
        </>
      ),
    },
    {
      id: 2,
      title: "USA Buying Group",
      image: "./../../../public/usabuyinggroup.png",
      isActive: true,
      link: "https://usabuying.group",
      descriptionEn: (
        <>
          Web application where members can purchase products using their credit
          cards. Once the products are received by the buying group, the money
          is reimbursed to the members. <br />
          <br />
          <strong>Technologies:</strong> Laravel, Lumen, React, MySQL, Eloquent,
          and AWS.
        </>
      ),
      descriptionEs: (
        <>
          Aplicación web donde los miembros pueden comprar productos utilizando
          sus tarjetas de crédito. Una vez recibidos los productos por el buying
          group, se reembolsa el dinero a los miembros. <br />
          <br />
          <strong>Tecnologías:</strong> Laravel, Lumen, React, MySQL, Eloquent y
          AWS.
        </>
      ),
    },
    {
      id: 3,
      title: `${
        language === "en" ? contentEn.icbf_project : contentEs.icbf_project
      }`,
      image: "./../../../public/icbf_app.png",
      isActive: true,
      link: "https://earnest-ganache-ca2872.netlify.app/",
      descriptionEn: (
        <>
          Web application to optimize the operational management of the Service
          Units (UDS) of the Fusagasugá zonal center, part of the Colombian
          Institute of Family Welfare in Colombia.
          <br />
          <br />
          <strong>Technologies:</strong> Node.js, Sequelize, MySQL, Express,
          React, and AWS.
        </>
      ),
      descriptionEs: (
        <>
          Aplicación Web para optimizar la gestión operacional de las unidades
          de servicio (UDS) del centro zonal de Fusagasugá, parte del Instituto
          Colombiano de Bienestar Familiar en Colombia.
          <br />
          <br />
          <strong>Tecnologías:</strong> Node.js, Sequelize, MySQL, Express,
          React, y AWS.
        </>
      ),
    },
  ];

  return (
    <Container>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{
          fontWeight: "bold",
          fontSize: "2rem",
          textAlign: "center",
          paddingBottom: "50px",
        }}
      >
        {language === "en" ? contentEn.projects : contentEs.projects}
      </Typography>
      <Grid container spacing={4} sx={{ marginBottom: "50px" }}>
        {projects.map((project) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={project.id}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              sx={{
                width: 400,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <Box
                sx={{ display: "flex", justifyContent: "center", mt: 2, px: 2 }}
              >
                <Box
                  sx={{
                    width: 500,
                    height: 300,
                    overflow: "hidden",
                    borderRadius: "10px",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={project.image}
                    alt={project.title}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Box>
              <CardContent sx={{ flex: 1 }}>
                <Typography variant="h5" component="div" gutterBottom>
                  {project.title}
                </Typography>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  marginY={1}
                >
                  <Box
                    component="span"
                    sx={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      backgroundColor: project.isActive ? "green" : "grey",
                      marginRight: 1,
                    }}
                  />
                  <Typography
                    variant="subtitle1"
                    component="span"
                    sx={{ color: project.isActive ? "#439D2A" : "grey" }}
                  >
                    {project.isActive
                      ? language === "en"
                        ? contentEn.online
                        : contentEs.online
                      : language === "en"
                      ? contentEn.offline
                      : contentEs.offline}
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  gutterBottom
                  component="div"
                >
                  {language === "en"
                    ? project.descriptionEn
                    : project.descriptionEs}
                </Typography>
              </CardContent>
              {project.isActive && (
                <Box display="flex" justifyContent="center" mb={2}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "black",
                      transition: "transform 0.3s ease-in-out",
                      "&:hover": {
                        transform: "scale(1.1)",
                        backgroundColor: "black",
                      },
                      borderRadius: "50%",
                      width: "50px",
                      height: "50px",
                      minWidth: "50px",
                    }}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LanguageIcon />
                  </Button>
                </Box>
              )}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProjectsSectionComponent;
