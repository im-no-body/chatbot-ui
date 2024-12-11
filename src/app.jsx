import React from "react";
import { Route, Routes } from "react-router-dom";

import UploadPage from "./components/UploadPage";
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <Routes>
      <Route path="/upload" element={<UploadPage />} />
      <Route path="*" element={<Chatbot />} />
    </Routes>
  );
}

export default App;
