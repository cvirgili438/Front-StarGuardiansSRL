import React, { createContext } from 'react';
import {
  CalendarContextI,
  CalendarContextProviderProps,
  getFilteredScheduleI,
  getFilteredScheduleReturn,
} from '../interfaces/Context.interfaces';

export const CalendarContext = createContext<CalendarContextI>(
  {} as CalendarContextI
);

export function CalendarContextProvider({
  children,
}: CalendarContextProviderProps) {
  const getFilteredSchedule = (
    body: getFilteredScheduleI
  ): getFilteredScheduleReturn[] => {
    const { year, month, calendar, initialDay } = body;
    const filterWorkDays = calendar.filter(
      (e: any) => e.dayOfWeek >= initialDay
    );
    const arrayOfSchedules = filterWorkDays.map((e: any) => {
      const start = e.startTime.split(':', 2).join(':');

      const end = e.endTime.split(':', 2).join(':');
      const date = {
        date: new Date(year, month, e.dayOfWeek),
        place: e.workPlace,
        startWorking: start,
        endWorking: end,
      };
      return date;
    });
    if (arrayOfSchedules.length > 0) {
      console.log(arrayOfSchedules);
      return arrayOfSchedules;
    } else throw new Error('Array is empty');
  };
  const value = { getFilteredSchedule };

  return (
    <CalendarContext.Provider value={value}>
      {children}
    </CalendarContext.Provider>
  );
}
