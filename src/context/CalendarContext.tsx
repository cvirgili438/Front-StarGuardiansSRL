import React, { createContext, ReactNode } from 'react';

interface CalendarContextI {
  some: () => void;
}

interface CalendarContextProviderProps {
  children: ReactNode;
}

export const CalendarContext = createContext<CalendarContextI>(
  {} as CalendarContextI
);

export function CalendarContextProvider({
  children,
}: CalendarContextProviderProps) {
  const some = () => {
    console.log('algo');
  };
  const value = {
    some,
  };

  return (
    <CalendarContext.Provider value={value}>
      {children}
    </CalendarContext.Provider>
  );
}
