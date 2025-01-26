import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <>
      <Routes>
        {/* Public Route */}
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />

        {/* Protected Route */}
        <Route path="/home" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
