import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import ProtectedRoutes from "./ProtectedRoutes";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
