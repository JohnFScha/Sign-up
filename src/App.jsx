import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Success from "./components/Success";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />}/>
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  )
}

export default App
