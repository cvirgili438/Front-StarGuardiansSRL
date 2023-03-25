import React, { createContext } from 'react';
import { Month } from '../constant/enum';
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
    const initialDayMonth = initialDay.split('/')[1];
    const day = initialDay.split('/')[0];
    if (Month[month] === initialDayMonth) {
      const filterWorkDays = calendar.filter((e: any) => e.dayOfWeek >= day);
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
        return arrayOfSchedules;
      } else throw new Error('Array is empty');
    } else throw new Error('The initial Day is not in the month ');
  };

  const value = { getFilteredSchedule };

  return (
    <CalendarContext.Provider value={value}>
      {children}
    </CalendarContext.Provider>
  );
}
