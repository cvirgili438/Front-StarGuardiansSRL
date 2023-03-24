import React, { useReducer } from 'react';
import { Month } from '../../constant/enum';
import { initialState, obtainDays, reducer } from '../../utils/calendar.utils';

export default function CalendarCard(props: any) {
  const { calendar } = props;
  const { year, month } = calendar;
  const [state, dispatch] = useReducer(reducer, initialState);

  return <div></div>;
}
