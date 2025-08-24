import { createContext, useContext, useEffect, useState } from "react";
import { getCurrentUser } from "../services/appwrite";

const GlobalAuthContext = createContext();

export const useGlobalAuthContext = () => useContext(GlobalAuthContext);

const GlobalProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true);
      try {
        const currentUser = await getCurrentUser(); // your async function
        setIsLoggedIn(true);
        setUser(currentUser);
      } catch (error) {
        console.error("Error fetching user:", error);
        setIsLoggedIn(false);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <GlobalAuthContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, user, isLoading, setUser }}
    >
      {children}
    </GlobalAuthContext.Provider>
  );
};

export default GlobalProvider;
