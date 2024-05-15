import React, { useEffect, useState } from "react";
import { initalizeDB } from "./backend/db/mockdb";
import Spinner from "react-bootstrap/Spinner";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import SidebarOne from "./components/Sidebar_one";
import ProjectSettings from "./Pages/ProjectSettings/ProjectSettings";
import NotFoundPage from "./components/NotFound";
import HomePage from "./Pages/HomePage/HomePage";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Insert sample values into DB on application start
    initalizeDB();
    setLoading(false);
  }, []);

  return loading ? (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  ) : (
    <Router>
      {/* Left most side bar component of the application */}
      <SidebarOne />
      {/* Adjoing side bar */}
      <SideBar />
      {/* Render component based on the url path. Defaults to render HomPage with Kanband Board */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project-settings" element={<ProjectSettings />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
