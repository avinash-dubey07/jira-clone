import React, { useEffect, useState } from "react";
import { initalizeDB } from "./backend/db/mockdb";
import Spinner from "react-bootstrap/Spinner";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import ProjectSettings from "./Pages/ProjectSettings/ProjectSettings";
import NotFoundPage from "./Pages/PageNotFound/NotFound";

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
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project-settings" element={<ProjectSettings />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
