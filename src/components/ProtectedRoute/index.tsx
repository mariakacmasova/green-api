import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { PATHS } from '../../constants/Paths';
import useStore from '../../store';

interface Props {
  redirectPath?: string;
  children: ReactNode;
}

const ProtectedRoute = ({ redirectPath = PATHS.LOGIN, children }: Props) => {
  const location = useLocation();

  const isAuthenticated = useStore((store) => store.isLoggedIn);

  if (!isAuthenticated) {
    return <Navigate to={redirectPath} state={{ from: location }} replace />
  }

  return <>{children}</>;
};

export default ProtectedRoute;
