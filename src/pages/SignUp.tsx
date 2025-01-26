import signIn from "../assets/signIn.png";
import { Link } from "react-router-dom";
import flower from "../assets/flower.png";
import SignUpForm from "../features/auth/components/sign-up/forms/SignUpForm";
import OTP from "../components/ui/OTP";
import { useState } from "react";

const SignUp = () => {
  const [isFormFilled, setIsFormFilled] = useState(false);
  const handleFormFilled = (value: boolean) => {
    setIsFormFilled(value);
  };

  return (
    <div className="bg-[#f0f0f0]  flex flex-col align-middle items-center justify-between min-h-screen">
      <h3 className="font-bold text-4xl  h-12 text-center font-[Fell] bg-white w-full ">
        Referal-Flow
      </h3>

      <div id="card" className="flex shadow-2xl shadow-gray-400 w-[60%]  ">
        <div
          id="cardLeftSide"
          className="w-[60%] bg-white flex flex-col items-start justify-start h-full "
        >
          <div className="p-10 ">
            <p className="font-[Fell] text-5xl font-medium mb-8 h-[30%]">
              Join family.
            </p>
            <p className="text-gray-400 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quam
              ea officia dicta corrupti illo, reiciendis suscipit reprehenderit
              itaque magnam ipsam animi totam dignissimos.
            </p>
          </div>

          <img
            src={signIn}
            className=" object-fill w-[50%] h-auto ml-32  "
            alt="sign-in"
          />
        </div>
        <div
          id="cardRightSide"
          className="bg-[#d8efee] flex flex-col items-center justify-between p-10 w-[40%]"
        >
          <p className="text-gray-400 text-sm ">
            Aready a member? &nbsp;
            <Link to="/sign-in" style={{ color: "#43b695" }}>
              Sign In
            </Link>
          </p>

          <SignUpForm handleFormField={handleFormFilled} />

          {isFormFilled && <OTP />}

          <Link
            to="/support"
            style={{
              fontSize: "14px",
              color: "#99a1af ",
              textDecoration: "underline",
            }}
            className="text-gray-400 text-sm"
          >
            Terms of Service
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img src={flower} className="h-auto w-[10%]" alt="flower" />
      </div>
    </div>
  );
};

export default SignUp;
