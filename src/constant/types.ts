import { Month } from './enum';

export interface CalendarCardType {
  calendar: Date;
}

export interface CalendarTD {
  month: number;
  year: number;
  id: string;
  token: string;
}
export type CalendarObject = {
  startTime: Date;
  endTime: Date;
};
export type returnSchedule = {
  dayOfWeek: number;
  endTime: string;
  month: Month;
  startTime: string;
  year: number;
};
