'use client';
import { createContext, useState, useContext, useEffect } from 'react';

// Create the context
const PhoneContext = createContext();

// Create a provider
export const PhoneProvider = ({ children }) => {
  const [isPhone, setIsPhone] = useState(null);

  useEffect(() => {
    console.log('isPhone state:', isPhone);
  }, [isPhone]); // Log whenever isPhone changes

  return (
    <PhoneContext.Provider value={{ isPhone, setIsPhone }}>
      {children}
    </PhoneContext.Provider>
  );
};

// Custom hook to use the context
export const usePhone = () => useContext(PhoneContext);
