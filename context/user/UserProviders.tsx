import React from "react";
import { UserLoggedInContext, UserLoginModalContext } from "./UserContexts";

interface UserProps {
  children: React.ReactNode;
}

export const UserLoginModalProvider = ({ children }: UserProps) => {
  const [open, setOpen] = React.useState<boolean>(false);

  return <UserLoginModalContext.Provider value={[open, setOpen]}>{children}</UserLoginModalContext.Provider>;
};

export const UserLoggedInProvider = ({ children }: UserProps) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false);

  return <UserLoggedInContext.Provider value={[isLoggedIn, setIsLoggedIn]}>{children}</UserLoggedInContext.Provider>;
};
