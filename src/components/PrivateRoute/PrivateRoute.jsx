import { Navigate, Outlet } from "react-router-dom";
import { routesPath } from "../../lib/routesPath";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export const PrivateRoute = () => {
  const { user } = useContext(UserContext);

  return user ? <Outlet /> : <Navigate to={routesPath.LOGIN} />;

  // return user ? <Outlet /> : <Navigate to = {routesPath.LOGIN} />;
};
