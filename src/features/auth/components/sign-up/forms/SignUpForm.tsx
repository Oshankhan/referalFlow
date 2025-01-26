import { Form, Formik } from "formik";
import CustomInput from "../../../../../components/Input/CustomInput";
import { initialValue } from "../constant/SignUpInitalValues";

import CustomInputErrorLogger from "../../../../../components/ErrorMessage/CustomInputErrorLogger";
import { signUpValidationSchema } from "../validation/SignUpValidationSchema";
interface SignUpInterface {
  handleFormField: (value: boolean) => void;
}
const SignUpForm: React.FC<SignUpInterface> = ({
  handleFormField,
}: SignUpInterface) => {
  return (
    <div className="">
      <Formik
        initialValues={initialValue}
        validationSchema={signUpValidationSchema}
        onSubmit={(value) => {
          handleFormField(true);
        }}
      >
        <Form>
          <div className="flex flex-col items-start justify-start space-y-1">
            <label htmlFor="name">Name</label>
            <CustomInput
              name="name"
              props={{
                placeholder: "Enter your name",
              }}
            />
            <CustomInputErrorLogger name="name" style="text-gray-400 text-xs" />
          </div>
          <div className="flex flex-col items-start justify-start space-y-1">
            <label htmlFor="name">Email</label>
            <CustomInput
              name="email"
              props={{
                placeholder: "Enter your name",
              }}
            />
            <CustomInputErrorLogger
              name="email"
              style="text-gray-400 text-xs"
            />
          </div>

          <div className="flex flex-col items-start justify-start space-y-1">
            <label htmlFor="password">Password</label>

            <CustomInput
              name="password"
              props={{
                type: "password",
                placeholder: "Enter your password",
              }}
            />
            <CustomInputErrorLogger
              name="password"
              style="text-gray-400 text-xs"
            />
          </div>
          <div className="flex flex-col items-start justify-start space-y-1">
            <label htmlFor="password">Conform Password</label>

            <CustomInput
              name="conformPassword"
              props={{
                type: "password",

                placeholder: "Enter your password",
              }}
            />
            <CustomInputErrorLogger
              name="conformPassword"
              style="text-gray-400 text-xs"
            />
          </div>
          <button className="bg-white text-white w-full mt-4" type="submit">
            Sign In
          </button>
        </Form>
      </Formik>
      <div></div>
    </div>
  );
};

export default SignUpForm;
