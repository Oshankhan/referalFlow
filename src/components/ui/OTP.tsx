import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const OTP = () => {
  const [otpValue, setOtpValue] = useState<string[]>(new Array(6).fill(""));
  const randomOtp = "123456"; // Replace with your generated OTP
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const { value } = e.target;

    // Ensure only one character is added
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otpValue];
    newOtp[index] = value;
    setOtpValue(newOtp);

    // Automatically focus on the next input
    if (value && index < otpValue.length - 1) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.key === "Backspace" && otpValue[index] === "" && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pasteData = e.clipboardData.getData("text");
    const digits = pasteData.split("").slice(0, otpValue.length); // Limit to the number of inputs

    if (digits.every((char) => /^\d$/.test(char))) {
      setOtpValue(digits);
    }
  };

  const verifyOtp = () => {
    const enteredOtp = otpValue.join(""); // Combine array values into a string
    if (enteredOtp === randomOtp) {
      navigate("/home"); // Redirect to the homepage
    } else {
      alert("Invalid OTP! Please try again.");
    }
  };

  return (
    <div>
      <div className="flex space-x-2.5 my-4">
        {otpValue.map((item, index) => (
          <input
            className="bg-white h-8 w-8 text-center text-lg font-bold shadow-md rounded-sm focus:outline-none focus:ring focus:ring-blue-300"
            key={index}
            id={`otp-${index}`}
            type="text"
            maxLength={1}
            value={item}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={handlePaste}
          />
        ))}
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-sm hover:bg-blue-600 focus:ring focus:ring-blue-300"
        onClick={verifyOtp}
      >
        Verify OTP
      </button>
    </div>
  );
};

export default OTP;
