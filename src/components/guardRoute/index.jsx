import * as React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function GuardRoute({ children }) {
  let { token } = useSelector((state) => state.auth);
  if (children) {
    if (token) return <Navigate to="/dashboard" replace={true} />;
  } else {
    if (!token) return <Navigate to="/login" replace={true} />;
  }
  return children ;
}
