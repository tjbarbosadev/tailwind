import { AuthProvider } from './providers/AuthProvider';
import { Routes } from './routes';

export function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}
