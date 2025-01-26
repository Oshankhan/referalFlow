import { ErrorMessage } from "formik";
interface CustomInputErrorLoggerInterface {
  name: string;
  style: string;
}

const CustomInputErrorLogger: React.FC<CustomInputErrorLoggerInterface> = ({
  name,
  style,
}: CustomInputErrorLoggerInterface) => {
  return (
    <div>
      <ErrorMessage name={name} component="div" className={style} />
    </div>
  );
};

export default CustomInputErrorLogger;
