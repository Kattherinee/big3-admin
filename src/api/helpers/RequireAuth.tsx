import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../../core/redux/store/store";

export const RequireAuth = ({ children }: { children: ReactNode }) => {
  const token = useSelector((s: RootState) => s.user.token);
  if (!token) return <Navigate to="/auth/signIn" />;
  return children;
};
