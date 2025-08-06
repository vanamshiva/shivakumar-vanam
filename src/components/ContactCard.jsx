import { useState } from "react";
import { Grid, Box, CircularProgress } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CustomTypography from "../inputs/CustomTypograpgy";
import CustomTextField from "../inputs/CustomTextField";
import CustomButton from "../inputs/CustomButton";
import emailjs from "@emailjs/browser";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 24,
    borderRadius: 16,
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
    background: "#fff",
    width: '50%',
    maxWidth: '800px !important',
  },
  fieldsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  },
  buttonWrapper: {
    position: "relative",
    display: "inline-block",
  }
}));

const ContactCard = () => {
  const classes = useStyles();
  const [form, setForm] = useState({ name: "", email: "", mobile: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    setLoading(true);

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      name: form.name,
      email: form.email,
      mobile: form.mobile,
      message: form.message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((res) => {
        alert("Form submitted and email sent!");
        setForm({ name: "", email: "", mobile: "", message: "" });
        setLoading(false);
      })
      .catch((err) => {
        alert("Failed to send email.");
        console.error(err);
        setLoading(false);
      });
  };

  return (
    <Grid className={classes.container}>
      <CustomTypography
        text="Contact Us"
        styles={{ fontSize: "28px", fontWeight: 600 }}
      />

      <Grid className={classes.fieldsContainer}>
        <CustomTextField
          name="name"
          label="Name"
          value={form.name}
          onChange={handleChange}
        />
        <CustomTextField
          name="email"
          label="Email"
          value={form.email}
          onChange={handleChange}
        />
        <CustomTextField
          name="mobile"
          label="Mobile Number"
          value={form.mobile}
          onChange={handleChange}
        />
        <CustomTextField
          name="message"
          label="Message"
          value={form.message}
          onChange={handleChange}
          multiline
          rows={4}
        />

        <Box className={classes.buttonWrapper}>
          <CustomButton text="Submit" onClick={handleSubmit} isLoading={loading} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default ContactCard;
