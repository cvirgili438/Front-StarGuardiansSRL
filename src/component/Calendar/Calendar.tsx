import React, { useContext, useEffect, useState } from 'react'
import { Month } from '../../constant/enum'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useLocalStorage } from '../../hooks/useApp'
import { Auth } from '../../App'
import { AppContext } from '../../context/AppContext'

export default function Calendar() {
  const api = useContext(AppContext)
  const [user,setUser] = useLocalStorage<Auth>('User',Object)

   const [date,setDate] =useState({
    date:new Date()
   })
   const [loading,setLoading]=useState(true)
   function handleDate (e:Date){
    
    setDate({date:e})
    console.log(date,e)
   }
   useEffect(()=>{
      
   },[])

   
  return (
    <div>
      calendar
      <div></div>
      <DatePicker selected={date.date} onChange={handleDate} />
      
    </div>
  )
}
