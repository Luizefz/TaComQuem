import React, { useContext, useEffect, useRef } from 'react'
import styles from './Calendar.module.scss'
import CalendarDay from './CalendarDay'
import CalendarMonth from './CalendarMonth';
import { motion } from "framer-motion";
import { ICalendar, IMonthDays } from '../../shared/Interfaces/ICalendar';
import { CalendarContext } from '../../common/context/Calendar';


function Calendar({ monthIndex, year }: ICalendar) {

    const { monthDays, setMonthDays, toDay, getDaysInMonth, scrollXPosition, scrollDrag } = useContext(CalendarContext);
    const constraintsRef = useRef(null);

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
                    {monthDays.map((day: IMonthDays) =>
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