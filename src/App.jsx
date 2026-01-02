import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import StudentLogin from "./pages/StudentLogin";
import TrainerLogin from "./pages/TrainerLogin";

import DashboardHome from "./components/Trainer/DashboardHome";
import DashbordHome from "./components/Student/DashboradHome";
import AdminLogin from "./pages/AdminLogin";
import DashbordHomeA from "./components/Admin/DashbordHomeA";

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
          <Route path="/admin/*" element={<DashbordHomeA />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
