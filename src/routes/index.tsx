import { BrowserRouter } from 'react-router';
// import { AuthRoutes } from './authRoutes';
import { EmployeeRoutes } from './EmployeeRoutes';

export function Routes() {
  return (
    <BrowserRouter>
      {/* <AuthRoutes /> */}
      <EmployeeRoutes />
    </BrowserRouter>
  );
}
