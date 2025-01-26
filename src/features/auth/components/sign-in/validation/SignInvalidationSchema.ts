import * as Yup from "yup";

export const signInValidationSchema = Yup.object({
  name: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Name is required"),
  password: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Password is required"),
});
