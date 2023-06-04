import React, { useState, useContext, useEffect } from 'react'
import styles from '../Calendar.module.scss'
import { motion } from "framer-motion";
import { IMonthDays } from '../../../shared/Interfaces/ICalendar';
import { CalendarContext } from '../../../common/context/Calendar';
import { CardsContext } from '../../../common/context/Cards';

function CalendarDay({ id, date, toDay, DOTWeek = 0 }: IMonthDays) {

    const { setSelectedDay } = useContext(CardsContext)
    const [isSelected, setIsSelected] = useState(false);
    const { scrollXPosition } = useContext(CalendarContext)

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
        if (isToday) {
            scrollXPosition(id);
        }
        return isToday;
    }

    useEffect(() => {
        if (!isSelected) {
            setSelectedDay('')
        } else {
            setSelectedDay(date.toLocaleDateString())
        }
    }, [isSelected])

    return (
        <motion.button
            className={styles.container__calendar_days_button}
            onTap={() => setIsSelected(!isSelected)}
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