import { ReactNode } from 'react';
import { Auth } from '../App';
import { UserInput } from '../component/LoginForm/LoginForm';
import { CalendarTD, returnSchedule } from '../constant/types';

export interface UserSchedule {
  token: string;
}

export interface CalendarContextI {}

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
