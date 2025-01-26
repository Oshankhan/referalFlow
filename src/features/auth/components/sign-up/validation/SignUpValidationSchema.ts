import * as Yup from "yup";

export const signUpValidationSchema = Yup.object({
  name: Yup.string()
    .max(15, "Name must be 15 characters or less")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password must be 20 characters or less")
    .required("Password is required"),
  conformPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});
