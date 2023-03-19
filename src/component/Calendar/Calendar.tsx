import React, { useContext, useEffect, useState } from "react";
import { Month } from "../../constant/enum";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLocalStorage } from "../../hooks/useApp";
import { Auth } from "../../App";
import { AppContext } from "../../context/AppContext";
import style from "./Calendar.module.css";
import CalendarCard from "./CalendarCard";
import { CalendarTD } from "../../constant/types";


export default function Calendar() {
  const {getUserSchedule} = useContext(AppContext);
  const [user, setUser] = useLocalStorage<Auth>("User", Object);
  console.log(process.env.REACT_APP_URL);
  const [date, setDate] = useState({
    date: new Date(),
  });
  function handleDate(e: Date) {
    setDate({ date: e });    
  }
  useEffect(() => {
     async function getSchedule( body:CalendarTD):Promise<void> {
       const response =  await getUserSchedule(body)
       console.log(await response)
     }  
     getSchedule({
      id:user.user,
      month:date.date.getMonth(),
      token:user.token,
      year:date.date.getFullYear()
     })
    
 
     

  }, []);
  
  return (
    <div className={style.main_div}>
      calendar
      
      <DatePicker selected={date.date} onChange={handleDate} />
      <CalendarCard  />
    </div>
  );
}
