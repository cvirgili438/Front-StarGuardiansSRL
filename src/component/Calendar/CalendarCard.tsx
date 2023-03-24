import React, { useEffect, useReducer } from 'react';
import { Month } from '../../constant/enum';
import { initialState, obtainDays, reducer } from '../../utils/calendar.utils';

export default function CalendarCard(props: any) {
  const { calendar, year, month } = props;
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(month, year);
  useEffect(() => {
    dispatch({ type: month });
  }, [month]);
  console.log(obtainDays(year, state.month));

  return <div></div>;
}
