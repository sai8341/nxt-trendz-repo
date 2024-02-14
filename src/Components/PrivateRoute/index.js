import React from "react";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element: Element, ...rest }) => {
  const jwtToken = Cookies.get("jwt_token");

  if (jwtToken === undefined) {
    return <Navigate to="/login" />;
  }

  return <Element {...rest} />;
  
};

export default PrivateRoute;