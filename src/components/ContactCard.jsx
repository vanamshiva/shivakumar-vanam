import { useState } from "react";
import { Grid, Box, CircularProgress } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CustomTypography from "../inputs/CustomTypograpgy";
import CustomTextField from "../inputs/CustomTextField";
import CustomButton from "../inputs/CustomButton";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 24,
    borderRadius: 16,
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
    background: "#fff",
    width: '50%',
    maxWidth: '800px !important',
  },
  fieldSpacing: {
    marginBottom: 16,
  },
  buttonWrapper: {
    position: "relative",
    display: "inline-block",
  },
  buttonProgress: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
}));

const ContactCard = () => {
  const classes = useStyles();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      alert("Form submitted!");
      setLoading(false);
    }, 2000);
  };

  return (
    <Grid className={classes.container}>
      <CustomTypography
        text="Contact Us"
        styles={{ fontSize: "28px", fontWeight: 600 }}
      />

      <Grid container direction="column">
        <CustomTextField
          name="name"
          label="Name"
          value={form.name}
          onChange={handleChange}
          className={classes.fieldSpacing}
        />
        <CustomTextField
          name="email"
          label="Email"
          value={form.email}
          onChange={handleChange}
          className={classes.fieldSpacing}
        />
        <CustomTextField
          name="message"
          label="Message"
          value={form.message}
          onChange={handleChange}
          multiline
          rows={4}
          className={classes.fieldSpacing}
        />

        <Box className={classes.buttonWrapper}>
          <CustomButton text="Submit" onClick={handleSubmit} isLoading={loading} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default ContactCard;
