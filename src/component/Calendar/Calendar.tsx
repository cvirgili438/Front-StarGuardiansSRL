import React, { useContext, useEffect, useState } from "react";
import { Month } from "../../constant/enum";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLocalStorage } from "../../hooks/useApp";
import { Auth } from "../../App";
import { AppContext } from "../../context/AppContext";
import style from "./Calendar.module.css";
import CalendarCard from "./CalendarCard";


export default function Calendar() {
  const api = useContext(AppContext);
  const [user, setUser] = useLocalStorage<Auth>("User", Object);
  console.log(process.env.REACT_APP_URL);
  const [date, setDate] = useState({
    date: new Date(),
  });
  function handleDate(e: Date) {
    setDate({ date: e });    
  }
  useEffect(() => {

  }, []);
  
  return (
    <div className={style.main_div}>
      calendar
      
      <DatePicker selected={date.date} onChange={handleDate} />
      <CalendarCard  />
    </div>
  );
}
