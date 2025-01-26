import { Form, Formik } from "formik";
import CustomInput from "../../../../../components/Input/CustomInput";
import { initialValue } from "../constant/SignInitialValue";
import { signInValidationSchema } from "../validation/SignInvalidationSchema";
import CustomInputErrorLogger from "../../../../../components/ErrorMessage/CustomInputErrorLogger";

const SignInForm = () => {
  return (
    <div className="">
      <Formik
        initialValues={initialValue}
        validationSchema={signInValidationSchema}
        onSubmit={(value) => {
          console.log(value);
        }}
      >
        <Form>
          <div className="flex flex-col items-start justify-start space-y-1">
            <label htmlFor="name">Email</label>
            <CustomInput
              name="name"
              props={{
                placeholder: "Enter your name",
              }}
            />
            <CustomInputErrorLogger name="name" style="text-gray-400 text-xs" />
          </div>
          <br />
          <div className="flex flex-col items-start justify-start space-y-1">
            <label htmlFor="password">Password</label>

            <CustomInput
              name="password"
              props={{
                placeholder: "Enter your password",
              }}
            />
            <CustomInputErrorLogger
              name="password"
              style="text-gray-400 text-xs"
            />
          </div>
          <br />
          <button className="bg-white text-white w-full" type="submit">
            Sign In
          </button>
        </Form>
      </Formik>
      <div></div>
    </div>
  );
};

export default SignInForm;
