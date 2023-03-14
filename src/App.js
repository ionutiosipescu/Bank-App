import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ProtectedRoutes from "./ProtectedRoutes";
import ConfirmEmail from "./pages/ConfirmEmail/ConfirmEmail";
import ConfirmPassword from "./pages/ConfirmPassword/ConfirmPassword";
import ChangePassword from "./pages/ChangePassword/ChangePassword";
import OtpConfirm from "./pages/OtpConfirm/OtpConfirm";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/confirm-otp" element={<OtpConfirm />} />
      <Route path="/confirm-mail" element={<ConfirmEmail />} />
      <Route path="/confirm-password" element={<ConfirmPassword />} />
      <Route path="/changed-password" element={<ChangePassword />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
