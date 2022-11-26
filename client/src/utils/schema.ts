import * as Yup from "yup";

export const contactSchema = Yup.object().shape({
    firstname: Yup.string()
      .required("First name is required")
      .max(25, "Maximum of 25 characters"),
    lastname: Yup.string()
      .required("Last name is required")
      .max(25, "Maximum of 25 characters"),
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email")
      .max(50, "Maximum of 50 characters"),
    message: Yup.string()
      .required("Message is required.")
      .max(500, "Maximum of 500 characters"),
  });