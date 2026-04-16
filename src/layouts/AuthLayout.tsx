import { Outlet } from 'react-router';
import logoSvg from '../assets/logo.svg';

export function AuthLayout() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-gray-400">
      <main className="flex flex-col items-center rounded-md bg-gray-500 p-8 sm:min-w-115.5">
        <img className="my-8" src={logoSvg} alt="Logo" />
        <Outlet />
      </main>
    </div>
  );
}
