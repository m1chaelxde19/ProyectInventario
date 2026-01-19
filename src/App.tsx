import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import DashboardAdmin from "./layout/DashboardAdmin.tsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path={'/admin/panel'} element={<DashboardAdmin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
