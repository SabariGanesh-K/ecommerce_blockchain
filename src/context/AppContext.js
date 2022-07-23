import React, { createContext, useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
export const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const { authenticate, isAuthenticated, user, Moralis } = useMoralis();
  const [currentuser, setcurrentuser] = useState("");
  useEffect(() => {
    checkWalletConnection();
  }, [isAuthenticated]);

  const checkWalletConnection = async () => {
    if (isAuthenticated) {
      const address = user.get("ethAddress");
      setcurrentuser(address);
    } else {
      setcurrentuser("");
    }
  };

  const connectWallet = async () => {
    if (!isAuthenticated) {
      try {
        await authenticate({
          signingMessage: "Log In Using Moralis",
        });
      } catch (error) {
        console.error(error);
      }
    }
  };

  const disconnectWallet = async () => {
    await Moralis.User.logOut();
    setcurrentuser("");
  };

  return (
    <AppContext.Provider
      value={{ currentuser, connectWallet, disconnectWallet }}
    >
      {children}
    </AppContext.Provider>
  );
};
