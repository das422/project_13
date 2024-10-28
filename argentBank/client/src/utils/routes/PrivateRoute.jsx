import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const { token } = useSelector((state) => state.login);
  if (token) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};