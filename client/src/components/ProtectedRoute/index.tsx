import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { roleSelector } from "../../store/auth/selector";

interface ProtectedProps {
  protectAuth: boolean;
  children: JSX.Element;
}

const ProtectedFromAuth: FC<Pick<ProtectedProps, "children">> = ({
  children,
}) => {
  const role = useSelector(roleSelector);

  if (!role) {
    return <Navigate replace to="/login" />;
  }
  return children;
};

const ProtectedWithoutAuth: FC<Pick<ProtectedProps, "children">> = ({
  children,
}) => {
  const role = useSelector(roleSelector);

  if (role) {
    return <Navigate replace to={`/${role}`} />;
  }
  return children;
};

const Protected: FC<ProtectedProps> = ({ protectAuth, children }) => {
  if (protectAuth) {
    return <ProtectedFromAuth>{children}</ProtectedFromAuth>;
  }

  return <ProtectedWithoutAuth>{children}</ProtectedWithoutAuth>;
};

export default Protected;
