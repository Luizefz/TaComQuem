import React, { useRef } from 'react'
import styles from './Calendar.module.scss'
import { motion } from "framer-motion";
import CalendarDay from '../CalendarDay'
import { IMonthDays } from '../../shared/Interfaces/IMonthDays'

function Calendar() {

    const constraintsRef = useRef(null);

    const monthDays: IMonthDays[] = [
        { 'DOTWeek': 'Sab', 'monthDay': 1 },
        { 'DOTWeek': 'Dom', 'monthDay': 2 },
        { 'DOTWeek': 'Seg', 'monthDay': 3 },
        { 'DOTWeek': 'Ter', 'monthDay': 4 },
        { 'DOTWeek': 'Qua', 'monthDay': 5 },
        { 'DOTWeek': 'Qui', 'monthDay': 6 },
        { 'DOTWeek': 'Sab', 'monthDay': 7 }
    ]

    return (
        <div className={styles.container}>
            <h1 className={styles.container__calendar_month}>
                Março
            </h1>
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
                            DOTWeek={day.DOTWeek}
                            monthDay={day.monthDay}
                        />
                    )}
                </motion.li>
            </motion.ul>
        </div >
    )
}

export default Calendar