import { useRoutes, Navigate } from 'react-router-dom';

import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import { PATHS } from './constants/Paths';
import Chat from './pages/Chat';
import Login from './pages/Login';

const App = () => {
  const element = useRoutes([
    {
      path: PATHS.LOGIN,
      element: <Login />,
    },
    {
      path: PATHS.CHAT,
      element: (
        <ProtectedRoute>
          <Chat />
        </ProtectedRoute>
      ),
    },
    {
      path: '*',
      element: <Navigate to={PATHS.LOGIN} />,
    },
  ]);

  return <Layout>{element}</Layout>;
};

export default App;
