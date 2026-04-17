import { createContext } from 'react';

type AuthContext = {
  session: null | UserAPIResponse;
  isLoading: boolean;
  remove: () => void;
  save: (session: UserAPIResponse) => void;
};

export const AuthContext = createContext({} as AuthContext);
