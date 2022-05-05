import React from "react";
import { UserLoggedInContext, UserLoginModalContext } from "./contexts";

interface UsersProps {
  children: React.ReactNode;
}

export const UserLoginModalProvider = ({ children }: UsersProps) => {
  const [open, setOpen] = React.useState<boolean>(false);

  return <UserLoginModalContext.Provider value={[open, setOpen]}>{children}</UserLoginModalContext.Provider>;
};

export const UserLoggedInProvider = ({ children }: UsersProps) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false);

  return <UserLoggedInContext.Provider value={[isLoggedIn, setIsLoggedIn]}>{children}</UserLoggedInContext.Provider>;
};
