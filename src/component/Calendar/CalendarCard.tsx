import React, {
  useContext,
  useEffect,
  useReducer,
  useState,
  CSSProperties,
} from 'react';
import { CalendarContext } from '../../context/CalendarContext';
import { getFilteredScheduleReturn } from '../../interfaces/Context.interfaces';
import style from './Calendar.module.css';

import {
  days,
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

  return (
    <div>
      <h1>Schedule since {initialDay}</h1>
      <ol className={style.ol}>
        {days.map((e) => {
          return (
            <li key={e} className={style.day_name}>
              {e}
            </li>
          );
        })}
        {state &&
          state.month !== Infinity &&
          year !== false &&
          renderLi(year, state.month, schedule as getFilteredScheduleReturn[])}
      </ol>
    </div>
  );
}
function renderLi(
  year: number,
  month: number,
  schedule: getFilteredScheduleReturn[]
) {
  if (schedule !== undefined) {
    let work: number[] = schedule.map((e) => {
      return e.date.getDate();
    });

    let date = new Date(year, month + 1, 0);
    let date2 = new Date(year, month + 1, 1);
    let array = new Array(date.getDate()).fill(1);

    let first: any = date2.getDay();

    const liStyle = {
      '--first-day-start': first + 1,
    } as React.CSSProperties;
    return array.map((e, i) => {
      let verify = work.includes(i + 1);
      if (!verify) {
        return (
          <li
            key={i}
            className={i === 0 ? `${style.first_day}` : ''}
            style={liStyle as CSSProperties}
          >
            {i + 1}
          </li>
        );
      } else {
        return (
          <li
            className={i === 0 ? `${style.first_day}` : style.work}
            style={liStyle as CSSProperties}
          >
            {i + 1}
          </li>
        );
      }
    });
  }
}
