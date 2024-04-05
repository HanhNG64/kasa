import React, { useState, createContext } from 'react';

export const AppartmentContext = createContext();

export const AppartmentProvider = ({ children }) => {
  const [appartment, setAppartment] = useState([]);

  return (
    <AppartmentContext.Provider value={{ appartment, setAppartment }}>
      {children}
    </AppartmentContext.Provider>
  );
};
