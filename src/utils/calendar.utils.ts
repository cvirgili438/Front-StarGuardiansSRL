import { Month } from '../constant/enum';
import {
  getFilteredScheduleI,
  getFilteredScheduleReturn,
} from '../interfaces/Context.interfaces';

export function obtainDays(year: number, month: number) {
  const date = new Date(year, month + 1, 0);
  return date.getDate();
}
export interface State {
  month: number;
}
export const initialState: State = {
  month: Infinity,
};
type Action =
  | { type: 'January' }
  | { type: 'February' }
  | { type: 'March' }
  | { type: 'April' }
  | { type: 'May' }
  | { type: 'June' }
  | { type: 'July' }
  | { type: 'August' }
  | { type: 'September' }
  | { type: 'October' }
  | { type: 'November' }
  | { type: 'December' };
export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'January':
      return {
        month: Month.January,
      };
    case 'February':
      return {
        month: Month.February,
      };
    case 'March':
      return {
        month: Month.March,
      };
    case 'April':
      return {
        month: Month.April,
      };
    case 'May':
      return {
        month: Month.May,
      };
    case 'June':
      return {
        month: Month.June,
      };
    case 'July':
      return {
        month: Month.July,
      };
    case 'August':
      return {
        month: Month.August,
      };
    case 'September':
      return {
        month: Month.September,
      };
    case 'October':
      return {
        month: Month.October,
      };
    case 'November':
      return {
        month: Month.November,
      };
    case 'December':
      return {
        month: Month.December,
      };

    default:
      return {
        ...state,
      };
  }
};

export function setArraySchedule(
  year: number,
  month: number,
  calendar: [],
  initialDay: string,
  func: (body: getFilteredScheduleI) => getFilteredScheduleReturn[]
) {
  const final = func({ year, month, calendar, initialDay });
  return final;
}
