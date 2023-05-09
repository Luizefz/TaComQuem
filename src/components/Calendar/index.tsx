import React, { useEffect, useRef, useState } from 'react'
import styles from './Calendar.module.scss'
import CalendarDay from '../CalendarDay'
import CalendarMonth from '../CalendarMonth';
import { motion, useMotionValue } from "framer-motion";
import { ICalendar, IMonthDays } from '../../shared/Interfaces/ICalendar';

function Calendar({ month, year }: ICalendar) {

    const constraintsRef = useRef(null);
    const [monthDays, setMonthDays] = useState<IMonthDays[]>([]);
    const [toDay] = useState(new Date())
    const [scrollDrag, setscrollDrag] = useState<number>(0);
    const dragPosition = useMotionValue(0);

    const scrollXPosition = (scrollPosition: any) => {
        setscrollDrag(scrollPosition * -62);
    };

    const getDaysInMonth = (month: number, year: number) => {
        let date = new Date(year, month, 1);
        let days = [];
        while (date.getMonth() === month) {
            days.push({ id: days.length, date: new Date(date), DOTWeek: date.getDay() });
            date.setDate(date.getDate() + 1);
        }
        return days;
    };

    useEffect(() => {
        setMonthDays(getDaysInMonth(month, year))
        dragPosition.set(scrollDrag)
    }, [month, year, dragPosition, scrollDrag])

    return (
        <div className={styles.container}>
            <CalendarMonth month={month} />
            <motion.ul
                className={styles.container__calendar_list}
                ref={constraintsRef}
            >
                <motion.li
                    className={styles.container__calendar_days}
                    style={{ x: scrollDrag }}
                    drag="x"
                    dragConstraints={constraintsRef}
                >
                    {monthDays.map(day =>
                        <CalendarDay
                            key={day.id}
                            id={day.id}
                            date={day.date}
                            toDay={toDay}
                            DOTWeek={day.DOTWeek}
                            scrollPosition={scrollXPosition}
                        />
                    )}
                </motion.li>
            </motion.ul>
        </div >
    )
}

export default Calendar