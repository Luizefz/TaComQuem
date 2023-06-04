import React, { createContext, useState } from 'react'
import { ICalendar, ICalendarContext, IMonthDays } from '../../shared/Interfaces/ICalendar';

export const CalendarContext = createContext({} as ICalendarContext);
CalendarContext.displayName = "Calendar";

export const CalendarProvider = ({ children }: { children: React.ReactNode }) => {
    const [monthDays, setMonthDays] = useState<IMonthDays[]>([]);
    const [toDay] = useState(new Date())
    const [scrollDrag, setScrollDrag] = useState(0);
    const [monthIndex, setMonthIndex] = useState(toDay.getMonth());
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
        (scrollPosition >= 26) ? (
            setTimeout(() => {
                return setScrollDrag(26 * -61.5);
            }, 800)
        ) : (
            setTimeout(() => {
                return setScrollDrag(scrollPosition * -62);
            }, 800)
        )
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
