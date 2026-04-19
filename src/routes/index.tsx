import { lazy, Suspense } from 'react';
import { BrowserRouter } from 'react-router';
import { Loading } from '../components/Loading';
import { useAuth } from '../hooks/useAuth';

const ManagerRoutes = lazy(() =>
  import('./ManagerRoutes').then((m) => ({ default: m.ManagerRoutes })),
);
const EmployeeRoutes = lazy(() =>
  import('./EmployeeRoutes').then((m) => ({ default: m.EmployeeRoutes })),
);
const AuthRoutes = lazy(() =>
  import('./AuthRoutes').then((m) => ({ default: m.AuthRoutes })),
);

export function Routes() {
  const { session, isLoading } = useAuth();

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

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>{renderRoutes()}</Suspense>
    </BrowserRouter>
  );
}
