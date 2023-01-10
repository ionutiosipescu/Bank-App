import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ProtectedRoutes from "./ProtectedRoutes";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
