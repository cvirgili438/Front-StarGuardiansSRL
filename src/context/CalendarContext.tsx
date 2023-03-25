import React, { createContext } from 'react';
import {
  CalendarContextI,
  CalendarContextProviderProps,
} from '../interfaces/Context.interfaces';

export const CalendarContext = createContext<CalendarContextI>(
  {} as CalendarContextI
);

export function CalendarContextProvider({
  children,
}: CalendarContextProviderProps) {
  const value = {};

  return (
    <CalendarContext.Provider value={value}>
      {children}
    </CalendarContext.Provider>
  );
}
