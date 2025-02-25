import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Features from "./components/Feature/Features";
import Solution from "./components/Solution/Solution";

const Main = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="feature" element={<Features />} />
          <Route path="solution" element={<Solution />} />
          {/* <Route path="pricing" element={<Pricing />} />
          <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </Router>
  );
};

export default Main;
