// src/components/ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ coordinator, children }) => {
  if (!coordinator || !coordinator.name) {
    // If not logged in as coordinator, redirect
    return <Navigate to="/coordinator/home" />;
  }
  return children;
};

export default ProtectedRoute;
