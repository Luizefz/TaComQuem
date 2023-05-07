import React, { useRef } from 'react'
import styles from './Calendar.module.scss'
import { motion } from "framer-motion";
import CalendarDay from '../CalendarDay'
import CalendarMonth from '../CalendarMonth';
import { ICalendar, IMonthDays } from '../../shared/Interfaces/ICalendar';

function Calendar({ month, year }: ICalendar) {

    const constraintsRef = useRef(null);

    function getDaysInMonth(month: number, year: number) {
        let date = new Date(year, month, 1);
        let days = [];
        while (date.getMonth() === month) {
            days.push({ 'id': days.length, 'date': new Date(date), 'DOTWeek': date.getDay() });
            date.setDate(date.getDate() + 1);
        }
        return days;
    };

    let monthDays: IMonthDays[] = getDaysInMonth(month, year);

    return (
        <div className={styles.container}>

            <CalendarMonth id={month} date={new Date(year, month, 1)} />

            <motion.ul
                className={styles.container__calendar_list}
                ref={constraintsRef}
            >
                <motion.li
                    className={styles.container__calendar_days}
                    drag="x"
                    dragConstraints={constraintsRef}
                >
                    {monthDays.map(day =>
                        <CalendarDay
                            key={day.id}
                            id={day.id}
                            date={day.date}
                            DOTWeek={day.DOTWeek}
                        />
                    )}
                </motion.li>
            </motion.ul>
        </div >
    )
}

export default Calendar