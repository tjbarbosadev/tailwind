import { createContext } from 'react';

type AuthContext = {
  session: null | UserAPIResponse;
};

export const AuthContext = createContext({} as AuthContext);
