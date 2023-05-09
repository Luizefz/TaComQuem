import React, { useState } from 'react'
import styles from './CalendarDay.module.scss'
import { motion } from "framer-motion";
import { IMonthDays } from '../../shared/Interfaces/ICalendar';

function CalendarDay({ id, date, toDay, scrollPosition, DOTWeek = 0 }: IMonthDays) {

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

    const scrollIndex = () => {
        if (id >= 26) {
            return 26;
        }
        return id
    };

    function isToDay() {
        if (date.getDate() === toDay?.getDate()) {
            let isToDay = true
            scrollPosition(scrollIndex())
            return isToDay
        }
    }

    return (
        <motion.button
            className={styles.calendar_day_button}
            onClick={() => setIsSelected(!isSelected)}
            style={(isSelected || isToDay()) ? { backgroundColor: '#AF6538' } : {}}
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