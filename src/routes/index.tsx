import { BrowserRouter } from 'react-router';
import { ManagerRoutes } from './ManagerRoutes';
import { AuthRoutes } from './AuthRoutes';
import { Loading } from '../components/Loading';
import { EmployeeRoutes } from './EmployeeRoutes';
import { useAuth } from '../hooks/useAuth';

const isLoading = false;
const session = {
  user: {
    role: '',
  },
};

export function Routes() {
  const { session } = useAuth();

  function renderRoutes() {
    switch (session?.user.role) {
      case 'manager':
        return <ManagerRoutes />;
      case 'employee':
        return <EmployeeRoutes />;
      default:
        return <AuthRoutes />;
    }
  }

  if (isLoading) {
    return <Loading />;
  }

  return <BrowserRouter>{renderRoutes()}</BrowserRouter>;
}
