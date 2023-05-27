import React, { useState } from 'react'
import styles from '../Calendar.module.scss'
import { motion } from "framer-motion";
import { IMonthDays } from '../../../shared/Interfaces/ICalendar';

function CalendarDay({ id, date, toDay, updateScrollPosition, DOTWeek = 0 }: IMonthDays) {

    const [isSelected, setIsSelected] = useState(false);
    let day = date.getDate();
    let shortDOTWeek = [
        'Dom',
        'Seg',
        'Ter',
        'Qua',
        'Qui',
        'Sex',
        'Sab'
    ];

    function isToDay() {
        const isToday = date.toLocaleDateString() === toDay?.toLocaleDateString();
        if (isToday && updateScrollPosition) {
            updateScrollPosition(id);
        }
        return isToday;
    }

    return (
        <motion.button
            className={styles.container__calendar_days_button}
            onClick={() => setIsSelected(!isSelected)}
            style={{ backgroundColor: isSelected ? '#AF6538' : isToDay() ? '#1E1E1E' : '' }}
            whileHover={{ scale: 1.1, border: 'solid 1px #AF6538' }}
            whileTap={{ scale: 0.9, border: 'solid 1px #AF6538' }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            <h2>{shortDOTWeek[DOTWeek]}</h2>
            <h2>{day}</h2>
        </motion.button>
    )
}

export default CalendarDay