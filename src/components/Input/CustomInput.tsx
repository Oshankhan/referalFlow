import { Field, FieldProps } from "formik";
interface CustomInputInterface {
  name: string;
  props?: React.InputHTMLAttributes<HTMLInputElement>;
  required?: boolean;
}
const CustomInput: React.FC<CustomInputInterface> = ({
  name,
  props,
}: CustomInputInterface) => {
  return (
    <>
      <Field name={name}>
        {({ field }: FieldProps) => (
          <input
            {...field}
            {...props}
            className={` rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-black-500 bg-white   ${props?.className || ""}`}
          />
        )}
      </Field>
    </>
  );
};

export default CustomInput;
