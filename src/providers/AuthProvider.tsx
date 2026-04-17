import { useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { api } from '../services/api';

const LOCAL_STORAGE_KEY = '@refund';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<null | UserAPIResponse>(null);
  const [isLoading, setIsLoading] = useState(true);

  function save(session: UserAPIResponse) {
    localStorage.setItem(
      `${LOCAL_STORAGE_KEY}:user`,
      JSON.stringify(session.user),
    );
    localStorage.setItem(`${LOCAL_STORAGE_KEY}:token`, session.token);

    api.defaults.headers.common['Authorization'] = `Bearer ${session.token}`;

    setSession(session);
  }

  function remove() {
    localStorage.removeItem(`${LOCAL_STORAGE_KEY}:user`);
    localStorage.removeItem(`${LOCAL_STORAGE_KEY}:token`);

    setSession(null);
    window.location.assign('/');
  }

  function loadUser() {
    const user = localStorage.getItem(`${LOCAL_STORAGE_KEY}:user`);
    const token = localStorage.getItem(`${LOCAL_STORAGE_KEY}:token`);

    if (user && token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setSession({
        user: JSON.parse(user),
        token,
      });
    }
    setIsLoading(false);
  }

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <AuthContext.Provider value={{ session, save, isLoading, remove }}>
      {children}
    </AuthContext.Provider>
  );
}
