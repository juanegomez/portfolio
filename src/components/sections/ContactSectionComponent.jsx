import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Container,
  Typography,
  Grid,
  CircularProgress,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import contentEn from "./../../languages/language-en.json";
import contentEs from "./../../languages/language-es.json";
import SendIcon from "@mui/icons-material/Send";
import Swal from "sweetalert2";
import { sendContactEmail } from "./../../api/portfolioApi";

const ContactSectionComponent = ({ darkMode, language }) => {
  const customTheme = createTheme({
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: darkMode
                  ? "var(--color-border-input-light)"
                  : "var(--color-border-input-dark)",
              },
              "&:hover fieldset": {
                borderColor: darkMode
                  ? "var(--color-border-input-light)"
                  : "var(--color-border-input-dark)",
              },
              "&.Mui-focused fieldset": {
                borderColor: darkMode
                  ? "var(--color-border-input-light)"
                  : "var(--color-border-input-dark)",
              },
              "& input": {
                color: darkMode
                  ? "var(--color-text-input-light)"
                  : "var(--color-text-input-dark)",
                "&:-webkit-autofill": {
                  "-webkit-box-shadow": `0 0 0 100px ${
                    darkMode
                      ? "var(--color-bg-dark)"
                      : "var(--color-text-input-light)"
                  } inset`,
                  "-webkit-text-fill-color": darkMode
                    ? "var(--color-text-input-light)"
                    : "var(--color-text-input-dark)",
                },
              },
              "&.Mui-focused input": {
                color: darkMode
                  ? "var(--color-text-input-light)"
                  : "var(--color-text-input-dark)",
              },
              "& textarea": {
                color: darkMode
                  ? "var(--color-text-input-light)"
                  : "var(--color-text-input-dark)",
                "&:-webkit-autofill": {
                  "-webkit-box-shadow": `0 0 0 100px ${
                    darkMode
                      ? "var(--color-bg-dark)"
                      : "var(--color-text-input-light)"
                  } inset`,
                  "-webkit-text-fill-color": darkMode
                    ? "var(--color-text-input-light)"
                    : "var(--color-text-input-dark)",
                },
              },
              "&.Mui-focused textarea": {
                color: darkMode
                  ? "var(--color-text-input-light)"
                  : "var(--color-text-input-dark)",
              },
            },
            "& .MuiInputLabel-root": {
              color: darkMode
                ? "var(--color-text-input-light)"
                : "var(--color-border-input-dark)",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: darkMode
                ? "var(--color-border-input-light)"
                : "var(--color-border-input-dark)",
            },
          },
        },
      },
    },
  });

  const defaultFormData = {
    subject: "",
    email: "",
    message: "",
  };

  const [formData, setFormData] = useState(defaultFormData);
  const [emailIsSending, setEmailIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const showAlert = (title, text, icon = "success") => {
    Swal.fire({
      title,
      text,
      icon,
    });
  };

  const validateData = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isValidData = {
      isValid: true,
      message: "",
    };

    if (formData.subject === "") {
      return {
        isValid: false,
        message:
          language === "en"
            ? contentEn.subject_field_required
            : contentEs.subject_field_required,
      };
    }

    if (!emailRegex.test(formData.email)) {
      return {
        isValid: false,
        message:
          language === "en"
            ? contentEn.email_field_required
            : contentEs.email_field_required,
      };
    }

    if (formData.message === "") {
      return {
        isValid: false,
        message:
          language === "en"
            ? contentEn.message_field_required
            : contentEs.message_field_required,
      };
    }

    return isValidData;
  };

  const handleSubmit = async () => {
    setEmailIsSending(true);

    const dataIsValid = validateData();

    if (!dataIsValid.isValid) {
      showAlert(
        language === "en"
          ? contentEn.incorrect_field
          : contentEs.incorrect_field,
        dataIsValid.message,
        "error"
      );

      setEmailIsSending(false);
      return false;
    }

    const response = await sendContactEmail(formData);

    if (response.status === 200) {
      showAlert(
        language === "en" ? contentEn.message_sent : contentEs.message_sent,
        language === "en"
          ? contentEn.message_sent_successfully
          : contentEs.message_sent_successfully
      );

      setFormData(defaultFormData);
    } else {
      showAlert(
        language === "en"
          ? contentEn.error_sending_title
          : contentEs.error_sending_title,
        language === "en"
          ? contentEn.error_sending_message
          : contentEs.error_sending_message,
        "error"
      );
    }

    setEmailIsSending(false);
    return true;
  };

  return (
    <ThemeProvider theme={customTheme}>
      <Container maxWidth="md">
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6} container alignItems="center">
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              width="100%"
            >
              <Typography
                variant="h4"
                component="h1"
                align="center"
                sx={{ fontWeight: "bold", mb: 2 }}
              >
                {language === "en"
                  ? contentEn.contact_me_section
                  : contentEs.contact_me_section}
              </Typography>
              <Box
                component="img"
                src="https://juanegomez-bucket.s3.us-west-2.amazonaws.com/portfolio/images/contact_image.png"
                alt="Contact"
                sx={{
                  width: "100%",
                  maxHeight: "300px",
                  objectFit: "cover",
                  mb: 2,
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                p: 3,
                borderRadius: 1,
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="subject"
                label={
                  language === "en" ? contentEn.subject : contentEs.subject
                }
                name="subject"
                autoComplete="subject"
                onChange={handleChange}
                value={formData.subject}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                onChange={handleChange}
                value={formData.email}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="message"
                label={
                  language === "en" ? contentEn.message : contentEs.message
                }
                id="message"
                multiline
                rows={4}
                onChange={handleChange}
                value={formData.message}
              />
              <Button
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  fontSize: "1rem",
                  fontWeight: "bold",
                  backgroundColor: darkMode
                    ? "var(--color-cv-button-dark)"
                    : "var(--color-cv-button-light)",
                  color: darkMode
                    ? "var(--color-cv-button-text-dark)"
                    : "var(--color-cv-button-text-light)",
                  border: `2px solid ${
                    darkMode
                      ? "var(--color-cv-button-border-dark)"
                      : "var(--color-cv-button-border-light)"
                  }`,
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: darkMode
                      ? "var(--color-cv-button-dark)"
                      : "var(--color-cv-button-light)",
                    transform: "scale(1.05)",
                  },
                  "&.Mui-disabled": {
                    backgroundColor: darkMode
                      ? "var(--color-cv-button-dark)"
                      : "var(--color-cv-button-light)",
                    color: darkMode
                      ? "var(--color-cv-button-text-dark)"
                      : "var(--color-cv-button-text-light)",
                  },
                }}
                onClick={handleSubmit}
                disabled={emailIsSending}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  {emailIsSending ? (
                    <CircularProgress
                      size={24}
                      sx={{
                        color: darkMode
                          ? "var(--color-cv-button-text-dark)"
                          : "var(--color-cv-button-text-light)",
                        mr: 1,
                      }}
                    />
                  ) : (
                    <SendIcon sx={{ mr: 1 }} />
                  )}
                  {language === "en" ? contentEn.send : contentEs.send}
                </Box>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default ContactSectionComponent;
