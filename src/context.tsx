import React from "react";

export const UserLoginModalContext = React.createContext<[boolean, React.Dispatch<React.SetStateAction<boolean>>]>([
  false,
  () => {},
]);

export const FeedbackModalContext = React.createContext<[boolean, React.Dispatch<React.SetStateAction<boolean>>]>([
  false,
  () => {},
]);

export const LoggedInContext = React.createContext<[boolean, React.Dispatch<React.SetStateAction<boolean>>]>([
  true,
  () => {},
]);
