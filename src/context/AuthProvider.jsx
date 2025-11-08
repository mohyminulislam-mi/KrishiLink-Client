import React from "react";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ Children }) => {
  const authInfo = {};
  return (
    <div>
      <AuthContext>{Children}</AuthContext>
    </div>
  );
};

export default AuthProvider;
