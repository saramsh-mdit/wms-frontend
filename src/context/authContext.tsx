import { createContext, PropsWithChildren, useState } from "react";

type authContextType = {
  authenticated: boolean;
  isAdmin: boolean;
  loginHandler?: (token: string, isAdmin: boolean) => void;
};

const authContextInitialData = {
  authenticated: false,
  isAdmin: false,
};

export const AuthContext = createContext<authContextType>(
  authContextInitialData
);

export function AuthProvider({ children }: PropsWithChildren) {
  const [value, setValue] = useState(authContextInitialData);

  const loginHandler = (token: string, isAdmin: boolean = false) => {
    localStorage.setItem("token", token);
    setValue({
      authenticated: true,
      isAdmin,
    });
  };

  return (
    <AuthContext.Provider value={{ ...value, loginHandler }}>
      {children}
    </AuthContext.Provider>
  );
}
