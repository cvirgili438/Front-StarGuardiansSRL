import React, { useContext, useEffect, useReducer, useState } from 'react';
import { CalendarContext } from '../../context/CalendarContext';
import { getFilteredScheduleReturn } from '../../interfaces/Context.interfaces';

import {
  initialState,
  reducer,
  setArraySchedule,
} from '../../utils/calendar.utils';

export default function CalendarCard(props: any) {
  const { getFilteredSchedule } = useContext(CalendarContext);
  const { calendar, year, month, initialDay } = props;
  const [schedule, setSchedule] = useState<getFilteredScheduleReturn[]>();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: month });
  }, [month]);
  useEffect(() => {
    try {
      if (calendar.length > 0) {
        const arraySchedule = setArraySchedule(
          year,
          state.month,
          calendar,
          initialDay,
          getFilteredSchedule
        );
        setSchedule(arraySchedule);
      }
    } catch (error) {
      console.log(error);
    }
  }, [state, initialDay, getFilteredSchedule, calendar, year]);
  console.log(schedule);
  return (
    <div>
      <table></table>
    </div>
  );
}
