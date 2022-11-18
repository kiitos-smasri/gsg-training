import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import NoMatch from "./pages/404";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="about" element={<About />} />
          <Route index element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
