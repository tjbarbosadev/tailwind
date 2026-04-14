import { Refund } from '../pages/Refund';
import { NotFound } from '../pages/NotFound';
import { Route, Routes } from 'react-router';
import { AppLayout } from '../layouts/AppLayout';

export function EmployeeRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Refund />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
