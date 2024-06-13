import { PropsWithChildren } from "react";
import { AuthProvider } from "./authContext";

const ContextWrapper = ({ children }: PropsWithChildren) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default ContextWrapper;
