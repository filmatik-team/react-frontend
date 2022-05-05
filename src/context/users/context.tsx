import React from "react";

export const UserLoginModalContext = React.createContext<[boolean, React.Dispatch<React.SetStateAction<boolean>>]>([
  false,
  () => {},
]);

export const UserLoggedInContext = React.createContext<[boolean, React.Dispatch<React.SetStateAction<boolean>>]>([
  false,
  () => {},
]);

export const UserSubscriptionsContext = React.createContext<[boolean, React.Dispatch<React.SetStateAction<boolean>>]>([
  true,
  () => {},
]);
