import { ReactNode } from 'react';
import { Auth } from '../App';
import { UserInput } from '../component/LoginForm/LoginForm';
import { CalendarTD, returnSchedule } from '../constant/types';

export interface UserSchedule {
  token: string;
}
export interface getFilteredScheduleI {
  calendar: [];
  year: number;
  month: number;
  initialDay: string;
}
export interface getFilteredScheduleReturn {
  date: Date;
  place: any;
  startWorking: string;
  endWorking: string;
}
export interface CalendarContextI {
  getFilteredSchedule: (
    body: getFilteredScheduleI
  ) => getFilteredScheduleReturn[];
}

export interface CalendarContextProviderProps {
  children: ReactNode;
}

export interface AppContexts {
  auth: (obj: UserInput) => Promise<Auth | undefined>;
  session: string;
  setSession: React.Dispatch<React.SetStateAction<string>>;
  getUserSchedule: (body: CalendarTD) => Promise<returnSchedule[]>;
}
export interface AppContextProviderProps {
  children: ReactNode;
}
