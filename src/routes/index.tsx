import { BrowserRouter } from 'react-router';
// import { AuthRoutes } from './authRoutes';
// import { EmployeeRoutes } from './EmployeeRoutes';
import { ManagerRoutes } from './ManagerRoutes';

export function Routes() {
  return (
    <BrowserRouter>
      <ManagerRoutes />
    </BrowserRouter>
  );
}
