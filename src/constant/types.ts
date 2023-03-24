import { type Month } from './enum'

export interface CalendarCardType {
  calendar: Date
}

export interface CalendarTD {
  month: number
  year: number
  id: string
  token: string
}
export interface CalendarObject {
  startTime: Date
  endTime: Date
}
export interface returnSchedule {
  dayOfWeek: number
  endTime: string
  month: Month
  startTime: string
  year: number
}
