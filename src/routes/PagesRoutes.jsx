import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { TimerPage } from "../pages/TiemrPages";

export const InputRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/secondPage" element={<TimerPage />} />
    </Routes>
  );
};
