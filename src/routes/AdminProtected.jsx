import React from "react";
import { AuthenticationContext } from "../contexts/authenticationContext/AuthenticationContext";
import { getClaimsFromToken } from "../components/helper/getClaims";
import { Navigate } from "react-router-dom";
import { useContext } from "react";

const AdminProtected = ({ children }) => {
  const { user } = useContext(AuthenticationContext);
  if (user === null) {
    return <Navigate to="/login" />;
  }
  const role = getClaimsFromToken(user).role;
  if (role !== "Admin") {
    return <Navigate to="/" />;
  }
  return <div>{children}</div>;
};

export default AdminProtected;
