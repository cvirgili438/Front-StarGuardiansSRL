import { Month } from '../constant/enum';

export function obtainDays(year: number, month: number) {
  const date = new Date(year, month + 1, 0);
  return date.getDate();
}
export interface State {
  month: number;
}
export const initialState: State = {
  month: 30,
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
    case Month[0]:
      return {
        month: Month.January,
      };
    case Month[1]:
      return {
        month: Month.February,
      };
    case Month[2]:
      return {
        month: Month.March,
      };
    case Month[3]:
      return {
        month: Month.April,
      };
    case Month[4]:
      return {
        month: Month.May,
      };
    case Month[5]:
      return {
        month: Month.June,
      };
    case Month[6]:
      return {
        month: Month.July,
      };
    case Month[7]:
      return {
        month: Month.August,
      };
    case Month[8]:
      return {
        month: Month.September,
      };
    case Month[9]:
      return {
        month: Month.October,
      };
    case Month[10]:
      return {
        month: Month.November,
      };
    case Month[11]:
      return {
        month: Month.December,
      };

    default:
      throw new Error();
  }
};
