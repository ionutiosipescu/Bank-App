import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ProtectedRoutes from "./ProtectedRoutes";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import FormLoginPhone from "./features/login/FormLogIn/FormLoginPhone";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/sms" element={<FormLoginPhone />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
