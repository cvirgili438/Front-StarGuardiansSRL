import React, { useContext, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useLocalStorage } from '../../hooks/useApp';
import { type Auth } from '../../App';
import { AppContext } from '../../context/AppContext';
import style from './Calendar.module.css';
import CalendarCard from './CalendarCard';
import { returnSchedule } from '../../constant/types';

export default function Calendar() {
  const { getUserSchedule } = useContext(AppContext);
  const [user] = useLocalStorage<Auth>('User', Object);
  console.log(process.env.REACT_APP_URL);
  const [date, setDate] = useState({
    date: new Date(),
  });
  const [calendar, setCalendar] = useState([] as returnSchedule[]);
  function handleDate(e: Date) {
    setDate({ date: e });
  }
  // async function getSchedule(body: CalendarTD): Promise<void> {
  //   const response = await getUserSchedule(body);

  //   console.log(response);
  // }
  useEffect(() => {
    // getSchedule({
    //   id: user.user,
    //   month: date.date.getMonth(),
    //   token: user.token,
    //   year: date.date.getFullYear(),
    // });
    getUserSchedule({
      id: user.user,
      month: date.date.getMonth(),
      token: user.token,
      year: date.date.getFullYear(),
    }).then((r) => {
      setCalendar(r);
    });
  }, [date, user, getUserSchedule]);

  return (
    <div className={style.main_div}>
      calendar
      <DatePicker selected={date.date} onChange={handleDate} />
      <CalendarCard calendar={calendar} />
    </div>
  );
}
