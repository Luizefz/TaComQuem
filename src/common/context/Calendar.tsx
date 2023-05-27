import React, { createContext, useState } from 'react'
import { ICalendar, ICalendarContext, IMonthDays } from '../../shared/Interfaces/ICalendar';
//@ts-ignore
export const CalendarContext = createContext<ICalendarContext>();
CalendarContext.displayName = "Calendar";

export const CalendarProvider = ({ children }: { children: React.ReactNode }) => {
    const [monthDays, setMonthDays] = useState<IMonthDays[]>([]);
    const [toDay] = useState(new Date())
    const [scrollDrag, setScrollDrag] = useState(0);
    const [monthIndex, setMonthIndex] = useState(0);
    const year = toDay.getFullYear();

    const getDaysInMonth = ({ monthIndex, year }: ICalendar) => {
        let date = new Date(year, monthIndex, 1);
        let days: IMonthDays[] = [];
        while (date.getMonth() === monthIndex) {
            days.push({ id: days.length, date: new Date(date), DOTWeek: date.getDay() });
            date.setDate(date.getDate() + 1);
        }
        return days;
    };

    const scrollXPosition = (scrollPosition: number) => {
        if (scrollPosition >= 26) {
            return setScrollDrag(26 * -62);
        }
        return setScrollDrag(scrollPosition * -62);

    };

    return (
        <CalendarContext.Provider
            value={{
                monthDays,
                setMonthDays,
                toDay,
                getDaysInMonth,
                scrollXPosition,
                scrollDrag,
                monthIndex,
                setMonthIndex,
                year
            }}>
            {children}
        </CalendarContext.Provider>
    )
}
