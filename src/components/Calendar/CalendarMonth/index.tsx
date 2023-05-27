import React, { useContext } from 'react'
import styles from '../Calendar.module.scss';
import { CalendarContext } from '../../../common/context/Calendar';

function CalendarMonth() {

    const { monthIndex, setMonthIndex } = useContext(CalendarContext)

    let months = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"
    ];

    return (
        <select
            className={styles.container__calendar_month}
            value={monthIndex}
            onChange={e => setMonthIndex(+e.target.value)}
        >
            {months.map((month, i) =>
                <option key={month} value={i}>{month}</option>
            )}
        </select>
    )
}

export default CalendarMonth