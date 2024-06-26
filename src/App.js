import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import FillFormPage from "./routes/FillFormPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fillform" element={<FillFormPage />} />
      </Routes>
    </Router>
  );
}

export default App;
