import { useState } from "react";
import { Grid, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CustomTypography from "../inputs/CustomTypograpgy";
import CustomTextField from "../inputs/CustomTextField";
import CustomButton from "../inputs/CustomButton";
import emailjs from "@emailjs/browser";

const useStyles = makeStyles(() => ({
  outerWrapper: {
    background: "linear-gradient(135deg, #c7d2fe, #e0f2fe, #fdf4ff)",
    padding: "60px 40px",
    borderRadius: "24px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: '900px',
    width: '100%',
  },
  subtext: {
    fontSize: "16px",
    textAlign: "center",
    color: "#666",
    marginBottom: "32px",
  },
  fieldsContainer: {
    width: '100%',
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  row: {
    display: "flex",
    gap: "16px",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  buttonWrapper: {
    marginTop: "24px",
    display: "flex",
    justifyContent: "center",
  },
}));

const ContactCard = () => {
  const classes = useStyles();
  const [form, setForm] = useState({ name: "", email: "", mobile: "", message: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "mobile") {
      // Allow only numbers and max 10 digits
      const numericValue = value.replace(/\D/g, ""); // remove non-digits
      if (numericValue.length > 10) return;
      setForm((prev) => ({ ...prev, [name]: numericValue }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };


  const validateForm = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    if (form.mobile) {
      if (!/^\d{10}$/.test(form.mobile)) {
        newErrors.mobile = "Mobile number must be 10 digits";
      }
    }

    if (!form.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

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
      .then(() => {
        alert("Form submitted and email sent!");
        setForm({ name: "", email: "", mobile: "", message: "" });
        setErrors({});
        setLoading(false);
      })
      .catch((err) => {
        alert("Failed to send email.");
        console.error(err);
        setLoading(false);
      });
  };

  return (
    <Grid className={classes.outerWrapper}>
      <CustomTypography text="Contact with Me"
        styles={{
          fontSize: "28px",
          fontWeight: 700,
          textAlign: "center",
          marginBottom: "20px",
        }}
      />
      {/* <CustomTypography text="Feel free to contact me for new projects or just for a chat." styles={classes.subtext} /> */}

      <Box className={classes.fieldsContainer}>
        <Box className={classes.row}>
          <CustomTextField
            name="name"
            label="Name"
            value={form.name}
            onChange={handleChange}
            style={{ flex: 1 }}
            inputPropsStyle={{
              borderRadius: "40px",
              backgroundColor: "#f9f9f9",
            }}
            error={!!errors.name}
            helperText={errors.name}
          />
          <CustomTextField
            name="mobile"
            label="Mobile Number"
            value={form.mobile}
            onChange={handleChange}
            style={{ flex: 1 }}
            inputPropsStyle={{
              borderRadius: "40px",
              backgroundColor: "#f9f9f9",
            }}
            error={!!errors.mobile}
            helperText={errors.mobile}
            inputProps={{ maxLength: 10, inputMode: "numeric" }} // optional input hints
          />
        </Box>

        <CustomTextField
          name="email"
          label="Email"
          value={form.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
          inputPropsStyle={{
            borderRadius: "40px",
            backgroundColor: "#f9f9f9",
          }}
        />
        <CustomTextField
          name="message"
          label="Work Description..."
          value={form.message}
          onChange={handleChange}
          multiline
          rows={4}
          error={!!errors.message}
          helperText={errors.message}
          inputPropsStyle={{
            borderRadius: "20px",
            backgroundColor: "#f9f9f9",
          }}
        />

        <Box className={classes.buttonWrapper}>
          <CustomButton text="Submit" onClick={handleSubmit} isLoading={loading} styles={{ padding: '8px 60px' }} />
        </Box>
      </Box>
    </Grid>
  );
};

export default ContactCard;
