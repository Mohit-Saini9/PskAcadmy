import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import StudentLogin from "./pages/StudentLogin";
import TrainerLogin from "./pages/TrainerLogin";
// import Navbar from "./components/Navbar";

import DashboardHome from "./components/Trainer/DashboardHome";
import DashbordHome from "./components/Student/DashboradHome";
import AdminLogin from "./pages/AdminLogin";
import Dashbord from "./components/Admin/Dashbord";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/student" element={<StudentLogin />} />
          <Route path="/trainer" element={<TrainerLogin />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/student/*" element={<DashbordHome />} />
          <Route path="/trainer/*" element={<DashboardHome />} />
          <Route path="/admin/*" element={<Dashbord />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
