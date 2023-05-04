import React, { useState } from 'react'
import styles from './CalendarDay.module.scss'
import { motion } from "framer-motion";
import { IMonthDays } from '../../shared/Interfaces/IMonthDays'

function CalendarDay({ DOTWeek, monthDay }: IMonthDays) {

    const [isSelected, setIsSelected] = useState(false);

    return (
        <motion.button
            className={styles.calendar_day_button}
            style={isSelected ? { backgroundColor: '#AF6538' } : { backgroundColor: '#000' }}
            onClick={() => setIsSelected(!isSelected)}
            whileTap={{ scale: 0.8, border: 'solid 1px #AF6538' }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            <h2>{DOTWeek}</h2>
            <h2>{monthDay}</h2>
        </motion.button>
    )
}

export default CalendarDay