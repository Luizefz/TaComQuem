import React, { useState } from 'react'
import { ICalendar } from '../../../shared/Interfaces/ICalendar';
import styles from '../Calendar.module.scss';

function CalendarMonth({ monthIndex = 0 }: Partial<ICalendar>) {

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

    const [monthSelector, setMonthSelector] = useState(months[monthIndex])

    return (
        <select
            className={styles.container__calendar_month}
            value={monthSelector}
            onChange={e => setMonthSelector(e.target.value)}
        >
            {months.map(month =>
                <option key={month} value={month}>{month}</option>
            )}
        </select>
    )
}

export default CalendarMonth