import React, { useEffect, useRef, useState } from 'react'
import styles from './Calendar.module.scss'
import CalendarDay from './CalendarDay'
import CalendarMonth from './CalendarMonth';
import { motion } from "framer-motion";
import { ICalendar, IMonthDays } from '../../shared/Interfaces/ICalendar';

function Calendar({ monthIndex, year }: ICalendar) {

    const constraintsRef = useRef(null);
    const [monthDays, setMonthDays] = useState<IMonthDays[]>([]);
    const [toDay] = useState(new Date())
    const [scrollDrag, setscrollDrag] = useState(0);

    const scrollXPosition = (scrollPosition: number) => {
        if (scrollPosition >= 26) {
            return setscrollDrag(26 * -62);
        }
        setscrollDrag(scrollPosition * -62);
    };

    const getDaysInMonth = ({ monthIndex, year }: ICalendar) => {
        let date = new Date(year, monthIndex, 1);
        let days = [];
        while (date.getMonth() === monthIndex) {
            days.push({ id: days.length, date: new Date(date), DOTWeek: date.getDay() });
            date.setDate(date.getDate() + 1);
        }
        return days;
    };

    useEffect(() => {
        setMonthDays(getDaysInMonth({ monthIndex, year }));
    }, [monthIndex, year])

    return (
        <div className={styles.container}>
            <CalendarMonth monthIndex={monthIndex} />
            <motion.ul
                className={styles.container__calendar_list}
                ref={constraintsRef}
            >
                <motion.li
                    className={styles.container__calendar_days}
                    drag="x"
                    dragConstraints={constraintsRef}
                    animate={{ x: scrollDrag }}
                    transition={{ type: 'spring', delay: 0.5, duration: 1, stiffness: 75, damping: 20 }}
                >
                    {monthDays.map(day =>
                        <CalendarDay
                            key={day.id}
                            id={day.id}
                            date={day.date}
                            toDay={toDay}
                            DOTWeek={day.DOTWeek}
                            updateScrollPosition={scrollXPosition}
                        />
                    )}
                </motion.li>
            </motion.ul>
        </div >
    )
}

export default Calendar