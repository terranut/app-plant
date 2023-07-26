import { useRouter } from 'next/router';
import React, { createContext, useEffect, useState } from 'react';

const GardenContext = createContext({
  lessonSelected: '1',
});

const GardenProvider = ({ children }: { children: JSX.Element }) => {
  const router = useRouter();
 

  useEffect(() => {
    
  }, []);

  const contextValue = {
    'lessonSelected': '1',
  };

  return <GardenContext.Provider value={contextValue}>{children}</GardenContext.Provider>;
};

export { GardenContext, GardenProvider };
