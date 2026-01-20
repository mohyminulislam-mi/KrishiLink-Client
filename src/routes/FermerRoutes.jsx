import React from "react";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";
import Loading from "../loading/Loading";
import Forbidden from "../components/Forbidden";

const FermerRoutes = ({ children }) => {
  const { loading } = useAuth();
  const { role, roleLoading } = useRole();

  if (loading || roleLoading) {
    return <Loading />;
  }
  if (role !== "fermer") {
    return <Forbidden />;
  }
  return children;
};

export default FermerRoutes;
