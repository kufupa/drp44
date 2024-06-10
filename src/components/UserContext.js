import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);

  // Generate a unique ID on initial render
  useEffect(() => {
    if (!userId) {
      const newUserId = Date.now();
      setUserId(newUserId);
    }
  }, []);

  return (
    <UserContext.Provider value={userId}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserId = () => useContext(UserContext);
